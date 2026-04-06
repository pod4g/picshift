import { useState, useCallback, useRef, useEffect } from 'react';
import type { Locale } from '../../i18n/config';

const UI: Record<string, Record<string, string>> = {
  en: {
    dropTitle: 'Drop images here',
    dropHint: 'or click to browse, or paste (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'See what metadata is hidden in your photos',
    addMore: 'Add more files',
    scanning: 'Scanning files...',
    clearAll: 'Clear all',
    fieldsFound: 'fields found',
    sensitive: 'sensitive',
    noMetadata: 'No metadata found in this file.',
    fieldsTravel: 'fields will travel with this file unless removed',
    fieldsRemoved: 'fields removed',
    metadataRemoved: 'metadata removed',
    removeBtn: 'Remove all metadata & download',
    removing: 'Removing metadata...',
    downloadBtn: 'Download cleaned',
    downloadZip: 'Download cleaned images (ZIP)',
    footerNote: 'All metadata fields travel with the file when shared. Removing them keeps only pixel data.',
    file: 'file',
    files: 'files',
    metadataFields: 'metadata fields',
    removedFrom: 'metadata fields removed from',
  },
  zh: {
    dropTitle: '拖放图片到此处',
    dropHint: '或点击浏览，或粘贴 (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: '查看照片中隐藏了哪些元数据',
    addMore: '继续添加',
    scanning: '正在扫描...',
    clearAll: '全部清除',
    fieldsFound: '项元数据',
    sensitive: '项敏感',
    noMetadata: '此文件未发现元数据。',
    fieldsTravel: '项信息将随文件传播',
    fieldsRemoved: '项已清除',
    metadataRemoved: '项元数据已清除',
    removeBtn: '一键清除元数据并下载',
    removing: '正在清除元数据...',
    downloadBtn: '下载清理后的图片',
    downloadZip: '下载清理后的图片 (ZIP)',
    footerNote: '元数据会嵌入在文件中随分享传播。清除后文件只保留像素内容。',
    file: '个文件',
    files: '个文件',
    metadataFields: '项元数据',
    removedFrom: '项元数据已从',
  },
  ja: {
    dropTitle: '画像をドロップ',
    dropHint: 'クリックで選択、またはペースト (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: '写真に埋め込まれたメタデータを確認',
    addMore: 'さらに追加',
    scanning: 'スキャン中...',
    clearAll: 'すべてクリア',
    fieldsFound: '項目検出',
    sensitive: '項目が機密',
    noMetadata: 'メタデータは見つかりませんでした。',
    fieldsTravel: '項目がファイルと共に送信されます',
    fieldsRemoved: '項目を削除済み',
    metadataRemoved: '項目のメタデータを削除',
    removeBtn: 'メタデータを削除してダウンロード',
    removing: 'メタデータを削除中...',
    downloadBtn: 'クリーン済み画像をダウンロード',
    downloadZip: 'クリーン済み画像をダウンロード (ZIP)',
    footerNote: 'メタデータはファイル共有時に一緒に送信されます。削除するとピクセルデータのみが残ります。',
    file: 'ファイル',
    files: 'ファイル',
    metadataFields: '項目',
    removedFrom: '項目を削除（',
  },
  es: {
    dropTitle: 'Arrastra imágenes aquí',
    dropHint: 'o haz clic para seleccionar, o pega (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Descubre qué metadatos esconden tus fotos',
    addMore: 'Agregar más',
    scanning: 'Escaneando...',
    clearAll: 'Limpiar todo',
    fieldsFound: 'campos encontrados',
    sensitive: 'sensibles',
    noMetadata: 'No se encontraron metadatos en este archivo.',
    fieldsTravel: 'campos viajan con este archivo',
    fieldsRemoved: 'campos eliminados',
    metadataRemoved: 'campos eliminados',
    removeBtn: 'Eliminar metadatos y descargar',
    removing: 'Eliminando metadatos...',
    downloadBtn: 'Descargar imagen limpia',
    downloadZip: 'Descargar imágenes limpias (ZIP)',
    footerNote: 'Los metadatos viajan con el archivo al compartirlo. Eliminarlos deja solo los píxeles.',
    file: 'archivo',
    files: 'archivos',
    metadataFields: 'campos',
    removedFrom: 'campos eliminados de',
  },
  fr: {
    dropTitle: 'Déposez vos images ici',
    dropHint: 'ou cliquez pour parcourir, ou collez (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Découvrez les métadonnées cachées dans vos photos',
    addMore: 'Ajouter d\'autres',
    scanning: 'Analyse en cours...',
    clearAll: 'Tout effacer',
    fieldsFound: 'champs trouvés',
    sensitive: 'sensibles',
    noMetadata: 'Aucune métadonnée trouvée dans ce fichier.',
    fieldsTravel: 'champs accompagnent ce fichier',
    fieldsRemoved: 'champs supprimés',
    metadataRemoved: 'champs supprimés',
    removeBtn: 'Supprimer les métadonnées et télécharger',
    removing: 'Suppression en cours...',
    downloadBtn: 'Télécharger l\'image nettoyée',
    downloadZip: 'Télécharger les images nettoyées (ZIP)',
    footerNote: 'Les métadonnées voyagent avec le fichier lors du partage. Les supprimer ne laisse que les pixels.',
    file: 'fichier',
    files: 'fichiers',
    metadataFields: 'champs',
    removedFrom: 'champs supprimés de',
  },
  pt: {
    dropTitle: 'Arraste imagens aqui',
    dropHint: 'ou clique pra selecionar, ou cole (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Veja o que tá escondido nas suas fotos',
    addMore: 'Adicionar mais',
    scanning: 'Escaneando...',
    clearAll: 'Limpar tudo',
    fieldsFound: 'campos encontrados',
    sensitive: 'sensíveis',
    noMetadata: 'Nenhum metadado encontrado neste arquivo.',
    fieldsTravel: 'campos viajam com este arquivo',
    fieldsRemoved: 'campos removidos',
    metadataRemoved: 'campos removidos',
    removeBtn: 'Remover metadados e baixar',
    removing: 'Removendo metadados...',
    downloadBtn: 'Baixar imagem limpa',
    downloadZip: 'Baixar imagens limpas (ZIP)',
    footerNote: 'Metadados viajam com o arquivo quando compartilhado. Removê-los deixa apenas os pixels.',
    file: 'arquivo',
    files: 'arquivos',
    metadataFields: 'campos',
    removedFrom: 'campos removidos de',
  },
  de: {
    dropTitle: 'Bilder hierher ziehen',
    dropHint: 'oder klicken zum Auswählen, oder einfügen (Strg+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Welche Metadaten stecken in Ihren Fotos?',
    addMore: 'Weitere hinzufügen',
    scanning: 'Wird gescannt...',
    clearAll: 'Alle entfernen',
    fieldsFound: 'Felder gefunden',
    sensitive: 'sensibel',
    noMetadata: 'Keine Metadaten in dieser Datei gefunden.',
    fieldsTravel: 'Felder werden mit der Datei weitergegeben',
    fieldsRemoved: 'Felder entfernt',
    metadataRemoved: 'Felder entfernt',
    removeBtn: 'Metadaten entfernen & herunterladen',
    removing: 'Metadaten werden entfernt...',
    downloadBtn: 'Bereinigte Datei herunterladen',
    downloadZip: 'Bereinigte Dateien herunterladen (ZIP)',
    footerNote: 'Metadaten werden beim Teilen mit der Datei übertragen. Nach dem Entfernen bleiben nur die Pixel.',
    file: 'Datei',
    files: 'Dateien',
    metadataFields: 'Felder',
    removedFrom: 'Felder entfernt aus',
  },
  'zh-Hant': {
    dropTitle: '拖放圖片到此處',
    dropHint: '或點選瀏覽，或貼上 (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: '查看照片中隱藏了哪些元資料',
    addMore: '繼續新增',
    scanning: '正在掃描...',
    clearAll: '全部清除',
    fieldsFound: '項元資料',
    sensitive: '項敏感',
    noMetadata: '此檔案未發現元資料。',
    fieldsTravel: '項資訊將隨檔案傳播',
    fieldsRemoved: '項已清除',
    metadataRemoved: '項元資料已清除',
    removeBtn: '一鍵清除元資料並下載',
    removing: '正在清除元資料...',
    downloadBtn: '下載清理後的圖片',
    downloadZip: '下載清理後的圖片 (ZIP)',
    footerNote: '元資料會嵌入在檔案中隨分享傳播。清除後檔案只保留像素內容。',
    file: '個檔案',
    files: '個檔案',
    metadataFields: '項元資料',
    removedFrom: '項元資料已從',
  },
  ko: {
    dropTitle: '이미지를 여기에 놓으세요',
    dropHint: '또는 클릭하여 선택, 또는 붙여넣기 (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: '사진에 숨겨진 메타데이터를 확인하세요',
    addMore: '더 추가',
    scanning: '스캔 중...',
    clearAll: '모두 지우기',
    fieldsFound: '항목 발견',
    sensitive: '항목 민감',
    noMetadata: '이 파일에서 메타데이터를 찾을 수 없어요.',
    fieldsTravel: '항목이 파일과 함께 전송돼요',
    fieldsRemoved: '항목 삭제됨',
    metadataRemoved: '항목 메타데이터 삭제됨',
    removeBtn: '메타데이터 삭제 후 다운로드',
    removing: '메타데이터 삭제 중...',
    downloadBtn: '정리된 이미지 다운로드',
    downloadZip: '정리된 이미지 다운로드 (ZIP)',
    footerNote: '메타데이터는 파일 공유 시 함께 전송돼요. 삭제하면 픽셀 데이터만 남아요.',
    file: '파일',
    files: '파일',
    metadataFields: '항목',
    removedFrom: '항목을 삭제함 (',
  },
  ru: {
    dropTitle: 'Перетащите изображения сюда',
    dropHint: 'или нажмите для выбора, или вставьте (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Узнайте, какие метаданные скрыты в ваших фото',
    addMore: 'Добавить ещё',
    scanning: 'Сканирование...',
    clearAll: 'Очистить всё',
    fieldsFound: 'полей найдено',
    sensitive: 'конфиденц.',
    noMetadata: 'Метаданные в этом файле не найдены.',
    fieldsTravel: 'полей передаются вместе с файлом',
    fieldsRemoved: 'полей удалено',
    metadataRemoved: 'полей удалено',
    removeBtn: 'Удалить метаданные и скачать',
    removing: 'Удаление метаданных...',
    downloadBtn: 'Скачать очищенный файл',
    downloadZip: 'Скачать очищенные файлы (ZIP)',
    footerNote: 'Метаданные передаются вместе с файлом при его отправке. После удаления остаются только пиксели.',
    file: 'файл',
    files: 'файлов',
    metadataFields: 'полей',
    removedFrom: 'полей удалено из',
  },
  ar: {
    dropTitle: 'اسحب الصور إلى هنا',
    dropHint: 'أو انقر للاستعراض، أو الصق (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'اكتشف البيانات الوصفية المخفية في صورك',
    addMore: 'إضافة المزيد',
    scanning: 'جارٍ الفحص...',
    clearAll: 'مسح الكل',
    fieldsFound: 'حقول موجودة',
    sensitive: 'حساسة',
    noMetadata: 'لم يتم العثور على بيانات وصفية في هذا الملف.',
    fieldsTravel: 'حقول تنتقل مع هذا الملف',
    fieldsRemoved: 'حقول تمت إزالتها',
    metadataRemoved: 'حقول تمت إزالتها',
    removeBtn: 'إزالة البيانات الوصفية وتنزيل',
    removing: 'جارٍ إزالة البيانات الوصفية...',
    downloadBtn: 'تنزيل الصورة النظيفة',
    downloadZip: 'تنزيل الصور النظيفة (ZIP)',
    footerNote: 'البيانات الوصفية تنتقل مع الملف عند المشاركة. إزالتها تُبقي فقط بيانات البكسل.',
    file: 'ملف',
    files: 'ملفات',
    metadataFields: 'حقول',
    removedFrom: 'حقول أُزيلت من',
  },
  it: {
    dropTitle: 'Trascina le immagini qui',
    dropHint: 'o clicca per sfogliare, o incolla (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Scopri quali metadati sono nascosti nelle tue foto',
    addMore: 'Aggiungi altri',
    scanning: 'Scansione in corso...',
    clearAll: 'Cancella tutto',
    fieldsFound: 'campi trovati',
    sensitive: 'sensibili',
    noMetadata: 'Nessun metadato trovato in questo file.',
    fieldsTravel: 'campi viaggiano con questo file',
    fieldsRemoved: 'campi rimossi',
    metadataRemoved: 'campi rimossi',
    removeBtn: 'Rimuovi metadati e scarica',
    removing: 'Rimozione metadati in corso...',
    downloadBtn: 'Scarica immagine pulita',
    downloadZip: 'Scarica immagini pulite (ZIP)',
    footerNote: 'I metadati viaggiano con il file quando lo condividi. Rimuoverli lascia solo i pixel.',
    file: 'file',
    files: 'file',
    metadataFields: 'campi',
    removedFrom: 'campi rimossi da',
  },
};

