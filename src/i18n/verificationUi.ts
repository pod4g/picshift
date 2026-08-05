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
    homepageTitle: 'Verify local processing yourself:',
    homepageIntro: '',
    homepageSteps: [
      'While online, complete the exact input-to-output workflow once.',
      'Then disconnect, reload the same page, and repeat it with another test image.',
    ],
    homepageNote: 'Offline reuse applies only after that page, workflow resources, and codec have loaded successfully online. A different or first-use codec may still need a network connection.',
    homepageCta: 'View privacy and local processing evidence',
    docsVerifyHeading: 'How to verify this yourself',
    docsVerifyIntro: 'Use a non-sensitive test image and keep browser DevTools Network open:',
    docsVerifySteps: [
      'While online, open the exact tool and complete one conversion and download. This loads that route, workflow code, and codec.',
      'In DevTools Network, enable Preserve log, clear the request list, and repeat the conversion. Ordinary page or analytics requests may appear; the source image should not be sent as a request payload.',
      'Set Network to Offline (or disable Wi-Fi), reload the same tool page, and repeat the same input-to-output workflow.',
      'If a new format or workflow fails offline, reconnect, complete that exact workflow once online, and then repeat the offline test.',
    ],
    docsBoundaryHeading: 'Scope and boundaries',
    docsBoundaryItems: [
      'An offline result applies only to the browser profile, device, route, workflow resources, and codec that were successfully loaded and cached.',
      'Passing this test shows that the observed workflow did not require an image upload; it is not a third-party security audit and does not cover browser extensions or other software.',
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
    homepageTitle: '自行验证本地处理：',
    homepageIntro: '',
    homepageSteps: ['联网状态下，先完整执行一次所需的输入到输出流程。', '随后断网，重新加载同一页面，再用另一张测试图片重复该流程。'],
    homepageNote: '离线复用仅适用于已在线成功加载过的页面、流程资源和编解码器；切换到尚未使用过的编解码器时仍可能需要联网。',
    homepageCta: '查看隐私与本地处理证据',
    docsVerifyHeading: '如何自行验证',
    docsVerifyIntro: '请使用不敏感的测试图片，并保持浏览器开发者工具的 Network 面板开启：',
    docsVerifySteps: [
      '联网打开目标工具，完成一次转换并下载，以加载该页面、流程代码和编解码器。',
      '在 Network 面板开启 Preserve log，清空请求列表后再次转换。页面或分析请求可能正常出现，但源图片不应作为请求载荷发送。',
      '将 Network 设为 Offline（或关闭 Wi-Fi），重新加载同一工具页面，并重复相同的输入到输出流程。',
      '如果新格式或新流程离线失败，请恢复联网，先在线成功执行一次该流程，再重复断网测试。',
    ],
    docsBoundaryHeading: '适用范围与边界',
    docsBoundaryItems: [
      '离线结果只适用于已经成功加载并缓存的浏览器配置、设备、页面、流程资源和编解码器。',
      '测试通过说明本次观察到的流程无需上传图片，但它不等同于第三方安全审计，也不覆盖浏览器扩展或其他软件。',
      '为保证稳定性能，单次批量处理上限为 200 张。',
    ],
    docsEvidenceHeading: '技术证据链接',
    docsEvidenceItems: ['隐私政策：法律条款与承诺说明。', '格式兼容文档：输入输出格式支持范围。', '画质文档：压缩与画质行为的实践说明。'],
  },
  'zh-Hant': {
    homepageTitle: '自行驗證本機處理：',
    homepageIntro: '',
    homepageSteps: ['連線狀態下，先完整執行一次所需的輸入到輸出流程。', '接著中斷網路，重新載入同一頁面，再用另一張測試圖片重複該流程。'],
    homepageNote: '離線重複使用僅適用於已在線上成功載入的頁面、流程資源與編解碼器；切換到尚未使用的編解碼器時仍可能需要網路。',
    homepageCta: '查看隱私與本機處理證據',
    docsVerifyHeading: '如何自行驗證',
    docsVerifyIntro: '請使用不敏感的測試圖片，並保持瀏覽器開發者工具的 Network 面板開啟：',
    docsVerifySteps: [
      '連線開啟目標工具，完成一次轉換與下載，以載入該頁面、流程程式與編解碼器。',
      '在 Network 面板開啟 Preserve log，清空請求後再次轉換。一般頁面或分析請求可能出現，但來源圖片不應作為請求內容送出。',
      '將 Network 設為 Offline（或關閉 Wi-Fi），重新載入同一工具頁面，並重複相同的輸入到輸出流程。',
      '若新格式或新流程離線失敗，請恢復連線，先在線上成功執行一次，再重複離線測試。',
    ],
    docsBoundaryHeading: '適用範圍與邊界',
    docsBoundaryItems: [
      '離線結果只適用於已成功載入並快取的瀏覽器設定檔、裝置、頁面、流程資源與編解碼器。',
      '測試通過表示觀察到的流程無需上傳圖片，但不等同第三方安全稽核，也不涵蓋瀏覽器擴充功能或其他軟體。',
      '為確保穩定效能，單次批量處理上限為 200 張。',
    ],
    docsEvidenceHeading: '技術證據連結',
    docsEvidenceItems: ['隱私政策：法律條款與承諾說明。', '格式相容文件：輸入輸出格式支援範圍。', '畫質文件：壓縮與畫質行為的實務說明。'],
  },
  es: {
    homepageTitle: 'Verifica el procesamiento local:',
    homepageIntro: '',
    homepageSteps: [
      'Con conexión, completa una vez el flujo exacto de entrada a salida.',
      'Después desconéctate, recarga la misma página y repítelo con otra imagen de prueba.',
    ],
    homepageNote: 'La reutilización sin conexión solo se aplica después de que esa página, los recursos del flujo y el códec se hayan cargado correctamente en línea. Un códec distinto o usado por primera vez puede seguir necesitando conexión.',
    homepageCta: 'Ver evidencia de privacidad y procesamiento local',
    docsVerifyHeading: 'Cómo verificarlo tú mismo',
    docsVerifyIntro: 'Usa una imagen de prueba no sensible y mantén abierto Network en DevTools:',
    docsVerifySteps: [
      'Con conexión, abre la herramienta exacta y completa una conversión y descarga para cargar la ruta, el código del flujo y el códec.',
      'En Network activa Preserve log, limpia la lista y repite la conversión. Puede haber solicitudes de página o analítica; la imagen de origen no debe enviarse como carga de una solicitud.',
      'Pon Network en Offline (o apaga Wi-Fi), recarga la misma página y repite el mismo flujo de entrada a salida.',
      'Si un formato o flujo nuevo falla sin conexión, vuelve a conectarte, complétalo una vez en línea y repite la prueba.',
    ],
    docsBoundaryHeading: 'Alcance y límites',
    docsBoundaryItems: [
      'El resultado sin conexión solo cubre el perfil, dispositivo, ruta, recursos y códec cargados y guardados correctamente.',
      'Superar la prueba indica que el flujo observado no necesitó subir la imagen; no es una auditoría de seguridad externa ni cubre extensiones u otro software.',
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
    homepageTitle: 'Vérifiez vous-même le traitement local :',
    homepageIntro: '',
    homepageSteps: [
      'En ligne, terminez une fois le parcours exact de l’entrée à la sortie.',
      'Coupez ensuite le réseau, rechargez la même page et répétez avec une autre image test.',
    ],
    homepageNote: 'La réutilisation hors ligne ne vaut qu’après le chargement réussi en ligne de cette page, des ressources du parcours et du codec. Un codec différent ou utilisé pour la première fois peut encore nécessiter le réseau.',
    homepageCta: 'Voir les preuves de confidentialité et de traitement local',
    docsVerifyHeading: 'Comment vérifier vous-même',
    docsVerifyIntro: 'Utilisez une image test non sensible et gardez l’onglet Network des DevTools ouvert :',
    docsVerifySteps: [
      'En ligne, ouvrez l’outil exact et terminez une conversion et un téléchargement pour charger la route, le code du parcours et le codec.',
      'Dans Network, activez Preserve log, effacez la liste et recommencez. Des requêtes de page ou d’analytics peuvent apparaître ; l’image source ne doit pas être envoyée dans le corps d’une requête.',
      'Passez Network sur Offline (ou coupez le Wi-Fi), rechargez la même page et répétez le même parcours entrée-sortie.',
      'Si un nouveau format ou parcours échoue hors ligne, reconnectez-vous, terminez-le une fois en ligne, puis refaites le test.',
    ],
    docsBoundaryHeading: 'Portée et limites',
    docsBoundaryItems: [
      'Le résultat hors ligne ne couvre que le profil du navigateur, l’appareil, la route, les ressources et le codec chargés et mis en cache avec succès.',
      'La réussite montre que le parcours observé n’a pas exigé l’envoi de l’image ; ce n’est pas un audit tiers et cela ne couvre pas les extensions ou autres logiciels.',
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
    homepageTitle: 'Lokale Verarbeitung selbst prüfen:',
    homepageIntro: '',
    homepageSteps: [
      'Den gewünschten Ein-zu-Ausgabe-Ablauf einmal online vollständig ausführen.',
      'Danach die Verbindung trennen, dieselbe Seite neu laden und den Ablauf mit einem weiteren Testbild wiederholen.',
    ],
    homepageNote: 'Die Offline-Wiederverwendung gilt erst, nachdem diese Seite, die Ablaufressourcen und der Codec online erfolgreich geladen wurden. Ein anderer oder erstmals verwendeter Codec kann weiterhin eine Verbindung benötigen.',
    homepageCta: 'Datenschutz- und Local-Processing-Nachweise ansehen',
    docsVerifyHeading: 'So prüfst du es selbst',
    docsVerifyIntro: 'Ein unkritisches Testbild verwenden und in den DevTools den Bereich Network geöffnet lassen:',
    docsVerifySteps: [
      'Online das genaue Tool öffnen und eine Konvertierung samt Download abschließen, damit Route, Ablaufcode und Codec geladen werden.',
      'In Network Preserve log aktivieren, die Liste leeren und erneut konvertieren. Normale Seiten- oder Analyseanfragen können erscheinen; das Quellbild darf nicht als Request-Payload gesendet werden.',
      'Network auf Offline stellen (oder WLAN ausschalten), dieselbe Tool-Seite neu laden und denselben Ein-zu-Ausgabe-Ablauf wiederholen.',
      'Scheitert ein neues Format oder ein neuer Ablauf offline, wieder verbinden, ihn einmal online abschließen und den Offline-Test wiederholen.',
    ],
    docsBoundaryHeading: 'Geltungsbereich und Grenzen',
    docsBoundaryItems: [
      'Das Offline-Ergebnis gilt nur für das Browserprofil, Gerät, die Route, Ablaufressourcen und den Codec, die erfolgreich geladen und zwischengespeichert wurden.',
      'Ein erfolgreicher Test zeigt, dass der beobachtete Ablauf keinen Bildupload erforderte; er ist kein externes Sicherheitsaudit und deckt Erweiterungen oder andere Software nicht ab.',
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
    homepageTitle: 'ローカル処理を自分で確認：',
    homepageIntro: '',
    homepageSteps: ['オンラインで、必要な入力から出力までの処理を一度完了します。', 'その後オフラインにし、同じページを再読み込みして別のテスト画像で同じ処理を繰り返します。'],
    homepageNote: 'オフラインで再利用できるのは、そのページ、処理リソース、コーデックがオンラインで正常に読み込まれた後に限られます。未使用の別コーデックには通信が必要な場合があります。',
    homepageCta: 'プライバシーとローカル処理の根拠を見る',
    docsVerifyHeading: '自分で確認する方法',
    docsVerifyIntro: '機密でないテスト画像を使い、ブラウザーの DevTools で Network を開いたままにします：',
    docsVerifySteps: [
      'オンラインで対象ツールを開き、変換とダウンロードを一度完了して、ページ、処理コード、コーデックを読み込みます。',
      'Network で Preserve log を有効にし、一覧を消去して再度変換します。通常のページや解析リクエストは表示される場合がありますが、元画像がリクエスト本文として送信されないことを確認します。',
      'Network を Offline にするか Wi-Fi を切り、同じツールページを再読み込みして同じ入出力処理を繰り返します。',
      '新しい形式や処理がオフラインで失敗した場合は、再接続してその処理をオンラインで一度完了し、再テストします。',
    ],
    docsBoundaryHeading: '適用範囲と境界',
    docsBoundaryItems: [
      'オフライン結果が適用されるのは、正常に読み込まれてキャッシュされたブラウザープロファイル、端末、ページ、処理リソース、コーデックだけです。',
      'テスト成功は観察した処理に画像アップロードが不要だったことを示しますが、第三者のセキュリティ監査ではなく、拡張機能や他のソフトウェアは対象外です。',
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
    homepageTitle: '로컬 처리를 직접 확인하세요:',
    homepageIntro: '',
    homepageSteps: ['온라인 상태에서 필요한 입력-출력 작업을 한 번 끝까지 완료합니다.', '그다음 연결을 끊고 같은 페이지를 다시 불러온 뒤 다른 테스트 이미지로 같은 작업을 반복합니다.'],
    homepageNote: '오프라인 재사용은 해당 페이지, 작업 리소스, 코덱이 온라인에서 성공적으로 로드된 뒤에만 적용됩니다. 처음 쓰는 다른 코덱은 여전히 네트워크가 필요할 수 있습니다.',
    homepageCta: '개인정보 보호 및 로컬 처리 근거 보기',
    docsVerifyHeading: '직접 확인하는 방법',
    docsVerifyIntro: '민감하지 않은 테스트 이미지를 사용하고 브라우저 DevTools의 Network 패널을 열어 둡니다:',
    docsVerifySteps: [
      '온라인에서 정확한 도구를 열고 변환과 다운로드를 한 번 완료해 페이지, 작업 코드, 코덱을 로드합니다.',
      'Network에서 Preserve log를 켜고 목록을 비운 뒤 다시 변환합니다. 일반 페이지나 분석 요청은 나타날 수 있지만 원본 이미지가 요청 본문으로 전송되어서는 안 됩니다.',
      'Network를 Offline으로 설정하거나 Wi-Fi를 끄고, 같은 도구 페이지를 다시 불러와 동일한 입력-출력 작업을 반복합니다.',
      '새 형식이나 작업이 오프라인에서 실패하면 다시 연결해 그 작업을 온라인에서 한 번 완료한 뒤 재시험합니다.',
    ],
    docsBoundaryHeading: '적용 범위와 경계',
    docsBoundaryItems: [
      '오프라인 결과는 성공적으로 로드되고 캐시된 브라우저 프로필, 기기, 페이지, 작업 리소스와 코덱에만 적용됩니다.',
      '시험 통과는 관찰한 작업에 이미지 업로드가 필요하지 않았음을 보여 주지만, 제3자 보안 감사가 아니며 확장 프로그램이나 다른 소프트웨어는 다루지 않습니다.',
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
    homepageTitle: 'Verifique o processamento local:',
    homepageIntro: '',
    homepageSteps: [
      'Com conexão, conclua uma vez o fluxo exato de entrada até a saída.',
      'Depois desconecte, recarregue a mesma página e repita com outra imagem de teste.',
    ],
    homepageNote: 'A reutilização offline só vale depois que a página, os recursos do fluxo e o codec forem carregados com sucesso online. Um codec diferente ou usado pela primeira vez ainda pode precisar de rede.',
    homepageCta: 'Ver evidências de privacidade e processamento local',
    docsVerifyHeading: 'Como verificar por conta própria',
    docsVerifyIntro: 'Use uma imagem de teste não sensível e mantenha o painel Network do DevTools aberto:',
    docsVerifySteps: [
      'Online, abra a ferramenta exata e conclua uma conversão e download para carregar a rota, o código do fluxo e o codec.',
      'Em Network, ative Preserve log, limpe a lista e repita. Pedidos normais da página ou de analytics podem aparecer; a imagem de origem não deve ser enviada como conteúdo de um pedido.',
      'Defina Network como Offline (ou desligue o Wi-Fi), recarregue a mesma página e repita o mesmo fluxo de entrada e saída.',
      'Se um formato ou fluxo novo falhar offline, reconecte, conclua-o uma vez online e repita o teste.',
    ],
    docsBoundaryHeading: 'Escopo e limites',
    docsBoundaryItems: [
      'O resultado offline cobre apenas o perfil, dispositivo, rota, recursos e codec carregados e guardados com sucesso.',
      'Passar no teste mostra que o fluxo observado não exigiu upload da imagem; não é uma auditoria de segurança externa e não cobre extensões ou outros programas.',
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
    homepageTitle: 'Проверьте локальную обработку самостоятельно:',
    homepageIntro: '',
    homepageSteps: [
      'При подключении один раз полностью выполните нужный сценарий от входного до выходного формата.',
      'Затем отключите сеть, перезагрузите ту же страницу и повторите сценарий с другим тестовым изображением.',
    ],
    homepageNote: 'Повторное использование офлайн возможно только после успешной онлайн-загрузки этой страницы, ресурсов сценария и кодека. Другой или впервые используемый кодек может по-прежнему требовать сеть.',
    homepageCta: 'Смотреть доказательства приватности и локальной обработки',
    docsVerifyHeading: 'Как проверить самостоятельно',
    docsVerifyIntro: 'Используйте нечувствительное тестовое изображение и оставьте открытой вкладку Network в DevTools:',
    docsVerifySteps: [
      'При подключении откройте нужный инструмент и один раз завершите конвертацию и скачивание, чтобы загрузить маршрут, код сценария и кодек.',
      'В Network включите Preserve log, очистите список и повторите конвертацию. Обычные запросы страницы или аналитики допустимы; исходное изображение не должно отправляться в теле запроса.',
      'Переведите Network в Offline (или отключите Wi-Fi), перезагрузите ту же страницу и повторите тот же сценарий вход-выход.',
      'Если новый формат или сценарий не работает офлайн, подключитесь, один раз выполните его онлайн и повторите проверку.',
    ],
    docsBoundaryHeading: 'Область действия и границы',
    docsBoundaryItems: [
      'Результат офлайн относится только к профилю браузера, устройству, маршруту, ресурсам и кодеку, которые были успешно загружены и закэшированы.',
      'Успешный тест показывает, что наблюдаемый сценарий не требовал загрузки изображения; это не сторонний аудит безопасности и он не охватывает расширения или другое ПО.',
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
    homepageTitle: 'تحقّق بنفسك من المعالجة المحلية:',
    homepageIntro: '',
    homepageSteps: ['أكمل مرة واحدة وأنت متصل مسار الإدخال إلى الإخراج المطلوب.', 'ثم افصل الشبكة وأعد تحميل الصفحة نفسها وكرر المسار بصورة اختبار أخرى.'],
    homepageNote: 'إعادة الاستخدام دون اتصال تنطبق فقط بعد تحميل الصفحة وموارد المسار وبرنامج الترميز بنجاح أثناء الاتصال. قد يظل برنامج ترميز آخر أو مستخدم لأول مرة بحاجة إلى الشبكة.',
    homepageCta: 'عرض أدلة الخصوصية والمعالجة المحلية',
    docsVerifyHeading: 'كيف تتحقق بنفسك',
    docsVerifyIntro: 'استخدم صورة اختبار غير حساسة واترك لوحة Network في DevTools مفتوحة:',
    docsVerifySteps: [
      'أثناء الاتصال افتح الأداة المطلوبة وأكمل تحويلًا وتنزيلًا واحدًا لتحميل الصفحة وكود المسار وبرنامج الترميز.',
      'فعّل Preserve log في Network وامسح القائمة ثم كرر التحويل. قد تظهر طلبات الصفحة أو التحليلات العادية، لكن يجب ألا تُرسل الصورة الأصلية ضمن محتوى أي طلب.',
      'اضبط Network على Offline أو أوقف Wi-Fi، ثم أعد تحميل صفحة الأداة نفسها وكرر مسار الإدخال والإخراج نفسه.',
      'إذا فشل تنسيق أو مسار جديد دون اتصال، أعد الاتصال وأكمله مرة واحدة عبر الإنترنت ثم أعد الاختبار.',
    ],
    docsBoundaryHeading: 'النطاق والحدود',
    docsBoundaryItems: [
      'تنطبق نتيجة العمل دون اتصال فقط على ملف المتصفح والجهاز والصفحة وموارد المسار وبرنامج الترميز التي حُمّلت وخُزنت مؤقتًا بنجاح.',
      'نجاح الاختبار يوضح أن المسار الملاحظ لم يحتج إلى رفع الصورة؛ لكنه ليس تدقيقًا أمنيًا من جهة خارجية ولا يغطي إضافات المتصفح أو البرامج الأخرى.',
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
    homepageTitle: 'Verifica in autonomia l’elaborazione locale:',
    homepageIntro: '',
    homepageSteps: [
      'Online, completa una volta il flusso esatto dall’input all’output.',
      'Poi disconnettiti, ricarica la stessa pagina e ripeti con un’altra immagine di prova.',
    ],
    homepageNote: 'Il riutilizzo offline vale solo dopo che pagina, risorse del flusso e codec sono stati caricati correttamente online. Un codec diverso o usato per la prima volta può richiedere ancora la rete.',
    homepageCta: 'Vedi evidenze su privacy ed elaborazione locale',
    docsVerifyHeading: 'Come verificarlo da solo',
    docsVerifyIntro: 'Usa un’immagine di prova non sensibile e tieni aperto Network nei DevTools:',
    docsVerifySteps: [
      'Online, apri lo strumento preciso e completa una conversione e un download per caricare route, codice del flusso e codec.',
      'In Network attiva Preserve log, svuota l’elenco e ripeti. Possono comparire normali richieste di pagina o analytics; l’immagine sorgente non deve essere inviata come payload di una richiesta.',
      'Imposta Network su Offline (o spegni il Wi-Fi), ricarica la stessa pagina e ripeti lo stesso flusso input-output.',
      'Se un formato o flusso nuovo fallisce offline, riconnettiti, completalo una volta online e ripeti il test.',
    ],
    docsBoundaryHeading: 'Ambito e limiti',
    docsBoundaryItems: [
      'Il risultato offline copre solo profilo del browser, dispositivo, route, risorse e codec caricati e memorizzati correttamente.',
      'Superare il test mostra che il flusso osservato non ha richiesto l’upload dell’immagine; non è un audit di sicurezza esterno e non copre estensioni o altri software.',
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
