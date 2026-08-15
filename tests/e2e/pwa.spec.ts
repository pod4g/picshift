import { expect, test, type Page } from './fixtures';
import path from 'node:path';

const fixturePng = path.join(process.cwd(), 'public', 'favicon-32x32.png');
const isProductionPreview = process.env.PLAYWRIGHT_SERVER_MODE === 'preview';

async function waitForConverter(page: Page) {
  await page.locator('#converter-skeleton').waitFor({ state: 'detached', timeout: 30_000 });
  await expect(page.getByLabel('Upload image files')).toBeAttached();
}

async function convertToAvif(page: Page) {
  await page.getByRole('button', { name: 'AVIF', exact: true }).click();
  await page.getByLabel('Upload image files').setInputFiles(fixturePng);
  await expect(page.getByTitle('Download converted file').first()).toBeVisible({ timeout: 90_000 });
  await expect(page.locator('span[title*="AVIF"]').first()).toBeVisible();
}

async function expectAvifDownload(page: Page) {
  const downloadPromise = page.waitForEvent('download');
  await page.getByTitle('Download converted file').first().click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/\.avif$/i);
  const stream = await download.createReadStream();
  const chunks: Uint8Array[] = [];
  for await (const chunk of stream as AsyncIterable<Uint8Array>) {
    chunks.push(new Uint8Array(chunk));
  }
  const output = new Uint8Array(chunks.reduce((sum, chunk) => sum + chunk.length, 0));
  let offset = 0;
  for (const chunk of chunks) {
    output.set(chunk, offset);
    offset += chunk.length;
  }
  expect(new TextDecoder('ascii').decode(output.subarray(4, 12))).toBe('ftypavif');
}

async function readCacheEvidence(page: Page) {
  return page.evaluate(async () => {
    const names = await caches.keys();
    const urls = [];
    for (const name of names) {
      const cache = await caches.open(name);
      urls.push(...(await cache.keys()).map((request) => request.url));
    }
    return { names, urls };
  });
}

