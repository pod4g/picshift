import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { useLang } from '../../i18n/LangContext';
import { getUI } from '../../i18n/ui';
import { formatSize } from '../../lib/format-utils';
import type { ConvertFile } from '../../types';

interface CompareViewProps {
  fileId: string;
  originalUrl: string;
  convertedUrl: string;
  originalSize: number;
  convertedSize: number;
  onClose: () => void;
  files: ConvertFile[];
  onNavigate: (id: string) => void;
}

export default function CompareView({
  fileId,
  originalUrl,
  convertedUrl,
  originalSize,
  convertedSize,
  onClose,
  files,
  onNavigate,
}: CompareViewProps) {
  const lang = useLang();
  const t = getUI(lang);
  const [position, setPosition] = useState(50);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const thumbStripRef = useRef<HTMLDivElement>(null);

  const completedFiles = useMemo(
    () => files.filter((f) => f.status === 'done'),
    [files],
  );

  const currentIndex = useMemo(
    () => completedFiles.findIndex((f) => f.id === fileId),
    [completedFiles, fileId],
  );

  const canNavigate = completedFiles.length > 1;

  const navigatePrev = useCallback(() => {
    if (!canNavigate) return;
    const prevIndex = currentIndex <= 0 ? completedFiles.length - 1 : currentIndex - 1;
    onNavigate(completedFiles[prevIndex].id);
  }, [canNavigate, currentIndex, completedFiles, onNavigate]);

  const navigateNext = useCallback(() => {
    if (!canNavigate) return;
    const nextIndex = currentIndex >= completedFiles.length - 1 ? 0 : currentIndex + 1;
    onNavigate(completedFiles[nextIndex].id);
  }, [canNavigate, currentIndex, completedFiles, onNavigate]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbStripRef.current) return;
    const active = thumbStripRef.current.querySelector('[data-active="true"]');
    if (active) {
      active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [fileId]);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (viewMode !== 'slider') return;
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition, viewMode],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (canNavigate) {
          navigatePrev();
        } else if (viewMode === 'slider') {
          setPosition((p) => Math.max(0, p - 2));
        }
      } else if (e.key === 'ArrowRight') {
        if (canNavigate) {
          navigateNext();
        } else if (viewMode === 'slider') {
          setPosition((p) => Math.min(100, p + 2));
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, canNavigate, navigatePrev, navigateNext, viewMode]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-label="Image comparison view"
      aria-modal="true"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close comparison"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex w-full max-w-5xl flex-col gap-3 sm:gap-4">
        {/* Header: labels + view mode toggle */}
        <div className="flex items-center justify-between gap-2 text-xs sm:text-sm text-white">
          <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-black/50 px-2 py-1 sm:px-3 sm:py-1.5">
            <span className="font-medium">{t.original}</span>
            <span className="text-white/70">{formatSize(originalSize)}</span>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-1 rounded-lg bg-black/50 p-1 shrink-0">
            {/* Slider icon */}
            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`rounded-md p-1.5 transition-colors ${viewMode === 'slider' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/80'}`}
              aria-label="Slider view"
              title="Slider view"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l-2-1.5v3L9 12zM15 12l2-1.5v3L15 12z" />
              </svg>
            </button>
            {/* Side-by-side icon */}
            <button
              type="button"
              onClick={() => setViewMode('side-by-side')}
              className={`rounded-md p-1.5 transition-colors ${viewMode === 'side-by-side' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/80'}`}
              aria-label="Side by side view"
              title="Side by side view"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="4" width="7" height="16" rx="1" />
                <rect x="14" y="4" width="7" height="16" rx="1" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-black/50 px-2 py-1 sm:px-3 sm:py-1.5">
            <span className="font-medium">{t.converted}</span>
            <span className="text-white/70">{formatSize(convertedSize)}</span>
          </div>
        </div>

        {/* Comparison area with prev/next overlay */}
        <div className="relative">
          {/* Prev button */}
          {canNavigate && (
            <button
              type="button"
              onClick={navigatePrev}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={t.comparePrev}
              title={t.comparePrev}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {canNavigate && (
            <button
              type="button"
              onClick={navigateNext}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={t.compareNext}
              title={t.compareNext}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

          {/* Slider view */}
          {viewMode === 'slider' && (
            <div
              ref={containerRef}
              className="relative aspect-[3/4] sm:aspect-video w-full select-none overflow-hidden rounded-xl bg-black"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              style={{ touchAction: 'none' }}
            >
              {/* Original image (left side) */}
              <img
                src={originalUrl}
                alt="Original"
                className="absolute inset-0 h-full w-full object-contain"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                draggable={false}
              />

              {/* Converted image (right side) */}
              <img
                src={convertedUrl}
                alt="Converted"
                className="absolute inset-0 h-full w-full object-contain"
                style={{ clipPath: `inset(0 0 0 ${position}%)` }}
                draggable={false}
              />

              {/* Divider line */}
              <div
                className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-lg"
                style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
              >
                {/* Handle grip */}
                <div className="absolute top-1/2 left-1/2 flex h-10 w-6 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg">
                  <svg className="h-4 w-4 text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="8" y="4" width="2" height="16" rx="1" />
                    <rect x="14" y="4" width="2" height="16" rx="1" />
                  </svg>
                </div>
              </div>

              {/* Corner labels */}
              <div className="pointer-events-none absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
                {t.original}
              </div>
              <div className="pointer-events-none absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
                {t.converted}
              </div>
            </div>
          )}

          {/* Side-by-side view */}
          {viewMode === 'side-by-side' && (
            <div className="flex flex-col sm:flex-row aspect-[3/4] sm:aspect-video w-full gap-1 sm:gap-2 overflow-hidden rounded-xl bg-black">
              <div className="relative flex flex-1 items-center justify-center overflow-hidden">
                <img
                  src={originalUrl}
                  alt="Original"
                  className="max-h-full max-w-full object-contain"
                  draggable={false}
                />
                <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
                  {t.original}
                </span>
              </div>
              <div className="relative flex flex-1 items-center justify-center overflow-hidden">
                <img
                  src={convertedUrl}
                  alt="Converted"
                  className="max-h-full max-w-full object-contain"
                  draggable={false}
                />
                <span className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
                  {t.converted}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnail strip */}
        {completedFiles.length > 1 && (
          <div
            ref={thumbStripRef}
            className="compare-thumbstrip flex gap-2 overflow-x-auto py-1"
          >
            {completedFiles.map((file) => (
              <button
                key={file.id}
                type="button"
                onClick={() => onNavigate(file.id)}
                data-active={file.id === fileId}
                className={`h-12 w-12 flex-shrink-0 overflow-hidden rounded-md transition-all ${
                  file.id === fileId
                    ? 'ring-2 ring-primary-500 ring-offset-1 ring-offset-black'
                    : 'opacity-60 hover:opacity-100'
                }`}
                aria-label={file.name}
                title={file.name}
              >
                {file.thumbnailUrl ? (
                  <img
                    src={file.thumbnailUrl}
                    alt={file.name}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white/10 text-[10px] text-white/50">
                    ?
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
