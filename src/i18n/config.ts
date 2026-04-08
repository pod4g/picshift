export const SUPPORTED_LOCALES = ['en', 'zh', 'zh-Hant', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar', 'it'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleConfig {
  nativeName: string;
  dir: 'ltr' | 'rtl';
  hrefLang: string;
}

export const LOCALE_CONFIG: Record<Locale, LocaleConfig> = {
  en: { nativeName: 'English', dir: 'ltr', hrefLang: 'en' },
  zh: { nativeName: '简体中文', dir: 'ltr', hrefLang: 'zh-Hans' },
  'zh-Hant': { nativeName: '繁體中文', dir: 'ltr', hrefLang: 'zh-Hant' },
  es: { nativeName: 'Español', dir: 'ltr', hrefLang: 'es' },
  fr: { nativeName: 'Français', dir: 'ltr', hrefLang: 'fr' },
  de: { nativeName: 'Deutsch', dir: 'ltr', hrefLang: 'de' },
  ja: { nativeName: '日本語', dir: 'ltr', hrefLang: 'ja' },
  ko: { nativeName: '한국어', dir: 'ltr', hrefLang: 'ko' },
  pt: { nativeName: 'Português', dir: 'ltr', hrefLang: 'pt' },
  ru: { nativeName: 'Русский', dir: 'ltr', hrefLang: 'ru' },
  ar: { nativeName: 'العربية', dir: 'rtl', hrefLang: 'ar' },
  it: { nativeName: 'Italiano', dir: 'ltr', hrefLang: 'it' },
};

/** UI strings used by React components and Astro templates */
export interface UIStrings {
  // DropZone
  dropDrag: string;
  dropClick: string;
  dropFormats: string;
  dropAnywhere: string;
  // Converter controls
  clearAll: string;
  outputLabel: string;
  qualityLabel: string;
  preparing: string;
  // File status
  queued: string;
  converting: string;
  // Compare view
  original: string;
  converted: string;
  // Download
  downloadAll: string;
  // File count (use {completed}, {total} placeholders)
  filesConverted: string;
  filesCompressed: string;
  // Navigation
  allTools: string;
  navPrivacy: string;
  // Footer
  copyright: string;
  privacyMessage: string;
  privacyPolicy: string;
  // Privacy badge
  privacyBadge: string;
  // Hero
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  allConverters: string;
  // Features
  instantTitle: string;
  instantDesc: string;
  privateTitle: string;
  privateDesc: string;
  freeTitle: string;
  freeDesc: string;
  // Sections
  howToPrefix: string;
  faqTitle: string;
  // Misc
  compressImages: string;
  sizeIncreaseTip: string;
  sizeIncreaseTipPng: string;
  sizeIncreaseTipJpg: string;
  sizeIncreaseTipWebp: string;
  sizeIncreaseTipAvif: string;
  resetDefaults: string;
  sizeIncreaseFaqQ: string;
  sizeIncreaseFaqA: string;
  // Compare navigation
  comparePrev: string;
  compareNext: string;
  // PWA install prompt
  pwaInstallPrompt: string;
  pwaInstallButton: string;
  // Tech showcase
  techSectionTitle: string;
  techSectionSubtitle: string;
  techMozjpegTitle: string;
  techMozjpegDesc: string;
  techOxipngTitle: string;
  techOxipngDesc: string;
  techImagequantTitle: string;
  techImagequantDesc: string;
  techWebpTitle: string;
  techWebpDesc: string;
  techAvifTitle: string;
  techAvifDesc: string;
  techWorkerPoolTitle: string;
  techWorkerPoolDesc: string;
  // Toast / warnings
  maxFilesWarning: string;
  // Format tooltip (use {format} placeholder)
  convertTo: string;
  // Resize
  resizeLabel: string;
  resizeOriginal: string;
  resizeMax2560: string;
  resizeMax1920: string;
  resizeMax1080: string;
  resizeMax800: string;
  resizeThreeQuarter: string;
  resizeHalf: string;
  resizeCustom: string;
  // Resize preset descriptions
  resizeOriginalDesc: string;
  resizeMax2560Desc: string;
  resizeMax1920Desc: string;
  resizeMax1080Desc: string;
  resizeMax800Desc: string;
  resizeThreeQuarterDesc: string;
  resizeHalfDesc: string;
  resizeCustomDesc: string;
  resizePixels: string;
  resizePercentage: string;
  resizeWidth: string;
  resizeHeight: string;
  resizeLockAspect: string;
  resizeUnlockAspect: string;
  resizeOriginalSize: string;
  resizeImages: string;
  // Comparison table (homepage)
  comparisonTitle: string;
  compColPicShift: string;
  compColUpload: string;
  compColSingle: string;
  compColDesktop: string;
  compRowNoUpload: string;
  compRowHeic: string;
  compRowBatch: string;
  compRowCompare: string;
  compRowOffline: string;
  compRowNoInstall: string;
  compRowFree: string;
  compRowZeroTrace: string;
}

/** Tool page translation */
export interface ToolTranslation {
  title: string;
  description: string;
  h1: string;
  introText: string;
  howToSteps: string[];
  faqs: Array<{ q: string; a: string }>;
  detailSections?: Array<{
    title: string;
    body: string;
    items?: string[];
  }>;
}

/** Full page-level translations for a single locale */
export interface PageTranslations {
  home: {
    title: string;
    description: string;
  };
  privacy: {
    title: string;
    description: string;
    sections: Array<{
      heading: string;
      content: string;
      items?: string[];
    }>;
    lastUpdated: string;
  };
  tools: Record<string, ToolTranslation>;
}
