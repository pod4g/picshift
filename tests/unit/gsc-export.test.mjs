import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import {
  addDays,
  addMonths,
  aggregateRows,
  buildWindowRequest,
  defaultOutputDirectory,
  enumerateDates,
  fetchAllRows,
  fetchWithRetry,
  getAccessToken,
  parseArgs,
  rowsToCsv,
  runExport,
} from '../../scripts/gsc-export.mjs';

function baseOptions(overrides = {}) {
  return {
    site: 'sc-domain:picshift.app',
    quotaProject: null,
    windows: ['7d'],
    endDate: '2026-08-01',
    output: null,
    pages: [],
    queries: [],
    countries: [],
    devices: [],
    type: 'web',
    dataState: 'final',
    dryRun: false,
    help: false,
    ...overrides,
  };
}

test('builds inclusive rolling calendar windows and exact filters', () => {
  const request = buildWindowRequest('7d', baseOptions({
    pages: ['https://picshift.app/png-to-jpg'],
    devices: ['MOBILE'],
  }));
  assert.equal(request.body.startDate, '2026-07-26');
  assert.equal(request.body.endDate, '2026-08-01');
  assert.deepEqual(request.body.dimensions, ['page', 'query', 'country', 'device']);
  assert.deepEqual(request.body.dimensionFilterGroups[0].filters, [
    { dimension: 'page', operator: 'equals', expression: 'https://picshift.app/png-to-jpg' },
    { dimension: 'device', operator: 'equals', expression: 'MOBILE' },
  ]);
});

test('multi-day defaults end on yesterday in Pacific Time', () => {
  const request = buildWindowRequest(
    '7d',
    baseOptions({ endDate: null }),
    new Date('2026-08-04T12:30:00.000Z'),
  );
  assert.equal(request.body.startDate, '2026-07-28');
  assert.equal(request.body.endDate, '2026-08-03');

  const beforePacificMidnight = buildWindowRequest(
    '7d',
    baseOptions({ endDate: null }),
    new Date('2026-08-04T06:30:00.000Z'),
  );
  assert.equal(beforePacificMidnight.body.endDate, '2026-08-02');
});

test('accepts defaults and builds calendar-based three-month windows', () => {
  const defaults = parseArgs([]);
  assert.deepEqual(defaults.windows, ['24h', '7d', '28d', '3m']);
  assert.equal(defaults.dataState, 'final');
  assert.equal(parseArgs(['--', '--dry-run']).dryRun, true);
  const august = buildWindowRequest('3m', baseOptions({
    windows: ['3m'],
    endDate: '2026-08-01',
  }));
  assert.equal(august.body.startDate, '2026-05-02');
  const leapYear = buildWindowRequest('3m', baseOptions({
    windows: ['3m'],
    endDate: '2024-05-31',
  }));
  assert.equal(addMonths('2024-05-31', -3), '2024-02-29');
  assert.equal(leapYear.body.startDate, '2024-03-01');
  assert.throws(() => parseArgs(['--end-date', '2026-02-30']), /YYYY-MM-DD/);
});

test('combines repeated exact values with an anchored RE2 filter', () => {
  const request = buildWindowRequest('7d', baseOptions({
    pages: ['https://picshift.app/a', 'https://picshift.app/b'],
  }));
  assert.deepEqual(request.body.dimensionFilterGroups[0].filters, [{
    dimension: 'page',
    operator: 'includingRegex',
    expression: '^(?:https:\\/\\/picshift\\.app\\/a|https:\\/\\/picshift\\.app\\/b)$',
  }]);
});

