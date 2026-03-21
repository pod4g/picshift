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
        'Conversor de HEIC para JPG - Abrir no Windows e enviar com mais facilidade | PicShift',
      description:
        'Converta HEIC para JPG no navegador quando uma foto do iPhone nao abre no Windows, nao sobe em um site ou precisa ficar mais compativel.',
      h1: 'Converter HEIC para JPG',
      introText:
        'Converta fotos HEIC do iPhone para JPG quando voce precisa de um arquivo que abra com mais facilidade em apps antigos, sites, formularios de upload e PCs com Windows. Tudo acontece no seu navegador, sem enviar nada.',
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
          q: 'Por que converter HEIC para JPG?',
          a: 'Porque JPG ainda e o formato mais aceito no dia a dia. Se a foto precisa abrir no Windows, entrar em um sistema antigo, ser enviada por e-mail ou subir em um site sem erro, JPG continua sendo a opcao mais segura.',
        },
        {
          q: 'Como transformar HEIC em JPG para usar no Windows ou em sites?',
          a: 'Basta adicionar o arquivo HEIC, manter JPG como formato de saida e baixar a imagem convertida. Isso resolve a maioria dos casos em que o arquivo do iPhone nao abre direito ou nao e aceito no upload.',
        },
        {
          q: 'HEIC para JPG perde qualidade?',
          a: 'JPG usa compressao com perda, entao nao e a melhor opcao para um fluxo de edicao sem perdas. Mesmo assim, para compartilhar, enviar ou abrir em mais lugares, costuma ser a troca certa quando a compatibilidade vem em primeiro lugar.',
        },
        {
          q: '\u00c9 seguro converter minhas fotos aqui?',
          a: 'Sim. O PicShift processa tudo no seu navegador usando WebAssembly. Suas fotos nunca saem do seu dispositivo \u2014 nenhum arquivo \u00e9 enviado para qualquer servidor. Voc\u00ea pode verificar isso desconectando-se da internet e testando o conversor.',
        },
        {
          q: 'Quando vale a pena manter HEIC?',
          a: 'Vale manter HEIC se o seu fluxo ja funciona bem no iPhone, no Mac ou em apps modernos e se voce quer arquivos menores. Converta para JPG quando a foto precisar circular por sistemas mais antigos ou por sites que ainda nao aceitam HEIC.',
        },
      ],
    },
    'heic-to-png': {
      title:
        'Conversor de HEIC para PNG - Qualidade sem perda | PicShift',
      description:
        'Converta HEIC para PNG quando voce precisa de qualidade sem perda para edicao, revisao ou um arquivo mais facil de reutilizar em ferramentas graficas.',
      h1: 'Converter HEIC para PNG',
      introText:
        'Converta fotos HEIC do iPhone para PNG quando voce precisa de um arquivo sem perda para editar, anotar ou revisar. O PNG e maior que o JPG, mas mais estavel para fluxos de trabalho que exigem qualidade intacta.',
      howToSteps: [
        'Arraste e solte seus arquivos HEIC na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para PNG sem perda instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Por que converter HEIC para PNG em vez de JPG?',
          a: 'Porque PNG nao adiciona mais uma camada de compressao com perda. E melhor para edicao, anotacoes, revisao de design ou quando voce quer um arquivo estavel que possa ser reexportado sem se degradar.',
        },
        {
          q: 'O arquivo PNG fica muito maior que o HEIC ou JPG?',
          a: 'Sim, bem maior na maioria das fotos. HEIC comprime muito bem e PNG guarda muito mais informacao por pixel. O aumento de tamanho e normal quando voce prioriza qualidade sem perda.',
        },
        {
          q: 'Quando e melhor converter para JPG?',
          a: 'Quando o objetivo e um arquivo leve para compartilhar, enviar ou subir, e voce nao precisa de transparencia nem de edicao posterior. JPG e mais pratico no dia a dia; PNG e melhor para fluxos mais exigentes.',
        },
        {
          q: 'Como converter HEIC para PNG?',
          a: 'Adicione o arquivo HEIC, mantenha PNG como formato de saida e baixe a imagem. O PicShift faz tudo no navegador, sem enviar nada para nenhum servidor.',
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
        'Conversor de WebP para JPG - Mais compativel para abrir e enviar | PicShift',
      description:
        'Converta WebP para JPG quando um app, site ou formulario nao aceita bem o formato WebP.',
      h1: 'Converter WebP para JPG',
      introText:
        'Converta imagens WebP para JPG quando voce precisa de um arquivo que abra, envie ou suba com menos problema. JPG continua sendo a opcao mais facil para muitos apps antigos, clientes de e-mail e sistemas de upload.',
      howToSteps: [
        'Arraste e solte seus arquivos WebP na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para JPG instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Por que converter WebP para JPG?',
          a: 'WebP funciona muito bem no navegador, mas fora da web ainda falha em alguns aplicativos antigos, clientes de e-mail, ferramentas de escritorio e formul\u00e1rios de upload. JPG continua sendo o formato mais facil de usar no dia a dia.',
        },
        {
          q: 'Como converter WebP para JPG?',
          a: 'Adicione o arquivo WebP, mantenha JPG como formato de saida e baixe a imagem convertida. E a forma mais rapida de resolver casos em que uma plataforma nao aceita WebP.',
        },
        {
          q: 'Por que alguns sites ou apps nao aceitam WebP?',
          a: 'Muitos sistemas mais antigos ainda foram pensados para JPG e PNG. Quando a validacao de arquivo usa uma lista antiga de formatos, o WebP pode ser recusado mesmo funcionando bem no navegador.',
        },
        {
          q: 'O arquivo JPG pode ficar maior?',
          a: 'Pode sim. WebP costuma ser mais eficiente que JPG, entao converter para ganhar compatibilidade pode gerar um arquivo um pouco maior dependendo da imagem e da qualidade escolhida.',
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
        'Conversor de JPG para PNG - Sem perda, gratuito | PicShift',
      description:
        'Converta JPG para PNG quando voce precisa de um arquivo mais estavel para edicao, anotacoes ou reexportacao sem perda adicional.',
      h1: 'Converter JPG para PNG',
      introText:
        'Converta um JPG para PNG quando voce quer um arquivo que aguente melhor edicao, anotacoes ou varios re-exports. Isso nao melhora a qualidade original, mas evita que o proximo salvamento degrade ainda mais a imagem.',
      howToSteps: [
        'Arraste e solte seus arquivos JPG na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para PNG instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Converter JPG para PNG melhora a qualidade?',
          a: 'Nao. A conversao nao recupera qualidade ja perdida na compressao JPG. Mas evita que salvar de novo degrade ainda mais a imagem, o que e util quando voce precisa editar ou anotar o arquivo.',
        },
        {
          q: 'Por que converter JPG para PNG?',
          a: 'Normalmente para poder editar a imagem com mais seguranca, adicionar anotacoes ou reexportar sem perder mais qualidade a cada salvamento. PNG tambem e necessario quando voce precisa de transparencia.',
        },
        {
          q: 'O arquivo PNG fica maior que o JPG?',
          a: 'Sim, na maioria dos casos fica bem maior. PNG guarda mais dados de imagem e comprime menos. Isso e normal quando o objetivo e estabilidade e nao leveza.',
        },
        {
          q: 'Quando e melhor ficar com JPG?',
          a: 'Quando voce so precisa de um arquivo leve para compartilhar, enviar ou subir, e nao precisa de transparencia nem de edicao posterior.',
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
          a: 'O WebP \u00e9 de 25 a 34% menor que o JPG na mesma qualidade visual em compara\u00e7\u00f5es de refer\u00eancia. Um JPG de 1 MB se converte em 650-750 KB como WebP sem diferen\u00e7a vis\u00edvel.',
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
          a: 'O resultado da compress\u00e3o depende da imagem de origem. Uma configura\u00e7\u00e3o de qualidade de 80% reduz o tamanho dos arquivos JPG de 40 a 60% em compara\u00e7\u00f5es de refer\u00eancia, com diferen\u00e7a vis\u00edvel m\u00ednima. Use a visualiza\u00e7\u00e3o de compara\u00e7\u00e3o para verificar a qualidade antes de baixar.',
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
