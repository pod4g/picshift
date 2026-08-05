import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import {
  INDEXNOW_KEY,
  DEFAULT_TIMEOUT_MS,
  MAX_BATCH_SIZE,
  collectUrls,
  extractUrls,
  normalizeUrl,
  normalizeUrls,
  parseArgs,
  parseUrlFile,
  runIndexNow,
  submitBatch,
} from '../../scripts/indexnow-submit.mjs';

test('published IndexNow key file matches the submission key', () => {
  const publicKey = readFileSync(
    new URL(`../../public/${INDEXNOW_KEY}.txt`, import.meta.url),
    'utf8',
  ).trim();
  assert.equal(publicKey, INDEXNOW_KEY);
});

test('defaults to explicit incremental URLs and keeps full sitemap opt-in', () => {
  assert.throws(() => parseArgs([]), /No URLs supplied/);
  assert.throws(
    () => parseArgs(['--full-sitemap', '--url', 'https://picshift.app/a']),
    /cannot be combined/,
  );
  assert.throws(() => parseArgs(['--sitemap', 'map.xml']), /only valid with --full-sitemap/);

  const incremental = parseArgs([
    '--url', 'https://picshift.app/new',
    'https://picshift.app/updated',
    '--file', 'deleted.txt',
    '--batch-size', '2',
    '--timeout-ms', '5000',
    '--dry-run',
  ]);
  assert.equal(incremental.fullSitemap, false);
  assert.deepEqual(incremental.urls, [
    'https://picshift.app/new',
    'https://picshift.app/updated',
  ]);
  assert.deepEqual(incremental.files, ['deleted.txt']);
  assert.equal(incremental.batchSize, 2);
  assert.equal(incremental.timeoutMs, 5_000);
  assert.equal(incremental.dryRun, true);

  const migration = parseArgs(['--full-sitemap']);
  assert.equal(migration.fullSitemap, true);
  assert.equal(migration.sitemapPath, 'dist/sitemap-0.xml');
  assert.equal(migration.timeoutMs, DEFAULT_TIMEOUT_MS);
  assert.throws(() => parseArgs(['--url', 'https://picshift.app/a', '--batch-size', '0']), /between 1/);
  assert.throws(
    () => parseArgs(['--url', 'https://picshift.app/a', '--batch-size', String(MAX_BATCH_SIZE + 1)]),
    /between 1/,
  );
  assert.throws(
    () => parseArgs(['--url', 'https://picshift.app/a', '--timeout-ms', '0']),
    /timeout-ms must be between 1/,
  );
});

test('strictly accepts only canonical HTTPS URLs on picshift.app', () => {
  assert.equal(normalizeUrl(' https://picshift.app/a '), 'https://picshift.app/a');
  assert.equal(normalizeUrl('https://picshift.app/a/'), 'https://picshift.app/a');
  assert.equal(normalizeUrl('https://picshift.app'), 'https://picshift.app/');
  assert.throws(() => normalizeUrl('/a'), /absolute/);
  assert.throws(() => normalizeUrl('http://picshift.app/a'), /must use https/);
  assert.throws(() => normalizeUrl('https://www.picshift.app/a'), /must belong/);
  assert.throws(() => normalizeUrl('https://cdn.picshift.app/a'), /must belong/);
  assert.throws(() => normalizeUrl('https://picshift.app:444/a'), /must not specify a port/);
  assert.throws(() => normalizeUrl('https://user:secret@picshift.app/a'), /credentials/);
  assert.throws(() => normalizeUrl('https://picshift.app/a?preview=1'), /query string/);
  assert.throws(() => normalizeUrl('https://picshift.app/a#part'), /fragment/);
});

test('reads newline or JSON URL files, XML-decodes sitemap URLs, and de-duplicates', () => {
  assert.deepEqual(parseUrlFile(`
# deployed changes
https://picshift.app/a

https://picshift.app/b
`), ['https://picshift.app/a', 'https://picshift.app/b']);
  assert.deepEqual(parseUrlFile('["https://picshift.app/a", "https://picshift.app/b"]'), [
    'https://picshift.app/a',
    'https://picshift.app/b',
  ]);
  assert.throws(() => parseUrlFile('[1]'), /array of URL strings/);
  assert.deepEqual(extractUrls(
    '<urlset><url><loc>https://picshift.app/a?x=1&amp;y=2</loc></url><url><loc>https://picshift.app/b</loc></url></urlset>',
  ), ['https://picshift.app/a?x=1&y=2', 'https://picshift.app/b']);
  assert.deepEqual(normalizeUrls([
    'https://picshift.app/a',
    'https://picshift.app/a/',
    'https://picshift.app',
    'https://picshift.app/',
  ]), ['https://picshift.app/a', 'https://picshift.app/']);
});

