import { execFileSync } from 'node:child_process';
import { mkdirSync, renameSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const API_ROOT = 'https://www.googleapis.com/webmasters/v3/sites';
const DEFAULT_SITE = 'sc-domain:picshift.app';
const DEFAULT_WINDOWS = ['24h', '7d', '28d', '3m'];
const ROW_LIMIT = 25_000;
const MAX_EXPOSED_ROWS_PER_DAY = 50_000;
const FETCH_TIMEOUT_MS = 30_000;
const MAX_FETCH_ATTEMPTS = 4;
const PT_TIME_ZONE = 'America/Los_Angeles';
const READONLY_SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
const HOUR_MS = 60 * 60 * 1000;
const HOURLY_BUCKET_COUNT = 24;
const DEFAULT_OUTPUT_ROOT = '.local-data/gsc-api-export';

const WINDOW_DAYS = {
  '7d': 7,
  '28d': 28,
};

function usage() {
  return `Usage: pnpm gsc:export -- [options]

Exports Search Console data with the joint dimensions page × query × country × device.

Options:
  --site <property>       Search Console property (default: ${DEFAULT_SITE})
  --quota-project <id>   GCP project used for API quota/billing headers
  --windows <list>       Comma-separated: 24h,7d,28d,3m (default: all; 3m is calendar-based)
  --end-date <YYYY-MM-DD> End date for 7d/28d/3m snapshots in Pacific Time
  --output <directory>   Output directory (default: ${DEFAULT_OUTPUT_ROOT}/<timestamp>, gitignored)
  --page <absolute-url>  Exact page filter; repeat to match any listed page
  --query <text>         Exact query filter; repeat to match any listed query
  --country <code>       Exact three-letter country filter; repeat to match any code
  --device <type>        DESKTOP, MOBILE, or TABLET; repeat to match any type
  --type <type>          web, image, video, or news (default: web)
  --data-state <state>   final or all for multi-day windows (default: final)
  --dry-run              Print request bodies without authentication or file writes
  --help                 Show this help

Authentication:
  Set GSC_ACCESS_TOKEN, or use gcloud ADC authorized with the read-only scope.
  The quota project must have the Search Console API enabled.

Notes:
  24h uses 24 whole-hour buckets ending at the export-time hour. It is approximately
  24 hours, not a minute-precise rolling window; manifest records returned buckets
  and Google's first_incomplete_hour metadata.
  Search Console can omit anonymized/private rows even after all API pages are fetched.`;
}

export function parseArgs(argv) {
  const options = {
    site: process.env.GSC_SITE_URL || DEFAULT_SITE,
    quotaProject: process.env.GOOGLE_CLOUD_QUOTA_PROJECT || null,
    windows: [...DEFAULT_WINDOWS],
    endDate: null,
    output: null,
    pages: [],
    queries: [],
    countries: [],
    devices: [],
    type: 'web',
    dataState: 'final',
    dryRun: false,
    help: false,
  };

  const repeatable = new Map([
    ['--page', 'pages'],
    ['--query', 'queries'],
    ['--country', 'countries'],
    ['--device', 'devices'],
  ]);
  const scalar = new Map([
    ['--site', 'site'],
    ['--quota-project', 'quotaProject'],
    ['--end-date', 'endDate'],
    ['--output', 'output'],
    ['--type', 'type'],
    ['--data-state', 'dataState'],
  ]);

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--') continue;
    if (arg === '--help' || arg === '-h') {
      options.help = true;
      continue;
    }
    if (arg === '--dry-run') {
      options.dryRun = true;
      continue;
    }
    if (arg === '--windows') {
      const value = argv[++index];
      if (!value) throw new Error('--windows requires a value');
      options.windows = value.split(',').map((item) => item.trim()).filter(Boolean);
      continue;
    }
    if (repeatable.has(arg)) {
      const value = argv[++index];
      if (!value) throw new Error(`${arg} requires a value`);
      options[repeatable.get(arg)].push(value);
      continue;
    }
    if (scalar.has(arg)) {
      const value = argv[++index];
      if (!value) throw new Error(`${arg} requires a value`);
      options[scalar.get(arg)] = value;
      continue;
    }
    throw new Error(`Unknown option: ${arg}`);
  }

  validateOptions(options);
  return options;
}

