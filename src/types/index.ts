export type InputFormat = 'heic' | 'heif' | 'webp' | 'png' | 'jpg' | 'jpeg' | 'avif' | 'bmp';

export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';

export type OutputFormatKey = 'jpg' | 'png' | 'webp' | 'avif';

export type FileStatus = 'queued' | 'converting' | 'done' | 'error';

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
}

export interface UserPreferences {
  outputFormat: OutputFormatKey;
  quality: number;
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
}

export interface WorkerRequest {
  id: string;
  file: File;
  outputFormat: OutputFormat;
  quality: number;
  keepSmaller?: boolean;
}

export interface WorkerResponse {
  id: string;
  status: 'progress' | 'done' | 'error';
  progress?: number;
  blob?: Blob;
  thumbnail?: Blob;
  keptOriginal?: boolean;
  error?: string;
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
