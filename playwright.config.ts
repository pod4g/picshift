import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.PLAYWRIGHT_PORT || 4321);
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || `http://127.0.0.1:${PORT}`;
const SERVER_MODE = process.env.PLAYWRIGHT_SERVER_MODE || 'dev';
const SERVER_COMMAND = SERVER_MODE === 'preview'
  ? `npm run preview -- --host 127.0.0.1 --port ${PORT}`
  : `npm run dev -- --host 127.0.0.1 --port ${PORT}`;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  timeout: 90_000,
  expect: {
    timeout: 15_000,
  },
  retries: process.env.CI ? 2 : 0,
  // The converter suite loads several WASM codecs. Four fully parallel local
  // browsers can starve Astro's dev server and abort otherwise valid routes.
  workers: 2,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: SERVER_COMMAND,
    url: BASE_URL,
    reuseExistingServer: process.env.PLAYWRIGHT_REUSE_EXISTING_SERVER === 'true',
    timeout: 120_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
