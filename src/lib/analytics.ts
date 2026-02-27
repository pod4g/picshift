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

// ---------------------------------------------------------------------------
// 1. file_add — user adds files (drag/click/paste)
// ---------------------------------------------------------------------------
export function trackFileAdd(count: number, source: 'drop' | 'click' | 'paste', totalSizeKb: number): void {
  track('file_add', { count, source, total_size_kb: Math.round(totalSizeKb) });
}

// ---------------------------------------------------------------------------
// 2. file_format — input format breakdown (one event per format)
// ---------------------------------------------------------------------------
export function trackFileFormat(format: string, count: number): void {
  track('file_format', { format, count });
}

// ---------------------------------------------------------------------------
// 3. format_select — user changes output format
// ---------------------------------------------------------------------------
export function trackFormatSelect(format: OutputFormatKey): void {
  track('format_select', { format });
}

// ---------------------------------------------------------------------------
// 4. convert_complete — all files in batch finished
// ---------------------------------------------------------------------------
export function trackConvertComplete(data: {
  count: number;
  to: OutputFormatKey;
  duration_ms: number;
  input_kb: number;
  output_kb: number;
  saved_pct: number;
}): void {
  track('convert_complete', {
    count: data.count,
    to: data.to,
    duration_ms: data.duration_ms,
    input_kb: Math.round(data.input_kb),
    output_kb: Math.round(data.output_kb),
    saved_pct: Math.round(data.saved_pct),
  });
}

// ---------------------------------------------------------------------------
// 5. convert_file — single file conversion done
// ---------------------------------------------------------------------------
export function trackConvertFile(
  from: InputFormat,
  to: OutputFormatKey,
  inputKb: number,
  outputKb: number,
  durationMs: number,
): void {
  track('convert_file', {
    from,
    to,
    input_kb: Math.round(inputKb),
    output_kb: Math.round(outputKb),
    duration_ms: Math.round(durationMs),
  });
}

// ---------------------------------------------------------------------------
// 6. convert_error — single file conversion failed
// ---------------------------------------------------------------------------
export function trackConvertError(format: string, error: string): void {
  track('convert_error', { format, error: error.slice(0, 100) });
}

// ---------------------------------------------------------------------------
// 7. download_zip — batch ZIP download
// ---------------------------------------------------------------------------
export function trackDownloadZip(count: number): void {
  track('download_zip', { count });
}

// ---------------------------------------------------------------------------
// 8. download_single — single file download
// ---------------------------------------------------------------------------
export function trackDownloadSingle(format: OutputFormatKey): void {
  track('download_single', { format });
}

// ---------------------------------------------------------------------------
// 9. compare_open — open before/after comparison view
// ---------------------------------------------------------------------------
export function trackCompareOpen(): void {
  track('compare_open');
}

// ---------------------------------------------------------------------------
// 10. clear_all — clear all files
// ---------------------------------------------------------------------------
export function trackClearAll(count: number): void {
  track('clear_all', { count });
}

// ---------------------------------------------------------------------------
// 11. pwa_install_click — user clicks PWA install button
// ---------------------------------------------------------------------------
export function trackPwaInstall(): void {
  track('pwa_install_click');
}

// ---------------------------------------------------------------------------
// 12. tool_card_click — homepage tool card click
// ---------------------------------------------------------------------------
export function trackToolCardClick(slug: string): void {
  track('tool_card_click', { slug });
}
