import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, basename, relative } from 'node:path';

const toolsPath = resolve(process.cwd(), 'src/data/tools.ts');
const source = readFileSync(toolsPath, 'utf8');
const SITE_TIME_ZONE = 'Asia/Shanghai';

const toolPattern =
  /slug:\s*'([^']+)'\s*,[\s\S]*?title:\s*'([^']+)'\s*,[\s\S]*?description:\s*\n\s*'([^']+)'\s*,/g;

const STOPWORDS = new Set([
  'to',
  'for',
  'and',
  'the',
  'with',
  'in',
  'of',
  'converter',
  'picshift',
  'free',
  'private',
  'no',
  'upload',
  'images',
  'image',
]);

function normalizeText(value) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function tokenize(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter((token) => token && !STOPWORDS.has(token));
}

function inferIntentBucket(text) {
  const tokens = new Set(tokenize(text));

  if (
    tokens.has('compatibility') ||
    tokens.has('legacy') ||
    tokens.has('anywhere') ||
    tokens.has('support')
  ) {
    return 'compatibility';
  }
  if (
    tokens.has('lossless') ||
    tokens.has('editing') ||
    tokens.has('detail') ||
    tokens.has('workflow')
  ) {
    return 'lossless-editing';
  }
  if (
    tokens.has('compression') ||
    tokens.has('smaller') ||
    tokens.has('faster') ||
    tokens.has('delivery') ||
    tokens.has('size')
  ) {
    return 'compression-speed';
  }
  if (tokens.has('transparent') || tokens.has('transparency')) {
    return 'transparency';
  }
  return 'general';
}

function jaccard(aTokens, bTokens) {
  const a = new Set(aTokens);
  const b = new Set(bTokens);
  let intersection = 0;
  for (const token of a) {
    if (b.has(token)) intersection += 1;
  }
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const tools = [];
for (const match of source.matchAll(toolPattern)) {
  const [, slug, title, description] = match;
  tools.push({ slug, title, description });
}

if (tools.length === 0) {
  console.error('SEO audit failed: no tool metadata parsed from src/data/tools.ts');
  process.exit(1);
}

const titleMap = new Map();
const descriptionMap = new Map();
for (const tool of tools) {
  const titleKey = normalizeText(tool.title);
  const descKey = normalizeText(tool.description);
  titleMap.set(titleKey, [...(titleMap.get(titleKey) ?? []), tool.slug]);
  descriptionMap.set(descKey, [...(descriptionMap.get(descKey) ?? []), tool.slug]);
}

const duplicateTitles = [...titleMap.values()].filter((slugs) => slugs.length > 1);
const duplicateDescriptions = [...descriptionMap.values()].filter((slugs) => slugs.length > 1);

const highSimilarityPairs = [];
for (let i = 0; i < tools.length; i += 1) {
  for (let j = i + 1; j < tools.length; j += 1) {
    const left = tools[i];
    const right = tools[j];
    const score = jaccard(tokenize(left.title), tokenize(right.title));
    if (score >= 0.75) {
      highSimilarityPairs.push({
        left: left.slug,
        right: right.slug,
        score: score.toFixed(2),
      });
    }
  }
}

const lengthWarnings = [];
for (const tool of tools) {
  if (tool.title.length > 65) {
    lengthWarnings.push(`${tool.slug}: title length ${tool.title.length} (>65)`);
  }
  if (tool.description.length > 165) {
    lengthWarnings.push(`${tool.slug}: description length ${tool.description.length} (>165)`);
  }
}

console.log('=== SEO Audit: Tool Metadata ===');
console.log(`Tools parsed: ${tools.length}`);
console.log('');

console.log('Intent buckets:');
for (const tool of tools) {
  const bucket = inferIntentBucket(`${tool.title} ${tool.description}`);
  console.log(`- ${tool.slug}: ${bucket}`);
}
console.log('');

if (duplicateTitles.length === 0) {
  console.log('Duplicate titles: none');
} else {
  console.log('Duplicate titles:');
  for (const group of duplicateTitles) {
    console.log(`- ${group.join(', ')}`);
  }
}

if (duplicateDescriptions.length === 0) {
  console.log('Duplicate descriptions: none');
} else {
  console.log('Duplicate descriptions:');
  for (const group of duplicateDescriptions) {
    console.log(`- ${group.join(', ')}`);
  }
}

if (highSimilarityPairs.length === 0) {
  console.log('High-similarity titles (Jaccard >= 0.75): none');
} else {
  console.log('High-similarity title pairs (Jaccard >= 0.75):');
  for (const pair of highSimilarityPairs) {
    console.log(`- ${pair.left} <-> ${pair.right}: ${pair.score}`);
  }
}

if (lengthWarnings.length === 0) {
  console.log('Length warnings: none');
} else {
  console.log('Length warnings:');
  for (const warning of lengthWarnings) {
    console.log(`- ${warning}`);
  }
}

if (
  duplicateTitles.length > 0 ||
  duplicateDescriptions.length > 0 ||
  highSimilarityPairs.length > 0
) {
  process.exitCode = 1;
}

// ---------------------------------------------------------------------------
// Blog frontmatter audit
//
// Audit all blog posts under src/content/blog/. Missing or duplicated metadata
// remains a hard error; approximate search-snippet lengths are advisory because
// rendering varies by device and query.
// ---------------------------------------------------------------------------

const blogDir = resolve(process.cwd(), 'src/content/blog');
const publicBlogDir = resolve(process.cwd(), 'public/blog');

const TITLE_MAX = 65;
const DESC_MAX = 165;
const TITLE_MIN = 30;
const DESC_MIN = 120;

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]+?)\n---/);
  if (!match) return null;
  const body = match[1];
  const result = {};
  const lines = body.split('\n');
  for (const line of lines) {
    const m = line.match(/^([a-zA-Z]+):\s*(.+)$/);
    if (!m) continue;
    const key = m[1];
    let value = m[2].trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    } else if (value.startsWith("'") && value.endsWith("'")) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }
  return result;
}

