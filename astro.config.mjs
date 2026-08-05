// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import { CONTENT_DATE_MODIFIED } from './src/lib/contentDates.ts';

const NON_EN_LOCALES = ['zh', 'zh-Hant', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar', 'it'];
const configDirectory = dirname(fileURLToPath(import.meta.url));
const blogDirectory = resolve(configDirectory, 'src/content/blog');

/**
 * @param {string} source
 * @param {string} key
 * @returns {string | null}
 */
function parseFrontmatterDate(source, key) {
  const frontmatter = source.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] ?? '';
  return frontmatter.match(new RegExp(`^${key}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})["']?\\s*$`, 'm'))?.[1] ?? null;
}

const blogDates = new Map(
  readdirSync(blogDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const source = readFileSync(resolve(blogDirectory, file), 'utf8');
      const publishedAt = parseFrontmatterDate(source, 'publishedAt');
      const updatedAt = parseFrontmatterDate(source, 'updatedAt');
      if (!publishedAt) throw new Error(`Missing publishedAt in src/content/blog/${file}`);
      return [file.replace(/\.md$/, ''), updatedAt ?? publishedAt];
    }),
);

/** @param {string} value */
function contentDate(value) {
  return `${value}T00:00:00.000Z`;
}

/**
 * @param {string} url
 * @returns {string | undefined}
 */
function getLastmod(url) {
  const path = new URL(url).pathname;

  let lang = null;
  let rest = path;
  for (const loc of NON_EN_LOCALES) {
    if (path === `/${loc}` || path === `/${loc}/` || path.startsWith(`/${loc}/`)) {
      lang = loc;
      rest = path.slice(loc.length + 1);
      break;
    }
  }

  if (rest.startsWith('/blog/') && rest !== '/blog/') {
    const slug = rest.replace('/blog/', '').replace(/\/$/, '');
    const date = blogDates.get(slug);
    return date ? contentDate(date) : undefined;
  } else if (rest === '/blog/' || rest === '/blog') {
    const newestDate = [...blogDates.values()].sort().at(-1);
    return newestDate ? contentDate(newestDate) : undefined;
  }

  if (rest === '/privacy' || rest.startsWith('/docs')) {
    return contentDate(CONTENT_DATE_MODIFIED);
  }

  // Tool and utility routes deliberately omit lastmod. Their content lives in
  // shared source files, so a file-level Git date falsely marks hundreds of
  // unchanged URLs as fresh. An absent lastmod is safer than an inaccurate one.
  return undefined;
}

export default defineConfig({
  trailingSlash: "never",
  site: 'https://picshift.app',
  output: 'static',
  // 默认只监听 localhost，用局域网 IP 会 connection refused；true = 0.0.0.0 便于手机/同网设备调试
  server: {
    host: true,
    port: 4321,
    allowedHosts: true,
  },
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const lastmod = getLastmod(item.url);
        if (lastmod) item.lastmod = lastmod;
        else delete item.lastmod;
        return item;
      },
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      // Layout loads the tiny registration script in <head> so registration
      // starts during parsing instead of waiting for window.load.
      injectRegister: null,
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        // Keep install/update lightweight. Conversion workers and codecs are cached
        // by the runtime routes below only after the browser actually uses them.
        globPatterns: [
          'index.html',
          'registerSW.js',
          '_astro/*.css',
          'fonts/inter-{400,700}.woff2',
          'favicon*.{ico,png}',
          'apple-touch-icon.png',
          'android-chrome-*.png',
          'logo-mark-{28,56,dark}.png',
        ],
        globIgnores: ['_routes.json', '_worker.js/**', '_headers', '_redirects', '**/*avif_enc*'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: null,
        runtimeCaching: [
          {
            // Vite fingerprints these files, so a URL is safe to keep until its
            // cache entry expires. This also covers lazy workers/codec chunks:
            // once used online they remain available offline.
            urlPattern: ({ url }) =>
              url.origin === self.location.origin && url.pathname.startsWith('/_astro/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'picshift-assets-v1',
              // Static preview/CDN responses can vary on Origin while a warm-up
              // fetch and an ES module request use different request headers.
              // Fingerprinted same-origin URLs are immutable, so URL matching is
              // the correct cache key for reliable offline hydration.
              matchOptions: { ignoreVary: true },
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 120,
                maxAgeSeconds: 365 * 24 * 60 * 60,
                purgeOnQuotaError: true,
              },
            },
          },
          {
            // These public codec URLs are stable rather than fingerprinted.
            // Prefer the current network version so a newly fingerprinted
            // worker cannot keep using an older, ABI-incompatible WASM file.
            // A previously successful response remains the offline fallback.
            urlPattern: ({ url }) =>
              url.origin === self.location.origin && url.pathname.startsWith('/wasm/'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'picshift-codecs-v2',
              networkTimeoutSeconds: 5,
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 12,
                maxAgeSeconds: 90 * 24 * 60 * 60,
                purgeOnQuotaError: true,
              },
            },
          },
          {
            // Editorial/share images are not part of the app shell. Cache only
            // the images a visitor opens, and refresh fixed-name assets online.
            urlPattern: ({ url, request }) =>
              url.origin === self.location.origin &&
              request.destination === 'image' &&
              (url.pathname.startsWith('/blog/') || url.pathname === '/og-image.png'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'picshift-images-v1',
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 32,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                purgeOnQuotaError: true,
              },
            },
          },
          {
            // A marked same-origin fetch lets registerSW replay the current
            // document if its first navigation raced ahead of SW control.
            urlPattern: ({ url, request }) =>
              url.origin === self.location.origin &&
              (request.mode === 'navigate' || request.headers.get('X-PicShift-Cache-Warm') === 'page'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'picshift-pages',
              networkTimeoutSeconds: 3,
              // Static routes do not use query parameters for content. Ignore
              // referral/campaign queries so an offline reload matches the
              // canonical page warmed after first control.
              matchOptions: { ignoreVary: true, ignoreSearch: true },
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 24,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              },
            },
          },
        ],
      },
      manifest: {
        name: 'PicShift',
        short_name: 'PicShift',
        description: 'Free browser-based image converter. Convert HEIC, WebP, PNG, JPG, AVIF instantly — no upload required.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#1a2332',
        theme_color: '#6366f1',
        categories: ['utilities', 'photo'],
        icons: [
          { src: 'android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'zh-Hant', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    worker: {
      format: 'es',
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            zip: ['fflate'],
          },
        },
      },
    },
  },
});
