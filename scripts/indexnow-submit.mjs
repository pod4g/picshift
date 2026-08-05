import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export const INDEXNOW_KEY = '7f990ecb944d43fe805dce8a3db98fb7';
export const HOST = 'picshift.app';
export const ENDPOINT = 'https://api.indexnow.org/indexnow';
export const MAX_BATCH_SIZE = 10_000;
export const DEFAULT_TIMEOUT_MS = 15_000;
export const MAX_TIMEOUT_MS = 60_000;
export const DEFAULT_SITEMAP_PATH = 'dist/sitemap-0.xml';

export function usage() {
  return `Submit changed PicShift URLs to IndexNow.

Daily use (incremental; repeat --url or pass positional URLs):
  pnpm indexnow --url https://picshift.app/new-page
  pnpm indexnow https://picshift.app/updated-page https://picshift.app/deleted-page
  pnpm indexnow --file changed-urls.txt

Migration/full-site use only:
  pnpm indexnow --full-sitemap
  pnpm indexnow --full-sitemap --sitemap dist/sitemap-0.xml

Options:
  --url <url>          Add one created, updated, or deleted URL (repeatable)
  --file <path>        Read URLs from a newline-delimited file or JSON string array
  --full-sitemap       Explicitly submit every URL in the built sitemap
  --sitemap <path>     Sitemap used with --full-sitemap (default: ${DEFAULT_SITEMAP_PATH})
  --batch-size <n>     URLs per request, 1-${MAX_BATCH_SIZE} (default: ${MAX_BATCH_SIZE})
  --timeout-ms <n>     Per-request timeout, 1-${MAX_TIMEOUT_MS} ms (default: ${DEFAULT_TIMEOUT_MS})
  --dry-run            Validate and print the request plan without calling IndexNow
  -h, --help           Show this help`;
}

function takeValue(args, index, flag) {
  const value = args[index + 1];
  if (!value || value.startsWith('--')) throw new Error(`${flag} requires a value.`);
  return value;
}

export function parseArgs(argv) {
  const args = argv.filter((arg) => arg !== '--');
  const options = {
    urls: [],
    files: [],
    fullSitemap: false,
    sitemapPath: DEFAULT_SITEMAP_PATH,
    customSitemapPath: false,
    batchSize: MAX_BATCH_SIZE,
    timeoutMs: DEFAULT_TIMEOUT_MS,
    dryRun: false,
    help: false,
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--url') {
      options.urls.push(takeValue(args, index, arg));
      index += 1;
    } else if (arg === '--file' || arg === '--urls-file') {
      options.files.push(takeValue(args, index, arg));
      index += 1;
    } else if (arg === '--full-sitemap') {
      options.fullSitemap = true;
    } else if (arg === '--sitemap') {
      options.sitemapPath = takeValue(args, index, arg);
      options.customSitemapPath = true;
      index += 1;
    } else if (arg === '--batch-size') {
      const value = takeValue(args, index, arg);
      if (!/^\d+$/.test(value)) throw new Error('--batch-size must be an integer.');
      options.batchSize = Number(value);
      index += 1;
    } else if (arg === '--timeout-ms') {
      const value = takeValue(args, index, arg);
      if (!/^\d+$/.test(value)) throw new Error('--timeout-ms must be an integer.');
      options.timeoutMs = Number(value);
      index += 1;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg.startsWith('-')) {
      throw new Error(`Unknown option: ${arg}`);
    } else {
      options.urls.push(arg);
    }
  }

  if (!Number.isSafeInteger(options.batchSize) || options.batchSize < 1 || options.batchSize > MAX_BATCH_SIZE) {
    throw new Error(`--batch-size must be between 1 and ${MAX_BATCH_SIZE}.`);
  }
  if (!Number.isSafeInteger(options.timeoutMs) || options.timeoutMs < 1 || options.timeoutMs > MAX_TIMEOUT_MS) {
    throw new Error(`--timeout-ms must be between 1 and ${MAX_TIMEOUT_MS}.`);
  }
  if (options.fullSitemap && (options.urls.length > 0 || options.files.length > 0)) {
    throw new Error('--full-sitemap cannot be combined with explicit URLs or --file.');
  }
  if (options.customSitemapPath && !options.fullSitemap) {
    throw new Error('--sitemap is only valid with --full-sitemap.');
  }
  if (!options.help && !options.fullSitemap && options.urls.length === 0 && options.files.length === 0) {
    throw new Error('No URLs supplied. Use --url/--file for incremental submission, or explicitly use --full-sitemap.');
  }

  return options;
}

