import type { ConvertFile, InputFormat } from '../types';
import type { Locale } from '../i18n/config';

type OutputFormatKey = 'jpg' | 'png' | 'webp' | 'avif' | 'unknown';

interface SizeIncreaseContext {
  lang: Locale;
  file: ConvertFile;
  quality: number;
}

const COMPRESSED_INPUTS: Set<InputFormat> = new Set(['jpg', 'jpeg', 'webp', 'avif', 'heic', 'heif']);
const LOSSY_OR_HIGH_COMPRESSION_INPUTS: Set<InputFormat> = new Set(['jpg', 'jpeg', 'webp', 'avif', 'heic', 'heif']);

function toOutputFormat(outputExt: string | null): OutputFormatKey {
  if (!outputExt) return 'unknown';
  const ext = outputExt.toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') return 'jpg';
  if (ext === '.png') return 'png';
  if (ext === '.webp') return 'webp';
  if (ext === '.avif') return 'avif';
  return 'unknown';
}

function toFormatLabel(format: string): string {
  if (format === 'jpeg') return 'JPG';
  return format.toUpperCase();
}

function getPixelCount(file: ConvertFile): number | null {
  const width = file.originalWidth ?? file.outputWidth;
  const height = file.originalHeight ?? file.outputHeight;
  if (!width || !height) return null;
  return width * height;
}

function getBytesPerPixel(file: ConvertFile): number | null {
  const pixels = getPixelCount(file);
  if (!pixels || pixels <= 0) return null;
  return file.size / pixels;
}

function buildChineseTip(file: ConvertFile, quality: number, locale: Locale): string {
  const outputFormat = toOutputFormat(file.outputExt);
  const inputFormat = file.inputFormat;
  const inputLabel = toFormatLabel(inputFormat);
  const outputLabel = toFormatLabel(outputFormat);
  const increaseRatio = file.size > 0 ? file.outputSize / file.size - 1 : 0;
  const pixels = getPixelCount(file);
  const bytesPerPixel = getBytesPerPixel(file);
  const isSmallImage = Boolean(pixels && pixels < 1_000_000);
  const isDeepCompressed = COMPRESSED_INPUTS.has(inputFormat) && ((bytesPerPixel !== null && bytesPerPixel < 0.22) || increaseRatio > 0.35);

  let hasFormatMechanism = false;
  let hasEmbeddedCompressionReason = false;
  const reasons: string[] = [];

  if (outputFormat === 'png' && LOSSY_OR_HIGH_COMPRESSION_INPUTS.has(inputFormat)) {
    hasFormatMechanism = true;
    if (isDeepCompressed) {
      const bppText = bytesPerPixel !== null ? `（当前约 ${bytesPerPixel.toFixed(2)} B/像素）` : '';
      reasons.push(`${inputLabel} 属于有损或高压缩格式，转为无损 ${outputLabel} 时会保留完整像素数据，这张图已深度压缩${bppText}，体积增大更明显。`);
      hasEmbeddedCompressionReason = true;
    } else {
      reasons.push(`${inputLabel} 属于有损或高压缩格式，转为无损 ${outputLabel} 时会保留完整像素数据，体积通常会增大。`);
    }
  } else if (outputFormat === 'webp' && ['heic', 'heif', 'avif'].includes(inputFormat)) {
    hasFormatMechanism = true;
    if (isDeepCompressed) {
      const bppText = bytesPerPixel !== null ? `（当前约 ${bytesPerPixel.toFixed(2)} B/像素）` : '';
      reasons.push(`源格式本身压缩效率已较高，这张图已深度压缩${bppText}，转码到 ${outputLabel} 不一定更小。`);
      hasEmbeddedCompressionReason = true;
    } else {
      reasons.push(`源格式本身压缩效率已较高，转码到 ${outputLabel} 不一定更小。`);
    }
  } else if (outputFormat === 'jpg' && ['heic', 'heif', 'avif', 'webp'].includes(inputFormat)) {
    hasFormatMechanism = true;
    if (isDeepCompressed) {
      const bppText = bytesPerPixel !== null ? `（当前约 ${bytesPerPixel.toFixed(2)} B/像素）` : '';
      reasons.push(`通常 ${inputLabel} 更省体积，但这张图已深度压缩${bppText}，${outputLabel} 输出反而更大。`);
      hasEmbeddedCompressionReason = true;
    } else {
      reasons.push(`通常 ${inputLabel} 更省体积，但在当前图片与参数下，${outputLabel} 输出反而更大。`);
    }
  } else if (outputFormat === 'avif' && isSmallImage) {
    hasFormatMechanism = true;
    reasons.push(`当前图片分辨率较小，${outputLabel} 编码开销占比更高，小图场景下可能出现体积增加。`);
  }

  if (isDeepCompressed && !hasEmbeddedCompressionReason) {
    const bppText = bytesPerPixel !== null ? `（当前约 ${bytesPerPixel.toFixed(2)} B/像素）` : '';
    reasons.push(`源文件状态：输入 ${inputLabel} 已经压缩较深 ${bppText}，重新编码可压缩空间有限，容易出现体积回弹。`);
  }

  if (reasons.length === 0) {
    reasons.push('本次增大主要由重编码开销和内容复杂度共同导致，属于可预期现象。');
  }

  const header = locale === 'zh-Hant'
    ? `本次 ${inputLabel} -> ${outputLabel} 體積增加，可能原因如下：`
    : `本次 ${inputLabel} -> ${outputLabel} 体积增加，可能原因如下：`;
  const reasonLines = reasons.length > 1
    ? reasons.map((reason, index) => `${index + 1}. ${reason}`)
    : reasons;

  let suggestion = '';
  if (outputFormat === 'avif' && increaseRatio > 0) {
    suggestion = locale === 'zh-Hant'
      ? `建議：先把品質從 ${quality}% 下調到 70%-82%，若仍偏大可改試 WebP 或 JPG。`
      : `建议：先把质量从 ${quality}% 下调到 70%-82%，若仍偏大可改试 WebP 或 JPG。`;
  } else if (quality >= 85 && outputFormat !== 'png') {
    suggestion = locale === 'zh-Hant'
      ? `建議：可把品質從 ${quality}% 下調到 75%-82%，通常可明顯降低體積。`
      : `建议：可把质量从 ${quality}% 下调到 75%-82%，通常可明显降低体积。`;
  } else if (!hasFormatMechanism && outputFormat !== 'avif') {
    suggestion = locale === 'zh-Hant'
      ? '建議：若優先檔案體積，可嘗試輸出 AVIF 後再比較結果。'
      : '建议：若优先文件体积，可尝试输出 AVIF 后再比较结果。';
  }

  return [header, ...reasonLines, suggestion].filter(Boolean).join('\n');
}

