import type { Locale } from './config';

interface VerificationUiStrings {
  homepageTitle: string;
  homepageIntro: string;
  homepageSteps: [string, string, string];
  homepageNote: string;
  homepageCta: string;
  docsVerifyHeading: string;
  docsVerifyIntro: string;
  docsVerifySteps: [string, string, string];
  docsBoundaryHeading: string;
  docsBoundaryItems: [string, string, string];
  docsEvidenceHeading: string;
  docsEvidenceItems: [string, string, string];
}

const VERIFICATION_UI_MAP: Record<Locale, VerificationUiStrings> = {
  en: {
    homepageTitle: 'Verify local processing in 30 seconds',
    homepageIntro: 'You can validate the no-upload claim yourself in a reproducible workflow:',
    homepageSteps: [
      'Open this page and select an image.',
      'Turn on airplane mode or disable Wi-Fi.',
      'Convert and download. The workflow still runs locally.',
    ],
    homepageNote: 'Note: first load requires internet to fetch app code and codecs. After loading, conversion works offline.',
    homepageCta: 'View privacy and local processing evidence',
    docsVerifyHeading: 'How to verify this yourself',
    docsVerifyIntro: 'Use this quick test to validate the local-only processing claim:',
    docsVerifySteps: [
      'Load PicShift once while online.',
      'Disconnect network (airplane mode or Wi-Fi off).',
      'Convert and download an image successfully.',
    ],
    docsBoundaryHeading: 'Scope and boundaries',
    docsBoundaryItems: [
      'First page load needs network to fetch static assets and WebAssembly codecs.',
      'After assets are cached, conversion workflows can continue offline.',
      'Batch conversion supports up to 200 files per run for stable performance.',
    ],
    docsEvidenceHeading: 'Technical evidence references',
    docsEvidenceItems: [
      'Privacy policy for legal terms and commitments.',
      'Format compatibility guide for supported input/output formats.',
      'Quality guide for practical compression and quality behavior.',
    ],
  },
  zh: {
    homepageTitle: '30 秒验证：全程本地处理',
    homepageIntro: '你可以按下面步骤自行验证“无需上传”的声明：',
    homepageSteps: ['打开本页并选择一张图片。', '开启飞行模式或关闭 Wi-Fi。', '继续转换并下载，流程仍可在本地完成。'],
    homepageNote: '说明：首次加载需要联网下载页面代码和编解码器；加载完成后可离线转换。',
    homepageCta: '查看隐私与本地处理证据',
    docsVerifyHeading: '如何自行验证',
    docsVerifyIntro: '使用这个快速测试来验证 local-only 处理：',
    docsVerifySteps: ['先在联网状态打开 PicShift 一次。', '断开网络（飞行模式或关闭 Wi-Fi）。', '继续完成图片转换并成功下载。'],
    docsBoundaryHeading: '适用范围与边界',
    docsBoundaryItems: [
      '首次打开页面需要联网获取静态资源和 WebAssembly 编解码器。',
      '资源缓存后，转换流程可继续离线运行。',
      '为保证稳定性能，单次批量处理上限为 200 张。',
    ],
    docsEvidenceHeading: '技术证据链接',
    docsEvidenceItems: ['隐私政策：法律条款与承诺说明。', '格式兼容文档：输入输出格式支持范围。', '画质文档：压缩与画质行为的实践说明。'],
  },
  'zh-Hant': {
    homepageTitle: '30 秒驗證：全程本機處理',
    homepageIntro: '你可以依下列步驟自行驗證「無需上傳」：',
    homepageSteps: ['開啟本頁並選擇一張圖片。', '開啟飛航模式或關閉 Wi-Fi。', '繼續轉換並下載，流程仍可在本機完成。'],
    homepageNote: '說明：首次載入需連線下載頁面程式與編解碼器；載入完成後可離線轉換。',
    homepageCta: '查看隱私與本機處理證據',
    docsVerifyHeading: '如何自行驗證',
    docsVerifyIntro: '使用以下快速測試驗證 local-only 處理：',
    docsVerifySteps: ['先在連線狀態開啟 PicShift 一次。', '中斷網路（飛航模式或關閉 Wi-Fi）。', '繼續完成圖片轉換並成功下載。'],
    docsBoundaryHeading: '適用範圍與邊界',
    docsBoundaryItems: [
      '首次開啟頁面需要連線取得靜態資源與 WebAssembly 編解碼器。',
      '資源快取後，轉換流程可繼續離線執行。',
      '為確保穩定效能，單次批量處理上限為 200 張。',
    ],
    docsEvidenceHeading: '技術證據連結',
    docsEvidenceItems: ['隱私政策：法律條款與承諾說明。', '格式相容文件：輸入輸出格式支援範圍。', '畫質文件：壓縮與畫質行為的實務說明。'],
  },
  es: {
    homepageTitle: 'Verifica el procesamiento local en 30 segundos',
    homepageIntro: 'Puedes comprobar la promesa de no subida con este flujo reproducible:',
    homepageSteps: [
      'Abre esta página y selecciona una imagen.',
      'Activa modo avión o desactiva Wi-Fi.',
      'Convierte y descarga: el flujo sigue funcionando en local.',
    ],
    homepageNote: 'Nota: la primera carga requiere internet para descargar la app y los códecs. Después, la conversión funciona offline.',
    homepageCta: 'Ver evidencia de privacidad y procesamiento local',
    docsVerifyHeading: 'Cómo verificarlo tú mismo',
    docsVerifyIntro: 'Prueba rápida para validar el procesamiento local-only:',
    docsVerifySteps: [
      'Carga PicShift una vez con conexión.',
      'Desconecta la red (modo avión o Wi-Fi apagado).',
      'Convierte y descarga una imagen correctamente.',
    ],
    docsBoundaryHeading: 'Alcance y límites',
    docsBoundaryItems: [
      'La primera carga necesita red para obtener assets y códecs WebAssembly.',
      'Con assets en caché, la conversión puede continuar sin conexión.',
      'El procesamiento por lotes admite hasta 200 archivos por ejecución.',
    ],
    docsEvidenceHeading: 'Referencias técnicas',
    docsEvidenceItems: [
      'Política de privacidad para términos legales.',
      'Guía de compatibilidad para formatos soportados.',
      'Guía de calidad para comportamiento de compresión.',
    ],
  },
  fr: {
    homepageTitle: 'Vérifier le traitement local en 30 secondes',
    homepageIntro: 'Vous pouvez vérifier vous-même la promesse sans téléversement :',
    homepageSteps: [
      'Ouvrez cette page et sélectionnez une image.',
      'Activez le mode avion ou coupez le Wi-Fi.',
      'Convertissez puis téléchargez : le flux reste local.',
    ],
    homepageNote: 'Note : le premier chargement nécessite internet pour récupérer l’app et les codecs. Ensuite, la conversion fonctionne hors ligne.',
    homepageCta: 'Voir les preuves de confidentialité et de traitement local',
    docsVerifyHeading: 'Comment vérifier vous-même',
    docsVerifyIntro: 'Test rapide pour valider le traitement local-only :',
    docsVerifySteps: [
      'Chargez PicShift une fois en ligne.',
      'Coupez le réseau (mode avion ou Wi-Fi désactivé).',
      'Convertissez puis téléchargez une image avec succès.',
    ],
    docsBoundaryHeading: 'Portée et limites',
    docsBoundaryItems: [
      'Le premier chargement nécessite le réseau pour les assets et codecs WebAssembly.',
      'Une fois les assets en cache, la conversion peut continuer hors ligne.',
      'Le traitement par lot prend en charge jusqu’à 200 fichiers par exécution.',
    ],
    docsEvidenceHeading: 'Références techniques',
    docsEvidenceItems: [
      'Politique de confidentialité pour les termes légaux.',
      'Guide de compatibilité pour les formats pris en charge.',
      'Guide qualité pour le comportement de compression.',
    ],
  },
  de: {
    homepageTitle: 'Lokale Verarbeitung in 30 Sekunden prüfen',
    homepageIntro: 'So prüfst du den No-Upload-Claim selbst:',
    homepageSteps: [
      'Diese Seite öffnen und ein Bild auswählen.',
      'Flugmodus aktivieren oder WLAN ausschalten.',
      'Konvertieren und herunterladen: der Ablauf läuft weiter lokal.',
    ],
    homepageNote: 'Hinweis: Für den ersten Seitenaufruf werden App-Code und Codecs aus dem Netz geladen. Danach funktioniert die Konvertierung offline.',
    homepageCta: 'Datenschutz- und Local-Processing-Nachweise ansehen',
    docsVerifyHeading: 'So prüfst du es selbst',
    docsVerifyIntro: 'Schnelltest zur Prüfung des local-only Modells:',
    docsVerifySteps: [
      'PicShift einmal online laden.',
      'Netzwerk trennen (Flugmodus oder WLAN aus).',
      'Bild erfolgreich konvertieren und herunterladen.',
    ],
    docsBoundaryHeading: 'Geltungsbereich und Grenzen',
    docsBoundaryItems: [
      'Der erste Seitenaufruf benötigt Netzwerk für Assets und WebAssembly-Codecs.',
      'Nach dem Caching kann die Konvertierung offline weiterlaufen.',
      'Batch-Verarbeitung unterstützt bis zu 200 Dateien pro Durchlauf.',
    ],
    docsEvidenceHeading: 'Technische Nachweise',
    docsEvidenceItems: [
      'Datenschutzseite für rechtliche Bedingungen.',
      'Kompatibilitätsleitfaden für unterstützte Formate.',
      'Qualitätsleitfaden für Kompressionsverhalten.',
    ],
  },
  ja: {
    homepageTitle: '30秒で確認：ローカル処理',
    homepageIntro: 'アップロード不要を次の手順で再現確認できます：',
    homepageSteps: ['このページを開いて画像を選択。', '機内モードをオン、またはWi-Fiをオフ。', '変換とダウンロードを実行。ローカルで継続します。'],
    homepageNote: '注記：初回読み込みのみ、アプリ本体とコーデック取得のため通信が必要です。読み込み後はオフライン変換可能です。',
    homepageCta: 'プライバシーとローカル処理の根拠を見る',
    docsVerifyHeading: '自分で確認する方法',
    docsVerifyIntro: 'local-only 処理を確認するクイックテスト：',
    docsVerifySteps: ['オンラインで PicShift を1回読み込む。', '通信を切る（機内モードまたはWi-Fiオフ）。', '画像を変換し、正常にダウンロードする。'],
    docsBoundaryHeading: '適用範囲と境界',
    docsBoundaryItems: [
      '初回読み込みでは静的アセットと WebAssembly コーデック取得のため通信が必要です。',
      'アセットがキャッシュされると、変換はオフラインでも継続できます。',
      '安定した性能のため、バッチ処理は1回あたり最大200ファイルです。',
    ],
    docsEvidenceHeading: '技術的な根拠',
    docsEvidenceItems: [
      'プライバシーポリシー：法的条件と約束。',
      '形式互換ガイド：対応入力・出力形式。',
      '画質ガイド：圧縮と画質挙動の実践情報。',
    ],
  },
  ko: {
    homepageTitle: '30초 검증: 로컬 처리',
    homepageIntro: '업로드 없음 약속을 아래 절차로 직접 확인할 수 있습니다:',
    homepageSteps: ['이 페이지를 열고 이미지를 선택합니다.', '비행기 모드를 켜거나 Wi-Fi를 끕니다.', '변환 후 다운로드합니다. 로컬 처리로 계속 동작합니다.'],
    homepageNote: '참고: 첫 로딩 시에는 앱 코드와 코덱 다운로드를 위해 인터넷이 필요합니다. 로딩 후에는 오프라인 변환이 가능합니다.',
    homepageCta: '개인정보 보호 및 로컬 처리 근거 보기',
    docsVerifyHeading: '직접 확인하는 방법',
    docsVerifyIntro: 'local-only 처리를 검증하는 빠른 테스트:',
    docsVerifySteps: ['온라인 상태에서 PicShift를 한 번 로드합니다.', '네트워크를 끕니다(비행기 모드 또는 Wi-Fi off).', '이미지를 변환하고 정상적으로 다운로드합니다.'],
    docsBoundaryHeading: '적용 범위와 경계',
    docsBoundaryItems: [
      '첫 페이지 로드에는 정적 자산과 WebAssembly 코덱 다운로드를 위한 네트워크가 필요합니다.',
      '자산이 캐시되면 변환은 오프라인에서도 계속 동작합니다.',
      '안정적인 성능을 위해 배치 처리 한도는 1회 200개 파일입니다.',
    ],
    docsEvidenceHeading: '기술 근거 링크',
    docsEvidenceItems: [
      '개인정보처리방침: 법적 약관과 약속.',
      '포맷 호환성 가이드: 지원 입출력 형식.',
      '화질 가이드: 압축 및 화질 동작 설명.',
    ],
  },
  pt: {
    homepageTitle: 'Verifique o processamento local em 30 segundos',
    homepageIntro: 'Você pode validar a promessa sem upload com este fluxo:',
    homepageSteps: [
      'Abra esta página e selecione uma imagem.',
      'Ative o modo avião ou desligue o Wi-Fi.',
      'Converta e baixe: o fluxo continua localmente.',
    ],
    homepageNote: 'Observação: o primeiro carregamento precisa de internet para baixar app e codecs. Depois, a conversão funciona offline.',
    homepageCta: 'Ver evidências de privacidade e processamento local',
    docsVerifyHeading: 'Como verificar por conta própria',
    docsVerifyIntro: 'Teste rápido para validar o processamento local-only:',
    docsVerifySteps: [
      'Carregue o PicShift uma vez online.',
      'Desconecte a rede (modo avião ou Wi-Fi desligado).',
      'Converta e baixe uma imagem com sucesso.',
    ],
    docsBoundaryHeading: 'Escopo e limites',
    docsBoundaryItems: [
      'O primeiro carregamento requer rede para assets e codecs WebAssembly.',
      'Com assets em cache, a conversão pode continuar offline.',
      'O processamento em lote suporta até 200 arquivos por execução.',
    ],
    docsEvidenceHeading: 'Referências técnicas',
    docsEvidenceItems: [
      'Política de privacidade para termos legais.',
      'Guia de compatibilidade para formatos suportados.',
      'Guia de qualidade para comportamento de compressão.',
    ],
  },
  ru: {
    homepageTitle: 'Проверка локальной обработки за 30 секунд',
    homepageIntro: 'Вы можете сами проверить обещание без загрузки на сервер:',
    homepageSteps: [
      'Откройте эту страницу и выберите изображение.',
      'Включите авиарежим или отключите Wi-Fi.',
      'Конвертируйте и скачайте: процесс продолжится локально.',
    ],
    homepageNote: 'Примечание: при первом открытии нужен интернет для загрузки кода приложения и кодеков. После загрузки конвертация работает офлайн.',
    homepageCta: 'Смотреть доказательства приватности и локальной обработки',
    docsVerifyHeading: 'Как проверить самостоятельно',
    docsVerifyIntro: 'Быстрый тест для проверки local-only обработки:',
    docsVerifySteps: [
      'Один раз загрузите PicShift онлайн.',
      'Отключите сеть (авиарежим или Wi-Fi off).',
      'Успешно конвертируйте и скачайте изображение.',
    ],
    docsBoundaryHeading: 'Область действия и границы',
    docsBoundaryItems: [
      'Первый запуск требует сеть для статических ресурсов и WebAssembly-кодеков.',
      'После кэширования ресурсов конвертация может идти офлайн.',
      'Для стабильной производительности пакетная обработка ограничена 200 файлами за запуск.',
    ],
    docsEvidenceHeading: 'Технические подтверждения',
    docsEvidenceItems: [
      'Политика конфиденциальности для юридических условий.',
      'Гайд совместимости для поддерживаемых форматов.',
      'Гайд качества для поведения сжатия.',
    ],
  },
  ar: {
    homepageTitle: 'تحقق خلال 30 ثانية: معالجة محلية',
    homepageIntro: 'يمكنك التحقق بنفسك من وعد عدم الرفع بهذه الخطوات:',
    homepageSteps: ['افتح هذه الصفحة واختر صورة.', 'فعّل وضع الطيران أو أوقف Wi-Fi.', 'حوّل الصورة ونزّلها، وسيستمر العمل محليًا.'],
    homepageNote: 'ملاحظة: التحميل الأول يحتاج الإنترنت لتنزيل كود التطبيق وبرامج الترميز. بعد التحميل، يعمل التحويل دون اتصال.',
    homepageCta: 'عرض أدلة الخصوصية والمعالجة المحلية',
    docsVerifyHeading: 'كيف تتحقق بنفسك',
    docsVerifyIntro: 'اختبار سريع للتحقق من المعالجة local-only:',
    docsVerifySteps: ['حمّل PicShift مرة واحدة أثناء الاتصال.', 'افصل الشبكة (وضع الطيران أو إيقاف Wi-Fi).', 'حوّل الصورة ونزّلها بنجاح.'],
    docsBoundaryHeading: 'النطاق والحدود',
    docsBoundaryItems: [
      'أول تحميل للصفحة يحتاج الشبكة لجلب الملفات الثابتة وبرامج ترميز WebAssembly.',
      'بعد التخزين المؤقت، يمكن متابعة التحويل دون اتصال.',
      'المعالجة الدفعية تدعم حتى 200 ملف لكل تشغيل للحفاظ على الاستقرار.',
    ],
    docsEvidenceHeading: 'مراجع تقنية',
    docsEvidenceItems: [
      'سياسة الخصوصية للشروط القانونية.',
      'دليل توافق الصيغ للصيغ المدعومة.',
      'دليل الجودة لسلوك الضغط والجودة.',
    ],
  },
  it: {
    homepageTitle: 'Verifica l’elaborazione locale in 30 secondi',
    homepageIntro: 'Puoi verificare la promessa no-upload con questo flusso:',
    homepageSteps: [
      'Apri questa pagina e seleziona un’immagine.',
      'Attiva modalità aereo o disattiva il Wi-Fi.',
      'Converti e scarica: il flusso continua in locale.',
    ],
    homepageNote: 'Nota: il primo caricamento richiede internet per scaricare app e codec. Dopo il caricamento, la conversione funziona offline.',
    homepageCta: 'Vedi evidenze su privacy ed elaborazione locale',
    docsVerifyHeading: 'Come verificarlo da solo',
    docsVerifyIntro: 'Test rapido per validare l’elaborazione local-only:',
    docsVerifySteps: [
      'Carica PicShift una volta online.',
      'Disconnetti la rete (modalità aereo o Wi-Fi off).',
      'Converti e scarica un’immagine con successo.',
    ],
    docsBoundaryHeading: 'Ambito e limiti',
    docsBoundaryItems: [
      'Il primo caricamento richiede rete per asset statici e codec WebAssembly.',
      'Con asset in cache, la conversione può continuare offline.',
      'La conversione batch supporta fino a 200 file per esecuzione.',
    ],
    docsEvidenceHeading: 'Riferimenti tecnici',
    docsEvidenceItems: [
      'Policy privacy per termini legali e impegni.',
      'Guida compatibilità per i formati supportati.',
      'Guida qualità per comportamento di compressione.',
    ],
  },
};

export function getVerificationUi(lang: Locale): VerificationUiStrings {
  return VERIFICATION_UI_MAP[lang] ?? VERIFICATION_UI_MAP.en;
}