function decodeXml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'");
}

export function extractUrls(xml) {
  const urls = [];
  const pattern = /<loc(?:\s[^>]*)?>([^<]+)<\/loc>/gi;
  let match;
  while ((match = pattern.exec(xml)) !== null) urls.push(decodeXml(match[1].trim()));
  return urls;
}

export function parseUrlFile(content, label = 'URL file') {
  const trimmed = content.trim();
  if (!trimmed) return [];

  if (trimmed.startsWith('[')) {
    let parsed;
    try {
      parsed = JSON.parse(trimmed);
    } catch (error) {
      throw new Error(`${label} is not valid JSON: ${error.message}`);
    }
    if (!Array.isArray(parsed) || parsed.some((value) => typeof value !== 'string')) {
      throw new Error(`${label} JSON must be an array of URL strings.`);
    }
    return parsed;
  }

  return trimmed
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));
}

export function normalizeUrl(value) {
  if (typeof value !== 'string' || !value.trim()) throw new Error('URL must be a non-empty string.');
  const input = value.trim();
  if (input.length > 2_048) throw new Error(`URL exceeds 2048 characters: ${input.slice(0, 80)}…`);

  let url;
  try {
    url = new URL(input);
  } catch {
    throw new Error(`URL must be absolute: ${input}`);
  }

  if (url.protocol !== 'https:') throw new Error(`URL must use https://: ${input}`);
  if (url.hostname !== HOST) throw new Error(`URL must belong to https://${HOST}: ${input}`);
  if (url.port) throw new Error(`URL must not specify a port: ${input}`);
  if (url.username || url.password) throw new Error(`URL must not contain credentials: ${input}`);
  if (url.search) throw new Error(`URL must not contain a query string; submit the canonical page URL: ${input}`);
  if (url.hash) throw new Error(`URL must not contain a fragment: ${input}`);

  if (url.pathname !== '/') url.pathname = url.pathname.replace(/\/+$/, '');

  return url.href;
}

export function normalizeUrls(values) {
  const seen = new Set();
  const urls = [];
  for (const value of values) {
    const url = normalizeUrl(value);
    if (!seen.has(url)) {
      seen.add(url);
      urls.push(url);
    }
  }
  return urls;
}

export function chunkUrls(urls, batchSize = MAX_BATCH_SIZE) {
  const chunks = [];
  for (let index = 0; index < urls.length; index += batchSize) {
    chunks.push(urls.slice(index, index + batchSize));
  }
  return chunks;
}

export function collectUrls(options, { cwd = process.cwd(), readFile = readFileSync, exists = existsSync } = {}) {
  if (options.fullSitemap) {
    const sitemapPath = resolve(cwd, options.sitemapPath);
    if (!exists(sitemapPath)) {
      throw new Error(`Sitemap not found at ${sitemapPath}. Run "pnpm build" first, or pass --sitemap.`);
    }
    const urls = extractUrls(readFile(sitemapPath, 'utf8'));
    if (urls.length === 0) throw new Error(`No <loc> URLs found in ${sitemapPath}.`);
    return urls;
  }

  const urls = [...options.urls];
  for (const file of options.files) {
    const filePath = resolve(cwd, file);
    if (!exists(filePath)) throw new Error(`URL file not found: ${filePath}`);
    urls.push(...parseUrlFile(readFile(filePath, 'utf8'), filePath));
  }
  return urls;
}

export function statusExplanation(status) {
  if (status === 200) return 'accepted';
  if (status === 202) return 'accepted; key validation is pending';
  if (status === 400) return 'bad request; inspect the URL list and JSON payload';
  if (status === 403) return 'forbidden; verify the IndexNow key and keyLocation file';
  if (status === 422) return 'unprocessable; a URL/host does not match the submitted key';
  if (status === 429) return 'rate limited; retry later';
  if (status >= 500) return 'IndexNow service error; retry later';
  return 'unexpected response';
}

