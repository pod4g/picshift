#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const swPath = resolve(dist, 'sw.js');
const headersPath = resolve(dist, '_headers');
const registrationPath = resolve(dist, 'registerSW.js');
const rootHtmlPath = resolve(dist, 'index.html');

const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

check(existsSync(swPath), 'dist/sw.js is missing; run the production build first');
check(existsSync(headersPath), 'dist/_headers is missing; static cache headers were not emitted');
check(existsSync(registrationPath), 'dist/registerSW.js is missing; early registration was not emitted');
check(existsSync(rootHtmlPath), 'dist/index.html is missing; run the production build first');

if (failures.length > 0) {
  console.error(`PWA audit failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

const sw = readFileSync(swPath, 'utf8');
const registration = readFileSync(registrationPath, 'utf8');
const rootHtml = readFileSync(rootHtmlPath, 'utf8');
const registrationTag = rootHtml.match(
  /<script\b(?=[^>]*\bsrc=["']\/registerSW\.js["'])[^>]*>/i,
)?.[0] ?? '';
check(Boolean(registrationTag), 'the root page does not load /registerSW.js');
check(
  /\basync(?:\s|=|>)/i.test(registrationTag),
  '/registerSW.js must load asynchronously so it cannot block HTML parsing',
);
const manifestMatch = sw.match(/precacheAndRoute\((\[[\s\S]*?\])(?:,|\))/);
check(Boolean(manifestMatch), 'could not locate the Workbox precache manifest');

let entries = [];
if (manifestMatch) {
  try {
    // Terser removes quotes from object keys, so normalize the generated object
    // literals before parsing them as JSON.
    const jsonManifest = manifestMatch[1]
      .replace(/([{,])url:/g, '$1"url":')
      .replace(/,revision:/g, ',"revision":');
    entries = JSON.parse(jsonManifest);
  } catch (error) {
    failures.push(`could not parse the Workbox precache manifest: ${error.message}`);
  }
}

const urls = entries.map(({ url }) => url.replace(/^\//, ''));
const entryBytes = entries.reduce((total, { url }) => {
  const outputPath = url === '/' ? 'index.html' : url.replace(/^\//, '');
  const file = resolve(dist, outputPath);
  check(existsSync(file), `precache entry does not exist in dist: ${url}`);
  return total + (existsSync(file) ? statSync(file).size : 0);
}, 0);

// The install payload is deliberately bounded. Heavy or use-specific files must
// enter Cache Storage through a runtime route, never through the install event.
check(entries.length <= 24, `precache has ${entries.length} entries; expected no more than 24`);
check(entryBytes <= 512 * 1024, `precache is ${entryBytes} bytes; expected no more than 512 KiB`);
check(urls.includes('') || urls.includes('index.html'), 'the installable root app shell is not precached');
check(urls.includes('registerSW.js'), 'the early Service Worker registration script is not precached');
check(urls.some((url) => url.startsWith('_astro/') && url.endsWith('.css')), 'app-shell CSS is not precached');
check(urls.includes('fonts/inter-400.woff2'), 'primary Inter 400 font is not precached');
check(urls.includes('fonts/inter-700.woff2'), 'primary Inter 700 font is not precached');
check(!urls.some((url) => url.endsWith('.js') && url !== 'registerSW.js'), 'application JavaScript must be runtime-cached');
check(!urls.some((url) => url.endsWith('.wasm')), 'WASM codecs must be runtime-cached');
check(!urls.some((url) => url.startsWith('blog/')), 'blog images must be cached on access');
check(!urls.includes('og-image.png'), 'the Open Graph image must be cached on access');
check(
  registration.includes("navigator.serviceWorker.register('/sw.js', { scope: '/' })"),
  'the registration script does not start Service Worker registration immediately',
);
check(
  registration.includes("document.querySelectorAll('astro-island')") &&
    registration.includes("island.getAttribute('component-url')") &&
    registration.includes("island.getAttribute('renderer-url')"),
  'the registration script does not warm hydration modules that raced ahead of first control',
);
check(
  registration.includes("url.pathname.startsWith('/_astro/')") &&
    registration.includes("url.pathname.startsWith('/wasm/')"),
  'runtime warm-up is not restricted to same-origin app and codec assets',
);
check(
  registration.includes("window.addEventListener('picshift:runtime-assets'") &&
    registration.includes('window.__picshiftRuntimeAssets') &&
    registration.includes('window.__picshiftRuntimeAssetSinkReady = true') &&
    registration.includes("headers: { [PAGE_WARM_HEADER]: 'page' }") &&
    registration.includes('const controlledAtLoad = Boolean(navigator.serviceWorker.controller)') &&
    registration.includes('controlledAtLoad ? Promise.resolve() : warmCurrentPage()'),
  'first-control warm-up does not replay worker assets and the current page',
);
check(
  registration.includes('if (!response.ok) throw') &&
    registration.indexOf('warmedRuntimeAssets.add(url)') > registration.indexOf('await fetch(url'),
  'runtime assets are marked warm before a successful response is confirmed',
);

function runtimeBlock(cacheName) {
  const marker = `cacheName:"${cacheName}"`;
  const markerIndex = sw.indexOf(marker);
  if (markerIndex === -1) return '';
  const start = sw.lastIndexOf('registerRoute(', markerIndex);
  const end = sw.indexOf('),"GET")', markerIndex);
  return start >= 0 && end >= 0 ? sw.slice(start, end) : '';
}

function checkRuntimeContract({
  cacheName,
  label,
  strategy,
  maxEntries,
  maxAgeSeconds,
  networkTimeoutSeconds,
  routeChecks,
}) {
  const block = runtimeBlock(cacheName);
  check(Boolean(block), `missing runtime cache for ${label} (${cacheName})`);
  if (!block) return;
  check(
    new RegExp(`new \\w+\\.${strategy}\\(`).test(block),
    `${label} does not use ${strategy}`,
  );
  for (const [pattern, message] of routeChecks) {
    check(pattern.test(block), `${label} ${message}`);
  }
  check(block.includes('statuses:[0,200]'), `${label} is missing cacheable statuses 0/200`);
  const readNumber = (key) => {
    const raw = block.match(new RegExp(`${key}:(-?\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?)`, 'i'))?.[1];
    return raw === undefined ? null : Number(raw);
  };
  check(readNumber('maxEntries') === maxEntries, `${label} maxEntries is not ${maxEntries}`);
  check(
    readNumber('maxAgeSeconds') === maxAgeSeconds,
    `${label} maxAgeSeconds is not ${maxAgeSeconds}`,
  );
  if (networkTimeoutSeconds !== undefined) {
    check(
      readNumber('networkTimeoutSeconds') === networkTimeoutSeconds,
      `${label} network timeout is not ${networkTimeoutSeconds}s`,
    );
  }
}

checkRuntimeContract({
  cacheName: 'picshift-assets-v1',
  label: 'fingerprinted /_astro assets',
  strategy: 'CacheFirst',
  maxEntries: 120,
  maxAgeSeconds: 31_536_000,
  routeChecks: [[/startsWith\("\/_astro\/"\)/, 'is not bound to /_astro requests']],
});
check(
  runtimeBlock('picshift-assets-v1').includes('matchOptions:{ignoreVary:!0}'),
  'fingerprinted /_astro assets do not ignore response Vary headers for URL-stable offline matching',
);
checkRuntimeContract({
  cacheName: 'picshift-codecs-v2',
  label: 'fixed-name /wasm codecs',
  strategy: 'NetworkFirst',
  maxEntries: 12,
  maxAgeSeconds: 7_776_000,
  networkTimeoutSeconds: 5,
  routeChecks: [[/startsWith\("\/wasm\/"\)/, 'is not bound to /wasm requests']],
});
checkRuntimeContract({
  cacheName: 'picshift-images-v1',
  label: 'blog and Open Graph images',
  strategy: 'StaleWhileRevalidate',
  maxEntries: 32,
  maxAgeSeconds: 2_592_000,
  routeChecks: [
    [/"image"===\w+\.destination/, 'is not restricted to image requests'],
    [/startsWith\("\/blog\/"\)/, 'is not bound to blog images'],
    [/"\/og-image\.png"===\w+\.pathname/, 'is not bound to the Open Graph image'],
  ],
});
checkRuntimeContract({
  cacheName: 'picshift-pages',
  label: 'page navigations',
  strategy: 'NetworkFirst',
  maxEntries: 24,
  maxAgeSeconds: 604_800,
  networkTimeoutSeconds: 3,
  routeChecks: [
    [/"navigate"===\w+\.mode/, 'is not bound to navigation requests'],
    [/X-PicShift-Cache-Warm/, 'does not accept the explicit current-page warm-up marker'],
  ],
});
check(
  /matchOptions:\{(?=[^}]*ignoreVary:!0)(?=[^}]*ignoreSearch:!0)/.test(
    runtimeBlock('picshift-pages'),
  ),
  'page cache does not ignore response Vary and referral query variants for canonical offline matching',
);

// Prove every emitted codec/worker payload is covered by one of the two runtime
// caches. Both runtime strategies retain a successful response, so a codec that
// completed one online load remains usable offline. A codec never requested by
// the browser is intentionally absent and is not promised offline.
const astroDir = resolve(dist, '_astro');
const astroFiles = readdirSync(astroDir);
const builtJavaScript = astroFiles
  .filter((file) => file.endsWith('.js'))
  .map((file) => readFileSync(resolve(astroDir, file), 'utf8'))
  .join('\n');
const publicCodecRefs = new Set(
  [...builtJavaScript.matchAll(/\/wasm\/[A-Za-z0-9._-]+\.wasm/g)].map(([url]) => url),
);
const expectedPublicCodecs = [
  '/wasm/avif_enc.wasm',
  '/wasm/imagequant_bg.wasm',
  '/wasm/mozjpeg_enc.wasm',
  '/wasm/squoosh_oxipng_bg.wasm',
  '/wasm/webp_enc.wasm',
  '/wasm/webp_enc_simd.wasm',
];
for (const url of expectedPublicCodecs) {
  check(publicCodecRefs.has(url), `built conversion worker does not reference expected codec: ${url}`);
}
for (const url of publicCodecRefs) {
  check(existsSync(resolve(dist, url.slice(1))), `referenced public codec is missing: ${url}`);
}
const workerPayloads = astroFiles.filter((file) => /(?:convert-worker|\.worker-).*\.js$/.test(file));
const fingerprintedCodecPayloads = astroFiles.filter((file) =>
  /(?:libheif|avif_enc|webp_enc|mozjpeg|imagequant|oxipng).*(?:\.js|\.wasm)$/.test(file),
);
check(workerPayloads.length > 0, 'no emitted conversion worker was found under /_astro');
check(fingerprintedCodecPayloads.length > 0, 'no emitted fingerprinted codec payload was found under /_astro');
check(
  [...publicCodecRefs].every((url) => url.startsWith('/wasm/')),
  'a fixed-name codec is not covered by the /wasm runtime route',
);
check(
  [...workerPayloads, ...fingerprintedCodecPayloads].every((url) => !urls.includes(`_astro/${url}`)),
  'worker or codec payload unexpectedly entered the install precache',
);

const headers = readFileSync(headersPath, 'utf8');
const headerBlocks = new Map();
let currentHeaderPath = null;
for (const line of headers.split(/\r?\n/)) {
  if (!line.trim()) {
    currentHeaderPath = null;
  } else if (!/^\s/.test(line)) {
    currentHeaderPath = line.trim();
    headerBlocks.set(currentHeaderPath, []);
  } else if (currentHeaderPath) {
    headerBlocks.get(currentHeaderPath).push(line.trim());
  }
}
const astroHeaders = (headerBlocks.get('/_astro/*') ?? []).join('\n');
const wasmHeaders = (headerBlocks.get('/wasm/*') ?? []).join('\n');
const serviceWorkerHeaders = (headerBlocks.get('/sw.js') ?? []).join('\n');
const registrationHeaders = (headerBlocks.get('/registerSW.js') ?? []).join('\n');
check(
  /Cache-Control:[^\n]*max-age=31536000[^\n]*immutable/i.test(astroHeaders),
  '/_astro headers are not one-year immutable',
);
check(/max-age=0/.test(wasmHeaders), '/wasm headers must revalidate fixed-name codecs online');
check(/must-revalidate/.test(wasmHeaders), '/wasm headers are missing must-revalidate');
check(!/stale-while-revalidate/i.test(wasmHeaders), '/wasm headers must not serve a stale codec while online');
check(!/immutable/i.test(wasmHeaders), '/wasm fixed-name resources must not be immutable');
for (const [label, value] of [
  ['/sw.js', serviceWorkerHeaders],
  ['/registerSW.js', registrationHeaders],
]) {
  check(/no-cache/i.test(value), `${label} headers are missing no-cache`);
  check(/max-age=0/i.test(value), `${label} headers are missing max-age=0`);
  check(/must-revalidate/i.test(value), `${label} headers are missing must-revalidate`);
}

if (failures.length > 0) {
  console.error(`PWA audit failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log('PWA audit passed');
console.log(`- App-shell precache: ${entries.length} entries, ${entryBytes} bytes`);
console.log('- Navigations: NetworkFirst');
console.log('- Fingerprinted /_astro assets: CacheFirst on first use');
console.log('- Fixed-name /wasm codecs: NetworkFirst on first use, cached fallback offline');
console.log(`- Runtime-covered codec payloads: ${publicCodecRefs.size} fixed-name, ${fingerprintedCodecPayloads.length} fingerprinted, ${workerPayloads.length} workers`);
console.log('- Offline contract: a successfully used codec is retained; an unused codec is not promised offline');
