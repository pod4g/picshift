import type { ToolPageConfig } from '../types';
import type { Locale, ToolTranslation } from './config';
import { getPageTranslations } from './translations';
import { getLocalizedToolFaqs } from './toolFaqOverrides';

interface ConverterContentTemplate {
  h1: (input: string, output: string) => string;
  intro: (input: string, output: string) => string;
  howToSteps: (input: string, output: string) => [string, string, string];
  faqQualityQ: string;
  faqQualityA: string;
  faqPrivacyQ: string;
  faqPrivacyA: string;
}

const CONVERTER_CONTENT_MAP: Record<Locale, ConverterContentTemplate> = {
  en: {
    h1: (input, output) => `Convert ${input} to ${output}`,
    intro: (input, output) =>
      `Convert ${input} images to ${output} directly in your browser. Processing stays local and no upload is required.`,
    howToSteps: (input, output) => [
      `Drag and drop your ${input} files into the box above, or click to browse.`,
      `Files are converted to ${output} instantly in your browser.`,
      'Click Download to save files, or Download All for batch output.',
    ],
    faqQualityQ: 'Will quality change after conversion?',
    faqQualityA:
      'It depends on the target format and quality settings. You can adjust quality to balance file size and visual quality.',
    faqPrivacyQ: 'Are my files uploaded to a server?',
    faqPrivacyA:
      'No. Conversion runs locally in your browser, and your files are not uploaded for processing.',
  },
  zh: {
    h1: (input, output) => `将 ${input} 转换为 ${output}`,
    intro: (input, output) =>
      `在浏览器中将 ${input} 转换为 ${output}。所有处理都在本地完成，无需上传文件。`,
    howToSteps: (input, output) => [
      `将 ${input} 文件拖放到上方区域，或点击选择文件。`,
      `文件会在浏览器中即时转换为 ${output}。`,
      '点击“下载”保存文件，或点击“全部下载”批量导出。',
    ],
    faqQualityQ: '转换后画质会变化吗？',
    faqQualityA:
      '这取决于目标格式和质量设置。你可以调整质量参数，在文件体积和视觉质量之间取得平衡。',
    faqPrivacyQ: '文件会被上传到服务器吗？',
    faqPrivacyA: '不会。转换在浏览器本地执行，文件不会上传到服务器进行处理。',
  },
  'zh-Hant': {
    h1: (input, output) => `將 ${input} 轉換為 ${output}`,
    intro: (input, output) =>
      `在瀏覽器中將 ${input} 轉換為 ${output}。所有處理都在本機完成，無需上傳檔案。`,
    howToSteps: (input, output) => [
      `將 ${input} 檔案拖放到上方區域，或點擊選擇檔案。`,
      `檔案會在瀏覽器中即時轉換為 ${output}。`,
      '點擊「下載」儲存檔案，或點擊「全部下載」批次匯出。',
    ],
    faqQualityQ: '轉換後畫質會變化嗎？',
    faqQualityA:
      '這取決於目標格式與品質設定。你可以調整品質參數，在檔案大小與視覺品質之間取得平衡。',
    faqPrivacyQ: '檔案會被上傳到伺服器嗎？',
    faqPrivacyA: '不會。轉換在瀏覽器本機執行，檔案不會上傳到伺服器進行處理。',
  },
  es: {
    h1: (input, output) => `Convertir ${input} a ${output}`,
    intro: (input, output) =>
      `Convierte imágenes ${input} a ${output} en el navegador. El procesamiento es local y no requiere subida.`,
    howToSteps: (input, output) => [
      `Arrastra tus archivos ${input} al área superior o haz clic para seleccionarlos.`,
      `Los archivos se convierten a ${output} al instante en tu navegador.`,
      'Haz clic en Descargar para guardar archivos, o en Descargar todo para lotes.',
    ],
    faqQualityQ: '¿Cambia la calidad después de convertir?',
    faqQualityA:
      'Depende del formato de salida y de la calidad seleccionada. Puedes ajustar la calidad para equilibrar tamaño y nitidez.',
    faqPrivacyQ: '¿Se suben mis archivos al servidor?',
    faqPrivacyA:
      'No. La conversión se ejecuta localmente en tu navegador y los archivos no se suben para procesarlos.',
  },
  fr: {
    h1: (input, output) => `Convertir ${input} en ${output}`,
    intro: (input, output) =>
      `Convertissez des images ${input} en ${output} directement dans le navigateur. Le traitement reste local, sans téléversement.`,
    howToSteps: (input, output) => [
      `Glissez vos fichiers ${input} dans la zone ci-dessus, ou cliquez pour les sélectionner.`,
      `Les fichiers sont convertis en ${output} instantanément dans votre navigateur.`,
      'Cliquez sur Télécharger pour enregistrer les fichiers, ou Télécharger tout pour un lot.',
    ],
    faqQualityQ: 'La qualité change-t-elle après conversion ?',
    faqQualityA:
      'Cela dépend du format cible et du niveau de qualité choisi. Vous pouvez ajuster la qualité selon votre besoin.',
    faqPrivacyQ: 'Mes fichiers sont-ils envoyés sur un serveur ?',
    faqPrivacyA:
      'Non. La conversion s’exécute localement dans votre navigateur, sans envoi de fichiers pour traitement.',
  },
  de: {
    h1: (input, output) => `${input} in ${output} konvertieren`,
    intro: (input, output) =>
      `Konvertieren Sie ${input}-Bilder direkt im Browser zu ${output}. Die Verarbeitung läuft lokal ohne Upload.`,
    howToSteps: (input, output) => [
      `${input}-Dateien oben per Drag-and-drop ablegen oder per Klick auswählen.`,
      `Die Dateien werden im Browser sofort zu ${output} konvertiert.`,
      'Mit Download speichern oder mit Download All mehrere Dateien gesammelt exportieren.',
    ],
    faqQualityQ: 'Ändert sich die Bildqualität nach der Konvertierung?',
    faqQualityA:
      'Das hängt vom Zielformat und den Qualitätseinstellungen ab. Sie können die Qualität nach Bedarf anpassen.',
    faqPrivacyQ: 'Werden meine Dateien auf einen Server hochgeladen?',
    faqPrivacyA:
      'Nein. Die Konvertierung läuft lokal im Browser, und Dateien werden nicht zum Verarbeiten hochgeladen.',
  },
  ja: {
    h1: (input, output) => `${input}を${output}に変換`,
    intro: (input, output) =>
      `ブラウザで ${input} を ${output} に変換します。処理はローカルで行われ、アップロードは不要です。`,
    howToSteps: (input, output) => [
      `上のエリアに ${input} ファイルをドラッグ&ドロップするか、クリックして選択します。`,
      `ファイルはブラウザ内で即座に ${output} に変換されます。`,
      '「ダウンロード」で保存、または「一括ダウンロード」でまとめて出力できます。',
    ],
    faqQualityQ: '変換後に画質は変わりますか？',
    faqQualityA:
      '出力形式と品質設定によって変わります。用途に合わせて品質を調整し、容量と見た目のバランスを取れます。',
    faqPrivacyQ: 'ファイルはサーバーにアップロードされますか？',
    faqPrivacyA:
      'いいえ。変換はブラウザ内でローカル実行され、処理のためにファイルがアップロードされることはありません。',
  },
  ko: {
    h1: (input, output) => `${input}를 ${output}로 변환`,
    intro: (input, output) =>
      `브라우저에서 ${input} 이미지를 ${output}(으)로 변환하세요. 처리는 로컬에서 실행되며 업로드가 필요 없습니다.`,
    howToSteps: (input, output) => [
      `위 영역에 ${input} 파일을 드래그해 놓거나 클릭해서 선택하세요.`,
      `파일이 브라우저에서 즉시 ${output}(으)로 변환됩니다.`,
      '다운로드를 눌러 저장하거나, 전체 다운로드로 일괄 내보내기 하세요.',
    ],
    faqQualityQ: '변환 후 화질이 바뀌나요?',
    faqQualityA:
      '출력 포맷과 품질 설정에 따라 달라집니다. 품질 값을 조정해 용량과 화질의 균형을 맞출 수 있습니다.',
    faqPrivacyQ: '파일이 서버로 업로드되나요?',
    faqPrivacyA:
      '아니요. 변환은 브라우저 로컬에서 실행되며, 처리를 위해 파일이 서버로 업로드되지 않습니다.',
  },
  pt: {
    h1: (input, output) => `Converter ${input} para ${output}`,
    intro: (input, output) =>
      `Converta imagens ${input} para ${output} no navegador. O processamento é local e não exige upload.`,
    howToSteps: (input, output) => [
      `Arraste seus arquivos ${input} para a área acima ou clique para selecionar.`,
      `Os arquivos são convertidos para ${output} instantaneamente no navegador.`,
      'Clique em Baixar para salvar os arquivos, ou em Baixar tudo para lote.',
    ],
    faqQualityQ: 'A qualidade muda após a conversão?',
    faqQualityA:
      'Depende do formato de saída e da qualidade escolhida. Você pode ajustar a qualidade para equilibrar tamanho e nitidez.',
    faqPrivacyQ: 'Meus arquivos são enviados para o servidor?',
    faqPrivacyA:
      'Não. A conversão roda localmente no navegador e os arquivos não são enviados para processamento.',
  },
  ru: {
    h1: (input, output) => `Конвертировать ${input} в ${output}`,
    intro: (input, output) =>
      `Конвертируйте изображения ${input} в ${output} прямо в браузере. Обработка выполняется локально, без загрузки файлов.`,
    howToSteps: (input, output) => [
      `Перетащите файлы ${input} в область выше или нажмите для выбора.`,
      `Файлы мгновенно конвертируются в ${output} прямо в браузере.`,
      'Нажмите «Скачать» для сохранения файлов или «Скачать все» для пакетной выгрузки.',
    ],
    faqQualityQ: 'Изменится ли качество после конвертации?',
    faqQualityA:
      'Это зависит от выходного формата и настроек качества. Параметры можно настроить под нужный баланс размера и качества.',
    faqPrivacyQ: 'Файлы загружаются на сервер?',
    faqPrivacyA:
      'Нет. Конвертация выполняется локально в браузере, файлы не отправляются на сервер для обработки.',
  },
  ar: {
    h1: (input, output) => `تحويل ${input} إلى ${output}`,
    intro: (input, output) =>
      `حوّل صور ${input} إلى ${output} داخل المتصفح. المعالجة محلية ولا تتطلب رفع الملفات.`,
    howToSteps: (input, output) => [
      `اسحب ملفات ${input} إلى المنطقة بالأعلى أو انقر لاختيار الملفات.`,
      `يتم تحويل الملفات إلى ${output} فورًا داخل المتصفح.`,
      'اضغط تنزيل لحفظ الملفات، أو تنزيل الكل للإخراج الدفعي.',
    ],
    faqQualityQ: 'هل تتغير الجودة بعد التحويل؟',
    faqQualityA:
      'يعتمد ذلك على صيغة الإخراج وإعدادات الجودة. يمكنك ضبط الجودة لتحقيق التوازن بين الحجم والجودة المرئية.',
    faqPrivacyQ: 'هل يتم رفع ملفاتي إلى الخادم؟',
    faqPrivacyA:
      'لا. التحويل يتم محليًا داخل المتصفح، ولا يتم رفع الملفات إلى الخادم للمعالجة.',
  },
  it: {
    h1: (input, output) => `Convertire ${input} in ${output}`,
    intro: (input, output) =>
      `Converti immagini ${input} in ${output} direttamente nel browser. L’elaborazione è locale e non richiede upload.`,
    howToSteps: (input, output) => [
      `Trascina i file ${input} nell’area sopra oppure fai clic per selezionarli.`,
      `I file vengono convertiti in ${output} istantaneamente nel browser.`,
      'Fai clic su Scarica per salvare i file oppure su Scarica tutto per lotti.',
    ],
    faqQualityQ: 'La qualità cambia dopo la conversione?',
    faqQualityA:
      'Dipende dal formato di uscita e dalle impostazioni di qualità. Puoi regolare la qualità in base alle tue esigenze.',
    faqPrivacyQ: 'I file vengono caricati su un server?',
    faqPrivacyA:
      'No. La conversione avviene localmente nel browser e i file non vengono caricati per l’elaborazione.',
  },
};

