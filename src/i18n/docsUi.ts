import type { Locale } from './config';

interface DocsUiStrings {
  home: string;
  docs: string;
  faq: string;
  relatedPages: string;
  backToToolPages: string;
  allDocs: string;
  picShiftHome: string;
  privacyPolicy: string;
  lastUpdated: string;
  docsGuidesTitle: string;
  docsGuidesDescription: string;
  privacyDocTitle: string;
  privacyDocDescription: string;
  formatDocTitle: string;
  formatDocDescription: string;
  qualityDocTitle: string;
  qualityDocDescription: string;
  sizeIncreaseDocTitle: string;
  sizeIncreaseDocDescription: string;
  whyPicShiftDocTitle: string;
  whyPicShiftDocDescription: string;
  aboutPicShift: string;
}

const DOCS_UI_MAP: Record<Locale, DocsUiStrings> = {
  en: {
    home: 'Home',
    docs: 'Docs',
    faq: 'FAQ',
    relatedPages: 'Related pages',
    backToToolPages: 'Back to tool pages',
    allDocs: 'All docs',
    picShiftHome: 'PicShift Home',
    privacyPolicy: 'Privacy Policy',
    lastUpdated: 'Last updated',
    docsGuidesTitle: 'PicShift Docs — Image Format, Quality and Privacy Guides',
    docsGuidesDescription:
      'Practical guides for picking the right image format (HEIC, WebP, AVIF, PNG, JPG), tuning quality without losing detail, and processing images locally without uploads.',
    privacyDocTitle: 'Privacy and Local Processing',
    privacyDocDescription:
      'How PicShift keeps image processing on-device — what stays in your browser, what we never see, and what limited traffic data analytics receives.',
    formatDocTitle: 'Format Compatibility Guide',
    formatDocDescription:
      'A practical compatibility matrix for JPG, PNG, WebP, HEIC/HEIF and AVIF — what each format does best, where it breaks, and which one to pick for email, social media or e-commerce uploads.',
    qualityDocTitle: 'Image Quality vs File Size',
    qualityDocDescription:
      'How to pick image quality for the best trade-off between visual clarity and file size — what really changes between 70 and 95, when to switch to WebP/AVIF, and how to avoid re-save artifacts.',
    sizeIncreaseDocTitle: 'Why Output Size Can Increase',
    sizeIncreaseDocDescription:
      'Why a converted image can end up larger than the original — how PicShift estimates already-deep compression, how the B/pixel signal is computed, and when re-compressing stops paying off.',
    whyPicShiftDocTitle: 'Why I Built PicShift',
    whyPicShiftDocDescription: 'The motivation behind a local-only, privacy-first image converter and how it is continuously improved.',
    aboutPicShift: 'About PicShift',
  },
  zh: {
    home: '首页',
    docs: '文档',
    faq: '常见问题',
    relatedPages: '相关页面',
    backToToolPages: '返回工具页',
    allDocs: '全部文档',
    picShiftHome: 'PicShift 首页',
    privacyPolicy: '隐私政策',
    lastUpdated: '最后更新',
    docsGuidesTitle: 'PicShift 文档与指南 - 隐私处理、格式选择、压缩优化',
    docsGuidesDescription: '查看关于本地隐私处理、图片格式选择和压缩质量优化的实用指南。了解 PicShift 如何在你的设备上完成所有图片处理，以及如何在画质和文件体积之间找到最佳平衡。',
    privacyDocTitle: '隐私与本地处理',
    privacyDocDescription: '说明 PicShift 如何在设备本地处理图片，以及哪些数据会或不会被使用。',
    formatDocTitle: '格式兼容性指南',
    formatDocDescription: 'JPG、PNG、WebP、HEIC/HEIF、AVIF 的实用兼容性对照。',
    qualityDocTitle: '画质与文件大小',
    qualityDocDescription: '如何设置质量参数以平衡视觉清晰度和文件体积。',
    sizeIncreaseDocTitle: '为什么输出体积会变大',
    sizeIncreaseDocDescription: '说明 PicShift 如何判断深度压缩，以及 B/像素 的计算方式。',
    whyPicShiftDocTitle: '我为什么做 PicShift',
    whyPicShiftDocDescription: '介绍 PicShift 的起点和设计原则——为什么坚持本地处理、不上传文件，以及这款工具是如何在用户反馈中持续迭代的。',
    aboutPicShift: '关于 PicShift',
  },
  'zh-Hant': {
    home: '首頁',
    docs: '文件',
    faq: '常見問題',
    relatedPages: '相關頁面',
    backToToolPages: '返回工具頁',
    allDocs: '全部文件',
    picShiftHome: 'PicShift 首頁',
    privacyPolicy: '隱私政策',
    lastUpdated: '最後更新',
    docsGuidesTitle: 'PicShift 文件與指南 - 隱私處理、格式選擇、壓縮最佳化',
    docsGuidesDescription: '查看關於本機隱私處理、圖片格式選擇與壓縮品質最佳化的實用指南。瞭解 PicShift 如何在你的裝置上完成所有圖片處理，以及如何在畫質與檔案大小之間取得最佳平衡。',
    privacyDocTitle: '隱私與本機處理',
    privacyDocDescription: '說明 PicShift 如何在裝置本機處理圖片，以及哪些資料會或不會被使用。',
    formatDocTitle: '格式相容性指南',
    formatDocDescription: 'JPG、PNG、WebP、HEIC/HEIF、AVIF 的實用相容性對照。',
    qualityDocTitle: '畫質與檔案大小',
    qualityDocDescription: '如何設定品質參數以平衡視覺清晰度與檔案體積。',
    sizeIncreaseDocTitle: '為什麼輸出體積會變大',
    sizeIncreaseDocDescription: '說明 PicShift 如何判斷深度壓縮，以及 B/像素 的計算方式。',
    whyPicShiftDocTitle: '我為什麼做 PicShift',
    whyPicShiftDocDescription: '介紹 PicShift 的起點與設計原則——為什麼堅持本機處理、不上傳檔案，以及這款工具是如何在使用者回饋中持續改進的。',
    aboutPicShift: '關於 PicShift',
  },
  es: {
    home: 'Inicio',
    docs: 'Documentación',
    faq: 'Preguntas frecuentes',
    relatedPages: 'Páginas relacionadas',
    backToToolPages: 'Volver a las herramientas',
    allDocs: 'Toda la documentación',
    picShiftHome: 'Inicio de PicShift',
    privacyPolicy: 'Política de privacidad',
    lastUpdated: 'Última actualización',
    docsGuidesTitle: 'Documentación PicShift — formatos, calidad y privacidad',
    docsGuidesDescription:
      'Guías prácticas para elegir el formato correcto (HEIC, WebP, AVIF, PNG, JPG), ajustar la calidad sin perder detalle y procesar imágenes en local, sin subir archivos.',
    privacyDocTitle: 'Privacidad y procesamiento local',
    privacyDocDescription:
      'Cómo PicShift procesa imágenes en tu dispositivo: qué se queda en tu navegador, qué nunca vemos y qué datos limitados de tráfico recibe la analítica.',
    formatDocTitle: 'Guía de compatibilidad de formatos',
    formatDocDescription:
      'Matriz práctica para JPG, PNG, WebP, HEIC/HEIF y AVIF: qué hace bien cada formato, dónde falla y cuál usar para correos, redes sociales o subidas a tiendas online.',
    qualityDocTitle: 'Calidad de imagen vs tamaño de archivo',
    qualityDocDescription:
      'Cómo elegir la calidad para equilibrar nitidez y peso: qué cambia entre 70 y 95, cuándo conviene WebP/AVIF y cómo evitar artefactos al volver a guardar.',
    sizeIncreaseDocTitle: 'Por qué puede aumentar el tamaño final',
    sizeIncreaseDocDescription:
      'Por qué a veces el archivo convertido pesa más que el original: cómo PicShift detecta la compresión profunda y avisa cuándo volver a comprimir ya no compensa.',
    whyPicShiftDocTitle: 'Por qué creé PicShift',
    whyPicShiftDocDescription: 'La motivación de un convertidor local-only enfocado en privacidad, con mejora continua.',
    aboutPicShift: 'Acerca de PicShift',
  },
  fr: {
    home: 'Accueil',
    docs: 'Documentation',
    faq: 'FAQ',
    relatedPages: 'Pages associées',
    backToToolPages: 'Retour aux outils',
    allDocs: 'Toute la documentation',
    picShiftHome: 'Accueil PicShift',
    privacyPolicy: 'Politique de confidentialité',
    lastUpdated: 'Dernière mise à jour',
    docsGuidesTitle: 'Documentation PicShift — formats, qualité et confidentialité',
    docsGuidesDescription:
      'Guides pratiques pour choisir le format (HEIC, WebP, AVIF, PNG, JPG), régler la qualité et traiter les images en local, sans téléverser de fichiers.',
    privacyDocTitle: 'Confidentialité et traitement local',
    privacyDocDescription:
      'Comment PicShift garde le traitement sur votre appareil : ce qui reste dans le navigateur, ce que nous ne voyons jamais et quelles données de trafic limitées atteignent les analytics.',
    formatDocTitle: 'Guide de compatibilité des formats',
    formatDocDescription:
      'Matrice pratique pour JPG, PNG, WebP, HEIC/HEIF et AVIF : ce que chaque format fait bien, où il bloque et lequel choisir pour un e-mail, un site ou un envoi e-commerce.',
    qualityDocTitle: 'Qualité d\'image vs taille de fichier',
    qualityDocDescription:
      'Comment régler la qualité pour équilibrer netteté et poids : ce qui change entre 70 et 95, quand passer à WebP/AVIF, et éviter les artefacts au ré-enregistrement.',
    sizeIncreaseDocTitle: 'Pourquoi la taille peut augmenter',
    sizeIncreaseDocDescription:
      'Pourquoi le fichier converti pèse parfois plus que l\'original : comment PicShift détecte une compression déjà poussée et signale quand re-compresser n\'apporte plus rien.',
    whyPicShiftDocTitle: 'Pourquoi j\'ai créé PicShift',
    whyPicShiftDocDescription: 'La motivation derrière un convertisseur local-only, axé sur la confidentialité et l\'amélioration continue.',
    aboutPicShift: 'À propos de PicShift',
  },
  de: {
    home: 'Startseite',
    docs: 'Dokumentation',
    faq: 'FAQ',
    relatedPages: 'Verwandte Seiten',
    backToToolPages: 'Zurück zu den Tools',
    allDocs: 'Alle Dokumente',
    picShiftHome: 'PicShift Startseite',
    privacyPolicy: 'Datenschutzrichtlinie',
    lastUpdated: 'Zuletzt aktualisiert',
    docsGuidesTitle: 'PicShift Dokumentation — Bildformate, Qualität und lokale Verarbeitung',
    docsGuidesDescription:
      'Praxisnahe Anleitungen, um das passende Bildformat (HEIC, WebP, AVIF, PNG, JPG) zu wählen, die Qualität ohne Detailverlust zu steuern und Bilder lokal ohne Upload zu verarbeiten.',
    privacyDocTitle: 'Datenschutz und lokale Verarbeitung',
    privacyDocDescription:
      'Wie PicShift die Verarbeitung auf deinem Gerät hält: was im Browser bleibt, was wir nie sehen und welche begrenzten Traffic-Daten in der Analyse landen.',
    formatDocTitle: 'Leitfaden zur Formatkompatibilität',
    formatDocDescription:
      'Praktische Übersicht zu JPG, PNG, WebP, HEIC/HEIF und AVIF: was jedes Format gut kann, wo es scheitert und welches du für E-Mail, Web oder Shop-Uploads wählst.',
    qualityDocTitle: 'Bildqualität vs Dateigröße',
    qualityDocDescription:
      'Wie du die richtige Bildqualität wählst: was sich zwischen 70 und 95 ändert, wann WebP/AVIF lohnt und wie du Artefakte beim erneuten Speichern vermeidest.',
    sizeIncreaseDocTitle: 'Warum die Ausgabegröße steigen kann',
    sizeIncreaseDocDescription:
      'Warum eine konvertierte Datei manchmal größer ist als das Original: wie PicShift bereits stark komprimierte Bilder erkennt und meldet, wann erneutes Komprimieren nichts mehr bringt.',
    whyPicShiftDocTitle: 'Warum ich PicShift gebaut habe',
    whyPicShiftDocDescription: 'Motivation für einen local-only, datenschutzorientierten Konverter mit kontinuierlicher Verbesserung.',
    aboutPicShift: 'Über PicShift',
  },
  ja: {
    home: 'ホーム',
    docs: 'ドキュメント',
    faq: 'よくある質問',
    relatedPages: '関連ページ',
    backToToolPages: 'ツールページに戻る',
    allDocs: 'すべてのドキュメント',
    picShiftHome: 'PicShift ホーム',
    privacyPolicy: 'プライバシーポリシー',
    lastUpdated: '最終更新',
    docsGuidesTitle: 'PicShift ドキュメントとガイド',
    docsGuidesDescription: 'ローカル処理のプライバシー、形式選択、圧縮品質に関する実用ガイドです。',
    privacyDocTitle: 'プライバシーとローカル処理',
    privacyDocDescription: 'PicShift が端末上で画像を処理する方法と、利用される/されないデータを説明します。',
    formatDocTitle: '形式互換ガイド',
    formatDocDescription: 'JPG、PNG、WebP、HEIC/HEIF、AVIF の実用的な互換性マトリクス。',
    qualityDocTitle: '画質とファイルサイズ',
    qualityDocDescription: '画質と容量のバランスを取るための品質設定の選び方。',
    sizeIncreaseDocTitle: '出力サイズが増える理由',
    sizeIncreaseDocDescription: 'PicShift が深い圧縮をどう推定し、B/ピクセルをどう計算するかを説明します。',
    whyPicShiftDocTitle: 'なぜ PicShift を作ったのか',
    whyPicShiftDocDescription: 'local-only とプライバシー重視を軸に、継続改善している理由を説明します。',
    aboutPicShift: 'PicShift について',
  },
  ko: {
    home: '홈',
    docs: '문서',
    faq: '자주 묻는 질문',
    relatedPages: '관련 페이지',
    backToToolPages: '도구 페이지로 돌아가기',
    allDocs: '전체 문서',
    picShiftHome: 'PicShift 홈',
    privacyPolicy: '개인정보처리방침',
    lastUpdated: '최종 업데이트',
    docsGuidesTitle: 'PicShift 문서 및 가이드',
    docsGuidesDescription: '로컬 프라이버시 처리, 포맷 선택, 압축 품질에 대한 실용 가이드입니다.',
    privacyDocTitle: '개인정보 보호와 로컬 처리',
    privacyDocDescription: 'PicShift가 기기에서 이미지를 처리하는 방식과 사용/비사용 데이터 설명.',
    formatDocTitle: '포맷 호환성 가이드',
    formatDocDescription: 'JPG, PNG, WebP, HEIC/HEIF, AVIF의 실용 호환성 매트릭스.',
    qualityDocTitle: '화질과 파일 크기',
    qualityDocDescription: '시각 품질과 용량의 균형을 위한 품질 설정 방법.',
    sizeIncreaseDocTitle: '출력 용량이 커지는 이유',
    sizeIncreaseDocDescription: 'PicShift가 깊은 압축을 추정하는 방식과 B/pixel 계산 방법을 설명합니다.',
    whyPicShiftDocTitle: 'PicShift를 만든 이유',
    whyPicShiftDocDescription: 'local-only, 개인정보 중심 설계와 지속적인 개선 배경을 설명합니다.',
    aboutPicShift: 'PicShift 소개',
  },
  pt: {
    home: 'Início',
    docs: 'Documentação',
    faq: 'Perguntas frequentes',
    relatedPages: 'Páginas relacionadas',
    backToToolPages: 'Voltar para as ferramentas',
    allDocs: 'Toda a documentação',
    picShiftHome: 'Início do PicShift',
    privacyPolicy: 'Política de privacidade',
    lastUpdated: 'Última atualização',
    docsGuidesTitle: 'Documentação PicShift — formatos, qualidade e privacidade',
    docsGuidesDescription:
      'Guias práticos para escolher o formato certo (HEIC, WebP, AVIF, PNG, JPG), ajustar a qualidade sem perder detalhe e processar imagens em local, sem enviar arquivos.',
    privacyDocTitle: 'Privacidade e processamento local',
    privacyDocDescription:
      'Como o PicShift mantém o processamento no dispositivo: o que fica no navegador, o que nunca vemos e quais dados de tráfego limitados chegam à analítica.',
    formatDocTitle: 'Guia de compatibilidade de formatos',
    formatDocDescription:
      'Matriz prática para JPG, PNG, WebP, HEIC/HEIF e AVIF: o que cada formato faz bem, onde falha e qual escolher para e-mail, redes sociais ou uploads em e-commerce.',
    qualityDocTitle: 'Qualidade de imagem vs tamanho do arquivo',
    qualityDocDescription:
      'Como definir a qualidade da imagem para equilibrar nitidez e peso: o que muda de fato entre 70 e 95, quando ir para WebP/AVIF e como evitar artefatos ao salvar de novo.',
    sizeIncreaseDocTitle: 'Por que o tamanho de saída pode aumentar',
    sizeIncreaseDocDescription:
      'Por que às vezes o arquivo final pesa mais que o original: como o PicShift detecta compressão já profunda e avisa quando comprimir de novo já não compensa.',
    whyPicShiftDocTitle: 'Por que eu criei o PicShift',
    whyPicShiftDocDescription: 'A motivação de um conversor local-only e focado em privacidade, com evolução contínua.',
    aboutPicShift: 'Sobre o PicShift',
  },
  ru: {
    home: 'Главная',
    docs: 'Документация',
    faq: 'Частые вопросы',
    relatedPages: 'Связанные страницы',
    backToToolPages: 'Назад к инструментам',
    allDocs: 'Вся документация',
    picShiftHome: 'Главная PicShift',
    privacyPolicy: 'Политика конфиденциальности',
    lastUpdated: 'Последнее обновление',
    docsGuidesTitle: 'Документация и руководства PicShift',
    docsGuidesDescription: 'Практические руководства по локальной приватности, выбору форматов и качеству сжатия.',
    privacyDocTitle: 'Конфиденциальность и локальная обработка',
    privacyDocDescription: 'Как PicShift обрабатывает изображения на устройстве и какие данные используются или не используются.',
    formatDocTitle: 'Руководство по совместимости форматов',
    formatDocDescription: 'Практическая матрица совместимости для JPG, PNG, WebP, HEIC/HEIF и AVIF.',
    qualityDocTitle: 'Качество изображения и размер файла',
    qualityDocDescription: 'Как выбрать настройки качества для баланса четкости и размера.',
    sizeIncreaseDocTitle: 'Почему размер файла может увеличиться',
    sizeIncreaseDocDescription: 'Как PicShift оценивает глубокую компрессию и рассчитывает B/pixel в подсказках.',
    whyPicShiftDocTitle: 'Почему я создал PicShift',
    whyPicShiftDocDescription: 'Зачем нужен local-only конвертер с акцентом на приватность и постоянные улучшения.',
    aboutPicShift: 'О PicShift',
  },
  ar: {
    home: 'الرئيسية',
    docs: 'الوثائق',
    faq: 'الاسئلة الشائعة',
    relatedPages: 'صفحات ذات صلة',
    backToToolPages: 'العودة الى صفحات الادوات',
    allDocs: 'كل الوثائق',
    picShiftHome: 'الصفحة الرئيسية PicShift',
    privacyPolicy: 'سياسة الخصوصية',
    lastUpdated: 'اخر تحديث',
    docsGuidesTitle: 'وثائق وادلة PicShift',
    docsGuidesDescription: 'استكشف ادلة عملية حول الخصوصية المحلية، اختيار الصيغ، وجودة الضغط.',
    privacyDocTitle: 'الخصوصية والمعالجة المحلية',
    privacyDocDescription: 'كيف يعالج PicShift الصور على جهازك وما البيانات التي تستخدم او لا تستخدم.',
    formatDocTitle: 'دليل توافق الصيغ',
    formatDocDescription: 'مصفوفة توافق عملية لصيغ JPG وPNG وWebP وHEIC/HEIF وAVIF.',
    qualityDocTitle: 'جودة الصورة مقابل حجم الملف',
    qualityDocDescription: 'كيفية اختيار الجودة لتحقيق توازن بين الوضوح البصري والحجم.',
    sizeIncreaseDocTitle: 'لماذا قد يزداد حجم الملف الناتج',
    sizeIncreaseDocDescription: 'كيف يقدر PicShift الضغط العميق وكيف يحسب B/pixel في التفسير.',
    whyPicShiftDocTitle: 'لماذا بنيت PicShift',
    whyPicShiftDocDescription: 'الدافع وراء محول local-only يركز على الخصوصية مع تحسين مستمر.',
    aboutPicShift: 'حول PicShift',
  },
  it: {
    home: 'Home',
    docs: 'Documentazione',
    faq: 'FAQ',
    relatedPages: 'Pagine correlate',
    backToToolPages: 'Torna agli strumenti',
    allDocs: 'Tutta la documentazione',
    picShiftHome: 'Home PicShift',
    privacyPolicy: 'Informativa sulla privacy',
    lastUpdated: 'Ultimo aggiornamento',
    docsGuidesTitle: 'Documentazione PicShift — formati, qualità e privacy locale',
    docsGuidesDescription:
      'Guide pratiche per scegliere il formato (HEIC, WebP, AVIF, PNG, JPG), regolare la qualità e lavorare le immagini in locale, senza caricare file.',
    privacyDocTitle: 'Privacy ed elaborazione locale',
    privacyDocDescription:
      'Come PicShift tiene l\'elaborazione sul tuo dispositivo: cosa resta nel browser, cosa non vediamo mai e quali dati di traffico limitati arrivano agli analytics.',
    formatDocTitle: 'Guida alla compatibilità dei formati',
    formatDocDescription:
      'Matrice pratica per JPG, PNG, WebP, HEIC/HEIF e AVIF: cosa fa bene ogni formato, dove si rompe e quale usare per e-mail, social o caricamenti su e-commerce.',
    qualityDocTitle: 'Qualità immagine vs dimensione file',
    qualityDocDescription:
      'Come scegliere la qualità per bilanciare nitidezza e peso: cosa cambia tra 70 e 95, quando passare a WebP/AVIF e come evitare artefatti quando salvi di nuovo.',
    sizeIncreaseDocTitle: 'Perché la dimensione in uscita può aumentare',
    sizeIncreaseDocDescription:
      'Perché a volte il file finale pesa più dell\'originale: come PicShift rileva una compressione già profonda e avvisa quando comprimere di nuovo non ha più senso.',
    whyPicShiftDocTitle: 'Perché ho creato PicShift',
    whyPicShiftDocDescription: 'La motivazione dietro un convertitore local-only orientato alla privacy e al miglioramento continuo.',
    aboutPicShift: 'Informazioni su PicShift',
  },
};

export function getDocsUi(lang: Locale): DocsUiStrings {
  return DOCS_UI_MAP[lang] ?? DOCS_UI_MAP.en;
}
