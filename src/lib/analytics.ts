import type { OutputFormatKey } from '../types';

declare global {
  interface Window {
    umami?: {
      /** @see https://docs.umami.is/docs/tracker-functions — 支持函数形态以覆盖 timestamp */
      track: (
        nameOrPayloadOrFn:
          | string
          | Record<string, unknown>
          | ((props: Record<string, unknown>) => Record<string, unknown>),
        data?: Record<string, string | number>,
      ) => void;
    };
  }
}

/**
 * Send a custom event to Umami analytics.
 * 注入调用时刻的 Unix 秒级 timestamp：否则云端活动流常用「入库时间」，快速连续或延迟送达时多条会显示同一秒。
 * No-ops gracefully if Umami is not loaded.
 */
export function track(event: string, data?: Record<string, string | number>): void {
  try {
    const timestamp = Math.floor(Date.now() / 1000);
    window.umami?.track((props: Record<string, unknown>) => {
      const payload: Record<string, unknown> = {
        ...props,
        name: event,
        timestamp,
      };
      if (data && Object.keys(data).length > 0) {
        payload.data = data;
      }
      return payload;
    });
  } catch {
    // Analytics should never break the app.
  }
}

/** One low-cardinality reason instead of raw browser/codec error text. */
export type ConvertErrorReason =
  | 'memory'
  | 'runtime_asset'
  | 'decode'
  | 'encode'
  | 'worker'
  | 'unknown';

export function normalizeConvertError(error: string): ConvertErrorReason {
  const message = error.toLowerCase();
  if (/out of memory|memory|allocation|heap/.test(message)) return 'memory';
  if (/wasm|webassembly|network|fetch|module|import|load(?:ing|ed)? (?:resource|codec)/.test(message)) return 'runtime_asset';
  if (/decode|decoder|invalid image|unsupported image|createimagebitmap/.test(message)) return 'decode';
  if (/encode|encoder|canvas|thumbnail|converttoblob|output blob/.test(message)) return 'encode';
  if (/worker/.test(message)) return 'worker';
  return 'unknown';
}

/** One completion signal per conversion batch; page URL supplies the tool. */
export function trackConvertComplete(to?: OutputFormatKey): void {
  track('convert_complete', to ? { to } : undefined);
}

/** Conversion failures retain only a normalized, bounded reason. */
export function trackConvertError(error: string): void {
  track('convert_error', { reason: normalizeConvertError(error) });
}

/** Final user download actions intentionally carry no event data. */
export function trackDownloadZip(): void {
  track('download_zip');
}

export function trackDownloadSingle(): void {
  track('download_single');
}

export function trackPwaInstall(): void {
  track('pwa_install_click');
}

/** Final metadata-remover download/outcome, without file-level properties. */
export function trackMetadataDownload(): void {
  track('metadata_download');
}
