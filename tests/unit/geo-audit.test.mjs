import assert from 'node:assert/strict';
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import {
  auditGeo,
  extractHttpUrls,
  isCalendarDate,
  isRobotsPathAllowed,
  parseRobotsGroups,
  sectionFirstBullet,
} from '../../scripts/geo-audit.mjs';

const DOC_NAMES = [
  'format-compatibility.astro',
  'image-quality-vs-file-size.astro',
  'privacy-local-processing.astro',
  'size-increase-explainer.astro',
  'why-picshift.astro',
];

function write(root, relative, content) {
  const path = join(root, relative);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
}

function profile(kind, overrides = {}) {
  const updated = overrides.updated ?? '2026-08-04';
  const version = overrides.version ?? `${updated}.1`;
  const canonical = kind === 'short' ? 'llms.txt' : 'llms-full.txt';
  const offline = overrides.offline
    ?? 'A workflow can be reused offline after its worker and codec have loaded successfully during an online conversion.';
  const extra = overrides.extra ?? '';
  return `# PicShift

## Last updated
- ${updated}

## Version
- ${version}
- Profile: ${kind}

## Canonical
- https://picshift.app/${canonical}

## Offline contract
- ${offline}
${extra}
`;
}

function createFixture() {
  const root = mkdtempSync(join(tmpdir(), 'picshift-geo-'));
  write(root, 'public/robots.txt', `User-agent: *
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt

Sitemap: https://picshift.app/sitemap-index.xml
`);
  write(root, 'public/llms.txt', profile('short'));
  write(root, 'public/llms-full.txt', profile('full'));
  write(root, 'src/lib/contentDates.ts', `
export const DOCS_DATE_PUBLISHED = '2026-03-04';
export const CONTENT_DATE_MODIFIED = '2026-08-04';
`);
  write(root, 'src/lib/schemaEntities.ts', `
export const PICSHIFT_ORGANIZATION = {
  '@type': 'Organization',
  '@id': 'https://picshift.app/#organization',
  name: 'PicShift',
  url: 'https://picshift.app',
} as const;
`);
  const docSource = `
import { PICSHIFT_ORGANIZATION } from '../../lib/schemaEntities';
const dateModified = '2026-08-04';
const schema = { author: PICSHIFT_ORGANIZATION, publisher: PICSHIFT_ORGANIZATION, dateModified };
<time data-date-modified>{dateModified}</time>
`;
  const localizedDocSource = docSource.replace("../../lib/schemaEntities", '../../../lib/schemaEntities');
  for (const name of DOC_NAMES) {
    write(root, `src/pages/docs/${name}`, docSource);
    write(root, `src/pages/[lang]/docs/${name}`, localizedDocSource);
  }
  write(root, 'src/pages/index.astro', '<main>PicShift</main>');
  write(root, 'src/pages/blog/[slug].astro', `
import { PICSHIFT_ORGANIZATION, PICSHIFT_WEBSITE_REFERENCE } from '../../lib/schemaEntities';
const article = {
  dateModified: (updatedAt ?? publishedAt).toISOString(),
  author: PICSHIFT_ORGANIZATION,
  publisher: PICSHIFT_ORGANIZATION,
};
`);
  write(root, 'src/content/blog/test.md', `---
title: Test
publishedAt: 2026-07-01
updatedAt: 2026-08-04
author: "PicShift"
---
Test.
`);
  write(root, 'dist/sitemap-0.xml', '<urlset><url><loc>https://picshift.app/</loc></url></urlset>');
  return root;
}

test('date, section, and URL parsers reject ambiguous values', () => {
  assert.equal(isCalendarDate('2026-08-04'), true);
  assert.equal(isCalendarDate('2026-02-30'), false);
  assert.equal(sectionFirstBullet('## Version\n- 2026-08-04.1\n', 'Version'), '2026-08-04.1');
  assert.deepEqual(extractHttpUrls('See https://picshift.app/docs/test, then https://example.com/a.'), [
    'https://picshift.app/docs/test',
    'https://example.com/a',
  ]);
});

test('robots parser evaluates the most specific matching group and longest path rule', () => {
  const groups = parseRobotsGroups(`User-agent: *
Allow: /

User-agent: OAI-SearchBot
Disallow: /
Allow: /llms.txt
`);

  assert.equal(isRobotsPathAllowed(groups, 'GPTBot', '/docs/why-picshift'), true);
  assert.equal(isRobotsPathAllowed(groups, 'OAI-SearchBot', '/'), false);
  assert.equal(isRobotsPathAllowed(groups, 'OAI-SearchBot', '/llms.txt'), true);
});

