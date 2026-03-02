import type { PageTranslations } from '../config'

const pt: PageTranslations = {
  home: {
    title:
      'PicShift - Conversor de Imagens Gratuito | HEIC, WebP, PNG, JPG, AVIF | Sem Upload',
    description:
      'Converta imagens instantaneamente no seu navegador \u2014 sem upload. HEIC para JPG, WebP para PNG, AVIF e muito mais. 100% privado, funciona offline. Gratuito, sem limites, sem cadastro.',
  },
  privacy: {
    title: 'Pol\u00edtica de Privacidade | PicShift',
    description:
      'Pol\u00edtica de privacidade do PicShift. Todo o processamento de imagens acontece no seu dispositivo. Nenhum arquivo \u00e9 enviado, nenhum dado pessoal \u00e9 coletado.',
    sections: [
      {
        heading: 'Resumindo',
        content:
          'Suas imagens ficam no seu dispositivo \u2014 sempre. O PicShift converte imagens diretamente no seu navegador. Nada \u00e9 enviado para a internet. N\u00f3s n\u00e3o vemos, n\u00e3o armazenamos e n\u00e3o temos acesso \u00e0s suas fotos.',
      },
      {
        heading: 'Como funciona',
        content:
          'Quando voc\u00ea converte uma imagem com o PicShift, tudo acontece no seu pr\u00f3prio dispositivo. Seus arquivos nunca s\u00e3o enviados para nenhum servidor. Voc\u00ea pode at\u00e9 desconectar da internet e o PicShift continuar\u00e1 funcionando perfeitamente \u2014 \u00e9 assim t\u00e3o local.',
      },
      {
        heading: 'O que registramos',
        content:
          'Contamos coisas b\u00e1sicas como quantas pessoas visitam o PicShift para podermos melhor\u00e1-lo. S\u00f3 isso:',
        items: [
          'N\u00e3o usamos cookies',
          'N\u00e3o sabemos quem voc\u00ea \u00e9',
          'N\u00e3o podemos ver quais imagens voc\u00ea converte',
          'N\u00e3o rastreamos voc\u00ea entre sites',
        ],
      },
      {
        heading: 'Seus dados',
        content:
          'Sem conta, sem cadastro, sem dados pessoais armazenados. Suas imagens convertidas existem apenas no seu dispositivo e desaparecem quando voc\u00ea fecha ou atualiza a p\u00e1gina. N\u00e3o temos banco de dados de usu\u00e1rios ou arquivos \u2014 porque n\u00e3o precisamos.',
      },
      {
        heading: 'Sem an\u00fancios, sem venda de dados',
        content:
          'O PicShift n\u00e3o tem an\u00fancios e n\u00e3o vende dados. Os \u00fanicos servi\u00e7os externos que usamos s\u00e3o:',
        items: [
          'Umami, uma ferramenta de an\u00e1lise de c\u00f3digo aberto \u2014 contagem an\u00f4nima de visitantes sem cookies ou rastreamento pessoal',
        ],
      },
      {
        heading: 'Altera\u00e7\u00f5es nesta pol\u00edtica',
        content:
          'Se atualizarmos esta pol\u00edtica, atualizaremos esta p\u00e1gina. Nossa promessa principal nunca mudar\u00e1: suas imagens ficam no seu dispositivo e nunca s\u00e3o enviadas.',
      },
      {
        heading: 'Contato',
        content: 'D\u00favidas? Escreva para privacy@picshift.app.',
      },
    ],
    lastUpdated: '\u00daltima atualiza\u00e7\u00e3o: fevereiro de 2026',
  },
  tools: {
    'heic-to-jpg': {
      title:
        'Conversor de HEIC para JPG - Gratuito, Privado, Sem Upload | PicShift',
      description:
        'Converta fotos HEIC para JPG instantaneamente no seu navegador. 100% privado \u2014 os arquivos nunca saem do seu dispositivo. Gratuito, sem limites, sem cadastro.',
      h1: 'Converter HEIC para JPG',
      introText:
        'Converta suas fotos HEIC do iPhone para o formato JPG instantaneamente. Tudo acontece no seu navegador \u2014 suas fotos nunca saem do seu dispositivo.',
      howToSteps: [
        'Arraste e solte seus arquivos HEIC na caixa acima ou clique para procurar.',
        'Suas fotos s\u00e3o convertidas instantaneamente no navegador \u2014 nada \u00e9 enviado.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'O que \u00e9 o formato HEIC?',
          a: 'HEIC (High Efficiency Image Container) \u00e9 o formato de foto padr\u00e3o nos iPhones desde o iOS 11. Ele produz arquivos menores que o JPG mantendo a mesma qualidade. No entanto, muitos aplicativos do Windows e sites n\u00e3o suportam o formato HEIC.',
        },
        {
          q: '\u00c9 seguro converter minhas fotos aqui?',
          a: 'Sim. O PicShift processa tudo no seu navegador usando WebAssembly. Suas fotos nunca saem do seu dispositivo \u2014 nenhum arquivo \u00e9 enviado para qualquer servidor. Voc\u00ea pode verificar isso desconectando-se da internet e testando o conversor.',
        },
        {
          q: 'Quantos arquivos posso converter de uma vez?',
          a: 'Voc\u00ea pode converter at\u00e9 200 arquivos de uma vez. Para melhor desempenho com grandes lotes, recomendamos 100 ou menos.',
        },
        {
          q: 'Vou perder qualidade de imagem?',
          a: 'A configura\u00e7\u00e3o de qualidade padr\u00e3o (85%) produz arquivos visualmente id\u00eanticos ao original. Voc\u00ea pode ajustar o controle de qualidade \u2014 valores mais altos significam melhor qualidade, mas arquivos maiores.',
        },
      ],
    },
    'heic-to-png': {
      title:
        'Conversor de HEIC para PNG - Gratuito, Privado, Sem Upload | PicShift',
      description:
        'Converta fotos HEIC para o formato PNG no seu navegador. Qualidade sem perda, 100% privado, sem necessidade de upload.',
      h1: 'Converter HEIC para PNG',
      introText:
        'Converta suas fotos HEIC do iPhone para o formato PNG sem perda de qualidade. Todo o processamento acontece localmente no seu navegador.',
      howToSteps: [
        'Arraste e solte seus arquivos HEIC na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para PNG sem perda instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Por que converter HEIC para PNG em vez de JPG?',
          a: 'PNG \u00e9 um formato sem perda, o que significa que nenhuma qualidade \u00e9 perdida durante a convers\u00e3o. Escolha PNG quando precisar de qualidade perfeita ou suporte a transpar\u00eancia. Escolha JPG para arquivos menores.',
        },
        {
          q: 'Os arquivos PNG s\u00e3o maiores que os JPG?',
          a: 'Sim, os arquivos PNG s\u00e3o tipicamente de 2 a 5 vezes maiores que os JPG porque o PNG \u00e9 um formato sem perda. Se o tamanho do arquivo importa mais que a qualidade perfeita, considere converter para JPG.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'Conversor de HEIC para WebP - Gratuito, Privado, Sem Upload | PicShift',
      description:
        'Converta fotos HEIC para o formato WebP no seu navegador. Arquivos menores, \u00f3tima qualidade, 100% privado.',
      h1: 'Converter HEIC para WebP',
      introText:
        'Converta suas fotos HEIC do iPhone para o moderno formato WebP. O WebP oferece arquivos de 25 a 34% menores que o JPG com a mesma qualidade.',
      howToSteps: [
        'Arraste e solte seus arquivos HEIC na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para WebP instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'O que \u00e9 WebP?',
          a: 'WebP \u00e9 um formato de imagem moderno desenvolvido pelo Google. Ele oferece arquivos de 25 a 34% menores em compara\u00e7\u00e3o com o JPG na mesma qualidade. O WebP \u00e9 suportado por todos os principais navegadores (96,5% de suporte global).',
        },
        {
          q: 'Quando devo usar WebP?',
          a: 'WebP \u00e9 ideal para uso na web \u2014 arquivos menores significam carregamento mais r\u00e1pido das p\u00e1ginas. Para compartilhamento por e-mail ou mensagens, o JPG \u00e9 mais universalmente compat\u00edvel.',
        },
      ],
    },
    'webp-to-jpg': {
      title:
        'Conversor de WebP para JPG - Gratuito, Privado, Sem Upload | PicShift',
      description:
        'Converta imagens WebP para o formato JPG no seu navegador. Gratuito, privado, sem necessidade de upload.',
      h1: 'Converter WebP para JPG',
      introText:
        'Converta imagens WebP para o formato JPG universalmente compat\u00edvel. Todo o processamento acontece localmente no seu navegador.',
      howToSteps: [
        'Arraste e solte seus arquivos WebP na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para JPG instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Por que converter WebP para JPG?',
          a: 'Embora o WebP seja amplamente suportado em navegadores, alguns aplicativos mais antigos, clientes de e-mail e plataformas de m\u00eddia social podem n\u00e3o aceitar WebP. O JPG \u00e9 o formato de imagem mais universalmente compat\u00edvel.',
        },
      ],
    },
    'webp-to-png': {
      title:
        'Conversor de WebP para PNG - Gratuito, Privado, Sem Upload | PicShift',
      description:
        'Converta imagens WebP para o formato PNG sem perda no seu navegador. Gratuito, privado, sem upload.',
      h1: 'Converter WebP para PNG',
      introText:
        'Converta imagens WebP para o formato PNG sem perda. Perfeito quando voc\u00ea precisa de transpar\u00eancia ou qualidade sem perda.',
      howToSteps: [
        'Arraste e solte seus arquivos WebP na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para PNG sem perda instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'A convers\u00e3o de WebP para PNG perde qualidade?',
          a: 'N\u00e3o. O PNG \u00e9 um formato sem perda, ent\u00e3o a convers\u00e3o preserva cada pixel da fonte WebP. O arquivo PNG resultante ser\u00e1 maior, mas id\u00eantico em qualidade.',
        },
      ],
    },
    'png-to-jpg': {
      title:
        'Conversor de PNG para JPG - Gratuito, Privado, Sem Upload | PicShift',
      description:
        'Converta imagens PNG para o formato JPG no seu navegador. Reduza o tamanho do arquivo mantendo \u00f3tima qualidade.',
      h1: 'Converter PNG para JPG',
      introText:
        'Converta imagens PNG para JPG para reduzir o tamanho do arquivo. \u00d3timo para fotos salvas como PNG que n\u00e3o precisam de transpar\u00eancia.',
      howToSteps: [
        'Arraste e solte seus arquivos PNG na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para JPG instantaneamente no seu navegador.',
        'Ajuste o controle de qualidade para equilibrar tamanho e qualidade.',
      ],
      faqs: [
        {
          q: 'Vou perder a transpar\u00eancia?',
          a: 'Sim. O JPG n\u00e3o suporta transpar\u00eancia. Quaisquer \u00e1reas transparentes no seu PNG se tornar\u00e3o brancas. Se voc\u00ea precisa de transpar\u00eancia, mantenha sua imagem como PNG ou converta para WebP.',
        },
      ],
    },
    'jpg-to-png': {
      title:
        'Conversor de JPG para PNG - Gratuito, Privado, Sem Upload | PicShift',
      description:
        'Converta imagens JPG para o formato PNG sem perda no seu navegador. Gratuito, privado, sem upload.',
      h1: 'Converter JPG para PNG',
      introText:
        'Converta imagens JPG para o formato PNG sem perda. \u00datil quando voc\u00ea precisa de uma vers\u00e3o sem perda para edi\u00e7\u00e3o.',
      howToSteps: [
        'Arraste e solte seus arquivos JPG na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para PNG instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Converter JPG para PNG melhora a qualidade?',
          a: 'N\u00e3o. Converter de JPG para PNG n\u00e3o restaura a qualidade perdida durante a compress\u00e3o JPG. No entanto, converter para PNG evita mais perdas de qualidade se voc\u00ea precisar editar e salvar a imagem novamente.',
        },
      ],
    },
    'jpg-to-webp': {
      title:
        'Conversor de JPG para WebP - Gratuito, Privado, Sem Upload | PicShift',
      description:
        'Converta imagens JPG para o formato WebP no seu navegador. Arquivos menores, mesma qualidade, 100% privado.',
      h1: 'Converter JPG para WebP',
      introText:
        'Converta imagens JPG para o moderno formato WebP para arquivos de 25 a 34% menores com a mesma qualidade visual.',
      howToSteps: [
        'Arraste e solte seus arquivos JPG na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para WebP instantaneamente no seu navegador.',
        'Ajuste o controle de qualidade para equilibrar tamanho e qualidade.',
      ],
      faqs: [
        {
          q: 'Quanto menor \u00e9 o WebP comparado ao JPG?',
          a: 'O WebP \u00e9 tipicamente de 25 a 34% menor que o JPG na mesma qualidade visual. Um JPG de 1 MB pode se tornar 650-750 KB como WebP sem diferen\u00e7a vis\u00edvel.',
        },
      ],
    },
    'avif-to-jpg': {
      title:
        'Conversor de AVIF para JPG - Gratuito, Privado, Sem Upload | PicShift',
      description:
        'Converta imagens AVIF para o formato JPG no seu navegador. Gratuito, privado, sem necessidade de upload.',
      h1: 'Converter AVIF para JPG',
      introText:
        'Converta imagens AVIF para o formato JPG universalmente compat\u00edvel. Todo o processamento acontece localmente.',
      howToSteps: [
        'Arraste e solte seus arquivos AVIF na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para JPG instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'O que \u00e9 AVIF?',
          a: 'AVIF \u00e9 um formato de imagem de nova gera\u00e7\u00e3o baseado no codec de v\u00eddeo AV1. Ele oferece melhor compress\u00e3o do que JPG e WebP, mas o suporte ainda est\u00e1 crescendo.',
        },
      ],
    },
    'avif-to-png': {
      title:
        'Conversor de AVIF para PNG - Gratuito, Privado, Sem Upload | PicShift',
      description:
        'Converta imagens AVIF para o formato PNG sem perda no seu navegador. Gratuito, privado, sem upload.',
      h1: 'Converter AVIF para PNG',
      introText:
        'Converta imagens AVIF para o formato PNG sem perda. Perfeito para preservar a m\u00e1xima qualidade.',
      howToSteps: [
        'Arraste e solte seus arquivos AVIF na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para PNG sem perda instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Por que converter AVIF para PNG?',
          a: 'O AVIF tem suporte limitado em alguns aplicativos. Converter para PNG oferece um formato universalmente compat\u00edvel e sem perda que funciona em qualquer lugar.',
        },
      ],
    },
    'image-resizer': {
      title: 'Redimensionar Imagens - Gratuito e Privado | PicShift',
      description: 'Redimensione imagens no seu navegador. Tamanhos predefinidos ou dimensões personalizadas. 100% privado, sem upload.',
      h1: 'Redimensionar Imagens',
      introText: 'Redimensione suas imagens para dimensões exatas ou presets comuns. Tudo acontece no seu navegador — suas imagens nunca saem do seu dispositivo.',
      howToSteps: [
        'Arraste suas imagens para a área acima, ou clique para procurar.',
        'Escolha um tamanho predefinido ou insira dimensões personalizadas.',
        'Escolha o formato de saída e a qualidade, depois baixe.',
      ],
      faqs: [
        { q: 'Quais presets de tamanho estão disponíveis?', a: 'O PicShift oferece Máx 1920px (lado longo), Máx 1080px, escala 50% e um modo Personalizado para dimensões exatas em pixels ou porcentagem.' },
        { q: 'Redimensionar reduz a qualidade da imagem?', a: 'A redução de escala usa reamostragem de alta qualidade. Você também pode ajustar o controle de qualidade para controlar a compressão.' },
        { q: 'Posso redimensionar e converter o formato ao mesmo tempo?', a: 'Sim. Você pode alterar o formato de saída (JPG, PNG, WebP, AVIF) e as dimensões em uma única etapa.' },
      ],
    },
    'image-compressor': {
      title:
        'Compressor de Imagens - Reduza o Tamanho Online, Gratuito e Privado | PicShift',
      description:
        'Comprima imagens no seu navegador. Reduza o tamanho de arquivos JPG, PNG e WebP mantendo \u00f3tima qualidade. 100% privado, sem upload.',
      h1: 'Comprimir Imagens',
      introText:
        'Reduza o tamanho dos arquivos de imagem mantendo a qualidade visual. Arraste o controle de qualidade para encontrar o equil\u00edbrio perfeito.',
      howToSteps: [
        'Arraste e solte suas imagens na caixa acima ou clique para procurar.',
        'Ajuste o controle de qualidade para controlar o n\u00edvel de compress\u00e3o.',
        'Clique em Baixar para salvar as imagens comprimidas.',
      ],
      faqs: [
        {
          q: 'Quanto posso comprimir minhas imagens?',
          a: 'Depende da imagem de origem. Uma configura\u00e7\u00e3o de qualidade de 80% tipicamente reduz o tamanho dos arquivos JPG de 40 a 60% com diferen\u00e7a vis\u00edvel m\u00ednima. Use a visualiza\u00e7\u00e3o de compara\u00e7\u00e3o para verificar a qualidade antes de baixar.',
        },
        {
          q: 'Quais formatos posso comprimir?',
          a: 'Voc\u00ea pode comprimir imagens JPG, PNG, WebP, HEIC e AVIF. O formato de sa\u00edda pode ser JPG, PNG, WebP ou AVIF.',
        },
      ],
    },
  },
}

export default pt
