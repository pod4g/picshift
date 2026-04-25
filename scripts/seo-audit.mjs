import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, basename } from 'node:path';

const toolsPath = resolve(process.cwd(), 'src/data/tools.ts');
const source = readFileSync(toolsPath, 'utf8');

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
// Hard gate for all blog posts under src/content/blog/. Catches the same class
// of issue that PLAYBOOK §事故记录 #2026-04-25 documented (75/82-char titles
// and 219/226-char descriptions slipping past the tool-page-only audit).
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
      blogErrors.push(`${post.slug}: title length ${len} (>${TITLE_MAX}) — "${post.title}"`);
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
      blogErrors.push(`${post.slug}: description length ${len} (>${DESC_MAX})`);
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
