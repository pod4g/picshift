import { useDropZone } from '../../hooks/useDropZone';
import type { ChangeEvent } from 'react';
import { useLang } from '../../i18n/LangContext';
import { getUI } from '../../i18n/ui';

interface DropZoneProps {
  onFiles: (files: File[]) => void;
  accept?: string;
}

export default function DropZone({ onFiles, accept = '.heic,.heif,.jpg,.jpeg,.png,.webp,.avif,.bmp' }: DropZoneProps) {
  const lang = useLang();
  const t = getUI(lang);
  const {
    isDragOver,
    dropZoneRef,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleClick,
    fileInputRef,
  } = useDropZone({ onFiles });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFiles(Array.from(files));
      e.target.value = '';
    }
  }

  return (
    <div
      ref={dropZoneRef}
      data-dropzone
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        relative flex min-h-[160px] sm:min-h-[200px] cursor-pointer flex-col items-center justify-center
        rounded-xl border-2 border-dashed p-5 sm:p-8 transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${
          isDragOver
            ? 'border-primary-500 bg-drop-hover scale-[1.01]'
            : 'border-border bg-drop-bg hover:border-primary-500/50 hover:bg-drop-hover'
        }
      `}
    >
      <svg
        className={`mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 transition-colors duration-200 ${
          isDragOver ? 'text-primary-500' : 'text-text-secondary'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
        />
      </svg>

      <p className="text-base font-medium text-text-primary">
        {t.dropDrag}
      </p>
      <p className="mt-1 text-sm text-text-secondary">
        {t.dropClick}
      </p>
      <p className="mt-3 text-xs text-text-secondary">
        {t.dropFormats}
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple
        onChange={handleInputChange}
        className="hidden"
        aria-label="Upload image files"
      />
    </div>
  );
}
