import { expect, test, type Page } from './fixtures';

function pinStoredLanguage(page: Page, lang: string) {
  // 通过预置语言偏好，稳定地验证页面的实际跳转与链接行为
  return page.addInitScript((preferredLang) => {
    localStorage.setItem('picshift_lang', preferredLang);
  }, lang);
}

function pinEnglishLanguage(page: Page) {
  // 避免被语言自动跳转影响断言稳定性
  return pinStoredLanguage(page, 'en');
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

async function collectTrailingSlashInternalLinks(page: Page): Promise<string[]> {
  return page.locator('a[href^="/"]').evaluateAll((links) =>
    links
      .map((link) => link.getAttribute('href') ?? '')
      .filter((href) => {
        const normalized = href.split('#')[0]?.split('?')[0] ?? '';
        if (!normalized || normalized === '/') return false;
        const lastSeg = normalized.split('/').filter(Boolean).pop() ?? '';
        if (lastSeg.includes('.')) return false;
        return normalized.endsWith('/');
      }),
  );
}

type RobotsRule = { directive: 'allow' | 'disallow'; path: string };
type RobotsGroup = { userAgents: string[]; rules: RobotsRule[] };

function parseRobotsGroups(text: string): RobotsGroup[] {
  const groups: RobotsGroup[] = [];
  let userAgents: string[] = [];
  let rules: RobotsRule[] = [];
  let hasGroupDirective = false;
  const flush = () => {
    if (userAgents.length > 0) groups.push({ userAgents, rules });
    userAgents = [];
    rules = [];
    hasGroupDirective = false;
  };

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.replace(/\s*#.*$/, '').trim();
    if (!line) continue;
    const separator = line.indexOf(':');
    if (separator < 0) continue;
    const directive = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();
    if (directive === 'user-agent') {
      if (hasGroupDirective) flush();
      if (value) userAgents.push(value);
    } else if (userAgents.length > 0 && directive !== 'sitemap') {
      hasGroupDirective = true;
      if (directive === 'allow' || directive === 'disallow') {
        rules.push({ directive, path: value });
      }
    }
  }
  flush();
  return groups;
}

function robotsRuleMatch(pathname: string, rulePath: string): number | null {
  if (!rulePath) return null;
  const endAnchored = rulePath.endsWith('$');
  const rawPattern = endAnchored ? rulePath.slice(0, -1) : rulePath;
  const escaped = rawPattern
    .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\*/g, '.*');
  if (!new RegExp(`^${escaped}${endAnchored ? '$' : ''}`).test(pathname)) return null;
  return rawPattern.replace(/\*/g, '').length;
}

function isRobotsPathAllowed(groups: RobotsGroup[], userAgent: string, pathname: string): boolean {
  const normalizedAgent = userAgent.toLowerCase();
  const candidates = groups.map((group) => ({
    group,
    specificity: Math.max(...group.userAgents.map((token) => {
      const normalizedToken = token.toLowerCase();
      if (normalizedToken === '*') return 0;
      return normalizedAgent.includes(normalizedToken) ? normalizedToken.length : -1;
    })),
  })).filter(({ specificity }) => specificity >= 0);
  if (candidates.length === 0) return true;

  const mostSpecific = Math.max(...candidates.map(({ specificity }) => specificity));
  const rules = candidates
    .filter(({ specificity }) => specificity === mostSpecific)
    .flatMap(({ group }) => group.rules);
  let winner: (RobotsRule & { matchLength: number }) | null = null;
  for (const rule of rules) {
    const matchLength = robotsRuleMatch(pathname, rule.path);
    if (matchLength === null) continue;
    if (
      !winner
      || matchLength > winner.matchLength
      || (matchLength === winner.matchLength && rule.directive === 'allow')
    ) {
      winner = { ...rule, matchLength };
    }
  }
  return winner?.directive !== 'disallow';
}

