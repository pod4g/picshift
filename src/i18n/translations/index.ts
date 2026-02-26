import type { Locale, PageTranslations } from '../config';
import { DEFAULT_LOCALE } from '../config';

// Eagerly import all translation files in this directory via Vite glob
const modules = import.meta.glob<{ default: PageTranslations }>(
  ['./*.ts', '!./index.ts'],
  { eager: true },
);

const translations = new Map<string, PageTranslations>();

for (const [path, mod] of Object.entries(modules)) {
  // './en.ts' → 'en', './zh-Hant.ts' → 'zh-Hant'
  const file = path.slice(2, -3);
  translations.set(file, mod.default);
}

export function getPageTranslations(lang: Locale): PageTranslations {
  return translations.get(lang) ?? translations.get(DEFAULT_LOCALE)!;
}