function t(lang: string, key: string): string {
  return UI[lang]?.[key] || UI.en[key] || key;
}

interface MetadataEntry {
  label: string;
  value: string;
  icon: string;
  level: 'high' | 'medium' | 'low';
}

interface ScannedFile {
  file: File;
  entries: MetadataEntry[];
  totalCount: number;
  highCount: number;
  hasGps: boolean;
  cleanedBlob: Blob | null;
  status: 'scanning' | 'scanned' | 'cleaning' | 'done' | 'error';
  error?: string;
}

const FIELD_CONFIG: Record<string, { label: string; icon: string; level: 'high' | 'medium' | 'low' }> = {
  GPSLatitude: { label: 'GPS Location', icon: '📍', level: 'high' },
  Make: { label: 'Camera Make', icon: '📱', level: 'high' },
  Model: { label: 'Camera Model', icon: '📱', level: 'high' },
  LensModel: { label: 'Lens', icon: '📱', level: 'high' },
  SerialNumber: { label: 'Serial Number', icon: '🔑', level: 'high' },
  Software: { label: 'Software', icon: '🖥', level: 'medium' },
  Artist: { label: 'Author', icon: '👤', level: 'medium' },
  Copyright: { label: 'Copyright', icon: '©', level: 'medium' },
  DateTimeOriginal: { label: 'Date Taken', icon: '📅', level: 'medium' },
  CreateDate: { label: 'Date Created', icon: '📅', level: 'medium' },
  ModifyDate: { label: 'Date Modified', icon: '📅', level: 'medium' },
  ExposureTime: { label: 'Exposure', icon: '📷', level: 'low' },
  FNumber: { label: 'Aperture', icon: '📷', level: 'low' },
  ISO: { label: 'ISO', icon: '📷', level: 'low' },
  FocalLength: { label: 'Focal Length', icon: '📷', level: 'low' },
  ImageWidth: { label: 'Width', icon: '📐', level: 'low' },
  ImageHeight: { label: 'Height', icon: '📐', level: 'low' },
  ColorSpace: { label: 'Color Space', icon: '🎨', level: 'low' },
  ImageDescription: { label: 'Description', icon: '📝', level: 'medium' },
};