test.describe('SEO/GEO 守卫', () => {
  test('AI 引荐只记录规范化渠道，不上传完整 referrer', async ({ page }) => {
    await page.route('https://cloud.umami.is/script.js', (route) => route.abort());
    await page.addInitScript(() => {
      (window as Window & { __aiReferralPayloads?: unknown[] }).__aiReferralPayloads = [];
      window.umami = {
        track: (payload) => {
          if (typeof payload === 'function') {
            (window as Window & { __aiReferralPayloads?: unknown[] }).__aiReferralPayloads?.push(
              payload({
                url: `${window.location.pathname}${window.location.search}`,
                referrer: 'https://chatgpt.com/c/private-conversation?query=secret',
              }),
            );
          }
        },
      };
    });

    await page.goto('/png-to-jpg?utm_source=chatgpt.com&utm_campaign=private-query');
    await expect.poll(() => page.evaluate(() => (
      (window as Window & { __aiReferralPayloads?: unknown[] }).__aiReferralPayloads?.length ?? 0
    ))).toBe(1);

    const payload = await page.evaluate(() => (
      (window as Window & { __aiReferralPayloads?: Array<Record<string, unknown>> })
        .__aiReferralPayloads?.[0]
    ));
    expect(payload).toMatchObject({
      name: 'ai_referral',
      data: { provider: 'chatgpt' },
      url: '/png-to-jpg',
    });
    expect(JSON.stringify(payload)).not.toContain('private-query');
    expect(JSON.stringify(payload)).not.toContain('private-conversation');
    expect(payload).not.toHaveProperty('referrer');
  });

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

  test('blog 列表与文章 canonical 使用无尾斜杠', async ({ page }) => {
    await pinEnglishLanguage(page);

    await page.goto('/blog');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://picshift.app/blog');

    await page.goto('/blog/png-vs-jpg');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://picshift.app/blog/png-vs-jpg');
  });

  test('英文-only 页面不会跳到不存在的本地化路径', async ({ page }) => {
    await pinStoredLanguage(page, 'zh');

    await page.goto('/blog');
    await expect(page).toHaveURL(/\/blog$/);
    await expect(page.locator('[data-lang-switch="zh"]').first()).toHaveAttribute('href', '/zh');

    await page.goto('/404');
    await expect(page).toHaveURL(/\/404$/);
    await expect(page.locator('[data-lang-switch="zh"]').first()).toHaveAttribute('href', '/zh');
  });

  test('404 页面不可索引且不存在路径返回 404', async ({ page, request }) => {
    await pinEnglishLanguage(page);

    await page.goto('/404');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, follow',
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
    await expect(page.locator('link[rel="alternate"]')).toHaveCount(0);

    const missingRes = await request.get('/seo-check-definitely-missing-page');
    expect(missingRes.status()).toBe(404);
    expect(await missingRes.text()).toContain('noindex, follow');
  });

  test('工具页与多语言页内部链接不保留尾斜杠', async ({ page }) => {
    await pinEnglishLanguage(page);

    await page.goto('/image-compressor');
    expect(await collectTrailingSlashInternalLinks(page)).toEqual([]);

    await page.goto('/zh/docs');
    expect(await collectTrailingSlashInternalLinks(page)).toEqual([]);
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
    const robotsGroups = parseRobotsGroups(robotsText);
    expect(robotsGroups.some((group) => group.userAgents.includes('*'))).toBe(true);
    expect(robotsText).not.toMatch(/^\s*Disallow:\s*\/(?:\*\$?)?\s*(?:#.*)?$/mi);
    expect(robotsText).toContain('Allow: /llms.txt');
    expect(robotsText).toContain('Allow: /llms-full.txt');
    expect(robotsText).toContain('Sitemap: https://picshift.app/sitemap-index.xml');
    const userAgentsToAudit = new Set([
      '*',
      'GPTBot',
      'OAI-SearchBot',
      'ChatGPT-User',
      'ClaudeBot',
      'Claude-User',
      'Claude-SearchBot',
      'PerplexityBot',
      'Perplexity-User',
      'Google-Extended',
      ...robotsGroups.flatMap((group) => group.userAgents),
    ]);
    for (const userAgent of userAgentsToAudit) {
      for (const pathname of ['/', '/llms.txt', '/llms-full.txt', '/docs/why-picshift']) {
        expect(
          isRobotsPathAllowed(robotsGroups, userAgent, pathname),
          `${userAgent} should be allowed to crawl ${pathname}`,
        ).toBe(true);
      }
    }

    const llmsShortRes = await request.get('/llms.txt');
    expect(llmsShortRes.ok()).toBeTruthy();
    const llmsShort = await llmsShortRes.text();
    expect(llmsShort).toContain('## Version');
    expect(llmsShort).toContain('## Canonical');
    expect(llmsShort).toContain('## Related profiles');
    expect(llmsShort).toContain('## Lifecycle');
    expect(llmsShort).toContain('https://picshift.app/llms-full.txt');
    expect(llmsShort).toContain("browser's createImageBitmap API");
    expect(llmsShort).toContain('these output codecs are not used to decode source images');

    const llmsFullRes = await request.get('/llms-full.txt');
    expect(llmsFullRes.ok()).toBeTruthy();
    const llmsFull = await llmsFullRes.text();
    expect(llmsFull).toContain('## Version');
    expect(llmsFull).toContain('## Canonical');
    expect(llmsFull).toContain('## Related profiles');
    expect(llmsFull).toContain('## Lifecycle');
    expect(llmsFull).toContain('https://picshift.app/llms.txt');
    expect(llmsFull).toContain('libheif fallback for HEIC/HEIF decoding');
    expect(llmsFull).toContain('@jsquash/webp for WebP output encoding only');
    expect(llmsFull).not.toContain('@jsquash/webp (WebP encoding/decoding)');
  });
});
