import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE_ORIGIN = 'https://picshift.app';
const LLMS_PROFILES = [
  { file: 'public/llms.txt', profile: 'short' },
  { file: 'public/llms-full.txt', profile: 'full' },
];
const DOC_PAGE_NAMES = [
  'format-compatibility.astro',
  'image-quality-vs-file-size.astro',
  'privacy-local-processing.astro',
  'size-increase-explainer.astro',
  'why-picshift.astro',
];
const REQUIRED_ROBOTS_USER_AGENTS = [
  '*',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
];
const REQUIRED_ROBOTS_PATHS = [
  '/',
  '/llms.txt',
  '/llms-full.txt',
  '/docs/why-picshift',
];
const STALE_OFFLINE_PATTERNS = [
  {
    pattern: /first page load[^\n]*(?:fetches|loads|requires)[^\n]*codecs?/i,
    message: 'must not claim that the first page load fetches/requires all codecs',
  },
  {
    pattern: /after (?:the )?first page load[^\n]*(?:offline|network disconnected|continues? to (?:convert|compress|function))/i,
    message: 'must not promise full offline conversion after only the first page load',
  },
  {
    pattern: /offline support after (?:the )?first page load/i,
    message: 'must not describe offline support as complete after the first page load',
  },
];

function readText(path) {
  return readFileSync(path, 'utf8');
}

function walkFiles(directory, predicate = () => true) {
  if (!existsSync(directory)) return [];
  const files = [];
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) files.push(...walkFiles(path, predicate));
    else if (predicate(path)) files.push(path);
  }
  return files;
}

export function isCalendarDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value ?? '')) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function sectionFirstBullet(text, heading) {
  const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = text.match(new RegExp(`^## ${escapedHeading}\\s*\\n-\\s+([^\\n]+)`, 'm'));
  return match?.[1].trim() ?? null;
}

function parseFrontmatter(source) {
  return source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
}

function frontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+?)["']?\\s*$`, 'm'));
  return match?.[1].trim() ?? null;
}

export function extractHttpUrls(text) {
  const matches = text.match(/https?:\/\/[^\s<>"'`]+/g) ?? [];
  return matches.map((match) => match.replace(/[),.;:!?]+$/g, ''));
}

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

/**
 * Parse robots groups without relying on the presence of a particular text
 * fragment. Multiple groups for the same user-agent remain separate and are
 * combined later when effective rules are evaluated.
 */
export function parseRobotsGroups(text) {
  const groups = [];
  let userAgents = [];
  let rules = [];
  let hasGroupDirective = false;

  const flush = () => {
    if (userAgents.length > 0) groups.push({ userAgents, rules });
    userAgents = [];
    rules = [];
    hasGroupDirective = false;
  };

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.replace(/\s*#.*$/, '').trim();
    if (!line) continue;
    const separator = line.indexOf(':');
    if (separator < 0) continue;
    const directive = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();

    if (directive === 'user-agent') {
      if (hasGroupDirective) flush();
      if (value) userAgents.push(value);
      continue;
    }

    if (userAgents.length === 0 || directive === 'sitemap') continue;
    hasGroupDirective = true;
    if (directive === 'allow' || directive === 'disallow') {
      rules.push({ directive, path: value });
    }
  }
  flush();
  return groups;
}

function robotsRuleMatch(pathname, rulePath) {
  if (!rulePath) return null;
  const endAnchored = rulePath.endsWith('$');
  const rawPattern = endAnchored ? rulePath.slice(0, -1) : rulePath;
  const escaped = rawPattern
    .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\*/g, '.*');
  const expression = new RegExp(`^${escaped}${endAnchored ? '$' : ''}`);
  if (!expression.test(pathname)) return null;
  return rawPattern.replace(/\*/g, '').length;
}

/** Evaluate the longest matching Allow/Disallow rule for a crawler and path. */
export function isRobotsPathAllowed(groups, userAgent, pathname) {
  const normalizedAgent = userAgent.toLowerCase();
  const matchingGroups = groups
    .map((group) => {
      const specificity = Math.max(...group.userAgents.map((token) => {
        const normalizedToken = token.toLowerCase();
        if (normalizedToken === '*') return 0;
        return normalizedAgent.includes(normalizedToken) ? normalizedToken.length : -1;
      }));
      return { group, specificity };
    })
    .filter(({ specificity }) => specificity >= 0);

  if (matchingGroups.length === 0) return true;
  const mostSpecific = Math.max(...matchingGroups.map(({ specificity }) => specificity));
  const rules = matchingGroups
    .filter(({ specificity }) => specificity === mostSpecific)
    .flatMap(({ group }) => group.rules);

  let winningRule = null;
  for (const rule of rules) {
    const matchLength = robotsRuleMatch(pathname, rule.path);
    if (matchLength === null) continue;
    if (
      !winningRule
      || matchLength > winningRule.matchLength
      || (matchLength === winningRule.matchLength && rule.directive === 'allow')
    ) {
      winningRule = { ...rule, matchLength };
    }
  }
  return winningRule?.directive !== 'disallow';
}