const ORDERED_KEYS = [
  'GPSLatitude', 'Make', 'Model', 'LensModel', 'SerialNumber',
  'Software', 'Artist', 'Copyright', 'ImageDescription',
  'DateTimeOriginal', 'CreateDate', 'ModifyDate',
  'ExposureTime', 'FNumber', 'ISO', 'FocalLength',
  'ImageWidth', 'ImageHeight', 'ColorSpace',
];

function formatValue(key: string, value: unknown): string {
  if (value == null) return '';
  if (key === 'ExposureTime' && typeof value === 'number') return value < 1 ? `1/${Math.round(1 / value)}s` : `${value}s`;
  if (key === 'FNumber' && typeof value === 'number') return `f/${value}`;
  if (key === 'FocalLength' && typeof value === 'number') return `${value}mm`;
  if (value instanceof Date) return value.toLocaleString();
  return String(value);
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getOutputMime(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() ?? '';
  const map: Record<string, string> = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };
  return map[ext] || 'image/jpeg';
}

function getOutputExt(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() ?? '';
  if (['jpg', 'jpeg', 'png', 'webp'].includes(ext)) return ext;
  return 'jpg';
}

async function parseMetadata(file: File): Promise<MetadataEntry[]> {
  const exifr = await import('exifr');
  const data = await exifr.parse(file, { gps: true, tiff: true, exif: true, iptc: true, xmp: true });
  if (!data || Object.keys(data).length === 0) return [];

  const entries: MetadataEntry[] = [];

  if (data.latitude != null && data.longitude != null) {
    const cfg = FIELD_CONFIG.GPSLatitude;
    entries.push({ label: cfg.label, value: `${data.latitude.toFixed(6)}°, ${data.longitude.toFixed(6)}°`, icon: cfg.icon, level: cfg.level });
  }

  for (const key of ORDERED_KEYS) {
    if (key === 'GPSLatitude') continue;
    if (data[key] == null) continue;
    const cfg = FIELD_CONFIG[key];
    if (!cfg) continue;
    const formatted = formatValue(key, data[key]);
    if (formatted) entries.push({ label: cfg.label, value: formatted, icon: cfg.icon, level: cfg.level });
  }

  return entries;
}

