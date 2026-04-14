import { useState, useRef, useEffect, useLayoutEffect, useCallback, type CSSProperties } from 'react';
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

/** 与 Tailwind sm 断点一致：窄屏下拉用 fixed + 视口内 clamp，避免相对窄触发器时撑出横向滚动 */
const MOBILE_BREAKPOINT_PX = 640;

/** 仅用触发按钮定位；勿用含 fixed 子面板的容器 rect，否则重算时 top/left 会飘到点击附近 */
function computeMobileFloatingPanelStyle(anchorButton: HTMLElement | null): CSSProperties | null {
  if (typeof window === 'undefined' || !anchorButton) return null;
  if (window.innerWidth >= MOBILE_BREAKPOINT_PX) return null;
  const margin = 12;
  const vw = window.innerWidth;
  const width = Math.min(288, vw - margin * 2);
  const r = anchorButton.getBoundingClientRect();
  let left = r.left;
  if (left + width > vw - margin) left = vw - margin - width;
  if (left < margin) left = margin;
  const top = r.bottom + 6;
  const maxHeight = Math.max(200, window.innerHeight - top - margin);
  return {
    position: 'fixed',
    top,
    left,
    width,
    maxWidth: width,
    maxHeight,
    overflowY: 'auto',
  };
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
  const [mobilePanelStyle, setMobilePanelStyle] = useState<CSSProperties | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!dropdownOpen && !customPanelOpen) {
      setMobilePanelStyle(null);
      return;
    }
    const focusInsideRoot = () => {
      const el = containerRef.current;
      const a = document.activeElement;
      return !!(el && a instanceof Node && el.contains(a));
    };

    const updatePosition = () => {
      setMobilePanelStyle(computeMobileFloatingPanelStyle(triggerButtonRef.current));
    };

    // 聚焦输入时浏览器会 scrollIntoView，触发按钮的 rect 会变；若此时按 scroll 重算 top，fixed 面板会跟着「往上跑」
    const onScroll = () => {
      if (focusInsideRoot()) return;
      updatePosition();
    };

    const onResize = () => {
      updatePosition();
    };

    updatePosition();
    const raf = requestAnimationFrame(() => updatePosition());
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll, true);
    };
  }, [dropdownOpen, customPanelOpen]);

  // Close dropdown / custom panel on outside click
  // Check if custom values are valid
  const isCustomValid = value.preset !== 'custom' || (
    value.customMode === 'percentage'
      ? !!(value.percentage && value.percentage > 0)
      : !!(value.width && value.width > 0 && value.height && value.height > 0)
  );

  const dismissPanels = useCallback(() => {
    setDropdownOpen(false);
    setCustomPanelOpen(false);
    if (value.preset === 'custom' && !isCustomValid) {
      onChange({ preset: 'original' });
    }
  }, [value.preset, isCustomValid, onChange]);

  useEffect(() => {
    if (!dropdownOpen && !customPanelOpen) return;
    const handler = (e: PointerEvent) => {
      const root = containerRef.current;
      if (!root) return;
      // 捕获阶段先判断，避免子面板上 stopPropagation 干扰；composedPath 应对 input 与 target 异常
      const path = typeof e.composedPath === 'function' ? e.composedPath() : [e.target];
      const inside = path.some((node) => node instanceof Node && root.contains(node));
      if (inside) return;
      dismissPanels();
    };
    // capture: 先于冒泡阶段，外侧点击一定能关面板；pointerdown 覆盖鼠标 + 触摸
    document.addEventListener('pointerdown', handler, true);
    return () => document.removeEventListener('pointerdown', handler, true);
  }, [dropdownOpen, customPanelOpen, dismissPanels]);

  // iOS 键盘工具栏「完成/对钩」只让输入框 blur，通常没有可捕获的 document pointerdown；随后 resize 还会重算 fixed 位置
  useEffect(() => {
    if (!dropdownOpen && !customPanelOpen) return;
    const root = containerRef.current;
    if (!root) return;

    const onFocusOut = (e: FocusEvent) => {
      const next = e.relatedTarget;
      if (next instanceof Node && root.contains(next)) return;
      window.setTimeout(() => {
        if (root.contains(document.activeElement)) return;
        dismissPanels();
      }, 0);
    };

    root.addEventListener('focusout', onFocusOut);
    return () => root.removeEventListener('focusout', onFocusOut);
  }, [dropdownOpen, customPanelOpen, dismissPanels]);

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
        // 已从「自定义」进入过并改过尺寸时，再次点「自定义…」只打开面板，勿用原图/默认尺寸覆盖
        if (value.preset === 'custom') {
          setDropdownOpen(false);
          setCustomPanelOpen(true);
          return;
        }
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
    [onChange, originalWidth, originalHeight, value.preset],
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
    <div ref={containerRef} className="relative min-w-0">
      <button
        ref={triggerButtonRef}
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
        <div
          className={`z-[100] rounded-lg border border-border bg-card-bg py-1 shadow-lg ${
            mobilePanelStyle
              ? 'fixed mt-0 min-w-0'
              : 'absolute left-0 top-full mt-1 min-w-[160px] max-w-[calc(100vw-1.5rem)]'
          }`}
          style={mobilePanelStyle ?? undefined}
        >
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
        <div
          className={`z-[100] flex flex-col gap-3 rounded-lg border border-border bg-card-bg p-3 shadow-lg ${
            mobilePanelStyle
              ? 'fixed mt-0 min-h-0 min-w-0'
              : 'absolute left-0 top-full mt-1 max-w-[calc(100vw-1.5rem)] sm:min-w-[260px]'
          }`}
          style={mobilePanelStyle ?? undefined}
        >
          {/* Original size reference */}
          {originalWidth && originalHeight && (
            <p className="text-xs text-text-secondary">
              {t.resizeOriginalSize}: {originalWidth} × {originalHeight}
            </p>
          )}

          {/* 窄屏纵向全宽，避免「Percentage」等长词在双列里溢出；sm+ 恢复横排 */}
          <div className="flex min-w-0 w-full flex-col gap-1 rounded-md border border-border bg-drop-bg p-0.5 sm:w-fit sm:flex-row">
            <button
              type="button"
              disabled={disabled}
              onClick={() => handleCustomModeChange('pixels')}
              className={`w-full rounded-md px-2 py-2 text-center text-xs font-medium transition-colors sm:w-auto sm:whitespace-nowrap sm:px-2.5 sm:py-1 ${
                value.customMode === 'pixels'
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {t.resizePixels}
            </button>
            <button
              type="button"
              disabled={disabled}
              onClick={() => handleCustomModeChange('percentage')}
              className={`w-full rounded-md px-2 py-2 text-center text-xs font-medium transition-colors sm:w-auto sm:whitespace-nowrap sm:px-2.5 sm:py-1 ${
                value.customMode === 'percentage'
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {t.resizePercentage}
            </button>
          </div>

          {value.customMode === 'pixels' ? (
            <div className="flex min-w-0 flex-col gap-2">
              {/* 全端一致：先宽/高两行（标签对齐）；锁单独一行在底部靠左 */}
              <div className="flex min-w-0 flex-col gap-2">
                <div className="grid max-w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 gap-y-2.5 sm:max-w-xs">
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
                    className={`min-w-0 w-full rounded-md border px-2 py-1.5 text-base text-text-primary focus:outline-none disabled:opacity-50 sm:py-1 sm:text-sm ${
                      !value.width ? 'border-error focus:border-error' : 'border-border focus:border-primary-500'
                    }`}
                  />
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
                    className={`min-w-0 w-full rounded-md border px-2 py-1.5 text-base text-text-primary focus:outline-none disabled:opacity-50 sm:py-1 sm:text-sm ${
                      !value.height ? 'border-error focus:border-error' : 'border-border focus:border-primary-500'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={toggleLock}
                    disabled={disabled}
                    title={value.lockAspectRatio ? t.resizeUnlockAspect : t.resizeLockAspect}
                    className={`col-start-1 justify-self-start rounded-lg py-1.5 pl-0 pr-1.5 transition-colors sm:rounded-md sm:py-1 sm:pr-1 ${
                      value.lockAspectRatio
                        ? 'text-primary-700 dark:text-primary-500 hover:bg-primary-500/10'
                        : 'text-text-secondary hover:bg-drop-bg'
                    }`}
                  >
                    {value.lockAspectRatio ? (
                      <svg className="h-5 w-5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {(!value.width || !value.height) && (
                <p className="text-xs text-error">≥ 1</p>
              )}
            </div>
          ) : (
            <div className="flex min-w-0 flex-col gap-2">
              {/* 与像素模式一致：先标签+输入（及预览）；锁单独一行在底部靠左 */}
              <div className="flex min-w-0 flex-col gap-2">
                <div className="grid max-w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 gap-y-2.5 sm:max-w-xs">
                  <label className="text-xs text-text-secondary">%</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={500}
                    value={value.percentage || ''}
                    onChange={(e) => handlePercentageChange(Number(e.target.value))}
                    onKeyDown={handleInputKeyDown}
                    disabled={disabled}
                    aria-label={t.resizePercentage}
                    className={`min-w-0 w-full rounded-md border px-2 py-1.5 text-base text-text-primary focus:outline-none disabled:opacity-50 sm:py-1 sm:text-sm ${
                      !value.percentage ? 'border-error focus:border-error' : 'border-border focus:border-primary-500'
                    }`}
                  />
                  {previewW && previewH && (
                    <p className="col-span-2 text-xs leading-snug text-text-secondary">
                      → {previewW} × {previewH}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={toggleLock}
                    disabled={disabled}
                    title={value.lockAspectRatio ? t.resizeUnlockAspect : t.resizeLockAspect}
                    className={`col-start-1 justify-self-start rounded-lg py-1.5 pl-0 pr-1.5 transition-colors sm:rounded-md sm:py-1 sm:pr-1 ${
                      value.lockAspectRatio
                        ? 'text-primary-700 dark:text-primary-500 hover:bg-primary-500/10'
                        : 'text-text-secondary hover:bg-drop-bg'
                    }`}
                  >
                    {value.lockAspectRatio ? (
                      <svg className="h-5 w-5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    )}
                  </button>
                </div>
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
