export type InputFormat = 'heic' | 'heif' | 'webp' | 'png' | 'jpg' | 'jpeg' | 'avif' | 'bmp';

export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';

export type OutputFormatKey = 'jpg' | 'png' | 'webp' | 'avif';

export type FileStatus = 'queued' | 'converting' | 'done' | 'error';

// Resize types
export type ResizePreset = 'original' | 'max-2560' | 'max-1920' | 'max-1080' | 'max-800' | 'three-quarter' | 'half' | 'custom';
export type ResizeCustomMode = 'pixels' | 'percentage';

export interface ResizeOption {
  preset: ResizePreset;
  customMode?: ResizeCustomMode;
  width?: number;
  height?: number;
  percentage?: number;
  lockAspectRatio?: boolean;
  lockedRatio?: number; // width/height, captured when lock is toggled on
}

export interface ConvertFile {
  id: string;
  originalFile: File;
  name: string;
  inputFormat: InputFormat;
  size: number;
  status: FileStatus;
  progress: number;
  outputBlob: Blob | null;
  outputSize: number;
  outputExt: string | null;
  thumbnailUrl: string | null;
  error: string | null;
  flushedToZip: boolean;
  decodedOriginalBlob: Blob | null;
  originalWidth?: number;
  originalHeight?: number;
  outputWidth?: number;
  outputHeight?: number;
}

export interface UserPreferences {
  outputFormat: OutputFormatKey;
  quality: number;
  resize?: ResizeOption;
}

export interface ToolPageConfig {
  slug: string;
  title: string;
  description: string;
  defaultInputFormat: InputFormat | null;
  defaultOutputFormat?: OutputFormatKey;
  h1: string;
  introText: string;
  howToSteps: string[];
  faqs: Array<{ q: string; a: string }>;
  searchIntentSections?: Array<{ title: string; body: string }>;
  detailSections?: Array<{
    title: string;
    body: string;
    items?: string[];
  }>;
}

export interface ToolIntentSection {
  title: string;
  body: string;
}

export interface WorkerRequest {
  id: string;
  file: File;
  outputFormat: OutputFormat;
  quality: number;
  keepSmaller?: boolean;
  resize?: { maxWidth?: number; maxHeight?: number; scale?: number; exact?: boolean };
}

export interface WorkerResponse {
  id: string;
  status: 'progress' | 'done' | 'error';
  progress?: number;
  blob?: Blob;
  thumbnail?: Blob;
  originalPreview?: Blob;
  keptOriginal?: boolean;
  error?: string;
  sourceWidth?: number;
  sourceHeight?: number;
  outputWidth?: number;
  outputHeight?: number;
}

export const OUTPUT_MIME: Record<OutputFormatKey, OutputFormat> = {
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  avif: 'image/avif',
};

export const OUTPUT_EXT: Record<OutputFormatKey, string> = {
  jpg: '.jpg',
  png: '.png',
  webp: '.webp',
  avif: '.avif',
};