function validateOptions(options) {
  const invalidWindows = options.windows.filter(
    (window) => window !== '24h' && window !== '3m' && !Object.hasOwn(WINDOW_DAYS, window),
  );
  if (invalidWindows.length > 0) {
    throw new Error(`Unsupported window(s): ${invalidWindows.join(', ')}`);
  }
  if (options.windows.length === 0) throw new Error('At least one window is required');
  if (options.endDate && !isValidDateKey(options.endDate)) {
    throw new Error('--end-date must use YYYY-MM-DD');
  }
  if (!['all', 'final'].includes(options.dataState)) {
    throw new Error('--data-state must be all or final');
  }
  // This exporter promises a page x query joint report. Discover and Google
  // News do not have a search-query dimension, so accepting those types would
  // violate that contract even though the API supports them for other reports.
  const validTypes = ['web', 'image', 'video', 'news'];
  if (!validTypes.includes(options.type)) throw new Error(`Unsupported type: ${options.type}`);
  const invalidDevices = options.devices.filter(
    (device) => !['DESKTOP', 'MOBILE', 'TABLET'].includes(device),
  );
  if (invalidDevices.length > 0) {
    throw new Error(`Unsupported device(s): ${invalidDevices.join(', ')}`);
  }
  const invalidPages = options.pages.filter((page) => {
    try {
      const url = new URL(page);
      return !['http:', 'https:'].includes(url.protocol) || Boolean(url.hash);
    } catch {
      return true;
    }
  });
  if (invalidPages.length > 0) {
    throw new Error(`--page requires an absolute HTTP(S) URL without a fragment: ${invalidPages[0]}`);
  }
  const invalidCountries = options.countries.filter((country) => !/^[A-Za-z]{3}$/.test(country));
  if (invalidCountries.length > 0) {
    throw new Error(`--country requires a three-letter country code: ${invalidCountries[0]}`);
  }
  for (const [dimension, values] of [
    ['page', options.pages],
    ['query', options.queries],
    ['country', options.countries],
    ['device', options.devices],
  ]) {
    const expression = values.length <= 1
      ? values[0] ?? ''
      : `^(?:${values.map(escapeRe2).join('|')})$`;
    if (expression.length > 4096) {
      throw new Error(`Combined --${dimension} filter exceeds the Search Console 4096-character limit`);
    }
  }
}

function formatDateInTimeZone(date, timeZone = PT_TIME_ZONE) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function addDays(dateKey, amount) {
  const [year, month, day] = dateKey.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + amount);
  return date.toISOString().slice(0, 10);
}