function auditRobots(root, errors) {
  const robotsPath = resolve(root, 'public/robots.txt');
  if (!existsSync(robotsPath)) {
    errors.push('Missing public/robots.txt.');
    return 0;
  }

  const text = readText(robotsPath);
  const groups = parseRobotsGroups(text);
  if (!groups.some((group) => group.userAgents.some((agent) => agent === '*'))) {
    errors.push('public/robots.txt must define a default User-agent: * group.');
  }

  const fullSiteBlocks = groups.flatMap((group) => group.rules
    .filter((rule) => rule.directive === 'disallow' && /^\/(?:\*\$?)?$/.test(rule.path))
    .map(() => group.userAgents.join(', ')));
  if (fullSiteBlocks.length > 0) {
    errors.push(`public/robots.txt must not contain a full-site Disallow for: ${fullSiteBlocks.join('; ')}.`);
  }

  const userAgentsToAudit = new Set([
    ...REQUIRED_ROBOTS_USER_AGENTS,
    ...groups.flatMap((group) => group.userAgents),
  ]);
  for (const userAgent of userAgentsToAudit) {
    for (const pathname of REQUIRED_ROBOTS_PATHS) {
      if (!isRobotsPathAllowed(groups, userAgent, pathname)) {
        errors.push(`public/robots.txt effectively blocks ${userAgent} from ${pathname}.`);
      }
    }
  }

  const sitemapDirectives = text.split(/\r?\n/)
    .map((line) => line.replace(/\s*#.*$/, '').trim())
    .map((line) => line.match(/^sitemap\s*:\s*(\S+)$/i)?.[1])
    .filter(Boolean);
  if (!sitemapDirectives.includes(`${SITE_ORIGIN}/sitemap-index.xml`)) {
    errors.push(`public/robots.txt must declare Sitemap: ${SITE_ORIGIN}/sitemap-index.xml.`);
  }

  return groups.length;
}

function parseSitemapPaths(xml) {
  const paths = new Set();
  const pattern = /<loc(?:\s[^>]*)?>([^<]+)<\/loc>/gi;
  let match;
  while ((match = pattern.exec(xml)) !== null) {
    const raw = match[1].trim().replaceAll('&amp;', '&');
    try {
      const url = new URL(raw);
      if (url.origin === SITE_ORIGIN) paths.add(normalizePath(url.pathname));
    } catch {
      // Invalid sitemap URLs are handled by the dedicated SEO audit.
    }
  }
  return paths;
}

function sourceRouteExists(root, pathname) {
  const path = normalizePath(pathname);
  if (path === '/') return existsSync(resolve(root, 'src/pages/index.astro'));

  const publicPath = resolve(root, `public${path}`);
  if (existsSync(publicPath) && statSync(publicPath).isFile()) return true;

  const segments = path.slice(1).split('/');
  const localeSource = existsSync(resolve(root, 'src/i18n/config.ts'))
    ? readText(resolve(root, 'src/i18n/config.ts'))
    : '';
  const localeArray = localeSource.match(/SUPPORTED_LOCALES\s*=\s*\[([^\]]+)\]/)?.[1] ?? '';
  const locales = new Set([...localeArray.matchAll(/["']([^"']+)["']/g)].map((match) => match[1]));
  const localized = locales.has(segments[0]) && segments[0] !== 'en';
  const routeSegments = localized ? segments.slice(1) : segments;
  const routePath = `/${routeSegments.join('/')}`;

  if (routePath === '/blog') return !localized && existsSync(resolve(root, 'src/pages/blog/index.astro'));
  if (routePath.startsWith('/blog/')) {
    const slug = routePath.slice('/blog/'.length);
    return !localized && existsSync(resolve(root, `src/content/blog/${slug}.md`));
  }
  if (routePath === '/docs') {
    return existsSync(resolve(root, localized ? 'src/pages/[lang]/docs/index.astro' : 'src/pages/docs/index.astro'));
  }
  if (routePath.startsWith('/docs/')) {
    const slug = routePath.slice('/docs/'.length);
    return existsSync(resolve(root, localized
      ? `src/pages/[lang]/docs/${slug}.astro`
      : `src/pages/docs/${slug}.astro`));
  }
  if (routePath === '/privacy') {
    return existsSync(resolve(root, localized ? 'src/pages/[lang]/privacy.astro' : 'src/pages/privacy.astro'));
  }

  const slug = routeSegments.join('/');
  if (!slug.includes('/')) {
    const toolsPath = resolve(root, 'src/data/tools.ts');
    const toolSource = existsSync(toolsPath) ? readText(toolsPath) : '';
    const toolSlugs = new Set([...toolSource.matchAll(/\bslug:\s*["']([^"']+)["']/g)].map((match) => match[1]));
    if (toolSlugs.has(slug)) return true;
    const staticPage = localized
      ? resolve(root, `src/pages/[lang]/${slug}.astro`)
      : resolve(root, `src/pages/${slug}.astro`);
    if (existsSync(staticPage)) return true;
  }

  return false;
}

function collectDeclaredContentDates(root, errors, today) {
  const dates = [];
  let docsPublished = null;
  let contentModified = null;
  const contentDatesPath = resolve(root, 'src/lib/contentDates.ts');
  if (!existsSync(contentDatesPath)) {
    errors.push('Missing src/lib/contentDates.ts.');
  } else {
    const contentDates = readText(contentDatesPath);
    for (const name of ['DOCS_DATE_PUBLISHED', 'CONTENT_DATE_MODIFIED']) {
      const value = contentDates.match(new RegExp(`${name}\\s*=\\s*["'](\\d{4}-\\d{2}-\\d{2})["']`))?.[1];
      if (!value || !isCalendarDate(value)) errors.push(`${name} must be a valid YYYY-MM-DD date.`);
      else {
        dates.push(value);
        if (value > today) errors.push(`${name} (${value}) must not be in the future.`);
        if (name === 'DOCS_DATE_PUBLISHED') docsPublished = value;
        if (name === 'CONTENT_DATE_MODIFIED') contentModified = value;
      }
    }
    if (docsPublished && contentModified && contentModified < docsPublished) {
      errors.push('CONTENT_DATE_MODIFIED must not precede DOCS_DATE_PUBLISHED.');
    }
  }

  const blogDirectory = resolve(root, 'src/content/blog');
  for (const file of walkFiles(blogDirectory, (path) => path.endsWith('.md'))) {
    const relative = file.slice(root.length + 1);
    const frontmatter = parseFrontmatter(readText(file));
    const publishedAt = frontmatterValue(frontmatter, 'publishedAt');
    const updatedAt = frontmatterValue(frontmatter, 'updatedAt');
    const author = frontmatterValue(frontmatter, 'author');
    if (author !== 'PicShift') errors.push(`${relative}: author must be the stable PicShift organization entity.`);
    if (!publishedAt || !isCalendarDate(publishedAt)) {
      errors.push(`${relative}: publishedAt must be a valid YYYY-MM-DD date.`);
      continue;
    }
    dates.push(publishedAt);
    if (publishedAt > today) errors.push(`${relative}: publishedAt must not be in the future.`);
    if (updatedAt) {
      if (!isCalendarDate(updatedAt)) errors.push(`${relative}: updatedAt must be a valid YYYY-MM-DD date.`);
      else {
        dates.push(updatedAt);
        if (updatedAt < publishedAt) errors.push(`${relative}: updatedAt must not precede publishedAt.`);
        if (updatedAt > today) errors.push(`${relative}: updatedAt must not be in the future.`);
      }
    }
  }
  return dates;
}

function auditAuthorAndModifiedDateSources(root, errors) {
  const entityPath = resolve(root, 'src/lib/schemaEntities.ts');
  const entitySource = existsSync(entityPath) ? readText(entityPath) : '';
  const canonicalEntityIsValid =
    /PICSHIFT_ORGANIZATION\s*=\s*\{/.test(entitySource)
    && /["']@type["']:\s*["']Organization["']/.test(entitySource)
    && /["']@id["']:\s*["']https:\/\/picshift\.app\/#organization["']/.test(entitySource)
    && /\bname:\s*["']PicShift["']/.test(entitySource)
    && /\burl:\s*["']https:\/\/picshift\.app["']/.test(entitySource);
  if (!canonicalEntityIsValid) {
    errors.push('src/lib/schemaEntities.ts must define the canonical PICSHIFT_ORGANIZATION with type, @id, name, and URL.');
  }

  const importsCanonicalOrganization = (source) => (
    /import\s*\{[^}]*\bPICSHIFT_ORGANIZATION\b[^}]*\}\s*from\s*["'][^"']*schemaEntities["']/s.test(source)
  );

  for (const base of ['src/pages/docs', 'src/pages/[lang]/docs']) {
    for (const name of DOC_PAGE_NAMES) {
      const path = resolve(root, base, name);
      const relative = path.slice(root.length + 1);
      if (!existsSync(path)) {
        errors.push(`Missing GEO reference page source: ${relative}.`);
        continue;
      }
      const source = readText(path);
      const inlineAuthor = /author:\s*\{\s*["']@type["']:\s*["']Organization["'],\s*name:\s*["']PicShift["']/s.test(source);
      const canonicalAuthor = /author:\s*PICSHIFT_ORGANIZATION/.test(source)
        && importsCanonicalOrganization(source);
      if (!inlineAuthor && !(canonicalEntityIsValid && canonicalAuthor)) {
        errors.push(`${relative}: structured-data author must be Organization/PicShift.`);
      }
      const inlinePublisher = /publisher:\s*\{\s*["']@type["']:\s*["']Organization["'],\s*name:\s*["']PicShift["']/s.test(source);
      const canonicalPublisher = /publisher:\s*PICSHIFT_ORGANIZATION/.test(source)
        && importsCanonicalOrganization(source);
      if (!inlinePublisher && !(canonicalEntityIsValid && canonicalPublisher)) {
        errors.push(`${relative}: structured-data publisher must be Organization/PicShift.`);
      }
      if (!/\bdateModified\b/.test(source) || !/data-date-modified/.test(source)) {
        errors.push(`${relative}: dateModified must be present in structured data and visible markup.`);
      }
      if (/["']@type["']:\s*["']Person["']|PicShift Creator/.test(source)) {
        errors.push(`${relative}: do not create a separate Person/PicShift Creator identity.`);
      }
    }
  }

  const blogTemplatePath = resolve(root, 'src/pages/blog/[slug].astro');
  if (!existsSync(blogTemplatePath)) {
    errors.push('Missing src/pages/blog/[slug].astro.');
    return;
  }
  const blogTemplate = readText(blogTemplatePath);
  if (!/dateModified:\s*\(updatedAt\s*\?\?\s*publishedAt\)\.toISOString\(\)/.test(blogTemplate)) {
    errors.push('Blog Article structured data must derive dateModified from updatedAt with publishedAt fallback.');
  }
  const blogUsesCanonicalEntity = /author:\s*PICSHIFT_ORGANIZATION/.test(blogTemplate)
    && /publisher:\s*PICSHIFT_ORGANIZATION/.test(blogTemplate)
    && importsCanonicalOrganization(blogTemplate);
  const blogUsesValidInlineEntity = /author:\s*\{\s*["']@type["']:\s*["']Organization["'],\s*name:\s*author,\s*url:\s*["']https:\/\/picshift\.app["']\s*\}/s.test(blogTemplate);
  if (!(canonicalEntityIsValid && blogUsesCanonicalEntity) && !blogUsesValidInlineEntity) {
    errors.push('Blog Article structured-data author must resolve to the canonical PicShift Organization URL.');
  }
}

export function auditGeo({ root = process.cwd(), today = new Date().toISOString().slice(0, 10) } = {}) {
  const absoluteRoot = resolve(root);
  const errors = [];
  const warnings = [];
  const profileData = [];
  const allInternalUrls = new Set();

  if (!isCalendarDate(today)) throw new Error('auditGeo today must be YYYY-MM-DD.');

  const declaredDates = collectDeclaredContentDates(absoluteRoot, errors, today);
  const latestContentDate = declaredDates.sort().at(-1) ?? null;
  const robotsGroups = auditRobots(absoluteRoot, errors);

  for (const descriptor of LLMS_PROFILES) {
    const path = resolve(absoluteRoot, descriptor.file);
    if (!existsSync(path)) {
      errors.push(`Missing ${descriptor.file}.`);
      continue;
    }
    const text = readText(path);
    const updated = sectionFirstBullet(text, 'Last updated');
    const version = sectionFirstBullet(text, 'Version');
    const profile = text.match(/^- Profile:\s*([^\n]+)$/m)?.[1].trim() ?? null;

    if (!updated || !isCalendarDate(updated)) errors.push(`${descriptor.file}: Last updated must be a valid YYYY-MM-DD date.`);
    else {
      if (updated > today) errors.push(`${descriptor.file}: Last updated must not be in the future.`);
      if (latestContentDate && updated < latestContentDate) {
        warnings.push(`${descriptor.file}: Last updated ${updated} is older than declared site content ${latestContentDate}; review whether the optional summary needs a factual refresh.`);
      }
    }
    if (!version || !/^\d{4}-\d{2}-\d{2}\.\d+$/.test(version)) {
      errors.push(`${descriptor.file}: Version must use YYYY-MM-DD.N.`);
    } else if (updated && !version.startsWith(`${updated}.`)) {
      errors.push(`${descriptor.file}: Version ${version} must start with its Last updated date ${updated}.`);
    }
    if (profile !== descriptor.profile) errors.push(`${descriptor.file}: expected Profile: ${descriptor.profile}.`);

    for (const stale of STALE_OFFLINE_PATTERNS) {
      if (stale.pattern.test(text)) errors.push(`${descriptor.file}: ${stale.message}.`);
    }
    if (!/(?:successful(?:ly)? (?:online )?(?:use|request)|loaded successfully)[^\n]*codec|codec[^\n]*(?:successful(?:ly)? (?:online )?(?:use|request)|loaded successfully)/i.test(text)) {
      errors.push(`${descriptor.file}: explain that a workflow's codec must load during a successful online use before offline reuse.`);
    }

    for (const rawUrl of extractHttpUrls(text)) {
      let url;
      try {
        url = new URL(rawUrl);
      } catch {
        errors.push(`${descriptor.file}: invalid URL ${rawUrl}.`);
        continue;
      }
      if (url.hostname === 'picshift.app' || url.hostname.endsWith('.picshift.app')) {
        if (url.origin !== SITE_ORIGIN || url.username || url.password || url.port || url.hash || url.search) {
          errors.push(`${descriptor.file}: internal URL must be a canonical ${SITE_ORIGIN} URL without credentials, port, query, or fragment: ${rawUrl}.`);
        } else {
          allInternalUrls.add(url.href);
        }
      }
    }
    profileData.push({ ...descriptor, updated, version, profile });
  }

  if (profileData.length === LLMS_PROFILES.length) {
    if (new Set(profileData.map((item) => item.updated)).size > 1) errors.push('llms profiles must share the same Last updated date.');
    if (new Set(profileData.map((item) => item.version)).size > 1) errors.push('llms profiles must share the same version number.');
  }

  const sitemapPath = resolve(absoluteRoot, 'dist/sitemap-0.xml');
  const sitemapPaths = existsSync(sitemapPath) ? parseSitemapPaths(readText(sitemapPath)) : null;
  for (const rawUrl of allInternalUrls) {
    const url = new URL(rawUrl);
    const path = normalizePath(url.pathname);
    const publicFile = resolve(absoluteRoot, `public${path}`);
    const publicResource = existsSync(publicFile) && statSync(publicFile).isFile();
    const sourceRoute = sourceRouteExists(absoluteRoot, path);
    if (!publicResource && !sourceRoute) {
      errors.push(`llms internal URL does not match a local source route: ${rawUrl}.`);
    } else if (!publicResource && sitemapPaths && !sitemapPaths.has(path)) {
      warnings.push(`llms internal URL exists in source but is absent from dist/sitemap-0.xml; rebuild before release: ${rawUrl}.`);
    }
  }
  if (!sitemapPaths) warnings.push('dist/sitemap-0.xml not found; llms URLs were checked against local source routes instead.');

  auditAuthorAndModifiedDateSources(absoluteRoot, errors);

  return {
    errors,
    warnings,
    metrics: {
      profiles: profileData.length,
      internalUrls: allInternalUrls.size,
      latestContentDate,
      robotsGroups,
      routeSource: sitemapPaths
        ? 'local source routes with dist/sitemap-0.xml cross-check'
        : 'local source routes',
    },
  };
}

function main() {
  const result = auditGeo();
  for (const warning of result.warnings) console.warn(`GEO warning: ${warning}`);
  if (result.errors.length > 0) {
    console.error(`GEO audit failed with ${result.errors.length} error(s):`);
    for (const error of result.errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }
  console.log(`GEO audit passed: ${result.metrics.profiles} llms profiles, ${result.metrics.robotsGroups} robots groups, ${result.metrics.internalUrls} internal URLs, latest declared content ${result.metrics.latestContentDate}, routes checked via ${result.metrics.routeSource}.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
