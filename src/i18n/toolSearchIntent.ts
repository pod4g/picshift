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
    'jpg-to-png': [
      {
        title: 'Quando converter JPG para PNG faz sentido',
        body: 'PNG é útil quando você quer editar, anotar ou reexportar a imagem sem que cada salvamento degrade mais a qualidade. Não melhora o que já foi perdido, mas evita perda adicional.',
      },
      {
        title: 'O que esperar do tamanho do arquivo',
        body: 'O PNG costuma ser bem maior que o JPG original, porque armazena mais dados de imagem. Esse aumento é normal quando a prioridade é estabilidade de edição e não leveza.',
      },
      {
        title: 'Quando é melhor ficar com JPG',
        body: 'Se o objetivo é só compartilhar, enviar ou subir um arquivo leve, JPG costuma ser mais prático. PNG faz mais sentido quando você precisa de transparência ou de um arquivo mais estável para trabalhar.',
      },
    ],
    'heic-to-png': [
      {
        title: 'Por que converter HEIC para PNG',
        body: 'PNG é útil quando você precisa de um arquivo sem perda para edição, anotação, revisão de design ou entrega de produção. Não é a opção mais leve, mas é mais estável quando a qualidade da imagem não pode degradar.',
      },
      {
        title: 'Por que o arquivo PNG fica muito maior',
        body: 'HEIC comprime fotos com eficiência, enquanto PNG guarda muito mais informação por pixel. O aumento de tamanho é esperado e normal quando a prioridade é qualidade sem perda.',
      },
      {
        title: 'Quando JPG ou WebP é a melhor escolha',
        body: 'Se o objetivo é um arquivo leve para compartilhar, enviar ou subir, JPG ou WebP costumam ser mais adequados. PNG faz mais sentido quando edição, transparência ou estabilidade do fluxo importam mais que tamanho.',
      },
    ],
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
    'image-resizer': [
      {
        title: 'Quando redimensionar é a solução certa',
        body: 'Se a imagem é maior do que o espaço que vai ocupar — no site, no e-commerce, no formulário ou na rede social — redimensionar resolve diretamente o problema. É o ajuste mais rápido para imagens de produto, banners, capturas de tela e fotos de perfil.',
      },
      {
        title: 'Dimensões exatas vs. presets rápidos',
        body: 'Use dimensões exatas quando o CMS, marketplace ou editor de conteúdo exige um tamanho específico (ex: 1080×1080 para Instagram). Use presets como Máx 1920px ou 50% quando só precisa reduzir sem meta fixa.',
      },
      {
        title: 'Quando redimensionar sozinho não basta',
        body: 'Se a imagem ainda fica pesada depois de redimensionar, combine com conversão de formato ou compressão. O maior ganho costuma vir de reduzir tanto as dimensões quanto o formato ao mesmo tempo — de PNG 4000px para JPG 1200px, por exemplo.',
      },
    ],
    'png-to-jpg': [
      {
        title: 'Por que converter PNG para JPG',
        body: 'Na maioria dos casos, é porque o arquivo PNG está grande demais. Uma captura de tela de 3 MB ou uma exportação de design de 5 MB vira 500 KB em JPG com qualidade 80-85, sem diferença visível. É a conversão mais comum quando o objetivo é reduzir tamanho para upload, e-mail ou página web.',
      },
      {
        title: 'O que acontece com a transparência',
        body: 'JPG não suporta transparência. Áreas transparentes no PNG viram fundo branco no JPG. Se a imagem precisa de transparência, mantenha como PNG ou converta para WebP.',
      },
      {
        title: 'Quando manter PNG é a melhor escolha',
        body: 'Mantenha PNG quando a imagem vai ser editada novamente, precisa de transparência, ou será usada como arquivo de referência. Para capturas de tela com texto nítido e poucas cores, PNG pode até ser competitivo em tamanho.',
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
    'image-resizer': [
      {
        title: 'Cuándo redimensionar es la solución correcta',
        body: 'Si la imagen es mucho más grande que el espacio donde va a mostrarse, reducir las dimensiones suele ser la forma más directa de bajar el peso y mejorar la carga. Es especialmente útil para formularios, redes sociales y correo.',
      },
      {
        title: 'Cuándo necesitas dimensiones exactas',
        body: 'Algunos sitios y formularios piden un tamaño específico en píxeles. En esos casos, el modo personalizado te permite ajustar anchura y altura para cumplir el requisito sin deformar la imagen.',
      },
      {
        title: 'Cuándo redimensionar no basta',
        body: 'Si el archivo sigue pesando demasiado después de reducir las dimensiones, conviene combinarlo con compresión o con un cambio de formato. El mayor ahorro suele venir de ambas cosas juntas.',
      },
    ],
    'image-compressor': [
      {
        title: 'Cuándo comprimir imágenes es lo más práctico',
        body: 'Si el problema es el peso del archivo y no sus dimensiones, comprimir es el paso más directo. Es útil para subir fotos a un sitio, enviarlas por correo o cumplir límites de tamaño sin cambiar el tamaño visual de la imagen.',
      },
      {
        title: 'Por qué a veces la imagen no se reduce mucho',
        body: 'Algunas imágenes ya están muy comprimidas o tienen una estructura que no encoge fácilmente con la calidad actual. En esos casos, bajar más la calidad, redimensionar o cambiar de formato puede ayudar más.',
      },
      {
        title: 'Cuándo es mejor redimensionar que comprimir',
        body: 'Si la resolución de la imagen es mucho mayor que el espacio donde se va a mostrar, reducir las dimensiones puede ahorrar más peso que solo comprimir. Lo ideal suele ser ajustar el tamaño primero y comprimir después.',
      },
    ],
    'heic-to-png': [
      {
        title: 'Por qué convertir HEIC a PNG',
        body: 'PNG es útil cuando necesitas un archivo sin pérdida para edición, anotaciones, revisión de diseño o reexportación. No es la opción más ligera, pero es más estable para flujos de trabajo que exigen calidad intacta.',
      },
      {
        title: 'Por qué el archivo PNG es mucho más grande',
        body: 'HEIC comprime muy bien las fotos, mientras que PNG guarda mucha más información por píxel. El aumento de tamaño es normal y esperado cuando la prioridad es calidad sin pérdida y no un archivo ligero.',
      },
      {
        title: 'Cuándo conviene elegir JPG o WebP en lugar de PNG',
        body: 'Si tu objetivo es compartir, subir o enviar con el menor peso posible, JPG o WebP suelen ser mejores opciones. PNG tiene más sentido cuando la edición, la transparencia o la estabilidad del flujo importan más que el tamaño.',
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
  ru: {
    'image-compressor': [
      {
        title: 'Когда сжатие — самый прямой путь',
        body: 'Если проблема в весе файла, а не в его размерах, сжатие — самый быстрый способ уменьшить объём. Это полезно для загрузки на сайт, отправки по почте или когда файл не проходит по ограничению размера.',
      },
      {
        title: 'Почему иногда сжатие почти не уменьшает файл',
        body: 'Некоторые изображения уже сильно сжаты или хранятся в формате, который плохо поддаётся дальнейшей компрессии. В таких случаях помогает уменьшение разрешения или смена формата.',
      },
      {
        title: 'Когда лучше уменьшить размер, а не сжимать',
        body: 'Если разрешение картинки намного больше, чем нужно для отображения, уменьшение размеров даст больший эффект, чем одно только сжатие. Часто лучший результат — сначала уменьшить, потом сжать.',
      },
    ],
  },
  de: {
    'jpg-to-png': [
      {
        title: 'Wann JPG in PNG umwandeln sinnvoll ist',
        body: 'Diese Konvertierung ist nützlich, wenn Sie ein Bild stabiler bearbeiten, beschriften oder erneut exportieren möchten. PNG verhindert, dass beim nächsten Speichern weitere Qualität verloren geht.',
      },
      {
        title: 'Was Sie bei der Dateigröße erwarten sollten',
        body: 'PNG-Dateien sind in der Regel deutlich größer als JPG, weil PNG verlustfrei speichert. Der Größenzuwachs ist normal, wenn Bearbeitungsstabilität wichtiger ist als Dateigröße.',
      },
      {
        title: 'Wann JPG die bessere Wahl bleibt',
        body: 'Wenn Sie das Bild nur teilen, hochladen oder verschicken wollen und weder Transparenz noch verlustfreie Bearbeitung brauchen, ist JPG meistens die praktischere Option.',
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
