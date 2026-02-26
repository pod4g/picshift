import type { OutputFormatKey } from '../../types';
import { useLang } from '../../i18n/LangContext';
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

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs sm:text-sm font-semibold text-text-secondary uppercase tracking-wide whitespace-nowrap">
        {t.outputLabel}
      </span>
      <div className="flex rounded-lg border border-primary-500/30 bg-primary-500/10 p-0.5">
        {FORMAT_OPTIONS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            disabled={disabled}
            onClick={() => onChange(key)}
            className={`
              rounded-md px-2.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-bold transition-all duration-150
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1
              disabled:cursor-not-allowed disabled:opacity-50
              ${
                value === key
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-primary-500 hover:bg-primary-500/10'
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