function getFormatPair(tool: ToolPageConfig): { input: string; output: string } {
  const input = (tool.defaultInputFormat || 'image').toUpperCase();
  const output = (tool.defaultOutputFormat || 'image').toUpperCase();
  return { input, output };
}

export function getLocalizedToolContent(lang: Locale, tool: ToolPageConfig): Pick<ToolTranslation, 'h1' | 'introText' | 'howToSteps' | 'faqs'> {
  const template = CONVERTER_CONTENT_MAP[lang] ?? CONVERTER_CONTENT_MAP.en;

  if (lang !== 'en') {
    const translatedTool = getPageTranslations(lang).tools[tool.slug];
    if (translatedTool) {
      return {
        h1: translatedTool.h1,
        introText: translatedTool.introText,
        howToSteps: translatedTool.howToSteps,
        faqs: getLocalizedToolFaqs(lang, tool.slug, translatedTool.faqs),
      };
    }
  }

  if (tool.slug === 'image-resizer' || tool.slug === 'image-compressor') {
    return {
      h1: tool.h1,
      introText: tool.introText,
      howToSteps: tool.howToSteps,
      faqs: getLocalizedToolFaqs(lang, tool.slug, tool.faqs),
    };
  }

  const { input, output } = getFormatPair(tool);
  return {
    h1: template.h1(input, output),
    introText: template.intro(input, output),
    howToSteps: template.howToSteps(input, output),
    faqs: getLocalizedToolFaqs(lang, tool.slug, [
      { q: template.faqQualityQ, a: template.faqQualityA },
      { q: template.faqPrivacyQ, a: template.faqPrivacyA },
    ]),
  };
}