function isValidDateKey(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function addMonths(dateKey, amount) {
  if (!isValidDateKey(dateKey)) throw new Error(`Invalid date: ${dateKey}`);
  const [year, month, day] = dateKey.split('-').map(Number);
  const monthIndex = year * 12 + (month - 1) + amount;
  const targetYear = Math.floor(monthIndex / 12);
  const targetMonthIndex = ((monthIndex % 12) + 12) % 12;
  const lastDay = new Date(Date.UTC(targetYear, targetMonthIndex + 1, 0)).getUTCDate();
  const targetDay = Math.min(day, lastDay);
  return `${String(targetYear).padStart(4, '0')}-${String(targetMonthIndex + 1).padStart(2, '0')}-${String(targetDay).padStart(2, '0')}`;
}

function escapeRe2(value) {
  return value.replace(/[\\^$.*+?()[\]{}|/-]/g, '\\$&');
}

function exactFilter(dimension, values) {
  if (values.length === 0) return null;
  if (values.length === 1) return { dimension, operator: 'equals', expression: values[0] };
  return {
    dimension,
    operator: 'includingRegex',
    expression: `^(?:${values.map(escapeRe2).join('|')})$`,
  };
}

export function buildWindowRequest(window, options, now = new Date()) {
  const filters = [
    exactFilter('page', options.pages),
    exactFilter('query', options.queries),
    exactFilter('country', options.countries),
    exactFilter('device', options.devices),
  ].filter(Boolean);

  const base = {
    type: options.type,
    aggregationType: 'byPage',
    rowLimit: ROW_LIMIT,
    ...(filters.length > 0
      ? { dimensionFilterGroups: [{ groupType: 'and', filters }] }
      : {}),
  };

  if (window === '24h') {
    const lastBucket = new Date(Math.floor(now.getTime() / HOUR_MS) * HOUR_MS);
    const firstBucket = new Date(lastBucket.getTime() - (HOURLY_BUCKET_COUNT - 1) * HOUR_MS);
    const hourBucketRange = {
      semantics: 'approximately-24-hours-aligned-to-hour-buckets',
      apiTimeZone: PT_TIME_ZONE,
      requestedCount: HOURLY_BUCKET_COUNT,
      requestedFirstBucket: firstBucket.toISOString(),
      requestedLastBucket: lastBucket.toISOString(),
    };
    return {
      label: window,
      dimensions: ['hour', 'page', 'query', 'country', 'device'],
      hourBucketRange,
      body: {
        ...base,
        startDate: formatDateInTimeZone(firstBucket),
        endDate: formatDateInTimeZone(lastBucket),
        dimensions: ['hour', 'page', 'query', 'country', 'device'],
        dataState: 'hourly_all',
      },
    };
  }

  // Search Console's multi-day presets use completed calendar days. The
  // approximately-24-hour request above is the explicit path for hourly data.
  const endDate = options.endDate || addDays(formatDateInTimeZone(now), -1);
  const startDate = window === '3m'
    ? addDays(addMonths(endDate, -3), 1)
    : addDays(endDate, -(WINDOW_DAYS[window] - 1));
  const outputDimensions = ['page', 'query', 'country', 'device'];
  const apiDateDimension = options.dataState === 'all';
  return {
    label: window,
    dimensions: outputDimensions,
    apiDateDimension,
    body: {
      ...base,
      startDate,
      endDate,
      dimensions: apiDateDimension ? ['date', ...outputDimensions] : outputDimensions,
      dataState: options.dataState,
    },
  };
}

function retryAfterMs(response, nowMs) {
  const value = response.headers?.get?.('retry-after');
  if (!value) return null;
  const seconds = Number(value);
  if (Number.isFinite(seconds) && seconds >= 0) return seconds * 1000;
  const dateMs = Date.parse(value);
  return Number.isNaN(dateMs) ? null : Math.max(0, dateMs - nowMs);
}

export async function fetchWithRetry(
  url,
  init,
  {
    fetchImpl = fetch,
    sleepImpl = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
    timeoutMs = FETCH_TIMEOUT_MS,
    maxAttempts = MAX_FETCH_ATTEMPTS,
    nowImpl = Date.now,
    readResponse = null,
  } = {},
) {
  let lastError = null;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let response = null;
    try {
      response = await fetchImpl(url, { ...init, signal: controller.signal });
      const retryable = response.status === 429 || response.status >= 500;
      if (!retryable || attempt === maxAttempts) {
        const value = readResponse ? await readResponse(response) : response;
        clearTimeout(timer);
        return readResponse ? { response, value } : response;
      }
      if (typeof response.body?.cancel === 'function') await response.body.cancel();
      clearTimeout(timer);
      const retryAfter = retryAfterMs(response, nowImpl());
      const delay = Math.min(retryAfter ?? 500 * 2 ** (attempt - 1), 8_000);
      await sleepImpl(delay);
    } catch (error) {
      clearTimeout(timer);
      lastError = error;
      const retryableStatus = response
        && (response.status === 429 || response.status >= 500);
      if (response && !response.ok && !retryableStatus) throw error;
      if (attempt === maxAttempts) break;
      await sleepImpl(Math.min(500 * 2 ** (attempt - 1), 8_000));
    }
  }
  throw new Error(`Search Console request failed after ${maxAttempts} attempts: ${lastError?.message ?? 'network error'}`);
}

