import { expect, test, type Page } from '@playwright/test';

function pinEnglishLanguage(page: Page) {
  // 避免被语言自动跳转影响断言稳定性
  return page.addInitScript(() => {
    localStorage.setItem('picshift_lang', 'en');
  });
}

async function readJsonLdObjects(page: Page): Promise<Array<Record<string, unknown>>> {
  const rawPayloads = await page.locator('script[type="application/ld+json"]').allTextContents();
  const objects: Array<Record<string, unknown>> = [];
  for (const payload of rawPayloads) {
    try {
      const parsed = JSON.parse(payload) as unknown;
      if (Array.isArray(parsed)) {
        parsed.forEach((item) => {
          if (item && typeof item === 'object') objects.push(item as Record<string, unknown>);
        });
      } else if (parsed && typeof parsed === 'object') {
        objects.push(parsed as Record<string, unknown>);
      }
    } catch {
      // 忽略非 JSON 内容，避免单个脚本影响整体校验
    }
  }
  return objects;
}

test.describe('SEO/GEO 守卫', () => {
  test('canonical 与 hreflang 在英文/多语言 docs 页面正确', async ({ page }) => {
    await pinEnglishLanguage(page);

    await page.goto('/docs');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://picshift.app/docs');
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', 'https://picshift.app/docs');
    await expect(page.locator('link[rel="alternate"][hreflang="zh-Hans"]')).toHaveAttribute('href', 'https://picshift.app/zh/docs');
    await expect(page.locator('link[rel="alternate"][hreflang="ar"]')).toHaveAttribute('href', 'https://picshift.app/ar/docs');

    await page.goto('/zh/docs');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://picshift.app/zh/docs');
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute('href', 'https://picshift.app/docs');
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-Hans');
  });

  test('docs 与工具页存在关键 JSON-LD 类型', async ({ page }) => {
    await pinEnglishLanguage(page);

    await page.goto('/docs');
    const docsJsonLd = await readJsonLdObjects(page);
    const docsTypes = docsJsonLd.map((item) => String(item['@type'] || ''));
    expect(docsTypes).toContain('CollectionPage');
    expect(docsTypes).toContain('BreadcrumbList');
    expect(docsTypes).toContain('ItemList');

    await page.goto('/image-compressor');
    const toolJsonLd = await readJsonLdObjects(page);
    const toolTypes = toolJsonLd.map((item) => String(item['@type'] || ''));
    expect(toolTypes).toContain('SoftwareApplication');
    expect(toolTypes).toContain('BreadcrumbList');
    expect(toolTypes).toContain('ItemList');
  });

  test('robots 与 llms 资源可访问且包含关键 GEO 字段', async ({ request }) => {
    const robotsRes = await request.get('/robots.txt');
    expect(robotsRes.ok()).toBeTruthy();
    const robotsText = await robotsRes.text();
    expect(robotsText).toContain('Allow: /llms.txt');
    expect(robotsText).toContain('Allow: /llms-full.txt');
    expect(robotsText).toContain('Sitemap: https://picshift.app/sitemap-index.xml');

    const llmsShortRes = await request.get('/llms.txt');
    expect(llmsShortRes.ok()).toBeTruthy();
    const llmsShort = await llmsShortRes.text();
    expect(llmsShort).toContain('## Version');
    expect(llmsShort).toContain('## Canonical');
    expect(llmsShort).toContain('## Related profiles');
    expect(llmsShort).toContain('## Lifecycle');
    expect(llmsShort).toContain('https://picshift.app/llms-full.txt');

    const llmsFullRes = await request.get('/llms-full.txt');
    expect(llmsFullRes.ok()).toBeTruthy();
    const llmsFull = await llmsFullRes.text();
    expect(llmsFull).toContain('## Version');
    expect(llmsFull).toContain('## Canonical');
    expect(llmsFull).toContain('## Related profiles');
    expect(llmsFull).toContain('## Lifecycle');
    expect(llmsFull).toContain('https://picshift.app/llms.txt');
  });
});