async function cleanImage(file: File): Promise<Blob> {
  const needsHeicDecode = /\.(heic|heif)$/i.test(file.name);

  let imageBitmap: ImageBitmap;

  if (needsHeicDecode) {
    const libheif = await import('libheif-js');
    const decoder = new libheif.HeifDecoder();
    const buf = await file.arrayBuffer();
    const images = decoder.decode(new Uint8Array(buf));
    if (!images || images.length === 0) throw new Error('Failed to decode HEIC');
    const img = images[0];
    const w = img.get_width();
    const h = img.get_height();
    const canvas = new OffscreenCanvas(w, h);
    const ctx = canvas.getContext('2d')!;
    const imageData = ctx.createImageData(w, h);
    await new Promise<void>((resolve, reject) => {
      img.display(imageData, (result: any) => {
        if (result) resolve();
        else reject(new Error('HEIC display failed'));
      });
    });
    ctx.putImageData(imageData, 0, 0);
    imageBitmap = await createImageBitmap(canvas);
  } else {
    imageBitmap = await createImageBitmap(file);
  }

  const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(imageBitmap, 0, 0);
  imageBitmap.close();

  const mime = needsHeicDecode ? 'image/jpeg' : getOutputMime(file.name);
  const quality = (mime === 'image/jpeg' || mime === 'image/webp') ? 0.95 : undefined;
  const blob = await canvas.convertToBlob({ type: mime, quality });
  return blob;
}

