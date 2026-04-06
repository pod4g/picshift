// @ts-check
import { defineConfig } from 'astro/config';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileDatesPath = resolve(__dirname, 'src/.file-dates.json');
const fileDates = existsSync(fileDatesPath)
  ? JSON.parse(readFileSync(fileDatesPath, 'utf-8'))
  : {};

const NON_EN_LOCALES = ['zh', 'zh-Hant', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar', 'it'];

function getLastmod(url) {
  const path = new URL(url).pathname;
  const candidates = [];

  let lang = null;
  let rest = path;
  for (const loc of NON_EN_LOCALES) {
    if (path === `/${loc}/` || path.startsWith(`/${loc}/`)) {
      lang = loc;
      rest = path.slice(loc.length + 1);
      break;
    }
  }

  if (path === '/') {
    candidates.push('src/pages/index.astro');
  } else if (rest.startsWith('/blog/') && rest !== '/blog/') {
    const slug = rest.replace('/blog/', '').replace(/\/$/, '');
    candidates.push(`src/content/blog/${slug}.md`);
    candidates.push('src/pages/blog/[slug].astro');
  } else if (rest === '/blog/' || rest === '/blog') {
    candidates.push('src/pages/blog/index.astro');
    for (const f of Object.keys(fileDates)) {
      if (f.startsWith('src/content/blog/')) candidates.push(f);
    }
  } else if (rest.startsWith('/docs/') || rest === '/docs') {
    const docSlug = rest.replace('/docs/', '').replace(/\/$/, '');
    const fileName = docSlug || 'index';
    if (lang) {
      candidates.push(`src/pages/[lang]/docs/${fileName}.astro`);
      candidates.push(`src/i18n/translations/${lang}.ts`);
      candidates.push('src/i18n/docsUi.ts');
    } else {
      candidates.push(`src/pages/docs/${fileName}.astro`);
    }
  } else if (lang && (rest === '/' || rest === '')) {
    candidates.push('src/pages/[lang]/index.astro');
    candidates.push(`src/i18n/translations/${lang}.ts`);
  } else {
    const slug = rest.replace(/^\//, '').replace(/\/$/, '');
    if (lang) {
      const specificPage = `src/pages/[lang]/${slug}.astro`;
      if (fileDates[specificPage]) {
        candidates.push(specificPage);
        candidates.push(`src/i18n/translations/${lang}.ts`);
      } else {
        candidates.push('src/pages/[lang]/[slug].astro');
        candidates.push('src/data/tools.ts');
        candidates.push(`src/i18n/translations/${lang}.ts`);
        candidates.push('src/i18n/toolSearchIntent.ts');
        candidates.push('src/i18n/toolFaqOverrides.ts');
      }
    } else {
      const specificPage = `src/pages/${slug}.astro`;
      const specificIndex = `src/pages/${slug}/index.astro`;
      if (fileDates[specificPage] || fileDates[specificIndex]) {
        candidates.push(specificPage);
        candidates.push(specificIndex);
      } else {
        candidates.push('src/pages/[slug].astro');
        candidates.push('src/data/tools.ts');
      }
    }
  }

  const dates = candidates
    .map((f) => fileDates[f])
    .filter(Boolean)
    .map((d) => new Date(d).getTime());

  return dates.length > 0 ? new Date(Math.max(...dates)) : new Date();
}

export default defineConfig({
  site: 'https://picshift.app',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        item.lastmod = getLastmod(item.url);
        return item;
      },
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,webp,wasm,json,woff2}'],
        globIgnores: ['_routes.json', '_worker.js/**', '_headers', '_redirects', '**/*avif_enc*'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: null,
        manifestTransforms: [
          async (entries) => {
            const manifest = entries.map((entry) => {
              // HTML pages are precached without trailing slash (e.g. "zh", "privacy")
              // but browsers request them with trailing slash ("zh/", "privacy/").
              // Append "/" so precache keys match navigation requests.
              if (
                entry.url !== '' &&
                !entry.url.endsWith('/') &&
                !entry.url.match(/\.[a-zA-Z0-9]+$/i)
              ) {
                return { ...entry, url: entry.url + '/' };
              }
              return entry;
            });
            return { manifest };
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
            heic: ['libheif-js'],
            zip: ['fflate'],
          },
        },
      },
    },
  },
});
