import type { Locale } from './config';

type ToolFaqItem = { q: string; a: string };

const TOOL_FAQ_OVERRIDES: Partial<Record<Locale, Partial<Record<string, ToolFaqItem[]>>>> = {
  es: {
    'webp-to-jpg': [
      {
        q: 'Por qué convertir WebP a JPG?',
        a: 'WebP funciona bien en navegadores, pero algunas apps antiguas, formularios de subida y herramientas de oficina siguen esperando JPG. Convertir a JPG suele ser la forma más rápida de resolver ese problema de compatibilidad.',
      },
      {
        q: 'Cómo convertir WebP a JPG online?',
        a: 'Sube la imagen WebP, deja JPG como formato de salida y descarga el archivo convertido. Es útil cuando necesitas una imagen que abra o suba con menos fricción.',
      },
      {
        q: 'WebP a JPG puede aumentar el tamaño del archivo?',
        a: 'Sí. WebP suele ser más eficiente que JPG, así que al convertir por compatibilidad el archivo final puede quedar más grande según la imagen y la calidad elegida.',
      },
    ],
    'webp-to-png': [
      {
        q: 'La conversión de WebP a PNG pierde calidad?',
        a: 'No. PNG es un formato sin pérdida, así que conserva todos los píxeles decodificados del WebP. El cambio busca un archivo más estable para trabajo o edición, no un archivo más pequeño.',
      },
      {
        q: 'Cuándo conviene convertir WebP a PNG?',
        a: 'Conviene cuando necesitas seguir editando, anotar, revisar o mover la imagen por herramientas que esperan PNG. También tiene sentido cuando la transparencia o la estabilidad del flujo importan más que el tamaño final.',
      },
      {
        q: 'Por qué el PNG convertido pesa más?',
        a: 'Porque PNG prioriza salida sin pérdida y estabilidad, mientras WebP suele estar más optimizado para reducir peso. En esta conversión es normal ganar compatibilidad de flujo a costa de un archivo mayor.',
      },
    ],
  },
  fr: {
    'webp-to-jpg': [
      {
        q: 'Pourquoi convertir WebP en JPG ?',
        a: "WebP fonctionne bien dans les navigateurs, mais certains logiciels plus anciens, formulaires de téléversement et outils bureautiques attendent encore du JPG. Le JPG reste la solution la plus simple quand la compatibilité passe avant tout.",
      },
      {
        q: 'Comment convertir WebP en JPG en ligne ?',
        a: "Ajoutez le fichier WebP, laissez JPG comme format de sortie, puis téléchargez le résultat. C'est utile quand vous avez besoin d'un fichier qui passe plus facilement dans des outils non web.",
      },
      {
        q: 'Le fichier peut-il devenir plus lourd ?',
        a: "Oui. WebP est souvent plus efficace que JPG, donc une conversion vers JPG pour compatibilité peut produire un fichier plus lourd selon l'image et la qualité choisie.",
      },
    ],
  },
  ja: {
    'image-compressor': [
      {
        q: '画像圧縮でどのくらい容量を減らせますか？',
        a: '削減幅は元画像によって変わりますが、一般的な写真では品質を少し下げるだけでも大きく軽くなることがあります。ダウンロード前に比較表示を見ながら判断できるのが実用的です。',
      },
      {
        q: '画像圧縮はアップロードなしで使えますか？',
        a: 'はい。PicShift はブラウザ内でローカル処理するため、画像を処理のためにサーバーへ送信しません。プライバシー重視の画像にも向いています。',
      },
      {
        q: '画像圧縮と画像リサイズはどう使い分けますか？',
        a: '容量を下げたいだけならまず圧縮、表示サイズに対して画像が大きすぎるならリサイズも併用すると効果的です。重さの原因が画素数なら、リサイズのほうが効くこともあります。',
      },
    ],
  },
  ko: {
    'heic-to-jpg': [
      {
        q: '왜 HEIC를 JPG로 바꾸나요?',
        a: 'HEIC는 아이폰에서는 효율적이지만 Windows 앱, 업로드 폼, 오래된 편집기에서는 아직 잘 안 열리는 경우가 있습니다. JPG는 가장 무난한 호환성 해결책입니다.',
      },
      {
        q: '여기서 HEIC를 JPG로 바꿔도 안전한가요?',
        a: '네. 변환은 브라우저 안에서 로컬로 실행되고 파일이 처리용으로 업로드되지 않습니다. 민감한 사진이나 문서 이미지에도 더 안심하고 쓸 수 있습니다.',
      },
      {
        q: 'HEIC를 JPG로 바꾸면 화질이 많이 떨어지나요?',
        a: '선택한 품질 설정에 따라 달라지지만, 일반적인 공유나 업로드 용도에서는 충분히 좋은 결과를 얻을 수 있습니다. 더 높은 품질을 원하면 슬라이더를 올려서 조정하면 됩니다.',
      },
    ],
  },
  pt: {
    'heic-to-jpg': [
      {
        q: 'Por que converter HEIC para JPG?',
        a: 'HEIC funciona bem no iPhone, mas ainda falha em alguns apps de Windows, uploads e fluxos mais antigos. JPG continua sendo a escolha mais segura quando você quer abrir e compartilhar sem surpresas.',
      },
      {
        q: 'Converter HEIC para JPG aqui é seguro?',
        a: 'Sim. O processamento acontece localmente no navegador, sem upload do arquivo para o servidor. Isso ajuda bastante quando a imagem tem conteúdo pessoal ou sensível.',
      },
      {
        q: 'A qualidade muda ao converter HEIC para JPG?',
        a: 'Depende da qualidade escolhida, mas para compartilhamento, upload e compatibilidade o resultado costuma ser suficiente. Se quiser preservar mais detalhe, aumente a qualidade antes de baixar.',
      },
    ],
    'avif-to-jpg': [
      {
        q: 'Por que converter AVIF para JPG?',
        a: 'AVIF é eficiente, mas ainda encontra bloqueios em apps antigos, editores, sites e formulários de upload. JPG continua sendo o fallback mais previsível quando a prioridade é compatibilidade.',
      },
      {
        q: 'Por que alguns apps ainda não aceitam AVIF?',
        a: 'A adoção do AVIF ainda não é uniforme fora de navegadores modernos e software mais recente. Muitas ferramentas ainda esperam JPG ou PNG, por isso a conversão para JPG resolve o problema com menos atrito.',
      },
      {
        q: 'AVIF para JPG pode aumentar o tamanho do arquivo?',
        a: 'Pode. AVIF geralmente comprime melhor que JPG, então a troca para um formato mais compatível pode gerar um arquivo maior dependendo da imagem e da qualidade selecionada.',
      },
    ],
  },
  ar: {
    'jpg-to-png': [
      {
        q: 'هل التحويل من JPG إلى PNG يحسن الجودة؟',
        a: 'لا. التحويل لا يعيد التفاصيل التي فُقدت سابقًا بسبب ضغط JPG، لكنه يعطيك ملفًا أكثر استقرارًا إذا كنت تريد التعديل أو إعادة التصدير بدون فقد إضافي.',
      },
      {
        q: 'متى يكون PNG أفضل من JPG؟',
        a: 'اختر PNG عندما تكون أولوية العمل هي التعديل أو المراجعة أو نقل الملف بين أدوات تتوقع صيغة أكثر ثباتًا. إذا كانت الأولوية للحجم الصغير أو الرفع السريع، فغالبًا لا يكون PNG هو الأفضل.',
      },
      {
        q: 'لماذا يصبح الملف أكبر بعد التحويل إلى PNG؟',
        a: 'لأن PNG يركز على إخراج بدون فقدان واستقرار أعلى في سير العمل، بينما JPG أكثر كفاءة عادةً في تقليل الحجم. لذلك من الطبيعي أن يكبر الملف عند التحويل إلى PNG.',
      },
    ],
  },
};

export function getLocalizedToolFaqs(
  lang: Locale,
  slug: string,
  fallbackFaqs: ToolFaqItem[],
): ToolFaqItem[] {
  return TOOL_FAQ_OVERRIDES[lang]?.[slug] ?? fallbackFaqs;
}