function retryDelayMs(response, attempt) {
  const retryAfter = response?.headers?.get?.('retry-after');
  if (retryAfter && /^\d+$/.test(retryAfter)) return Math.min(Number(retryAfter) * 1_000, 30_000);
  return Math.min(500 * (2 ** attempt), 4_000);
}

export async function submitBatch(urls, {
  fetchImpl = fetch,
  endpoint = ENDPOINT,
  key = INDEXNOW_KEY,
  sleep = (milliseconds) => new Promise((resolveSleep) => setTimeout(resolveSleep, milliseconds)),
  maxRetries = 2,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  timeoutSignal = (milliseconds) => AbortSignal.timeout(milliseconds),
} = {}) {
  const normalizedUrls = normalizeUrls(urls);
  if (normalizedUrls.length < 1 || normalizedUrls.length > MAX_BATCH_SIZE) {
    throw new Error(`IndexNow batches must contain 1-${MAX_BATCH_SIZE} URLs.`);
  }
  if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > MAX_TIMEOUT_MS) {
    throw new Error(`IndexNow timeout must be between 1 and ${MAX_TIMEOUT_MS} ms.`);
  }

  const body = JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList: normalizedUrls,
  });

  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    let response;
    try {
      response = await fetchImpl(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body,
        signal: timeoutSignal(timeoutMs),
      });
    } catch (error) {
      if (attempt < maxRetries) {
        await sleep(Math.min(500 * (2 ** attempt), 4_000));
        continue;
      }
      throw new Error(`IndexNow network request failed after ${attempt + 1} attempts: ${error.message}`);
    }

    if (response.status === 200 || response.status === 202) {
      return { status: response.status, attempts: attempt + 1, explanation: statusExplanation(response.status) };
    }

    const retryable = response.status === 429 || response.status >= 500;
    if (retryable && attempt < maxRetries) {
      await sleep(retryDelayMs(response, attempt));
      continue;
    }

    let responseDetail = '';
    try {
      responseDetail = (await response.text()).trim().replace(/\s+/g, ' ').slice(0, 300);
    } catch {
      // The HTTP status and explanation remain sufficient when no body is readable.
    }
    const detail = responseDetail ? ` Response: ${responseDetail}` : '';
    throw new Error(`IndexNow returned HTTP ${response.status} (${statusExplanation(response.status)}).${detail}`);
  }

  throw new Error('IndexNow request failed unexpectedly.');
}

export async function runIndexNow(options, dependencies = {}) {
  const rawUrls = collectUrls(options, dependencies);
  const urls = normalizeUrls(rawUrls);
  if (urls.length === 0) throw new Error('No URLs remain after validation and de-duplication.');
  const batches = chunkUrls(urls, options.batchSize);

  if (options.dryRun) return { dryRun: true, urls, batches, results: [] };

  const results = [];
  for (const batch of batches) {
    const result = await submitBatch(batch, { timeoutMs: options.timeoutMs, ...dependencies });
    results.push({ ...result, urlCount: batch.length });
  }
  return { dryRun: false, urls, batches, results };
}

async function main() {
  try {
    const options = parseArgs(process.argv.slice(2));
    if (options.help) {
      console.log(usage());
      return;
    }

    const result = await runIndexNow(options);
    if (result.dryRun) {
      console.log(`IndexNow dry run: ${result.urls.length} unique URL(s) in ${result.batches.length} batch(es).`);
      for (const url of result.urls) console.log(`- ${url}`);
      return;
    }

    result.results.forEach((batch, index) => {
      console.log(`IndexNow: batch ${index + 1}/${result.results.length}, ${batch.urlCount} URL(s), HTTP ${batch.status} (${batch.explanation}), ${batch.attempts} attempt(s).`);
    });
    console.log(`IndexNow: submitted ${result.urls.length} unique changed URL(s).`);
  } catch (error) {
    console.error(`IndexNow failed: ${error.message}`);
    console.error('Run "pnpm indexnow --help" for incremental and full-sitemap examples.');
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