const blogFiles = existsSync(blogDir)
  ? readdirSync(blogDir).filter((name) => name.endsWith('.md'))
  : [];

const blogPosts = [];
for (const file of blogFiles) {
  const slug = basename(file, '.md');
  const raw = readFileSync(resolve(blogDir, file), 'utf8');
  const fm = parseFrontmatter(raw);
  if (!fm) continue;
  blogPosts.push({ slug, file, ...fm });
}

console.log('');
console.log('=== SEO Audit: Blog Frontmatter ===');
console.log(`Blog posts parsed: ${blogPosts.length}`);
console.log('');

const blogWarnings = [];
const blogErrors = [];

const blogTitleMap = new Map();
const blogDescMap = new Map();

for (const post of blogPosts) {
  if (!post.title) {
    blogErrors.push(`${post.slug}: missing title`);
  } else {
    const len = post.title.length;
    if (len > TITLE_MAX) {
      blogWarnings.push(`${post.slug}: title length ${len} (>${TITLE_MAX}) — "${post.title}"`);
    } else if (len < TITLE_MIN) {
      blogWarnings.push(`${post.slug}: title length ${len} (<${TITLE_MIN}) — "${post.title}"`);
    }
    const key = normalizeText(post.title);
    blogTitleMap.set(key, [...(blogTitleMap.get(key) ?? []), post.slug]);
  }

  if (!post.description) {
    blogErrors.push(`${post.slug}: missing description`);
  } else {
    const len = post.description.length;
    if (len > DESC_MAX) {
      blogWarnings.push(`${post.slug}: description length ${len} (>${DESC_MAX})`);
    } else if (len < DESC_MIN) {
      blogWarnings.push(`${post.slug}: description length ${len} (<${DESC_MIN})`);
    }
    const key = normalizeText(post.description);
    blogDescMap.set(key, [...(blogDescMap.get(key) ?? []), post.slug]);
  }

  if (post.cover) {
    const coverFilename = post.cover.replace(/^\/blog\//, '');
    const coverPath = resolve(publicBlogDir, coverFilename);
    if (!existsSync(coverPath)) {
      blogErrors.push(`${post.slug}: cover file missing — ${post.cover}`);
    } else if (!coverFilename.startsWith(`${post.slug}-`)) {
      blogErrors.push(
        `${post.slug}: cover filename does not match {slug}-{purpose}.webp pattern — got "${coverFilename}"`,
      );
    } else if (!coverFilename.endsWith('.webp')) {
      blogErrors.push(
        `${post.slug}: cover must be .webp per PLAYBOOK §配图 Workflow — got "${coverFilename}"`,
      );
    }
  } else {
    blogErrors.push(`${post.slug}: missing cover`);
  }
}

const dupBlogTitles = [...blogTitleMap.values()].filter((slugs) => slugs.length > 1);
const dupBlogDescs = [...blogDescMap.values()].filter((slugs) => slugs.length > 1);
for (const group of dupBlogTitles) {
  blogErrors.push(`duplicate blog title across: ${group.join(', ')}`);
}
for (const group of dupBlogDescs) {
  blogErrors.push(`duplicate blog description across: ${group.join(', ')}`);
}

const inlineImagePattern = /<img[^>]+src=["']\/blog\/([^"']+)["']/g;
for (const post of blogPosts) {
  const raw = readFileSync(resolve(blogDir, post.file), 'utf8');
  const hits = [...raw.matchAll(inlineImagePattern)];
  for (const hit of hits) {
    const filename = hit[1];
    const path = resolve(publicBlogDir, filename);
    if (!existsSync(path)) {
      blogErrors.push(`${post.slug}: inline image missing — /blog/${filename}`);
    } else if (!filename.startsWith(`${post.slug}-`) && !filename.startsWith('og-')) {
      blogWarnings.push(
        `${post.slug}: inline image "${filename}" does not match {slug}-{purpose}.webp pattern (PLAYBOOK §配图 Workflow)`,
      );
    }
  }
}

console.log('Blog title / description summary:');
for (const post of blogPosts) {
  const titleLen = post.title?.length ?? 0;
  const descLen = post.description?.length ?? 0;
  console.log(`- ${post.slug}: title=${titleLen}, description=${descLen}`);
}
console.log('');

if (blogWarnings.length === 0) {
  console.log('Blog warnings: none');
} else {
  console.log('Blog warnings:');
  for (const warning of blogWarnings) {
    console.log(`- ${warning}`);
  }
}

if (blogErrors.length === 0) {
  console.log('Blog errors: none');
} else {
  console.log('Blog errors:');
  for (const error of blogErrors) {
    console.log(`- ${error}`);
  }
  process.exitCode = 1;
}

// ---------------------------------------------------------------------------
// Final HTML audit
//
// Source metadata checks cannot see layout suffixes, rendered hreflang graphs,
// broken internal routes, or malformed generated JSON-LD. Audit the production
// output as a hard gate so those regressions cannot ship unnoticed.
// ---------------------------------------------------------------------------

const distDir = resolve(process.cwd(), 'dist');
const SITE_ORIGIN = 'https://picshift.app';
const HREFLANG_LOCALES = new Map([
  ['en', ''],
  ['zh-hans', 'zh'],
  ['zh-hant', 'zh-Hant'],
  ['es', 'es'],
  ['fr', 'fr'],
  ['de', 'de'],
  ['ja', 'ja'],
  ['ko', 'ko'],
  ['pt', 'pt'],
  ['ru', 'ru'],
  ['ar', 'ar'],
  ['it', 'it'],
]);

function baseRouteWithoutLocale(route) {
  for (const prefix of [...HREFLANG_LOCALES.values()].filter(Boolean)) {
    if (route === `/${prefix}`) return '/';
    if (route.startsWith(`/${prefix}/`)) return route.slice(prefix.length + 1);
  }
  return route;
}

function expectedHreflangs(route) {
  if (route === '/404' || route === '/blog' || route.startsWith('/blog/')) return new Map();

  const baseRoute = baseRouteWithoutLocale(route);
  const expected = new Map();
  for (const [language, prefix] of HREFLANG_LOCALES) {
    const path = prefix
      ? `/${prefix}${baseRoute === '/' ? '' : baseRoute}`
      : baseRoute;
    expected.set(language, `${SITE_ORIGIN}${path === '/' ? '' : path}`);
  }
  expected.set('x-default', expected.get('en'));
  return expected;
}

function collectFiles(dir, predicate) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const path = resolve(dir, entry);
    if (statSync(path).isDirectory()) {
      files.push(...collectFiles(path, predicate));
    } else if (predicate(path)) {
      files.push(path);
    }
  }
  return files;
}

