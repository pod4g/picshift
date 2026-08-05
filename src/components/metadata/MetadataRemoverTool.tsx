import { useState, useCallback, useRef, useEffect } from 'react'
import type { Locale } from '../../i18n/config'
import {
  trackMetadataScan,
  trackMetadataClean,
  trackMetadataDownload,
  trackMetadataClear,
} from '../../lib/analytics'
import { createClientId } from '../../lib/clientId'
import {
  applyFileLimits,
  formatSize,
} from '../../lib/format-utils'

const UI: Record<string, Record<string, string>> = {
  en: {
    dropTitle: 'Drop images here',
    dropHint:
      'or click to browse, or paste (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'See what metadata is hidden in your photos',
    addMore: 'Add more files',
    scanning: 'Scanning files...',
    clearAll: 'Clear all',
    fieldsFound: 'fields found',
    sensitive: 'sensitive',
    noMetadata:
      'No supported metadata fields were detected. The image will still be decoded and re-encoded before download.',
    scanFailed: 'Metadata scan could not be completed',
    scanFailedHint:
      'You can still try to re-encode this image. If image decoding fails, no download will be offered.',
    fieldsTravel: 'fields will travel with this file unless removed',
    fieldsRemoved: 'detected fields not copied',
    metadataRemoved: 'detected metadata fields not copied',
    reencoded: 're-encoded; no supported metadata was detected',
    reencodedAfterScanFailure: 're-encoded after the metadata scan failed',
    cleanedFiles: 'files re-encoded',
    cleanFailed: 'failed',
    cleanError: 'Image could not be decoded and re-encoded',
    removeBtn: 'Re-encode images & download',
    removing: 'Removing metadata...',
    downloadBtn: 'Download re-encoded image',
    downloadZip: 'Download re-encoded images (ZIP)',
    footerNote:
      'Re-encoding creates a new image without intentionally copying detected metadata. Browser-added encoder or color-profile data may remain.',
    limitHint: 'Limits: 50 MB per file · 200 files · 1 GB total',
    limitFileSize: 'file(s) exceeded 50 MB',
    limitFileCount: 'file(s) exceeded the 200-file limit',
    limitTotalSize: 'file(s) exceeded the 1 GB total limit',
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
    sensitive: '项敏感数据',
    noMetadata: '未检测到支持识别的元数据字段。下载前仍会解码并重新编码图片。',
    scanFailed: '无法完成元数据扫描',
    scanFailedHint: '仍可尝试重新编码；如果图片解码失败，将不会提供下载。',
    fieldsTravel: '项信息将随文件传播',
    fieldsRemoved: '项检测到的字段未被复制',
    metadataRemoved: '项检测到的元数据字段未被复制',
    reencoded: '已重新编码；未检测到支持识别的元数据',
    reencodedAfterScanFailure: '扫描失败后已重新编码',
    cleanedFiles: '个文件已重新编码',
    cleanFailed: '个失败',
    cleanError: '图片无法解码并重新编码',
    removeBtn: '重新编码图片并下载',
    removing: '正在清除元数据...',
    downloadBtn: '下载重新编码的图片',
    downloadZip: '下载重新编码的图片 (ZIP)',
    footerNote:
      '重新编码会创建新图片，并且不会主动复制检测到的元数据；浏览器编码器或色彩配置仍可能写入数据。',
    limitHint: '限制：每个文件 50 MB · 200 个文件 · 总计 1 GB',
    limitFileSize: '个文件超过 50 MB',
    limitFileCount: '个文件超过 200 个文件的限制',
    limitTotalSize: '个文件超过总计 1 GB 的限制',
    file: '个文件',
    files: '个文件',
    metadataFields: '项元数据',
    removedFrom: '项元数据已从',
  },
  ja: {
    dropTitle: '画像をドロップ',
    dropHint:
      'クリックで選択、またはペースト (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: '写真に埋め込まれたメタデータを確認',
    addMore: 'さらに追加',
    scanning: 'スキャン中...',
    clearAll: 'すべてクリア',
    fieldsFound: '項目検出',
    sensitive: '項目が機密',
    noMetadata:
      '対応するメタデータ項目は検出されませんでした。ダウンロード前に画像をデコードして再エンコードします。',
    scanFailed: 'メタデータのスキャンを完了できませんでした',
    scanFailedHint:
      '再エンコードは試行できます。画像のデコードに失敗した場合、ダウンロードは提供されません。',
    fieldsTravel: '項目がファイルと共に送信されます',
    fieldsRemoved: '件の検出項目をコピーせずに処理',
    metadataRemoved: '件の検出メタデータをコピーせずに処理',
    reencoded: '再エンコード済み（対応メタデータは未検出）',
    reencodedAfterScanFailure: 'スキャン失敗後に再エンコード済み',
    cleanedFiles: '件を再エンコード',
    cleanFailed: '件失敗',
    cleanError: '画像をデコードして再エンコードできませんでした',
    removeBtn: '画像を再エンコードしてダウンロード',
    removing: 'メタデータを削除中...',
    downloadBtn: '再エンコードした画像をダウンロード',
    downloadZip: '再エンコードした画像をダウンロード (ZIP)',
    footerNote:
      '再エンコードでは、検出したメタデータを意図的にコピーせず新しい画像を作成します。ブラウザーのエンコーダーやカラープロファイルのデータが残る場合があります。',
    limitHint: '上限：1ファイル 50 MB · 200ファイル · 合計 1 GB',
    limitFileSize: '件が 50 MB を超えています',
    limitFileCount: '件が 200ファイルの上限を超えています',
    limitTotalSize: '件が合計 1 GB の上限を超えています',
    file: 'ファイル',
    files: 'ファイル',
    metadataFields: '項目',
    removedFrom: '項目を削除（',
  },
  es: {
    dropTitle: 'Arrastra imágenes aquí',
    dropHint:
      'o haz clic para seleccionar, o pega (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Descubre qué metadatos esconden tus fotos',
    addMore: 'Agregar más',
    scanning: 'Escaneando...',
    clearAll: 'Limpiar todo',
    fieldsFound: 'campos encontrados',
    sensitive: 'sensibles',
    noMetadata:
      'No se detectaron campos de metadatos compatibles. La imagen se decodificará y volverá a codificar antes de descargarla.',
    scanFailed: 'No se pudo completar el análisis de metadatos',
    scanFailedHint:
      'Aún puedes intentar recodificar la imagen. Si falla la decodificación, no se ofrecerá una descarga.',
    fieldsTravel: 'campos viajan con este archivo',
    fieldsRemoved: 'campos detectados no copiados',
    metadataRemoved: 'campos de metadatos detectados no copiados',
    reencoded: 'recodificada; no se detectaron metadatos compatibles',
    reencodedAfterScanFailure: 'recodificada tras fallar el análisis',
    cleanedFiles: 'archivos recodificados',
    cleanFailed: 'fallidos',
    cleanError: 'No se pudo decodificar y recodificar la imagen',
    removeBtn: 'Recodificar imágenes y descargar',
    removing: 'Eliminando metadatos...',
    downloadBtn: 'Descargar imagen recodificada',
    downloadZip: 'Descargar imágenes recodificadas (ZIP)',
    footerNote:
      'La recodificación crea una imagen nueva sin copiar intencionadamente los metadatos detectados. Pueden quedar datos del codificador o del perfil de color añadidos por el navegador.',
    limitHint: 'Límites: 50 MB por archivo · 200 archivos · 1 GB en total',
    limitFileSize: 'archivo(s) superaron 50 MB',
    limitFileCount: 'archivo(s) superaron el límite de 200 archivos',
    limitTotalSize: 'archivo(s) superaron el límite total de 1 GB',
    file: 'archivo',
    files: 'archivos',
    metadataFields: 'campos',
    removedFrom: 'campos eliminados de',
  },
  fr: {
    dropTitle: 'Déposez vos images ici',
    dropHint:
      'ou cliquez pour parcourir, ou collez (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Découvrez les métadonnées cachées dans vos photos',
    addMore: "Ajouter d'autres",
    scanning: 'Analyse en cours...',
    clearAll: 'Tout effacer',
    fieldsFound: 'champs trouvés',
    sensitive: 'sensibles',
    noMetadata:
      'Aucun champ de métadonnées pris en charge n’a été détecté. L’image sera tout de même décodée et réencodée avant le téléchargement.',
    scanFailed: 'L’analyse des métadonnées n’a pas pu aboutir',
    scanFailedHint:
      'Vous pouvez toujours tenter de réencoder l’image. Si le décodage échoue, aucun téléchargement ne sera proposé.',
    fieldsTravel: 'champs accompagnent ce fichier',
    fieldsRemoved: 'champs détectés non copiés',
    metadataRemoved: 'champs de métadonnées détectés non copiés',
    reencoded: 'réencodée ; aucune métadonnée prise en charge détectée',
    reencodedAfterScanFailure: 'réencodée après l’échec de l’analyse',
    cleanedFiles: 'fichiers réencodés',
    cleanFailed: 'en échec',
    cleanError: 'L’image n’a pas pu être décodée et réencodée',
    removeBtn: 'Réencoder les images et télécharger',
    removing: 'Suppression en cours...',
    downloadBtn: "Télécharger l'image réencodée",
    downloadZip: 'Télécharger les images réencodées (ZIP)',
    footerNote:
      'Le réencodage crée une nouvelle image sans copier volontairement les métadonnées détectées. Des données ajoutées par l’encodeur du navigateur ou le profil colorimétrique peuvent subsister.',
    limitHint: 'Limites : 50 Mo par fichier · 200 fichiers · 1 Go au total',
    limitFileSize: 'fichier(s) dépassaient 50 Mo',
    limitFileCount: 'fichier(s) dépassaient la limite de 200 fichiers',
    limitTotalSize: 'fichier(s) dépassaient la limite totale de 1 Go',
    file: 'fichier',
    files: 'fichiers',
    metadataFields: 'champs',
    removedFrom: 'champs supprimés de',
  },
  pt: {
    dropTitle: 'Arraste imagens aqui',
    dropHint:
      'ou clique pra selecionar, ou cole (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Veja o que tá escondido nas suas fotos',
    addMore: 'Adicionar mais',
    scanning: 'Escaneando...',
    clearAll: 'Limpar tudo',
    fieldsFound: 'campos encontrados',
    sensitive: 'sensíveis',
    noMetadata:
      'Nenhum campo de metadados compatível foi detectado. A imagem ainda será decodificada e recodificada antes do download.',
    scanFailed: 'Não foi possível concluir a verificação de metadados',
    scanFailedHint:
      'Você ainda pode tentar recodificar a imagem. Se a decodificação falhar, nenhum download será oferecido.',
    fieldsTravel: 'campos viajam com este arquivo',
    fieldsRemoved: 'campos detectados não copiados',
    metadataRemoved: 'campos de metadados detectados não copiados',
    reencoded: 'recodificada; nenhum metadado compatível foi detectado',
    reencodedAfterScanFailure: 'recodificada após falha na verificação',
    cleanedFiles: 'arquivos recodificados',
    cleanFailed: 'com falha',
    cleanError: 'Não foi possível decodificar e recodificar a imagem',
    removeBtn: 'Recodificar imagens e baixar',
    removing: 'Removendo metadados...',
    downloadBtn: 'Baixar imagem recodificada',
    downloadZip: 'Baixar imagens recodificadas (ZIP)',
    footerNote:
      'A recodificação cria uma nova imagem sem copiar intencionalmente os metadados detectados. Dados do codificador do navegador ou do perfil de cores ainda podem permanecer.',
    limitHint: 'Limites: 50 MB por arquivo · 200 arquivos · 1 GB no total',
    limitFileSize: 'arquivo(s) excederam 50 MB',
    limitFileCount: 'arquivo(s) excederam o limite de 200 arquivos',
    limitTotalSize: 'arquivo(s) excederam o limite total de 1 GB',
    file: 'arquivo',
    files: 'arquivos',
    metadataFields: 'campos',
    removedFrom: 'campos removidos de',
  },
  de: {
    dropTitle: 'Bilder hierher ziehen',
    dropHint:
      'oder klicken zum Auswählen, oder einfügen (Strg+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Welche Metadaten stecken in Ihren Fotos?',
    addMore: 'Weitere hinzufügen',
    scanning: 'Wird gescannt...',
    clearAll: 'Alle entfernen',
    fieldsFound: 'Felder gefunden',
    sensitive: 'sensibel',
    noMetadata:
      'Keine unterstützten Metadatenfelder erkannt. Das Bild wird vor dem Download trotzdem dekodiert und neu kodiert.',
    scanFailed: 'Der Metadaten-Scan konnte nicht abgeschlossen werden',
    scanFailedHint:
      'Sie können die Neukodierung weiterhin versuchen. Schlägt die Bilddekodierung fehl, wird kein Download angeboten.',
    fieldsTravel: 'Felder werden mit der Datei weitergegeben',
    fieldsRemoved: 'erkannte Felder nicht kopiert',
    metadataRemoved: 'erkannte Metadatenfelder nicht kopiert',
    reencoded: 'neu kodiert; keine unterstützten Metadaten erkannt',
    reencodedAfterScanFailure: 'nach fehlgeschlagenem Scan neu kodiert',
    cleanedFiles: 'Dateien neu kodiert',
    cleanFailed: 'fehlgeschlagen',
    cleanError: 'Das Bild konnte nicht dekodiert und neu kodiert werden',
    removeBtn: 'Bilder neu kodieren & herunterladen',
    removing: 'Metadaten werden entfernt...',
    downloadBtn: 'Neu kodiertes Bild herunterladen',
    downloadZip: 'Neu kodierte Bilder herunterladen (ZIP)',
    footerNote:
      'Die Neukodierung erstellt ein neues Bild, ohne erkannte Metadaten absichtlich zu kopieren. Vom Browser-Encoder oder Farbprofil hinzugefügte Daten können verbleiben.',
    limitHint: 'Limits: 50 MB pro Datei · 200 Dateien · 1 GB gesamt',
    limitFileSize: 'Datei(en) überschritten 50 MB',
    limitFileCount: 'Datei(en) überschritten das Limit von 200 Dateien',
    limitTotalSize: 'Datei(en) überschritten das Gesamtlimit von 1 GB',
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
    sensitive: '項敏感資料',
    noMetadata: '未偵測到支援識別的元資料欄位。下載前仍會解碼並重新編碼圖片。',
    scanFailed: '無法完成元資料掃描',
    scanFailedHint: '仍可嘗試重新編碼；如果圖片解碼失敗，將不會提供下載。',
    fieldsTravel: '項資訊將隨檔案傳播',
    fieldsRemoved: '項偵測到的欄位未被複製',
    metadataRemoved: '項偵測到的元資料欄位未被複製',
    reencoded: '已重新編碼；未偵測到支援識別的元資料',
    reencodedAfterScanFailure: '掃描失敗後已重新編碼',
    cleanedFiles: '個檔案已重新編碼',
    cleanFailed: '個失敗',
    cleanError: '圖片無法解碼並重新編碼',
    removeBtn: '重新編碼圖片並下載',
    removing: '正在清除元資料...',
    downloadBtn: '下載重新編碼的圖片',
    downloadZip: '下載重新編碼的圖片 (ZIP)',
    footerNote:
      '重新編碼會建立新圖片，並且不會主動複製偵測到的元資料；瀏覽器編碼器或色彩描述檔仍可能寫入資料。',
    limitHint: '限制：每個檔案 50 MB · 200 個檔案 · 總計 1 GB',
    limitFileSize: '個檔案超過 50 MB',
    limitFileCount: '個檔案超過 200 個檔案的限制',
    limitTotalSize: '個檔案超過總計 1 GB 的限制',
    file: '個檔案',
    files: '個檔案',
    metadataFields: '項元資料',
    removedFrom: '項元資料已從',
  },
  ko: {
    dropTitle: '이미지를 여기에 놓으세요',
    dropHint:
      '또는 클릭하여 선택, 또는 붙여넣기 (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: '사진에 숨겨진 메타데이터를 확인하세요',
    addMore: '더 추가',
    scanning: '스캔 중...',
    clearAll: '모두 지우기',
    fieldsFound: '항목 발견',
    sensitive: '항목 민감',
    noMetadata:
      '지원되는 메타데이터 필드가 감지되지 않았어요. 다운로드 전에 이미지를 디코딩하고 다시 인코딩해요.',
    scanFailed: '메타데이터 스캔을 완료하지 못했어요',
    scanFailedHint:
      '이미지 재인코딩은 계속 시도할 수 있어요. 디코딩에 실패하면 다운로드를 제공하지 않아요.',
    fieldsTravel: '항목이 파일과 함께 전송돼요',
    fieldsRemoved: '개의 감지된 필드를 복사하지 않음',
    metadataRemoved: '개의 감지된 메타데이터 필드를 복사하지 않음',
    reencoded: '재인코딩됨; 지원되는 메타데이터가 감지되지 않음',
    reencodedAfterScanFailure: '스캔 실패 후 재인코딩됨',
    cleanedFiles: '개 파일 재인코딩됨',
    cleanFailed: '개 실패',
    cleanError: '이미지를 디코딩하고 다시 인코딩하지 못했어요',
    removeBtn: '이미지를 재인코딩하고 다운로드',
    removing: '메타데이터 삭제 중...',
    downloadBtn: '재인코딩된 이미지 다운로드',
    downloadZip: '재인코딩된 이미지 다운로드 (ZIP)',
    footerNote:
      '재인코딩은 감지된 메타데이터를 의도적으로 복사하지 않고 새 이미지를 만들어요. 브라우저 인코더나 색상 프로필 데이터는 남을 수 있어요.',
    limitHint: '제한: 파일당 50 MB · 200개 파일 · 총 1 GB',
    limitFileSize: '개 파일이 50 MB를 초과했어요',
    limitFileCount: '개 파일이 200개 제한을 초과했어요',
    limitTotalSize: '개 파일이 총 1 GB 제한을 초과했어요',
    file: '파일',
    files: '파일',
    metadataFields: '항목',
    removedFrom: '항목을 삭제함 (',
  },
  ru: {
    dropTitle: 'Перетащите изображения сюда',
    dropHint:
      'или нажмите для выбора, или вставьте (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Узнайте, какие метаданные скрыты в ваших фото',
    addMore: 'Добавить ещё',
    scanning: 'Сканирование...',
    clearAll: 'Очистить всё',
    fieldsFound: 'полей найдено',
    sensitive: 'конфиденц.',
    noMetadata:
      'Поддерживаемые поля метаданных не обнаружены. Перед скачиванием изображение всё равно будет декодировано и перекодировано.',
    scanFailed: 'Не удалось завершить проверку метаданных',
    scanFailedHint:
      'Можно всё равно попробовать перекодировать изображение. Если декодирование не удастся, скачивание не будет предложено.',
    fieldsTravel: 'полей передаются вместе с файлом',
    fieldsRemoved: 'обнаруженных полей не скопировано',
    metadataRemoved: 'обнаруженных полей метаданных не скопировано',
    reencoded: 'перекодировано; поддерживаемые метаданные не обнаружены',
    reencodedAfterScanFailure: 'перекодировано после ошибки проверки',
    cleanedFiles: 'файлов перекодировано',
    cleanFailed: 'с ошибкой',
    cleanError: 'Не удалось декодировать и перекодировать изображение',
    removeBtn: 'Перекодировать изображения и скачать',
    removing: 'Удаление метаданных...',
    downloadBtn: 'Скачать перекодированное изображение',
    downloadZip: 'Скачать перекодированные изображения (ZIP)',
    footerNote:
      'При перекодировании создаётся новое изображение без намеренного копирования обнаруженных метаданных. Данные кодировщика браузера или цветового профиля могут остаться.',
    limitHint: 'Ограничения: 50 МБ на файл · 200 файлов · 1 ГБ всего',
    limitFileSize: 'файл(а) превысили 50 МБ',
    limitFileCount: 'файл(а) превысили лимит в 200 файлов',
    limitTotalSize: 'файл(а) превысили общий лимит в 1 ГБ',
    file: 'файл',
    files: 'файлов',
    metadataFields: 'полей',
    removedFrom: 'полей удалено из',
  },
  ar: {
    dropTitle: 'اسحب الصور إلى هنا',
    dropHint:
      'أو انقر للاستعراض، أو الصق (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'اكتشف البيانات الوصفية المخفية في صورك',
    addMore: 'إضافة المزيد',
    scanning: 'جارٍ الفحص...',
    clearAll: 'مسح الكل',
    fieldsFound: 'حقول موجودة',
    sensitive: 'حساسة',
    noMetadata:
      'لم تُكتشف حقول بيانات وصفية مدعومة. ستُفك الصورة ويُعاد ترميزها قبل التنزيل على أي حال.',
    scanFailed: 'تعذر إكمال فحص البيانات الوصفية',
    scanFailedHint:
      'لا يزال بإمكانك محاولة إعادة ترميز الصورة. إذا فشل فكها، فلن يتوفر تنزيل.',
    fieldsTravel: 'حقول تنتقل مع هذا الملف',
    fieldsRemoved: 'حقول مكتشفة لم تُنسخ',
    metadataRemoved: 'حقول بيانات وصفية مكتشفة لم تُنسخ',
    reencoded: 'أُعيد الترميز؛ لم تُكتشف بيانات وصفية مدعومة',
    reencodedAfterScanFailure: 'أُعيد الترميز بعد فشل الفحص',
    cleanedFiles: 'ملفات أُعيد ترميزها',
    cleanFailed: 'فشلت',
    cleanError: 'تعذر فك الصورة وإعادة ترميزها',
    removeBtn: 'إعادة ترميز الصور وتنزيلها',
    removing: 'جارٍ إزالة البيانات الوصفية...',
    downloadBtn: 'تنزيل الصورة المعاد ترميزها',
    downloadZip: 'تنزيل الصور المعاد ترميزها (ZIP)',
    footerNote:
      'تنشئ إعادة الترميز صورة جديدة دون نسخ البيانات الوصفية المكتشفة عمدًا. قد تبقى بيانات أضافها مرمّز المتصفح أو ملف الألوان.',
    limitHint: 'الحدود: 50 MB لكل ملف · 200 ملف · إجمالي 1 GB',
    limitFileSize: 'ملف تجاوز 50 MB',
    limitFileCount: 'ملف تجاوز حد 200 ملف',
    limitTotalSize: 'ملف تجاوز الحد الإجمالي 1 GB',
    file: 'ملف',
    files: 'ملفات',
    metadataFields: 'حقول',
    removedFrom: 'حقول أُزيلت من',
  },
  it: {
    dropTitle: 'Trascina le immagini qui',
    dropHint:
      'o clicca per sfogliare, o incolla (Ctrl+V) · JPG, PNG, WebP, HEIC, AVIF',
    dropSubtext: 'Scopri quali metadati sono nascosti nelle tue foto',
    addMore: 'Aggiungi altri',
    scanning: 'Scansione in corso...',
    clearAll: 'Cancella tutto',
    fieldsFound: 'campi trovati',
    sensitive: 'sensibili',
    noMetadata:
      'Non sono stati rilevati campi di metadati supportati. L’immagine verrà comunque decodificata e ricodificata prima del download.',
    scanFailed: 'Impossibile completare la scansione dei metadati',
    scanFailedHint:
      'Puoi comunque provare a ricodificare l’immagine. Se la decodifica non riesce, non sarà disponibile alcun download.',
    fieldsTravel: 'campi viaggiano con questo file',
    fieldsRemoved: 'campi rilevati non copiati',
    metadataRemoved: 'campi di metadati rilevati non copiati',
    reencoded: 'ricodificata; nessun metadato supportato rilevato',
    reencodedAfterScanFailure: 'ricodificata dopo l’errore di scansione',
    cleanedFiles: 'file ricodificati',
    cleanFailed: 'non riusciti',
    cleanError: 'Non è stato possibile decodificare e ricodificare l’immagine',
    removeBtn: 'Ricodifica le immagini e scarica',
    removing: 'Rimozione metadati in corso...',
    downloadBtn: 'Scarica immagine ricodificata',
    downloadZip: 'Scarica immagini ricodificate (ZIP)',
    footerNote:
      'La ricodifica crea una nuova immagine senza copiare intenzionalmente i metadati rilevati. Possono rimanere dati aggiunti dal codificatore del browser o dal profilo colore.',
    limitHint: 'Limiti: 50 MB per file · 200 file · 1 GB totali',
    limitFileSize: 'file hanno superato 50 MB',
    limitFileCount: 'file hanno superato il limite di 200 file',
    limitTotalSize: 'file hanno superato il limite totale di 1 GB',
    file: 'file',
    files: 'file',
    metadataFields: 'campi',
    removedFrom: 'campi rimossi da',
  },
}

