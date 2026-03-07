import type { Locale } from './config';
import type { ToolPageConfig, ToolIntentSection } from '../types';

const SEARCH_INTENT_MAP: Partial<Record<Locale, Partial<Record<string, ToolIntentSection[]>>>> = {
  ja: {
    'image-compressor': [
      {
        title: '画像圧縮が有効な場面',
        body: 'アップロード制限に引っかかる時、ページ表示を軽くしたい時、共有前にファイルサイズを下げたい時は、圧縮が最も直接的な解決策です。',
      },
      {
        title: 'なぜ圧縮しても小さくならないことがあるのか',
        body: '元画像がすでに強く圧縮されている場合や、可逆形式で保存されている場合、現在の品質設定では大きく縮まらないことがあります。その場合は、品質だけでなくリサイズや形式変更も有効です。',
      },
      {
        title: '圧縮よりリサイズが効くケース',
        body: '表示サイズに対して解像度が大きすぎる画像では、品質調整だけよりリサイズのほうが効くことがあります。容量の原因が画素数にあるなら、サイズ変更を先に試すのが合理的です。',
      },
    ],
  },
  ko: {
    'heic-to-jpg': [
      {
        title: 'HEIC를 JPG로 바꾸는 대표적인 이유',
        body: '아이폰에서는 HEIC가 효율적이지만, Windows 앱, 사내 도구, 업로드 폼, 오래된 편집기에서는 지원이 불안정한 경우가 많습니다. JPG는 가장 무난한 호환성 해결책입니다.',
      },
      {
        title: 'JPG가 더 적합한 상황',
        body: '이메일 첨부, 웹 업로드, 메신저 공유, 구형 앱 호환이 목적이라면 JPG가 더 안전한 선택입니다. 받는 쪽 환경을 알 수 없을 때 특히 유리합니다.',
      },
      {
        title: 'JPG로 바꾸지 않는 편이 나은 경우',
        body: '무손실 편집, 투명도, 또는 최신 웹 최적화가 더 중요하다면 PNG, WebP, AVIF가 더 맞을 수 있습니다. JPG 변환은 주로 호환성을 위한 선택입니다.',
      },
    ],
  },
  pt: {
    'heic-to-jpg': [
      {
        title: 'Por que HEIC para JPG ainda é uma conversão comum',
        body: 'HEIC funciona bem no iPhone, mas ainda causa atrito em Windows, uploads, e apps antigos. JPG continua sendo a opção mais segura quando a prioridade é abrir e compartilhar sem problemas.',
      },
      {
        title: 'Quando JPG é o melhor destino',
        body: 'Escolha JPG quando o arquivo vai para e-mail, formulários de upload, equipes mistas, ou ferramentas que você não controla. É a conversão mais prática quando compatibilidade vem antes de compressão máxima.',
      },
      {
        title: 'Quando não vale a pena converter para JPG',
        body: 'Se o objetivo é edição sem perdas, transparência, ou entrega web moderna com menor tamanho possível, PNG, WebP ou AVIF podem ser escolhas melhores.',
      },
    ],
    'avif-to-jpg': [
      {
        title: 'Por que AVIF para JPG ainda é um fallback útil',
        body: 'AVIF é eficiente, mas ainda encontra bloqueios em apps antigos, editores, uploads e ferramentas internas. JPG continua sendo a saída mais previsível quando o arquivo precisa simplesmente abrir e passar.',
      },
      {
        title: 'Quando JPG é a escolha mais prática',
        body: 'Se a imagem vai para um site que rejeita AVIF, uma equipe com ferramentas mistas, ou um fluxo de compartilhamento mais antigo, JPG costuma ser a opção mais segura. É a conversão certa quando compatibilidade vem primeiro.',
      },
      {
        title: 'O trade-off: mais compatibilidade, nem sempre menor tamanho',
        body: 'Converter AVIF para JPG resolve bloqueios de suporte, mas o arquivo final pode ficar maior. Essa troca normalmente vale a pena quando usabilidade importa mais do que eficiência máxima de compressão.',
      },
    ],
  },
  fr: {
    'webp-to-jpg': [
      {
        title: 'Pourquoi WebP vers JPG reste utile',
        body: 'WebP est pratique sur le web, mais de nombreux outils bureautiques, formulaires d’upload et logiciels plus anciens attendent encore du JPG. Cette conversion sert surtout à réduire les problèmes de compatibilité.',
      },
      {
        title: 'Cas où WebP pose encore problème',
        body: 'Les difficultés apparaissent surtout dans les environnements non navigateur : anciens logiciels, pièces jointes, outils internes, ou plateformes qui valident encore les formats de manière restrictive.',
      },
      {
        title: 'Compromis : meilleure compatibilité, parfois plus de poids',
        body: 'Le JPG est plus universel, mais le fichier final peut être plus lourd que le WebP d’origine. Cette conversion est donc avant tout un choix de compatibilité, pas d’optimisation maximale.',
      },
    ],
    'image-resizer': [
      {
        title: 'Quand le redimensionnement est la bonne solution',
        body: 'Si l’image est beaucoup plus grande que l’espace d’affichage final, réduire les dimensions est souvent le moyen le plus direct de régler un problème de poids ou de mise en page.',
      },
      {
        title: 'Cas utiles pour des dimensions exactes',
        body: 'Les dimensions précises sont utiles pour les fiches produit, les mises en page éditoriales, les visuels sociaux, ou les outils qui imposent une taille stricte en pixels.',
      },
      {
        title: 'Quand le redimensionnement ne suffit pas',
        body: 'Si le fichier reste trop lourd après redimensionnement, combinez la réduction de dimensions avec une conversion de format ou une compression. Le gain vient souvent des deux ensemble.',
      },
    ],
  },
  es: {
    'webp-to-jpg': [
      {
        title: 'Por qué WebP a JPG sigue siendo útil',
        body: 'WebP funciona muy bien en la web, pero fuera del navegador todavía hay herramientas, formularios y flujos que esperan JPG. Esta conversión suele resolver fricción de compatibilidad más que reducir tamaño.',
      },
      {
        title: 'Cuándo JPG es la opción más segura',
        body: 'Si el archivo va a un formulario de subida, una app antigua, correo, o una herramienta de oficina, JPG suele ser la salida más confiable. Es la opción práctica cuando no controlas el entorno de destino.',
      },
      {
        title: 'El costo de ganar compatibilidad',
        body: 'JPG abre en más sitios, pero el archivo final puede ser más grande que el WebP original. Conviene usar esta conversión cuando lo importante es que el archivo funcione sin sorpresas.',
      },
    ],
    'webp-to-png': [
      {
        title: 'Por que convertir WebP a PNG',
        body: 'PNG sigue siendo útil cuando necesitas un archivo más estable para edición, revisión o flujos donde WebP todavía no encaja bien. La conversión suele buscar compatibilidad de trabajo, no menor tamaño.',
      },
      {
        title: 'Cuándo PNG tiene sentido',
        body: 'Usa PNG si necesitas volver a exportar, anotar, o mover la imagen por herramientas que esperan PNG. También es razonable cuando la transparencia o la estabilidad del flujo pesan más que el tamaño final.',
      },
      {
        title: 'Cuándo no conviene pasar de WebP a PNG',
        body: 'Si tu prioridad es mantener un archivo pequeño para web, PNG normalmente no es la mejor opción. En ese caso conviene quedarse en WebP u otra salida moderna más eficiente.',
      },
    ],
  },
  ar: {
    'jpg-to-png': [
      {
        title: 'متى يكون التحويل من JPG إلى PNG مفيدًا',
        body: 'هذا التحويل مفيد عندما تريد ملفًا أكثر استقرارًا للتحرير أو المراجعة أو إعادة التصدير، وليس عندما يكون الهدف تصغير الحجم. PNG مناسب أكثر لسير العمل الذي يحتاج ملفًا أقل عرضة لفقد إضافي.',
      },
      {
        title: 'متى لا يكون PNG هو الخيار الأفضل',
        body: 'إذا كان هدفك الأساسي هو تقليل الحجم أو تسهيل الرفع والمشاركة، فغالبًا لا يكون PNG هو الخيار الأفضل. في هذه الحالات يكون JPG أو WebP أكثر منطقية.',
      },
      {
        title: 'ما الذي يجب توقعه من حيث الحجم',
        body: 'التحويل من JPG إلى PNG لا يستعيد الجودة المفقودة سابقًا، لكنه قد ينتج ملفًا أكبر. لذلك فهذه الخطوة مفيدة أساسًا عندما تكون أولوية العمل هي الاستقرار في التحرير لا الاقتصاد في الحجم.',
      },
    ],
  },
};

export function getLocalizedToolSearchIntentSections(
  lang: Locale,
  tool: ToolPageConfig,
): ToolIntentSection[] {
  if (lang === 'en') {
    return tool.searchIntentSections ?? [];
  }

  return SEARCH_INTENT_MAP[lang]?.[tool.slug] ?? [];
}
