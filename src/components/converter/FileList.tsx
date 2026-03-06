import type { ConvertFile } from '../../types';
import { useLang } from '../../i18n/LangContext';
import { getUI } from '../../i18n/ui';
import { tpl } from '../../i18n/index';
import FileCard from './FileCard';

interface FileListProps {
  files: ConvertFile[];
  quality: number;
  onRemove: (id: string) => void;
  onDownload: (id: string) => void;
  onCompare: (id: string) => void;
  compressMode?: boolean;
}

export default function FileList({ files, quality, onRemove, onDownload, onCompare, compressMode }: FileListProps) {
  const lang = useLang();
  const t = getUI(lang);
  const completedCount = files.filter((f) => f.status === 'done').length;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-text-secondary">
        {tpl(compressMode ? t.filesCompressed : t.filesConverted, { completed: completedCount, total: files.length })}
      </p>
      <div className="flex flex-col gap-3">
        {files.map((file) => (
          <FileCard
            key={file.id}
            file={file}
            quality={quality}
            onRemove={onRemove}
            onDownload={onDownload}
            onCompare={onCompare}
          />
        ))}
      </div>
    </div>
  );
}
