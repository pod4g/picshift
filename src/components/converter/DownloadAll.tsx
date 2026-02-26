import { useLang } from '../../i18n/LangContext';
import { getUI } from '../../i18n/ui';

interface DownloadAllProps {
  completedCount: number;
  totalCount: number;
  isConverting: boolean;
  allFinished: boolean;
  onDownloadAll: () => void;
}

export default function DownloadAll({
  completedCount,
  totalCount,
  isConverting,
  allFinished,
  onDownloadAll,
}: DownloadAllProps) {
  const lang = useLang();
  const t = getUI(lang);
  if (totalCount <= 1) return null;

  const isDisabled = isConverting || completedCount === 0;
  const shouldPulse = allFinished && completedCount > 0;

  return (
    <button
      type="button"
      onClick={onDownloadAll}
      disabled={isDisabled}
      className={`
        inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500
        px-6 py-3 text-sm font-medium text-white shadow-sm
        transition-all duration-200
        hover:from-primary-600 hover:to-secondary-500 hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-sm
        ${shouldPulse ? 'animate-pulse-glow' : ''}
      `}
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      {t.downloadAll} ({completedCount})
    </button>
  );
}
