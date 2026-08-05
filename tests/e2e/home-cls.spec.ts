import { expect, test, type Page } from '@playwright/test';

type HomeLayoutMetrics = {
  cls: number;
  sawFallback: boolean;
  sawMountedConverter: boolean;
  sawDuplicateConverter: boolean;
};

async function installHomeLayoutObserver(page: Page) {
  await page.addInitScript(() => {
    const metrics: HomeLayoutMetrics = {
      cls: 0,
      sawFallback: false,
      sawMountedConverter: false,
      sawDuplicateConverter: false,
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
      }>) {
        if (entry.hadRecentInput) continue;
        metrics.cls += entry.value;
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
});

declare global {
  interface Window {
    __homeLayoutMetrics: HomeLayoutMetrics;
  }
}
