import type { Locale } from './config';

interface VerificationUiStrings {
  homepageTitle: string;
  homepageIntro: string;
  homepageSteps: string[];
  homepageNote: string;
  homepageCta: string;
  docsVerifyHeading: string;
  docsVerifyIntro: string;
  docsVerifySteps: string[];
  docsBoundaryHeading: string;
  docsBoundaryItems: [string, string, string];
  docsEvidenceHeading: string;
  docsEvidenceItems: [string, string, string];
}

const VERIFICATION_UI_MAP: Record<Locale, VerificationUiStrings> = {
  en: {
    homepageTitle: 'Verify local processing in 10 seconds:',
    homepageIntro: '',
    homepageSteps: [
      'Turn on airplane mode or disable Wi-Fi.',
      'Select an image, then convert and download. The workflow still runs locally.',
    ],
    homepageNote: 'Note: first load requires internet to fetch app code and codecs. After loading, conversion works offline.',
    homepageCta: 'View privacy and local processing evidence',
    docsVerifyHeading: 'How to verify this yourself',
    docsVerifyIntro: 'Use this test to verify local-only processing:',
    docsVerifySteps: [
      'Disconnect network (airplane mode or Wi-Fi off).',
      'Select an image, then convert and download successfully.',
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
    homepageTitle: '10 秒即可验证全程本地处理：',
    homepageIntro: '',
    homepageSteps: ['开启飞行模式或关闭 Wi-Fi。', '选择图片后继续转换并下载，流程仍可在本地完成。'],
    homepageNote: '说明：首次加载需要联网下载页面代码和编解码器；加载完成后可离线转换。',
    homepageCta: '查看隐私与本地处理证据',
    docsVerifyHeading: '如何自行验证',
    docsVerifyIntro: '可按以下步骤验证 local-only 处理：',
    docsVerifySteps: ['断开网络（飞行模式或关闭 Wi-Fi）。', '选择图片后继续完成转换并成功下载。'],
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
    homepageTitle: '10 秒即可驗證全程本機處理：',
    homepageIntro: '',
    homepageSteps: ['開啟飛航模式或關閉 Wi-Fi。', '選擇圖片後繼續轉換並下載，流程仍可在本機完成。'],
    homepageNote: '說明：首次載入需連線下載頁面程式與編解碼器；載入完成後可離線轉換。',
    homepageCta: '查看隱私與本機處理證據',
    docsVerifyHeading: '如何自行驗證',
    docsVerifyIntro: '可依以下步驟驗證 local-only 處理：',
    docsVerifySteps: ['中斷網路（飛航模式或關閉 Wi-Fi）。', '選擇圖片後繼續完成轉換並成功下載。'],
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
    homepageTitle: 'Verifica el procesamiento local en 10 segundos:',
    homepageIntro: '',
    homepageSteps: [
      'Activa modo avión o desactiva Wi-Fi.',
      'Selecciona una imagen, luego convierte y descarga: el flujo sigue funcionando en local.',
    ],
    homepageNote: 'Nota: la primera carga requiere internet para descargar la app y los códecs. Después, la conversión funciona offline.',
    homepageCta: 'Ver evidencia de privacidad y procesamiento local',
    docsVerifyHeading: 'Cómo verificarlo tú mismo',
    docsVerifyIntro: 'Usa estos pasos para verificar el procesamiento local-only:',
    docsVerifySteps: [
      'Desconecta la red (modo avión o Wi-Fi apagado).',
      'Selecciona una imagen, luego conviértela y descárgala correctamente.',
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
    homepageTitle: 'Vérifiez le traitement local en 10 secondes :',
    homepageIntro: '',
    homepageSteps: [
      'Activez le mode avion ou coupez le Wi-Fi.',
      'Sélectionnez une image, puis convertissez et téléchargez : le flux reste local.',
    ],
    homepageNote: 'Note : le premier chargement nécessite internet pour récupérer l’app et les codecs. Ensuite, la conversion fonctionne hors ligne.',
    homepageCta: 'Voir les preuves de confidentialité et de traitement local',
    docsVerifyHeading: 'Comment vérifier vous-même',
    docsVerifyIntro: 'Utilisez ces étapes pour vérifier le traitement local-only :',
    docsVerifySteps: [
      'Coupez le réseau (mode avion ou Wi-Fi désactivé).',
      'Sélectionnez une image, puis convertissez-la et téléchargez-la.',
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
    homepageTitle: 'Lokale Verarbeitung in 10 Sekunden prüfen:',
    homepageIntro: '',
    homepageSteps: [
      'Flugmodus aktivieren oder WLAN ausschalten.',
      'Ein Bild auswählen, dann konvertieren und herunterladen: der Ablauf läuft lokal weiter.',
    ],
    homepageNote: 'Hinweis: Für den ersten Seitenaufruf werden App-Code und Codecs aus dem Netz geladen. Danach funktioniert die Konvertierung offline.',
    homepageCta: 'Datenschutz- und Local-Processing-Nachweise ansehen',
    docsVerifyHeading: 'So prüfst du es selbst',
    docsVerifyIntro: 'Mit diesen Schritten lässt sich das local-only Modell prüfen:',
    docsVerifySteps: [
      'Netzwerk trennen (Flugmodus oder WLAN aus).',
      'Ein Bild auswählen, dann erfolgreich konvertieren und herunterladen.',
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
    homepageTitle: '10秒でローカル処理を検証できます：',
    homepageIntro: '',
    homepageSteps: ['機内モードをオン、またはWi-Fiをオフ。', '画像を選択して変換し、ダウンロードする。オフラインでも処理が継続します。'],
    homepageNote: '注記：初回読み込みのみ、アプリ本体とコーデック取得のため通信が必要です。読み込み後はオフライン変換可能です。',
    homepageCta: 'プライバシーとローカル処理の根拠を見る',
    docsVerifyHeading: '自分で確認する方法',
    docsVerifyIntro: 'local-only 処理は次の手順で確認できます：',
    docsVerifySteps: ['通信を切る（機内モードまたはWi-Fiオフ）。', '画像を選択して変換し、正常にダウンロードする。'],
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
    homepageTitle: '10초면 로컬 처리를 검증할 수 있습니다:',
    homepageIntro: '',
    homepageSteps: ['비행기 모드를 켜거나 Wi-Fi를 끕니다.', '이미지를 선택한 뒤 변환하고 다운로드합니다. 오프라인에서도 로컬 처리로 계속 동작합니다.'],
    homepageNote: '참고: 첫 로딩 시에는 앱 코드와 코덱 다운로드를 위해 인터넷이 필요합니다. 로딩 후에는 오프라인 변환이 가능합니다.',
    homepageCta: '개인정보 보호 및 로컬 처리 근거 보기',
    docsVerifyHeading: '직접 확인하는 방법',
    docsVerifyIntro: 'local-only 처리는 아래 단계로 검증할 수 있습니다:',
    docsVerifySteps: ['네트워크를 끕니다(비행기 모드 또는 Wi-Fi off).', '이미지를 선택한 뒤 변환하고 정상적으로 다운로드합니다.'],
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
    homepageTitle: 'Verifique o processamento local em 10 segundos:',
    homepageIntro: '',
    homepageSteps: [
      'Ative o modo avião ou desligue o Wi-Fi.',
      'Selecione uma imagem, depois converta e baixe: o fluxo continua localmente.',
    ],
    homepageNote: 'Observação: o primeiro carregamento precisa de internet para baixar app e codecs. Depois, a conversão funciona offline.',
    homepageCta: 'Ver evidências de privacidade e processamento local',
    docsVerifyHeading: 'Como verificar por conta própria',
    docsVerifyIntro: 'Use estes passos para verificar o processamento local-only:',
    docsVerifySteps: [
      'Desconecte a rede (modo avião ou Wi-Fi desligado).',
      'Selecione uma imagem, depois converta e baixe com sucesso.',
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
    homepageTitle: 'Локальную обработку можно проверить за 10 секунд:',
    homepageIntro: '',
    homepageSteps: [
      'Включите авиарежим или отключите Wi-Fi.',
      'Выберите изображение, затем конвертируйте и скачайте: процесс продолжится локально.',
    ],
    homepageNote: 'Примечание: при первом открытии нужен интернет для загрузки кода приложения и кодеков. После загрузки конвертация работает офлайн.',
    homepageCta: 'Смотреть доказательства приватности и локальной обработки',
    docsVerifyHeading: 'Как проверить самостоятельно',
    docsVerifyIntro: 'Проверить local-only обработку можно по этим шагам:',
    docsVerifySteps: [
      'Отключите сеть (авиарежим или Wi-Fi off).',
      'Выберите изображение, затем успешно конвертируйте и скачайте его.',
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
    homepageTitle: 'يمكنك التحقق من المعالجة المحلية خلال 10 ثوانٍ:',
    homepageIntro: '',
    homepageSteps: ['فعّل وضع الطيران أو أوقف Wi-Fi.', 'اختر صورة ثم حوّلها ونزّلها. ستستمر المعالجة محليًا حتى دون اتصال.'],
    homepageNote: 'ملاحظة: التحميل الأول يحتاج الإنترنت لتنزيل كود التطبيق وبرامج الترميز. بعد التحميل، يعمل التحويل دون اتصال.',
    homepageCta: 'عرض أدلة الخصوصية والمعالجة المحلية',
    docsVerifyHeading: 'كيف تتحقق بنفسك',
    docsVerifyIntro: 'يمكن التحقق من المعالجة local-only عبر الخطوات التالية:',
    docsVerifySteps: ['افصل الشبكة (وضع الطيران أو إيقاف Wi-Fi).', 'اختر صورة ثم حوّلها ونزّلها بنجاح.'],
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
    homepageTitle: 'Verifica l’elaborazione locale in 10 secondi:',
    homepageIntro: '',
    homepageSteps: [
      'Attiva modalità aereo o disattiva il Wi-Fi.',
      'Seleziona un’immagine, poi converti e scarica: il flusso continua in locale.',
    ],
    homepageNote: 'Nota: il primo caricamento richiede internet per scaricare app e codec. Dopo il caricamento, la conversione funziona offline.',
    homepageCta: 'Vedi evidenze su privacy ed elaborazione locale',
    docsVerifyHeading: 'Come verificarlo da solo',
    docsVerifyIntro: 'Usa questi passaggi per verificare l’elaborazione local-only:',
    docsVerifySteps: [
      'Disconnetti la rete (modalità aereo o Wi-Fi off).',
      'Seleziona un’immagine, poi convertila e scaricala con successo.',
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