function decodeEntities(value) {
  const named = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: '\u00a0',
    quot: '"',
  };

  return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, token) => {
    if (token.startsWith('#x') || token.startsWith('#X')) {
      return String.fromCodePoint(Number.parseInt(token.slice(2), 16));
    }
    if (token.startsWith('#')) {
      return String.fromCodePoint(Number.parseInt(token.slice(1), 10));
    }
    return named[token.toLowerCase()] ?? entity;
  });
}

function parseAttributes(tag) {
  const attributes = {};
  const pattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of tag.matchAll(pattern)) {
    const key = match[1].toLowerCase();
    if (key.startsWith('<')) continue;
    attributes[key] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? '');
  }
  return attributes;
}

function tagsWithAttributes(html, tagName) {
  const pattern = new RegExp(`<${tagName}\\b[^>]*>`, 'gi');
  return [...html.matchAll(pattern)].map((match) => ({
    raw: match[0],
    attributes: parseAttributes(match[0]),
  }));
}

function generatedRoute(file) {
  const outputPath = relative(distDir, file).replaceAll('\\', '/');
  if (outputPath === 'index.html') return '/';
  return `/${outputPath}`.replace(/\/index\.html$/, '').replace(/\.html$/, '');
}

function normalizeSiteUrl(rawUrl, label, errors) {
  if (!/^https:\/\//i.test(rawUrl)) {
    errors.push(`${label}: SEO URL must be absolute HTTPS — "${rawUrl}"`);
  }

  let url;
  try {
    url = new URL(rawUrl, SITE_ORIGIN);
  } catch {
    errors.push(`${label}: invalid URL — "${rawUrl}"`);
    return null;
  }

  if (url.origin !== SITE_ORIGIN) {
    errors.push(`${label}: URL must use ${SITE_ORIGIN} — "${rawUrl}"`);
    return null;
  }
  if (url.search || url.hash) {
    errors.push(`${label}: SEO URL must not contain a query or fragment — "${rawUrl}"`);
  }
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    errors.push(`${label}: non-root URL has a trailing slash — "${rawUrl}"`);
  }

  return `${url.origin}${url.pathname === '/' ? '' : url.pathname}`;
}

