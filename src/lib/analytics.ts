import type { InputFormat, OutputFormatKey } from '../types';

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string | number>) => void;
    };
  }
}

/**
 * Send a custom event to Umami analytics.
 * No-ops gracefully if Umami is not loaded.
 */
export function track(event: string, data?: Record<string, string | number>): void {
  try {
    window.umami?.track(event, data);
  } catch {
    // Analytics should never break the app.
  }
}

/** Track a batch conversion event. */
export function trackConvert(
  from: InputFormat,
  to: OutputFormatKey,
  count: number,
  source: string,
): void {
  track('convert', { from, to, count, source });
}

/** Track a ZIP download event. */
export function trackDownloadZip(count: number): void {
  track('download_zip', { count });
}

/** Track a single-file download event. */
export function trackDownloadSingle(format: OutputFormatKey): void {
  track('download_single', { format });
}

/** Track when the user opens the before/after comparison view. */
export function trackCompareOpen(): void {
  track('compare_open');
}

/** Track when the user changes quality settings. */
export function trackQualityChange(quality: number): void {
  track('quality_change', { quality });
}