test('builds an approximately-24h request from 24 whole-hour buckets at a non-hour boundary', () => {
  const now = new Date('2026-08-04T12:30:00.000Z');
  const request = buildWindowRequest('24h', baseOptions(), now);
  assert.equal(request.body.dataState, 'hourly_all');
  assert.deepEqual(request.hourBucketRange, {
    semantics: 'approximately-24-hours-aligned-to-hour-buckets',
    apiTimeZone: 'America/Los_Angeles',
    requestedCount: 24,
    requestedFirstBucket: '2026-08-03T13:00:00.000Z',
    requestedLastBucket: '2026-08-04T12:00:00.000Z',
  });
  assert.equal(request.body.startDate, '2026-08-03');
  assert.equal(request.body.endDate, '2026-08-04');
  assert.deepEqual(request.body.dimensions, ['hour', 'page', 'query', 'country', 'device']);
});

test('defaults exports to the gitignored local-data directory', () => {
  assert.equal(
    defaultOutputDirectory(new Date('2026-08-04T12:30:00.000Z'), '/workspace'),
    '/workspace/.local-data/gsc-api-export/2026-08-04T12-30-00Z',
  );
});

test('adds a temporary date dimension when fresh multi-day data is requested', () => {
  const request = buildWindowRequest('7d', baseOptions({ dataState: 'all' }));
  assert.deepEqual(request.dimensions, ['page', 'query', 'country', 'device']);
  assert.deepEqual(request.body.dimensions, ['date', 'page', 'query', 'country', 'device']);
  assert.equal(request.apiDateDimension, true);
});

test('paginates Search Console rows, sends quota project, and flags the API cap', async () => {
  let calls = 0;
  const fetchImpl = async (_url, init) => {
    calls += 1;
    const body = JSON.parse(init.body);
    assert.equal(init.headers['x-goog-user-project'], 'picshift-quota');
    assert.equal(body.startRow, (calls - 1) * 25_000);
    const rows = calls === 1
      ? Array.from({ length: 25_000 }, (_, index) => ({
          keys: [index === 0 ? '2026-08-03T11:00:00-00:00' : '2026-08-04T11:00:00-00:00', '/', 'q', 'usa', 'MOBILE'],
          clicks: 1,
          impressions: 2,
          ctr: 0.5,
          position: 3,
        }))
      : calls === 2
        ? Array.from({ length: 25_000 }, () => ({
            keys: ['2026-08-04T11:00:00-00:00', '/', 'q', 'usa', 'MOBILE'],
            clicks: 1,
            impressions: 2,
            ctr: 0.5,
            position: 3,
          }))
        : [];
    return {
      ok: true,
      json: async () => ({ rows, responseAggregationType: 'byPage' }),
    };
  };
  const result = await fetchAllRows({
    site: 'sc-domain:picshift.app',
    request: {
      body: { dimensions: ['hour', 'page', 'query', 'country', 'device'] },
      hourBucketRange: {
        requestedFirstBucket: '2026-08-03T13:00:00.000Z',
        requestedLastBucket: '2026-08-04T12:00:00.000Z',
      },
    },
    accessToken: 'test-token',
    quotaProject: 'picshift-quota',
    fetchImpl,
    apiRoot: 'https://example.test',
  });
  assert.equal(calls, 3);
  assert.equal(result.rows.length, 49_999);
  assert.equal(result.fetchedRowCount, 50_000);
  assert.equal(result.potentiallyTruncated, true);
});

