// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://picshift.app',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        item.lastmod = new Date();
        return item;
      },
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,webp,wasm,json,woff2}'],
        globIgnores: ['_routes.json', '_worker.js/**', '_headers', '_redirects', '**/*avif_enc*'],
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
