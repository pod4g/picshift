import { useState, useRef, useEffect, useCallback } from 'react';
import type { ResizeOption, ResizePreset, ResizeCustomMode } from '../../types';
import { useLang } from '../../i18n/LangContext';
import { getUI } from '../../i18n/ui';

interface ResizeSelectorProps {
  value: ResizeOption;
  onChange: (option: ResizeOption) => void;
  disabled?: boolean;
  originalWidth?: number;
  originalHeight?: number;
}

const PRESETS: { key: ResizePreset; labelKey: keyof ReturnType<typeof getUI>; descKey: keyof ReturnType<typeof getUI> }[] = [
  { key: 'original', labelKey: 'resizeOriginal', descKey: 'resizeOriginalDesc' },
  { key: 'max-2560', labelKey: 'resizeMax2560', descKey: 'resizeMax2560Desc' },
  { key: 'max-1920', labelKey: 'resizeMax1920', descKey: 'resizeMax1920Desc' },
  { key: 'max-1080', labelKey: 'resizeMax1080', descKey: 'resizeMax1080Desc' },
  { key: 'max-800', labelKey: 'resizeMax800', descKey: 'resizeMax800Desc' },
  { key: 'three-quarter', labelKey: 'resizeThreeQuarter', descKey: 'resizeThreeQuarterDesc' },
  { key: 'half', labelKey: 'resizeHalf', descKey: 'resizeHalfDesc' },
  { key: 'custom', labelKey: 'resizeCustom', descKey: 'resizeCustomDesc' },
];