function stripNonDocumentMarkup(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<template\b[\s\S]*?<\/template>/gi, '');
}

function normalizeDeclaredDate(value, label, errors) {
  const w3cDatePattern = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/;
  const dateKey = value.slice(0, 10);
  const parsed = new Date(value);
  if (!w3cDatePattern.test(value) || !isValidDateKey(dateKey) || Number.isNaN(parsed.getTime())) {
    errors.push(`${label}: invalid modification date — "${value}"`);
    return null;
  }
  return dateKey;
}

function collectStructuredModifiedDates(value, dates, label, errors) {
  if (Array.isArray(value)) {
    for (const item of value) collectStructuredModifiedDates(item, dates, label, errors);
    return;
  }
  if (!value || typeof value !== 'object') return;
  if (typeof value.dateModified === 'string') {
    const normalized = normalizeDeclaredDate(value.dateModified, label, errors);
    if (normalized) dates.add(normalized);
  }
  if (Array.isArray(value['@graph'])) {
    collectStructuredModifiedDates(value['@graph'], dates, label, errors);
  }
}

function isValidDateKey(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function dateKeyInTimeZone(date, timeZone) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(date).map(({ type, value }) => [type, value]),
  );
  return `${parts.year}-${parts.month}-${parts.day}`;
}

console.log('');
console.log('=== SEO Audit: Final HTML ===');

const finalErrors = [];
const finalWarnings = [];

if (!existsSync(distDir)) {
  finalErrors.push('dist/: missing production output; run pnpm build before pnpm seo:audit');
}

const htmlFiles = existsSync(distDir)
  ? collectFiles(distDir, (path) => path.endsWith('.html')).sort()
  : [];

if (htmlFiles.length === 0 && existsSync(distDir)) {
  finalErrors.push('dist/: no generated HTML files found; run pnpm build before pnpm seo:audit');
}

const routeMap = new Map();
const pages = [];
let totalJsonLd = 0;