type LocalizedTipBuilder = {
  header: (inputLabel: string, outputLabel: string) => string;
  reasonPngDeep: (inputLabel: string, outputLabel: string, bppText: string) => string;
  reasonPng: (inputLabel: string, outputLabel: string) => string;
  reasonWebpDeep: (outputLabel: string, bppText: string) => string;
  reasonWebp: (outputLabel: string) => string;
  reasonJpgDeep: (inputLabel: string, outputLabel: string, bppText: string) => string;
  reasonJpg: (inputLabel: string, outputLabel: string) => string;
  reasonAvifSmall: (outputLabel: string) => string;
  reasonDeepCompressed: (inputLabel: string, bppText: string) => string;
  reasonFallback: () => string;
  suggestionAvif: (quality: number) => string;
  suggestionQuality: (quality: number) => string;
  suggestionTryAvif: () => string;
};

const TIP_BUILDERS: Record<Exclude<Locale, 'zh' | 'zh-Hant'>, LocalizedTipBuilder> = {
  en: {
    header: (inputLabel, outputLabel) => `This ${inputLabel} -> ${outputLabel} result is larger. Likely reasons:`,
    reasonPngDeep: (inputLabel, outputLabel, bppText) => `${inputLabel} is lossy or highly compressed. Converting to lossless ${outputLabel} keeps full pixel data, and this image is already heavily compressed${bppText}, so the increase is more obvious.`,
    reasonPng: (inputLabel, outputLabel) => `${inputLabel} is lossy or highly compressed. Converting to lossless ${outputLabel} keeps full pixel data, so size usually increases.`,
    reasonWebpDeep: (outputLabel, bppText) => `The source format is already very efficient, and this image is heavily compressed${bppText}, so re-encoding to ${outputLabel} is not always smaller.`,
    reasonWebp: (outputLabel) => `The source format is already very efficient, so re-encoding to ${outputLabel} is not always smaller.`,
    reasonJpgDeep: (inputLabel, outputLabel, bppText) => `Usually ${inputLabel} is smaller, but this image is already heavily compressed${bppText}, so ${outputLabel} can end up larger.`,
    reasonJpg: (inputLabel, outputLabel) => `Usually ${inputLabel} is smaller, but with this image and settings, ${outputLabel} can end up larger.`,
    reasonAvifSmall: (outputLabel) => `This image is relatively small, so ${outputLabel} encoding overhead takes a larger share and file size may increase.`,
    reasonDeepCompressed: (inputLabel, bppText) => `Source condition: input ${inputLabel} is already heavily compressed${bppText}. Re-encoding has limited room left and can cause size rebound.`,
    reasonFallback: () => 'This increase mainly comes from re-encoding overhead and image complexity, which is expected.',
    suggestionAvif: (quality) => `Suggestion: lower quality from ${quality}% to 70%-82%. If it is still large, try WebP or JPG.`,
    suggestionQuality: (quality) => `Suggestion: lower quality from ${quality}% to 75%-82% for a meaningful size drop.`,
    suggestionTryAvif: () => 'Suggestion: if file size matters most, try AVIF and compare the result.',
  },
  es: {
    header: (inputLabel, outputLabel) => `Este resultado ${inputLabel} -> ${outputLabel} es más grande. Posibles causas:`,
    reasonPngDeep: (inputLabel, outputLabel, bppText) => `${inputLabel} es con pérdida o de alta compresión. Al pasar a ${outputLabel} sin pérdida se conserva todo el píxel, y esta imagen ya está muy comprimida${bppText}, por eso el aumento se nota más.`,
    reasonPng: (inputLabel, outputLabel) => `${inputLabel} es con pérdida o de alta compresión. Al pasar a ${outputLabel} sin pérdida se conserva todo el píxel, así que el tamaño suele subir.`,
    reasonWebpDeep: (outputLabel, bppText) => `El formato de origen ya es muy eficiente, y esta imagen está muy comprimida${bppText}, así que recodificar a ${outputLabel} no siempre reduce tamaño.`,
    reasonWebp: (outputLabel) => `El formato de origen ya es muy eficiente, así que recodificar a ${outputLabel} no siempre reduce tamaño.`,
    reasonJpgDeep: (inputLabel, outputLabel, bppText) => `Normalmente ${inputLabel} ocupa menos, pero esta imagen ya está muy comprimida${bppText}, y ${outputLabel} puede salir más grande.`,
    reasonJpg: (inputLabel, outputLabel) => `Normalmente ${inputLabel} ocupa menos, pero con esta imagen y estos ajustes, ${outputLabel} puede salir más grande.`,
    reasonAvifSmall: (outputLabel) => `La imagen es pequeña, y el coste de codificación de ${outputLabel} pesa más; en este caso el tamaño puede aumentar.`,
    reasonDeepCompressed: (inputLabel, bppText) => `Estado del archivo: la entrada ${inputLabel} ya está muy comprimida${bppText}. Al recodificar queda poco margen y el tamaño puede rebotar.`,
    reasonFallback: () => 'Este aumento suele venir de la sobrecarga de recodificación y de la complejidad de la imagen.',
    suggestionAvif: (quality) => `Sugerencia: baja la calidad de ${quality}% a 70%-82%. Si sigue grande, prueba WebP o JPG.`,
    suggestionQuality: (quality) => `Sugerencia: baja la calidad de ${quality}% a 75%-82% para reducir tamaño con claridad.`,
    suggestionTryAvif: () => 'Sugerencia: si priorizas tamaño, prueba AVIF y compara.',
  },
  fr: {
    header: (inputLabel, outputLabel) => `Ce résultat ${inputLabel} -> ${outputLabel} est plus volumineux. Causes probables :`,
    reasonPngDeep: (inputLabel, outputLabel, bppText) => `${inputLabel} est avec perte ou très compressé. En conversion vers ${outputLabel} sans perte, toutes les données pixels sont conservées, et cette image est déjà très compressée${bppText}, donc l’augmentation est plus nette.`,
    reasonPng: (inputLabel, outputLabel) => `${inputLabel} est avec perte ou très compressé. En conversion vers ${outputLabel} sans perte, toutes les données pixels sont conservées, donc la taille augmente souvent.`,
    reasonWebpDeep: (outputLabel, bppText) => `Le format source est déjà très efficace, et cette image est fortement compressée${bppText}, donc un réencodage en ${outputLabel} n’est pas toujours plus léger.`,
    reasonWebp: (outputLabel) => `Le format source est déjà très efficace, donc un réencodage en ${outputLabel} n’est pas toujours plus léger.`,
    reasonJpgDeep: (inputLabel, outputLabel, bppText) => `En général ${inputLabel} est plus compact, mais cette image est déjà très compressée${bppText}, et ${outputLabel} peut devenir plus lourd.`,
    reasonJpg: (inputLabel, outputLabel) => `En général ${inputLabel} est plus compact, mais avec cette image et ces réglages, ${outputLabel} peut devenir plus lourd.`,
    reasonAvifSmall: (outputLabel) => `L’image est petite, donc le surcoût d’encodage ${outputLabel} pèse davantage et la taille peut augmenter.`,
    reasonDeepCompressed: (inputLabel, bppText) => `État source : l’entrée ${inputLabel} est déjà très compressée${bppText}. Le réencodage a peu de marge et la taille peut rebondir.`,
    reasonFallback: () => 'Cette hausse vient surtout du coût de réencodage et de la complexité de l’image, ce qui reste normal.',
    suggestionAvif: (quality) => `Conseil : baissez la qualité de ${quality}% à 70%-82%. Si le fichier reste volumineux, testez WebP ou JPG.`,
    suggestionQuality: (quality) => `Conseil : baissez la qualité de ${quality}% à 75%-82% pour un gain net de taille.`,
    suggestionTryAvif: () => 'Conseil : si la taille est prioritaire, essayez AVIF puis comparez.',
  },
  de: {
    header: (inputLabel, outputLabel) => `Dieses ${inputLabel} -> ${outputLabel}-Ergebnis ist größer. Mögliche Gründe:`,
    reasonPngDeep: (inputLabel, outputLabel, bppText) => `${inputLabel} ist verlustbehaftet oder stark komprimiert. Beim Umwandeln in das verlustfreie ${outputLabel} bleiben alle Pixeldaten erhalten. Dieses Bild ist bereits stark komprimiert${bppText}, daher fällt der Größenanstieg stärker aus.`,
    reasonPng: (inputLabel, outputLabel) => `${inputLabel} ist verlustbehaftet oder stark komprimiert. Beim Umwandeln in das verlustfreie ${outputLabel} bleiben alle Pixeldaten erhalten, daher wird die Datei meist größer.`,
    reasonWebpDeep: (outputLabel, bppText) => `Das Quellformat ist bereits sehr effizient, und dieses Bild ist stark komprimiert${bppText}. Eine Neukodierung nach ${outputLabel} wird daher nicht immer kleiner.`,
    reasonWebp: (outputLabel) => `Das Quellformat ist bereits sehr effizient. Eine Neukodierung nach ${outputLabel} wird daher nicht immer kleiner.`,
    reasonJpgDeep: (inputLabel, outputLabel, bppText) => `Normalerweise ist ${inputLabel} kompakter, aber dieses Bild ist bereits stark komprimiert${bppText}, daher kann ${outputLabel} größer werden.`,
    reasonJpg: (inputLabel, outputLabel) => `Normalerweise ist ${inputLabel} kompakter, aber bei diesem Bild und diesen Einstellungen kann ${outputLabel} größer werden.`,
    reasonAvifSmall: (outputLabel) => `Das Bild ist relativ klein. Der Kodierungs-Overhead von ${outputLabel} fällt dadurch stärker ins Gewicht, daher kann die Dateigröße steigen.`,
    reasonDeepCompressed: (inputLabel, bppText) => `Quellzustand: Die Eingabe ${inputLabel} ist bereits stark komprimiert${bppText}. Beim Neukodieren bleibt wenig Spielraum, daher kann die Größe zurückspringen.`,
    reasonFallback: () => 'Die Vergrößerung kommt meist durch Neukodierungs-Overhead und Bildkomplexität zustande und ist erwartbar.',
    suggestionAvif: (quality) => `Tipp: Qualität von ${quality}% auf 70%-82% senken. Wenn die Datei weiter groß bleibt, WebP oder JPG testen.`,
    suggestionQuality: (quality) => `Tipp: Qualität von ${quality}% auf 75%-82% senken, das reduziert die Größe meist deutlich.`,
    suggestionTryAvif: () => 'Tipp: Wenn Dateigröße Priorität hat, AVIF ausprobieren und vergleichen.',
  },
  ja: {
    header: (inputLabel, outputLabel) => `今回の ${inputLabel} -> ${outputLabel} はサイズが増えています。主な理由:`,
    reasonPngDeep: (inputLabel, outputLabel, bppText) => `${inputLabel} は非可逆または高圧縮形式です。可逆の ${outputLabel} に変換すると画素情報を保持するため、さらにこの画像はすでに強く圧縮されています${bppText}。そのため増加が目立ちます。`,
    reasonPng: (inputLabel, outputLabel) => `${inputLabel} は非可逆または高圧縮形式です。可逆の ${outputLabel} に変換すると画素情報を保持するため、サイズは増えやすくなります。`,
    reasonWebpDeep: (outputLabel, bppText) => `元形式の圧縮効率がすでに高く、この画像も強く圧縮されています${bppText}。そのため ${outputLabel} への再エンコードで必ずしも小さくなりません。`,
    reasonWebp: (outputLabel) => `元形式の圧縮効率がすでに高いため、${outputLabel} への再エンコードで必ずしも小さくなりません。`,
    reasonJpgDeep: (inputLabel, outputLabel, bppText) => `通常は ${inputLabel} の方が軽くなりやすいですが、この画像はすでに強く圧縮されています${bppText}。そのため ${outputLabel} の方が大きくなる場合があります。`,
    reasonJpg: (inputLabel, outputLabel) => `通常は ${inputLabel} の方が軽くなりやすいですが、画像内容と設定次第で ${outputLabel} の方が大きくなる場合があります。`,
    reasonAvifSmall: (outputLabel) => `画像サイズが小さいため、${outputLabel} のエンコードオーバーヘッドの比率が高くなり、容量が増えることがあります。`,
    reasonDeepCompressed: (inputLabel, bppText) => `元ファイルの状態: 入力 ${inputLabel} はすでに高圧縮です${bppText}。再エンコードの余地が少なく、サイズが戻ることがあります。`,
    reasonFallback: () => '今回の増加は再エンコードのオーバーヘッドと画像の複雑さによるもので、想定内です。',
    suggestionAvif: (quality) => `提案: 品質を ${quality}% から 70%-82% に下げてください。まだ大きい場合は WebP または JPG を試してください。`,
    suggestionQuality: (quality) => `提案: 品質を ${quality}% から 75%-82% に下げると、容量を抑えやすくなります。`,
    suggestionTryAvif: () => '提案: 容量優先なら AVIF で出力して比較してください。',
  },
  ko: {
    header: (inputLabel, outputLabel) => `이번 ${inputLabel} -> ${outputLabel} 변환은 용량이 증가했습니다. 가능한 이유:`,
    reasonPngDeep: (inputLabel, outputLabel, bppText) => `${inputLabel} 은 손실 또는 고압축 형식입니다. 무손실 ${outputLabel} 로 바꾸면 픽셀 데이터를 그대로 보존하고, 이 이미지는 이미 강하게 압축되어 있습니다${bppText}. 그래서 증가 폭이 더 커질 수 있습니다.`,
    reasonPng: (inputLabel, outputLabel) => `${inputLabel} 은 손실 또는 고압축 형식입니다. 무손실 ${outputLabel} 로 바꾸면 픽셀 데이터를 그대로 보존하므로 용량이 커지기 쉽습니다.`,
    reasonWebpDeep: (outputLabel, bppText) => `원본 형식 자체의 압축 효율이 높고, 이 이미지도 이미 강하게 압축되어 있습니다${bppText}. 그래서 ${outputLabel} 로 다시 인코딩해도 더 작아지지 않을 수 있습니다.`,
    reasonWebp: (outputLabel) => `원본 형식 자체의 압축 효율이 높아서 ${outputLabel} 로 다시 인코딩해도 더 작아지지 않을 수 있습니다.`,
    reasonJpgDeep: (inputLabel, outputLabel, bppText) => `보통 ${inputLabel} 이 더 작지만, 이 이미지는 이미 강하게 압축되어 있습니다${bppText}. 그래서 ${outputLabel} 결과가 오히려 커질 수 있습니다.`,
    reasonJpg: (inputLabel, outputLabel) => `보통 ${inputLabel} 이 더 작지만, 현재 이미지와 설정에서는 ${outputLabel} 결과가 오히려 커질 수 있습니다.`,
    reasonAvifSmall: (outputLabel) => `이미지 해상도가 작은 편이라 ${outputLabel} 인코딩 오버헤드 비중이 커지고, 이 경우 용량이 늘어날 수 있습니다.`,
    reasonDeepCompressed: (inputLabel, bppText) => `원본 상태: 입력 ${inputLabel} 이 이미 강하게 압축되어 있습니다${bppText}. 재인코딩 여지가 적어 용량이 다시 커질 수 있습니다.`,
    reasonFallback: () => '이번 증가는 재인코딩 오버헤드와 이미지 복잡도 영향으로 발생한 정상적인 현상입니다.',
    suggestionAvif: (quality) => `권장: 품질을 ${quality}%에서 70%-82%로 낮춰 보세요. 여전히 크면 WebP 또는 JPG를 시도하세요.`,
    suggestionQuality: (quality) => `권장: 품질을 ${quality}%에서 75%-82%로 낮추면 용량을 더 줄일 수 있습니다.`,
    suggestionTryAvif: () => '권장: 용량이 우선이라면 AVIF 출력도 비교해 보세요.',
  },
  pt: {
    header: (inputLabel, outputLabel) => `Neste ${inputLabel} -> ${outputLabel}, o arquivo ficou maior. Motivos prováveis:`,
    reasonPngDeep: (inputLabel, outputLabel, bppText) => `${inputLabel} é com perdas ou de alta compressão. Ao converter para ${outputLabel} sem perdas, todos os pixels são preservados, e esta imagem já está muito comprimida${bppText}, então o aumento fica mais evidente.`,
    reasonPng: (inputLabel, outputLabel) => `${inputLabel} é com perdas ou de alta compressão. Ao converter para ${outputLabel} sem perdas, todos os pixels são preservados, então o tamanho costuma aumentar.`,
    reasonWebpDeep: (outputLabel, bppText) => `O formato de origem já é muito eficiente, e esta imagem já está bastante comprimida${bppText}, então recodificar para ${outputLabel} nem sempre reduz o tamanho.`,
    reasonWebp: (outputLabel) => `O formato de origem já é muito eficiente, então recodificar para ${outputLabel} nem sempre reduz o tamanho.`,
    reasonJpgDeep: (inputLabel, outputLabel, bppText) => `Em geral ${inputLabel} fica menor, mas esta imagem já está muito comprimida${bppText}, e ${outputLabel} pode acabar maior.`,
    reasonJpg: (inputLabel, outputLabel) => `Em geral ${inputLabel} fica menor, mas com esta imagem e estes parâmetros, ${outputLabel} pode acabar maior.`,
    reasonAvifSmall: (outputLabel) => `A imagem é pequena, então o overhead de codificação de ${outputLabel} pesa mais e o tamanho pode aumentar.`,
    reasonDeepCompressed: (inputLabel, bppText) => `Estado do arquivo: a entrada ${inputLabel} já está muito comprimida${bppText}. Há pouco espaço para recomprimir e o tamanho pode voltar a subir.`,
    reasonFallback: () => 'Esse aumento costuma vir do overhead de recodificação e da complexidade da imagem, o que é esperado.',
    suggestionAvif: (quality) => `Sugestão: reduza a qualidade de ${quality}% para 70%-82%. Se ainda ficar grande, teste WebP ou JPG.`,
    suggestionQuality: (quality) => `Sugestão: reduza a qualidade de ${quality}% para 75%-82% para uma queda perceptível de tamanho.`,
    suggestionTryAvif: () => 'Sugestão: se o foco for tamanho, experimente AVIF e compare.',
  },
  ru: {
    header: (inputLabel, outputLabel) => `В этом ${inputLabel} -> ${outputLabel} размер файла увеличился. Возможные причины:`,
    reasonPngDeep: (inputLabel, outputLabel, bppText) => `${inputLabel} — формат с потерями или высокой компрессией. При переводе в без потерь ${outputLabel} сохраняются все пиксели, а это изображение уже сильно сжато${bppText}, поэтому рост заметнее.`,
    reasonPng: (inputLabel, outputLabel) => `${inputLabel} — формат с потерями или высокой компрессией. При переводе в без потерь ${outputLabel} сохраняются все пиксели, поэтому размер обычно растет.`,
    reasonWebpDeep: (outputLabel, bppText) => `Исходный формат уже очень эффективен, и это изображение уже сильно сжато${bppText}, поэтому перекодирование в ${outputLabel} не всегда дает меньший размер.`,
    reasonWebp: (outputLabel) => `Исходный формат уже очень эффективен, поэтому перекодирование в ${outputLabel} не всегда дает меньший размер.`,
    reasonJpgDeep: (inputLabel, outputLabel, bppText) => `Обычно ${inputLabel} компактнее, но это изображение уже сильно сжато${bppText}, поэтому ${outputLabel} может получиться больше.`,
    reasonJpg: (inputLabel, outputLabel) => `Обычно ${inputLabel} компактнее, но с этим изображением и текущими настройками ${outputLabel} может получиться больше.`,
    reasonAvifSmall: (outputLabel) => `Изображение небольшое, поэтому доля накладных расходов кодека ${outputLabel} выше, и размер может увеличиться.`,
    reasonDeepCompressed: (inputLabel, bppText) => `Состояние источника: входной ${inputLabel} уже сильно сжат${bppText}. Пространства для повторного сжатия мало, поэтому размер может откатиться вверх.`,
    reasonFallback: () => 'Рост в основном связан с накладными расходами перекодирования и сложностью изображения, это ожидаемо.',
    suggestionAvif: (quality) => `Совет: снизьте качество с ${quality}% до 70%-82%. Если файл все еще большой, попробуйте WebP или JPG.`,
    suggestionQuality: (quality) => `Совет: снизьте качество с ${quality}% до 75%-82%, это обычно заметно уменьшает размер.`,
    suggestionTryAvif: () => 'Совет: если приоритет — размер файла, попробуйте AVIF и сравните результат.',
  },
  ar: {
    header: (inputLabel, outputLabel) => `النتيجة ${inputLabel} -> ${outputLabel} أكبر حجماً. الأسباب المحتملة:`,
    reasonPngDeep: (inputLabel, outputLabel, bppText) => `${inputLabel} صيغة فقدية أو عالية الضغط. عند التحويل إلى ${outputLabel} بدون فقد يتم حفظ كل بيانات البكسل، وهذه الصورة مضغوطة بشدة بالفعل${bppText}، لذلك تكون الزيادة أوضح.`,
    reasonPng: (inputLabel, outputLabel) => `${inputLabel} صيغة فقدية أو عالية الضغط. عند التحويل إلى ${outputLabel} بدون فقد يتم حفظ كل بيانات البكسل، لذلك يزداد الحجم غالباً.`,
    reasonWebpDeep: (outputLabel, bppText) => `صيغة المصدر فعالة جداً أصلاً، وهذه الصورة مضغوطة بشدة بالفعل${bppText}، لذا إعادة الترميز إلى ${outputLabel} لا تعطي حجماً أصغر دائماً.`,
    reasonWebp: (outputLabel) => `صيغة المصدر فعالة جداً أصلاً، لذا إعادة الترميز إلى ${outputLabel} لا تعطي حجماً أصغر دائماً.`,
    reasonJpgDeep: (inputLabel, outputLabel, bppText) => `عادةً يكون ${inputLabel} أصغر، لكن هذه الصورة مضغوطة بشدة بالفعل${bppText}، لذلك قد يكون ${outputLabel} أكبر.`,
    reasonJpg: (inputLabel, outputLabel) => `عادةً يكون ${inputLabel} أصغر، لكن مع هذه الصورة والإعدادات الحالية قد يكون ${outputLabel} أكبر.`,
    reasonAvifSmall: (outputLabel) => `أبعاد الصورة صغيرة نسبياً، لذا ترتفع نسبة كلفة ترميز ${outputLabel} وقد يزيد الحجم.`,
    reasonDeepCompressed: (inputLabel, bppText) => `حالة الملف: الإدخال ${inputLabel} مضغوط بشدة بالفعل${bppText}. مساحة الضغط المتبقية محدودة، لذلك قد يرتد الحجم للأعلى.`,
    reasonFallback: () => 'هذه الزيادة تنتج غالباً من كلفة إعادة الترميز وتعقيد الصورة، وهذا سلوك متوقع.',
    suggestionAvif: (quality) => `اقتراح: خفّض الجودة من ${quality}% إلى 70%-82%. إذا بقي الحجم كبيراً فجرّب WebP أو JPG.`,
    suggestionQuality: (quality) => `اقتراح: خفّض الجودة من ${quality}% إلى 75%-82% لتحسين الحجم بشكل واضح.`,
    suggestionTryAvif: () => 'اقتراح: إذا كانت أولوية الحجم، جرّب AVIF ثم قارن النتيجة.',
  },
  it: {
    header: (inputLabel, outputLabel) => `In questa conversione ${inputLabel} -> ${outputLabel}, il file è più grande. Possibili cause:`,
    reasonPngDeep: (inputLabel, outputLabel, bppText) => `${inputLabel} è con perdita o ad alta compressione. Convertendo in ${outputLabel} senza perdita si conservano tutti i pixel, e questa immagine è già molto compressa${bppText}, quindi l’aumento è più evidente.`,
    reasonPng: (inputLabel, outputLabel) => `${inputLabel} è con perdita o ad alta compressione. Convertendo in ${outputLabel} senza perdita si conservano tutti i pixel, quindi la dimensione tende ad aumentare.`,
    reasonWebpDeep: (outputLabel, bppText) => `Il formato sorgente è già molto efficiente, e questa immagine è già molto compressa${bppText}, quindi ricodificare in ${outputLabel} non sempre riduce il peso.`,
    reasonWebp: (outputLabel) => `Il formato sorgente è già molto efficiente, quindi ricodificare in ${outputLabel} non sempre riduce il peso.`,
    reasonJpgDeep: (inputLabel, outputLabel, bppText) => `Di solito ${inputLabel} è più leggero, ma questa immagine è già molto compressa${bppText}, quindi ${outputLabel} può risultare più grande.`,
    reasonJpg: (inputLabel, outputLabel) => `Di solito ${inputLabel} è più leggero, ma con questa immagine e questi parametri ${outputLabel} può risultare più grande.`,
    reasonAvifSmall: (outputLabel) => `L’immagine è piccola, quindi il costo di codifica ${outputLabel} pesa di più e la dimensione può aumentare.`,
    reasonDeepCompressed: (inputLabel, bppText) => `Stato del file: l’input ${inputLabel} è già molto compresso${bppText}. La ricodifica ha poco margine e la dimensione può risalire.`,
    reasonFallback: () => 'Questo aumento dipende soprattutto dal costo di ricodifica e dalla complessità dell’immagine, ed è normale.',
    suggestionAvif: (quality) => `Suggerimento: abbassa la qualità da ${quality}% a 70%-82%. Se resta grande, prova WebP o JPG.`,
    suggestionQuality: (quality) => `Suggerimento: abbassa la qualità da ${quality}% a 75%-82% per ridurre meglio la dimensione.`,
    suggestionTryAvif: () => 'Suggerimento: se la priorità è la dimensione, prova AVIF e confronta.',
  },
};

