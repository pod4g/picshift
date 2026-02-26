import { useEffect, useState, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { useConverter } from '../../hooks/useConverter';
import { loadPreferences, savePreferences } from '../../lib/preferences';
import { formatSize } from '../../lib/format-utils';
import type { InputFormat, OutputFormatKey } from '../../types';
import { LangProvider } from '../../i18n/LangContext';
import { getUI } from '../../i18n/ui';
import type { Locale } from '../../i18n/config';
import { tpl } from '../../i18n/index';
import DropZone from './DropZone';
import FormatSelector from './FormatSelector';
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

export default function Converter({ defaultInputFormat, defaultOutputFormat, fullPage = false, keepSmaller = false, lang = 'en' }: ConverterProps) {
  // Compute initial format & quality eagerly (no useEffect) to avoid flicker
  const [initPrefs] = useState(() => {
    if (defaultOutputFormat) return { outputFormat: defaultOutputFormat, quality: 85 };
    return loadPreferences();
  });

  const {
    files,
    outputFormat,
    quality,
    setOutputFormat,
    setQuality,
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
  } = useConverter({ keepSmaller, compressMode: keepSmaller, initialFormat: initPrefs.outputFormat, initialQuality: initPrefs.quality });

  const [pageDragOver, setPageDragOver] = useState(false);
  const [conversionTimeMs, setConversionTimeMs] = useState<number | null>(null);
  const userSelectedFormat = useRef(false);
  const conversionStartRef = useRef<number | null>(null);
  const confettiFiredRef = useRef(false);
  const fileListEndRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);
  const prevFileCountRef = useRef(0);
  const dragCounter = useRef(0);

  // Persist preferences when user changes format or quality
  useEffect(() => {
    savePreferences({ outputFormat, quality });
  }, [outputFormat, quality]);

  // Wrap setOutputFormat to track manual user selection
  const handleFormatChange = useCallback(
    (fmt: OutputFormatKey) => {
      userSelectedFormat.current = true;
      setOutputFormat(fmt);
    },
    [setOutputFormat],
  );

  // Smart default: when first files are added and user hasn't manually picked a format, guess from input
  // Skip in compress mode — each file keeps its own format
  const handleAddFiles = useCallback(
    (incoming: File[]) => {
      if (!keepSmaller && files.length === 0 && !defaultOutputFormat && !userSelectedFormat.current && incoming.length > 0) {
        const guessed = guessOutputFormat(incoming[0].name);
        setOutputFormat(guessed);
      }
      addFiles(incoming);
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

  // Confetti + scroll to download when all files finish
  useEffect(() => {
    if (allFinished && completedCount > 0 && !confettiFiredRef.current) {
      confettiFiredRef.current = true;
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
      handleAddFiles(Array.from(items));
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
        handleAddFiles(Array.from(e.dataTransfer.files));
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
          <div className="rounded-2xl border-2 border-dashed border-primary-500 bg-card-bg/90 px-12 py-10 shadow-lg">
            <div className="flex flex-col items-center gap-3">
              <svg className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
              <p className="text-lg font-semibold text-primary-500">{t.dropAnywhere}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main card */}
      <div className="rounded-xl border border-border bg-card-bg p-6 shadow-sm">
        {/* Controls */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          {!defaultOutputFormat && !keepSmaller && (
            <FormatSelector
              value={outputFormat}
              onChange={handleFormatChange}
              disabled={isConverting}
            />
          )}
          <QualitySlider
            value={quality}
            onChange={setQuality}
            disabled={isConverting}
            visible={keepSmaller || outputFormat !== 'png'}
          />
          {(quality !== 85 || (!defaultOutputFormat && !keepSmaller && outputFormat !== 'jpg')) && !isConverting && (
            <button
              type="button"
              onClick={() => {
                setQuality(85);
                if (!defaultOutputFormat && !keepSmaller) {
                  setOutputFormat('jpg');
                  userSelectedFormat.current = false;
                }
              }}
              className="rounded-md px-2 py-1 text-xs text-text-secondary transition-colors hover:text-primary-500 hover:bg-primary-500/10 focus:outline-none"
              title={t.resetDefaults}
            >
              <svg className="inline-block w-3.5 h-3.5 mr-0.5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>
              {t.resetDefaults}
            </button>
          )}
          {hasFiles && (
            <button
              type="button"
              onClick={clearAll}
              className="ml-auto rounded-lg border border-border px-4 py-1.5 text-sm font-medium text-text-secondary transition-colors hover:border-error hover:text-error focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-1"
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
              onRemove={removeFile}
              onDownload={downloadSingle}
              onCompare={openCompare}
              compressMode={keepSmaller}
            />
            <div ref={fileListEndRef} />
          </div>
        )}
      </div>

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
