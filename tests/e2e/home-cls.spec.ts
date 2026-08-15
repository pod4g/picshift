import { expect, test, type Page } from './fixtures';

type HomeLayoutMetrics = {
  cls: number;
  sawFallback: boolean;
  sawMountedConverter: boolean;
  sawDuplicateConverter: boolean;
  shifts: Array<{ value: number; at: number; sources: string[] }>;
};

async function installHomeLayoutObserver(page: Page) {
  await page.addInitScript(() => {
    const metrics: HomeLayoutMetrics = {
      cls: 0,
      sawFallback: false,
      sawMountedConverter: false,
      sawDuplicateConverter: false,
      shifts: [],
    };

    Object.defineProperty(window, '__homeLayoutMetrics', {
      value: metrics,
      configurable: false,
      writable: false,
    });

    const inspectConverterDom = () => {
      const fallback = document.querySelector('#converter-skeleton');
      const converter = document.querySelector('[data-converter-mounted]');
      metrics.sawFallback ||= fallback !== null;
      metrics.sawMountedConverter ||= converter !== null;
      metrics.sawDuplicateConverter ||= fallback !== null && converter !== null;
    };

    const startMutationObserver = () => {
      if (!document.documentElement) {
        requestAnimationFrame(startMutationObserver);
        return;
      }
      inspectConverterDom();
      new MutationObserver(inspectConverterDom).observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    };

    startMutationObserver();

    new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as Array<PerformanceEntry & {
        hadRecentInput: boolean;
        value: number;
        sources?: Array<{ node?: Node | null }>;
      }>) {
        if (entry.hadRecentInput) continue;
        metrics.cls += entry.value;
        metrics.shifts.push({
          value: entry.value,
          at: entry.startTime,
          sources: (entry.sources ?? []).map(({ node }) => {
            if (!(node instanceof Element)) return node?.nodeName ?? 'unknown';
            if (node.id) return `#${node.id}`;
            const classes = Array.from(node.classList).slice(0, 3).join('.');
            return `${node.tagName.toLowerCase()}${classes ? `.${classes}` : ''}`;
          }),
        });
      }
    }).observe({ type: 'layout-shift', buffered: true });
  });
}

async function readHomeLayoutMetrics(page: Page): Promise<HomeLayoutMetrics> {
  return page.evaluate(() => (
    window as Window & { __homeLayoutMetrics: HomeLayoutMetrics }
  ).__homeLayoutMetrics);
}

