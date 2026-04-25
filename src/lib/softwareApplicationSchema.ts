import type { InputFormat, OutputFormatKey, ToolPageConfig } from '../types';

const REPO_URL = 'https://github.com/pod4g/picshift';

/**
 * Map every supported format to the WebAssembly library / codec that performs
 * the in-browser encode/decode. These names are surfaced via schema.org
 * `mentions` so that LLM/AI crawlers can build an accurate capability graph
 * (e.g. "PicShift uses libheif for HEIC decoding in the browser").
 */
const FORMAT_TECH_MAP: Record<string, string[]> = {
  heic: ['libheif'],
  heif: ['libheif'],
  jpg: ['MozJPEG'],
  jpeg: ['MozJPEG'],
  png: ['OxiPNG'],
  webp: ['JSquash WebP'],
  avif: ['JSquash AVIF'],
  bmp: [],
};

const BASE_TECH_ENTITIES = ['WebAssembly', 'Web Workers', 'Service Worker'];

const COMMON_FEATURES = [
  'Process images locally in the browser without uploading source files to a server',
  'Continue working offline after first page load via service worker caching',
  'Batch process up to 200 images per session',
  'No account, sign-in, watermark, or paid tier required',
];

function formatLabel(format: string | null | undefined): string {
  if (!format) return '';
  const lower = format.toLowerCase();
  if (lower === 'jpeg') return 'JPG';
  return lower.toUpperCase();
}

function buildFeatureList(tool: ToolPageConfig): string[] {
  const features: string[] = [];

  if (tool.slug === 'metadata-remover') {
    features.push(
      'Remove EXIF, GPS coordinates, camera model, and timestamp metadata from images locally'
    );
  } else if (tool.slug === 'image-compressor') {
    features.push(
      'Compress JPG, PNG, WebP, HEIC, and AVIF photos with adjustable quality settings'
    );
  } else if (tool.slug === 'image-resizer') {
    features.push(
      'Resize images by pixel dimensions or percentage with preset and custom sizes'
    );
  } else if (tool.defaultInputFormat && tool.defaultOutputFormat) {
    const input = formatLabel(tool.defaultInputFormat);
    const output = formatLabel(tool.defaultOutputFormat);
    features.push(`Convert ${input} images to ${output} without uploading to a server`);
  }

  features.push(...COMMON_FEATURES);

  return features;
}

function buildMentions(
  inputFormat: InputFormat | null | undefined,
  outputFormat: OutputFormatKey | undefined
): Array<{ '@type': 'Thing'; name: string }> {
  const techNames = new Set<string>(BASE_TECH_ENTITIES);

  if (inputFormat) {
    for (const t of FORMAT_TECH_MAP[inputFormat] || []) techNames.add(t);
  }
  if (outputFormat) {
    for (const t of FORMAT_TECH_MAP[outputFormat] || []) techNames.add(t);
  }

  return Array.from(techNames).map((name) => ({ '@type': 'Thing' as const, name }));
}

export interface BuildToolSoftwareApplicationSchemaInput {
  tool: ToolPageConfig;
  h1: string;
  description: string;
  canonical: string;
  lang: string;
}

/**
 * Build a schema.org SoftwareApplication payload for a tool landing page.
 * Includes featureList, mentions, and sameAs to give generative engines a
 * richer capability + provenance graph than the minimal default schema.
 */
export function buildToolSoftwareApplicationSchema({
  tool,
  h1,
  description,
  canonical,
  lang,
}: BuildToolSoftwareApplicationSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: h1,
    applicationCategory: 'MultimediaApplication',
    applicationSubCategory: 'Image Converter',
    operatingSystem: 'Web Browser',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description,
    inLanguage: lang,
    url: canonical,
    featureList: buildFeatureList(tool),
    mentions: buildMentions(tool.defaultInputFormat, tool.defaultOutputFormat),
    sameAs: [REPO_URL],
    publisher: {
      '@type': 'Organization',
      name: 'PicShift',
      url: 'https://picshift.app',
      sameAs: [REPO_URL],
    },
  };
}

/**
 * Build the homepage WebApplication schema. This is the entity-level signal
 * for the whole product, so featureList enumerates all major capabilities
 * (conversion, compression, resizing, metadata removal) rather than a
 * single tool's scope.
 */
export interface BuildHomeWebApplicationSchemaInput {
  description: string;
  imageUrl: string;
  url: string;
  inLanguage: string[];
}

export function buildHomeWebApplicationSchema({
  description,
  imageUrl,
  url,
  inLanguage,
}: BuildHomeWebApplicationSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PicShift',
    url,
    applicationCategory: 'MultimediaApplication',
    applicationSubCategory: 'Image Converter',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description,
    image: imageUrl,
    inLanguage,
    featureList: [
      'Convert between HEIC, HEIF, JPG, PNG, WebP, and AVIF in any direction',
      'Compress JPG, PNG, WebP, HEIC, and AVIF photos with adjustable quality',
      'Resize images by pixel dimensions or percentage with preset and custom sizes',
      'Remove EXIF, GPS coordinates, camera model, and timestamps from images locally',
      'Process images entirely in the browser using WebAssembly codecs',
      'Continue working offline after first page load via service worker caching',
      'Batch process up to 200 images per session',
      'No account, sign-in, watermark, or paid tier required',
    ],
    mentions: BASE_TECH_ENTITIES.concat(['libheif', 'MozJPEG', 'OxiPNG', 'JSquash']).map(
      (name) => ({ '@type': 'Thing' as const, name })
    ),
    sameAs: [REPO_URL],
    publisher: {
      '@type': 'Organization',
      name: 'PicShift',
      url: 'https://picshift.app',
      sameAs: [REPO_URL],
    },
  };
}