function t(lang: string, key: string): string {
  return UI[lang]?.[key] || UI.en[key] || key
}

function heifExportNote(lang: string): string {
  const notes: Record<string, string> = {
    en: "HEIC and HEIF are cleaned on your device, then exported as JPG — browsers don't yet support exporting to HEIC or HEIF in the same format.",
    zh: 'HEIC / HEIF 会在本机完成清理，并以 JPG 导出；浏览器目前还不支持导出为 HEIC / HEIF 格式。',
    'zh-Hant':
      'HEIC / HEIF 會在本機完成清理，並以 JPG 匯出；瀏覽器目前尚不支援匯出為 HEIC / HEIF 格式。',
    ja: 'HEIC / HEIF は端末内でメタデータを除去したうえで JPG として保存されます。ブラウザは現時点では HEIC / HEIF 形式での書き出しに対応していません。',
    es: 'Los archivos HEIC y HEIF se limpian en tu dispositivo y se exportan como JPG: los navegadores aún no permiten exportar en el mismo formato HEIC/HEIF.',
    fr: 'Les fichiers HEIC et HEIF sont nettoyés sur votre appareil, puis exportés en JPG : les navigateurs ne prennent pas encore en charge l’export au même format HEIC/HEIF.',
    de: 'HEIC- und HEIF-Dateien werden auf Ihrem Gerät bereinigt und als JPG exportiert — Browser unterstützen die Ausgabe im gleichen HEIC-/HEIF-Format noch nicht.',
    pt: 'Arquivos HEIC e HEIF são limpos no seu dispositivo e exportados em JPG — os navegadores ainda não oferecem exportação no formato HEIC/HEIF.',
    ko: 'HEIC / HEIF 파일은 기기에서 메타데이터를 정리한 뒤 JPG로 저장됩니다. 브라우저가 아직 같은 HEIC / HEIF 형식으로 보내기를 지원하지 않기 때문입니다.',
    ru: 'Файлы HEIC и HEIF обрабатываются на вашем устройстве и сохраняются как JPG — в браузерах пока нет поддержки экспорта в том же формате HEIC/HEIF.',
    ar: 'تُنظَّف ملفات HEIC و HEIF على جهازك ثم تُصدَّر بصيغة JPG، لأن المتصفحات لا تدعم حتى الآن التصدير بنفس صيغة HEIC/HEIF.',
    it: 'I file HEIC e HEIF vengono puliti sul dispositivo ed esportati in JPG: i browser non supportano ancora l’esportazione nello stesso formato HEIC/HEIF.',
  }
  return notes[lang] || notes.en
}