export async function fetchAllRows({
  site,
  request,
  accessToken,
  quotaProject,
  fetchImpl = fetch,
  apiRoot = API_ROOT,
  retryOptions,
}) {
  const endpoint = `${apiRoot}/${encodeURIComponent(site)}/searchAnalytics/query`;
  const rows = [];
  let metadata = null;
  let responseAggregationType = null;

  for (let startRow = 0; ; startRow += ROW_LIMIT) {
    const { response, value } = await fetchWithRetry(endpoint, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
        ...(quotaProject ? { 'x-goog-user-project': quotaProject } : {}),
      },
      body: JSON.stringify({ ...request.body, startRow }),
    }, {
      fetchImpl,
      ...retryOptions,
      // Keep the attempt timeout active until the response body has been
      // consumed. This also makes truncated/invalid JSON retryable.
      readResponse: async (apiResponse) => {
        if (!apiResponse.ok) {
          return {
            detail: typeof apiResponse.text === 'function'
              ? await apiResponse.text()
              : '',
            payload: null,
          };
        }
        return { detail: null, payload: await apiResponse.json() };
      },
    });
    if (!response.ok) {
      throw new Error(`Search Console API ${response.status}: ${value.detail.slice(0, 500)}`);
    }
    const payload = value.payload;
    const pageRows = payload.rows ?? [];
    rows.push(...pageRows);
    metadata = payload.metadata ?? metadata;
    responseAggregationType = payload.responseAggregationType ?? responseAggregationType;
    if (pageRows.length < ROW_LIMIT) break;
  }

  const fetchedRowCount = rows.length;
  const filteredRows = request.hourBucketRange
    ? rows.filter((row) => {
        const hour = row.keys?.[0];
        if (!hour) return false;
        const hourMs = Date.parse(hour);
        return Number.isFinite(hourMs)
          && hourMs >= Date.parse(request.hourBucketRange.requestedFirstBucket)
          && hourMs <= Date.parse(request.hourBucketRange.requestedLastBucket);
      })
    : rows;

  return {
    rows: filteredRows,
    metadata,
    responseAggregationType,
    fetchedRowCount,
    potentiallyTruncated: fetchedRowCount >= MAX_EXPOSED_ROWS_PER_DAY,
  };
}

export function enumerateDates(startDate, endDate) {
  const dates = [];
  for (let current = startDate; current <= endDate; current = addDays(current, 1)) {
    dates.push(current);
  }
  return dates;
}

export function aggregateRows(rows) {
  const grouped = new Map();
  for (const row of rows) {
    const keys = row.keys ?? [];
    const key = JSON.stringify(keys);
    const current = grouped.get(key) ?? {
      keys,
      clicks: 0,
      impressions: 0,
      weightedPosition: 0,
    };
    const impressions = Number(row.impressions ?? 0);
    current.clicks += Number(row.clicks ?? 0);
    current.impressions += impressions;
    current.weightedPosition += Number(row.position ?? 0) * impressions;
    grouped.set(key, current);
  }
  return [...grouped.values()]
    .map((row) => ({
      keys: row.keys,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.impressions > 0 ? row.clicks / row.impressions : 0,
      position: row.impressions > 0 ? row.weightedPosition / row.impressions : 0,
    }))
    .sort((left, right) => right.clicks - left.clicks || right.impressions - left.impressions);
}

function summarizeHourlyBuckets(request, result) {
  const bucketsByTime = new Map();
  for (const row of result.rows) {
    const value = row.keys?.[0];
    const time = value ? Date.parse(value) : Number.NaN;
    if (Number.isFinite(time) && !bucketsByTime.has(time)) bucketsByTime.set(time, value);
  }
  const bucketTimes = [...bucketsByTime.keys()].sort((left, right) => left - right);
  const firstBucket = bucketTimes.length > 0 ? bucketsByTime.get(bucketTimes[0]) : null;
  const lastBucket = bucketTimes.length > 0 ? bucketsByTime.get(bucketTimes.at(-1)) : null;
  const firstIncompleteHour = result.metadata?.first_incomplete_hour ?? null;
  const firstIncompleteTime = firstIncompleteHour ? Date.parse(firstIncompleteHour) : Number.NaN;
  const requestedRangeIncludesIncompleteData = Number.isFinite(firstIncompleteTime)
    && Date.parse(request.hourBucketRange.requestedLastBucket) >= firstIncompleteTime;
  const partialDataIncluded = Number.isFinite(firstIncompleteTime)
    && bucketTimes.some((time) => time >= firstIncompleteTime);
  return {
    ...request.hourBucketRange,
    returnedCount: bucketTimes.length,
    firstBucket,
    lastBucket,
    freshData: {
      dataState: request.body.dataState,
      requested: request.body.dataState === 'hourly_all',
      firstIncompleteHour,
      requestedRangeIncludesIncompleteData,
      partialDataIncluded,
      apiMetadata: result.metadata ?? null,
    },
  };
}