const LEVEL_COLORS = {
  high: { dot: 'bg-red-400', text: 'text-red-300', stripped: 'text-red-400/80' },
  medium: { dot: 'bg-amber-400', text: 'text-amber-300', stripped: 'text-amber-400/80' },
  low: { dot: 'bg-slate-400', text: 'text-text-secondary', stripped: 'text-text-secondary/80' },
};

function FileCard({ scanned, expanded, onToggle, lang = 'en' }: { scanned: ScannedFile; expanded: boolean; onToggle: () => void; lang?: string }) {
  const isDone = scanned.status === 'done';

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-drop-bg/50 transition-colors"
      >
        <span className="text-lg">{isDone ? '✅' : scanned.hasGps ? '🔴' : scanned.highCount > 0 ? '🟡' : '📎'}</span>
        <span className="flex-1 min-w-0">
          <span className="block text-sm font-medium text-text-primary truncate">{scanned.file.name}</span>
          <span className="block text-xs text-text-secondary">
            {formatSize(scanned.file.size)}
            {isDone ? ` — ${t(lang, 'metadataRemoved')}` : ` — ${scanned.totalCount} ${t(lang, 'fieldsFound')}`}
            {!isDone && scanned.highCount > 0 && <span className="text-red-400 ml-1">({scanned.highCount} {t(lang, 'sensitive')})</span>}
          </span>
        </span>
        <svg className={`w-4 h-4 text-text-secondary transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </button>

      {expanded && scanned.entries.length > 0 && (
        <div className="border-t border-border divide-y divide-border/50">
          {scanned.entries.map((entry, i) => {
            const colors = LEVEL_COLORS[entry.level];
            return (
              <div key={i} className="flex items-center gap-3 px-4 py-2 text-sm">
                <span className="w-5 text-center">{entry.icon}</span>
                <span className={`flex-1 ${isDone ? colors.stripped : colors.text}`}>
                  {entry.label}
                </span>
                <span className={`font-mono text-xs ${isDone ? 'line-through text-text-secondary/70' : 'text-text-primary'}`}>
                  {isDone ? '████████' : entry.value}
                </span>
              </div>
            );
          })}
          <div className="px-4 py-2 text-xs text-text-secondary">
            {isDone
              ? `✓ ${scanned.totalCount} ${t(lang, 'fieldsRemoved')}`
              : `${scanned.totalCount} ${t(lang, 'fieldsTravel')}`
            }
          </div>
        </div>
      )}

      {expanded && scanned.entries.length === 0 && scanned.status === 'scanned' && (
        <div className="border-t border-border px-4 py-3 text-sm text-text-secondary">
          {t(lang, 'noMetadata')}
        </div>
      )}
    </div>
  );
}

export default function MetadataRemoverTool({ lang = 'en' }: { lang?: Locale }) {
  const [files, setFiles] = useState<ScannedFile[]>([]);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [cleaning, setCleaning] = useState(false);
  const [allDone, setAllDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const processFiles = useCallback(async (incoming: File[]) => {
    const newFiles: ScannedFile[] = incoming.map((f) => ({
      file: f, entries: [], totalCount: 0, highCount: 0, hasGps: false,
      cleanedBlob: null, status: 'scanning' as const,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
    setAllDone(false);

    const startIdx = files.length;

    for (let i = 0; i < newFiles.length; i++) {
      try {
        const entries = await parseMetadata(newFiles[i].file);
        const highCount = entries.filter((e) => e.level === 'high').length;
        const hasGps = entries.some((e) => e.label === 'GPS Location');

        setFiles((prev) => {
          const updated = [...prev];
          const idx = startIdx + i;
          if (updated[idx]) {
            updated[idx] = { ...updated[idx], entries, totalCount: entries.length, highCount, hasGps, status: 'scanned' };
          }
          return updated;
        });
      } catch {
        setFiles((prev) => {
          const updated = [...prev];
          const idx = startIdx + i;
          if (updated[idx]) {
            updated[idx] = { ...updated[idx], status: 'error', error: 'Could not read metadata' };
          }
          return updated;
        });
      }
    }

    setFiles((prev) => {
      let maxIdx = -1;
      let maxCount = -1;
      prev.forEach((f, idx) => {
        if (f.totalCount > maxCount) { maxCount = f.totalCount; maxIdx = idx; }
      });
      setExpandedIdx(maxCount > 0 ? maxIdx : null);
      return prev;
    });
  }, [files.length]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith('image/') || /\.(heic|heif|avif)$/i.test(f.name));
    if (droppedFiles.length > 0) processFiles(droppedFiles);
  }, [processFiles]);

  const handleClick = useCallback(() => inputRef.current?.click(), []);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    if (selected.length > 0) processFiles(selected);
    e.target.value = '';
  }, [processFiles]);

  const handlePaste = useCallback((e: ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    const pasted: File[] = [];
    for (const item of Array.from(items)) {
      if (item.kind === 'file' && item.type.startsWith('image/')) {
        const f = item.getAsFile();
        if (f) pasted.push(f);
      }
    }
    if (pasted.length > 0) {
      e.preventDefault();
      processFiles(pasted);
    }
  }, [processFiles]);

  useEffect(() => {
    const handler = (e: Event) => handlePaste(e as ClipboardEvent);
    document.addEventListener('paste', handler);
    return () => document.removeEventListener('paste', handler);
  }, [handlePaste]);

  const handleCleanAll = useCallback(async () => {
    setCleaning(true);
    const updatedFiles = [...files];

    for (let i = 0; i < updatedFiles.length; i++) {
      if (updatedFiles[i].status !== 'scanned') continue;
      updatedFiles[i] = { ...updatedFiles[i], status: 'cleaning' };
      setFiles([...updatedFiles]);

      try {
        const blob = await cleanImage(updatedFiles[i].file);
        updatedFiles[i] = { ...updatedFiles[i], cleanedBlob: blob, status: 'done' };
      } catch {
        updatedFiles[i] = { ...updatedFiles[i], status: 'error', error: 'Failed to clean' };
      }
      setFiles([...updatedFiles]);
    }

    setCleaning(false);
    setAllDone(true);
  }, [files]);

  const handleDownloadAll = useCallback(async () => {
    const cleaned = files.filter((f) => f.cleanedBlob);
    if (cleaned.length === 0) return;

    if (cleaned.length === 1) {
      const f = cleaned[0];
      const ext = getOutputExt(f.file.name);
      const baseName = f.file.name.replace(/\.[^.]+$/, '');
      const url = URL.createObjectURL(f.cleanedBlob!);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${baseName}_clean.${ext}`;
      a.click();
      URL.revokeObjectURL(url);
      return;
    }

    const { zipSync, strToU8 } = await import('fflate');
    const zipData: Record<string, Uint8Array> = {};
    for (const f of cleaned) {
      const ext = getOutputExt(f.file.name);
      const baseName = f.file.name.replace(/\.[^.]+$/, '');
      const buf = await f.cleanedBlob!.arrayBuffer();
      zipData[`${baseName}_clean.${ext}`] = new Uint8Array(buf);
    }
    const zipped = zipSync(zipData);
    const blob = new Blob([zipped], { type: 'application/zip' });
    const ts = new Date().toISOString().slice(0, 19).replace(/[T:]/g, '-');
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `picshift-cleaned-${ts}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  }, [files]);

  const handleClear = useCallback(() => {
    setFiles([]);
    setExpandedIdx(null);
    setAllDone(false);
  }, []);

  const hasFiles = files.length > 0;
  const scannedCount = files.filter((f) => f.status === 'scanned' || f.status === 'done').length;
  const totalMetadata = files.reduce((sum, f) => sum + f.totalCount, 0);
  const totalSensitive = files.reduce((sum, f) => sum + f.highCount, 0);
  const isScanning = files.some((f) => f.status === 'scanning');

  return (
    <div className="flex flex-col gap-4">
      {/* Summary bar */}
      {hasFiles && (
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="text-sm text-text-secondary">
            {isScanning ? (
              <span className="animate-pulse">{t(lang, 'scanning')}</span>
            ) : allDone ? (
              <span className="text-green-400 font-medium">✓ {totalMetadata} {t(lang, 'removedFrom')} {files.length} {files.length === 1 ? t(lang, 'file') : t(lang, 'files')}</span>
            ) : (
              <>
                <span className="text-text-primary font-medium">{files.length} {files.length === 1 ? t(lang, 'file') : t(lang, 'files')}</span>
                {' · '}
                <span>{totalMetadata} {t(lang, 'fieldsFound')}</span>
                {totalSensitive > 0 && <span className="text-red-400"> · {totalSensitive} {t(lang, 'sensitive')}</span>}
              </>
            )}
          </div>
          <button
            type="button"
            onClick={handleClear}
            className="text-xs text-text-secondary hover:text-text-primary transition-colors"
          >
            {t(lang, 'clearAll')}
          </button>
        </div>
      )}

      {/* Drop zone */}
      <div
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onClick={!hasFiles ? handleClick : undefined}
        className={`relative border-2 border-dashed rounded-xl transition-colors ${
          dragOver ? 'border-primary-400 bg-primary-500/5' : 'border-border hover:border-text-secondary'
        } ${!hasFiles ? 'cursor-pointer py-16' : 'py-4'}`}
      >
        <input ref={inputRef} type="file" accept="image/*,.heic,.heif,.avif" multiple className="hidden" onChange={handleInput} aria-label="Select images" />

        {!hasFiles ? (
          <div className="flex flex-col items-center gap-3 text-center px-4">
            <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
              </svg>
            </div>
            <div>
              <p className="text-text-primary font-medium">{t(lang, 'dropTitle')}</p>
              <p className="text-sm text-text-secondary mt-1">{t(lang, 'dropHint')}</p>
            </div>
            <p className="text-xs text-text-secondary mt-2">{t(lang, 'dropSubtext')}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={handleClick}>
            <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-sm text-text-secondary">{t(lang, 'addMore')}</span>
          </div>
        )}
      </div>

      {/* File list */}
      {hasFiles && (
        <div className="flex flex-col gap-2">
          {files.map((f, idx) => (
            <FileCard
              key={`${f.file.name}-${idx}`}
              scanned={f}
              expanded={expandedIdx === idx}
              onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              lang={lang}
            />
          ))}
        </div>
      )}

      {/* Action buttons */}
      {hasFiles && !allDone && scannedCount > 0 && !isScanning && (
        <button
          type="button"
          onClick={handleCleanAll}
          disabled={cleaning}
          className="w-full py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
        >
          {cleaning ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              {t(lang, 'removing')}
            </>
          ) : (
            <>🛡 {t(lang, 'removeBtn')}</>
          )}
        </button>
      )}

      {allDone && (
        <button
          type="button"
          onClick={handleDownloadAll}
          className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
        >
          ⬇ {files.length === 1 ? t(lang, 'downloadBtn') : t(lang, 'downloadZip')}
        </button>
      )}

      {/* Footer note */}
      {hasFiles && !allDone && !isScanning && (
        <p className="text-xs text-text-secondary text-center">
          {t(lang, 'footerNote')}
        </p>
      )}
    </div>
  );
}