const FIELD_LABELS: Record<string, Record<string, string>> = {
  en: {},
  zh: {
    GPSLatitude: 'GPS 位置',
    Make: '设备品牌',
    Model: '设备型号',
    LensModel: '镜头',
    SerialNumber: '序列号',
    Software: '软件',
    Artist: '作者',
    Copyright: '版权',
    DateTimeOriginal: '拍摄时间',
    CreateDate: '创建时间',
    ModifyDate: '修改时间',
    ExposureTime: '快门',
    FNumber: '光圈',
    ISO: 'ISO',
    FocalLength: '焦距',
    ImageWidth: '宽度',
    ImageHeight: '高度',
    ColorSpace: '色彩空间',
    ImageDescription: '描述',
    ExifMetadata: 'EXIF 元数据',
    XmpMetadata: 'XMP 元数据',
    IccProfile: 'ICC 色彩配置',
  },
  'zh-Hant': {
    GPSLatitude: 'GPS 位置',
    Make: '裝置品牌',
    Model: '裝置型號',
    LensModel: '鏡頭',
    SerialNumber: '序號',
    Software: '軟體',
    Artist: '作者',
    Copyright: '版權',
    DateTimeOriginal: '拍攝時間',
    CreateDate: '建立時間',
    ModifyDate: '修改時間',
    ExposureTime: '快門',
    FNumber: '光圈',
    ISO: 'ISO',
    FocalLength: '焦距',
    ImageWidth: '寬度',
    ImageHeight: '高度',
    ColorSpace: '色彩空間',
    ImageDescription: '描述',
    ExifMetadata: 'EXIF 元資料',
    XmpMetadata: 'XMP 元資料',
    IccProfile: 'ICC 色彩描述檔',
  },
  ja: {
    GPSLatitude: 'GPS 位置',
    Make: 'メーカー',
    Model: '機種名',
    LensModel: 'レンズ',
    SerialNumber: 'シリアル番号',
    Software: 'ソフトウェア',
    Artist: '作成者',
    Copyright: '著作権',
    DateTimeOriginal: '撮影日時',
    CreateDate: '作成日時',
    ModifyDate: '更新日時',
    ExposureTime: 'シャッター速度',
    FNumber: '絞り値',
    ISO: 'ISO',
    FocalLength: '焦点距離',
    ImageWidth: '幅',
    ImageHeight: '高さ',
    ColorSpace: '色空間',
    ImageDescription: '説明',
    ExifMetadata: 'EXIF メタデータ',
    XmpMetadata: 'XMP メタデータ',
    IccProfile: 'ICC プロファイル',
  },
  es: {
    GPSLatitude: 'Ubicación GPS',
    Make: 'Marca de cámara',
    Model: 'Modelo de cámara',
    LensModel: 'Lente',
    SerialNumber: 'Número de serie',
    Software: 'Software',
    Artist: 'Autor',
    Copyright: 'Copyright',
    DateTimeOriginal: 'Fecha de captura',
    CreateDate: 'Fecha de creación',
    ModifyDate: 'Fecha de modificación',
    ExposureTime: 'Exposición',
    FNumber: 'Apertura',
    ISO: 'ISO',
    FocalLength: 'Distancia focal',
    ImageWidth: 'Ancho',
    ImageHeight: 'Alto',
    ColorSpace: 'Espacio de color',
    ImageDescription: 'Descripción',
    ExifMetadata: 'Metadatos EXIF',
    XmpMetadata: 'Metadatos XMP',
    IccProfile: 'Perfil ICC',
  },
  fr: {
    GPSLatitude: 'Position GPS',
    Make: 'Marque de l’appareil',
    Model: 'Modèle de l’appareil',
    LensModel: 'Objectif',
    SerialNumber: 'Numéro de série',
    Software: 'Logiciel',
    Artist: 'Auteur',
    Copyright: 'Copyright',
    DateTimeOriginal: 'Date de prise',
    CreateDate: 'Date de création',
    ModifyDate: 'Date de modification',
    ExposureTime: 'Exposition',
    FNumber: 'Ouverture',
    ISO: 'ISO',
    FocalLength: 'Focale',
    ImageWidth: 'Largeur',
    ImageHeight: 'Hauteur',
    ColorSpace: 'Espace colorimétrique',
    ImageDescription: 'Description',
    ExifMetadata: 'Métadonnées EXIF',
    XmpMetadata: 'Métadonnées XMP',
    IccProfile: 'Profil ICC',
  },
  de: {
    GPSLatitude: 'GPS-Position',
    Make: 'Gerätemarke',
    Model: 'Gerätemodell',
    LensModel: 'Objektiv',
    SerialNumber: 'Seriennummer',
    Software: 'Software',
    Artist: 'Autor',
    Copyright: 'Urheberrecht',
    DateTimeOriginal: 'Aufnahmedatum',
    CreateDate: 'Erstellungsdatum',
    ModifyDate: 'Änderungsdatum',
    ExposureTime: 'Belichtung',
    FNumber: 'Blende',
    ISO: 'ISO',
    FocalLength: 'Brennweite',
    ImageWidth: 'Breite',
    ImageHeight: 'Höhe',
    ColorSpace: 'Farbraum',
    ImageDescription: 'Beschreibung',
    ExifMetadata: 'EXIF-Metadaten',
    XmpMetadata: 'XMP-Metadaten',
    IccProfile: 'ICC-Profil',
  },
  pt: {
    GPSLatitude: 'Localização GPS',
    Make: 'Marca da câmera',
    Model: 'Modelo da câmera',
    LensModel: 'Lente',
    SerialNumber: 'Número de série',
    Software: 'Software',
    Artist: 'Autor',
    Copyright: 'Copyright',
    DateTimeOriginal: 'Data da captura',
    CreateDate: 'Data de criação',
    ModifyDate: 'Data de modificação',
    ExposureTime: 'Exposição',
    FNumber: 'Abertura',
    ISO: 'ISO',
    FocalLength: 'Distância focal',
    ImageWidth: 'Largura',
    ImageHeight: 'Altura',
    ColorSpace: 'Espaço de cor',
    ImageDescription: 'Descrição',
    ExifMetadata: 'Metadados EXIF',
    XmpMetadata: 'Metadados XMP',
    IccProfile: 'Perfil ICC',
  },
  ko: {
    GPSLatitude: 'GPS 위치',
    Make: '기기 브랜드',
    Model: '기기 모델',
    LensModel: '렌즈',
    SerialNumber: '일련번호',
    Software: '소프트웨어',
    Artist: '작성자',
    Copyright: '저작권',
    DateTimeOriginal: '촬영 시간',
    CreateDate: '생성 시간',
    ModifyDate: '수정 시간',
    ExposureTime: '노출',
    FNumber: '조리개',
    ISO: 'ISO',
    FocalLength: '초점 거리',
    ImageWidth: '너비',
    ImageHeight: '높이',
    ColorSpace: '색 공간',
    ImageDescription: '설명',
    ExifMetadata: 'EXIF 메타데이터',
    XmpMetadata: 'XMP 메타데이터',
    IccProfile: 'ICC 프로필',
  },
  ru: {
    GPSLatitude: 'GPS-координаты',
    Make: 'Марка камеры',
    Model: 'Модель камеры',
    LensModel: 'Объектив',
    SerialNumber: 'Серийный номер',
    Software: 'ПО',
    Artist: 'Автор',
    Copyright: 'Авторские права',
    DateTimeOriginal: 'Дата съёмки',
    CreateDate: 'Дата создания',
    ModifyDate: 'Дата изменения',
    ExposureTime: 'Выдержка',
    FNumber: 'Диафрагма',
    ISO: 'ISO',
    FocalLength: 'Фокусное расстояние',
    ImageWidth: 'Ширина',
    ImageHeight: 'Высота',
    ColorSpace: 'Цветовое пространство',
    ImageDescription: 'Описание',
    ExifMetadata: 'Метаданные EXIF',
    XmpMetadata: 'Метаданные XMP',
    IccProfile: 'Профиль ICC',
  },
  ar: {
    GPSLatitude: 'موقع GPS',
    Make: 'الشركة المصنعة',
    Model: 'طراز الجهاز',
    LensModel: 'العدسة',
    SerialNumber: 'الرقم التسلسلي',
    Software: 'البرنامج',
    Artist: 'المؤلف',
    Copyright: 'حقوق النشر',
    DateTimeOriginal: 'تاريخ الالتقاط',
    CreateDate: 'تاريخ الإنشاء',
    ModifyDate: 'تاريخ التعديل',
    ExposureTime: 'التعريض',
    FNumber: 'فتحة العدسة',
    ISO: 'ISO',
    FocalLength: 'البعد البؤري',
    ImageWidth: 'العرض',
    ImageHeight: 'الارتفاع',
    ColorSpace: 'مساحة اللون',
    ImageDescription: 'الوصف',
    ExifMetadata: 'بيانات EXIF الوصفية',
    XmpMetadata: 'بيانات XMP الوصفية',
    IccProfile: 'ملف ICC اللوني',
  },
  it: {
    GPSLatitude: 'Posizione GPS',
    Make: 'Marca fotocamera',
    Model: 'Modello fotocamera',
    LensModel: 'Obiettivo',
    SerialNumber: 'Numero di serie',
    Software: 'Software',
    Artist: 'Autore',
    Copyright: 'Copyright',
    DateTimeOriginal: 'Data di scatto',
    CreateDate: 'Data di creazione',
    ModifyDate: 'Data di modifica',
    ExposureTime: 'Esposizione',
    FNumber: 'Apertura',
    ISO: 'ISO',
    FocalLength: 'Lunghezza focale',
    ImageWidth: 'Larghezza',
    ImageHeight: 'Altezza',
    ColorSpace: 'Spazio colore',
    ImageDescription: 'Descrizione',
    ExifMetadata: 'Metadati EXIF',
    XmpMetadata: 'Metadati XMP',
    IccProfile: 'Profilo ICC',
  },
}

