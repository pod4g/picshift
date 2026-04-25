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
    'heic-to-jpg': [
      {
        title: 'iPhoneの写真がWindowsで開けない理由',
        body: 'iPhone（iOS 11以降）は写真をHEIC形式で保存します。iPhoneやMacでは問題なく開けますが、Windowsの標準ビューアーや古いアプリでは対応していないことが多く、JPGに変換するのが最も確実な解決策です。',
      },
      {
        title: 'JPGに変換するのが正解なケース',
        body: 'メールに添付する時、Webフォームにアップロードする時、Windows環境で確実に開きたい時。相手の環境がわからない場合は、JPGにしておけばまず間違いありません。',
      },
      {
        title: 'JPG以外が合う場面',
        body: '透過が必要ならPNG、Web配信でさらに軽くしたいならWebP。ただし「とりあえず開ける」を最優先するならJPG一択です。',
      },
    ],
    'heic-to-png': [
      {
        title: 'JPGではなくPNGを選ぶ理由',
        body: 'JPGは共有向きですが、編集を繰り返すたびに画質が落ちます。PNGは可逆圧縮なので、何度保存しても劣化しません。加工・注釈・デザインレビュー用途にはPNGが安全です。',
      },
      {
        title: 'ファイルが大きくなる理由',
        body: 'HEICは高効率圧縮、PNGは全ピクセルをそのまま保存します。ファイルサイズが数倍になるのは正常です。画質優先なら当然のトレードオフです。',
      },
      {
        title: 'PNGが不要なケース',
        body: '共有・メール添付・SNS投稿が目的なら、JPGやWebPのほうが軽くて実用的です。PNGは「これから編集する」「透過が要る」時に選んでください。',
      },
    ],
    'image-resizer': [
      {
        title: 'リサイズで解決できること',
        body: '4000px の写真を 800px のスロットに表示するなら、リサイズが最速の解決策です。商品画像、バナー、プロフィール写真、サムネイル — 表示枠に対して画像が大きすぎるケースはほぼリサイズで片付きます。',
      },
      {
        title: 'ピクセル指定 vs プリセット',
        body: 'SNSやECサイトが具体的なサイズを要求している時（1080×1080、1200×630など）はピクセル指定。とりあえず軽くしたいだけなら「最大1920px」「50%」などのプリセットでワンクリック。',
      },
      {
        title: 'リサイズだけで足りない時',
        body: 'リサイズしても容量が重いなら、フォーマット変換も組み合わせてください。PNG 4000px → JPG 1200px にすると、8MB が 300KB まで落ちることもあります。',
      },
    ],
    'png-to-avif': [
      {
        title: 'PNGからAVIFに変換するメリット',
        body: 'AVIFはJPGより30-50%小さく、PNGの透過もサポートします。Webサイトの表示速度を上げたい時、PNGからAVIFへの変換は最も効果的な軽量化手段の一つです。',
      },
      {
        title: 'AVIFの対応状況',
        body: 'Chrome、Firefox、Safariの最新版はAVIFに対応しています。ただし古いブラウザや一部の画像編集ソフトでは開けないため、JPGフォールバックを用意するのが実務的です。',
      },
      {
        title: 'AVIFよりPNGのままがいい場面',
        body: '編集を続ける画像、印刷用データ、ピクセル単位の正確さが必要な素材はPNGのままが安全です。AVIFは配信用フォーマットであり、作業用ファイルには向きません。',
      },
    ],
    'heif-to-jpg': [
      {
        title: 'HEIFをJPGに変換する理由',
        body: 'HEIFは軽量ですが、Windows・古いアプリ・アップロードフォーム・オフィス系ツールでは対応が不安定な場面が残っています。「確実に開けて、どこでも通る」を優先するならJPGが最も確実な出力です。',
      },
      {
        title: 'JPGを選ぶのが安全な場面',
        body: '送付先がWindows PC、アップロードフォーム、カスタマーサポート、オフィス系ツール、相手の環境が分からない共有の時。こうした状況ではJPGが最も事故の少ない形式です。',
      },
      {
        title: 'HEIFのままで問題ない場面',
        body: 'すべての端末とアプリがHEIFを問題なく扱えていて、ファイルサイズの小ささを活かしたい時は変換は不要です。共有・アップロード・特定のアプリで支障が出始めた時にJPG化を検討すれば十分です。',
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
    'heif-to-jpg': [
      {
        title: 'HEIF를 JPG로 바꾸는 이유',
        body: 'HEIF는 효율적이지만 Windows 앱, 업로드 폼, 사내 도구, 오래된 프로그램에서는 지원이 불안정한 경우가 많습니다. 확실하게 열리고 어디서든 통용되는 파일이 필요하면 JPG가 가장 안전한 출력입니다.',
      },
      {
        title: 'JPG가 더 안전한 상황',
        body: '파일이 Windows PC, 업로드 폼, 고객센터, 오피스 도구 또는 상대 환경을 알 수 없는 공유로 갈 때. 이런 상황에서는 JPG가 가장 사고가 적은 포맷입니다.',
      },
      {
        title: 'HEIF를 유지하는 편이 나은 경우',
        body: '모든 기기와 앱이 이미 HEIF를 잘 다루고 파일 크기의 장점을 쓰고 싶다면 변환이 꼭 필요한 건 아닙니다. 업로드나 공유, 특정 앱에서 문제가 생길 때 JPG로 옮기면 됩니다.',
      },
    ],
  },
  pt: {
    'jpg-to-png': [
      {
        title: 'Como converter JPG para PNG sem piorar mais a imagem',
        body: 'JPG para PNG faz sentido quando você vai editar, assinar, anotar ou reenviar o arquivo várias vezes. PNG não recupera o que já se perdeu no JPG original, mas evita somar mais perda a cada novo salvamento.',
      },
      {
        title: 'Quando JPG para PNG realmente vale a pena',
        body: 'Vale a pena quando estabilidade de edição importa mais que leveza. Se o arquivo vai entrar em revisão, anotação, aprovação ou reexportação, PNG costuma ser mais confortável do que continuar em JPG.',
      },
      {
        title: 'Quando é melhor continuar em JPG',
        body: 'Se o objetivo é só compartilhar, enviar ou subir um arquivo leve, JPG continua mais prático. PNG faz mais sentido quando você precisa de transparência ou de um arquivo estável para trabalhar depois.',
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
        title: 'Como redimensionar imagem online sem complicação',
        body: 'Se a imagem tem 4000px e vai para um espaço de 800px no site, o problema é excesso de dimensão. Redimensionar online resolve rápido para banner, produto, formulário, perfil e post de rede social.',
      },
      {
        title: 'Quando usar largura e altura exatas',
        body: 'Se o marketplace, CMS ou rede social pede uma medida específica (1080×1080, 1200×630, 1600×900), coloque largura e altura na mão. Se você só quer reduzir rápido, os presets resolvem em um clique.',
      },
      {
        title: 'Quando redimensionar e comprimir juntos',
        body: 'Uma imagem pode continuar pesada mesmo depois de ficar menor, especialmente se ainda estiver em PNG. Nessas horas, combinar redimensionamento com compressão ou mudança de formato costuma trazer o maior ganho.',
      },
    ],
    'png-to-jpg': [
      {
        title: 'Por que esse PNG tá tão grande?',
        body: 'PNG guarda cada pixel intacto — é lossless. Isso é ótimo pra qualidade, mas o preço é tamanho. Um print de 3 MB ou uma exportação de design de 5 MB vira 500 KB em JPG com qualidade 80-85. Se o arquivo não precisa de transparência, a conversão compensa quase sempre.',
      },
      {
        title: 'E a transparência?',
        body: 'Vai embora. JPG não tem suporte a fundo transparente — vira branco. Se a imagem precisa de transparência, mantenha como PNG ou use WebP.',
      },
      {
        title: 'Quando vale a pena ficar com PNG',
        body: 'Se você vai editar a imagem de novo, se precisa de transparência, ou se é um arquivo de referência que não pode perder nada. Pra prints com texto nítido e poucas cores, PNG às vezes nem é tão maior assim.',
      },
    ],
    'heif-to-jpg': [
      {
        title: 'Por que converter HEIF para JPG ainda resolve muita dor',
        body: 'HEIF é eficiente, mas ainda causa atrito em Windows, formulários de upload, e-mail e programas antigos que não entendem o formato. JPG continua sendo a saída mais segura quando o objetivo é simplesmente abrir, anexar e compartilhar sem surpresa.',
      },
      {
        title: 'Quando JPG é a escolha mais prática',
        body: 'Se o arquivo vai para um PC com Windows, um formulário de upload, um atendimento, uma ferramenta de escritório ou alguém cujo ambiente você não controla, JPG é o formato que dá menos trabalho no final. Compatibilidade vem antes da economia de tamanho.',
      },
      {
        title: 'Quando mantém o HEIF vale a pena',
        body: 'Se todos os seus dispositivos e aplicativos já lidam bem com HEIF e o arquivo mais leve importa, não há pressa para converter. A conversão para JPG entra em cena quando um upload, um envio ou um programa começa a travar.',
      },
    ],
    'image-compressor': [
      {
        title: 'Quando comprimir imagens é o caminho certo',
        body: 'Se o problema é o peso do arquivo e não o tamanho em pixels, comprimir é o passo mais direto. Funciona pra subir foto num site que limita 2 MB, mandar anexo por e-mail sem o servidor reclamar, ou só aliviar a pasta de fotos. Em qualidade 80 a maioria das fotos perde 40–60% sem diferença visível na tela.',
      },
      {
        title: 'Por que às vezes a compressão entrega pouco',
        body: 'Se o arquivo já saiu de outro compressor ou veio de uma rede social, ele pode estar perto do mínimo possível pro JPG. Insistir em comprimir vai degradar a imagem sem reduzir muito. Nesses casos vale mais redimensionar pra menos pixels ou converter pra WebP, que rende mais por byte.',
      },
      {
        title: 'Compressor de imagens vs redimensionar: o que escolher',
        body: 'Se a foto está em 4000×3000 e vai aparecer num espaço de 800px, redimensionar primeiro economiza muito mais que só comprimir. Se já está numa resolução adequada, basta comprimir. Pra pegar o melhor dos dois, redimensiona pra 1920px no lado maior e depois comprime em qualidade 80.',
      },
    ],
    'webp-to-jpg': [
      {
        title: 'Por que converter WebP para JPG ainda é prático',
        body: 'WebP é o padrão do navegador moderno, mas fora dele continua tropeçando em programas de escritório, sistemas internos e plataformas de upload mais antigas. Converter pra JPG (ou "passar webp para jpg" como muita gente busca) resolve o caso quando o destino simplesmente não aceita o formato.',
      },
      {
        title: 'Quando o JPG é a escolha mais segura',
        body: 'Se o arquivo vai pra um e-mail corporativo, um formulário governamental, um sistema de RH, ou alguém cujo computador você não conhece, JPG é o formato com a maior probabilidade de abrir do outro lado. Pesa mais que o WebP, mas elimina pergunta de "não consegui abrir".',
      },
      {
        title: 'O custo de virar JPG: compatibilidade vs peso',
        body: 'WebP comprime melhor que JPG, então o arquivo final pode ficar um pouco maior depois da conversão. Se isso for crítico, encadeie a conversão com o compressor de imagens — você sai com um JPG legível em qualquer lugar e ainda enxuto.',
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
    'heif-to-jpg': [
      {
        title: 'Pourquoi convertir HEIF en JPG reste utile',
        body: 'HEIF est efficace, mais le format crée encore des frictions dans Windows, les outils bureautiques, les formulaires d’upload et certains flux de partage. JPG reste le repli le plus simple quand on veut juste que le fichier s’ouvre et passe partout.',
      },
      {
        title: 'Quand JPG est la sortie la plus sûre',
        body: 'Choisissez JPG si le fichier part vers un PC Windows, un service client, un site d’upload, un e-mail ou un collègue dont vous ne maîtrisez pas l’environnement. C’est le format le plus tolérant dans ces cas-là.',
      },
      {
        title: 'Quand il vaut mieux garder HEIF',
        body: 'Si tous vos appareils et applications prennent déjà bien HEIF en charge, convertir n’est pas toujours nécessaire. Gardez HEIF quand votre priorité est un fichier plus efficace en taille et qu’aucun blocage de compatibilité ne se présente.',
      },
    ],
    'image-resizer': [
      {
        title: 'Comment redimensionner une image en ligne rapidement',
        body: 'Si l’image est beaucoup plus grande que l’espace d’affichage final, réduire les dimensions est souvent le moyen le plus direct de régler un problème de poids ou de mise en page. C’est typiquement le bon réflexe pour un formulaire, une fiche produit ou un visuel social.',
      },
      {
        title: 'Quand utiliser une largeur et une hauteur exactes',
        body: 'Des dimensions précises sont utiles pour les fiches produit, les mises en page éditoriales, les visuels sociaux ou les outils qui imposent une taille stricte en pixels. Les préréglages servent quand vous voulez juste réduire vite.',
      },
      {
        title: 'Quand il faut redimensionner puis compresser',
        body: 'Si le fichier reste trop lourd après redimensionnement, combinez la réduction de dimensions avec une conversion de format ou une compression. Le meilleur gain vient souvent de ces deux actions ensemble.',
      },
    ],
    'png-to-jpg': [
      {
        title: 'Pourquoi utiliser un convertisseur PNG JPG en ligne',
        body: 'Parce qu’un PNG photo ou une capture exportée peut devenir inutilement lourd. Convertir PNG vers JPG est souvent la solution la plus simple quand vous voulez un fichier plus léger pour l’envoi, le partage ou la mise en ligne.',
      },
      {
        title: 'Quand PNG vers JPG est le bon choix',
        body: 'C’est le bon choix quand la transparence n’a plus d’utilité et que votre priorité devient le poids du fichier. Pour un formulaire d’upload, un e-mail ou une image à publier, JPG est souvent plus pratique.',
      },
      {
        title: 'Quand il vaut mieux garder PNG',
        body: 'Gardez PNG si l’image contient de la transparence, du texte fin, une interface, un logo ou si vous voulez éviter une compression avec perte. Dans ces cas, la stabilité du PNG vaut souvent plus que le gain de poids du JPG.',
      },
    ],
  },
  es: {
    'png-to-jpg': [
      {
        title: 'Cuándo convertir PNG a JPG ahorra mucho peso',
        body: 'PNG guarda cada píxel sin pérdida, lo que hace que las fotos en PNG terminen siendo innecesariamente pesadas. Con calidad 80–85, el JPG suele pesar un 60–80% menos sin diferencia visible — es la solución estándar cuando un correo, formulario o web rechaza tu archivo por exceso de tamaño.',
      },
      {
        title: 'La advertencia clave: pierdes la transparencia',
        body: 'JPG no soporta transparencia. Si el PNG es un logo, un icono o un gráfico con fondo transparente, convertirlo a JPG llenará el fondo de blanco. En esos casos conviene quedarse en PNG o pasar a WebP, que sí mantiene transparencia con archivos pequeños.',
      },
      {
        title: 'Cuándo es mejor mantener el PNG',
        body: 'Mantén PNG cuando se trate de capturas de pantalla, interfaces, texto o líneas finas. JPG puede introducir bordes borrosos en zonas de alto contraste, mientras que PNG conserva la nitidez del original.',
      },
    ],
    'jpg-to-png': [
      {
        title: 'Cuándo convertir JPG a PNG tiene sentido',
        body: 'PNG ayuda cuando vas a editar, anotar o re-exportar la imagen y no quieres que cada nueva versión pierda calidad. No recupera nada del JPG original, pero evita que cada nuevo guardado degrade más.',
      },
      {
        title: 'Lo que no obtienes al pasar de JPG a PNG',
        body: 'No mejora la calidad: lo que ya se perdió en la compresión JPG no vuelve. Tampoco baja el peso — al contrario, el PNG suele ser bastante más grande. La ganancia real es la estabilidad para futuras ediciones.',
      },
      {
        title: 'Cuándo conviene quedarse en JPG',
        body: 'Si solo quieres compartir, subir o enviar la foto sin trabajo posterior, JPG sigue siendo la opción correcta: archivo pequeño y compatibilidad universal. PNG es mejor cuando hay edición de por medio.',
      },
    ],
    'heic-to-jpg': [
      {
        title: 'Por qué HEIC se convierte en problema fuera del iPhone',
        body: 'HEIC es eficiente en iPhone, pero muchos PCs con Windows, formularios web, programas de correo y sitios de comercio electrónico todavía no lo abren bien. Convertir a JPG es la forma más rápida de evitar la fricción cuando la foto sale del ecosistema Apple.',
      },
      {
        title: 'JPG es la salida más segura cuando no controlas el destino',
        body: 'Si vas a enviar la foto a alguien que no conoces, subirla a un trámite, adjuntarla a un correo o publicarla en un sitio que no controlas, JPG es la opción que abre todo el mundo. Pesa más que HEIC, pero ahorra problemas de apertura.',
      },
      {
        title: 'Cuándo conservar HEIC',
        body: 'Si todos tus dispositivos y apps abren HEIC sin problema y quieres aprovechar archivos más pequeños, no hay urgencia de convertir. La conversión a JPG cobra sentido cuando un sistema externo no acepta el formato.',
      },
    ],
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
        title: 'Por qué convertir WebP a PNG',
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
    'heif-to-jpg': [
      {
        title: 'Por qué convertir HEIF a JPG sigue resolviendo problemas',
        body: 'HEIF es eficiente, pero todavía genera fricción en Windows, formularios de subida, correo y programas antiguos que no abren bien el formato. JPG sigue siendo la salida más segura cuando el objetivo es simplemente abrir, adjuntar y compartir sin sorpresas.',
      },
      {
        title: 'Cuándo JPG es la opción más práctica',
        body: 'Si el archivo va a un PC con Windows, un formulario de subida, un servicio de atención, una herramienta de oficina o alguien cuyo entorno no controlas, JPG es el formato que menos problemas da. La compatibilidad pesa más que el ahorro de tamaño en estos casos.',
      },
      {
        title: 'Cuándo conviene mantener el HEIF',
        body: 'Si todos tus dispositivos y aplicaciones ya lo abren bien y quieres aprovechar un archivo más ligero, no hay prisa por convertirlo. La conversión a JPG tiene sentido cuando una subida, un envío o un programa empiezan a dar error.',
      },
    ],
  },
  ru: {
    'image-resizer': [
      {
        title: 'Когда изменение размера — самое прямое решение',
        body: 'Если изображение значительно больше, чем пространство, в котором оно будет показано, уменьшение размеров — обычно самый быстрый способ снизить вес файла и ускорить загрузку. Типичные ситуации: формы загрузки, маркетплейсы, соцсети и вложения в почте.',
      },
      {
        title: 'Когда нужны точные пиксели',
        body: 'Некоторые сайты и соцсети требуют конкретные размеры (например, 1080×1080 для Instagram, 1200×630 для обложек Facebook, точные пиксели для карточек товара). В этих случаях режим «Свой размер» позволяет ввести точные ширину и высоту без искажений.',
      },
      {
        title: 'Когда одного изменения размера недостаточно',
        body: 'Если файл остаётся слишком тяжёлым даже после уменьшения размеров, лучше комбинировать ресайз с конверсией формата или сжатием. Часто наибольший выигрыш по весу даёт именно сочетание двух действий.',
      },
    ],
    'image-compressor': [
      {
        title: 'Как сжать фото онлайн, если файл слишком большой',
        body: 'Если проблема именно в весе файла, а не в его размерах, сжатие — самый быстрый способ уменьшить объём. Это особенно полезно для загрузки на сайт, отправки по почте и файлов, которые не проходят по лимиту.',
      },
      {
        title: 'Как уменьшить размер фото без сильной потери качества',
        body: 'Начните с умеренного качества и сравните результат перед скачиванием. На большинстве фото заметного ухудшения не видно, пока вы не уходите в слишком агрессивное сжатие.',
      },
      {
        title: 'Когда лучше уменьшить размеры, а не только сжимать',
        body: 'Если разрешение картинки намного больше, чем нужно для показа, уменьшение размеров даст больший эффект, чем одно только сжатие. Часто лучший результат — сначала уменьшить, потом сжать.',
      },
    ],
    'heif-to-jpg': [
      {
        title: 'Почему HEIF в JPG всё ещё нужен',
        body: 'HEIF экономичен, но формат до сих пор вызывает трение в Windows, старых приложениях, формах загрузки и офисных инструментах. JPG остаётся самым надёжным способом получить файл, который просто откроется и отправится без сюрпризов.',
      },
      {
        title: 'Когда JPG — самый безопасный вариант',
        body: 'Если файл идёт в Windows, на сайт с загрузкой изображений, по почте, в офисный сервис или человеку с непредсказуемой средой, JPG обычно безопаснее всего. Это формат с наименьшим количеством сюрпризов.',
      },
      {
        title: 'Когда лучше не переводить HEIF в JPG',
        body: 'Если ваши устройства и приложения уже хорошо работают с HEIF и вам важна эффективность по размеру, конвертация не всегда обязательна. JPG нужен тогда, когда совместимость начинает мешать работе.',
      },
    ],
  },
  de: {
    'heic-to-jpg': [
      {
        title: 'Warum HEIC außerhalb des iPhones zum Problem wird',
        body: 'HEIC spart Speicher auf dem iPhone, aber viele Windows-PCs, Bewerbungsportale, Behörden-Formulare, E-Mail-Programme und Online-Shops können das Format bis heute nicht zuverlässig öffnen. Die Umwandlung in JPG ist meist der schnellste Weg, diese Hürden zu beseitigen.',
      },
      {
        title: 'JPG ist die sicherste Wahl, wenn Sie das Zielsystem nicht kennen',
        body: 'Wenn die Datei an einen unbekannten Empfänger geht, in ein Online-Formular hochgeladen wird, an einer E-Mail hängt oder auf einer fremden Plattform landet, ist JPG das Format, das wirklich überall öffnet. Etwas größer als HEIC, dafür ohne Kompatibilitätsprobleme.',
      },
      {
        title: 'Wann sich HEIC behalten lohnt',
        body: 'Wenn alle eigenen Geräte und Programme HEIC sauber öffnen, lohnt es sich, das kompakte Format zu behalten. Erst wenn ein externer Workflow das Format ablehnt, wird die Umwandlung in JPG zur sinnvollen Lösung.',
      },
    ],
    'image-resizer': [
      {
        title: 'Wann Bildgröße ändern die direkte Lösung ist',
        body: 'Wenn das Bild deutlich größer ist als der Bereich, in dem es später angezeigt wird, ist das Verkleinern der Abmessungen meistens der schnellste Weg, das Dateigewicht zu senken und die Ladezeit zu verbessern. Typische Anwendungen: Bewerbungsformulare, Online-Shops, soziale Netzwerke und E-Mail-Anhänge.',
      },
      {
        title: 'Wann Sie exakte Pixel brauchen',
        body: 'Manche Plattformen verlangen feste Maße (zum Beispiel 1080×1080 für Instagram, 1200×630 für Facebook-Titelbilder, definierte Pixel für Marketplace-Produktbilder). In diesen Fällen erlaubt der Modus „Benutzerdefiniert" die Eingabe exakter Werte, ohne das Bild zu verzerren.',
      },
      {
        title: 'Wann Skalieren allein nicht reicht',
        body: 'Wenn die Datei nach dem Verkleinern immer noch zu schwer ist, hilft die Kombination aus Skalieren und Komprimieren oder Formatwechsel. Oft kommt der größte Gewinn aus beiden Schritten zusammen.',
      },
    ],
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
    'heif-to-jpg': [
      {
        title: 'Warum sich HEIF in JPG umwandeln weiter lohnt',
        body: 'HEIF ist effizient, sorgt aber immer noch für Reibung unter Windows, in Upload-Formularen, im E-Mail-Alltag und in älteren Programmen, die das Format nicht zuverlässig öffnen. JPG bleibt die sicherste Ausgabe, wenn eine Datei einfach nur „funktionieren" soll.',
      },
      {
        title: 'Wann JPG die praktischere Wahl ist',
        body: 'Wenn die Datei an einen Windows-PC, ein Upload-Formular, einen Kundenservice, ein Office-Tool oder eine Person geht, deren Umgebung Sie nicht kontrollieren, macht JPG am wenigsten Probleme. Kompatibilität wiegt in diesen Fällen schwerer als die Dateigröße.',
      },
      {
        title: 'Wann HEIF behalten sinnvoll bleibt',
        body: 'Wenn alle Ihre Geräte und Programme HEIF bereits problemlos öffnen und Ihnen die kleinere Dateigröße wichtig ist, müssen Sie nicht umwandeln. Die Umwandlung in JPG wird dann relevant, wenn ein Upload, ein Versand oder ein Programm anfängt zu haken.',
      },
    ],
    'image-compressor': [
      {
        title: 'Wann ein Bildkomprimierer wirklich hilft',
        body: 'Sobald eine E-Mail einen Anhang ablehnt, ein Bewerbungsportal weniger als 2 MB verlangt oder eine Webseite zu langsam lädt, ist Komprimieren der schnellste Hebel. Bei Qualität 80 schrumpft ein typisches Smartphone-JPG um 40–60 % — ohne dass du den Unterschied am Bildschirm siehst.',
      },
      {
        title: 'Warum manche Bilder kaum kleiner werden',
        body: 'Schon stark komprimierte JPGs oder Bilder mit feinen Details bringen am Qualitätsregler wenig Spielraum. Hier hilft ein Formatwechsel zu WebP oder ein Verkleinern der Auflösung mehr als noch aggressiver zu komprimieren — sonst verlierst du Schärfe ohne nennenswerten Größengewinn.',
      },
      {
        title: 'Wann Verkleinern besser ist als Komprimieren',
        body: 'Bei einer Originalauflösung von 4000×3000, die nur in einem 800-Pixel-Bereich angezeigt wird, bringt ein Skalieren auf 1920 Pixel sofort viel mehr als das Drehen am Qualitätsregler. In der Praxis lohnt sich oft die Kombi: erst auf Zielgröße bringen, dann mit Qualität 80 komprimieren.',
      },
    ],
    'webp-to-jpg': [
      {
        title: 'Warum WebP in JPG umwandeln immer noch hilft',
        body: 'WebP funktioniert in modernen Browsern bestens, aber außerhalb davon bremsen es ältere Office-Programme, viele Bewerbungsportale und ein Teil der Mail-Programme aus. JPG ist der pragmatische Weg, eine WebP-Datei dort einsetzbar zu machen, wo das Zielsystem keinen WebP-Support kennt.',
      },
      {
        title: 'Wann „WebP als JPG speichern" der richtige Reflex ist',
        body: 'Wenn du eine WebP-Datei aus einem Browser-Download zugespielt bekommst und sie in Word, PowerPoint oder einem alten Bildbetrachter brauchst — eine Konvertierung in JPG erspart dir das Suchen nach speziellen Plug-ins. Genau dafür ist diese Umwandlung gemacht.',
      },
      {
        title: 'Der Trade-off: kompatibler, manchmal etwas größer',
        body: 'WebP komprimiert effizienter als JPG, daher kann die Ausgabedatei nach der Umwandlung etwas größer sein als das Original. Wenn dir Größe wichtiger ist als Kompatibilität, kombiniere die Umwandlung mit unserem Bildkompressor — du bekommst beides in einem Durchlauf.',
      },
    ],
  },
  it: {
    'jpg-to-png': [
      {
        title: 'Quando convertire JPG in PNG ha senso',
        body: 'PNG aiuta quando devi modificare, annotare o riesportare un\u2019immagine e non vuoi che ogni nuova versione perda qualità. Non recupera nulla dal JPG di partenza, ma evita che ogni salvataggio successivo degradi ulteriormente l\u2019immagine.',
      },
      {
        title: 'Cosa non ottieni passando da JPG a PNG',
        body: 'Non migliora la qualità: ciò che è già andato perso nella compressione JPG non torna. Nemmeno il peso scende — al contrario, il PNG di solito è ben più grande. Il vantaggio reale è la stabilità per futuri ritocchi.',
      },
      {
        title: 'Quando conviene restare su JPG',
        body: 'Se devi solo condividere, caricare o inviare l\u2019immagine senza altri ritocchi, JPG resta la scelta giusta: file leggero e compatibilità universale. PNG è preferibile quando ci sarà editing di mezzo.',
      },
    ],
    'image-resizer': [
      {
        title: 'Quando ridimensionare è la soluzione più diretta',
        body: 'Se l\u2019immagine è molto più grande dello spazio in cui verrà mostrata, ridurre le dimensioni è di solito il modo più rapido per alleggerire il file e migliorare il caricamento. Tipicamente serve per moduli, e-commerce, social e allegati email.',
      },
      {
        title: 'Quando servono pixel esatti',
        body: 'Alcuni siti, marketplace e social impongono dimensioni precise (per esempio 1080×1080 per Instagram, 1200×630 per Facebook). In questi casi la modalità Personalizzata permette di inserire larghezza e altezza esatte senza deformare l\u2019immagine.',
      },
      {
        title: 'Quando ridimensionare da solo non basta',
        body: 'Se il file resta troppo pesante anche dopo aver ridotto le dimensioni, conviene combinare il ridimensionamento con la conversione di formato o la compressione. Spesso il risparmio maggiore arriva dalle due azioni messe insieme.',
      },
    ],
    'heif-to-jpg': [
      {
        title: 'Perché convertire HEIF in JPG risolve ancora molti blocchi',
        body: "HEIF è efficiente, ma continua a creare attriti in Windows, nei moduli di upload, nelle email e nei programmi più vecchi che non aprono bene il formato. JPG resta l'uscita più sicura quando l'obiettivo è aprire, allegare e condividere senza sorprese.",
      },
      {
        title: 'Quando JPG è la scelta più pratica',
        body: "Se il file va verso un PC Windows, un modulo di upload, un servizio clienti, uno strumento office o una persona il cui ambiente non controlli, JPG è il formato che crea meno problemi. La compatibilità pesa più del risparmio di dimensione in questi contesti.",
      },
      {
        title: 'Quando conviene tenere HEIF',
        body: "Se tutti i tuoi dispositivi e applicazioni lo aprono già bene e vuoi sfruttare file più leggeri, non c'è fretta di convertire. La conversione in JPG ha senso quando un upload, un invio o un programma iniziano a creare problemi.",
      },
    ],
    'image-compressor': [
      {
        title: 'Come comprimere le foto: quando serve davvero',
        body: 'Quando la mail rifiuta un allegato, un sito chiede meno di 2 MB o un caricamento si blocca per dimensioni, il primo passo è comprimere — non ridimensionare. A qualità 80 una foto JPG di smartphone perde tipicamente il 40–60% del peso senza differenze visibili a occhio.',
      },
      {
        title: 'Comprimere foto per email: i limiti reali',
        body: 'Gmail accetta fino a 25 MB per messaggio, Outlook 20 MB, ma molte aziende tagliano già a 10 MB. Comprimere a 80 di solito basta per stare sotto questi limiti senza ridimensionare. Per allegati misti (foto + PDF) lascia un margine di 2–3 MB per altri file e firma automatica.',
      },
      {
        title: 'Quando ridurre il peso non basta più',
        body: 'Se la foto è molto grande in pixel (4000×3000 da fotocamera) ma serve solo a 1920 pixel sul web, ridimensionare prima della compressione fa più della sola compressione. La combinazione è spesso quella che dà il maggiore risparmio: prima dimensione, poi qualità.',
      },
    ],
    'webp-to-jpg': [
      {
        title: 'Perché convertire WebP in JPG resta utile',
        body: 'WebP funziona alla grande nei browser moderni, ma fuori dal browser molti programmi Office, vecchi visualizzatori, alcuni client e-mail e moduli di upload non lo accettano. Trasformare il WebP in JPG è il modo più pragmatico per far entrare il file in flussi che non riconoscono ancora il formato.',
      },
      {
        title: 'Quando "salvare WebP come JPG" è il riflesso giusto',
        body: 'Se ti capita un WebP scaricato da una pagina e ti serve in Word, PowerPoint, Photoshop in versioni vecchie o in un programma di stampa, conviene convertire una volta sola in JPG invece di cercare plug-in dedicati per ogni applicazione.',
      },
      {
        title: 'Il compromesso: più compatibile, a volte più pesante',
        body: 'JPG si apre ovunque, ma comprime meno bene di WebP, quindi il file finale può pesare un po\' di più. Se la dimensione conta, abbina la conversione al nostro compressore immagini: ottieni compatibilità e file leggero nello stesso passaggio.',
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
