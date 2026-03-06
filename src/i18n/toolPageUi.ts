import type { Locale } from './config';

interface ToolPageUiStrings {
  relatedTools: string;
  limitations: string;
  limitationsIntro: string;
  limitationFormat: string;
  limitationSize: string;
  limitationCompatibility: string;
}

const TOOL_PAGE_UI_MAP: Record<Locale, ToolPageUiStrings> = {
  en: {
    relatedTools: 'Related tools',
    limitations: 'Known limitations',
    limitationsIntro: 'Before converting, note these constraints:',
    limitationFormat: 'Output behavior follows format capabilities (for example transparency support and lossy/lossless rules).',
    limitationSize: 'Final file size depends on source image content and selected quality settings.',
    limitationCompatibility: 'If compatibility is critical, choose broadly supported targets first (typically JPG).',
  },
  zh: {
    relatedTools: '相关工具',
    limitations: '边界说明',
    limitationsIntro: '转换前请注意以下约束：',
    limitationFormat: '输出行为受目标格式能力影响（例如是否支持透明、是否为有损/无损）。',
    limitationSize: '最终文件体积取决于原图内容和你选择的质量参数。',
    limitationCompatibility: '如果兼容性优先，建议先选择通用性更高的目标格式（通常是 JPG）。',
  },
  'zh-Hant': {
    relatedTools: '相關工具',
    limitations: '邊界說明',
    limitationsIntro: '轉換前請注意以下限制：',
    limitationFormat: '輸出行為會受目標格式能力影響（例如透明支援、有損/無損規則）。',
    limitationSize: '最終檔案大小取決於原圖內容與你選擇的品質設定。',
    limitationCompatibility: '若相容性優先，建議先選擇通用性較高的目標格式（通常是 JPG）。',
  },
  es: {
    relatedTools: 'Herramientas relacionadas',
    limitations: 'Limitaciones conocidas',
    limitationsIntro: 'Antes de convertir, ten en cuenta estas restricciones:',
    limitationFormat: 'El resultado depende de las capacidades del formato de salida (por ejemplo, transparencia y reglas con/sin pérdida).',
    limitationSize: 'El tamaño final depende del contenido de la imagen original y de la calidad seleccionada.',
    limitationCompatibility: 'Si la compatibilidad es prioritaria, elige primero formatos de destino ampliamente soportados (normalmente JPG).',
  },
  fr: {
    relatedTools: 'Outils associés',
    limitations: 'Limites connues',
    limitationsIntro: 'Avant conversion, notez ces contraintes :',
    limitationFormat: 'Le résultat dépend des capacités du format de sortie (par exemple transparence et règles avec/sans perte).',
    limitationSize: 'La taille finale dépend du contenu source et du niveau de qualité choisi.',
    limitationCompatibility: 'Si la compatibilité est prioritaire, choisissez d’abord un format largement pris en charge (souvent JPG).',
  },
  de: {
    relatedTools: 'Verwandte Tools',
    limitations: 'Bekannte Grenzen',
    limitationsIntro: 'Bitte vor der Konvertierung beachten:',
    limitationFormat: 'Das Ausgabeverhalten richtet sich nach den Formatfähigkeiten (z. B. Transparenz und Verlustfrei/Verlustbehaftet).',
    limitationSize: 'Die endgültige Dateigröße hängt vom Quellbild und der gewählten Qualitätsstufe ab.',
    limitationCompatibility: 'Wenn Kompatibilität entscheidend ist, zuerst breit unterstützte Zielformate wählen (typischerweise JPG).',
  },
  ja: {
    relatedTools: '関連ツール',
    limitations: '制約事項',
    limitationsIntro: '変換前に次の制約を確認してください：',
    limitationFormat: '出力結果は形式の仕様に従います（例：透過対応、可逆/非可逆の違い）。',
    limitationSize: '最終的なファイルサイズは元画像の内容と品質設定によって変わります。',
    limitationCompatibility: '互換性を優先する場合は、まず広く対応している形式（通常は JPG）を選択してください。',
  },
  ko: {
    relatedTools: '관련 도구',
    limitations: '알아둘 제한 사항',
    limitationsIntro: '변환 전에 아래 제한을 확인하세요:',
    limitationFormat: '출력 결과는 대상 포맷의 기능에 따라 달라집니다(예: 투명도 지원, 손실/무손실 규칙).',
    limitationSize: '최종 파일 크기는 원본 이미지 내용과 선택한 품질 설정에 따라 달라집니다.',
    limitationCompatibility: '호환성이 중요하면 먼저 범용 지원 포맷(보통 JPG)을 선택하세요.',
  },
  pt: {
    relatedTools: 'Ferramentas relacionadas',
    limitations: 'Limitações conhecidas',
    limitationsIntro: 'Antes de converter, considere estas restrições:',
    limitationFormat: 'O comportamento de saída depende das capacidades do formato (ex.: transparência e regras com/sem perda).',
    limitationSize: 'O tamanho final depende do conteúdo da imagem de origem e da qualidade escolhida.',
    limitationCompatibility: 'Se a compatibilidade for prioridade, escolha primeiro formatos amplamente suportados (geralmente JPG).',
  },
  ru: {
    relatedTools: 'Похожие инструменты',
    limitations: 'Известные ограничения',
    limitationsIntro: 'Перед конвертацией учитывайте следующие ограничения:',
    limitationFormat: 'Поведение результата зависит от возможностей выходного формата (например, прозрачность и режим с потерями/без потерь).',
    limitationSize: 'Итоговый размер файла зависит от содержимого исходного изображения и выбранного качества.',
    limitationCompatibility: 'Если важна совместимость, сначала выбирайте максимально поддерживаемые форматы (обычно JPG).',
  },
  ar: {
    relatedTools: 'أدوات مرتبطة',
    limitations: 'قيود معروفة',
    limitationsIntro: 'قبل التحويل، راجع هذه القيود:',
    limitationFormat: 'سلوك الإخراج يعتمد على قدرات الصيغة المستهدفة (مثل دعم الشفافية وقواعد الفقد/عدم الفقد).',
    limitationSize: 'حجم الملف النهائي يعتمد على محتوى الصورة الأصلية وإعدادات الجودة المختارة.',
    limitationCompatibility: 'إذا كانت التوافقية أولوية، ابدأ بصيغ أكثر انتشارًا في الدعم (عادةً JPG).',
  },
  it: {
    relatedTools: 'Strumenti correlati',
    limitations: 'Limiti noti',
    limitationsIntro: 'Prima di convertire, considera questi vincoli:',
    limitationFormat: 'Il comportamento in uscita dipende dalle capacità del formato di destinazione (es. trasparenza e regole lossy/lossless).',
    limitationSize: 'La dimensione finale dipende dal contenuto dell’immagine sorgente e dalla qualità selezionata.',
    limitationCompatibility: 'Se la compatibilità è prioritaria, scegli prima formati di destinazione ampiamente supportati (di solito JPG).',
  },
};

export function getToolPageUi(lang: Locale): ToolPageUiStrings {
  return TOOL_PAGE_UI_MAP[lang] ?? TOOL_PAGE_UI_MAP.en;
}
