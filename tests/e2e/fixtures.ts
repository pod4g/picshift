import { expect, test as base } from '@playwright/test';

const analyticsHosts = new Set([
  'cloud.umami.is',
  'gateway.umami.is',
  'static.cloudflareinsights.com',
]);

/**
 * Production-preview E2E must not depend on third-party analytics uptime or
 * send synthetic localhost traffic into real dashboards.
 */
export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route((url) => (
      analyticsHosts.has(url.hostname) || url.pathname === '/cdn-cgi/rum'
    ), (route) => route.abort());
    await use(page);
  },
});

export { expect };
export type { Download, Page } from '@playwright/test';
