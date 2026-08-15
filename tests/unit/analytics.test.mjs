import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

import {
  normalizeConvertError,
  trackConvertComplete,
  trackConvertError,
  trackDownloadSingle,
  trackDownloadZip,
  trackMetadataDownload,
  trackPwaInstall,
} from '../../src/lib/analytics.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

function captureEvents(callback) {
  const previousWindow = globalThis.window;
  const payloads = [];
  globalThis.window = {
    umami: {
      track(payload) {
        assert.equal(typeof payload, 'function');
        payloads.push(payload({ url: '/webp-to-jpg', website: 'picshift' }));
      },
    },
  };

  try {
    callback();
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
  return payloads;
}

test('normalizes raw conversion failures into bounded reasons', () => {
  assert.equal(normalizeConvertError('Out of memory allocating image heap'), 'memory');
  assert.equal(normalizeConvertError('Failed to fetch WASM module'), 'runtime_asset');
  assert.equal(normalizeConvertError('Failed to decode HEIC'), 'decode');
  assert.equal(normalizeConvertError('AVIF encoder failed'), 'encode');
  assert.equal(normalizeConvertError('Worker error'), 'worker');
  assert.equal(normalizeConvertError('private browser detail 123'), 'unknown');
});

test('keeps only the compact result taxonomy and never sends raw errors', () => {
  const payloads = captureEvents(() => {
    trackConvertComplete('webp');
    trackConvertError('Failed to decode private-file-name.png');
    trackDownloadSingle();
    trackDownloadZip();
    trackMetadataDownload();
    trackPwaInstall();
  });

  assert.deepEqual(payloads.map((payload) => payload.name), [
    'convert_complete',
    'convert_error',
    'download_single',
    'download_zip',
    'metadata_download',
    'pwa_install_click',
  ]);
  assert.deepEqual(payloads[0].data, { to: 'webp' });
  assert.deepEqual(payloads[1].data, { reason: 'decode' });
  for (const payload of payloads.slice(2)) assert.equal('data' in payload, false);
  assert.doesNotMatch(JSON.stringify(payloads), /private-file-name/);

  const formatPreserving = captureEvents(() => trackConvertComplete());
  assert.equal('data' in formatPreserving[0], false);
});

test('production tracker is domain-scoped and retired high-volume callsites stay removed', () => {
  const layout = readFileSync(resolve(root, 'src/layouts/Layout.astro'), 'utf8');
  assert.match(layout, /data-domains="picshift\.app"/);
  assert.match(layout, /data-performance="true"/);

  const implementation = [
    'src/lib/analytics.ts',
    'src/components/converter/Converter.tsx',
    'src/hooks/useConverter.ts',
    'src/components/metadata/MetadataRemoverTool.tsx',
    'src/components/tool/ToolCard.astro',
    'src/pages/blog/[slug].astro',
  ].map((path) => readFileSync(resolve(root, path), 'utf8')).join('\n');

  for (const retiredEvent of [
    'file_add',
    'file_format',
    'format_select',
    'convert_file',
    'compare_open',
    'clear_all',
    'tool_card_click',
    'metadata_scan',
    'metadata_clean',
    'metadata_clear',
    'blog_link_click',
  ]) {
    assert.doesNotMatch(implementation, new RegExp(`['"]${retiredEvent}['"]`));
  }
  assert.doesNotMatch(implementation, /data-umami-event/);
});