export default function ResizeSelector({
  value,
  onChange,
  disabled = false,
  originalWidth,
  originalHeight,
}: ResizeSelectorProps) {
  const lang = useLang();
  const t = getUI(lang);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [customPanelOpen, setCustomPanelOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown / custom panel on outside click
  // Check if custom values are valid
  const isCustomValid = value.preset !== 'custom' || (
    value.customMode === 'percentage'
      ? !!(value.percentage && value.percentage > 0)
      : !!(value.width && value.width > 0 && value.height && value.height > 0)
  );

  useEffect(() => {
    if (!dropdownOpen && !customPanelOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setCustomPanelOpen(false);
        // Reset to original if custom values are invalid
        if (value.preset === 'custom' && !isCustomValid) {
          onChange({ preset: 'original' });
        }
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen, customPanelOpen, value, isCustomValid, onChange]);

  // Button display text: show actual values for custom preset
  let displayLabel: string;
  if (value.preset === 'custom') {
    if (value.customMode === 'percentage' && value.percentage) {
      displayLabel = `${value.percentage}%`;
    } else if (value.customMode === 'pixels' && value.width && value.height) {
      displayLabel = `${value.width}×${value.height}`;
    } else {
      displayLabel = t.resizeCustom;
    }
  } else {
    const selected = PRESETS.find((p) => p.key === value.preset);
    displayLabel = selected ? t[selected.labelKey] : t.resizeOriginal;
  }

  const handleButtonClick = useCallback(() => {
    setDropdownOpen((v) => {
      if (!v) setHighlightedIndex(PRESETS.findIndex((p) => p.key === value.preset));
      return !v;
    });
    setCustomPanelOpen(false);
  }, [value.preset]);

  const handlePresetSelect = useCallback(
    (preset: ResizePreset) => {
      if (preset === 'custom') {
        const w = originalWidth ?? 1920;
        const h = originalHeight ?? 1080;
        onChange({
          preset: 'custom',
          customMode: 'pixels',
          width: w,
          height: h,
          lockAspectRatio: true,
          lockedRatio: w / h,
        });
        setDropdownOpen(false);
        setCustomPanelOpen(true);
      } else {
        onChange({ preset });
        setDropdownOpen(false);
        setCustomPanelOpen(false);
      }
    },
    [onChange, originalWidth, originalHeight],
  );

  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!dropdownOpen) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((i) => (i + 1) % PRESETS.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((i) => (i - 1 + PRESETS.length) % PRESETS.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < PRESETS.length) {
          handlePresetSelect(PRESETS[highlightedIndex].key);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setDropdownOpen(false);
        break;
    }
  }, [dropdownOpen, highlightedIndex, handlePresetSelect]);

  const handleCustomModeChange = useCallback(
    (mode: ResizeCustomMode) => {
      const w = originalWidth ?? 1920;
      const h = originalHeight ?? 1080;
      onChange({
        ...value,
        customMode: mode,
        ...(mode === 'percentage' ? { percentage: 100 } : {
          width: w,
          height: h,
          lockedRatio: value.lockAspectRatio ? w / h : value.lockedRatio,
        }),
      });
    },
    [onChange, value, originalWidth, originalHeight],
  );

  const handleWidthChange = useCallback(
    (w: number) => {
      if (w < 0) return;
      if (value.lockAspectRatio && value.lockedRatio) {
        const h = Math.round(w / value.lockedRatio);
        onChange({ ...value, width: w, height: h });
      } else {
        onChange({ ...value, width: w });
      }
    },
    [onChange, value],
  );

  const handleHeightChange = useCallback(
    (h: number) => {
      if (h < 0) return;
      if (value.lockAspectRatio && value.lockedRatio) {
        const w = Math.round(h * value.lockedRatio);
        onChange({ ...value, width: w, height: h });
      } else {
        onChange({ ...value, height: h });
      }
    },
    [onChange, value],
  );

  const handlePercentageChange = useCallback(
    (pct: number) => {
      if (pct < 0) return;
      onChange({ ...value, percentage: Math.min(500, pct) });
    },
    [onChange, value],
  );

  const toggleLock = useCallback(() => {
    const newLock = !value.lockAspectRatio;
    onChange({
      ...value,
      lockAspectRatio: newLock,
      lockedRatio: newLock && value.width && value.height
        ? value.width / value.height
        : value.lockedRatio,
    });
  }, [onChange, value]);

  const handleInputKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setCustomPanelOpen(false);
      if (!isCustomValid) {
        onChange({ preset: 'original' });
      }
    }
  }, [isCustomValid, onChange]);

  // Compute preview dimensions for percentage mode
  const previewW = value.customMode === 'percentage' && originalWidth
    ? Math.round(originalWidth * (value.percentage ?? 100) / 100)
    : undefined;
  const previewH = value.customMode === 'percentage' && originalHeight
    ? Math.round(originalHeight * (value.percentage ?? 100) / 100)
    : undefined;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={handleButtonClick}
        onKeyDown={handleDropdownKeyDown}
        disabled={disabled}
        className={`
          flex items-center gap-1.5 cursor-pointer rounded-lg border px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium transition-colors
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1
          disabled:cursor-not-allowed disabled:opacity-50
          ${value.preset !== 'original'
            ? 'border-primary-500/60 bg-primary-500/15 text-text-primary'
            : 'border-border bg-card-bg text-text-primary hover:border-primary-500/30'}
        `}
      >
        <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
        {displayLabel}
        <svg className={`h-3 w-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Preset dropdown */}
      {dropdownOpen && (
        <div className="absolute top-full left-0 z-30 mt-1 min-w-[160px] rounded-lg border border-border bg-card-bg py-1 shadow-lg">
          {PRESETS.map(({ key, labelKey, descKey }, idx) => (
            <button
              key={key}
              type="button"
              onClick={() => handlePresetSelect(key)}
              title={t[descKey]}
              className={`
                block w-full px-3 py-1.5 text-left text-sm transition-colors
                ${value.preset === key
                  ? 'bg-primary-500/15 text-text-primary font-semibold'
                  : idx === highlightedIndex
                    ? 'bg-primary-500/20 dark:bg-primary-500/30 text-text-primary font-medium'
                    : 'text-text-primary hover:bg-drop-bg'}
              `}
            >
              {t[labelKey]}
            </button>
          ))}
        </div>
      )}

      {/* Custom panel */}
      {customPanelOpen && value.preset === 'custom' && (
        <div className="absolute top-full left-0 z-20 mt-1 min-w-[260px] rounded-lg border border-border bg-card-bg p-3 flex flex-col gap-3 shadow-lg">
          {/* Original size reference */}
          {originalWidth && originalHeight && (
            <p className="text-xs text-text-secondary">
              {t.resizeOriginalSize}: {originalWidth} × {originalHeight}
            </p>
          )}

          {/* Mode toggle */}
          <div className="flex items-center gap-1 rounded-md border border-border bg-drop-bg p-0.5 w-fit">
            <button
              type="button"
              disabled={disabled}
              onClick={() => handleCustomModeChange('pixels')}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                value.customMode === 'pixels'
                  ? 'bg-primary-600 dark:bg-primary-500 text-white dark:text-slate-950'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {t.resizePixels}
            </button>
            <button
              type="button"
              disabled={disabled}
              onClick={() => handleCustomModeChange('percentage')}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                value.customMode === 'percentage'
                  ? 'bg-primary-600 dark:bg-primary-500 text-white dark:text-slate-950'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {t.resizePercentage}
            </button>
          </div>

          {value.customMode === 'pixels' ? (
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <label className="text-xs text-text-secondary">{t.resizeWidth}</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={16384}
                    value={value.width || ''}
                    onChange={(e) => handleWidthChange(Number(e.target.value))}
                    onKeyDown={handleInputKeyDown}
                    disabled={disabled}
                    className={`w-20 rounded-md border px-2 py-1 text-sm text-text-primary focus:outline-none disabled:opacity-50 ${
                      !value.width ? 'border-error focus:border-error' : 'border-border focus:border-primary-500'
                    }`}
                  />
                </div>
                <span className="text-xs text-text-secondary">×</span>
                <div className="flex items-center gap-1">
                  <label className="text-xs text-text-secondary">{t.resizeHeight}</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={16384}
                    value={value.height || ''}
                    onChange={(e) => handleHeightChange(Number(e.target.value))}
                    onKeyDown={handleInputKeyDown}
                    disabled={disabled}
                    className={`w-20 rounded-md border px-2 py-1 text-sm text-text-primary focus:outline-none disabled:opacity-50 ${
                      !value.height ? 'border-error focus:border-error' : 'border-border focus:border-primary-500'
                    }`}
                  />
                </div>
                {/* Lock aspect ratio */}
                <button
                  type="button"
                  onClick={toggleLock}
                  disabled={disabled}
                  title={value.lockAspectRatio ? t.resizeUnlockAspect : t.resizeLockAspect}
                  className={`rounded-md p-1 transition-colors ${
                    value.lockAspectRatio
                      ? 'text-primary-700 dark:text-primary-500 hover:bg-primary-500/10'
                      : 'text-text-secondary hover:bg-drop-bg'
                  }`}
                >
                  {value.lockAspectRatio ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  )}
                </button>
              </div>
              {(!value.width || !value.height) && (
                <p className="text-xs text-error">≥ 1</p>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={500}
                  value={value.percentage || ''}
                  onChange={(e) => handlePercentageChange(Number(e.target.value))}
                  onKeyDown={handleInputKeyDown}
                  disabled={disabled}
                  className={`w-20 rounded-md border px-2 py-1 text-sm text-text-primary focus:outline-none disabled:opacity-50 ${
                    !value.percentage ? 'border-error focus:border-error' : 'border-border focus:border-primary-500'
                  }`}
                />
              <span className="text-xs text-text-secondary">%</span>
              {previewW && previewH && (
                <span className="text-xs text-text-secondary">
                  → {previewW} × {previewH}
                </span>
              )}
              </div>
              {!value.percentage && (
                <p className="text-xs text-error">≥ 1</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
