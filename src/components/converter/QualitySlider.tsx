import { useLang } from '../../i18n/LangContext';
import { getUI } from '../../i18n/ui';

interface QualitySliderProps {
  value: number;
  onChange: (q: number) => void;
  disabled?: boolean;
  visible?: boolean;
}

export default function QualitySlider({
  value,
  onChange,
  disabled = false,
  visible = true,
}: QualitySliderProps) {
  const lang = useLang();
  const t = getUI(lang);
  if (!visible) return null;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label htmlFor="quality-slider" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
          {t.qualityLabel}
        </label>
        <span className="text-xs font-medium text-primary-500">{value}%</span>
      </div>
      <input
        id="quality-slider"
        type="range"
        min={1}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        className="
          h-2 w-full cursor-pointer appearance-none rounded-full bg-border
          disabled:cursor-not-allowed disabled:opacity-50
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-primary-500 [&::-webkit-slider-thumb]:shadow-sm
          [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110
          [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:bg-primary-500 [&::-moz-range-thumb]:shadow-sm
        "
      />
    </div>
  );
}
