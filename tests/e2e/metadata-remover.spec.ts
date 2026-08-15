import { expect, test, type Download, type Page } from './fixtures';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const fixturePath = path.join(process.cwd(), 'public', 'favicon-32x32.png');
const fixturePng = Uint8Array.from(readFileSync(fixturePath));
const textEncoder = new TextEncoder();

const crcTable = new Uint32Array(256);
for (let index = 0; index < crcTable.length; index += 1) {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) {
    value = (value & 1) !== 0
      ? 0xedb88320 ^ (value >>> 1)
      : value >>> 1;
  }
  crcTable[index] = value >>> 0;
}

function crc32(bytes: Uint8Array): number {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function concatBytes(parts: readonly Uint8Array[]): Uint8Array {
  const output = new Uint8Array(
    parts.reduce((total, part) => total + part.byteLength, 0),
  );
  let offset = 0;
  for (const part of parts) {
    output.set(part, offset);
    offset += part.byteLength;
  }
  return output;
}

function pngChunk(type: string, data: Uint8Array): Uint8Array {
  const typeBytes = textEncoder.encode(type);
  const chunk = new Uint8Array(12 + data.length);
  const view = new DataView(chunk.buffer);
  view.setUint32(0, data.length);
  chunk.set(typeBytes, 4);
  chunk.set(data, 8);
  view.setUint32(8 + data.length, crc32(concatBytes([typeBytes, data])));
  return chunk;
}

function injectAfterIhdr(
  source: Uint8Array,
  type: string,
  data: Uint8Array,
): Uint8Array {
  const ihdrLength = new DataView(
    source.buffer,
    source.byteOffset,
    source.byteLength,
  ).getUint32(8);
  const ihdrEnd = 8 + 12 + ihdrLength;
  return concatBytes([
    source.subarray(0, ihdrEnd),
    pngChunk(type, data),
    source.subarray(ihdrEnd),
  ]);
}

function includesBytes(source: Uint8Array, target: Uint8Array): boolean {
  return source.findIndex((_, start) => (
    start + target.length <= source.length &&
    target.every((byte, offset) => source[start + offset] === byte)
  )) >= 0;
}

function equalBytes(left: Uint8Array, right: Uint8Array): boolean {
  return left.length === right.length && left.every(
    (byte, index) => byte === right[index],
  );
}

async function readDownload(download: Download): Promise<Uint8Array> {
  const stream = await download.createReadStream();
  const chunks: Uint8Array[] = [];
  for await (const chunk of stream as AsyncIterable<Uint8Array>) {
    chunks.push(Uint8Array.from(chunk));
  }
  return concatBytes(chunks);
}

async function openMetadataTool(page: Page) {
  await page.goto('/metadata-remover');
  const input = page.getByLabel('Select images');
  await expect(input).toBeAttached();
  await expect.poll(() => input.evaluate((element) => (
    !element.closest('astro-island')?.hasAttribute('ssr')
  ))).toBe(true);
}

async function reencodeAndDownload(page: Page): Promise<Uint8Array> {
  await page.getByRole('button', { name: 'Re-encode images & download' }).click({ force: true });
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download re-encoded image' }).click({ force: true });
  return readDownload(await downloadPromise);
}

async function createAvifFixture(page: Page): Promise<Uint8Array> {
  await page.goto('/');
  await page.locator('#converter-skeleton').waitFor({
    state: 'detached',
    timeout: 30_000,
  });
  await page.getByRole('button', { name: 'AVIF', exact: true }).click({ force: true });
  await page.getByLabel('Upload image files').setInputFiles(fixturePath);
  const downloadButton = page.getByTitle('Download converted file').first();
  await expect(downloadButton).toBeVisible({ timeout: 90_000 });
  const downloadPromise = page.waitForEvent('download');
  await downloadButton.click({ force: true });
  return readDownload(await downloadPromise);
}

test.describe('Metadata Remover 安全边界', () => {
  test('未知 PNG ancillary chunk 即使未被扫描识别也必须重编码并移除', async ({ page }) => {
    await page.route('https://cloud.umami.is/script.js', (route) => route.abort());
    await page.addInitScript(() => {
      (window as Window & { __metadataAnalytics?: Array<Record<string, unknown>> })
        .__metadataAnalytics = [];
      window.umami = {
        track: (payload) => {
          if (typeof payload !== 'function') return;
          (window as Window & { __metadataAnalytics?: Array<Record<string, unknown>> })
            .__metadataAnalytics?.push(payload({ url: window.location.pathname }));
        },
      };
    });
    const input = injectAfterIhdr(
      fixturePng,
      'ruSt',
      textEncoder.encode('private custom metadata'),
    );
    expect(includesBytes(input, textEncoder.encode('ruSt'))).toBe(true);

    await openMetadataTool(page);
    await page.getByLabel('Select images').setInputFiles({
      name: 'unknown-metadata.png',
      mimeType: 'image/png',
      buffer: Buffer.from(input),
    });
    await expect(page.getByText('unknown-metadata.png', { exact: true })).toBeVisible();
    await expect(page.getByText(
      'No supported metadata fields were detected. The image will still be decoded and re-encoded before download.',
    )).toBeVisible();

    const output = await reencodeAndDownload(page);
    expect(equalBytes(output, input)).toBe(false);
    expect(includesBytes(output, textEncoder.encode('ruSt'))).toBe(false);
    expect(equalBytes(output.subarray(0, 8), fixturePng.subarray(0, 8))).toBe(true);
    await expect.poll(() => page.evaluate(() => (
      (window as Window & { __metadataAnalytics?: Array<Record<string, unknown>> })
        .__metadataAnalytics?.map((payload) => payload.name) ?? []
    ))).toEqual(['metadata_download']);
    const payload = await page.evaluate(() => (
      (window as Window & { __metadataAnalytics?: Array<Record<string, unknown>> })
        .__metadataAnalytics?.[0]
    ));
    expect(payload).not.toHaveProperty('data');
  });

  test('解析异常会明确显示，仍可安全重编码且不会保留损坏的 eXIf chunk', async ({ page }) => {
    const input = injectAfterIhdr(fixturePng, 'eXIf', new Uint8Array([1, 2, 3]));
    expect(includesBytes(input, textEncoder.encode('eXIf'))).toBe(true);

    await openMetadataTool(page);
    await page.getByLabel('Select images').setInputFiles({
      name: 'broken-exif.png',
      mimeType: 'image/png',
      buffer: Buffer.from(input),
    });
    await expect(page.getByText('broken-exif.png', { exact: true })).toBeVisible();
    await expect(
      page.getByText('Metadata scan could not be completed', { exact: false }).first(),
    ).toBeVisible();
    await expect(page.getByText('0 fields found', { exact: false })).toHaveCount(0);
    await expect(page.getByText(
      'You can still try to re-encode this image. If image decoding fails, no download will be offered.',
    )).toBeVisible();

    const output = await reencodeAndDownload(page);
    expect(equalBytes(output, input)).toBe(false);
    expect(includesBytes(output, textEncoder.encode('eXIf'))).toBe(false);
  });

  test('超过 50 MB 的单文件会被拒绝并向用户说明原因', async ({ page }) => {
    await openMetadataTool(page);
    await page.evaluate(() => {
      Object.defineProperty(File.prototype, 'size', {
        configurable: true,
        get: () => 50 * 1024 * 1024 + 1,
      });
    });
    await page.getByLabel('Select images').setInputFiles({
      name: 'too-large.png',
      mimeType: 'image/png',
      buffer: Buffer.from(fixturePng),
    });

    await expect(page.getByRole('alert')).toContainText('1 file(s) exceeded 50 MB');
    await expect(page.getByText('too-large.png')).toHaveCount(0);
  });

  test('AVIF 输入使用 WASM 编码器清理后仍输出有效 AVIF', async ({ page }) => {
    const input = await createAvifFixture(page);
    expect(new TextDecoder('ascii').decode(input.subarray(4, 12))).toBe('ftypavif');

    await openMetadataTool(page);
    await page.getByLabel('Select images').setInputFiles({
      name: 'source.avif',
      mimeType: 'image/avif',
      buffer: Buffer.from(input),
    });
    await expect(page.getByText('source.avif', { exact: true })).toBeVisible();

    const output = await reencodeAndDownload(page);
    expect(new TextDecoder('ascii').decode(output.subarray(4, 12))).toBe('ftypavif');
    expect(equalBytes(output, input)).toBe(false);
  });
});