async function fetchWindow({
  site,
  request,
  accessToken,
  quotaProject,
  fetchImpl = fetch,
  retryOptions,
}) {
  if (request.label === '24h') {
    const result = await fetchAllRows({
      site,
      request,
      accessToken,
      quotaProject,
      fetchImpl,
      retryOptions,
    });
    return {
      ...result,
      dateSliceCount: 1,
      dailyMetadata: result.metadata ? [result.metadata] : [],
      hourlyBuckets: summarizeHourlyBuckets(request, result),
      cappedSlices: result.potentiallyTruncated
        ? [`${request.body.startDate}..${request.body.endDate}`]
        : [],
    };
  }

  const dailyRows = [];
  const dailyMetadata = [];
  const cappedSlices = [];
  let responseAggregationType = null;
  const dates = enumerateDates(request.body.startDate, request.body.endDate);
  for (const date of dates) {
    const dailyRequest = {
      ...request,
      body: { ...request.body, startDate: date, endDate: date },
    };
    const result = await fetchAllRows({
      site,
      request: dailyRequest,
      accessToken,
      quotaProject,
      fetchImpl,
      retryOptions,
    });
    const normalizedRows = request.apiDateDimension
      ? result.rows.map((row) => ({ ...row, keys: row.keys?.slice(1) ?? [] }))
      : result.rows;
    dailyRows.push(...normalizedRows);
    if (result.potentiallyTruncated) cappedSlices.push(date);
    if (result.metadata) dailyMetadata.push({ date, ...result.metadata });
    responseAggregationType = result.responseAggregationType ?? responseAggregationType;
  }
  return {
    rows: aggregateRows(dailyRows),
    metadata: dailyMetadata.length > 0 ? dailyMetadata[dailyMetadata.length - 1] : null,
    dailyMetadata,
    responseAggregationType,
    dateSliceCount: dates.length,
    potentiallyTruncated: cappedSlices.length > 0,
    cappedSlices,
  };
}

function buildPropertySummaryRequest(request) {
  const apiDimensions = request.label === '24h'
    ? ['hour']
    : request.apiDateDimension
      ? ['date']
      : [];
  return {
    ...request,
    dimensions: request.label === '24h' ? ['hour'] : [],
    body: {
      ...request.body,
      aggregationType: 'auto',
      dimensions: apiDimensions,
    },
  };
}

function buildCoverageBaselineRequest(request) {
  const apiDimensions = request.label === '24h'
    ? ['hour']
    : request.apiDateDimension
      ? ['date']
      : [];
  return {
    ...request,
    dimensions: request.label === '24h' ? ['hour'] : [],
    body: {
      ...request.body,
      aggregationType: 'byPage',
      dimensions: apiDimensions,
    },
  };
}

async function resolveFinalDataBoundary({
  options,
  now,
  accessToken,
  fetchImpl,
  retryOptions,
}) {
  const hasMultiDayWindow = options.windows.some((window) => window !== '24h');
  const provisionalEndDate = addDays(formatDateInTimeZone(now), -1);
  if (!hasMultiDayWindow || options.dataState !== 'final' || options.endDate) {
    return {
      options,
      dateResolution: {
        source: options.endDate ? 'explicit' : 'not-applicable',
        provisionalEndDate,
        firstIncompleteDate: null,
        resolvedEndDate: options.endDate,
      },
    };
  }

  const probeStartDate = addDays(provisionalEndDate, -13);
  const probe = await fetchAllRows({
    site: options.site,
    request: {
      label: 'final-data-probe',
      dimensions: ['date'],
      body: {
        startDate: probeStartDate,
        endDate: provisionalEndDate,
        dimensions: ['date'],
        type: options.type,
        aggregationType: 'byPage',
        dataState: 'all',
        rowLimit: 1,
      },
    },
    accessToken,
    quotaProject: options.quotaProject,
    fetchImpl,
    retryOptions,
  });
  const firstIncompleteDate = probe.metadata?.first_incomplete_date ?? null;
  if (firstIncompleteDate && !isValidDateKey(firstIncompleteDate)) {
    throw new Error(`Search Console returned an invalid first_incomplete_date: ${firstIncompleteDate}`);
  }
  const resolvedEndDate = firstIncompleteDate && firstIncompleteDate <= provisionalEndDate
    ? addDays(firstIncompleteDate, -1)
    : provisionalEndDate;

  return {
    options: { ...options, endDate: resolvedEndDate },
    dateResolution: {
      source: 'first-incomplete-date-probe',
      probeStartDate,
      provisionalEndDate,
      firstIncompleteDate,
      resolvedEndDate,
    },
  };
}

