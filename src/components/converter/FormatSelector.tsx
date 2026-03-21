import { useRef, useEffect, useState, useCallback } from 'react';
import type { OutputFormatKey } from '../../types';
import { useLang } from '../../i18n/LangContext';
import { tpl } from '../../i18n';
import { getUI } from '../../i18n/ui';

interface FormatSelectorProps {
  value: OutputFormatKey;
  onChange: (fmt: OutputFormatKey) => void;
  disabled?: boolean;
}

const FORMAT_OPTIONS: { key: OutputFormatKey; label: string }[] = [
  { key: 'jpg', label: 'JPG' },
  { key: 'png', label: 'PNG' },
  { key: 'webp', label: 'WebP' },
  { key: 'avif', label: 'AVIF' },
];

export default function FormatSelector({ value, onChange, disabled = false }: FormatSelectorProps) {
  const lang = useLang();
  const t = getUI(lang);
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Map<OutputFormatKey, HTMLButtonElement>>(new Map());
  const [slider, setSlider] = useState<{ left: number; width: number } | null>(null);

  const updateSlider = useCallback(() => {
    const btn = btnRefs.current.get(value);
    const container = containerRef.current;
    if (!btn || !container) return;
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    setSlider({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
    });
  }, [value]);

  useEffect(() => {
    updateSlider();
  }, [updateSlider]);

  useEffect(() => {
    const observer = new ResizeObserver(updateSlider);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateSlider]);

  return (
    <div>
      <div ref={containerRef} className="relative flex overflow-hidden rounded-lg border border-border bg-drop-bg p-0.5">
        {slider && (
          <div
            className="pointer-events-none absolute top-0.5 bottom-0.5 rounded-md bg-primary-500 shadow-sm transition-all duration-200 ease-out"
            style={{ left: slider.left, width: slider.width }}
          />
        )}
        {FORMAT_OPTIONS.map(({ key, label }) => (
          <button
            key={key}
            ref={(el) => { if (el) btnRefs.current.set(key, el); }}
            type="button"
            disabled={disabled}
            onClick={() => onChange(key)}
            title={tpl(t.convertTo, { format: label })}
            className={`
              relative z-10 flex-1 cursor-pointer rounded-md px-2.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1
              disabled:cursor-not-allowed disabled:opacity-50
              ${
                value === key
                  ? 'text-white dark:text-white'
                  : 'text-text-primary/90 hover:text-text-primary'
              }
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
