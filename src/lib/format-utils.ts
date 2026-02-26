/** Format byte sizes into human-readable strings. */
export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/** Accepted image file extensions. */
export const ACCEPTED_EXTENSIONS = new Set([
  'heic', 'heif', 'jpg', 'jpeg', 'png', 'webp', 'avif', 'bmp',
]);

/** Max single file size: 50 MB. */
export const MAX_FILE_SIZE = 50 * 1024 * 1024;

/** Max number of files in a single session. */
export const MAX_FILE_COUNT = 200;

/** Max total batch size: 1 GB. */
export const MAX_TOTAL_SIZE = 1024 * 1024 * 1024;

/** Check if a file has an accepted image extension. */
export function isAcceptedFile(file: File): boolean {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  return ACCEPTED_EXTENSIONS.has(ext);
}
