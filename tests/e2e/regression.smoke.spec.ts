import { expect, test } from '@playwright/test';

const coreDocs = [
  '/docs/privacy-local-processing',
  '/docs/format-compatibility',
  '/docs/image-quality-vs-file-size',
  '/docs/size-increase-explainer',
  '/docs/why-picshift',
];

test.describe('回归 Smoke：路由与内链', () => {
  test('Docs 聚合页包含关键卡片链接（英文 + 中文）', async ({ page }) => {
    await page.goto('/docs');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    for (const href of coreDocs) {
      await expect(page.locator(`a[href="${href}"]`).first()).toBeVisible();
    }

    await page.goto('/zh/docs');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    for (const href of coreDocs) {
      await expect(page.locator(`a[href="/zh${href}"]`).first()).toBeVisible();
    }
  });

  test('核心 docs 页面可访问且包含更新时间', async ({ page }) => {
    for (const href of coreDocs) {
      await page.goto(href);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      // 日期集中由 contentDates.ts 管理，这里做可见性回归校验
      await expect(page.locator('text=/2026-03-\\d{2}/').first()).toBeVisible();
    }
  });

  test('多语言首页路由可用（含 RTL）', async ({ page }) => {
    const locales = ['zh', 'ja', 'es', 'ar'] as const;
    for (const lang of locales) {
      await page.goto(`/${lang}`);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
    }

    await page.goto('/ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  });

  test('工具页抽样 smoke（英文 + 中文）', async ({ page }) => {
    const sampleToolSlugs = ['image-compressor', 'heic-to-jpg', 'png-to-webp', 'avif-to-jpg'];

    for (const slug of sampleToolSlugs) {
      await page.goto(`/${slug}`);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.getByLabel('Upload image files')).toBeAttached();
      await expect(page.locator('a[href="/docs/size-increase-explainer"]').first()).toBeVisible();
    }

    for (const slug of sampleToolSlugs) {
      await page.goto(`/zh/${slug}`);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.getByLabel('Upload image files')).toBeAttached();
      await expect(page.locator('a[href="/zh/docs/size-increase-explainer"]').first()).toBeVisible();
    }
  });

  test('高曝光多语言工具页显示本地化 FAQ 内容', async ({ page }) => {
    await page.goto('/ja/image-compressor');
    await expect(page.getByText('画像圧縮と画像リサイズはどう使い分けますか？')).toBeVisible();

    await page.goto('/es/webp-to-jpg');
    await expect(page.getByText('Como convertir WebP a JPG online?')).toBeVisible();

    await page.goto('/pt/avif-to-jpg');
    await expect(page.getByText('Por que converter AVIF para JPG?')).toBeVisible();

    await page.goto('/ko/heic-to-jpg');
    await expect(page.getByText('왜 HEIC를 JPG로 바꾸나요?')).toBeVisible();

    await page.goto('/ar/jpg-to-png');
    await expect(page.getByText('هل التحويل من JPG إلى PNG يحسن الجودة؟')).toBeVisible();
  });
});