function fieldLabel(lang: string, key: string, fallback: string): string {
  return FIELD_LABELS[lang]?.[key] || fallback
}

interface MetadataEntry {
  key: string
  label: string
  value: string
  icon: string
  level: 'high' | 'medium' | 'low'
}

interface ScannedFile {
  id: string
  file: File
  entries: MetadataEntry[]
  totalCount: number
  highCount: number
  hasGps: boolean
  metadataScanStatus: 'pending' | 'complete' | 'failed'
  cleanedBlob: Blob | null
  status: 'scanning' | 'scanned' | 'cleaning' | 'done' | 'error'
  batchId: number
  batchIndex: number
  error?: string
}

async function waitForNextPaint(): Promise<void> {
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve())
    })
  })
}

const FIELD_CONFIG: Record<
  string,
  { label: string; icon: string; level: 'high' | 'medium' | 'low' }
> = {
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
  ExifMetadata: { label: 'EXIF Metadata', icon: '🧾', level: 'medium' },
  XmpMetadata: { label: 'XMP Metadata', icon: '🧾', level: 'medium' },
  IccProfile: { label: 'ICC Profile', icon: '🎨', level: 'low' },
}

const ORDERED_KEYS = [
  'GPSLatitude',
  'Make',
  'Model',
  'LensModel',
  'SerialNumber',
  'Software',
  'Artist',
  'Copyright',
  'ImageDescription',
  'DateTimeOriginal',
  'CreateDate',
  'ModifyDate',
  'ExposureTime',
  'FNumber',
  'ISO',
  'FocalLength',
]