for (const file of htmlFiles) {
  const route = generatedRoute(file);
  const label = route;
  const html = readFileSync(file, 'utf8');
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
  const documentMarkup = stripNonDocumentMarkup(html);

  if (!head) finalErrors.push(`${label}: missing <head>`);
  if (routeMap.has(route)) {
    finalErrors.push(`${label}: duplicate generated route`);
  } else {
    routeMap.set(route, file);
  }

  const titleMatches = [...head.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
  const title = titleMatches.length === 1
    ? decodeEntities(titleMatches[0][1].replace(/<[^>]+>/g, '').trim())
    : '';
  if (titleMatches.length !== 1) {
    finalErrors.push(`${label}: expected exactly one <title>, found ${titleMatches.length}`);
  } else if (!title) {
    finalErrors.push(`${label}: empty <title>`);
  } else if (title.length > TITLE_MAX) {
    finalWarnings.push(`${label}: rendered title length ${title.length} (>${TITLE_MAX})`);
  }

  const metaTags = tagsWithAttributes(head, 'meta');
  const descriptions = metaTags.filter(
    ({ attributes }) => attributes.name?.toLowerCase() === 'description',
  );
  const description = descriptions[0]?.attributes.content?.trim() ?? '';
  if (descriptions.length !== 1) {
    finalErrors.push(
      `${label}: expected exactly one meta description, found ${descriptions.length}`,
    );
  } else if (!description) {
    finalErrors.push(`${label}: empty meta description`);
  } else if (description.length > DESC_MAX) {
    finalWarnings.push(
      `${label}: rendered description length ${description.length} (>${DESC_MAX})`,
    );
  }

  const robotsContent = metaTags
    .filter(({ attributes }) => attributes.name?.toLowerCase() === 'robots')
    .map(({ attributes }) => attributes.content?.toLowerCase() ?? '')
    .join(',');
  const noindex = /(?:^|[\s,])noindex(?:$|[\s,])/.test(robotsContent);

  const linkTags = tagsWithAttributes(head, 'link');
  const canonicals = linkTags.filter(({ attributes }) =>
    (attributes.rel ?? '').toLowerCase().split(/\s+/).includes('canonical'),
  );
  let canonical = null;
  if (route === '/404' && canonicals.length !== 0) {
    finalErrors.push(`${label}: 404 page must not emit a canonical`);
  } else if (route !== '/404' && canonicals.length !== 1) {
    finalErrors.push(`${label}: expected exactly one canonical, found ${canonicals.length}`);
  } else if (route !== '/404' && !canonicals[0].attributes.href) {
    finalErrors.push(`${label}: canonical is missing href`);
  } else if (route !== '/404') {
    canonical = normalizeSiteUrl(
      canonicals[0].attributes.href,
      `${label} canonical`,
      finalErrors,
    );
    if (canonical) {
      const canonicalPath = new URL(canonical).pathname;
      if (canonicalPath !== route) {
        finalErrors.push(
          `${label}: canonical path does not match generated route — "${canonicalPath}"`,
        );
      }
    }
  }

  const alternates = [];
  const alternateLanguages = new Set();
  for (const { attributes } of linkTags) {
    const rel = (attributes.rel ?? '').toLowerCase().split(/\s+/);
    if (!rel.includes('alternate') || !attributes.hreflang) continue;
    const language = attributes.hreflang.toLowerCase();
    if (alternateLanguages.has(language)) {
      finalErrors.push(`${label}: duplicate hreflang "${language}"`);
    }
    alternateLanguages.add(language);
    if (!attributes.href) {
      finalErrors.push(`${label}: hreflang "${language}" is missing href`);
      continue;
    }
    const href = normalizeSiteUrl(
      attributes.href,
      `${label} hreflang "${language}"`,
      finalErrors,
    );
    if (href) alternates.push({ language, href });
  }

  const expectedAlternates = expectedHreflangs(route);
  for (const [language, expectedHref] of expectedAlternates) {
    const alternate = alternates.find((item) => item.language === language);
    if (!alternate) {
      finalErrors.push(`${label}: missing expected hreflang "${language}"`);
    } else if (alternate.href !== expectedHref) {
      finalErrors.push(
        `${label}: hreflang "${language}" points to "${alternate.href}", expected "${expectedHref}"`,
      );
    }
  }
  for (const alternate of alternates) {
    if (!expectedAlternates.has(alternate.language)) {
      finalErrors.push(`${label}: unexpected hreflang "${alternate.language}"`);
    }
  }
  if (expectedAlternates.size > 0 && (!canonical || !alternates.some(({ href }) => href === canonical))) {
    finalErrors.push(`${label}: hreflang cluster is missing a self-reference`);
  }

  const ogLocaleAlternates = metaTags.filter(
    ({ attributes }) => attributes.property?.toLowerCase() === 'og:locale:alternate',
  );
  if (alternates.length === 0 && ogLocaleAlternates.length > 0) {
    finalErrors.push(
      `${label}: emits og:locale:alternate without real hreflang alternate pages`,
    );
  }

  const h1Count = [...documentMarkup.matchAll(/<h1\b[^>]*>/gi)].length;
  if (h1Count !== 1) {
    finalErrors.push(`${label}: expected exactly one <h1>, found ${h1Count}`);
  }

  const jsonLdPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let jsonLdCount = 0;
  const structuredModifiedDates = new Set();
  for (const match of html.matchAll(jsonLdPattern)) {
    const attributes = parseAttributes(`<script ${match[1]}>`);
    if (attributes.type?.toLowerCase() !== 'application/ld+json') continue;
    jsonLdCount += 1;
    totalJsonLd += 1;
    try {
      const parsed = JSON.parse(match[2].trim());
      collectStructuredModifiedDates(
        parsed,
        structuredModifiedDates,
        `${label} JSON-LD #${jsonLdCount}`,
        finalErrors,
      );
    } catch (error) {
      finalErrors.push(`${label}: invalid JSON-LD #${jsonLdCount} — ${error.message}`);
    }
  }

  const internalLinks = [];
  for (const { attributes } of tagsWithAttributes(documentMarkup, 'a')) {
    const href = attributes.href;
    if (!href || href.startsWith('#') || /^(?:mailto:|tel:|javascript:)/i.test(href)) continue;
    let url;
    try {
      url = new URL(href, `${SITE_ORIGIN}${route}`);
    } catch {
      finalErrors.push(`${label}: invalid internal link — "${href}"`);
      continue;
    }
    if (url.hostname !== new URL(SITE_ORIGIN).hostname) continue;
    if (url.origin !== SITE_ORIGIN) {
      finalErrors.push(`${label}: internal link must use ${SITE_ORIGIN} — "${href}"`);
    }
    if (url.pathname !== '/' && url.pathname.endsWith('/')) {
      finalErrors.push(`${label}: internal link has a trailing slash — "${href}"`);
    }
    let pathname = url.pathname;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      finalErrors.push(`${label}: internal link has invalid URL encoding — "${href}"`);
    }
    internalLinks.push({ href, pathname });
  }

  const articleModifiedDates = [];
  for (const { attributes } of metaTags.filter(
    ({ attributes }) => attributes.property?.toLowerCase() === 'article:modified_time',
  )) {
    if (!attributes.content) continue;
    const normalized = normalizeDeclaredDate(
      attributes.content,
      `${label} article:modified_time`,
      finalErrors,
    );
    if (normalized) articleModifiedDates.push(normalized);
  }
  const visibleModifiedDates = [];
  for (const { attributes } of tagsWithAttributes(documentMarkup, 'time')) {
    if (!Object.hasOwn(attributes, 'data-date-modified')) continue;
    if (!attributes.datetime) {
      finalErrors.push(`${label}: visible modification <time> is missing datetime`);
      continue;
    }
    const normalized = normalizeDeclaredDate(
      attributes.datetime,
      `${label} visible modification time`,
      finalErrors,
    );
    if (normalized) visibleModifiedDates.push(normalized);
  }

  pages.push({
    route,
    title,
    description,
    noindex,
    canonical,
    alternates,
    internalLinks,
    structuredModifiedDates: [...structuredModifiedDates],
    articleModifiedDates,
    visibleModifiedDates,
  });
}

