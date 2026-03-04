import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

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
