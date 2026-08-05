import type { InputFormat, OutputFormatKey, ToolPageConfig } from '../types';
import {
  PICSHIFT_ORGANIZATION,
  PICSHIFT_WEB_APPLICATION_ID,
  PICSHIFT_WEBSITE_REFERENCE,
} from './schemaEntities';

/**
 * Input decoding and output encoding are intentionally modelled separately.
 * Standard inputs use the browser's createImageBitmap decoder. HEIC/HEIF first
 * use that native path where available and fall back to libheif. MozJPEG and
 * JSquash are output encoders, so they must never be attributed to input
 * decoding in structured data.
 */
const BROWSER_DECODE_ENTITY = 'Browser createImageBitmap decoding';
const INPUT_TECH_MAP: Record<InputFormat, string[]> = {
  heic: [BROWSER_DECODE_ENTITY, 'libheif HEIC/HEIF decoding'],
  heif: [BROWSER_DECODE_ENTITY, 'libheif HEIC/HEIF decoding'],
  jpg: [BROWSER_DECODE_ENTITY],
  jpeg: [BROWSER_DECODE_ENTITY],
  png: [BROWSER_DECODE_ENTITY],
  webp: [BROWSER_DECODE_ENTITY],
  avif: [BROWSER_DECODE_ENTITY],
  bmp: [BROWSER_DECODE_ENTITY],
};

const OUTPUT_TECH_MAP: Record<OutputFormatKey, string[]> = {
  jpg: ['MozJPEG output encoding'],
  png: ['OxiPNG output optimization'],
  webp: ['JSquash WebP output encoding'],
  avif: ['JSquash AVIF output encoding'],
};

const BASE_TECH_ENTITIES = ['WebAssembly', 'Web Workers', 'Service Worker'];

const COMMON_FEATURES = [
  'Process images locally in the browser without uploading source files to a server',
  'Reuse a conversion workflow offline after that workflow and its codec have loaded successfully online',
  'Batch process up to 200 images per batch',
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
      'Re-encode images locally without intentionally copying detected EXIF, GPS, camera, or timestamp fields'
    );
  } else if (tool.slug === 'image-compressor') {
    features.push(
      'Compress JPG, WebP, and AVIF outputs with adjustable quality settings; PNG uses lossy palette quantization below quality 95 and lossless OxiPNG optimization at quality 95-100'
    );
  } else if (tool.slug === 'image-resizer') {
    // Only describe capabilities the ResizeSelector UI actually exposes
    // (see src/components/converter/ResizeSelector.tsx PRESETS): four
    // longest-edge caps, two scale shortcuts, and a custom pixel/percentage
    // input. The social sizes (1080x1080, 1200x630, etc.) are framed as
    // examples users can enter via custom input, not as one-click presets,
    // so this stays factually accurate while keeping the long-tail signal
    // for queries like "resize image to 1080x1080".
    features.push(
      'Resize images by selecting a longest-edge preset (Max 2560, 1920, 1080, or 800 pixels)',
      'Scale images proportionally to 50% or 75% of their original dimensions',
      'Enter custom width and height in pixels, including 1080x1080 for Instagram posts, 1200x630 for Facebook or LinkedIn share cards, 1080x1920 for Instagram Stories or TikTok, and 1920x1080 for HD wallpapers or YouTube thumbnails',
      'Lock aspect ratio to prevent stretching or cropping source photos',
      'Resize JPG, PNG, WebP, HEIC, and AVIF source files'
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
    for (const t of INPUT_TECH_MAP[inputFormat]) techNames.add(t);
  }
  if (outputFormat) {
    for (const t of OUTPUT_TECH_MAP[outputFormat]) techNames.add(t);
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
 * The feature list and implementation mentions are kept aligned with the
 * visible tool and its supported input/output configuration.
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
    '@id': `${canonical}#software-application`,
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
    isPartOf: PICSHIFT_WEBSITE_REFERENCE,
    featureList: buildFeatureList(tool),
    mentions: buildMentions(tool.defaultInputFormat, tool.defaultOutputFormat),
    publisher: PICSHIFT_ORGANIZATION,
  };
}

/**
 * Build the homepage WebApplication schema. Its featureList enumerates major capabilities
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
    '@id': PICSHIFT_WEB_APPLICATION_ID,
    name: 'PicShift',
    url,
    isPartOf: PICSHIFT_WEBSITE_REFERENCE,
    applicationCategory: 'MultimediaApplication',
    applicationSubCategory: 'Image Converter',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description,
    image: imageUrl,
    inLanguage,
    featureList: [
      'Convert HEIC, HEIF, JPG, PNG, WebP, AVIF, and BMP inputs to JPG, PNG, WebP, or AVIF outputs',
      'Compress JPG, WebP, and AVIF outputs with adjustable quality settings; PNG uses lossy palette quantization below quality 95 and lossless OxiPNG optimization at quality 95-100',
      'Resize images by pixel dimensions or percentage with preset and custom sizes',
      'Re-encode images locally without intentionally copying detected EXIF, GPS, camera, or timestamp fields',
      'Decode supported inputs with browser createImageBitmap, with a libheif fallback for HEIC/HEIF when native decoding is unavailable',
      'Use MozJPEG for JPG output and JSquash for WebP/AVIF output when available, with browser-native output encoding as fallback; optimize PNG output with OxiPNG when available',
      'Reuse a conversion workflow offline after that workflow and its codec have loaded successfully online',
      'Batch process up to 200 images per batch',
      'No account, sign-in, watermark, or paid tier required',
    ],
    mentions: BASE_TECH_ENTITIES.concat([
      BROWSER_DECODE_ENTITY,
      'libheif HEIC/HEIF decoding',
      'MozJPEG output encoding',
      'OxiPNG output optimization',
      'JSquash WebP output encoding',
      'JSquash AVIF output encoding',
    ]).map((name) => ({ '@type': 'Thing' as const, name })),
    publisher: PICSHIFT_ORGANIZATION,
  };
}
