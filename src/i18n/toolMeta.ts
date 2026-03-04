import type { Locale } from './config';
import type { ToolPageConfig } from '../types';

interface MetaTemplate {
  converterTitle: (input: string, output: string) => string;
  converterDescription: (input: string, output: string) => string;
  resizerTitle: string;
  resizerDescription: string;
  compressorTitle: string;
  compressorDescription: string;
}

const META_TEMPLATE_MAP: Record<Locale, MetaTemplate> = {
  en: {
    converterTitle: (input, output) => `${input} to ${output} Converter | PicShift`,
    converterDescription: (input, output) =>
      `Convert ${input} images to ${output} in your browser. Local processing with no upload.`,
    resizerTitle: 'Image Resizer - Resize Images Online | PicShift',
    resizerDescription:
      'Resize images in your browser with presets or custom dimensions. Local processing with no upload.',
    compressorTitle: 'Image Compressor - Reduce Image Size Online | PicShift',
    compressorDescription:
      'Compress images in your browser and reduce file size while keeping visual quality. Local processing with no upload.',
  },
  zh: {
    converterTitle: (input, output) => `${input} 转 ${output} - 免费、保护隐私、无需上传 | PicShift`,
    converterDescription: (input, output) =>
      `在浏览器中将 ${input} 转换为 ${output}。本地处理，无需上传。`,
    resizerTitle: '图片尺寸调整工具 - 在线修改图片尺寸 | PicShift',
    resizerDescription: '在浏览器中按预设或自定义尺寸调整图片大小。全程本地处理，无需上传。',
    compressorTitle: '图片压缩工具 - 在线压缩图片 | PicShift',
    compressorDescription: '在浏览器中压缩图片并减小文件体积，同时保持可见画质。全程本地处理，无需上传。',
  },
  'zh-Hant': {
    converterTitle: (input, output) => `${input} 轉 ${output} - 免費、保護隱私、無需上傳 | PicShift`,
    converterDescription: (input, output) =>
      `在瀏覽器中將 ${input} 轉換為 ${output}。本機處理，無需上傳。`,
    resizerTitle: '圖片尺寸調整工具 - 線上修改圖片尺寸 | PicShift',
    resizerDescription: '在瀏覽器中使用預設或自訂尺寸調整圖片大小。全程本機處理，無需上傳。',
    compressorTitle: '圖片壓縮工具 - 線上壓縮圖片 | PicShift',
    compressorDescription: '在瀏覽器中壓縮圖片並減少檔案大小，同時保留可見畫質。全程本機處理，無需上傳。',
  },
  es: {
    converterTitle: (input, output) => `Convertidor de ${input} a ${output} | PicShift`,
    converterDescription: (input, output) =>
      `Convierte imágenes ${input} a ${output} en tu navegador. Procesamiento local sin subidas.`,
    resizerTitle: 'Redimensionador de Imágenes Online | PicShift',
    resizerDescription:
      'Redimensiona imágenes en tu navegador con presets o tamaño personalizado. Procesamiento local sin subidas.',
    compressorTitle: 'Compresor de Imágenes Online | PicShift',
    compressorDescription:
      'Comprime imágenes en tu navegador y reduce el tamaño de archivo manteniendo calidad visual. Procesamiento local sin subidas.',
  },
  fr: {
    converterTitle: (input, output) => `Convertisseur ${input} vers ${output} | PicShift`,
    converterDescription: (input, output) =>
      `Convertissez des images ${input} en ${output} dans votre navigateur. Traitement local sans téléversement.`,
    resizerTitle: "Redimensionneur d'images en ligne | PicShift",
    resizerDescription:
      "Redimensionnez des images dans votre navigateur avec des préréglages ou des dimensions personnalisées. Traitement local sans téléversement.",
    compressorTitle: "Compresseur d'images en ligne | PicShift",
    compressorDescription:
      "Compressez des images dans votre navigateur et réduisez la taille des fichiers tout en conservant la qualité visuelle. Traitement local sans téléversement.",
  },
  de: {
    converterTitle: (input, output) => `${input} zu ${output} Konverter | PicShift`,
    converterDescription: (input, output) =>
      `Konvertieren Sie ${input}-Bilder zu ${output} direkt im Browser. Lokale Verarbeitung ohne Upload.`,
    resizerTitle: 'Bildgrößen-Tool Online | PicShift',
    resizerDescription:
      'Ändern Sie Bildgrößen im Browser mit Presets oder benutzerdefinierten Maßen. Lokale Verarbeitung ohne Upload.',
    compressorTitle: 'Bildkompressor Online | PicShift',
    compressorDescription:
      'Komprimieren Sie Bilder im Browser und reduzieren Sie die Dateigröße bei guter sichtbarer Qualität. Lokale Verarbeitung ohne Upload.',
  },
  ja: {
    converterTitle: (input, output) => `${input}を${output}に変換 - 無料・プライバシー保護・アップロード不要 | PicShift`,
    converterDescription: (input, output) =>
      `ブラウザ上で ${input} を ${output} に変換。ローカル処理でアップロード不要。`,
    resizerTitle: '画像リサイズツール - オンラインでサイズ変更 | PicShift',
    resizerDescription: 'ブラウザでプリセットまたはカスタムサイズを使って画像をリサイズ。ローカル処理でアップロード不要。',
    compressorTitle: '画像圧縮ツール - オンラインで容量削減 | PicShift',
    compressorDescription:
      'ブラウザで画像を圧縮してファイルサイズを削減。見た目の品質を維持しながらローカル処理で実行。',
  },
  ko: {
    converterTitle: (input, output) => `${input}를 ${output}로 변환 - 무료, 개인정보 보호, 업로드 불필요 | PicShift`,
    converterDescription: (input, output) =>
      `브라우저에서 ${input} 이미지를 ${output}(으)로 변환하세요. 업로드 없이 로컬 처리됩니다.`,
    resizerTitle: '이미지 크기 조절 도구 | PicShift',
    resizerDescription:
      '브라우저에서 프리셋 또는 사용자 지정 크기로 이미지 크기를 조절하세요. 업로드 없이 로컬 처리됩니다.',
    compressorTitle: '이미지 압축 도구 | PicShift',
    compressorDescription:
      '브라우저에서 이미지를 압축해 파일 크기를 줄이세요. 시각적 품질을 유지하면서 로컬에서 처리됩니다.',
  },
  pt: {
    converterTitle: (input, output) => `Conversor de ${input} para ${output} | PicShift`,
    converterDescription: (input, output) =>
      `Converta imagens ${input} para ${output} no navegador. Processamento local sem upload.`,
    resizerTitle: 'Redimensionar Imagens Online | PicShift',
    resizerDescription:
      'Redimensione imagens no navegador com presets ou dimensões personalizadas. Processamento local sem upload.',
    compressorTitle: 'Compressor de Imagens Online | PicShift',
    compressorDescription:
      'Comprima imagens no navegador e reduza o tamanho dos arquivos mantendo boa qualidade visual. Processamento local sem upload.',
  },
  ru: {
    converterTitle: (input, output) => `Конвертер ${input} в ${output} | PicShift`,
    converterDescription: (input, output) =>
      `Конвертируйте изображения ${input} в ${output} прямо в браузере. Локальная обработка без загрузки на сервер.`,
    resizerTitle: 'Изменение размера изображений онлайн | PicShift',
    resizerDescription:
      'Меняйте размер изображений в браузере с пресетами или точными параметрами. Локальная обработка без загрузки на сервер.',
    compressorTitle: 'Сжатие изображений онлайн | PicShift',
    compressorDescription:
      'Сжимайте изображения в браузере и уменьшайте размер файлов при сохранении визуального качества. Локальная обработка без загрузки на сервер.',
  },
  ar: {
    converterTitle: (input, output) => `تحويل ${input} إلى ${output} - مجاني، يحافظ على الخصوصية، بدون رفع | PicShift`,
    converterDescription: (input, output) =>
      `حوّل صور ${input} إلى ${output} داخل المتصفح. معالجة محلية بدون رفع ملفات.`,
    resizerTitle: 'أداة تغيير حجم الصور أونلاين | PicShift',
    resizerDescription:
      'غيّر حجم الصور في المتصفح باستخدام إعدادات مسبقة أو أبعاد مخصصة. معالجة محلية بدون رفع ملفات.',
    compressorTitle: 'أداة ضغط الصور أونلاين | PicShift',
    compressorDescription:
      'اضغط الصور داخل المتصفح لتقليل حجم الملفات مع الحفاظ على الجودة المرئية. معالجة محلية بدون رفع ملفات.',
  },
  it: {
    converterTitle: (input, output) => `Convertitore da ${input} a ${output} | PicShift`,
    converterDescription: (input, output) =>
      `Converti immagini ${input} in ${output} nel browser. Elaborazione locale senza upload.`,
    resizerTitle: 'Ridimensiona Immagini Online | PicShift',
    resizerDescription:
      'Ridimensiona immagini nel browser con preset o dimensioni personalizzate. Elaborazione locale senza upload.',
    compressorTitle: 'Compressore Immagini Online | PicShift',
    compressorDescription:
      'Comprimi immagini nel browser e riduci la dimensione dei file mantenendo qualità visiva. Elaborazione locale senza upload.',
  },
};

export function getLocalizedToolMeta(lang: Locale, tool: ToolPageConfig): { title: string; description: string } {
  const template = META_TEMPLATE_MAP[lang] ?? META_TEMPLATE_MAP.en;
  const isCompressor = tool.slug === 'image-compressor';
  const isResizer = tool.slug === 'image-resizer';

  if (isCompressor) {
    return {
      title: template.compressorTitle,
      description: template.compressorDescription,
    };
  }

  if (isResizer) {
    return {
      title: template.resizerTitle,
      description: template.resizerDescription,
    };
  }

  const inputFormat = (tool.defaultInputFormat || 'image').toUpperCase();
  const outputFormat = (tool.defaultOutputFormat || 'image').toUpperCase();
  return {
    title: template.converterTitle(inputFormat, outputFormat),
    description: template.converterDescription(inputFormat, outputFormat),
  };
}