test.describe('首页转换器布局稳定性', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('骨架与挂载后的转换器都沿用本地格式和质量偏好', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('picshift_prefs', JSON.stringify({
        outputFormat: 'webp',
        quality: 73,
      }));
    });
    let delayedConverterRequest = false;
    await page.route(
      /(?:\/src\/components\/converter\/Converter\.tsx|\/_astro\/Converter\.[^/?]+\.js)(?:\?|$)/,
      async (route) => {
        delayedConverterRequest = true;
        await new Promise((resolve) => setTimeout(resolve, 750));
        await route.continue();
      },
    );

    await page.goto('/', { waitUntil: 'commit' });

    const fallback = page.locator('#converter-skeleton');
    await expect(fallback).toBeVisible();
    await expect(fallback.locator('[data-skel-fmt="webp"]')).toHaveClass(/bg-primary-500/);
    await expect(fallback.locator('#skel-quality-val')).toHaveText('73%');
    await expect(fallback.locator('input[type="range"]')).toHaveValue('73');

    await expect(page.locator('[data-converter-mounted]')).toBeVisible({ timeout: 30_000 });
    await expect(page.locator('#converter-skeleton')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'WebP', exact: true })).toHaveClass(/text-white/);
    await expect(page.locator('#quality-slider')).toHaveValue('73');
    expect(delayedConverterRequest).toBe(true);
  });

  test('PNG 转换默认进入 95+ 的无损优化路径', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('picshift_prefs', JSON.stringify({
        outputFormat: 'png',
        quality: 73,
      }));
    });
    await page.route(
      /(?:\/src\/components\/converter\/Converter\.tsx|\/_astro\/Converter\.[^/?]+\.js)(?:\?|$)/,
      async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 750));
        await route.continue();
      },
    );

    await page.goto('/', { waitUntil: 'commit' });
    await expect(page.locator('#converter-skeleton')).toBeVisible();
    await expect(page.locator('#skel-quality-val')).toHaveText('100%');
    await expect(page.locator('[data-converter-mounted]')).toBeVisible({ timeout: 30_000 });
    await expect(page.locator('#quality-slider')).toHaveValue('100');

    await page.goto('/webp-to-png');
    await expect(page.locator('[data-converter-mounted]')).toBeVisible({ timeout: 30_000 });
    await expect(page.locator('#quality-slider')).toHaveValue('100');
  });

  for (const { route, viewport } of [
    { route: '/', viewport: { width: 390, height: 844 } },
    { route: '/es', viewport: { width: 390, height: 844 } },
    { route: '/ru', viewport: { width: 320, height: 568 } },
  ]) {
    test(`${route} 挂载时原子替换骨架且移动端 CLS 保持稳定`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await installHomeLayoutObserver(page);

      const cdp = await page.context().newCDPSession(page);
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });

      await page.goto(route);
      await expect(page.locator('[data-converter-mounted]')).toBeVisible({ timeout: 30_000 });
      await expect(page.locator('#converter-skeleton')).toHaveCount(0);
      await page.waitForTimeout(1_000);

      const metrics = await readHomeLayoutMetrics(page);
      expect(metrics.sawFallback).toBe(true);
      expect(metrics.sawMountedConverter).toBe(true);
      expect(metrics.sawDuplicateConverter).toBe(false);
      expect(metrics.cls).toBeLessThan(0.1);
    });
  }

  test('移动端单图转换完成后不会把后续首页内容明显推移', async ({ page }) => {
    await installHomeLayoutObserver(page);
    await page.addInitScript(() => {
      const NativeWorker = window.Worker;
      class DelayedWorker extends NativeWorker {
        postMessage(message: any, transfer: Transferable[]): void;
        postMessage(message: any, options?: StructuredSerializeOptions): void;
        postMessage(message: any, optionsOrTransfer?: StructuredSerializeOptions | Transferable[]) {
          window.setTimeout(() => {
            if (Array.isArray(optionsOrTransfer)) super.postMessage(message, optionsOrTransfer);
            else super.postMessage(message, optionsOrTransfer);
          }, 750);
        }
      }
      Object.defineProperty(window, 'Worker', { value: DelayedWorker });
    });
    await page.goto('/zh');
    await expect(page.locator('[data-converter-mounted]')).toBeVisible({ timeout: 30_000 });
    await expect(page.locator('#converter-skeleton')).toHaveCount(0);

    await page.evaluate(() => {
      window.__homeLayoutMetrics.cls = 0;
    });

    await page.waitForTimeout(750);
    await page.evaluate(async () => {
      const source = await fetch('/favicon-32x32.png').then((response) => response.blob());
      const transfer = new DataTransfer();
      transfer.items.add(new File([source], 'fixture.png', { type: 'image/png' }));
      const input = document.querySelector<HTMLInputElement>('input[aria-label="Upload image files"]');
      if (!input) throw new Error('Upload input not found');
      input.files = transfer.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
    await expect(page.getByTitle('Download converted file').first()).toBeVisible({ timeout: 90_000 });
    await page.waitForTimeout(1_000);

    const metrics = await readHomeLayoutMetrics(page);
    expect(metrics.cls, JSON.stringify(metrics.shifts)).toBeLessThan(0.05);
  });
});

declare global {
  interface Window {
    __homeLayoutMetrics: HomeLayoutMetrics;
  }
}