test('passes a consistent, locally verifiable GEO contract without network access', () => {
  const root = createFixture();
  try {
    const result = auditGeo({ root, today: '2026-08-04' });
    assert.deepEqual(result.errors, []);
    assert.equal(result.metrics.profiles, 2);
    assert.equal(result.metrics.latestContentDate, '2026-08-04');
    assert.equal(
      result.metrics.routeSource,
      'local source routes with dist/sitemap-0.xml cross-check',
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('warns about optional profile freshness and rejects inconsistent versions or offline claims', () => {
  const root = createFixture();
  try {
    write(root, 'public/llms.txt', profile('short', {
      updated: '2026-04-25',
      version: '2026-04-24.2',
      offline: 'After the first page load, conversion continues offline because the first page load fetches all codecs.',
    }));
    const result = auditGeo({ root, today: '2026-08-04' });
    assert.ok(result.warnings.some((warning) => /older than declared site content/.test(warning)));
    assert.ok(result.errors.some((error) => /must start with its Last updated date/.test(error)));
    assert.ok(result.errors.some((error) => /first page load fetches\/requires all codecs/.test(error)));
    assert.ok(result.errors.some((error) => /full offline conversion/.test(error)));
    assert.ok(result.errors.some((error) => /must share the same Last updated date/.test(error)));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('rejects a full-site robots disallow even when llms files remain explicitly allowed', () => {
  const root = createFixture();
  try {
    write(root, 'public/robots.txt', `User-agent: *
Disallow: /
Allow: /llms.txt
Allow: /llms-full.txt

Sitemap: https://picshift.app/sitemap-index.xml
`);
    const result = auditGeo({ root, today: '2026-08-04' });
    assert.ok(result.errors.some((error) => /must not contain a full-site Disallow/.test(error)));
    assert.ok(result.errors.some((error) => /effectively blocks \* from \/\.$/.test(error)));
    assert.ok(result.errors.some((error) => /effectively blocks OAI-SearchBot from \/\.$/.test(error)));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('flags internal URLs missing from source routes and identity drift', () => {
  const root = createFixture();
  try {
    const shortPath = join(root, 'public/llms.txt');
    writeFileSync(shortPath, `${readFileSync(shortPath, 'utf8')}\n- https://picshift.app/not-a-route\n`);
    const whyPath = join(root, 'src/pages/docs/why-picshift.astro');
    writeFileSync(whyPath, readFileSync(whyPath, 'utf8')
      .replace('author: PICSHIFT_ORGANIZATION', "author: { '@type': 'Person', name: 'PicShift Creator' }"));
    const result = auditGeo({ root, today: '2026-08-04' });
    assert.ok(result.errors.some((error) => /does not match a local source route.*not-a-route/.test(error)));
    assert.ok(result.errors.some((error) => /author must be Organization\/PicShift/.test(error)));
    assert.ok(result.errors.some((error) => /do not create a separate Person/.test(error)));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('warns when a real source route is missing from a stale built sitemap', () => {
  const root = createFixture();
  try {
    const shortPath = join(root, 'public/llms.txt');
    writeFileSync(
      shortPath,
      `${readFileSync(shortPath, 'utf8')}\n- https://picshift.app/docs/privacy-local-processing\n`,
    );
    const result = auditGeo({ root, today: '2026-08-04' });
    assert.equal(result.errors.length, 0);
    assert.ok(result.warnings.some((warning) => /absent from dist\/sitemap-0\.xml/.test(warning)));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('rejects a docs modification date before its publication date', () => {
  const root = createFixture();
  try {
    write(root, 'src/lib/contentDates.ts', `
export const DOCS_DATE_PUBLISHED = '2026-03-04';
export const CONTENT_DATE_MODIFIED = '2026-03-03';
`);
    const result = auditGeo({ root, today: '2026-08-04' });
    assert.ok(result.errors.some((error) => /must not precede DOCS_DATE_PUBLISHED/.test(error)));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('validates blog updatedAt ordering and falls back to local routes without a build', () => {
  const root = createFixture();
  try {
    rmSync(join(root, 'dist'), { recursive: true, force: true });
    write(root, 'src/content/blog/test.md', `---
title: Test
publishedAt: 2026-07-01
updatedAt: 2026-06-30
author: "PicShift"
---
Test.
`);
    const result = auditGeo({ root, today: '2026-08-04' });
    assert.ok(result.errors.some((error) => /updatedAt must not precede publishedAt/.test(error)));
    assert.equal(result.metrics.routeSource, 'local source routes');
    assert.equal(result.warnings.length, 1);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