const canonicalMap = new Map();
const renderedTitleMap = new Map();
const renderedDescriptionMap = new Map();

for (const page of pages) {
  if (page.canonical) {
    if (canonicalMap.has(page.canonical)) {
      finalErrors.push(
        `${page.route}: duplicate canonical also used by ${canonicalMap.get(page.canonical).route}`,
      );
    } else {
      canonicalMap.set(page.canonical, page);
    }
  }
  if (page.title) {
    const key = normalizeText(page.title);
    renderedTitleMap.set(key, [...(renderedTitleMap.get(key) ?? []), page.route]);
  }
  if (page.description) {
    const key = normalizeText(page.description);
    renderedDescriptionMap.set(key, [
      ...(renderedDescriptionMap.get(key) ?? []),
      page.route,
    ]);
  }
}

for (const routes of renderedTitleMap.values()) {
  if (routes.length > 1) {
    finalErrors.push(`duplicate rendered title across: ${routes.join(', ')}`);
  }
}
for (const routes of renderedDescriptionMap.values()) {
  if (routes.length > 1) {
    finalErrors.push(`duplicate rendered description across: ${routes.join(', ')}`);
  }
}

for (const page of pages) {
  for (const { href, pathname } of page.internalLinks) {
    if (!routeMap.has(pathname)) {
      finalErrors.push(`${page.route}: broken internal link — "${href}"`);
    }
  }

  for (const alternate of page.alternates) {
    const target = canonicalMap.get(alternate.href);
    if (!target) {
      finalErrors.push(
        `${page.route}: hreflang "${alternate.language}" target does not exist — "${alternate.href}"`,
      );
      continue;
    }
    if (
      target !== page &&
      !target.alternates.some(({ href }) => href === page.canonical)
    ) {
      finalErrors.push(
        `${page.route}: hreflang target ${target.route} does not link back`,
      );
    }
  }
}

