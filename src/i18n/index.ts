export { SUPPORTED_LOCALES, DEFAULT_LOCALE, LOCALE_CONFIG } from './config';
export type { Locale, UIStrings, PageTranslations, ToolTranslation, LocaleConfig } from './config';
export { LangProvider, useLang } from './LangContext';
export { getUI } from './ui';
export { getPageTranslations } from './translations';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './config';
import type { Locale } from './config';

/** Extract locale from a URL pathname */
export function getLangFromUrl(url: URL): Locale {
  const [, maybeLang] = url.pathname.split('/');
  if ((SUPPORTED_LOCALES as readonly string[]).includes(maybeLang)) {
    return maybeLang as Locale;
  }
  return DEFAULT_LOCALE;
}

/** 页面型路径补尾斜杠（与 Astro trailingSlash: always 一致）；静态资源路径（末段含 `.`）不改 */
function ensureHtmlPathTrailingSlash(path: string): string {
  if (!path || path === '/') return '/';
  if (path.endsWith('/')) return path;
  const lastSeg = path.split('/').filter(Boolean).pop() ?? '';
  if (lastSeg.includes('.')) return path;
  return `${path}/`;
}

/** Build a locale-prefixed path (no prefix for default locale) */
export function localePath(path: string, lang: Locale): string {
  const normalized = ensureHtmlPathTrailingSlash(path);
  if (lang === DEFAULT_LOCALE) return normalized;
  if (normalized === '/') return `/${lang}/`;
  return `/${lang}${normalized}`;
}

/** Replace {key} placeholders in a template string */
export function tpl(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ''));
}

/** Map a browser language tag to the best matching supported locale */
export function matchBrowserLang(browserLang: string): Locale | null {
  const lang = browserLang.toLowerCase();
  if ((SUPPORTED_LOCALES as readonly string[]).includes(lang)) return lang as Locale;
  if (lang.startsWith('zh') && (lang.includes('tw') || lang.includes('hant') || lang.includes('hk') || lang.includes('mo'))) return 'zh-Hant';
  if (lang.startsWith('zh')) return 'zh';
  if (lang.startsWith('pt')) return 'pt';
  const prefix = lang.split('-')[0];
  if ((SUPPORTED_LOCALES as readonly string[]).includes(prefix)) return prefix as Locale;
  return null;
}
