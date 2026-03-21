import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const INDEXNOW_KEY = '7f990ecb944d43fe805dce8a3db98fb7';
const HOST = 'picshift.app';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITEMAP_PATH = resolve(process.cwd(), 'dist/sitemap-0.xml');

function extractUrls(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = re.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function submit(urls) {
  const body = JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  });

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });

  return res.status;
}

if (!existsSync(SITEMAP_PATH)) {
  console.log('IndexNow: sitemap not found at', SITEMAP_PATH);
  console.log('IndexNow: run "pnpm run build" first, then retry.');
  process.exit(0);
}

const xml = readFileSync(SITEMAP_PATH, 'utf-8');
const urls = extractUrls(xml);

if (urls.length === 0) {
  console.log('IndexNow: no URLs found in sitemap, skipping.');
  process.exit(0);
}

const BATCH_SIZE = 10000;
let submitted = 0;

for (let i = 0; i < urls.length; i += BATCH_SIZE) {
  const batch = urls.slice(i, i + BATCH_SIZE);
  const status = await submit(batch);
  submitted += batch.length;

  if (status === 200 || status === 202) {
    console.log(`IndexNow: submitted ${batch.length} URLs (HTTP ${status})`);
  } else {
    console.error(`IndexNow: batch failed with HTTP ${status}`);
    process.exitCode = 1;
  }
}

console.log(`IndexNow: done, ${submitted} URLs total from sitemap.`);
