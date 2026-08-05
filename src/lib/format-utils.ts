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

export interface FileLimitRejections<T> {
  fileSize: T[];
  fileCount: T[];
  totalSize: T[];
}

export interface FileLimitResult<T> {
  accepted: T[];
  rejected: FileLimitRejections<T>;
}

/**
 * Apply the shared upload limits to a new group of files.
 *
 * Existing files count toward both the file-count and total-size limits. A
 * file rejected for its own size is not counted against either batch limit.
 */
export function applyFileLimits<T extends { size: number }>(
  existing: readonly T[],
  incoming: readonly T[],
): FileLimitResult<T> {
  const accepted: T[] = [];
  const rejected: FileLimitRejections<T> = {
    fileSize: [],
    fileCount: [],
    totalSize: [],
  };
  let fileCount = existing.length;
  let totalSize = existing.reduce((sum, file) => sum + file.size, 0);

  for (const file of incoming) {
    if (file.size > MAX_FILE_SIZE) {
      rejected.fileSize.push(file);
      continue;
    }
    if (fileCount >= MAX_FILE_COUNT) {
      rejected.fileCount.push(file);
      continue;
    }
    if (totalSize + file.size > MAX_TOTAL_SIZE) {
      rejected.totalSize.push(file);
      continue;
    }

    accepted.push(file);
    fileCount += 1;
    totalSize += file.size;
  }

  return { accepted, rejected };
}

/** Check if a file has an accepted image extension. */
export function isAcceptedFile(file: File): boolean {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  return ACCEPTED_EXTENSIONS.has(ext);
}
