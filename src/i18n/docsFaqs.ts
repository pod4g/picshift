import type { Locale } from './config';

export type DocsFaqKey =
  | 'privacy-local-processing'
  | 'format-compatibility'
  | 'image-quality-vs-file-size';

export interface DocsFaqItem {
  q: string;
  a: string;
}

const DOCS_FAQ_MAP: Record<Locale, Record<DocsFaqKey, DocsFaqItem[]>> = {
  en: {
    'privacy-local-processing': [
      {
        q: 'Are images uploaded to PicShift servers for conversion?',
        a: 'No. PicShift runs conversion inside your browser and does not upload source image content to PicShift servers for conversion processing.',
      },
      {
        q: 'Where are my converted files stored?',
        a: 'Converted files are generated in your browser and saved only to the location you choose on your device when you download them.',
      },
      {
        q: 'Does PicShift need an account to process files?',
        a: 'No. Core conversion workflows run without account sign-in.',
      },
    ],
    'format-compatibility': [
      {
        q: 'Which output format is best for broad compatibility?',
        a: 'JPG has the broadest compatibility across legacy apps, websites, and operating systems.',
      },
      {
        q: 'Which formats support transparency?',
        a: 'PNG, WebP, and AVIF support transparency. JPG does not support transparency.',
      },
      {
        q: 'When should I choose WebP or AVIF?',
        a: 'Choose WebP or AVIF for web delivery when your target environment supports these formats and smaller transfer size is the priority.',
      },
    ],
    'image-quality-vs-file-size': [
      {
        q: 'What quality setting is a practical default for JPG or WebP?',
        a: 'Quality 80 is a practical starting point for JPG and WebP in common web and sharing workflows.',
      },
      {
        q: 'Why can PNG become larger after conversion?',
        a: 'PNG encoding is lossless, but PicShift quality affects preprocessing. At 95-100 it preserves decoded pixels and applies lossless optimization; below 95 palette quantization may reduce colors. A pixel-preserving PNG from a lossy source is often larger and cannot restore detail already lost.',
      },
      {
        q: 'How should I reduce file size without visible artifacts?',
        a: 'Lower quality in small steps and compare key details after each step. Stop reducing when artifacts are visible in important regions.',
      },
    ],
  },
  zh: {
    'privacy-local-processing': [
      { q: '转换时图片会上传到 PicShift 服务器吗？', a: '不会。PicShift 在你的浏览器内完成转换，不会把原始图片内容上传到服务器参与转换。' },
      { q: '转换后的文件存在哪里？', a: '转换文件在浏览器中生成，只会在你点击下载后保存到你选择的本地位置。' },
      { q: '处理图片需要注册账号吗？', a: '不需要。核心转换流程无需账号登录。' },
    ],
    'format-compatibility': [
      { q: '哪个输出格式兼容性最广？', a: 'JPG 在旧版应用、网站和操作系统中的兼容性最广。' },
      { q: '哪些格式支持透明通道？', a: 'PNG、WebP、AVIF 支持透明通道，JPG 不支持。' },
      { q: '什么时候应选择 WebP 或 AVIF？', a: '当目标环境支持且你优先关注更小传输体积时，优先选择 WebP 或 AVIF。' },
    ],
    'image-quality-vs-file-size': [
      { q: 'JPG 或 WebP 的默认质量建议是多少？', a: '在常见网页和分享场景中，质量 80 是实用起点。' },
      { q: '为什么转成 PNG 后体积会变大？', a: 'PNG 编码本身是无损的，但 PicShift 的质量设置会改变预处理方式。质量 95-100 保留解码后的像素并做无损优化；低于 95 可能进行有损调色板量化。从有损源图生成的像素保留型 PNG 往往更大，也不能恢复源图已丢失的细节。' },
      { q: '如何减小体积又避免明显画质损失？', a: '每次小幅下调质量并检查关键细节，一旦重要区域出现可见伪影就停止继续下调。' },
    ],
  },
  'zh-Hant': {
    'privacy-local-processing': [
      { q: '轉換時圖片會上傳到 PicShift 伺服器嗎？', a: '不會。PicShift 在你的瀏覽器內完成轉換，不會把原始圖片內容上傳到伺服器參與轉換。' },
      { q: '轉換後的檔案存在哪裡？', a: '轉換檔案在瀏覽器中產生，只會在你下載時儲存到你選擇的本機位置。' },
      { q: '處理圖片需要註冊帳號嗎？', a: '不需要。核心轉換流程不需要帳號登入。' },
    ],
    'format-compatibility': [
      { q: '哪個輸出格式相容性最廣？', a: 'JPG 在舊版應用、網站與作業系統中的相容性最廣。' },
      { q: '哪些格式支援透明背景？', a: 'PNG、WebP、AVIF 支援透明，JPG 不支援。' },
      { q: '什麼時候應該選擇 WebP 或 AVIF？', a: '當目標環境支援且你優先關注更小傳輸體積時，選擇 WebP 或 AVIF。' },
    ],
    'image-quality-vs-file-size': [
      { q: 'JPG 或 WebP 的實用預設品質是多少？', a: '在常見網頁與分享場景中，品質 80 是實用起點。' },
      { q: '為什麼轉成 PNG 後檔案會變大？', a: 'PNG 編碼本身是無損的，但 PicShift 的品質設定會改變預處理方式。品質 95-100 保留解碼後的像素並做無損最佳化；低於 95 可能進行有損調色盤量化。從有損來源產生的像素保留型 PNG 往往更大，也不能恢復已丟失的細節。' },
      { q: '如何縮小檔案又避免明顯失真？', a: '每次小幅降低品質並檢查關鍵細節，一旦重要區域出現可見壓縮痕跡就停止。' },
    ],
  },
  es: {
    'privacy-local-processing': [
      { q: '¿Las imágenes se suben a los servidores de PicShift para convertirlas?', a: 'No. PicShift convierte en tu navegador y no sube el contenido original de la imagen a sus servidores para el procesamiento de conversión.' },
      { q: '¿Dónde se guardan mis archivos convertidos?', a: 'Los archivos convertidos se generan en tu navegador y solo se guardan en la ubicación local que eliges al descargarlos.' },
      { q: '¿PicShift requiere cuenta para procesar archivos?', a: 'No. Los flujos principales de conversión funcionan sin iniciar sesión.' },
    ],
    'format-compatibility': [
      { q: '¿Qué formato de salida ofrece mayor compatibilidad?', a: 'JPG ofrece la compatibilidad más amplia en aplicaciones heredadas, sitios web y sistemas operativos.' },
      { q: '¿Qué formatos admiten transparencia?', a: 'PNG, WebP y AVIF admiten transparencia. JPG no admite transparencia.' },
      { q: '¿Cuándo conviene elegir WebP o AVIF?', a: 'Elige WebP o AVIF para entrega web cuando tu entorno objetivo los soporte y el tamaño de transferencia sea la prioridad.' },
    ],
    'image-quality-vs-file-size': [
      { q: '¿Qué calidad es un valor práctico por defecto para JPG o WebP?', a: 'Calidad 80 es un punto de partida práctico para JPG y WebP en escenarios comunes de web y compartición.' },
      { q: '¿Por qué PNG puede ser más grande después de convertir?', a: 'La codificación PNG es sin pérdida, pero la calidad de PicShift cambia el preprocesado. Entre 95 y 100 conserva los píxeles decodificados; por debajo de 95 puede reducir colores mediante cuantización con pérdida. Un PNG que conserva píxeles desde una fuente con pérdida suele ser mayor y no recupera detalle perdido.' },
      { q: '¿Cómo reduzco tamaño sin artefactos visibles?', a: 'Baja la calidad en pasos pequeños y compara detalles clave en cada paso. Detente cuando aparezcan artefactos visibles en zonas importantes.' },
    ],
  },
  fr: {
    'privacy-local-processing': [
      { q: 'Les images sont-elles envoyées aux serveurs PicShift pour la conversion ?', a: "Non. PicShift convertit dans votre navigateur et n'envoie pas le contenu source des images aux serveurs PicShift pour le traitement." },
      { q: 'Où sont stockés mes fichiers convertis ?', a: 'Les fichiers convertis sont générés dans votre navigateur et enregistrés uniquement à l’emplacement local que vous choisissez au téléchargement.' },
      { q: 'PicShift nécessite-t-il un compte pour traiter les fichiers ?', a: 'Non. Les conversions principales fonctionnent sans connexion à un compte.' },
    ],
    'format-compatibility': [
      { q: 'Quel format de sortie est le plus compatible ?', a: 'JPG offre la compatibilité la plus large avec les applications anciennes, les sites web et les systèmes d’exploitation.' },
      { q: 'Quels formats prennent en charge la transparence ?', a: 'PNG, WebP et AVIF prennent en charge la transparence. JPG ne la prend pas en charge.' },
      { q: 'Quand choisir WebP ou AVIF ?', a: 'Choisissez WebP ou AVIF pour le web lorsque votre environnement cible les prend en charge et que la taille de transfert est prioritaire.' },
    ],
    'image-quality-vs-file-size': [
      { q: 'Quel réglage de qualité est un bon défaut pour JPG ou WebP ?', a: 'La qualité 80 est un point de départ pratique pour JPG et WebP dans les usages web et partage courants.' },
      { q: 'Pourquoi PNG peut-il devenir plus volumineux après conversion ?', a: 'L’encodage PNG est sans perte, mais la qualité PicShift change le prétraitement. Entre 95 et 100, les pixels décodés sont préservés ; sous 95, une quantification avec perte peut réduire les couleurs. Un PNG qui préserve les pixels d’une source avec perte est souvent plus grand sans restaurer les détails perdus.' },
      { q: 'Comment réduire la taille sans artefacts visibles ?', a: 'Réduisez la qualité par petits paliers et comparez les détails importants à chaque étape. Arrêtez dès que des artefacts deviennent visibles.' },
    ],
  },
  de: {
    'privacy-local-processing': [
      { q: 'Werden Bilder zur Konvertierung auf PicShift-Server hochgeladen?', a: 'Nein. PicShift konvertiert im Browser und lädt den Bildinhalt nicht zur Konvertierung auf PicShift-Server hoch.' },
      { q: 'Wo werden meine konvertierten Dateien gespeichert?', a: 'Konvertierte Dateien werden im Browser erzeugt und nur an dem lokalen Speicherort abgelegt, den du beim Download auswählst.' },
      { q: 'Benötigt PicShift ein Konto für die Verarbeitung?', a: 'Nein. Die Kern-Konvertierung funktioniert ohne Anmeldung.' },
    ],
    'format-compatibility': [
      { q: 'Welches Ausgabeformat ist am kompatibelsten?', a: 'JPG bietet die breiteste Kompatibilität über ältere Apps, Websites und Betriebssysteme hinweg.' },
      { q: 'Welche Formate unterstützen Transparenz?', a: 'PNG, WebP und AVIF unterstützen Transparenz. JPG unterstützt keine Transparenz.' },
      { q: 'Wann sollte ich WebP oder AVIF wählen?', a: 'Wähle WebP oder AVIF für Web-Auslieferung, wenn die Zielumgebung diese Formate unterstützt und eine kleinere Übertragungsgröße Priorität hat.' },
    ],
    'image-quality-vs-file-size': [
      { q: 'Welcher Qualitätswert ist ein praktischer Standard für JPG oder WebP?', a: 'Qualität 80 ist ein praxisnaher Startwert für JPG und WebP in typischen Web- und Sharing-Szenarien.' },
      { q: 'Warum kann PNG nach der Konvertierung größer werden?', a: 'PNG-Kodierung ist verlustfrei, aber die PicShift-Qualität steuert die Vorverarbeitung. Bei 95-100 bleiben dekodierte Pixel erhalten; unter 95 kann verlustbehaftete Palettenquantisierung Farben reduzieren. Ein pixelerhaltendes PNG aus einer verlustbehafteten Quelle ist oft größer und stellt verlorene Details nicht wieder her.' },
      { q: 'Wie reduziere ich die Dateigröße ohne sichtbare Artefakte?', a: 'Senke die Qualität in kleinen Schritten und prüfe wichtige Details nach jedem Schritt. Stoppe, sobald sichtbare Artefakte auftreten.' },
    ],
  },
  ja: {
    'privacy-local-processing': [
      { q: '変換のために画像は PicShift サーバーへアップロードされますか？', a: 'いいえ。PicShift はブラウザー内で変換を実行し、変換処理のために元画像をサーバーへアップロードしません。' },
      { q: '変換後のファイルはどこに保存されますか？', a: '変換ファイルはブラウザー内で生成され、ダウンロード時に選択した端末上の保存先にのみ保存されます。' },
      { q: 'ファイル処理にアカウント登録は必要ですか？', a: '不要です。主要な変換機能はログインなしで利用できます。' },
    ],
    'format-compatibility': [
      { q: '最も互換性が高い出力形式はどれですか？', a: 'JPG は旧式アプリ、Web サイト、OS まで含めて最も広い互換性があります。' },
      { q: '透過に対応する形式はどれですか？', a: 'PNG、WebP、AVIF は透過対応です。JPG は透過に対応しません。' },
      { q: 'WebP や AVIF を選ぶべき場面は？', a: '対象環境が対応していて、転送サイズの削減を優先するWeb配信では WebP または AVIF を選択します。' },
    ],
    'image-quality-vs-file-size': [
      { q: 'JPG/WebP の実用的な初期品質は？', a: '一般的なWeb公開や共有用途では、品質 80 が実用的な開始値です。' },
      { q: 'PNG へ変換するとサイズが大きくなるのはなぜ？', a: 'PNG の符号化自体は可逆ですが、PicShift の品質設定で前処理が変わります。95-100 はデコード後の画素を保持し、95 未満では非可逆のパレット量子化で色数を減らす場合があります。非可逆の元画像から画素を保持した PNG は大きくなりやすく、失われた細部は復元できません。' },
      { q: '目立つ劣化を避けながら容量を下げるには？', a: '品質を小刻みに下げ、各ステップで重要部分を比較します。重要領域に劣化が見えた時点で調整を止めます。' },
    ],
  },
  ko: {
    'privacy-local-processing': [
      { q: '변환을 위해 이미지가 PicShift 서버에 업로드되나요?', a: '아니요. PicShift는 브라우저 내부에서 변환을 수행하며, 변환 처리를 위해 원본 이미지를 서버로 업로드하지 않습니다.' },
      { q: '변환된 파일은 어디에 저장되나요?', a: '변환 파일은 브라우저에서 생성되며, 다운로드 시 사용자가 선택한 기기 내 위치에만 저장됩니다.' },
      { q: '파일 처리를 위해 계정이 필요한가요?', a: '아니요. 핵심 변환 기능은 로그인 없이 동작합니다.' },
    ],
    'format-compatibility': [
      { q: '가장 호환성이 넓은 출력 포맷은 무엇인가요?', a: 'JPG는 레거시 앱, 웹사이트, 운영체제를 포함해 가장 넓은 호환성을 제공합니다.' },
      { q: '투명도를 지원하는 포맷은 무엇인가요?', a: 'PNG, WebP, AVIF는 투명도를 지원하며 JPG는 지원하지 않습니다.' },
      { q: '언제 WebP 또는 AVIF를 선택해야 하나요?', a: '대상 환경이 지원하고 전송 크기 절감이 우선인 웹 배포에서는 WebP 또는 AVIF를 선택합니다.' },
    ],
    'image-quality-vs-file-size': [
      { q: 'JPG/WebP의 실용적인 기본 품질은 얼마인가요?', a: '일반적인 웹/공유 워크플로에서는 품질 80이 실용적인 시작점입니다.' },
      { q: 'PNG로 변환하면 왜 파일이 커질 수 있나요?', a: 'PNG 인코딩 자체는 무손실이지만 PicShift 품질 설정이 전처리를 바꿉니다. 95-100은 디코딩된 픽셀을 유지하고, 95 미만은 손실 팔레트 양자화로 색상을 줄일 수 있습니다. 손실 원본에서 픽셀을 유지한 PNG는 더 커질 수 있으며 이미 사라진 디테일은 복원하지 못합니다.' },
      { q: '눈에 띄는 열화 없이 용량을 줄이려면?', a: '품질을 작은 단계로 낮추고 매 단계마다 핵심 디테일을 비교하세요. 중요한 영역에 아티팩트가 보이면 중단합니다.' },
    ],
  },
  pt: {
    'privacy-local-processing': [
      { q: 'As imagens são enviadas para os servidores do PicShift para conversão?', a: 'Não. O PicShift converte no seu navegador e não envia o conteúdo original da imagem para os servidores no processo de conversão.' },
      { q: 'Onde meus arquivos convertidos são armazenados?', a: 'Os arquivos convertidos são gerados no navegador e salvos apenas no local do dispositivo que você escolher ao baixar.' },
      { q: 'O PicShift exige conta para processar arquivos?', a: 'Não. Os fluxos principais de conversão funcionam sem login.' },
    ],
    'format-compatibility': [
      { q: 'Qual formato de saída tem maior compatibilidade?', a: 'JPG oferece a compatibilidade mais ampla entre aplicativos legados, sites e sistemas operacionais.' },
      { q: 'Quais formatos suportam transparência?', a: 'PNG, WebP e AVIF suportam transparência. JPG não suporta transparência.' },
      { q: 'Quando devo escolher WebP ou AVIF?', a: 'Escolha WebP ou AVIF para entrega web quando o ambiente de destino suportar esses formatos e o tamanho de transferência menor for prioridade.' },
    ],
    'image-quality-vs-file-size': [
      { q: 'Qual qualidade é um padrão prático para JPG ou WebP?', a: 'Qualidade 80 é um ponto de partida prático para JPG e WebP em cenários comuns de web e compartilhamento.' },
      { q: 'Por que PNG pode ficar maior após a conversão?', a: 'A codificação PNG é sem perdas, mas a qualidade do PicShift altera o pré-processamento. Entre 95 e 100 preserva os pixels decodificados; abaixo de 95 pode reduzir cores com quantização com perdas. Um PNG que preserva pixels de uma fonte com perdas costuma ser maior e não recupera detalhes já perdidos.' },
      { q: 'Como reduzir o tamanho sem artefatos visíveis?', a: 'Reduza a qualidade em passos pequenos e compare os detalhes principais em cada etapa. Pare quando surgirem artefatos visíveis em áreas importantes.' },
    ],
  },
  ru: {
    'privacy-local-processing': [
      { q: 'Загружаются ли изображения на серверы PicShift для конвертации?', a: 'Нет. PicShift выполняет конвертацию в браузере и не загружает исходное содержимое изображений на серверы для обработки.' },
      { q: 'Где хранятся мои конвертированные файлы?', a: 'Конвертированные файлы создаются в браузере и сохраняются только в локальное место, которое вы выбираете при скачивании.' },
      { q: 'Нужен ли аккаунт для обработки файлов?', a: 'Нет. Основные сценарии конвертации работают без входа в аккаунт.' },
    ],
    'format-compatibility': [
      { q: 'Какой выходной формат самый совместимый?', a: 'JPG обеспечивает самую широкую совместимость со старыми приложениями, сайтами и операционными системами.' },
      { q: 'Какие форматы поддерживают прозрачность?', a: 'PNG, WebP и AVIF поддерживают прозрачность. JPG прозрачность не поддерживает.' },
      { q: 'Когда выбирать WebP или AVIF?', a: 'Выбирайте WebP или AVIF для веб-публикации, когда целевая среда поддерживает эти форматы и приоритетом является меньший размер передачи.' },
    ],
    'image-quality-vs-file-size': [
      { q: 'Какое качество является практичным значением по умолчанию для JPG или WebP?', a: 'Качество 80 — практичная стартовая точка для JPG и WebP в типичных веб- и шаринг-сценариях.' },
      { q: 'Почему после конвертации PNG может стать больше?', a: 'Кодирование PNG само по себе без потерь, но качество PicShift меняет предобработку. При 95-100 декодированные пиксели сохраняются; ниже 95 квантование палитры с потерями может уменьшить число цветов. Такой PNG из источника с потерями часто больше и не восстанавливает уже утраченные детали.' },
      { q: 'Как уменьшить размер без видимых артефактов?', a: 'Снижайте качество небольшими шагами и сравнивайте важные детали после каждого шага. Остановитесь, когда артефакты станут заметны в ключевых зонах.' },
    ],
  },
  ar: {
    'privacy-local-processing': [
      { q: 'هل يتم رفع الصور إلى خوادم PicShift لأجل التحويل؟', a: 'لا. يتم التحويل داخل المتصفح، ولا يتم رفع محتوى الصورة الأصلي إلى خوادم PicShift لمعالجة التحويل.' },
      { q: 'أين تُخزَّن الملفات بعد التحويل؟', a: 'يتم إنشاء الملفات داخل المتصفح، وتُحفَظ فقط في الموقع المحلي الذي تختاره عند التنزيل.' },
      { q: 'هل يتطلب PicShift حسابًا لمعالجة الملفات؟', a: 'لا. مسارات التحويل الأساسية تعمل بدون تسجيل دخول.' },
    ],
    'format-compatibility': [
      { q: 'ما أفضل صيغة إخراج من ناحية التوافق الواسع؟', a: 'صيغة JPG هي الأكثر توافقًا عبر التطبيقات القديمة والمواقع وأنظمة التشغيل.' },
      { q: 'ما الصيغ التي تدعم الشفافية؟', a: 'PNG وWebP وAVIF تدعم الشفافية، بينما JPG لا يدعمها.' },
      { q: 'متى أختار WebP أو AVIF؟', a: 'اختر WebP أو AVIF في نشر الويب عندما تكون البيئة المستهدفة داعمة وتكون أولوية العمل هي تقليل حجم النقل.' },
    ],
    'image-quality-vs-file-size': [
      { q: 'ما قيمة الجودة العملية الافتراضية لـ JPG أو WebP؟', a: 'القيمة 80 هي نقطة بداية عملية في سيناريوهات الويب والمشاركة الشائعة.' },
      { q: 'لماذا قد يصبح PNG أكبر بعد التحويل؟', a: 'ترميز PNG نفسه بلا فقدان، لكن جودة PicShift تغيّر المعالجة المسبقة. من 95 إلى 100 تُحفَظ البكسلات بعد فك الترميز؛ وأقل من 95 قد يقلل الألوان بتكميم فقداني. قد يكون PNG المحافظ على البكسلات من مصدر فقداني أكبر، ولا يستعيد التفاصيل المفقودة أصلًا.' },
      { q: 'كيف أقلل الحجم دون ظهور تشوهات واضحة؟', a: 'اخفض الجودة بخطوات صغيرة وقارن التفاصيل المهمة في كل خطوة، وتوقف عند ظهور تشوهات مرئية في المناطق الأساسية.' },
    ],
  },
  it: {
    'privacy-local-processing': [
      { q: 'Le immagini vengono caricate sui server PicShift per la conversione?', a: 'No. PicShift converte nel browser e non carica il contenuto originale delle immagini sui server per il processo di conversione.' },
      { q: 'Dove vengono salvati i file convertiti?', a: 'I file convertiti vengono generati nel browser e salvati solo nella posizione locale che scegli durante il download.' },
      { q: 'PicShift richiede un account per elaborare i file?', a: 'No. I flussi principali di conversione funzionano senza accesso account.' },
    ],
    'format-compatibility': [
      { q: 'Quale formato di uscita offre la compatibilità più ampia?', a: 'JPG offre la compatibilità più ampia tra applicazioni legacy, siti web e sistemi operativi.' },
      { q: 'Quali formati supportano la trasparenza?', a: 'PNG, WebP e AVIF supportano la trasparenza. JPG non supporta la trasparenza.' },
      { q: 'Quando conviene scegliere WebP o AVIF?', a: 'Scegli WebP o AVIF per il web quando l’ambiente target li supporta e la priorità è ridurre la dimensione di trasferimento.' },
    ],
    'image-quality-vs-file-size': [
      { q: 'Quale valore di qualità è un default pratico per JPG o WebP?', a: 'Qualità 80 è un punto di partenza pratico per JPG e WebP nei comuni flussi web e di condivisione.' },
      { q: 'Perché PNG può diventare più grande dopo la conversione?', a: 'La codifica PNG è lossless, ma la qualità di PicShift cambia la pre-elaborazione. Tra 95 e 100 preserva i pixel decodificati; sotto 95 può ridurre i colori con quantizzazione lossy. Un PNG che preserva i pixel da una sorgente lossy è spesso più grande e non recupera dettagli già persi.' },
      { q: 'Come ridurre la dimensione senza artefatti visibili?', a: 'Riduci la qualità a piccoli passi e confronta i dettagli importanti dopo ogni passaggio. Fermati quando compaiono artefatti visibili nelle aree chiave.' },
    ],
  },
};

export function getDocsFaqs(lang: Locale, key: DocsFaqKey): DocsFaqItem[] {
  return DOCS_FAQ_MAP[lang]?.[key] ?? DOCS_FAQ_MAP.en[key];
}
