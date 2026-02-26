import type { ConvertFile } from '../../types';
import { useLang } from '../../i18n/LangContext';
import { getUI } from '../../i18n/ui';
import { formatSize } from '../../lib/format-utils';

interface FileCardProps {
  file: ConvertFile;
  onRemove: (id: string) => void;
  onDownload: (id: string) => void;
  onCompare: (id: string) => void;
}

function getSizeReduction(original: number, converted: number): string {
  if (original === 0 || converted === 0) return '';
  const reduction = ((1 - converted / original) * 100).toFixed(0);
  const sign = Number(reduction) >= 0 ? '-' : '+';
  return `${sign}${Math.abs(Number(reduction))}%`;
}

function getSizeIncreaseTip(t: ReturnType<typeof getUI>, outputExt: string | null): string {
  switch (outputExt) {
    case '.png': return t.sizeIncreaseTipPng;
    case '.jpg': case '.jpeg': return t.sizeIncreaseTipJpg;
    case '.webp': return t.sizeIncreaseTipWebp;
    case '.avif': return t.sizeIncreaseTipAvif;
    default: return t.sizeIncreaseTip;
  }
}

export default function FileCard({ file, onRemove, onDownload, onCompare }: FileCardProps) {
  const lang = useLang();
  const t = getUI(lang);
  const isDone = file.status === 'done';
  const isError = file.status === 'error';
  const isConverting = file.status === 'converting';
  const isQueued = file.status === 'queued';

  // Show converted extension once done
  const displayName = (isDone && file.outputExt)
    ? file.name.replace(/\.[^.]+$/, file.outputExt)
    : file.name;
  const truncatedName =
    displayName.length > 28 ? displayName.slice(0, 14) + '...' + displayName.slice(-10) : displayName;

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card-bg p-3 shadow-sm transition-all duration-150 hover:shadow-md">
      {/* Thumbnail */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-drop-bg">
        {file.thumbnailUrl ? (
          <img
            src={file.thumbnailUrl}
            alt={displayName}
            className="h-full w-full object-cover"
          />
        ) : (
          <svg
            className="h-6 w-6 text-text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
            />
          </svg>
        )}
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-sm font-medium text-text-primary" title={displayName}>
            {truncatedName}
          </span>

          {/* Status indicator */}
          {isQueued && (
            <span className="shrink-0 rounded-full bg-border px-2 py-0.5 text-xs text-text-secondary">
              {t.queued}
            </span>
          )}
          {isConverting && (
            <span className="shrink-0 animate-pulse rounded-full bg-primary-500/10 px-2 py-0.5 text-xs text-primary-500">
              {t.converting}
            </span>
          )}
          {isDone && (
            <svg className="h-4 w-4 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          )}
          {isError && (
            <svg className="h-4 w-4 shrink-0 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
          )}
        </div>

        {/* Size info */}
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <span>{formatSize(file.size)}</span>
          {isDone && file.outputSize > 0 && (
            <>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <span>{formatSize(file.outputSize)}</span>
              {file.outputSize > file.size ? (
                <span className="group relative font-medium text-warning cursor-help">
                  {getSizeReduction(file.size, file.outputSize)}
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-1.5 w-52 sm:w-64 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 dark:bg-gray-700">
                    {getSizeIncreaseTip(t, file.outputExt)}
                    <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
                  </span>
                </span>
              ) : (
                <span className="font-medium text-success">
                  {getSizeReduction(file.size, file.outputSize)}
                </span>
              )}
            </>
          )}
        </div>

        {/* Progress bar */}
        {isConverting && (
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"
              style={{ width: `${file.progress}%` }}
            />
          </div>
        )}

        {/* Error message */}
        {isError && file.error && (
          <p className="text-xs text-error">{file.error}</p>
        )}
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1">
        {isDone && (
          <>
            <button
              type="button"
              onClick={() => onCompare(file.id)}
              title="Compare original and converted"
              className="rounded-md p-1.5 text-text-secondary transition-colors hover:bg-drop-bg hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => onDownload(file.id)}
              title="Download converted file"
              className="rounded-md p-1.5 text-text-secondary transition-colors hover:bg-drop-bg hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </button>
          </>
        )}
        <button
          type="button"
          onClick={() => onRemove(file.id)}
          title="Remove file"
          className="rounded-md p-1.5 text-text-secondary transition-colors hover:bg-error/10 hover:text-error focus:outline-none focus:ring-2 focus:ring-error"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