function summarizeRows(rows) {
  const [summary] = aggregateRows(rows.map((row) => ({ ...row, keys: [] })));
  return summary ?? { keys: [], clicks: 0, impressions: 0, ctr: 0, position: 0 };
}

export function getAccessToken({ env = process.env, execFile = execFileSync } = {}) {
  if (env.GSC_ACCESS_TOKEN?.trim()) return env.GSC_ACCESS_TOKEN.trim();
  const args = ['auth', 'application-default', 'print-access-token', `--scopes=${READONLY_SCOPE}`];
  try {
    const token = execFile('gcloud', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
    if (token) return token;
  } catch {
    // Fall through to the actionable setup error below.
  }
  throw new Error(
    'No read-only access token. Set GSC_ACCESS_TOKEN or complete the scoped ADC setup in docs/GSC-API-EXPORT.md (a Desktop OAuth client is required).',
  );
}

export function rowsToCsv(dimensions, rows) {
  const escape = (value) => {
    let text = String(value ?? '');
    if (typeof value === 'string' && /^[=+\-@\t\r]/.test(text)) text = `'${text}`;
    return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  };
  const header = [...dimensions, 'clicks', 'impressions', 'ctr', 'position'];
  const lines = [header.map(escape).join(',')];
  for (const row of rows) {
    lines.push([
      ...(row.keys ?? []),
      row.clicks ?? 0,
      row.impressions ?? 0,
      row.ctr ?? 0,
      row.position ?? 0,
    ].map(escape).join(','));
  }
  return `${lines.join('\n')}\n`;
}

function timestampForPath(date) {
  return date.toISOString().replaceAll(':', '-').replace(/\.\d{3}Z$/, 'Z');
}

export function defaultOutputDirectory(now, cwd = process.cwd()) {
  return resolve(cwd, DEFAULT_OUTPUT_ROOT, timestampForPath(now));
}

export async function runExport(
  options,
  { now = new Date(), fetchImpl = fetch, accessToken, retryOptions } = {},
) {
  if (options.dryRun) {
    const requests = options.windows.map((window) => buildWindowRequest(window, options, now));
    return { requests, outputDirectory: null, windows: [] };
  }

  const token = accessToken || getAccessToken();
  const resolution = await resolveFinalDataBoundary({
    options,
    now,
    accessToken: token,
    fetchImpl,
    retryOptions,
  });
  const effectiveOptions = resolution.options;
  const requests = effectiveOptions.windows.map(
    (window) => buildWindowRequest(window, effectiveOptions, now),
  );
  const outputDirectory = options.output
    ? resolve(process.cwd(), options.output)
    : defaultOutputDirectory(now);
  mkdirSync(outputDirectory, { recursive: true });
  const completed = [];
  const manifestPath = resolve(outputDirectory, 'manifest.json');
  const writeManifest = (status) => {
    const manifest = {
      status,
      exportedAt: now.toISOString(),
      site: options.site,
      quotaProject: options.quotaProject,
      type: options.type,
      commonDimensions: ['page', 'query', 'country', 'device'],
      dateResolution: resolution.dateResolution,
      windows: completed,
      filters: {
        pages: options.pages,
        queries: options.queries,
        countries: options.countries,
        devices: options.devices,
      },
    };
    const temporaryPath = `${manifestPath}.tmp`;
    writeFileSync(temporaryPath, `${JSON.stringify(manifest, null, 2)}\n`);
    renameSync(temporaryPath, manifestPath);
  };
  writeManifest('incomplete');

  for (const request of requests) {
    const result = await fetchWindow({
      site: options.site,
      request,
      accessToken: token,
      quotaProject: options.quotaProject,
      fetchImpl,
      retryOptions,
    });
    const propertySummaryResult = await fetchWindow({
      site: options.site,
      request: buildPropertySummaryRequest(request),
      accessToken: token,
      quotaProject: options.quotaProject,
      fetchImpl,
      retryOptions,
    });
    const coverageBaselineResult = await fetchWindow({
      site: options.site,
      request: buildCoverageBaselineRequest(request),
      accessToken: token,
      quotaProject: options.quotaProject,
      fetchImpl,
      retryOptions,
    });
    const propertySummary = summarizeRows(propertySummaryResult.rows);
    const coverageBaseline = summarizeRows(coverageBaselineResult.rows);
    const detailedSummary = summarizeRows(result.rows);
    const coverageComparable =
      !result.potentiallyTruncated && !coverageBaselineResult.potentiallyTruncated;
    const detailedCoverage = {
      clicks: coverageComparable && coverageBaseline.clicks > 0
        ? detailedSummary.clicks / coverageBaseline.clicks
        : null,
      impressions: coverageComparable && coverageBaseline.impressions > 0
        ? detailedSummary.impressions / coverageBaseline.impressions
        : null,
    };
    const hourlyBuckets = request.label === '24h'
      ? {
          ...propertySummaryResult.hourlyBuckets,
          detailedReturnedCount: result.hourlyBuckets.returnedCount,
          coverageReturnedCount: coverageBaselineResult.hourlyBuckets.returnedCount,
          detailedApiMetadata: result.metadata ?? null,
          coverageApiMetadata: coverageBaselineResult.metadata ?? null,
        }
      : null;
    const windowDirectory = resolve(outputDirectory, request.label);
    mkdirSync(windowDirectory, { recursive: true });
    writeFileSync(resolve(windowDirectory, 'search-analytics.csv'), rowsToCsv(request.dimensions, result.rows));
    writeFileSync(resolve(windowDirectory, 'search-analytics.json'), `${JSON.stringify({
      dimensions: request.dimensions,
      rows: result.rows,
    })}\n`);
    writeFileSync(resolve(windowDirectory, 'request.json'), `${JSON.stringify(request, null, 2)}\n`);
    writeFileSync(resolve(windowDirectory, 'metadata.json'), `${JSON.stringify({
      rowCount: result.rows.length,
      dateSliceCount: result.dateSliceCount,
      responseAggregationType: result.responseAggregationType,
      apiMetadata: result.metadata,
      dailyMetadata: result.dailyMetadata,
      overallSummary: {
        clicks: propertySummary.clicks,
        impressions: propertySummary.impressions,
        ctr: propertySummary.ctr,
        position: propertySummary.position,
        responseAggregationType: propertySummaryResult.responseAggregationType,
      },
      coverageBaseline: {
        clicks: coverageBaseline.clicks,
        impressions: coverageBaseline.impressions,
        ctr: coverageBaseline.ctr,
        position: coverageBaseline.position,
        responseAggregationType: coverageBaselineResult.responseAggregationType,
        potentiallyTruncated: coverageBaselineResult.potentiallyTruncated,
        cappedSlices: coverageBaselineResult.cappedSlices,
      },
      detailedCoverage,
      ...(hourlyBuckets ? { hourlyBuckets } : {}),
      potentiallyTruncated: result.potentiallyTruncated,
      cappedSlices: result.cappedSlices,
      privacyNote: 'Search Console may omit anonymized/private rows even after pagination.',
    }, null, 2)}\n`);
    completed.push({
      label: request.label,
      dimensions: request.dimensions,
      startDate: request.body.startDate,
      endDate: request.body.endDate,
      dataState: request.body.dataState,
      dateSliceCount: result.dateSliceCount,
      rows: result.rows.length,
      clicks: propertySummary.clicks,
      impressions: propertySummary.impressions,
      ctr: propertySummary.ctr,
      position: propertySummary.position,
      overallAggregationType: propertySummaryResult.responseAggregationType,
      detailedAggregationType: result.responseAggregationType,
      coverageAggregationType: coverageBaselineResult.responseAggregationType,
      detailedCoverage,
      ...(hourlyBuckets ? { hourlyBuckets } : {}),
      potentiallyTruncated: result.potentiallyTruncated,
      cappedSlices: result.cappedSlices,
    });
    writeManifest('incomplete');
  }

  writeManifest('complete');

  return { requests, outputDirectory, windows: completed };
}

async function main() {
  try {
    const options = parseArgs(process.argv.slice(2));
    if (options.help) {
      console.log(usage());
      return;
    }
    const result = await runExport(options);
    if (options.dryRun) {
      console.log(JSON.stringify(result.requests, null, 2));
      return;
    }
    console.log(`GSC export complete: ${result.outputDirectory}`);
    for (const window of result.windows) {
      const warning = window.potentiallyTruncated
        ? `; WARNING: API row cap reached for ${window.cappedSlices.join(', ')}`
        : '';
      console.log(`- ${window.label}: ${window.rows} rows${warning}`);
    }
  } catch (error) {
    console.error(`GSC export failed: ${error.message}`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
