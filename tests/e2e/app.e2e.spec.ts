import { expect, test, type Page } from '@playwright/test';
import path from 'node:path';

const fixturePng16 = path.join(process.cwd(), 'public', 'favicon-16x16.png');
const fixturePng32 = path.join(process.cwd(), 'public', 'favicon-32x32.png');

async function gotoHomeAndWaitConverter(page: Page) {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  // 等待 React 挂载后移除骨架，避免误点到禁用按钮
  await page.locator('#converter-skeleton').waitFor({ state: 'detached', timeout: 30_000 });
  await expect(page.getByLabel('Upload image files')).toBeAttached();
}

async function waitForConversionDone(page: Page) {
  await expect(page.getByTitle('Download converted file').first()).toBeVisible({ timeout: 90_000 });
}

test.describe('PicShift 核心 E2E', () => {
  test('首页结构与关键入口可用', async ({ page }) => {
    await gotoHomeAndWaitConverter(page);

    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('#all-converters')).toBeVisible();
    await expect(page.getByRole('link', { name: 'All docs' })).toBeVisible();
    await expect(page.locator('a[href="/privacy"]').first()).toBeVisible();
  });

  test('单图上传后可转换并下载', async ({ page }) => {
    await gotoHomeAndWaitConverter(page);

    await page.getByRole('button', { name: 'WebP', exact: true }).click();
    await page.getByLabel('Upload image files').setInputFiles(fixturePng32);

    await waitForConversionDone(page);

    await expect(page.locator('span[title*="WEBP"]').first()).toBeVisible();
    await expect(page.locator('text=/[-+]\\d+%/').first()).toBeVisible();

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByTitle('Download converted file').first().click(),
    ]);
    expect(download.suggestedFilename().toLowerCase()).toContain('.webp');
  });

  test('批量上传可触发 Download All ZIP', async ({ page }) => {
    await gotoHomeAndWaitConverter(page);

    await page.getByLabel('Upload image files').setInputFiles([fixturePng16, fixturePng32]);
    await expect(page.getByTitle('Remove file')).toHaveCount(2, { timeout: 20_000 });

    const downloadAllButton = page.getByRole('button', { name: /Download All as ZIP \(\d+\)/ });
    await expect(downloadAllButton).toBeVisible({ timeout: 60_000 });
    await expect(downloadAllButton).toBeEnabled({ timeout: 90_000 });

    const [zipDownload] = await Promise.all([
      page.waitForEvent('download'),
      downloadAllButton.click(),
    ]);
    expect(zipDownload.suggestedFilename().toLowerCase()).toContain('.zip');
  });

  test('工具页与多语言页面路由正常', async ({ page }) => {
    await page.goto('/image-compressor');
    await expect(page.getByRole('heading', { level: 1, name: /Compress Images/i })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: /Related guides/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Why Output Size Can Increase/i })).toBeVisible();

    await page.goto('/ar/docs/why-picshift');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
});