function buildLocalizedTip(file: ConvertFile, quality: number, locale: Exclude<Locale, 'zh' | 'zh-Hant'>): string {
  const outputFormat = toOutputFormat(file.outputExt);
  const inputFormat = file.inputFormat;
  const inputLabel = toFormatLabel(inputFormat);
  const outputLabel = toFormatLabel(outputFormat);
  const increaseRatio = file.size > 0 ? file.outputSize / file.size - 1 : 0;
  const pixels = getPixelCount(file);
  const bytesPerPixel = getBytesPerPixel(file);
  const isSmallImage = Boolean(pixels && pixels < 1_000_000);
  const isDeepCompressed = COMPRESSED_INPUTS.has(inputFormat) && ((bytesPerPixel !== null && bytesPerPixel < 0.22) || increaseRatio > 0.35);
  const builder = TIP_BUILDERS[locale];
  const bppText = bytesPerPixel !== null ? ` (~${bytesPerPixel.toFixed(2)} B/pixel)` : '';

  let hasFormatMechanism = false;
  let hasEmbeddedCompressionReason = false;
  const reasons: string[] = [];

  if (outputFormat === 'png' && LOSSY_OR_HIGH_COMPRESSION_INPUTS.has(inputFormat)) {
    hasFormatMechanism = true;
    if (isDeepCompressed) {
      reasons.push(builder.reasonPngDeep(inputLabel, outputLabel, bppText));
      hasEmbeddedCompressionReason = true;
    } else {
      reasons.push(builder.reasonPng(inputLabel, outputLabel));
    }
  } else if (outputFormat === 'webp' && ['heic', 'heif', 'avif'].includes(inputFormat)) {
    hasFormatMechanism = true;
    if (isDeepCompressed) {
      reasons.push(builder.reasonWebpDeep(outputLabel, bppText));
      hasEmbeddedCompressionReason = true;
    } else {
      reasons.push(builder.reasonWebp(outputLabel));
    }
  } else if (outputFormat === 'jpg' && ['heic', 'heif', 'avif', 'webp'].includes(inputFormat)) {
    hasFormatMechanism = true;
    if (isDeepCompressed) {
      reasons.push(builder.reasonJpgDeep(inputLabel, outputLabel, bppText));
      hasEmbeddedCompressionReason = true;
    } else {
      reasons.push(builder.reasonJpg(inputLabel, outputLabel));
    }
  } else if (outputFormat === 'avif' && isSmallImage) {
    hasFormatMechanism = true;
    reasons.push(builder.reasonAvifSmall(outputLabel));
  }

  if (isDeepCompressed && !hasEmbeddedCompressionReason) {
    reasons.push(builder.reasonDeepCompressed(inputLabel, bppText));
  }

  if (reasons.length === 0) {
    reasons.push(builder.reasonFallback());
  }

  const reasonLines = reasons.length > 1 ? reasons.map((reason, index) => `${index + 1}. ${reason}`) : reasons;
  let suggestion = '';
  if (outputFormat === 'avif' && increaseRatio > 0) {
    suggestion = builder.suggestionAvif(quality);
  } else if (quality >= 85 && outputFormat !== 'png') {
    suggestion = builder.suggestionQuality(quality);
  } else if (!hasFormatMechanism && outputFormat !== 'avif') {
    suggestion = builder.suggestionTryAvif();
  }

  return [builder.header(inputLabel, outputLabel), ...reasonLines, suggestion].filter(Boolean).join('\n');
}

export function getSizeIncreaseReason(context: SizeIncreaseContext): string {
  const { lang, file, quality } = context;
  if (lang === 'zh' || lang === 'zh-Hant') {
    return buildChineseTip(file, quality, lang);
  }
  return buildLocalizedTip(file, quality, lang);
}
