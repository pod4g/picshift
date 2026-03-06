import { useEffect, useState, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { useConverter } from '../../hooks/useConverter';
import { loadPreferences, savePreferences } from '../../lib/preferences';
import { formatSize } from '../../lib/format-utils';
import type { InputFormat, OutputFormatKey, ResizeOption } from '../../types';
import { trackFileAdd, trackFileFormat, trackFormatSelect, trackConvertComplete, trackPwaInstall } from '../../lib/analytics';
import { LangProvider } from '../../i18n/LangContext';
import { getUI } from '../../i18n/ui';
import type { Locale } from '../../i18n/config';
import { tpl } from '../../i18n/index';
import DropZone from './DropZone';
import FormatSelector from './FormatSelector';
import ResizeSelector from './ResizeSelector';
import QualitySlider from './QualitySlider';
import FileList from './FileList';
import DownloadAll from './DownloadAll';
import CompareView from './CompareView';

interface ConverterProps {
  defaultInputFormat?: InputFormat | null;
  defaultOutputFormat?: OutputFormatKey;
  /** When true, the entire page becomes a drop target. */
  fullPage?: boolean;
  /** When true, keep the original file if conversion produces a larger output. */
  keepSmaller?: boolean;
  /** When true, resize controls default to an active preset (e.g. image-resizer tool page). */
  resizeDefault?: boolean;
  lang?: Locale;
}

function formatTime(ms: number): string {
  return `${(ms / 1000).toFixed(2)}s`;
}

/** Derive a sensible output format from the input file extension. */
function guessOutputFormat(filename: string): OutputFormatKey {
  const ext = filename.split('.').pop()?.toLowerCase() ?? '';
  const map: Record<string, OutputFormatKey> = {
    heic: 'jpg', heif: 'jpg', avif: 'jpg', bmp: 'jpg',
    webp: 'jpg', png: 'jpg',
  };
  return map[ext] ?? 'jpg';
}

export default function Converter({ defaultInputFormat, defaultOutputFormat, fullPage = false, keepSmaller = false, resizeDefault = false, lang = 'en' }: ConverterProps) {
  // Compute initial format & quality eagerly (no useEffect) to avoid flicker
  const [initPrefs] = useState(() => {
    if (defaultOutputFormat) return { outputFormat: defaultOutputFormat, quality: 85 } as ReturnType<typeof loadPreferences>;
    return loadPreferences();
  });

  // Always use a stable default for initial render to match SSR output.
  // Saved resize preference is applied after hydration via useEffect below.
  const initialResize: ResizeOption = resizeDefault
    ? { preset: 'max-1920' }
    : { preset: 'original' };

  const {
    files,
    outputFormat,
    quality,
    resizeOption,
    setOutputFormat,
    setQuality,
    setResizeOption,
    addFiles,
    removeFile,
    clearAll,
    downloadAll,
    downloadSingle,
    openCompare,
    cancelCompare,
    closeCompare,
    compareState,
    compareLoading,
    completedCount,
    totalCount,
    isConverting,
    droppedCount,
    dismissDroppedWarning,
  } = useConverter({ keepSmaller, compressMode: keepSmaller, initialFormat: initPrefs.outputFormat, initialQuality: initPrefs.quality, initialResize });

  const [pageDragOver, setPageDragOver] = useState(false);
  const [conversionTimeMs, setConversionTimeMs] = useState<number | null>(null);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const userSelectedFormat = useRef(!!defaultOutputFormat || initPrefs.outputFormat !== 'jpg');
  const conversionStartRef = useRef<number | null>(null);
  const confettiFiredRef = useRef(false);
  const fileListEndRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);
  const prevFileCountRef = useRef(0);
  const dragCounter = useRef(0);

  // Remove server-rendered skeleton once React has mounted
  useEffect(() => {
    document.getElementById('converter-skeleton')?.remove();
  }, []);

  // Apply saved resize preference after hydration (avoids SSR mismatch)
  useEffect(() => {
    if (!resizeDefault && initPrefs.resize) {
      setResizeOption(initPrefs.resize);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Listen for PWA install prompt
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // Persist preferences when user changes format, quality, or resize
  useEffect(() => {
    savePreferences({ outputFormat, quality, resize: resizeOption });
  }, [outputFormat, quality, resizeOption]);

  // Wrap setOutputFormat to track manual user selection
  const handleFormatChange = useCallback(
    (fmt: OutputFormatKey) => {
      userSelectedFormat.current = true;
      setOutputFormat(fmt);
      trackFormatSelect(fmt);
    },
    [setOutputFormat],
  );

  // Smart default: when first files are added and user hasn't manually picked a format, guess from input
  // Skip in compress mode — each file keeps its own format
  const handleAddFiles = useCallback(
    (incoming: File[], source: 'drop' | 'click' | 'paste' = 'click') => {
      if (!keepSmaller && files.length === 0 && !defaultOutputFormat && !userSelectedFormat.current && incoming.length > 0) {
        const guessed = guessOutputFormat(incoming[0].name);
        setOutputFormat(guessed);
      }
      addFiles(incoming);

      // Analytics
      const totalSizeKb = incoming.reduce((sum, f) => sum + f.size, 0) / 1024;
      trackFileAdd(incoming.length, source, totalSizeKb);
      const formatCounts: Record<string, number> = {};
      incoming.forEach((f) => {
        const ext = f.name.split('.').pop()?.toLowerCase() ?? 'unknown';
        formatCounts[ext] = (formatCounts[ext] || 0) + 1;
      });
      Object.entries(formatCounts).forEach(([fmt, count]) => trackFileFormat(fmt, count));
    },
    [addFiles, files.length, defaultOutputFormat, setOutputFormat, keepSmaller],
  );

  // Track conversion timing
  const allFinished = totalCount > 0 && files.every(f => f.status === 'done' || f.status === 'error');
  useEffect(() => {
    if (totalCount === 0) {
      conversionStartRef.current = null;
      setConversionTimeMs(null);
      return;
    }
    if (isConverting && conversionStartRef.current === null) {
      conversionStartRef.current = Date.now();
      setConversionTimeMs(null);
    }
    if (allFinished && conversionStartRef.current !== null && conversionTimeMs === null) {
      setConversionTimeMs(Date.now() - conversionStartRef.current);
    }
  }, [isConverting, allFinished, totalCount, conversionTimeMs]);

  // Show PWA install banner after first conversion completes
  useEffect(() => {
    if (
      allFinished &&
      completedCount > 0 &&
      installPrompt &&
      !localStorage.getItem('picshift_pwa_dismissed')
    ) {
      setShowInstallBanner(true);
    }
  }, [allFinished, completedCount, installPrompt]);

  // Scroll download button into view once summary bar has rendered
  useEffect(() => {
    if (allFinished && conversionTimeMs !== null && downloadRef.current) {
      requestAnimationFrame(() => {
        downloadRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      });
    }
  }, [allFinished, conversionTimeMs]);

  // Scroll to latest file when new files are added
  useEffect(() => {
    if (totalCount > prevFileCountRef.current && fileListEndRef.current) {
      fileListEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    prevFileCountRef.current = totalCount;
  }, [totalCount]);

  // Confetti + scroll to download + analytics when all files finish
  useEffect(() => {
    if (allFinished && completedCount > 0 && !confettiFiredRef.current) {
      confettiFiredRef.current = true;

      // Analytics: convert_complete
      const totalInput = files.reduce((sum, f) => sum + f.size, 0);
      const totalOutput = files.filter(f => f.status === 'done').reduce((sum, f) => sum + f.outputSize, 0);
      trackConvertComplete({
        count: completedCount,
        to: outputFormat,
        duration_ms: conversionTimeMs ?? 0,
        input_kb: totalInput / 1024,
        output_kb: totalOutput / 1024,
        saved_pct: totalInput > 0 ? (1 - totalOutput / totalInput) * 100 : 0,
      });
      const duration = 1500;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981'],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981'],
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
    if (totalCount === 0) {
      confettiFiredRef.current = false;
    }
  }, [allFinished, completedCount, totalCount]);

  // Paste from clipboard
  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.files;
      if (!items || items.length === 0) return;
      e.preventDefault();
      handleAddFiles(Array.from(items), 'paste');
    };
    document.addEventListener('paste', onPaste);
    return () => document.removeEventListener('paste', onPaste);
  }, [handleAddFiles]);

  // Escape key cancels compare loading
  useEffect(() => {
    if (!compareLoading) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cancelCompare();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [compareLoading, cancelCompare]);

  // Full-page drop zone: listen on document
  useEffect(() => {
    if (!fullPage) return;

    const onDragEnter = (e: DragEvent) => {
      e.preventDefault();
      dragCounter.current++;
      if (dragCounter.current === 1) setPageDragOver(true);
    };

    const onDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dragCounter.current--;
      if (dragCounter.current <= 0) {
        dragCounter.current = 0;
        setPageDragOver(false);
      }
    };

    const onDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const onDrop = (e: DragEvent) => {
      e.preventDefault();
      dragCounter.current = 0;
      setPageDragOver(false);
      // Skip if dropped on the DropZone component (it handles its own drops)
      const target = e.target as HTMLElement;
      if (target.closest?.('[data-dropzone]')) return;
      if (e.dataTransfer?.files.length) {
        handleAddFiles(Array.from(e.dataTransfer.files), 'drop');
      }
    };

    document.addEventListener('dragenter', onDragEnter);
    document.addEventListener('dragleave', onDragLeave);
    document.addEventListener('dragover', onDragOver);
    document.addEventListener('drop', onDrop);

    return () => {
      document.removeEventListener('dragenter', onDragEnter);
      document.removeEventListener('dragleave', onDragLeave);
      document.removeEventListener('dragover', onDragOver);
      document.removeEventListener('drop', onDrop);
    };
  }, [fullPage, handleAddFiles]);

  // Auto-dismiss dropped-files warning after 8 seconds
  useEffect(() => {
    if (droppedCount === 0) return;
    const timer = setTimeout(dismissDroppedWarning, 15000);
    return () => clearTimeout(timer);
  }, [droppedCount, dismissDroppedWarning]);

  const acceptExtensions = defaultInputFormat
    ? `.${defaultInputFormat}${defaultInputFormat === 'jpg' ? ',.jpeg' : ''}${defaultInputFormat === 'heic' ? ',.heif' : ''}`
    : '.heic,.heif,.jpg,.jpeg,.png,.webp,.avif,.bmp';

  const hasFiles = totalCount > 0;
  const t = getUI(lang);

  return (
    <LangProvider value={lang}>
    <div className="flex flex-col gap-6">
      {/* Full-page drag overlay */}
      {fullPage && pageDragOver && (
        <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-primary-500/10 backdrop-blur-[2px]">
          <div className="rounded-2xl border-2 border-dashed border-primary-500 bg-card-bg/90 px-8 py-6 sm:px-12 sm:py-10 shadow-lg mx-4">
            <div className="flex flex-col items-center gap-3">
              <svg className="h-10 w-10 sm:h-12 sm:w-12 text-primary-700 dark:text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
              <p className="text-base sm:text-lg font-semibold text-primary-700 dark:text-primary-500">{t.dropAnywhere}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main card */}
      <div className="rounded-xl border border-border bg-card-bg p-4 sm:p-6 shadow-sm">
        {/* Controls */}
        <div className="mb-4 sm:mb-6 flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {!defaultOutputFormat && !keepSmaller && (
              <FormatSelector
                value={outputFormat}
                onChange={handleFormatChange}
                disabled={isConverting}
              />
            )}
            <ResizeSelector
              value={resizeOption}
              onChange={setResizeOption}
              disabled={isConverting}
              originalWidth={files.find((f) => f.originalWidth)?.originalWidth}
              originalHeight={files.find((f) => f.originalHeight)?.originalHeight}
            />
            <div className="w-24 sm:w-36 shrink-0">
              <QualitySlider
                value={quality}
                onChange={setQuality}
                disabled={isConverting}
                visible
              />
            </div>
            {(quality !== 85 || (!defaultOutputFormat && !keepSmaller && outputFormat !== 'jpg') || resizeOption.preset !== 'original') && !isConverting && (
              <button
                type="button"
                onClick={() => {
                  setQuality(85);
                  setResizeOption({ preset: 'original' });
                  if (!defaultOutputFormat && !keepSmaller) {
                    setOutputFormat('jpg');
                    userSelectedFormat.current = false;
                  }
                }}
                className="cursor-pointer rounded-md p-1.5 text-text-secondary transition-colors hover:text-primary-500 hover:bg-primary-500/10 focus:outline-none"
                title={t.resetDefaults}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
              </button>
            )}
          </div>
          {hasFiles && (
            <button
              type="button"
              onClick={clearAll}
              className="shrink-0 cursor-pointer text-xs text-text-secondary transition-colors hover:text-error focus:outline-none"
            >
              {t.clearAll}
            </button>
          )}
        </div>

        {/* Drop zone or file list */}
        {!hasFiles ? (
          <DropZone onFiles={handleAddFiles} accept={acceptExtensions} />
        ) : (
          <div className="flex flex-col gap-4">
            <DropZone onFiles={handleAddFiles} accept={acceptExtensions} />
            <FileList
              files={files}
              quality={quality}
              onRemove={removeFile}
              onDownload={downloadSingle}
              onCompare={openCompare}
              compressMode={keepSmaller}
            />
            <div ref={fileListEndRef} />
          </div>
        )}
      </div>

      {/* Dropped files warning toast — fixed to bottom center of viewport */}
      {droppedCount > 0 && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-lg border border-warning/30 bg-card-bg shadow-lg px-4 py-3 max-w-lg w-[calc(100vw-2rem)]">
            <svg className="h-5 w-5 shrink-0 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <p className="flex-1 text-sm text-text-primary">{tpl(t.maxFilesWarning, { dropped: droppedCount })}</p>
            <button
              type="button"
              onClick={dismissDroppedWarning}
              className="shrink-0 rounded-md p-1 text-text-secondary transition-colors hover:text-text-primary"
              aria-label="Dismiss"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Batch summary */}
      {allFinished && completedCount > 0 && conversionTimeMs !== null && (() => {
        const totalOriginal = files.reduce((sum, f) => sum + f.size, 0);
        const totalConverted = files.filter(f => f.status === 'done').reduce((sum, f) => sum + f.outputSize, 0);
        const reduction = totalOriginal > 0 ? ((1 - totalConverted / totalOriginal) * 100) : 0;
        const isSmaller = totalConverted <= totalOriginal;
        return (
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl border border-border bg-card-bg px-5 py-3 text-sm shadow-sm">
            <div className="flex items-center gap-1.5 text-text-secondary">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="font-medium text-text-primary">{formatTime(conversionTimeMs)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-secondary">
              <span>{formatSize(totalOriginal)}</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <span className="font-medium text-text-primary">{formatSize(totalConverted)}</span>
            </div>
            <span className={`font-semibold ${isSmaller ? 'text-success' : 'text-warning'}`}>
              {isSmaller ? '-' : '+'}{Math.abs(reduction).toFixed(0)}%
            </span>
          </div>
        );
      })()}

      {/* Download all button */}
      {hasFiles && (
        <div ref={downloadRef} className="flex justify-center pb-[10px]">
          <DownloadAll
            completedCount={completedCount}
            totalCount={totalCount}
            isConverting={isConverting}
            allFinished={allFinished}
            onDownloadAll={downloadAll}
          />
        </div>
      )}

      {/* PWA install banner */}
      {showInstallBanner && (
        <div className="flex items-center gap-3 rounded-lg border border-primary-500/20 bg-primary-500/10 px-4 py-3">
          <svg className="h-5 w-5 shrink-0 text-primary-700 dark:text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M12 1.5v11.25m0 0 3-3m-3 3-3-3" />
          </svg>
          <p className="flex-1 text-sm text-text-primary">{t.pwaInstallPrompt}</p>
          <button
            type="button"
            onClick={async () => {
              trackPwaInstall();
              try {
                await installPrompt.prompt();
                await installPrompt.userChoice;
              } catch {}
              setShowInstallBanner(false);
              setInstallPrompt(null);
            }}
            className="shrink-0 rounded-md bg-primary-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-600"
          >
            {t.pwaInstallButton}
          </button>
          <button
            type="button"
            onClick={() => {
              localStorage.setItem('picshift_pwa_dismissed', 'true');
              setShowInstallBanner(false);
            }}
            className="shrink-0 rounded-md p-1 text-text-secondary transition-colors hover:text-text-primary"
            aria-label="Dismiss"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Compare loading overlay */}
      {compareLoading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer"
          onClick={cancelCompare}
        >
          <div className="flex flex-col items-center gap-3 rounded-xl bg-card-bg p-8 shadow-lg">
            <svg
              className="h-8 w-8 animate-spin text-primary-500"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <p className="text-sm font-medium text-text-primary">{t.preparing}</p>
          </div>
        </div>
      )}

      {/* Compare modal */}
      {compareState && (
        <CompareView
          {...compareState}
          files={files}
          onNavigate={openCompare}
          onClose={closeCompare}
        />
      )}
    </div>
    </LangProvider>
  );
}
