import type { Locale, UIStrings } from './config';

const ui: Record<Locale, UIStrings> = {
  en: {
    dropDrag: 'Drag & drop your images here',
    dropClick: 'or click to browse, or paste (Ctrl+V)',
    dropFormats: 'Supports HEIC, WebP, PNG, JPG, AVIF, BMP',
    dropAnywhere: 'Drop images anywhere',
    clearAll: 'Clear All',
    outputLabel: 'Output',
    qualityLabel: 'Quality',
    preparing: 'Preparing comparison...',
    queued: 'Queued',
    converting: 'Converting',
    original: 'Original',
    converted: 'Converted',
    downloadAll: 'Download All as ZIP',
    filesConverted: '{completed} of {total} converted & optimized',
    filesCompressed: '{completed} of {total} compressed',
    allTools: 'All Tools',
    navPrivacy: 'Privacy',
    copyright: '\u00a9 2026 PicShift. All rights reserved.',
    privacyMessage: 'Your images never leave your device.',
    privacyPolicy: 'Privacy Policy',
    privacyBadge: '100% Private \u2014 No Upload',
    heroTitle1: 'Convert Images Instantly',
    heroTitle2: 'Files Never Leave Your Device',
    heroSubtitle: 'Support HEIC, WebP, PNG, JPG, AVIF \u2014 instant convert, no upload',
    allConverters: 'All Converters',
    instantTitle: 'Instant Conversion',
    instantDesc:
      'Powered by WebAssembly for near-native performance. Convert hundreds of images in seconds.',
    privateTitle: '100% Private',
    privateDesc:
      'All processing happens locally in your browser. No files are ever uploaded to any server.',
    freeTitle: 'Completely Free',
    freeDesc: 'No sign-up, no watermarks, no file limits. Just open and convert.',
    howToPrefix: 'How to ',
    faqTitle: 'Frequently Asked Questions',
    compressImages: 'Compress Images',
    sizeIncreaseTip: 'The target format stores more data than the original, which results in a larger file. This is normal and does not affect image quality.',
    sizeIncreaseTipPng: 'PNG is lossless and preserves every pixel. Converting from a lossy format (like JPG) means the full uncompressed pixel data is much larger than the original compressed data. This is the normal cost of lossless — larger file, but zero quality loss.',
    sizeIncreaseTipJpg: 'The source is already heavily compressed. Re-encoding at the current quality can\'t shrink it further. Try dragging the quality slider lower.',
    sizeIncreaseTipWebp: 'The source is already well-optimized. Converting to WebP at the current quality can\'t shrink it further. Try dragging the quality slider lower.',
    sizeIncreaseTipAvif: 'The source is already a compact compressed format. Converting to AVIF requires the browser\'s built-in AV1 encoder to re-encode all pixels, and its overhead is significant for small or already-compressed files. AVIF works best for large, high-resolution source photos. Consider WebP or JPG for this image.',
    resetDefaults: 'Reset',
    sizeIncreaseFaqQ: 'Why is the output file sometimes larger than the original?',
    sizeIncreaseFaqA: 'This can happen for a few reasons: (1) Converting from a lossy format (JPG, WebP) to a lossless format (PNG) preserves every pixel, which naturally produces a larger file in exchange for zero quality loss. (2) AVIF uses the AV1 codec which has encoding overhead for small or simple images — it excels at high-resolution photos where it achieves 20–50% better compression than JPEG. (3) If the source is already heavily compressed, re-encoding may not reduce the size further. PicShift uses industry-leading WASM encoders (MozJPEG, OxiPNG, libwebp) to produce the smallest possible output at your chosen quality. In compress mode, PicShift automatically keeps the original file when compression would increase the size.',
    comparePrev: 'Previous',
    compareNext: 'Next',
  },

  zh: {
    dropDrag: '\u62d6\u653e\u56fe\u7247\u5230\u6b64\u5904',
    dropClick: '\u6216\u70b9\u51fb\u6d4f\u89c8\uff0c\u6216\u7c98\u8d34 (Ctrl+V)',
    dropFormats: '\u652f\u6301 HEIC, WebP, PNG, JPG, AVIF, BMP',
    dropAnywhere: '\u5c06\u56fe\u7247\u62d6\u653e\u5230\u4efb\u610f\u4f4d\u7f6e',
    clearAll: '\u5168\u90e8\u6e05\u9664',
    outputLabel: '\u8f93\u51fa\u683c\u5f0f',
    qualityLabel: '\u8d28\u91cf',
    preparing: '\u6b63\u5728\u51c6\u5907\u5bf9\u6bd4\u2026\u2026',
    queued: '\u7b49\u5f85\u4e2d',
    converting: '\u8f6c\u6362\u4e2d',
    original: '\u539f\u56fe',
    converted: '\u8f6c\u6362\u540e',
    downloadAll: '\u6253\u5305\u4e0b\u8f7d ZIP',
    filesConverted: '已转换并优化 {completed}/{total}',
    filesCompressed: '已压缩 {completed}/{total}',
    allTools: '\u6240\u6709\u5de5\u5177',
    navPrivacy: '\u9690\u79c1',
    copyright: '\u00a9 2026 PicShift\u3002\u4fdd\u7559\u6240\u6709\u6743\u5229\u3002',
    privacyMessage: '\u60a8\u7684\u56fe\u7247\u59cb\u7ec8\u4fdd\u7559\u5728\u60a8\u7684\u8bbe\u5907\u4e0a\u3002',
    privacyPolicy: '\u9690\u79c1\u653f\u7b56',
    privacyBadge: '100% \u79c1\u5bc6 \u2014 \u65e0\u9700\u4e0a\u4f20',
    heroTitle1: '\u5373\u65f6\u8f6c\u6362\u56fe\u7247',
    heroTitle2: '文件始终留在你的设备上',
    heroSubtitle: '支持 HEIC, WebP, PNG, JPG, AVIF \u2014 即时转换并优化体积，无需上传',
    allConverters: '\u6240\u6709\u8f6c\u6362\u5668',
    instantTitle: '\u5373\u65f6\u8f6c\u6362',
    instantDesc:
      '\u57fa\u4e8e WebAssembly \u6280\u672f\uff0c\u63a5\u8fd1\u539f\u751f\u6027\u80fd\u3002\u6570\u79d2\u5185\u8f6c\u6362\u6570\u767e\u5f20\u56fe\u7247\u3002',
    privateTitle: '100% \u79c1\u5bc6',
    privateDesc:
      '\u6240\u6709\u5904\u7406\u5747\u5728\u6d4f\u89c8\u5668\u672c\u5730\u5b8c\u6210\u3002\u6587\u4ef6\u7edd\u4e0d\u4f1a\u4e0a\u4f20\u5230\u4efb\u4f55\u670d\u52a1\u5668\u3002',
    freeTitle: '\u5b8c\u5168\u514d\u8d39',
    freeDesc:
      '\u65e0\u9700\u6ce8\u518c\uff0c\u65e0\u6c34\u5370\uff0c\u65e0\u6587\u4ef6\u9650\u5236\u3002\u6253\u5f00\u5373\u7528\u3002',
    howToPrefix: '\u5982\u4f55',
    faqTitle: '\u5e38\u89c1\u95ee\u9898',
    compressImages: '\u538b\u7f29\u56fe\u7247',
    sizeIncreaseTip: '\u76ee\u6807\u683c\u5f0f\u5b58\u50a8\u7684\u6570\u636e\u6bd4\u539f\u683c\u5f0f\u66f4\u591a\uff0c\u56e0\u6b64\u6587\u4ef6\u4f1a\u53d8\u5927\u3002\u8fd9\u662f\u6b63\u5e38\u73b0\u8c61\uff0c\u4e0d\u5f71\u54cd\u56fe\u7247\u8d28\u91cf\u3002',
    sizeIncreaseTipPng: 'PNG 是无损格式，会完整保留每一个像素。从有损格式（如 JPG）转换时，解压后的完整像素数据远大于原始压缩数据，因此文件会显著变大。这是无损保存的正常代价，换来的是零质量损失。',
    sizeIncreaseTipJpg: '源文件已经过高度压缩，当前质量设置下重新编码无法进一步缩小体积。可以尝试拖动质量滑块降低质量值。',
    sizeIncreaseTipWebp: '源文件已经深度优化，当前质量设置下转为 WebP 无法进一步缩小。可以尝试拖动质量滑块降低质量值。',
    sizeIncreaseTipAvif: '源文件已是高度压缩的格式，转为 AVIF 需要用浏览器内置 AV1 编码器重新编码全部像素。AV1 编码器开销较大，在小图或已压缩的文件上反而会增大体积。建议对大尺寸原始照片使用 AVIF，或选择 WebP / JPG 作为更高效的选择。',
    resetDefaults: '重置',
    sizeIncreaseFaqQ: '为什么输出文件有时比原始文件更大？',
    sizeIncreaseFaqA: '这可能有几个原因：(1) 从有损格式（JPG、WebP）转为无损格式（PNG）会保留每一个像素，文件自然会更大，但换来的是零质量损失。(2) AVIF 使用 AV1 编解码器，在小图或简单图像上编码开销较大——它在高分辨率照片上表现出色，可比 JPEG 压缩率高 20-50%。(3) 如果源文件已经过高度压缩，重新编码可能无法进一步缩小体积。PicShift 使用业界领先的 WASM 编码器（MozJPEG、OxiPNG、libwebp），在您选择的质量下生成尽可能小的输出文件。在压缩模式下，如果压缩后体积反而增大，PicShift 会自动保留原始文件。',
    comparePrev: '上一张',
    compareNext: '下一张',
  },

  'zh-Hant': {
    dropDrag: '\u62d6\u653e\u5716\u7247\u5230\u6b64\u8655',
    dropClick: '\u6216\u9ede\u64ca\u700f\u89bd\uff0c\u6216\u8cbc\u4e0a (Ctrl+V)',
    dropFormats: '\u652f\u63f4 HEIC, WebP, PNG, JPG, AVIF, BMP',
    dropAnywhere: '\u5c07\u5716\u7247\u62d6\u653e\u5230\u4efb\u610f\u4f4d\u7f6e',
    clearAll: '\u5168\u90e8\u6e05\u9664',
    outputLabel: '\u8f38\u51fa\u683c\u5f0f',
    qualityLabel: '\u54c1\u8cea',
    preparing: '\u6b63\u5728\u6e96\u5099\u5c0d\u6bd4\u2026\u2026',
    queued: '\u7b49\u5f85\u4e2d',
    converting: '\u8f49\u63db\u4e2d',
    original: '\u539f\u5716',
    converted: '\u8f49\u63db\u5f8c',
    downloadAll: '\u6253\u5305\u4e0b\u8f09 ZIP',
    filesConverted: '已轉換並優化 {completed}/{total}',
    filesCompressed: '已壓縮 {completed}/{total}',
    allTools: '\u6240\u6709\u5de5\u5177',
    navPrivacy: '\u96b1\u79c1',
    copyright: '\u00a9 2026 PicShift\u3002\u4fdd\u7559\u6240\u6709\u6b0a\u5229\u3002',
    privacyMessage: '\u60a8\u7684\u5716\u7247\u59cb\u7d42\u4fdd\u7559\u5728\u60a8\u7684\u88dd\u7f6e\u4e0a\u3002',
    privacyPolicy: '\u96b1\u79c1\u653f\u7b56',
    privacyBadge: '100% \u79c1\u5bc6 \u2014 \u7121\u9700\u4e0a\u50b3',
    heroTitle1: '\u5373\u6642\u8f49\u63db\u5716\u7247',
    heroTitle2: '檔案始終留在你的裝置上',
    heroSubtitle: '支援 HEIC, WebP, PNG, JPG, AVIF \u2014 即時轉換並優化體積，無需上傳',
    allConverters: '\u6240\u6709\u8f49\u63db\u5668',
    instantTitle: '\u5373\u6642\u8f49\u63db',
    instantDesc:
      '\u57fa\u65bc WebAssembly \u6280\u8853\uff0c\u63a5\u8fd1\u539f\u751f\u6548\u80fd\u3002\u6578\u79d2\u5167\u8f49\u63db\u6578\u767e\u5f35\u5716\u7247\u3002',
    privateTitle: '100% \u79c1\u5bc6',
    privateDesc:
      '\u6240\u6709\u8655\u7406\u5747\u5728\u700f\u89bd\u5668\u672c\u5730\u5b8c\u6210\u3002\u6a94\u6848\u7d55\u4e0d\u6703\u4e0a\u50b3\u5230\u4efb\u4f55\u4f3a\u670d\u5668\u3002',
    freeTitle: '\u5b8c\u5168\u514d\u8cbb',
    freeDesc:
      '\u7121\u9700\u8a3b\u518a\uff0c\u7121\u6c34\u5370\uff0c\u7121\u6a94\u6848\u9650\u5236\u3002\u958b\u555f\u5373\u7528\u3002',
    howToPrefix: '\u5982\u4f55',
    faqTitle: '\u5e38\u898b\u554f\u984c',
    compressImages: '\u58d3\u7e2e\u5716\u7247',
    sizeIncreaseTip: '\u76ee\u6a19\u683c\u5f0f\u5132\u5b58\u7684\u8cc7\u6599\u6bd4\u539f\u683c\u5f0f\u66f4\u591a\uff0c\u56e0\u6b64\u6a94\u6848\u6703\u8b8a\u5927\u3002\u9019\u662f\u6b63\u5e38\u73fe\u8c61\uff0c\u4e0d\u5f71\u97ff\u5716\u7247\u54c1\u8cea\u3002',
    sizeIncreaseTipPng: 'PNG 是無損格式，會完整保留每一個像素。從有損格式（如 JPG）轉換時，解壓後的完整像素資料遠大於原始壓縮資料，因此檔案會顯著變大。這是無損保存的正常代價，換來的是零品質損失。',
    sizeIncreaseTipJpg: '來源檔案已經過高度壓縮，當前品質設定下重新編碼無法進一步縮小體積。可以嘗試拖動品質滑桿降低品質值。',
    sizeIncreaseTipWebp: '來源檔案已深度優化，當前品質設定下轉為 WebP 無法進一步縮小。可以嘗試拖動品質滑桿降低品質值。',
    sizeIncreaseTipAvif: '來源檔案已是高度壓縮的格式，轉為 AVIF 需要用瀏覽器內建 AV1 編碼器重新編碼全部像素。AV1 編碼器開銷較大，在小圖或已壓縮的檔案上反而會增大體積。建議對大尺寸原始照片使用 AVIF，或選擇 WebP / JPG 作為更高效的選擇。',
    resetDefaults: '重置',
    sizeIncreaseFaqQ: '為什麼輸出檔案有時比原始檔案更大？',
    sizeIncreaseFaqA: '這可能有幾個原因：(1) 從有損格式（JPG、WebP）轉為無損格式（PNG）會保留每一個像素，檔案自然會更大，但換來的是零品質損失。(2) AVIF 使用 AV1 編解碼器，在小圖或簡單圖像上編碼開銷較大——它在高解析度照片上表現出色，可比 JPEG 壓縮率高 20-50%。(3) 如果來源檔案已經過高度壓縮，重新編碼可能無法進一步縮小體積。PicShift 使用業界領先的 WASM 編碼器（MozJPEG、OxiPNG、libwebp），在您選擇的品質下生成盡可能小的輸出檔案。在壓縮模式下，如果壓縮後體積反而增大，PicShift 會自動保留原始檔案。',
    comparePrev: '上一張',
    compareNext: '下一張',
  },

  es: {
    dropDrag: 'Arrastra y suelta tus im\u00e1genes aqu\u00ed',
    dropClick: 'o haz clic para buscar, o pega (Ctrl+V)',
    dropFormats: 'Compatible con HEIC, WebP, PNG, JPG, AVIF, BMP',
    dropAnywhere: 'Suelta las im\u00e1genes en cualquier lugar',
    clearAll: 'Borrar todo',
    outputLabel: 'Formato de salida',
    qualityLabel: 'Calidad',
    preparing: 'Preparando comparaci\u00f3n...',
    queued: 'En cola',
    converting: 'Convirtiendo',
    original: 'Original',
    converted: 'Convertido',
    downloadAll: 'Descargar todo como ZIP',
    filesConverted: '{completed} de {total} convertidos y optimizados',
    filesCompressed: '{completed} de {total} comprimidos',
    allTools: 'Todas las herramientas',
    navPrivacy: 'Privacidad',
    copyright: '\u00a9 2026 PicShift. Todos los derechos reservados.',
    privacyMessage: 'Tus im\u00e1genes nunca salen de tu dispositivo.',
    privacyPolicy: 'Pol\u00edtica de privacidad',
    privacyBadge: '100% Privado \u2014 Sin subidas',
    heroTitle1: 'Convierte im\u00e1genes al instante',
    heroTitle2: 'Tus archivos nunca salen de tu dispositivo',
    heroSubtitle: 'HEIC, WebP, PNG, JPG, AVIF \u2014 conversi\u00f3n instant\u00e1nea, sin subir nada',
    allConverters: 'Todos los conversores',
    instantTitle: 'Conversi\u00f3n instant\u00e1nea',
    instantDesc:
      'Potenciado por WebAssembly con rendimiento casi nativo. Convierte cientos de im\u00e1genes en segundos.',
    privateTitle: '100% Privado',
    privateDesc:
      'Todo el procesamiento ocurre localmente en tu navegador. Ning\u00fan archivo se sube a ning\u00fan servidor.',
    freeTitle: 'Completamente gratis',
    freeDesc:
      'Sin registro, sin marcas de agua, sin l\u00edmites de archivos. Solo abre y convierte.',
    howToPrefix: 'C\u00f3mo ',
    faqTitle: 'Preguntas frecuentes',
    compressImages: 'Comprimir im\u00e1genes',
    sizeIncreaseTip: 'El formato de destino almacena m\u00e1s datos que el original, lo que resulta en un archivo m\u00e1s grande. Esto es normal y no afecta la calidad.',
    sizeIncreaseTipPng: 'PNG es sin p\u00e9rdida y preserva cada p\u00edxel. Al convertir desde un formato con p\u00e9rdida (como JPG), los datos completos son mucho mayores que los datos comprimidos originales. Archivo m\u00e1s grande, pero cero p\u00e9rdida de calidad.',
    sizeIncreaseTipJpg: 'El archivo original ya est\u00e1 muy comprimido. La recodificaci\u00f3n con la calidad actual no puede reducirlo m\u00e1s. Intenta mover el control de calidad hacia abajo.',
    sizeIncreaseTipWebp: 'El archivo original ya est\u00e1 bien optimizado. Convertir a WebP con la calidad actual no puede reducirlo m\u00e1s. Intenta mover el control de calidad hacia abajo.',
    sizeIncreaseTipAvif: 'El archivo original ya es un formato comprimido compacto. Convertir a AVIF requiere que el codificador AV1 del navegador recodifique todos los p\u00edxeles, y su sobrecarga es significativa para archivos peque\u00f1os o ya comprimidos. AVIF funciona mejor con fotos grandes de alta resoluci\u00f3n. Considera WebP o JPG para esta imagen.',
    resetDefaults: 'Restablecer',
    sizeIncreaseFaqQ: '¿Por qué el archivo de salida es a veces más grande que el original?',
    sizeIncreaseFaqA: 'Esto puede ocurrir por varias razones: (1) Convertir de un formato con pérdida (JPG, WebP) a un formato sin pérdida (PNG) preserva cada píxel, lo que naturalmente produce un archivo más grande a cambio de cero pérdida de calidad. (2) AVIF usa el códec AV1, que tiene sobrecarga para imágenes pequeñas o simples — destaca en fotos de alta resolución donde logra 20–50% mejor compresión que JPEG. (3) Si la fuente ya está muy comprimida, recodificar puede no reducir más el tamaño. PicShift usa codificadores WASM líderes (MozJPEG, OxiPNG, libwebp) para producir la salida más pequeña posible. En modo compresión, PicShift conserva automáticamente el archivo original cuando la compresión aumentaría el tamaño.',
    comparePrev: 'Anterior',
    compareNext: 'Siguiente',
  },

  fr: {
    dropDrag: 'Glissez-d\u00e9posez vos images ici',
    dropClick: 'ou cliquez pour parcourir, ou collez (Ctrl+V)',
    dropFormats: 'Prend en charge HEIC, WebP, PNG, JPG, AVIF, BMP',
    dropAnywhere: 'D\u00e9posez les images n\u2019importe o\u00f9',
    clearAll: 'Tout effacer',
    outputLabel: 'Format de sortie',
    qualityLabel: 'Qualit\u00e9',
    preparing: 'Pr\u00e9paration de la comparaison...',
    queued: 'En attente',
    converting: 'Conversion en cours',
    original: 'Original',
    converted: 'Converti',
    downloadAll: 'Tout t\u00e9l\u00e9charger en ZIP',
    filesConverted: '{completed} sur {total} convertis et optimis\u00e9s',
    filesCompressed: '{completed} sur {total} compress\u00e9s',
    allTools: 'Tous les outils',
    navPrivacy: 'Confidentialit\u00e9',
    copyright: '\u00a9 2026 PicShift. Tous droits r\u00e9serv\u00e9s.',
    privacyMessage: 'Vos images ne quittent jamais votre appareil.',
    privacyPolicy: 'Politique de confidentialit\u00e9',
    privacyBadge: '100% Priv\u00e9 \u2014 Aucun t\u00e9l\u00e9versement',
    heroTitle1: 'Convertissez vos images instantan\u00e9ment',
    heroTitle2: 'Vos fichiers ne quittent jamais votre appareil',
    heroSubtitle: 'HEIC, WebP, PNG, JPG, AVIF \u2014 conversion instantan\u00e9e, rien n\u2019est envoy\u00e9',
    allConverters: 'Tous les convertisseurs',
    instantTitle: 'Conversion instantan\u00e9e',
    instantDesc:
      'Propuls\u00e9 par WebAssembly pour des performances quasi natives. Convertissez des centaines d\u2019images en quelques secondes.',
    privateTitle: '100% Priv\u00e9',
    privateDesc:
      'Tout le traitement s\u2019effectue localement dans votre navigateur. Aucun fichier n\u2019est jamais envoy\u00e9 vers un serveur.',
    freeTitle: 'Enti\u00e8rement gratuit',
    freeDesc:
      'Pas d\u2019inscription, pas de filigrane, pas de limite de fichiers. Ouvrez et convertissez.',
    howToPrefix: 'Comment ',
    faqTitle: 'Questions fr\u00e9quentes',
    compressImages: 'Compresser les images',
    sizeIncreaseTip: 'Le format cible stocke plus de donn\u00e9es que l\u2019original, ce qui produit un fichier plus volumineux. C\u2019est normal et n\u2019affecte pas la qualit\u00e9.',
    sizeIncreaseTipPng: 'PNG est sans perte et pr\u00e9serve chaque pixel. En convertissant depuis un format avec perte (comme JPG), les donn\u00e9es compl\u00e8tes sont beaucoup plus volumineuses. Fichier plus grand, mais z\u00e9ro perte de qualit\u00e9.',
    sizeIncreaseTipJpg: 'Le fichier source est d\u00e9j\u00e0 tr\u00e8s compress\u00e9. Le r\u00e9encodage \u00e0 la qualit\u00e9 actuelle ne peut pas le r\u00e9duire davantage. Essayez de baisser le curseur de qualit\u00e9.',
    sizeIncreaseTipWebp: 'Le fichier source est d\u00e9j\u00e0 bien optimis\u00e9. La conversion en WebP \u00e0 la qualit\u00e9 actuelle ne peut pas le r\u00e9duire. Essayez de baisser le curseur de qualit\u00e9.',
    sizeIncreaseTipAvif: 'Le fichier source est d\u00e9j\u00e0 un format compress\u00e9 compact. La conversion en AVIF n\u00e9cessite le r\u00e9encodage complet par le codec AV1 du navigateur, dont le surco\u00fbt est important pour les petits fichiers. AVIF est id\u00e9al pour les grandes photos haute r\u00e9solution. Consid\u00e9rez WebP ou JPG pour cette image.',
    resetDefaults: 'Réinitialiser',
    sizeIncreaseFaqQ: 'Pourquoi le fichier de sortie est-il parfois plus grand que l\'original ?',
    sizeIncreaseFaqA: 'Cela peut arriver pour plusieurs raisons : (1) Convertir d\'un format avec perte (JPG, WebP) vers un format sans perte (PNG) préserve chaque pixel, ce qui produit naturellement un fichier plus grand en échange de zéro perte de qualité. (2) AVIF utilise le codec AV1 qui a un surcoût pour les petites images — il excelle pour les photos haute résolution avec 20–50% de meilleure compression que JPEG. (3) Si la source est déjà très compressée, le réencodage ne peut pas réduire davantage. PicShift utilise des encodeurs WASM de pointe (MozJPEG, OxiPNG, libwebp) pour produire la sortie la plus compacte possible. En mode compression, PicShift conserve automatiquement le fichier original si la compression augmente la taille.',
    comparePrev: 'Précédent',
    compareNext: 'Suivant',
  },

  de: {
    dropDrag: 'Bilder hierher ziehen und ablegen',
    dropClick: 'oder klicken zum Durchsuchen, oder einf\u00fcgen (Ctrl+V)',
    dropFormats: 'Unterst\u00fctzt HEIC, WebP, PNG, JPG, AVIF, BMP',
    dropAnywhere: 'Bilder \u00fcberall ablegen',
    clearAll: 'Alle l\u00f6schen',
    outputLabel: 'Ausgabeformat',
    qualityLabel: 'Qualit\u00e4t',
    preparing: 'Vergleich wird vorbereitet...',
    queued: 'Warteschlange',
    converting: 'Konvertierung l\u00e4uft',
    original: 'Original',
    converted: 'Konvertiert',
    downloadAll: 'Alle als ZIP herunterladen',
    filesConverted: '{completed} von {total} konvertiert & optimiert',
    filesCompressed: '{completed} von {total} komprimiert',
    allTools: 'Alle Werkzeuge',
    navPrivacy: 'Datenschutz',
    copyright: '\u00a9 2026 PicShift. Alle Rechte vorbehalten.',
    privacyMessage: 'Ihre Bilder verlassen nie Ihr Ger\u00e4t.',
    privacyPolicy: 'Datenschutzerkl\u00e4rung',
    privacyBadge: '100% Privat \u2014 Kein Upload',
    heroTitle1: 'Bilder sofort konvertieren',
    heroTitle2: 'Dateien verlassen nie Ihr Ger\u00e4t',
    heroSubtitle: 'HEIC, WebP, PNG, JPG, AVIF \u2014 sofort konvertieren, ohne Upload',
    allConverters: 'Alle Konverter',
    instantTitle: 'Sofortige Konvertierung',
    instantDesc:
      'Angetrieben durch WebAssembly f\u00fcr nahezu native Leistung. Hunderte Bilder in Sekunden konvertieren.',
    privateTitle: '100% Privat',
    privateDesc:
      'Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Keine Dateien werden jemals auf einen Server hochgeladen.',
    freeTitle: 'Komplett kostenlos',
    freeDesc:
      'Keine Anmeldung, keine Wasserzeichen, keine Dateilimits. Einfach \u00f6ffnen und konvertieren.',
    howToPrefix: 'So funktioniert: ',
    faqTitle: 'H\u00e4ufig gestellte Fragen',
    compressImages: 'Bilder komprimieren',
    sizeIncreaseTip: 'Das Zielformat speichert mehr Daten als das Original, wodurch die Datei gr\u00f6\u00dfer wird. Das ist normal und beeintr\u00e4chtigt nicht die Qualit\u00e4t.',
    sizeIncreaseTipPng: 'PNG ist verlustfrei und bewahrt jeden Pixel. Bei Konvertierung von einem verlustbehafteten Format (wie JPG) sind die vollst\u00e4ndigen Pixeldaten viel gr\u00f6\u00dfer als die komprimierten Originaldaten. Gr\u00f6\u00dfere Datei, aber null Qualit\u00e4tsverlust.',
    sizeIncreaseTipJpg: 'Die Quelldatei ist bereits stark komprimiert. Neukodierung bei aktueller Qualit\u00e4t kann sie nicht weiter verkleinern. Versuchen Sie, den Qualit\u00e4tsregler nach unten zu ziehen.',
    sizeIncreaseTipWebp: 'Die Quelldatei ist bereits gut optimiert. Konvertierung zu WebP bei aktueller Qualit\u00e4t kann sie nicht weiter verkleinern. Versuchen Sie, den Qualit\u00e4tsregler nach unten zu ziehen.',
    sizeIncreaseTipAvif: 'Die Quelldatei ist bereits ein kompaktes komprimiertes Format. Die Konvertierung zu AVIF erfordert eine vollst\u00e4ndige Neukodierung durch den AV1-Encoder des Browsers, dessen Overhead bei kleinen oder bereits komprimierten Dateien erheblich ist. AVIF eignet sich am besten f\u00fcr gro\u00dfe, hochaufl\u00f6sende Fotos. Erw\u00e4gen Sie WebP oder JPG f\u00fcr dieses Bild.',
    resetDefaults: 'Zurücksetzen',
    sizeIncreaseFaqQ: 'Warum ist die Ausgabedatei manchmal größer als das Original?',
    sizeIncreaseFaqA: 'Dies kann mehrere Gründe haben: (1) Bei der Konvertierung von einem verlustbehafteten Format (JPG, WebP) in ein verlustfreies Format (PNG) wird jeder Pixel bewahrt, was natürlich eine größere Datei ergibt — bei null Qualitätsverlust. (2) AVIF verwendet den AV1-Codec, der bei kleinen Bildern Overhead hat — bei hochauflösenden Fotos erreicht er 20–50% bessere Kompression als JPEG. (3) Wenn die Quelle bereits stark komprimiert ist, kann Neukodierung die Größe nicht weiter reduzieren. PicShift verwendet führende WASM-Encoder (MozJPEG, OxiPNG, libwebp) für die kleinstmögliche Ausgabe. Im Komprimierungsmodus behält PicShift automatisch die Originaldatei bei, wenn die Komprimierung die Größe erhöhen würde.',
    comparePrev: 'Vorheriges',
    compareNext: 'Nächstes',
  },

  ja: {
    dropDrag: '\u753b\u50cf\u3092\u3053\u3053\u306b\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7',
    dropClick:
      '\u307e\u305f\u306f\u30af\u30ea\u30c3\u30af\u3057\u3066\u53c2\u7167\u3001\u307e\u305f\u306f\u8cbc\u308a\u4ed8\u3051 (Ctrl+V)',
    dropFormats: 'HEIC, WebP, PNG, JPG, AVIF, BMP \u306b\u5bfe\u5fdc',
    dropAnywhere:
      '\u3069\u3053\u306b\u3067\u3082\u753b\u50cf\u3092\u30c9\u30ed\u30c3\u30d7',
    clearAll: '\u3059\u3079\u3066\u30af\u30ea\u30a2',
    outputLabel: '\u51fa\u529b\u5f62\u5f0f',
    qualityLabel: '\u54c1\u8cea',
    preparing: '\u6bd4\u8f03\u3092\u6e96\u5099\u4e2d...',
    queued: '\u5f85\u6a5f\u4e2d',
    converting: '\u5909\u63db\u4e2d',
    original: '\u30aa\u30ea\u30b8\u30ca\u30eb',
    converted: '\u5909\u63db\u5f8c',
    downloadAll:
      '\u3059\u3079\u3066 ZIP \u3067\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9',
    filesConverted:
      '{total} 中 {completed} 件変換・最適化済み',
    filesCompressed:
      '{total} 中 {completed} 件圧縮済み',
    allTools: '\u3059\u3079\u3066\u306e\u30c4\u30fc\u30eb',
    navPrivacy: '\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc',
    copyright: '\u00a9 2026 PicShift. All rights reserved.',
    privacyMessage:
      '\u753b\u50cf\u306f\u304a\u4f7f\u3044\u306e\u30c7\u30d0\u30a4\u30b9\u304b\u3089\u51fa\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002',
    privacyPolicy:
      '\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc',
    privacyBadge:
      '100% \u30d7\u30e9\u30a4\u30d9\u30fc\u30c8 \u2014 \u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e0d\u8981',
    heroTitle1: '\u753b\u50cf\u3092\u77ac\u6642\u306b\u5909\u63db',
    heroTitle2: 'ファイルはデバイスから出ません',
    heroSubtitle: 'HEIC, WebP, PNG, JPG, AVIF \u2014 \u77ac\u6642\u306b\u5909\u63db\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u4e0d\u8981',
    allConverters:
      '\u3059\u3079\u3066\u306e\u30b3\u30f3\u30d0\u30fc\u30bf\u30fc',
    instantTitle: '\u5373\u6642\u5909\u63db',
    instantDesc:
      'WebAssembly \u306b\u3088\u308b\u30cd\u30a4\u30c6\u30a3\u30d6\u306b\u8fd1\u3044\u6027\u80fd\u3002\u6570\u79d2\u3067\u6570\u767e\u679a\u306e\u753b\u50cf\u3092\u5909\u63db\u3002',
    privateTitle: '100% \u30d7\u30e9\u30a4\u30d9\u30fc\u30c8',
    privateDesc:
      '\u3059\u3079\u3066\u306e\u51e6\u7406\u306f\u30d6\u30e9\u30a6\u30b6\u5185\u3067\u30ed\u30fc\u30ab\u30eb\u306b\u5b9f\u884c\u3002\u30d5\u30a1\u30a4\u30eb\u304c\u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002',
    freeTitle: '\u5b8c\u5168\u7121\u6599',
    freeDesc:
      '\u767b\u9332\u4e0d\u8981\u3001\u900f\u304b\u3057\u306a\u3057\u3001\u30d5\u30a1\u30a4\u30eb\u5236\u9650\u306a\u3057\u3002\u958b\u3044\u3066\u3059\u3050\u5909\u63db\u3002',
    howToPrefix: '\u4f7f\u3044\u65b9\uff1a',
    faqTitle: '\u3088\u304f\u3042\u308b\u8cea\u554f',
    compressImages: '\u753b\u50cf\u3092\u5727\u7e2e',
    sizeIncreaseTip: '\u5909\u63db\u5148\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u5143\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3088\u308a\u591a\u304f\u306e\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u3001\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u304c\u5927\u304d\u304f\u306a\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u6b63\u5e38\u3067\u3001\u753b\u8cea\u306b\u306f\u5f71\u97ff\u3057\u307e\u305b\u3093\u3002',
    sizeIncreaseTipPng: 'PNG は可逆形式で全ピクセルを保持します。非可逆形式（JPG など）から変換すると、完全なピクセルデータは元の圧縮データよりはるかに大きくなります。ファイルは大きくなりますが、画質劣化はゼロです。',
    sizeIncreaseTipJpg: '元ファイルはすでに高度に圧縮されています。現在の品質設定では再エンコードしてもこれ以上小さくなりません。品質スライダーを下げてみてください。',
    sizeIncreaseTipWebp: '元ファイルはすでに最適化されています。現在の品質設定での WebP 変換ではこれ以上小さくなりません。品質スライダーを下げてみてください。',
    sizeIncreaseTipAvif: '元ファイルはすでにコンパクトな圧縮形式です。AVIF への変換にはブラウザの AV1 エンコーダによる全ピクセルの再エンコードが必要で、小さいファイルや既に圧縮されたファイルではオーバーヘッドが大きくなります。AVIF は大きな高解像度写真に最適です。この画像には WebP や JPG をお勧めします。',
    resetDefaults: 'リセット',
    sizeIncreaseFaqQ: '出力ファイルが元のファイルより大きくなることがあるのはなぜですか？',
    sizeIncreaseFaqA: 'これにはいくつかの理由があります：(1) 非可逆形式（JPG、WebP）から可逆形式（PNG）に変換すると、すべてのピクセルが保持されるため、ファイルは大きくなりますが画質劣化はゼロです。(2) AVIFはAV1コーデックを使用しており、小さい画像ではオーバーヘッドがあります — 高解像度写真ではJPEGより20〜50%優れた圧縮を実現します。(3) ソースがすでに高度に圧縮されている場合、再エンコードではこれ以上サイズを縮小できません。PicShiftは業界最先端のWASMエンコーダ（MozJPEG、OxiPNG、libwebp）を使用し、選択した品質で最小の出力を生成します。圧縮モードでは、圧縮によりサイズが増加する場合、自動的に元のファイルを保持します。',
    comparePrev: '前へ',
    compareNext: '次へ',
  },

  ko: {
    dropDrag:
      '\uc5ec\uae30\uc5d0 \uc774\ubbf8\uc9c0\ub97c \ub04c\uc5b4\ub2e4 \ub193\uc73c\uc138\uc694',
    dropClick:
      '\ub610\ub294 \ud074\ub9ad\ud558\uc5ec \ucc3e\uc544\ubcf4\uae30, \ub610\ub294 \ubd99\uc5ec\ub123\uae30 (Ctrl+V)',
    dropFormats: 'HEIC, WebP, PNG, JPG, AVIF, BMP \uc9c0\uc6d0',
    dropAnywhere:
      '\uc5b4\ub514\uc5d0\ub098 \uc774\ubbf8\uc9c0\ub97c \ub193\uc73c\uc138\uc694',
    clearAll: '\ubaa8\ub450 \uc9c0\uc6b0\uae30',
    outputLabel: '\ucd9c\ub825 \ud615\uc2dd',
    qualityLabel: '\ud488\uc9c8',
    preparing: '\ube44\uad50 \uc900\ube44 \uc911...',
    queued: '\ub300\uae30 \uc911',
    converting: '\ubcc0\ud658 \uc911',
    original: '\uc6d0\ubcf8',
    converted: '\ubcc0\ud658\ub428',
    downloadAll: '\ubaa8\ub450 ZIP\uc73c\ub85c \ub2e4\uc6b4\ub85c\ub4dc',
    filesConverted:
      '{total} 중 {completed} 변환 및 최적화 완료',
    filesCompressed:
      '{total} 중 {completed} 압축 완료',
    allTools: '\ubaa8\ub4e0 \ub3c4\uad6c',
    navPrivacy: '\uac1c\uc778\uc815\ubcf4',
    copyright: '\u00a9 2026 PicShift. All rights reserved.',
    privacyMessage:
      '\uc774\ubbf8\uc9c0\ub294 \uadc0\ud558\uc758 \uae30\uae30\uc5d0\uc11c \ubc97\uc5b4\ub098\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
    privacyPolicy:
      '\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\uc815\ucc45',
    privacyBadge:
      '100% \ube44\uacf5\uac1c \u2014 \uc5c5\ub85c\ub4dc \uc5c6\uc74c',
    heroTitle1:
      '\uc774\ubbf8\uc9c0\ub97c \uc989\uc2dc \ubcc0\ud658',
    heroTitle2: '\ud30c\uc77c\uc774 \uae30\uae30\ub97c \ub5a0\ub098\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4',
    heroSubtitle: 'HEIC, WebP, PNG, JPG, AVIF \u2014 \uc989\uc2dc \ubcc0\ud658, \uc5c5\ub85c\ub4dc \uc5c6\uc74c',
    allConverters: '\ubaa8\ub4e0 \ubcc0\ud658\uae30',
    instantTitle: '\uc989\uc2dc \ubcc0\ud658',
    instantDesc:
      'WebAssembly \uae30\ubc18\uc758 \ub124\uc774\ud2f0\ube0c\uc5d0 \uac00\uae4c\uc6b4 \uc131\ub2a5. \uc218\ubc31 \uc7a5\uc758 \uc774\ubbf8\uc9c0\ub97c \uba87 \ucd08 \ub9cc\uc5d0 \ubcc0\ud658.',
    privateTitle: '100% \ube44\uacf5\uac1c',
    privateDesc:
      '\ubaa8\ub4e0 \ucc98\ub9ac\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ub85c\uceec\ub85c \uc218\ud589\ub429\ub2c8\ub2e4. \ud30c\uc77c\uc774 \uc11c\ubc84\ub85c \uc5c5\ub85c\ub4dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
    freeTitle: '\uc644\uc804 \ubb34\ub8cc',
    freeDesc:
      '\ud68c\uc6d0\uac00\uc785 \uc5c6\uc74c, \uc6cc\ud130\ub9c8\ud06c \uc5c6\uc74c, \ud30c\uc77c \uc81c\ud55c \uc5c6\uc74c. \uc5f4\uace0 \ubc14\ub85c \ubcc0\ud658\ud558\uc138\uc694.',
    howToPrefix: '\uc0ac\uc6a9\ubc95: ',
    faqTitle: '\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38',
    compressImages: '\uc774\ubbf8\uc9c0 \uc555\ucd95',
    sizeIncreaseTip: '\ub300\uc0c1 \ud615\uc2dd\uc774 \uc6d0\ubcf8\ubcf4\ub2e4 \ub354 \ub9ce\uc740 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ubbc0\ub85c \ud30c\uc77c\uc774 \ucee4\uc9d1\ub2c8\ub2e4. \uc774\ub294 \uc815\uc0c1\uc774\uba70 \ud654\uc9c8\uc5d0\ub294 \uc601\ud5a5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.',
    sizeIncreaseTipPng: 'PNG는 무손실 형식으로 모든 픽셀을 보존합니다. 손실 형식(JPG 등)에서 변환하면 전체 픽셀 데이터가 원본 압축 데이터보다 훨씬 큽니다. 파일은 커지지만 품질 손실은 제로입니다.',
    sizeIncreaseTipJpg: '원본 파일이 이미 높은 압축률입니다. 현재 품질 설정으로는 더 줄일 수 없습니다. 품질 슬라이더를 낮춰 보세요.',
    sizeIncreaseTipWebp: '원본 파일이 이미 잘 최적화되어 있습니다. 현재 품질로 WebP 변환해도 더 줄일 수 없습니다. 품질 슬라이더를 낮춰 보세요.',
    sizeIncreaseTipAvif: '원본 파일이 이미 컴팩트한 압축 형식입니다. AVIF로 변환하려면 브라우저의 AV1 인코더로 모든 픽셀을 재인코딩해야 하며, 작거나 이미 압축된 파일에서는 오버헤드가 큽니다. AVIF는 대형 고해상도 사진에 적합합니다. 이 이미지에는 WebP나 JPG를 권장합니다.',
    resetDefaults: '초기화',
    sizeIncreaseFaqQ: '출력 파일이 원본보다 커지는 이유는 무엇인가요?',
    sizeIncreaseFaqA: '여러 가지 이유가 있을 수 있습니다: (1) 손실 형식(JPG, WebP)에서 무손실 형식(PNG)으로 변환하면 모든 픽셀이 보존되어 파일이 커지지만 품질 손실은 제로입니다. (2) AVIF는 AV1 코덱을 사용하며 작은 이미지에서는 오버헤드가 있습니다 — 고해상도 사진에서 JPEG보다 20~50% 더 나은 압축을 달성합니다. (3) 소스가 이미 고도로 압축된 경우 재인코딩으로 크기를 더 줄일 수 없습니다. PicShift는 업계 최고의 WASM 인코더(MozJPEG, OxiPNG, libwebp)를 사용하여 선택한 품질에서 가능한 가장 작은 출력을 생성합니다. 압축 모드에서는 압축으로 크기가 증가하면 자동으로 원본 파일을 유지합니다.',
    comparePrev: '이전',
    compareNext: '다음',
  },

  pt: {
    dropDrag: 'Arraste e solte suas imagens aqui',
    dropClick: 'ou clique para procurar, ou cole (Ctrl+V)',
    dropFormats: 'Suporta HEIC, WebP, PNG, JPG, AVIF, BMP',
    dropAnywhere: 'Solte as imagens em qualquer lugar',
    clearAll: 'Limpar tudo',
    outputLabel: 'Formato de sa\u00edda',
    qualityLabel: 'Qualidade',
    preparing: 'Preparando compara\u00e7\u00e3o...',
    queued: 'Na fila',
    converting: 'Convertendo',
    original: 'Original',
    converted: 'Convertido',
    downloadAll: 'Baixar tudo como ZIP',
    filesConverted: '{completed} de {total} convertidos e otimizados',
    filesCompressed: '{completed} de {total} comprimidos',
    allTools: 'Todas as ferramentas',
    navPrivacy: 'Privacidade',
    copyright: '\u00a9 2026 PicShift. Todos os direitos reservados.',
    privacyMessage: 'Suas imagens nunca saem do seu dispositivo.',
    privacyPolicy: 'Pol\u00edtica de Privacidade',
    privacyBadge: '100% Privado \u2014 Sem upload',
    heroTitle1: 'Converta imagens instantaneamente',
    heroTitle2: 'Seus arquivos nunca saem do seu dispositivo',
    heroSubtitle: 'HEIC, WebP, PNG, JPG, AVIF \u2014 convers\u00e3o instant\u00e2nea, sem envio',
    allConverters: 'Todos os conversores',
    instantTitle: 'Convers\u00e3o instant\u00e2nea',
    instantDesc:
      'Impulsionado por WebAssembly com desempenho quase nativo. Converta centenas de imagens em segundos.',
    privateTitle: '100% Privado',
    privateDesc:
      'Todo o processamento acontece localmente no seu navegador. Nenhum arquivo \u00e9 enviado para qualquer servidor.',
    freeTitle: 'Completamente gr\u00e1tis',
    freeDesc:
      'Sem cadastro, sem marcas d\u2019\u00e1gua, sem limites de arquivo. Apenas abra e converta.',
    howToPrefix: 'Como ',
    faqTitle: 'Perguntas frequentes',
    compressImages: 'Comprimir imagens',
    sizeIncreaseTip: 'O formato de destino armazena mais dados que o original, resultando em um arquivo maior. Isso \u00e9 normal e n\u00e3o afeta a qualidade.',
    sizeIncreaseTipPng: 'PNG \u00e9 sem perdas e preserva cada pixel. Converter de um formato com perdas (como JPG) significa que os dados completos de pixels s\u00e3o muito maiores que os dados comprimidos originais. Este \u00e9 o custo normal do sem perdas \u2014 arquivo maior, mas zero perda de qualidade.',
    sizeIncreaseTipJpg: 'O arquivo original j\u00e1 est\u00e1 muito comprimido. Recodificar na qualidade atual gera mais dados. Tente reduzir a qualidade.',
    sizeIncreaseTipWebp: 'O arquivo original j\u00e1 est\u00e1 bem otimizado. WebP \u00e9 menor na maioria dos casos, mas arquivos j\u00e1 muito comprimidos podem resistir. Tente reduzir a qualidade.',
    sizeIncreaseTipAvif: 'O arquivo fonte j\u00e1 \u00e9 um formato comprimido compacto. Converter para AVIF requer que o codificador AV1 do navegador recodifique todos os pixels, e sua sobrecarga \u00e9 significativa para arquivos pequenos ou j\u00e1 comprimidos. AVIF funciona melhor com fotos grandes de alta resolu\u00e7\u00e3o. Considere WebP ou JPG para esta imagem.',
    resetDefaults: 'Redefinir',
    sizeIncreaseFaqQ: 'Por que o arquivo de sa\u00edda \u00e0s vezes \u00e9 maior que o original?',
    sizeIncreaseFaqA: 'Isso pode acontecer por v\u00e1rias raz\u00f5es: (1) Converter de um formato com perdas (JPG, WebP) para um formato sem perdas (PNG) preserva cada pixel, o que naturalmente produz um arquivo maior em troca de zero perda de qualidade. (2) AVIF usa o codec AV1, que tem sobrecarga para imagens pequenas \u2014 ele se destaca em fotos de alta resolu\u00e7\u00e3o com 20\u201350% melhor compress\u00e3o que JPEG. (3) Se a fonte j\u00e1 est\u00e1 muito comprimida, recodificar pode n\u00e3o reduzir mais o tamanho. PicShift usa codificadores WASM l\u00edderes (MozJPEG, OxiPNG, libwebp) para produzir a menor sa\u00edda poss\u00edvel. No modo compress\u00e3o, PicShift mant\u00e9m automaticamente o arquivo original quando a compress\u00e3o aumentaria o tamanho.',
    comparePrev: 'Anterior',
    compareNext: 'Próximo',
  },

  ru: {
    dropDrag:
      '\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u044e\u0434\u0430',
    dropClick:
      '\u0438\u043b\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430, \u0438\u043b\u0438 \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 (Ctrl+V)',
    dropFormats:
      '\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 HEIC, WebP, PNG, JPG, AVIF, BMP',
    dropAnywhere:
      '\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 \u043b\u044e\u0431\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
    clearAll:
      '\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0451',
    outputLabel:
      '\u0424\u043e\u0440\u043c\u0430\u0442 \u0432\u044b\u0432\u043e\u0434\u0430',
    qualityLabel: '\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e',
    preparing:
      '\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f...',
    queued: '\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438',
    converting:
      '\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f',
    original: '\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b',
    converted:
      '\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e',
    downloadAll:
      '\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0432\u0441\u0451 \u043a\u0430\u043a ZIP',
    filesConverted:
      '{completed} из {total} конвертировано и оптимизировано',
    filesCompressed:
      '{completed} из {total} сжато',
    allTools:
      '\u0412\u0441\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b',
    navPrivacy:
      '\u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c',
    copyright:
      '\u00a9 2026 PicShift. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.',
    privacyMessage:
      '\u0412\u0430\u0448\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u043e\u043a\u0438\u0434\u0430\u044e\u0442 \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e.',
    privacyPolicy:
      '\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438',
    privacyBadge:
      '100% \u041f\u0440\u0438\u0432\u0430\u0442\u043d\u043e \u2014 \u0411\u0435\u0437 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438',
    heroTitle1:
      '\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439',
    heroTitle2: 'Файлы никогда не покидают ваше устройство',
    heroSubtitle: 'HEIC, WebP, PNG, JPG, AVIF \u2014 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f, \u0431\u0435\u0437 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438',
    allConverters:
      '\u0412\u0441\u0435 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440\u044b',
    instantTitle:
      '\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f',
    instantDesc:
      '\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 WebAssembly \u0441 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e, \u0431\u043b\u0438\u0437\u043a\u043e\u0439 \u043a \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0439. \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u043e\u0442\u043d\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u044b.',
    privateTitle:
      '100% \u041f\u0440\u0438\u0432\u0430\u0442\u043d\u043e',
    privateDesc:
      '\u0412\u0441\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u0432 \u0432\u0430\u0448\u0435\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435. \u0424\u0430\u0439\u043b\u044b \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440.',
    freeTitle:
      '\u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e',
    freeDesc:
      '\u0411\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u0431\u0435\u0437 \u0432\u043e\u0434\u044f\u043d\u044b\u0445 \u0437\u043d\u0430\u043a\u043e\u0432, \u0431\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439. \u041f\u0440\u043e\u0441\u0442\u043e \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0438 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435.',
    howToPrefix: '\u041a\u0430\u043a ',
    faqTitle:
      '\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b',
    compressImages:
      '\u0421\u0436\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f',
    sizeIncreaseTip: '\u0426\u0435\u043b\u0435\u0432\u043e\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0445\u0440\u0430\u043d\u0438\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u0447\u0435\u043c \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0444\u0430\u0439\u043b \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0431\u043e\u043b\u044c\u0448\u0435. \u042d\u0442\u043e \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0438 \u043d\u0435 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e.',
    sizeIncreaseTipPng: 'PNG \u2014 \u0444\u043e\u0440\u043c\u0430\u0442 \u0431\u0435\u0437 \u043f\u043e\u0442\u0435\u0440\u044c, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0449\u0438\u0439 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0438\u043a\u0441\u0435\u043b\u044c. \u041f\u0440\u0438 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438 \u0438\u0437 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0441 \u043f\u043e\u0442\u0435\u0440\u044f\u043c\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, JPG) \u043f\u043e\u043b\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u042d\u0442\u043e \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u043f\u043e\u0442\u0435\u0440\u044c \u2014 \u0444\u0430\u0439\u043b \u0431\u043e\u043b\u044c\u0448\u0435, \u043d\u043e \u043f\u043e\u0442\u0435\u0440\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043d\u0443\u043b\u0435\u0432\u0430\u044f.',
    sizeIncreaseTipJpg: '\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0443\u0436\u0435 \u0441\u0438\u043b\u044c\u043d\u043e \u0441\u0436\u0430\u0442. \u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u0438\u0437\u0438\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e.',
    sizeIncreaseTipWebp: '\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0443\u0436\u0435 \u0445\u043e\u0440\u043e\u0448\u043e \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d. WebP \u043e\u0431\u044b\u0447\u043d\u043e \u043c\u0435\u043d\u044c\u0448\u0435, \u043d\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u0441\u0436\u0430\u0442\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u043c\u043e\u0433\u0443\u0442 \u043d\u0435 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c\u0441\u044f. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u0438\u0437\u0438\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e.',
    sizeIncreaseTipAvif: '\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0443\u0436\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u044b\u043c \u0441\u0436\u0430\u0442\u044b\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u043c. \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0432 AVIF \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 AV1-\u043a\u043e\u0434\u0435\u0440 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b \u0434\u043b\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0438\u043b\u0438 \u0443\u0436\u0435 \u0441\u0436\u0430\u0442\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432. AVIF \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f. \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 WebP \u0438\u043b\u0438 JPG \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f.',
    resetDefaults: '\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c',
    sizeIncreaseFaqQ: '\u041f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 \u0444\u0430\u0439\u043b \u0438\u043d\u043e\u0433\u0434\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u0430?',
    sizeIncreaseFaqA: '\u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0442\u0438 \u043f\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c: (1) \u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0438\u0437 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0441 \u043f\u043e\u0442\u0435\u0440\u044f\u043c\u0438 (JPG, WebP) \u0432 \u0444\u043e\u0440\u043c\u0430\u0442 \u0431\u0435\u0437 \u043f\u043e\u0442\u0435\u0440\u044c (PNG) \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0438\u043a\u0441\u0435\u043b\u044c, \u0447\u0442\u043e \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0434\u0430\u0451\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u0439 \u0444\u0430\u0439\u043b \u2014 \u0432 \u043e\u0431\u043c\u0435\u043d \u043d\u0430 \u043d\u0443\u043b\u0435\u0432\u0443\u044e \u043f\u043e\u0442\u0435\u0440\u044e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430. (2) AVIF \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043a\u043e\u0434\u0435\u043a AV1 \u0441 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u043c\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u043c\u0438 \u0434\u043b\u044f \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u2014 \u0434\u043b\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043e\u043d \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043d\u0430 20\u201350% \u043b\u0443\u0447\u0448\u0435\u0435 \u0441\u0436\u0430\u0442\u0438\u0435, \u0447\u0435\u043c JPEG. (3) \u0415\u0441\u043b\u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0443\u0436\u0435 \u0441\u0438\u043b\u044c\u043d\u043e \u0441\u0436\u0430\u0442, \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440. PicShift \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432\u0435\u0434\u0443\u0449\u0438\u0435 WASM-\u043a\u043e\u0434\u0435\u0440\u044b (MozJPEG, OxiPNG, libwebp) \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0433\u043e \u0432\u044b\u0445\u043e\u0434\u0430. \u0412 \u0440\u0435\u0436\u0438\u043c\u0435 \u0441\u0436\u0430\u0442\u0438\u044f PicShift \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b, \u0435\u0441\u043b\u0438 \u0441\u0436\u0430\u0442\u0438\u0435 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440.',
    comparePrev: 'Предыдущее',
    compareNext: 'Следующее',
  },

  ar: {
    dropDrag:
      '\u0627\u0633\u062d\u0628 \u0648\u0623\u0641\u0644\u062a \u0627\u0644\u0635\u0648\u0631 \u0647\u0646\u0627',
    dropClick:
      '\u0623\u0648 \u0627\u0646\u0642\u0631 \u0644\u0644\u062a\u0635\u0641\u062d\u060c \u0623\u0648 \u0627\u0644\u0635\u0642 (Ctrl+V)',
    dropFormats:
      '\u064a\u062f\u0639\u0645 HEIC, WebP, PNG, JPG, AVIF, BMP',
    dropAnywhere:
      '\u0623\u0641\u0644\u062a \u0627\u0644\u0635\u0648\u0631 \u0641\u064a \u0623\u064a \u0645\u0643\u0627\u0646',
    clearAll: '\u0645\u0633\u062d \u0627\u0644\u0643\u0644',
    outputLabel:
      '\u0635\u064a\u063a\u0629 \u0627\u0644\u0625\u062e\u0631\u0627\u062c',
    qualityLabel: '\u0627\u0644\u062c\u0648\u062f\u0629',
    preparing:
      '\u062c\u0627\u0631\u064d \u062a\u062d\u0636\u064a\u0631 \u0627\u0644\u0645\u0642\u0627\u0631\u0646\u0629...',
    queued:
      '\u0641\u064a \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631',
    converting:
      '\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0648\u064a\u0644',
    original: '\u0627\u0644\u0623\u0635\u0644\u064a',
    converted:
      '\u0627\u0644\u0645\u064f\u062d\u0648\u0651\u064e\u0644',
    downloadAll:
      '\u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u0643\u0644 \u0643\u0645\u0644\u0641 ZIP',
    filesConverted:
      'تم تحويل وتحسين {completed} من {total}',
    filesCompressed:
      'تم ضغط {completed} من {total}',
    allTools:
      '\u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u062f\u0648\u0627\u062a',
    navPrivacy:
      '\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629',
    copyright:
      '\u00a9 2026 PicShift. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.',
    privacyMessage:
      '\u0635\u0648\u0631\u0643 \u0644\u0627 \u062a\u063a\u0627\u062f\u0631 \u062c\u0647\u0627\u0632\u0643 \u0623\u0628\u062f\u064b\u0627.',
    privacyPolicy:
      '\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629',
    privacyBadge:
      '100% \u062e\u0627\u0635 \u2014 \u0628\u062f\u0648\u0646 \u0631\u0641\u0639',
    heroTitle1:
      '\u062d\u0648\u0651\u0644 \u0627\u0644\u0635\u0648\u0631 \u0641\u0648\u0631\u064b\u0627',
    heroTitle2: 'ملفاتك لا تغادر جهازك أبدًا',
    heroSubtitle: 'HEIC, WebP, PNG, JPG, AVIF \u2014 \u062a\u062d\u0648\u064a\u0644 \u0641\u0648\u0631\u064a\u060c \u0628\u062f\u0648\u0646 \u0631\u0641\u0639',
    allConverters:
      '\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u062d\u0648\u0651\u0644\u0627\u062a',
    instantTitle:
      '\u062a\u062d\u0648\u064a\u0644 \u0641\u0648\u0631\u064a',
    instantDesc:
      '\u0645\u062f\u0639\u0648\u0645 \u0628\u062a\u0642\u0646\u064a\u0629 WebAssembly \u0628\u0623\u062f\u0627\u0621 \u0642\u0631\u064a\u0628 \u0645\u0646 \u0627\u0644\u0623\u0635\u0644\u064a. \u062d\u0648\u0651\u0644 \u0645\u0626\u0627\u062a \u0627\u0644\u0635\u0648\u0631 \u0641\u064a \u062b\u0648\u0627\u0646\u064d.',
    privateTitle:
      '100% \u062e\u0627\u0635',
    privateDesc:
      '\u062a\u062a\u0645 \u062c\u0645\u064a\u0639 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0645\u062d\u0644\u064a\u064b\u0627 \u0641\u064a \u0645\u062a\u0635\u0641\u062d\u0643. \u0644\u0627 \u064a\u062a\u0645 \u0631\u0641\u0639 \u0623\u064a \u0645\u0644\u0641\u0627\u062a \u0625\u0644\u0649 \u0623\u064a \u062e\u0627\u062f\u0645.',
    freeTitle:
      '\u0645\u062c\u0627\u0646\u064a \u062a\u0645\u0627\u0645\u064b\u0627',
    freeDesc:
      '\u0628\u062f\u0648\u0646 \u062a\u0633\u062c\u064a\u0644\u060c \u0628\u062f\u0648\u0646 \u0639\u0644\u0627\u0645\u0627\u062a \u0645\u0627\u0626\u064a\u0629\u060c \u0628\u062f\u0648\u0646 \u0642\u064a\u0648\u062f. \u0627\u0641\u062a\u062d \u0648\u062d\u0648\u0651\u0644 \u0641\u0642\u0637.',
    howToPrefix: '\u0643\u064a\u0641\u064a\u0629 ',
    faqTitle:
      '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
    compressImages:
      '\u0636\u063a\u0637 \u0627\u0644\u0635\u0648\u0631',
    sizeIncreaseTip: '\u0627\u0644\u062a\u0646\u0633\u064a\u0642 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641 \u064a\u062e\u0632\u0651\u0646 \u0628\u064a\u0627\u0646\u0627\u062a \u0623\u0643\u062b\u0631 \u0645\u0646 \u0627\u0644\u0623\u0635\u0644\u064a\u060c \u0645\u0645\u0627 \u064a\u0624\u062f\u064a \u0625\u0644\u0649 \u0645\u0644\u0641 \u0623\u0643\u0628\u0631. \u0647\u0630\u0627 \u0637\u0628\u064a\u0639\u064a \u0648\u0644\u0627 \u064a\u0624\u062b\u0631 \u0639\u0644\u0649 \u0627\u0644\u062c\u0648\u062f\u0629.',
    sizeIncreaseTipPng: 'PNG تنسيق بدون فقدان يحافظ على كل بكسل. عند التحويل من تنسيق مع فقدان (مثل JPG)، تكون بيانات البكسل الكاملة أكبر بكثير من البيانات المضغوطة الأصلية. هذه هي التكلفة الطبيعية للتنسيق بدون فقدان — ملف أكبر، لكن فقدان الجودة صفر.',
    sizeIncreaseTipJpg: 'الملف المصدر مضغوط بالفعل بشكل كبير. إعادة الترميز بالجودة الحالية تُنتج بيانات أكثر. جرّب تقليل الجودة.',
    sizeIncreaseTipWebp: 'الملف المصدر محسّن بالفعل. WebP أصغر في معظم الحالات، لكن الملفات المضغوطة بعمق قد تقاوم مزيداً من التقليص. جرّب تقليل الجودة.',
    sizeIncreaseTipAvif: 'الملف المصدر بالفعل بتنسيق مضغوط مدمج. التحويل إلى AVIF يتطلب من مشفّر AV1 في المتصفح إعادة ترميز جميع البكسلات، والتكلفة الإضافية كبيرة للملفات الصغيرة أو المضغوطة بالفعل. AVIF يعمل بشكل أفضل مع الصور الكبيرة عالية الدقة. جرّب WebP أو JPG لهذه الصورة.',
    resetDefaults: 'إعادة تعيين',
    sizeIncreaseFaqQ: 'لماذا يكون ملف الإخراج أحياناً أكبر من الأصلي؟',
    sizeIncreaseFaqA: 'قد يحدث هذا لعدة أسباب: (1) التحويل من تنسيق مع فقدان (JPG، WebP) إلى تنسيق بدون فقدان (PNG) يحافظ على كل بكسل، مما ينتج ملفاً أكبر مقابل عدم فقدان الجودة. (2) يستخدم AVIF برنامج ترميز AV1 مع تكلفة إضافية للصور الصغيرة — يتفوق في الصور عالية الدقة بضغط أفضل بنسبة 20–50% من JPEG. (3) إذا كان المصدر مضغوطاً بالفعل بشكل كبير، فإن إعادة الترميز قد لا تقلل الحجم أكثر. يستخدم PicShift مشفّرات WASM رائدة (MozJPEG، OxiPNG، libwebp) لإنتاج أصغر مخرجات ممكنة. في وضع الضغط، يحتفظ PicShift تلقائياً بالملف الأصلي عندما يزيد الضغط من الحجم.',
    comparePrev: 'السابق',
    compareNext: 'التالي',
  },

  it: {
    dropDrag: 'Trascina e rilascia le tue immagini qui',
    dropClick: 'o clicca per sfogliare, o incolla (Ctrl+V)',
    dropFormats: 'Supporta HEIC, WebP, PNG, JPG, AVIF, BMP',
    dropAnywhere: 'Rilascia le immagini ovunque',
    clearAll: 'Cancella tutto',
    outputLabel: 'Formato di output',
    qualityLabel: 'Qualit\u00e0',
    preparing: 'Preparazione confronto...',
    queued: 'In coda',
    converting: 'Conversione in corso',
    original: 'Originale',
    converted: 'Convertito',
    downloadAll: 'Scarica tutto come ZIP',
    filesConverted: '{completed} di {total} convertiti e ottimizzati',
    filesCompressed: '{completed} di {total} compressi',
    allTools: 'Tutti gli strumenti',
    navPrivacy: 'Privacy',
    copyright: '\u00a9 2026 PicShift. Tutti i diritti riservati.',
    privacyMessage: 'Le tue immagini non lasciano mai il tuo dispositivo.',
    privacyPolicy: 'Informativa sulla privacy',
    privacyBadge: '100% Privato \u2014 Nessun caricamento',
    heroTitle1: 'Converti le immagini istantaneamente',
    heroTitle2: 'I file non lasciano mai il tuo dispositivo',
    heroSubtitle: 'HEIC, WebP, PNG, JPG, AVIF \u2014 conversione istantanea, senza caricare nulla',
    allConverters: 'Tutti i convertitori',
    instantTitle: 'Conversione istantanea',
    instantDesc:
      'Basato su WebAssembly per prestazioni quasi native. Converti centinaia di immagini in pochi secondi.',
    privateTitle: '100% Privato',
    privateDesc:
      'Tutta l\u2019elaborazione avviene localmente nel tuo browser. Nessun file viene mai caricato su alcun server.',
    freeTitle: 'Completamente gratuito',
    freeDesc:
      'Nessuna registrazione, nessun watermark, nessun limite di file. Apri e converti.',
    howToPrefix: 'Come ',
    faqTitle: 'Domande frequenti',
    compressImages: 'Comprimi immagini',
    sizeIncreaseTip: 'Il formato di destinazione memorizza pi\u00f9 dati dell\u2019originale, il che produce un file pi\u00f9 grande. \u00c8 normale e non influisce sulla qualit\u00e0.',
    sizeIncreaseTipPng: 'PNG \u00e8 senza perdita e preserva ogni pixel. Convertendo da un formato con perdita (come JPG), i dati completi dei pixel sono molto pi\u00f9 grandi dei dati compressi originali. Questo \u00e8 il costo normale del senza perdita \u2014 file pi\u00f9 grande, ma zero perdita di qualit\u00e0.',
    sizeIncreaseTipJpg: 'Il file originale \u00e8 gi\u00e0 molto compresso. La ricodifica alla qualit\u00e0 attuale genera pi\u00f9 dati. Prova a ridurre la qualit\u00e0.',
    sizeIncreaseTipWebp: 'Il file originale \u00e8 gi\u00e0 ben ottimizzato. WebP \u00e8 pi\u00f9 piccolo nella maggior parte dei casi, ma file gi\u00e0 molto compressi possono resistere. Prova a ridurre la qualit\u00e0.',
    sizeIncreaseTipAvif: 'Il file sorgente \u00e8 gi\u00e0 un formato compresso compatto. La conversione in AVIF richiede che il codificatore AV1 del browser ricodifichi tutti i pixel, e il suo overhead \u00e8 significativo per file piccoli o gi\u00e0 compressi. AVIF funziona meglio con foto grandi ad alta risoluzione. Considera WebP o JPG per questa immagine.',
    resetDefaults: 'Ripristina',
    sizeIncreaseFaqQ: 'Perch\u00e9 il file di output \u00e8 a volte pi\u00f9 grande dell\'originale?',
    sizeIncreaseFaqA: 'Questo pu\u00f2 accadere per diversi motivi: (1) Convertire da un formato con perdita (JPG, WebP) a un formato senza perdita (PNG) preserva ogni pixel, producendo naturalmente un file pi\u00f9 grande in cambio di zero perdita di qualit\u00e0. (2) AVIF usa il codec AV1, che ha overhead per immagini piccole \u2014 eccelle nelle foto ad alta risoluzione con 20\u201350% di compressione migliore rispetto a JPEG. (3) Se la sorgente \u00e8 gi\u00e0 molto compressa, la ricodifica potrebbe non ridurre ulteriormente la dimensione. PicShift usa codificatori WASM leader (MozJPEG, OxiPNG, libwebp) per produrre l\'output pi\u00f9 piccolo possibile. In modalit\u00e0 compressione, PicShift mantiene automaticamente il file originale quando la compressione aumenterebbe la dimensione.',
    comparePrev: 'Precedente',
    compareNext: 'Successivo',
  },
};

export function getUI(lang: Locale): UIStrings {
  return ui[lang] ?? ui.en;
}