const sitemapIndexPath = resolve(distDir, 'sitemap-index.xml');
const sitemapChunkNames = existsSync(distDir)
  ? readdirSync(distDir).filter((name) => /^sitemap-(?!index)[^/]*\.xml$/.test(name))
  : [];
const referencedSitemapNames = new Set();

if (!existsSync(sitemapIndexPath)) {
  finalErrors.push('dist/: sitemap-index.xml is missing');
} else {
  const indexXml = readFileSync(sitemapIndexPath, 'utf8');
  if (!/<sitemapindex\b/i.test(indexXml)) {
    finalErrors.push('sitemap-index.xml: missing <sitemapindex> root');
  }
  for (const match of indexXml.matchAll(/<sitemap>([\s\S]*?)<\/sitemap>/gi)) {
    const rawUrl = decodeEntities(match[1].match(/<loc>([\s\S]*?)<\/loc>/i)?.[1]?.trim() ?? '');
    if (!rawUrl) {
      finalErrors.push('sitemap-index.xml: <sitemap> is missing <loc>');
      continue;
    }
    const url = normalizeSiteUrl(rawUrl, 'sitemap-index.xml <loc>', finalErrors);
    if (!url) continue;
    const pathname = new URL(url).pathname;
    const name = pathname.slice(1);
    if (!/^sitemap-(?!index)[^/]*\.xml$/.test(name)) {
      finalErrors.push(`sitemap-index.xml: invalid sitemap chunk target — "${rawUrl}"`);
      continue;
    }
    if (referencedSitemapNames.has(name)) {
      finalErrors.push(`sitemap-index.xml: duplicate sitemap chunk — "${rawUrl}"`);
    }
    referencedSitemapNames.add(name);
    if (!existsSync(resolve(distDir, name))) {
      finalErrors.push(`sitemap-index.xml: referenced chunk is missing — "${name}"`);
    }
  }
  if (referencedSitemapNames.size === 0) {
    finalErrors.push('sitemap-index.xml: contains no sitemap chunks');
  }
}

for (const name of sitemapChunkNames) {
  if (!referencedSitemapNames.has(name)) {
    finalErrors.push(`dist/: sitemap chunk is not referenced by sitemap-index.xml — "${name}"`);
  }
}

const sitemapFiles = [...referencedSitemapNames]
  .filter((name) => existsSync(resolve(distDir, name)))
  .map((name) => resolve(distDir, name));
const sitemapUrls = new Set();
const sitemapLastmods = new Map();

for (const file of sitemapFiles) {
  const xml = readFileSync(file, 'utf8');
  if (!/<urlset\b/i.test(xml)) {
    finalErrors.push(`${basename(file)}: missing <urlset> root`);
    continue;
  }
  for (const match of xml.matchAll(/<url>([\s\S]*?)<\/url>/gi)) {
    const block = match[1];
    const rawUrl = decodeEntities(block.match(/<loc>([\s\S]*?)<\/loc>/i)?.[1]?.trim() ?? '');
    if (!rawUrl) {
      finalErrors.push(`${basename(file)}: <url> is missing <loc>`);
      continue;
    }
    const url = normalizeSiteUrl(rawUrl, `${basename(file)} <loc>`, finalErrors);
    if (!url) continue;
    if (sitemapUrls.has(url)) {
      finalErrors.push(`${basename(file)}: duplicate sitemap URL — "${url}"`);
    }
    sitemapUrls.add(url);
    const lastmod = block.match(/<lastmod>([\s\S]*?)<\/lastmod>/i)?.[1]?.trim() ?? null;
    if (lastmod) {
      const w3cDatePattern = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/;
      const parsed = new Date(lastmod);
      const dateKey = lastmod.slice(0, 10);
      if (!w3cDatePattern.test(lastmod) || !isValidDateKey(dateKey) || Number.isNaN(parsed.getTime())) {
        finalErrors.push(`${basename(file)}: invalid lastmod for "${url}" — "${lastmod}"`);
      } else if (dateKey > dateKeyInTimeZone(new Date(), SITE_TIME_ZONE)) {
        finalErrors.push(`${basename(file)}: future lastmod for "${url}" — "${lastmod}"`);
      } else {
        sitemapLastmods.set(url, dateKey);
      }
    }
  }
}