test('reads explicit files and never falls back to the sitemap implicitly', () => {
  const directory = mkdtempSync(join(tmpdir(), 'picshift-indexnow-'));
  try {
    writeFileSync(join(directory, 'changes.txt'), 'https://picshift.app/changed\n');
    writeFileSync(join(directory, 'sitemap.xml'), '<urlset><url><loc>https://picshift.app/all</loc></url></urlset>');
    const incremental = parseArgs(['--file', 'changes.txt']);
    assert.deepEqual(collectUrls(incremental, { cwd: directory }), ['https://picshift.app/changed']);

    const full = parseArgs(['--full-sitemap', '--sitemap', 'sitemap.xml']);
    assert.deepEqual(collectUrls(full, { cwd: directory }), ['https://picshift.app/all']);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('dry-run validates, de-duplicates, and batches without network access', async () => {
  let fetchCalls = 0;
  const options = parseArgs([
    '--url', 'https://picshift.app/a',
    '--url', 'https://picshift.app/a',
    '--url', 'https://picshift.app/b',
    '--url', 'https://picshift.app/c',
    '--batch-size', '2',
    '--dry-run',
  ]);
  const result = await runIndexNow(options, {
    fetchImpl: async () => {
      fetchCalls += 1;
      throw new Error('must not run');
    },
  });
  assert.equal(fetchCalls, 0);
  assert.deepEqual(result.urls, [
    'https://picshift.app/a',
    'https://picshift.app/b',
    'https://picshift.app/c',
  ]);
  assert.deepEqual(result.batches.map((batch) => batch.length), [2, 1]);
});

test('submits the exact IndexNow payload and treats 200/202 as success', async () => {
  let request;
  const result = await submitBatch(['https://picshift.app/a'], {
    fetchImpl: async (url, init) => {
      request = { url, init };
      return { status: 202 };
    },
  });
  assert.equal(result.status, 202);
  assert.equal(result.attempts, 1);
  assert.equal(request.url, 'https://api.indexnow.org/indexnow');
  assert.equal(request.init.method, 'POST');
  assert.ok(request.init.signal instanceof AbortSignal);
  assert.equal(request.init.headers['Content-Type'], 'application/json; charset=utf-8');
  assert.deepEqual(JSON.parse(request.init.body), {
    host: 'picshift.app',
    key: INDEXNOW_KEY,
    keyLocation: `https://picshift.app/${INDEXNOW_KEY}.txt`,
    urlList: ['https://picshift.app/a'],
  });
});

test('validates direct library calls and times out stalled requests', async () => {
  await assert.rejects(
    () => submitBatch(['https://example.com/not-picshift'], {
      fetchImpl: async () => ({ status: 200 }),
    }),
    /must belong to https:\/\/picshift\.app/,
  );

  let attempts = 0;
  await assert.rejects(
    () => submitBatch(['https://picshift.app/a'], {
      timeoutMs: 5,
      maxRetries: 1,
      sleep: async () => {},
      fetchImpl: async (_url, { signal }) => {
        attempts += 1;
        return new Promise((_resolve, reject) => {
          signal.addEventListener('abort', () => reject(signal.reason), { once: true });
        });
      },
    }),
    /network request failed after 2 attempts/,
  );
  assert.equal(attempts, 2);
});

test('retries transient responses and fails fast with actionable permanent status details', async () => {
  let calls = 0;
  const delays = [];
  const recovered = await submitBatch(['https://picshift.app/a'], {
    fetchImpl: async () => {
      calls += 1;
      if (calls === 1) {
        return {
          status: 429,
          headers: { get: () => '2' },
          text: async () => '',
        };
      }
      return { status: 200 };
    },
    sleep: async (milliseconds) => delays.push(milliseconds),
  });
  assert.equal(recovered.status, 200);
  assert.equal(recovered.attempts, 2);
  assert.deepEqual(delays, [2_000]);

  calls = 0;
  await assert.rejects(
    () => submitBatch(['https://picshift.app/a'], {
      fetchImpl: async () => {
        calls += 1;
        return { status: 403, text: async () => 'key missing' };
      },
      sleep: async () => {},
    }),
    /HTTP 403.*verify the IndexNow key.*key missing/,
  );
  assert.equal(calls, 1);
});