function formatValue(key: string, value: unknown): string {
  if (value == null) return ''
  if (key === 'ExposureTime' && typeof value === 'number')
    return value < 1 ? `1/${Math.round(1 / value)}s` : `${value}s`
  if (key === 'FNumber' && typeof value === 'number') return `f/${value}`
  if (key === 'FocalLength' && typeof value === 'number') return `${value}mm`
  if (value instanceof Date) return value.toLocaleString()
  return String(value)
}

function getOutputMime(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() ?? ''
  const map: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    avif: 'image/avif',
  }
  return map[ext] || 'image/jpeg'
}

function getOutputExt(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() ?? ''
  if (['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(ext)) return ext
  return 'jpg'
}

function isHeifFamily(filename: string): boolean {
  return /\.(heic|heif)$/i.test(filename)
}

function isWebpFile(file: File): boolean {
  return /\.webp$/i.test(file.name) || file.type === 'image/webp'
}

function isSupportedMetadataFile(file: File): boolean {
  if (/\.(jpe?g|png|webp|heic|heif|avif)$/i.test(file.name)) return true
  return [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/avif',
  ].includes(file.type)
}

function textFromBytes(bytes: Uint8Array): string {
  return new TextDecoder('ascii').decode(bytes)
}

function createMetadataEntry(
  key: keyof typeof FIELD_CONFIG,
  value: string,
  lang: string,
): MetadataEntry {
  const cfg = FIELD_CONFIG[key]
  return {
    key,
    label: fieldLabel(lang, key, cfg.label),
    value,
    icon: cfg.icon,
    level: cfg.level,
  }
}

function buildMetadataEntries(data: Record<string, unknown>, lang: string): MetadataEntry[] {
  if (!data || Object.keys(data).length === 0) return []

  const entries: MetadataEntry[] = []

  if (data.latitude != null && data.longitude != null) {
    const cfg = FIELD_CONFIG.GPSLatitude
    entries.push({
      key: 'GPSLatitude',
      label: fieldLabel(lang, 'GPSLatitude', cfg.label),
      value: `${Number(data.latitude).toFixed(6)}°, ${Number(data.longitude).toFixed(6)}°`,
      icon: cfg.icon,
      level: cfg.level,
    })
  }

  for (const key of ORDERED_KEYS) {
    if (key === 'GPSLatitude') continue
    if (data[key] == null) continue
    const cfg = FIELD_CONFIG[key]
    if (!cfg) continue
    const formatted = formatValue(key, data[key])
    if (formatted)
      entries.push({
        key,
        label: fieldLabel(lang, key, cfg.label),
        value: formatted,
        icon: cfg.icon,
        level: cfg.level,
      })
  }

  return entries
}

async function parseWebpMetadata(
  file: File,
  lang: string,
  exifr: Awaited<typeof import('exifr')>,
): Promise<MetadataEntry[]> {
  const buffer = await file.arrayBuffer()
  const bytes = new Uint8Array(buffer)
  const view = new DataView(buffer)

  if (
    bytes.length < 12 ||
    textFromBytes(bytes.slice(0, 4)) !== 'RIFF' ||
    textFromBytes(bytes.slice(8, 12)) !== 'WEBP'
  ) {
    throw new Error('Invalid WebP container')
  }

  let exifChunk: Uint8Array | null = null
  let hasXmp = false
  let hasIcc = false

  let offset = 12
  while (offset + 8 <= bytes.length) {
    const chunkType = textFromBytes(bytes.slice(offset, offset + 4))
    const chunkSize = view.getUint32(offset + 4, true)
    const chunkStart = offset + 8
    const chunkEnd = chunkStart + chunkSize

    if (chunkEnd > bytes.length) throw new Error('Truncated WebP metadata chunk')
    if (chunkEnd < chunkStart) throw new Error('Invalid WebP metadata chunk')

    if (chunkType === 'EXIF') exifChunk = bytes.slice(chunkStart, chunkEnd)
    if (chunkType === 'XMP ') hasXmp = true
    if (chunkType === 'ICCP') hasIcc = true

    offset = chunkEnd + (chunkSize % 2)
  }

  const entries: MetadataEntry[] = []

  if (exifChunk) {
    const exifCandidates = [exifChunk]
    if (textFromBytes(exifChunk.slice(0, 6)) === 'Exif\0\0') {
      exifCandidates.unshift(exifChunk.slice(6))
    }

    for (const candidate of exifCandidates) {
      try {
        const parsed = await exifr.parse(candidate, {
          gps: true,
          tiff: true,
          exif: true,
          iptc: true,
          xmp: true,
        })
        const parsedEntries = buildMetadataEntries(parsed || {}, lang)
        if (parsedEntries.length > 0) {
          entries.push(...parsedEntries)
          break
        }
      } catch {
        // 忽略，回退到“检测到 EXIF 块”的最小提示
      }
    }

    if (!entries.some((entry) => entry.key === 'GPSLatitude') && entries.length === 0) {
      entries.push(createMetadataEntry('ExifMetadata', 'Embedded', lang))
    }
  }

  if (hasXmp) entries.push(createMetadataEntry('XmpMetadata', 'Embedded', lang))
  if (hasIcc) entries.push(createMetadataEntry('IccProfile', 'Embedded', lang))

  return entries
}

async function parseMetadata(
  file: File,
  lang: string,
): Promise<MetadataEntry[]> {
  const exifr = await import('exifr')
  if (isWebpFile(file)) {
    const webpEntries = await parseWebpMetadata(file, lang, exifr)
    if (webpEntries.length > 0) return webpEntries
    return []
  }

  const data = await exifr.parse(file, {
    gps: true,
    tiff: true,
    exif: true,
    iptc: true,
    xmp: true,
  })
  if (
    data &&
    typeof data === 'object' &&
    Array.isArray((data as Record<string, unknown>).errors) &&
    ((data as Record<string, unknown>).errors as unknown[]).length > 0
  ) {
    throw new Error('Metadata parser reported errors')
  }
  return buildMetadataEntries(data || {}, lang)
}

let avifEncoderInit: Promise<void> | null = null

async function encodeAvif(imageData: ImageData): Promise<Blob> {
  const { init, default: encode } = await import('@jsquash/avif/encode')
  if (!avifEncoderInit) {
    avifEncoderInit = (async () => {
      const response = await fetch('/wasm/avif_enc.wasm')
      if (!response.ok) throw new Error('Failed to load AVIF encoder')
      const wasm = await WebAssembly.compile(await response.arrayBuffer())
      await init(wasm)
    })()
  }
  await avifEncoderInit
  const encoded = await encode(imageData, { quality: 95, speed: 6 })
  const blob = new Blob([encoded], { type: 'image/avif' })
  if (blob.size === 0) throw new Error('AVIF encoder returned no data')
  return blob
}

async function cleanImage(file: File): Promise<Blob> {
  const needsHeicDecode = /\.(heic|heif)$/i.test(file.name)

  let imageBitmap: ImageBitmap

  if (needsHeicDecode) {
    // Use the browser WASM bundle directly. The package root also exposes a
    // Node-oriented build, which duplicates the payload and pulls in shims.
    const module = await import('libheif-js/libheif-wasm/libheif-bundle.mjs')
    const factory = module.default
    const initialized = typeof factory === 'function' ? factory() : factory
    const libheif =
      initialized && typeof initialized.then === 'function'
        ? await initialized
        : initialized
    if (!libheif) throw new Error('Failed to initialize HEIC decoder')
    const decoder = new libheif.HeifDecoder()
    const buf = await file.arrayBuffer()
    const images = decoder.decode(new Uint8Array(buf))
    if (!images || images.length === 0) throw new Error('Failed to decode HEIC')
    const img = images[0]
    const w = img.get_width()
    const h = img.get_height()
    const canvas = new OffscreenCanvas(w, h)
    const ctx = canvas.getContext('2d')!
    const imageData = ctx.createImageData(w, h)
    await new Promise<void>((resolve, reject) => {
      img.display(imageData, (result: any) => {
        if (result) resolve()
        else reject(new Error('HEIC display failed'))
      })
    })
    ctx.putImageData(imageData, 0, 0)
    imageBitmap = await createImageBitmap(canvas)
  } else {
    imageBitmap = await createImageBitmap(file)
  }

  const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height)
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(imageBitmap, 0, 0)
  imageBitmap.close()

  const mime = needsHeicDecode ? 'image/jpeg' : getOutputMime(file.name)
  if (mime === 'image/avif') {
    return encodeAvif(ctx.getImageData(0, 0, canvas.width, canvas.height))
  }
  const quality =
    mime === 'image/jpeg' || mime === 'image/webp' ? 0.95 : undefined
  const blob = await canvas.convertToBlob({ type: mime, quality })
  if (blob.size === 0 || blob.type !== mime) {
    throw new Error(`Browser could not encode ${mime}`)
  }
  return blob
}

const LEVEL_COLORS = {
  high: {
    dot: 'bg-red-400',
    text: 'text-red-300',
    stripped: 'text-red-400/80',
  },
  medium: {
    dot: 'bg-amber-400',
    text: 'text-amber-300',
    stripped: 'text-amber-400/80',
  },
  low: {
    dot: 'bg-slate-400',
    text: 'text-text-secondary',
    stripped: 'text-text-secondary/80',
  },
}

function FileCard({
  scanned,
  expanded,
  onToggle,
  lang = 'en',
}: {
  scanned: ScannedFile
  expanded: boolean
  onToggle: () => void
  lang?: string
}) {
  const isDone = scanned.status === 'done' || scanned.cleanedBlob !== null
  const isError = scanned.status === 'error'
  const scanFailed = scanned.metadataScanStatus === 'failed'

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-drop-bg/50 transition-colors"
      >
        <span className="text-lg">
          {isError
            ? '❌'
            : isDone
            ? '✅'
            : scanFailed
              ? '⚠️'
            : scanned.hasGps
              ? '🔴'
              : scanned.highCount > 0
                ? '🟡'
                : '🟢'}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-sm font-medium text-text-primary truncate">
            {scanned.file.name}
          </span>
          <span className="block text-xs text-text-secondary">
            {formatSize(scanned.file.size)}
            {isError
              ? ` — ${scanned.error || 'Failed to clean'}`
              : scanned.status === 'scanning'
                ? ` — ${t(lang, 'scanning')}`
              : scanned.status === 'cleaning'
                ? ` — ${t(lang, 'removing')}`
              : isDone
              ? scanFailed
                ? ` — ${t(lang, 'reencodedAfterScanFailure')}`
                : scanned.totalCount > 0
                  ? ` — ${scanned.totalCount} ${t(lang, 'metadataRemoved')}`
                  : ` — ${t(lang, 'reencoded')}`
              : scanFailed
                ? ` — ${t(lang, 'scanFailed')}`
              : ` — ${scanned.totalCount} ${t(lang, 'fieldsFound')}`}
            {!isDone && !isError && !scanFailed && scanned.status !== 'scanning' && (
              <span className="text-red-400 ml-1">
                ({scanned.highCount} {t(lang, 'sensitive')})
              </span>
            )}
          </span>
        </span>
        <svg
          className={`w-4 h-4 text-text-secondary transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      {expanded && scanned.entries.length > 0 && (
        <div className="border-t border-border divide-y divide-border/50">
          {scanned.entries.map((entry, i) => {
            const colors = LEVEL_COLORS[entry.level]
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-2 text-sm"
              >
                <span className="w-5 text-center">{entry.icon}</span>
                <span
                  className={`flex-1 ${isDone ? colors.stripped : colors.text}`}
                >
                  {entry.label}
                </span>
                <span
                  className={`font-mono text-xs ${isDone ? 'line-through text-text-secondary/70' : 'text-text-primary'}`}
                >
                  {isDone ? '████████' : entry.value}
                </span>
              </div>
            )
          })}
          <div className="px-4 py-2 text-xs text-text-secondary">
            {isDone
              ? `✓ ${scanned.totalCount} ${t(lang, 'fieldsRemoved')}`
              : `${scanned.totalCount} ${t(lang, 'fieldsTravel')}`}
          </div>
        </div>
      )}

      {expanded && isError && (
        <div className="border-t border-border px-4 py-3 text-sm text-red-300">
          {scanned.error || 'Failed to clean'}
        </div>
      )}

      {expanded && scanFailed && !isError && (
        <div className="border-t border-border px-4 py-3 text-sm text-amber-200">
          {isDone
            ? t(lang, 'reencodedAfterScanFailure')
            : t(lang, 'scanFailedHint')}
        </div>
      )}

      {expanded &&
        scanned.entries.length === 0 &&
        scanned.status === 'scanned' &&
        scanned.metadataScanStatus === 'complete' && (
          <div className="border-t border-border px-4 py-3 text-sm text-text-secondary">
            {t(lang, 'noMetadata')}
          </div>
        )}
    </div>
  )
}

export default function MetadataRemoverTool({
  lang = 'en',
}: {
  lang?: Locale
}) {
  const [files, setFiles] = useState<ScannedFile[]>([])
  const [expandedIds, setExpandedIds] = useState<string[]>([])
  const [cleaning, setCleaning] = useState(false)
  const [cleanProgress, setCleanProgress] = useState<{
    current: number
    total: number
  } | null>(null)
  const [allDone, setAllDone] = useState(false)
  const [uploadNotice, setUploadNotice] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropRef = useRef<HTMLDivElement>(null)
  const batchIdRef = useRef(0)
  const filesRef = useRef<ScannedFile[]>([])
  const [dragOver, setDragOver] = useState(false)

  useEffect(() => {
    filesRef.current = files
  }, [files])

  const processFiles = useCallback(
    async (incoming: File[]) => {
      if (cleaning) return

      const limited = applyFileLimits(
        filesRef.current.map((item) => item.file),
        incoming,
      )
      const limitMessages = [
        [limited.rejected.fileSize.length, 'limitFileSize'],
        [limited.rejected.fileCount.length, 'limitFileCount'],
        [limited.rejected.totalSize.length, 'limitTotalSize'],
      ]
        .filter(([count]) => Number(count) > 0)
        .map(([count, key]) => `${count} ${t(lang, String(key))}`)
      setUploadNotice(limitMessages.length > 0 ? limitMessages.join(' · ') : null)

      if (limited.accepted.length === 0) return

      batchIdRef.current += 1
      const batchId = batchIdRef.current
      const newFiles: ScannedFile[] = limited.accepted.map((f, batchIndex) => ({
        id: createClientId(),
        file: f,
        entries: [],
        totalCount: 0,
        highCount: 0,
        hasGps: false,
        metadataScanStatus: 'pending',
        cleanedBlob: null,
        batchId,
        batchIndex,
        status: 'scanning' as const,
      }))
      const newFileIds = newFiles.map((f) => f.id)

      const nextFiles = [...newFiles, ...filesRef.current]
      filesRef.current = nextFiles
      setFiles(nextFiles)
      setAllDone(false)

      for (let i = 0; i < newFiles.length; i++) {
        const fileId = newFileIds[i]
        try {
          const entries = await parseMetadata(newFiles[i].file, lang)
          const highCount = entries.filter((e) => e.level === 'high').length
          const hasGps = entries.some((e) => e.key === 'GPSLatitude')

          setFiles((prev) => {
            return prev.map((item) =>
              item.id === fileId
                ? {
                    ...item,
                    entries,
                    totalCount: entries.length,
                    highCount,
                    hasGps,
                    metadataScanStatus: 'complete',
                    status: 'scanned',
                  }
                : item,
            )
          })
          if (entries.length === 0) {
            setExpandedIds((current) =>
              current.includes(fileId) ? current : [...current, fileId],
            )
          }
        } catch {
          setFiles((prev) => {
            return prev.map((item) =>
              item.id === fileId
                ? {
                    ...item,
                    entries: [],
                    totalCount: 0,
                    highCount: 0,
                    hasGps: false,
                    metadataScanStatus: 'failed',
                    status: 'scanned',
                    error: undefined,
                  }
                : item,
            )
          })
          setExpandedIds((current) =>
            current.includes(fileId) ? current : [...current, fileId],
          )
        }
      }

      setFiles((prev) => {
        let maxFileId: string | null = null
        let maxCount = -1
        prev.forEach((f) => {
          if (f.totalCount > maxCount) {
            maxCount = f.totalCount
            maxFileId = f.id
          }
        })
        if (maxCount > 0 && maxFileId !== null) {
          const fileId = maxFileId
          setExpandedIds((current) =>
            current.includes(fileId) ? current : [...current, fileId],
          )
        }
        const totalFields = prev.reduce((s, f) => s + f.totalCount, 0)
        const sensitiveFields = prev.reduce((s, f) => s + f.highCount, 0)
        trackMetadataScan(prev.length, totalFields, sensitiveFields)
        return prev
      })
    },
    [cleaning, lang],
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragOver(false)
      const droppedFiles = Array.from(e.dataTransfer.files).filter(
        (f) => isSupportedMetadataFile(f),
      )
      if (droppedFiles.length > 0) processFiles(droppedFiles)
    },
    [processFiles],
  )

  const handleClick = useCallback(() => inputRef.current?.click(), [])

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = Array.from(e.target.files || [])
      const supported = selected.filter((f) => isSupportedMetadataFile(f))
      if (supported.length > 0) processFiles(supported)
      e.target.value = ''
    },
    [processFiles],
  )

  const handlePaste = useCallback(
    (e: ClipboardEvent) => {
      const items = e.clipboardData?.items
      if (!items) return
      const pasted: File[] = []
      for (const item of Array.from(items)) {
        if (item.kind === 'file' && item.type.startsWith('image/')) {
          const f = item.getAsFile()
          if (f && isSupportedMetadataFile(f)) pasted.push(f)
        }
      }
      if (pasted.length > 0) {
        e.preventDefault()
        processFiles(pasted)
      }
    },
    [processFiles],
  )

  useEffect(() => {
    const handler = (e: Event) => handlePaste(e as ClipboardEvent)
    document.addEventListener('paste', handler)
    return () => document.removeEventListener('paste', handler)
  }, [handlePaste])

  const handleCleanAll = useCallback(async () => {
    const cleanableFiles = files.filter((f) => f.status === 'scanned')
    const totalToClean = cleanableFiles.length
    if (totalToClean === 0) return

    setCleaning(true)
    setCleanProgress({ current: 0, total: totalToClean })
    await waitForNextPaint()
    const totalFields = files.reduce((s, f) => s + f.totalCount, 0)
    trackMetadataClean(files.length, totalFields)
    const updatedFiles = [...files]
    let processedCount = 0

    for (let i = 0; i < updatedFiles.length; i++) {
      if (updatedFiles[i].status !== 'scanned') continue
      processedCount += 1
      setCleanProgress({ current: processedCount, total: totalToClean })
      updatedFiles[i] = { ...updatedFiles[i], status: 'cleaning' }
      setFiles([...updatedFiles])
      await waitForNextPaint()

      try {
        const blob = await cleanImage(updatedFiles[i].file)
        updatedFiles[i] = {
          ...updatedFiles[i],
          cleanedBlob: blob,
          status: 'done',
        }
      } catch {
        updatedFiles[i] = {
          ...updatedFiles[i],
          status: 'error',
          error: t(lang, 'cleanError'),
        }
      }
      setFiles([...updatedFiles])
    }

    setCleaning(false)
    setCleanProgress(null)
    setAllDone(true)
  }, [files, lang])

  const handleDownloadAll = useCallback(async () => {
    const cleaned = files.filter((f) => f.cleanedBlob)
    if (cleaned.length === 0) return
    trackMetadataDownload(
      cleaned.length,
      cleaned.length === 1 ? 'single' : 'zip',
    )

    if (cleaned.length === 1) {
      const f = cleaned[0]
      const ext = getOutputExt(f.file.name)
      const baseName = f.file.name.replace(/\.[^.]+$/, '')
      const url = URL.createObjectURL(f.cleanedBlob!)
      const a = document.createElement('a')
      a.href = url
      a.download = `${baseName}_clean.${ext}`
      a.click()
      URL.revokeObjectURL(url)
      return
    }

    const { zipSync } = await import('fflate')
    const zipData: Record<string, Uint8Array> = {}
    for (const f of cleaned) {
      const ext = getOutputExt(f.file.name)
      const baseName = f.file.name.replace(/\.[^.]+$/, '')
      const buf = await f.cleanedBlob!.arrayBuffer()
      zipData[`${baseName}_clean.${ext}`] = new Uint8Array(buf)
    }
    const zipped = zipSync(zipData)
    const zipBuffer = new ArrayBuffer(zipped.byteLength)
    new Uint8Array(zipBuffer).set(zipped)
    const blob = new Blob([zipBuffer], { type: 'application/zip' })
    const ts = new Date().toISOString().slice(0, 19).replace(/[T:]/g, '-')
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `picshift-cleaned-${ts}.zip`
    a.click()
    URL.revokeObjectURL(url)
  }, [files])

  const handleClear = useCallback(() => {
    if (cleaning) return
    trackMetadataClear(files.length)
    setFiles([])
    filesRef.current = []
    setExpandedIds([])
    setCleanProgress(null)
    setAllDone(false)
    setUploadNotice(null)
  }, [cleaning, files.length])

  const hasFiles = files.length > 0
  const scannedCount = files.filter(
    (f) => f.status === 'scanned' || f.status === 'done',
  ).length
  const totalMetadata = files.reduce((sum, f) => sum + f.totalCount, 0)
  const totalSensitive = files.reduce((sum, f) => sum + f.highCount, 0)
  const scanFailedCount = files.filter(
    (f) => f.metadataScanStatus === 'failed',
  ).length
  const cleanedCount = files.filter((f) => f.cleanedBlob !== null).length
  const failedCount = files.filter((f) => f.status === 'error').length
  const isScanning = files.some((f) => f.status === 'scanning')
  const hasHeifFamily = files.some((f) => isHeifFamily(f.file.name))
  const displayFiles = [...new Map(
    files
      .map((file) => file.batchId)
      .sort((a, b) => b - a)
      .map((batchId) => [
        batchId,
        files
          .filter((file) => file.batchId === batchId)
          .sort((a, b) => {
            const aHasMetadata = a.totalCount > 0 ? 1 : 0
            const bHasMetadata = b.totalCount > 0 ? 1 : 0
            if (aHasMetadata !== bHasMetadata) return bHasMetadata - aHasMetadata
            if (a.highCount !== b.highCount) return b.highCount - a.highCount
            if (a.totalCount !== b.totalCount) return b.totalCount - a.totalCount
            return a.batchIndex - b.batchIndex
          }),
      ]),
  ).values()].flat()
  return (
    <div className="flex flex-col gap-4">
      {/* Summary bar */}
      {hasFiles && (
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="text-sm text-text-secondary">
            {isScanning ? (
              <span className="animate-pulse">{t(lang, 'scanning')}</span>
            ) : allDone ? (
              <span className="font-medium">
                {cleanedCount > 0 && (
                  <span className="text-green-400">
                    ✓ {cleanedCount} {t(lang, 'cleanedFiles')}
                  </span>
                )}
                {cleanedCount > 0 && failedCount > 0 && ' · '}
                {failedCount > 0 && (
                  <span className="text-red-300">
                    {failedCount} {t(lang, 'cleanFailed')}
                  </span>
                )}
              </span>
            ) : (
              <>
                <span className="text-text-primary font-medium">
                  {files.length}{' '}
                  {files.length === 1 ? t(lang, 'file') : t(lang, 'files')}
                </span>
                {scanFailedCount < files.length && (
                  <>
                    {' · '}
                    <span>
                      {totalMetadata} {t(lang, 'fieldsFound')}
                    </span>
                  </>
                )}
                {totalSensitive > 0 && (
                  <span className="text-red-400">
                    {' '}
                    · {totalSensitive} {t(lang, 'sensitive')}
                  </span>
                )}
                {scanFailedCount > 0 && (
                  <span className="text-amber-300">
                    {' '}
                    · {scanFailedCount} {t(lang, 'scanFailed')}
                  </span>
                )}
              </>
            )}
          </div>
          <button
            type="button"
            onClick={handleClear}
            disabled={cleaning}
            className="text-xs text-text-secondary hover:text-text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {t(lang, 'clearAll')}
          </button>
        </div>
      )}

      {hasHeifFamily && (
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-sm text-amber-200">
          {heifExportNote(lang)}
        </div>
      )}

      {/* Drop zone */}
      <div
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onClick={!hasFiles && !cleaning ? handleClick : undefined}
        className={`relative border-2 border-dashed rounded-xl transition-colors ${
          dragOver
            ? 'border-primary-400 bg-primary-500/5'
            : 'border-border hover:border-text-secondary'
        } ${!hasFiles ? 'cursor-pointer py-16' : 'py-4'}`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp,.heic,.heif,.avif"
          multiple
          disabled={cleaning}
          className="hidden"
          onChange={handleInput}
          aria-label="Select images"
        />

        {!hasFiles ? (
          <div className="flex flex-col items-center gap-3 text-center px-4">
            <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                />
              </svg>
            </div>
            <div>
              <p className="text-text-primary font-medium">
                {t(lang, 'dropTitle')}
              </p>
              <p className="text-sm text-text-secondary mt-1">
                {t(lang, 'dropHint')}
              </p>
            </div>
            <p className="text-xs text-text-secondary mt-2">
              {t(lang, 'dropSubtext')}
            </p>
          </div>
        ) : (
          <div
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={handleClick}
          >
            <svg
              className="w-4 h-4 text-text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm text-text-secondary">
              {t(lang, 'addMore')}
            </span>
          </div>
        )}
      </div>

      <p className="text-xs text-text-secondary text-center">
        {t(lang, 'limitHint')}
      </p>

      {uploadNotice && (
        <div
          role="alert"
          className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-sm text-amber-200"
        >
          {uploadNotice}
        </div>
      )}

      {/* File list */}
      {hasFiles && (
        <div className="flex flex-col gap-2">
          {displayFiles.map((f) => {
            const fileId = f.id
            return (
              <FileCard
                key={fileId}
                scanned={f}
                expanded={expandedIds.includes(fileId)}
                onToggle={() =>
                  setExpandedIds((current) =>
                    current.includes(fileId)
                      ? current.filter((id) => id !== fileId)
                      : [...current, fileId],
                  )
                }
                lang={lang}
              />
            )
          })}
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
            <span className="flex items-center justify-center gap-2">
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-white/95 animate-pulse" />
                <span className="h-2 w-2 rounded-full bg-white/80 animate-pulse [animation-delay:120ms]" />
                <span className="h-2 w-2 rounded-full bg-white/65 animate-pulse [animation-delay:240ms]" />
              </span>
              <span>{t(lang, 'removing')}</span>
              {cleanProgress && (
                <span className="text-white/85 tabular-nums">
                  {cleanProgress.current} / {cleanProgress.total}
                </span>
              )}
            </span>
          ) : (
            <>🛡 {t(lang, 'removeBtn')}</>
          )}
        </button>
      )}

      {allDone && cleanedCount > 0 && (
        <button
          type="button"
          onClick={handleDownloadAll}
          className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
        >
          ⬇{' '}
          {cleanedCount === 1 ? t(lang, 'downloadBtn') : t(lang, 'downloadZip')}
        </button>
      )}

      {/* Footer note */}
      {hasFiles && !allDone && !isScanning && (
        <p className="text-xs text-text-secondary text-center">
          {t(lang, 'footerNote')}
        </p>
      )}
    </div>
  )
}