if (sitemapUrls.size === 0) {
  finalErrors.push('dist/: sitemap contains no page URLs');
}

for (const page of pages) {
  if (!page.canonical) continue;
  const listed = sitemapUrls.has(page.canonical);
  if (page.noindex && listed) {
    finalErrors.push(`${page.route}: noindex page must not appear in the sitemap`);
  } else if (!page.noindex && !listed) {
    finalErrors.push(`${page.route}: indexable canonical is missing from the sitemap`);
  }

  if (!listed) continue;
  const isDatedContent =
    page.route === '/blog' ||
    page.route.startsWith('/blog/') ||
    page.route === '/privacy' ||
    /\/(?:[a-z]{2}|zh-Hant)\/privacy$/.test(page.route) ||
    page.route === '/docs' ||
    page.route.startsWith('/docs/') ||
    /\/(?:[a-z]{2}|zh-Hant)\/docs(?:\/|$)/.test(page.route);
  const requiresVisibleModifiedDate =
    page.route === '/privacy' ||
    /\/(?:[a-z]{2}|zh-Hant)\/privacy$/.test(page.route) ||
    page.route === '/docs' ||
    page.route.startsWith('/docs/') ||
    /\/(?:[a-z]{2}|zh-Hant)\/docs(?:\/|$)/.test(page.route);
  const sitemapDate = sitemapLastmods.get(page.canonical);

  if (isDatedContent && !sitemapDate) {
    finalErrors.push(`${page.route}: dated content is missing sitemap lastmod`);
  }
  if (!isDatedContent && sitemapDate) {
    finalErrors.push(`${page.route}: shared-source route must omit inaccurate sitemap lastmod`);
  }

  const declaredDates = new Set([
    ...page.structuredModifiedDates,
    ...page.articleModifiedDates,
    ...page.visibleModifiedDates,
  ]);
  if (isDatedContent && declaredDates.size === 0) {
    finalErrors.push(`${page.route}: dated content is missing a page-level modification date`);
  }
  if (requiresVisibleModifiedDate && page.visibleModifiedDates.length === 0) {
    finalErrors.push(`${page.route}: dated content is missing a visible modification <time>`);
  }
  if (declaredDates.size > 1) {
    finalErrors.push(
      `${page.route}: conflicting page modification dates — ${[...declaredDates].join(', ')}`,
    );
  }
  if (sitemapDate && declaredDates.size === 1 && !declaredDates.has(sitemapDate)) {
    finalErrors.push(
      `${page.route}: sitemap lastmod ${sitemapDate} does not match page date ${[...declaredDates][0]}`,
    );
  }
}

for (const url of sitemapUrls) {
  const page = canonicalMap.get(url);
  if (!page) {
    finalErrors.push(`sitemap URL has no generated canonical page — "${url}"`);
  } else if (page.noindex) {
    finalErrors.push(`sitemap URL resolves to a noindex page — "${url}"`);
  }
}

if (sitemapUrls.has(`${SITE_ORIGIN}/404`)) {
  finalErrors.push('/404: must not appear in the sitemap');
}

console.log(`HTML pages checked: ${pages.length}`);
console.log(`Canonical URLs checked: ${canonicalMap.size}`);
console.log(`Sitemap URLs checked: ${sitemapUrls.size}`);
console.log(`Sitemap lastmod values checked: ${sitemapLastmods.size}`);
console.log(`JSON-LD scripts checked: ${totalJsonLd}`);
console.log('');

if (finalWarnings.length === 0) {
  console.log('Final HTML warnings: none');
} else {
  console.log(`Final HTML warnings (${finalWarnings.length}, non-blocking):`);
  for (const warning of finalWarnings) {
    console.log(`- ${warning}`);
  }
}

if (finalErrors.length === 0) {
  console.log('Final HTML errors: none');
} else {
  console.log(`Final HTML errors (${finalErrors.length}):`);
  for (const error of finalErrors) {
    console.log(`- ${error}`);
  }
  process.exitCode = 1;
}