test('escapes CSV and validates CLI input', () => {
  const csv = rowsToCsv(['page', 'query'], [{
    keys: ['https://picshift.app/a', 'one, "two"'],
    clicks: 1,
    impressions: 4,
    ctr: 0.25,
    position: 8,
  }]);
  assert.match(csv, /"one, ""two"""/);
  assert.match(rowsToCsv(['query'], [{ keys: ['=HYPERLINK("https://evil.test")'] }]), /'=HYPERLINK/);
  assert.equal(addDays('2026-03-01', -1), '2026-02-28');
  assert.throws(() => parseArgs(['--device', 'PHONE']), /Unsupported device/);
  assert.throws(() => parseArgs(['--windows', '14d']), /Unsupported window/);
  assert.throws(() => parseArgs(['--type', 'discover']), /Unsupported type/);
  assert.throws(() => parseArgs(['--type', 'googleNews']), /Unsupported type/);
  assert.throws(() => parseArgs(['--page', '/png-to-jpg']), /absolute HTTP\(S\) URL/);
  assert.throws(() => parseArgs(['--page', 'https://picshift.app/a#fragment']), /without a fragment/);
  assert.throws(() => parseArgs(['--country', 'US']), /three-letter country code/);
  assert.throws(
    () => parseArgs(['--query', 'a'.repeat(4097)]),
    /4096-character limit/,
  );
  assert.throws(
    () => parseArgs(['--query', 'a'.repeat(2050), '--query', 'b'.repeat(2050)]),
    /4096-character limit/,
  );
});

test('uses only read-only ADC authentication and reports actionable setup', () => {
  let receivedArgs = null;
  const token = getAccessToken({
    env: {},
    execFile: (_command, args) => {
      receivedArgs = args;
      return 'adc-token\n';
    },
  });
  assert.equal(token, 'adc-token');
  assert.deepEqual(receivedArgs, [
    'auth',
    'application-default',
    'print-access-token',
    '--scopes=https://www.googleapis.com/auth/webmasters.readonly',
  ]);
  assert.throws(
    () => getAccessToken({ env: {}, execFile: () => { throw new Error('missing'); } }),
    /GSC-API-EXPORT\.md/,
  );
});

test('retries 429 responses but does not retry permanent 403 responses', async () => {
  let retryCalls = 0;
  let cancelledBodies = 0;
  const delays = [];
  const recovered = await fetchWithRetry('https://example.test', {}, {
    fetchImpl: async () => {
      retryCalls += 1;
      if (retryCalls === 1) {
        return {
          ok: false,
          status: 429,
          headers: { get: () => '1' },
          body: { cancel: async () => { cancelledBodies += 1; } },
        };
      }
      return { ok: true, status: 200 };
    },
    sleepImpl: async (delay) => delays.push(delay),
  });
  assert.equal(recovered.status, 200);
  assert.equal(retryCalls, 2);
  assert.equal(cancelledBodies, 1);
  assert.deepEqual(delays, [1000]);

  let forbiddenCalls = 0;
  const forbidden = await fetchWithRetry('https://example.test', {}, {
    fetchImpl: async () => {
      forbiddenCalls += 1;
      return { ok: false, status: 403 };
    },
    sleepImpl: async () => assert.fail('403 must not sleep or retry'),
  });
  assert.equal(forbidden.status, 403);
  assert.equal(forbiddenCalls, 1);
});

test('keeps the timeout active while consuming the response body', async () => {
  let calls = 0;
  const result = await fetchWithRetry('https://example.test', {}, {
    timeoutMs: 5,
    maxAttempts: 2,
    sleepImpl: async () => {},
    fetchImpl: async (_url, init) => {
      calls += 1;
      if (calls === 1) {
        return {
          ok: true,
          status: 200,
          json: () => new Promise((_, reject) => {
            init.signal.addEventListener('abort', () => reject(new Error('body aborted')), {
              once: true,
            });
          }),
        };
      }
      return { ok: true, status: 200, json: async () => ({ rows: [] }) };
    },
    readResponse: async (response) => response.json(),
  });
  assert.equal(calls, 2);
  assert.deepEqual(result.value, { rows: [] });
});

test('retries an invalid successful JSON body', async () => {
  let calls = 0;
  const result = await fetchWithRetry('https://example.test', {}, {
    maxAttempts: 2,
    sleepImpl: async () => {},
    fetchImpl: async () => {
      calls += 1;
      return {
        ok: true,
        status: 200,
        json: async () => {
          if (calls === 1) throw new SyntaxError('invalid JSON');
          return { rows: [] };
        },
      };
    },
    readResponse: async (response) => response.json(),
  });
  assert.equal(calls, 2);
  assert.deepEqual(result.value, { rows: [] });
});

test('enumerates daily requests and aggregates weighted metrics', () => {
  assert.deepEqual(enumerateDates('2026-07-30', '2026-08-01'), [
    '2026-07-30',
    '2026-07-31',
    '2026-08-01',
  ]);
  assert.deepEqual(aggregateRows([
    { keys: ['/a', 'q'], clicks: 1, impressions: 10, ctr: 0.1, position: 2 },
    { keys: ['/a', 'q'], clicks: 2, impressions: 30, ctr: 2 / 30, position: 4 },
  ]), [{
    keys: ['/a', 'q'],
    clicks: 3,
    impressions: 40,
    ctr: 0.075,
    position: 3.5,
  }]);
});

test('writes daily-aggregated detail, totals, coverage, and manifest', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'picshift-gsc-test-'));
  const requestShapes = new Set();
  const fetchImpl = async (_url, init) => {
    const body = JSON.parse(init.body);
    requestShapes.add(`${body.aggregationType}:${body.dimensions.join(',')}`);
    const isDetailed = body.dimensions.includes('query');
    const isOverall = body.aggregationType === 'auto';
    return {
      ok: true,
      json: async () => ({
        rows: [{
          keys: isDetailed
            ? ['https://picshift.app/a', '=HYPERLINK("https://evil.test")', 'usa', 'MOBILE']
            : [],
          clicks: isDetailed ? 1 : 2,
          impressions: isDetailed ? 4 : 8,
          ctr: 0.25,
          position: 3,
        }],
        responseAggregationType: isOverall ? 'byProperty' : 'byPage',
      }),
    };
  };
  try {
    const result = await runExport(baseOptions({ output: directory }), {
      now: new Date('2026-08-04T12:00:00.000Z'),
      fetchImpl,
      accessToken: 'test-token',
    });
    assert.equal(result.windows[0].rows, 1);
    assert.equal(result.windows[0].clicks, 14);
    assert.equal(result.windows[0].impressions, 56);
    assert.deepEqual(result.windows[0].detailedCoverage, { clicks: 0.5, impressions: 0.5 });
    const metadata = JSON.parse(readFileSync(join(directory, '7d', 'metadata.json'), 'utf8'));
    assert.equal(metadata.dateSliceCount, 7);
    assert.equal(metadata.overallSummary.clicks, 14);
    assert.equal(metadata.coverageBaseline.clicks, 14);
    assert.equal(metadata.coverageBaseline.responseAggregationType, 'byPage');
    assert.deepEqual([...requestShapes].sort(), [
      'auto:',
      'byPage:',
      'byPage:page,query,country,device',
    ]);
    const manifest = JSON.parse(readFileSync(join(directory, 'manifest.json'), 'utf8'));
    assert.equal(manifest.status, 'complete');
    assert.equal(manifest.windows[0].rows, 1);
    assert.deepEqual(manifest.windows[0].dimensions, ['page', 'query', 'country', 'device']);
    assert.equal(manifest.windows[0].startDate, '2026-07-26');
    assert.equal(manifest.windows[0].endDate, '2026-08-01');
    assert.equal(manifest.windows[0].dateSliceCount, 7);
    const csv = readFileSync(join(directory, '7d', 'search-analytics.csv'), 'utf8');
    assert.match(csv, /'=HYPERLINK/);
    const raw = JSON.parse(readFileSync(join(directory, '7d', 'search-analytics.json'), 'utf8'));
    assert.equal(raw.rows[0].keys[1], '=HYPERLINK("https://evil.test")');
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('records returned hour buckets and fresh-data boundaries in the manifest', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'picshift-gsc-hourly-'));
  const now = new Date('2026-08-04T12:37:45.000Z');
  const requestShapes = new Set();
  const fetchImpl = async (_url, init) => {
    const body = JSON.parse(init.body);
    requestShapes.add(`${body.aggregationType}:${body.dimensions.join(',')}`);
    const detailed = body.dimensions.includes('query');
    return {
      ok: true,
      status: 200,
      json: async () => ({
        rows: [{
          keys: detailed
            ? ['2026-08-04T11:00:00-00:00', 'https://picshift.app/a', 'q', 'usa', 'MOBILE']
            : ['2026-08-04T11:00:00-00:00'],
          clicks: 1,
          impressions: 2,
          ctr: 0.5,
          position: 3,
        }],
        metadata: { first_incomplete_hour: '2026-08-04T10:00:00-00:00' },
        responseAggregationType: body.aggregationType === 'auto' ? 'byProperty' : 'byPage',
      }),
    };
  };
  try {
    await runExport(baseOptions({ windows: ['24h'], endDate: null, output: directory }), {
      now,
      fetchImpl,
      accessToken: 'test-token',
    });
    const manifest = JSON.parse(readFileSync(join(directory, 'manifest.json'), 'utf8'));
    assert.deepEqual(manifest.windows[0].dimensions, [
      'hour',
      'page',
      'query',
      'country',
      'device',
    ]);
    assert.equal(manifest.windows[0].startDate, '2026-08-03');
    assert.equal(manifest.windows[0].endDate, '2026-08-04');
    assert.equal(manifest.windows[0].dataState, 'hourly_all');
    assert.equal(manifest.windows[0].dateSliceCount, 1);
    assert.deepEqual(manifest.windows[0].hourlyBuckets, {
      semantics: 'approximately-24-hours-aligned-to-hour-buckets',
      apiTimeZone: 'America/Los_Angeles',
      requestedCount: 24,
      requestedFirstBucket: '2026-08-03T13:00:00.000Z',
      requestedLastBucket: '2026-08-04T12:00:00.000Z',
      firstBucket: '2026-08-04T11:00:00-00:00',
      lastBucket: '2026-08-04T11:00:00-00:00',
      returnedCount: 1,
      freshData: {
        dataState: 'hourly_all',
        requested: true,
        firstIncompleteHour: '2026-08-04T10:00:00-00:00',
        requestedRangeIncludesIncompleteData: true,
        partialDataIncluded: true,
        apiMetadata: { first_incomplete_hour: '2026-08-04T10:00:00-00:00' },
      },
      detailedReturnedCount: 1,
      coverageReturnedCount: 1,
      detailedApiMetadata: { first_incomplete_hour: '2026-08-04T10:00:00-00:00' },
      coverageApiMetadata: { first_incomplete_hour: '2026-08-04T10:00:00-00:00' },
    });
    const request = JSON.parse(readFileSync(join(directory, '24h', 'request.json'), 'utf8'));
    assert.equal(request.hourBucketRange.requestedFirstBucket, '2026-08-03T13:00:00.000Z');
    assert.equal(request.hourBucketRange.requestedLastBucket, '2026-08-04T12:00:00.000Z');
    assert.deepEqual([...requestShapes].sort(), [
      'auto:hour',
      'byPage:hour',
      'byPage:hour,page,query,country,device',
    ]);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('preserves fresh-data metadata while removing the temporary date column', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'picshift-gsc-fresh-'));
  const requestShapes = new Set();
  const fetchImpl = async (_url, init) => {
    const body = JSON.parse(init.body);
    requestShapes.add(`${body.aggregationType}:${body.dimensions.join(',')}`);
    const detailed = body.dimensions.includes('query');
    assert.equal(body.dimensions[0], 'date');
    return {
      ok: true,
      status: 200,
      json: async () => ({
        rows: [{
          keys: detailed
            ? [body.startDate, 'https://picshift.app/a', 'q', 'usa', 'MOBILE']
            : [body.startDate],
          clicks: 1,
          impressions: 2,
          ctr: 0.5,
          position: 3,
        }],
        metadata: { first_incomplete_date: body.startDate },
        responseAggregationType: body.aggregationType === 'auto' ? 'byProperty' : 'byPage',
      }),
    };
  };
  try {
    await runExport(baseOptions({ dataState: 'all', output: directory }), {
      fetchImpl,
      accessToken: 'test-token',
    });
    const raw = JSON.parse(readFileSync(join(directory, '7d', 'search-analytics.json'), 'utf8'));
    assert.deepEqual(raw.dimensions, ['page', 'query', 'country', 'device']);
    assert.deepEqual(raw.rows[0].keys, ['https://picshift.app/a', 'q', 'usa', 'MOBILE']);
    const metadata = JSON.parse(readFileSync(join(directory, '7d', 'metadata.json'), 'utf8'));
    assert.equal(metadata.dailyMetadata.length, 7);
    assert.equal(metadata.dailyMetadata[0].first_incomplete_date, '2026-07-26');
    assert.deepEqual([...requestShapes].sort(), [
      'auto:date',
      'byPage:date',
      'byPage:date,page,query,country,device',
    ]);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('anchors default final windows to the latest completed Pacific date', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'picshift-gsc-final-date-'));
  let sawProbe = false;
  const fetchImpl = async (_url, init) => {
    const body = JSON.parse(init.body);
    if (body.dataState === 'all' && body.rowLimit === 1) {
      sawProbe = true;
      assert.deepEqual(body.dimensions, ['date']);
      assert.equal(body.startDate, '2026-07-21');
      assert.equal(body.endDate, '2026-08-03');
      return {
        ok: true,
        status: 200,
        json: async () => ({
          rows: [{ keys: ['2026-08-03'], clicks: 0, impressions: 1 }],
          metadata: { first_incomplete_date: '2026-08-03' },
          responseAggregationType: 'byPage',
        }),
      };
    }
    const detailed = body.dimensions.includes('query');
    const dateKey = body.startDate;
    return {
      ok: true,
      status: 200,
      json: async () => ({
        rows: [{
          keys: detailed
            ? ['https://picshift.app/a', 'q', 'usa', 'MOBILE']
            : [],
          clicks: detailed ? 1 : 2,
          impressions: detailed ? 4 : 8,
          ctr: 0.25,
          position: 3,
        }],
        metadata: { date: dateKey },
        responseAggregationType: body.aggregationType === 'auto' ? 'byProperty' : 'byPage',
      }),
    };
  };
  try {
    await runExport(baseOptions({ endDate: null, output: directory }), {
      now: new Date('2026-08-04T12:00:00.000Z'),
      fetchImpl,
      accessToken: 'test-token',
    });
    assert.equal(sawProbe, true);
    const manifest = JSON.parse(readFileSync(join(directory, 'manifest.json'), 'utf8'));
    assert.deepEqual(manifest.dateResolution, {
      source: 'first-incomplete-date-probe',
      probeStartDate: '2026-07-21',
      provisionalEndDate: '2026-08-03',
      firstIncompleteDate: '2026-08-03',
      resolvedEndDate: '2026-08-02',
    });
    assert.equal(manifest.windows[0].startDate, '2026-07-27');
    assert.equal(manifest.windows[0].endDate, '2026-08-02');
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('keeps an incomplete manifest when a window export fails', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'picshift-gsc-failed-'));
  let calls = 0;
  try {
    await assert.rejects(
      runExport(baseOptions({ output: directory }), {
        accessToken: 'test-token',
        fetchImpl: async () => {
          calls += 1;
          return {
            ok: false,
            status: 503,
            headers: { get: () => null },
            text: async () => 'unavailable',
          };
        },
        retryOptions: { sleepImpl: async () => {} },
      }),
      /Search Console API 503/,
    );
    assert.equal(calls, 4);
    const manifest = JSON.parse(readFileSync(join(directory, 'manifest.json'), 'utf8'));
    assert.equal(manifest.status, 'incomplete');
    assert.deepEqual(manifest.windows, []);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