test.describe('PWA 生产离线契约', () => {
  test.skip(!isProductionPreview, 'Service Worker is emitted only by the production build');

  test('非根路径首次进入后会补齐页面与水合资源缓存', async ({ context, page }) => {
    await page.goto('/es?utm_source=chatgpt.com');
    await waitForConverter(page);
    await expect.poll(
      () => page.evaluate(() => Boolean(navigator.serviceWorker.controller)),
      { timeout: 30_000 },
    ).toBe(true);
    await expect.poll(async () => {
      const { urls } = await readCacheEvidence(page);
      const islandAssets = await page.evaluate(() => {
        const island = document.querySelector('astro-island');
        return [
          island?.getAttribute('component-url'),
          island?.getAttribute('renderer-url'),
        ].filter((value): value is string => Boolean(value));
      });
      return {
        page: urls.some((url) => new URL(url).pathname === '/es'),
        converter: islandAssets.some((asset) => (
          /\/Converter\..*\.js$/.test(asset) && urls.some((url) => new URL(url).pathname === asset)
        )),
        renderer: islandAssets.some((asset) => (
          /\/client\..*\.js$/.test(asset) && urls.some((url) => new URL(url).pathname === asset)
        )),
      };
    }, { timeout: 30_000 }).toEqual({
      page: true,
      converter: true,
      renderer: true,
    });

    const cdp = await context.newCDPSession(page);
    await cdp.send('Network.clearBrowserCache');
    await context.setOffline(true);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('[data-converter-mounted]')).toBeVisible({ timeout: 30_000 });

    await context.setOffline(false);
    let frenchPageRequests = 0;
    page.on('request', (request) => {
      if (new URL(request.url()).pathname === '/fr') frenchPageRequests += 1;
    });
    await page.goto('/fr');
    await waitForConverter(page);
    await page.waitForTimeout(500);
    expect(frenchPageRequests).toBe(1);
  });

  test('转换先于首次控制时会在接管后回放 Worker 内部依赖', async ({ context, page }) => {
    await page.addInitScript(() => {
      const originalRegister = ServiceWorkerContainer.prototype.register;
      ServiceWorkerContainer.prototype.register = async function (...args) {
        await new Promise((resolve) => setTimeout(resolve, 10_000));
        return originalRegister.apply(this, args);
      };
    });

    await page.goto('/es?utm_source=chatgpt.com');
    await waitForConverter(page);
    expect(await page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(false);
    await convertToAvif(page);
    await expectAvifDownload(page);
    expect(await page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(false);

    await expect.poll(
      () => page.evaluate(() => Boolean(navigator.serviceWorker.controller)),
      { timeout: 30_000 },
    ).toBe(true);
    await expect.poll(async () => {
      const { urls } = await readCacheEvidence(page);
      return {
        page: urls.some((url) => new URL(url).pathname === '/es'),
        worker: urls.some((url) => /\/_astro\/convert-worker-.*\.js$/.test(url)),
        encoderEntry: urls.some((url) => /\/_astro\/encode-.*\.js$/.test(url)),
        avifGlue: urls.some((url) => /\/_astro\/avif_enc-.*\.js$/.test(url)),
        avifWasm: urls.some((url) => /\/wasm\/avif_enc\.wasm$/.test(url)),
      };
    }, { timeout: 30_000 }).toEqual({
      page: true,
      worker: true,
      encoderEntry: true,
      avifGlue: true,
      avifWasm: true,
    });

    const cdp = await context.newCDPSession(page);
    await cdp.send('Network.clearBrowserCache');
    await context.setOffline(true);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.locator('[data-converter-mounted]')).toBeVisible({ timeout: 30_000 });
    await convertToAvif(page);
    await expectAvifDownload(page);
  });

  test('异步注册脚本晚到时不会丢失已完成转换的 Worker 依赖', async ({ page }) => {
    await page.route('**/registerSW.js', async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 10_000));
      await route.continue();
    });

    await page.goto('/es?utm_source=chatgpt.com', { waitUntil: 'domcontentloaded' });
    await waitForConverter(page);
    expect(await page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(false);
    await convertToAvif(page);
    await expectAvifDownload(page);
    expect(await page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(false);

    await expect.poll(
      () => page.evaluate(() => Boolean(navigator.serviceWorker.controller)),
      { timeout: 30_000 },
    ).toBe(true);
    await expect.poll(async () => {
      const { urls } = await readCacheEvidence(page);
      return {
        page: urls.some((url) => new URL(url).pathname === '/es'),
        worker: urls.some((url) => /\/_astro\/convert-worker-.*\.js$/.test(url)),
        encoderEntry: urls.some((url) => /\/_astro\/encode-.*\.js$/.test(url)),
        avifGlue: urls.some((url) => /\/_astro\/avif_enc-.*\.js$/.test(url)),
        avifWasm: urls.some((url) => /\/wasm\/avif_enc\.wasm$/.test(url)),
      };
    }, { timeout: 30_000 }).toEqual({
      page: true,
      worker: true,
      encoderEntry: true,
      avifGlue: true,
      avifWasm: true,
    });
  });

  test('已受控页面不会重复请求 AVIF WASM', async ({ context, page }) => {
    await page.goto('/');
    await waitForConverter(page);
    await expect.poll(
      () => page.evaluate(() => Boolean(navigator.serviceWorker.controller)),
      { timeout: 30_000 },
    ).toBe(true);

    // Keep the Workbox runtime cache empty and bypass the browser HTTP cache so
    // each observed request represents an actual conversion/cache-warm path.
    await page.evaluate(async () => {
      await caches.delete('picshift-codecs-v2');
    });
    const cdp = await context.newCDPSession(page);
    await cdp.send('Network.clearBrowserCache');

    let avifWasmRequests = 0;
    page.on('request', (request) => {
      if (new URL(request.url()).pathname === '/wasm/avif_enc.wasm') {
        avifWasmRequests += 1;
      }
    });

    await convertToAvif(page);
    await expectAvifDownload(page);
    expect(avifWasmRequests).toBe(1);
  });

  test('首访无需重载即可接管、缓存真实 WASM 转换链，并可离线再次转换', async ({ context, page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await waitForConverter(page);

    // Exercise the real first-visit path: begin as soon as the UI is usable,
    // without making the test wait for Service Worker control first.
    await convertToAvif(page);
    await expectAvifDownload(page);
    await page.evaluate(async () => {
      const registration = await navigator.serviceWorker.ready;
      if (!registration.active) throw new Error('Service Worker did not become active');
    });
    await expect.poll(
      () => page.evaluate(() => Boolean(navigator.serviceWorker.controller)),
      { timeout: 30_000 },
    ).toBe(true);

    await expect.poll(async () => {
      const { urls } = await readCacheEvidence(page);
      return {
        converter: urls.some((url) => /\/_astro\/Converter\..*\.js$/.test(url)),
        renderer: urls.some((url) => /\/_astro\/client\..*\.js$/.test(url)),
        worker: urls.some((url) => /\/_astro\/convert-worker-.*\.js$/.test(url)),
        avif: urls.some((url) => /\/wasm\/avif_enc\.wasm$/.test(url)),
      };
    }, { timeout: 30_000 }).toEqual({
      converter: true,
      renderer: true,
      worker: true,
      avif: true,
    });

    const cacheEvidence = await readCacheEvidence(page);
    expect(cacheEvidence.names).toContain('picshift-assets-v1');
    expect(cacheEvidence.names).toContain('picshift-codecs-v2');

    const offlineAssetFailures: string[] = [];
    page.on('requestfailed', (request) => {
      const pathname = new URL(request.url()).pathname;
      if (pathname.startsWith('/_astro/') || pathname.startsWith('/wasm/')) {
        offlineAssetFailures.push(pathname);
      }
    });
    await context.setOffline(true);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect.poll(async () => {
      const offlineState = await page.evaluate(async () => ({
        controlled: Boolean(navigator.serviceWorker.controller),
        converterCached: Boolean(await caches.match(
          document.querySelector('astro-island')?.getAttribute('component-url') ?? '',
        )),
        rendererCached: Boolean(await caches.match(
          document.querySelector('astro-island')?.getAttribute('renderer-url') ?? '',
        )),
      }));
      return {
        mounted: await page.locator('[data-converter-mounted]').count() === 1,
        failedAssets: [...new Set(offlineAssetFailures)],
        ...offlineState,
      };
    }, { timeout: 30_000 }).toEqual({
      mounted: true,
      failedAssets: [],
      controlled: true,
      converterCached: true,
      rendererCached: true,
    });
    await convertToAvif(page);
    await expectAvifDownload(page);
  });
});
