import type { PageTranslations } from '../config'

const pt: PageTranslations = {
  home: {
    title:
      'PicShift - Conversor de Imagens Gratuito | HEIC, WebP, PNG, JPG, AVIF | Sem Upload',
    description:
      'Converta imagens instantaneamente no seu navegador \u2014 sem upload. HEIC para JPG, WebP para PNG, AVIF e muito mais. 100% privado, funciona offline. Gratuito, sem limites, sem cadastro.',
  },
  privacy: {
    title: 'Pol\u00edtica de privacidade — Processamento local | PicShift',
    description:
      'Converter, comprimir, redimensionar ou tirar metadados acontece no seu aparelho: n\u00e3o subimos suas fotos para processar. Abaixo est\u00e1 o que o site registra de tr\u00e1fego.',
    sections: [
      {
        heading: 'Vers\u00e3o curta',
        content:
          'O PicShift roda o trabalho das imagens no seu pr\u00f3prio dispositivo. Convers\u00e3o, compress\u00e3o, mudan\u00e7a de tamanho, limpeza de metadados: nada disso vai para os nossos servidores. N\u00e3o precisa criar conta nem fazer login.',
      },
      {
        heading: 'O que acontece com as imagens',
        content:
          'Voc\u00ea escolhe o arquivo; o navegador l\u00ea na mem\u00f3ria, usa codecs e WebAssembly ali dentro e gera o resultado na hora para baixar. N\u00e3o existe o fluxo \u201cmanda pro servidor, processa l\u00e1, baixa de volta\u201d, ent\u00e3o a gente n\u00e3o guarda nem o original nem o arquivo final.',
      },
      {
        heading: 'O que n\u00e3o coletamos',
        content: 'N\u00e3o pegamos o conte\u00fado das suas imagens. Resumindo:',
        items: [
          'N\u00e3o enviamos imagens antes nem depois do processamento',
        ],
      },
      {
        heading: 'O que vemos',
        content:
          'Igual a qualquer site aberto na internet, aparecem registros de visita: URL da p\u00e1gina, de onde veio o clique, pa\u00eds ou regi\u00e3o aproximados, tipo de aparelho, navegador, se algu\u00e9m clicou em bot\u00e3o ou link interno. Isso ajuda a melhorar o produto: p\u00e1ginas que prestam, ferramentas que as pessoas levam at\u00e9 o fim, posts que puxam para a ferramenta, pontos fracos de idioma ou velocidade. O recado: nesses registros n\u00e3o entra a foto nem o arquivo de imagem.',
      },
      {
        heading: 'Anal\u00edtica e servi\u00e7os de terceiros',
        content:
          'Para o site abrir de forma est\u00e1vel e para enxergar como ele \u00e9 usado, usamos poucos servi\u00e7os de infraestrutura e estat\u00edstica:',
        items: [
          'Cloudflare: hospeda est\u00e1ticos, CDN, Cloudflare Web Analytics',
          'Umami: estat\u00edsticas web feitas para serem mais contidas com privacidade',
          'Eles lidam com dados t\u00edpicos de requisi\u00e7\u00f5es web; suas imagens, n\u00e3o',
          'Na configura\u00e7\u00e3o atual, tanto o Umami quanto o Cloudflare Web Analytics mant\u00eam dados de anal\u00edtica por seis meses',
        ],
      },
      {
        heading: 'Cookies e rastreamento',
        content:
          'Sem rede de an\u00fancio te rastreando entre sites. A anal\u00edtica \u00e9 enxuta: ver se a p\u00e1gina entrega, n\u00e3o montar perfil seu em outros dom\u00ednios. Foto para perfil n\u00e3o entra na conta: ela n\u00e3o chega para o processamento.',
      },
      {
        heading: 'Prefer\u00eancias locais no navegador',
        content:
          'Coisas como idioma, tema e qualidade padr\u00e3o podem ficar salvas no navegador para voc\u00ea n\u00e3o reconfigurar tudo de novo. S\u00f3 sai dali se voc\u00ea apagar.',
      },
      {
        heading: 'Seus direitos',
        content:
          'Dependendo da lei onde voc\u00ea mora, pode pedir acesso, corre\u00e7\u00e3o, exclus\u00e3o ou se opor a alguns usos de dados. O PicShift n\u00e3o tem cadastro: n\u00e3o recebemos dados que digam quem \u00e9 voc\u00ea. Mande um e-mail que a gente responde direto o que existe do nosso lado e o que n\u00e3o existe.',
      },
      {
        heading: 'Situa\u00e7\u00e3o do projeto',
        content:
          'Hoje o PicShift \u00e9 um projeto independente no picshift.app. Se mudar quem opera, a hospedagem ou a legisla\u00e7\u00e3o aplic\u00e1vel de um jeito que mexe de verdade na privacidade, atualizamos esta p\u00e1gina; n\u00e3o fazemos de conta que nada aconteceu.',
      },
      {
        heading: 'Mudan\u00e7as nesta pol\u00edtica',
        content:
          'Se este texto mudar, atualizamos a p\u00e1gina e a data de \u201c\u00daltima atualiza\u00e7\u00e3o\u201d. A promessa continua a mesma: imagens s\u00e3o processadas no seu dispositivo, n\u00e3o no nosso servidor.',
      },
      {
        heading: 'Contato',
        content:
          'Privacidade, corre\u00e7\u00f5es ou pedidos sobre dados: privacy@picshift.app.',
      },
    ],
    lastUpdated: '\u00daltima atualiza\u00e7\u00e3o: abril de 2026',
  },
  tools: {
    'heic-to-jpg': {
      title:
        'Conversor de HEIC para JPG - Abrir no Windows e enviar com mais facilidade | PicShift',
      description:
        'Converta HEIC para JPG no navegador quando uma foto do iPhone não abre no Windows, não sobe em um site ou precisa ficar mais compatível.',
      h1: 'Converter HEIC para JPG',
      introText:
        'Converta fotos HEIC do iPhone para JPG quando você precisa de um arquivo que abra com mais facilidade em apps antigos, sites, formulários de upload e PCs com Windows. Tudo acontece no seu navegador, sem enviar nada.',
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
          a: 'Porque JPG ainda é o formato mais aceito no dia a dia. Se a foto precisa abrir no Windows, entrar em um sistema antigo, ser enviada por e-mail ou subir em um site sem erro, JPG continua sendo a opção mais segura.',
        },
        {
          q: 'Como transformar HEIC em JPG para usar no Windows ou em sites?',
          a: 'Basta adicionar o arquivo HEIC, manter JPG como formato de saída e baixar a imagem convertida. Isso resolve a maioria dos casos em que o arquivo do iPhone não abre direito ou não é aceito no upload.',
        },
        {
          q: 'HEIC para JPG perde qualidade?',
          a: 'JPG usa compressão com perda, então não é a melhor opção para um fluxo de edição sem perdas. Mesmo assim, para compartilhar, enviar ou abrir em mais lugares, costuma ser a troca certa quando a compatibilidade vem em primeiro lugar.',
        },
        {
          q: '\u00c9 seguro converter minhas fotos aqui?',
          a: 'Sim. O PicShift processa tudo no seu navegador usando WebAssembly. Suas fotos nunca saem do seu dispositivo \u2014 nenhum arquivo \u00e9 enviado para qualquer servidor. Voc\u00ea pode verificar isso desconectando-se da internet e testando o conversor.',
        },
        {
          q: 'Quando vale a pena manter HEIC?',
          a: 'Vale manter HEIC se o seu fluxo já funciona bem no iPhone, no Mac ou em apps modernos e se você quer arquivos menores. Converta para JPG quando a foto precisar circular por sistemas mais antigos ou por sites que ainda não aceitam HEIC.',
        },
      ],
    },
    'heic-to-png': {
      title:
        'HEIC para PNG online — conversor em lote, sem upload | PicShift',
      description:
        'Converta fotos HEIC do iPhone para PNG (qualidade sem perda) para editar ou arquivar com mais margem. Até 200 arquivos no navegador — sem enviar nada a servidores.',
      h1: 'Converter HEIC para PNG',
      introText:
        'Converta fotos HEIC do iPhone para PNG quando você precisa de um arquivo sem perda para editar, anotar ou revisar. O PNG é maior que o JPG, mas mais estável para fluxos de trabalho que exigem qualidade intacta.',
      howToSteps: [
        'Arraste e solte seus arquivos HEIC na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para PNG sem perda instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Por que converter HEIC para PNG em vez de JPG?',
          a: 'Porque PNG não adiciona mais uma camada de compressão com perda. É melhor para edição, anotações, revisão de design ou quando você quer um arquivo estável que possa ser reexportado sem se degradar.',
        },
        {
          q: 'O arquivo PNG fica muito maior que o HEIC ou JPG?',
          a: 'Sim, bem maior na maioria das fotos. HEIC comprime muito bem e PNG guarda muito mais informação por pixel. O aumento de tamanho é normal quando você prioriza qualidade sem perda.',
        },
        {
          q: 'Quando é melhor converter para JPG?',
          a: 'Quando o objetivo é um arquivo leve para compartilhar, enviar ou subir, e você não precisa de transparência nem de edição posterior. JPG é mais prático no dia a dia; PNG é melhor para fluxos mais exigentes.',
        },
        {
          q: 'Como converter HEIC para PNG?',
          a: 'Adicione o arquivo HEIC, mantenha PNG como formato de saída e baixe a imagem. O PicShift faz tudo no navegador, sem enviar nada para nenhum servidor.',
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
    'heif-to-jpg': {
      title:
        'Conversor HEIF para JPG — Windows, upload, sem envio | PicShift',
      description:
        'Converta HEIF para JPG quando o arquivo precisa abrir no Windows, passar em formulário ou e-mail, ou rodar em programas que não entendem HEIF. Tudo no navegador, sem subir nada.',
      h1: 'Converter HEIF para JPG',
      introText:
        'Converta um arquivo HEIF para JPG quando você precisa de uma versão que abre sem travar no Windows, passa em um formulário de upload e chega até o outro lado sem dor de cabeça. O processamento acontece localmente no seu navegador, sem enviar o arquivo para um servidor.',
      howToSteps: [
        'Arraste e solte seus arquivos HEIF na área acima ou clique para escolher.',
        'Os arquivos são convertidos para JPG na hora, direto no seu navegador.',
        'Ajuste a qualidade se precisar e baixe um arquivo por vez ou tudo de uma vez.',
      ],
      faqs: [
        {
          q: 'Por que converter HEIF para JPG?',
          a: 'Porque JPG abre com muito menos dor de cabeça no Windows, anexa bem em e-mail, passa em formulários de upload e funciona com gente que não tem um ambiente compatível com HEIF.',
        },
        {
          q: 'HEIF e HEIC são a mesma coisa?',
          a: 'HEIF é a família de formatos; HEIC é a variante de foto HEIF mais conhecida nos dispositivos Apple. Na prática, os dois batem nos mesmos problemas de compatibilidade, e a conversão para JPG resolve nos dois casos.',
        },
        {
          q: 'Quando JPG é a saída mais segura?',
          a: 'Quando o arquivo vai para um PC com Windows, um formulário de upload, um atendimento, uma ferramenta de escritório ou alguém cujo ambiente você não controla. JPG continua sendo o formato que menos dá surpresa nesses cenários.',
        },
        {
          q: 'Converter HEIF para JPG perde qualidade?',
          a: 'Sim, JPG usa compressão com perda. Mas costuma ser o compromisso certo quando a compatibilidade importa mais do que preservar cada detalhe do arquivo original.',
        },
        {
          q: 'Quando vale a pena manter o HEIF em vez de converter?',
          a: 'Mantenha HEIF se todos os seus dispositivos e aplicativos já lidam bem com o formato e você quer aproveitar um arquivo mais leve. Converta para JPG assim que um upload, um envio ou um programa começar a travar.',
        },
      ],
    },
    'webp-to-jpg': {
      title:
        'Converter WebP para JPG online — em lote, sem upload | PicShift',
      description:
        'Transforme arquivos WebP em JPG quando um app, e-mail ou formulário não aceita o formato. Conversão em lote direto no navegador, sem enviar nada para servidor e sem cadastro.',
      h1: 'Converter WebP para JPG',
      introText:
        'Converta imagens WebP para JPG quando você precisa de um arquivo que abra, envie ou suba sem problema. JPG continua sendo a opção mais simples para apps antigos, clientes de e-mail, programas de escritório e formulários que ainda não reconhecem WebP.',
      howToSteps: [
        'Arraste e solte seus arquivos WebP na caixa acima ou clique para procurar.',
        'Deixe JPG como formato de saída — a conversão acontece na hora, no navegador.',
        'Clique em Baixar para salvar cada arquivo, ou em Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Como converter WebP para JPG?',
          a: 'Arraste o arquivo WebP, mantenha JPG como formato de saída e clique em Baixar. É a forma mais rápida de resolver quando uma plataforma não aceita WebP ou quando você precisa de uma versão mais compatível para enviar — tudo acontece no navegador, sem upload.',
        },
        {
          q: 'Como transformar um ficheiro WebP para JPG?',
          a: 'O processo é o mesmo: solta o ficheiro na caixa, deixa JPG como saída, clica em Baixar. Funciona em Windows, Mac, Linux e telemóvel — não precisas instalar nada nem criar conta. (Em pt-PT também serve para "transformar webp em jpg".)',
        },
        {
          q: 'Por que converter WebP para JPG?',
          a: 'WebP funciona muito bem no navegador, mas fora da web ainda falha em alguns aplicativos antigos, clientes de e-mail, ferramentas de escritório e formulários de upload. JPG continua sendo o formato mais fácil de usar no dia a dia, aceito basicamente em qualquer lugar.',
        },
        {
          q: 'Por que alguns sites ou apps não aceitam WebP?',
          a: 'Muitos sistemas mais antigos foram pensados só para JPG e PNG. Quando a validação do arquivo usa uma lista antiga de formatos, o WebP pode ser recusado mesmo funcionando bem no navegador. Converter para JPG resolve sem precisar mexer no software do outro lado.',
        },
        {
          q: 'A conversão de WebP para JPG perde qualidade?',
          a: 'WebP e JPG são formatos com perda, então sempre rola uma pequena recompressão. Com qualidade entre 85 e 90 a diferença na tela é praticamente imperceptível. Se for para impressão ou edição posterior, prefira <a href="/pt/webp-to-png">WebP para PNG</a>, que é sem perda.',
        },
        {
          q: 'O arquivo JPG pode ficar maior que o WebP original?',
          a: 'Pode acontecer. WebP é mais eficiente que JPG na compressão, então converter pode aumentar um pouco o peso final, especialmente em fotos de alta resolução. Se o tamanho importa, depois da conversão passe pelo nosso <a href="/pt/image-compressor">compressor de imagens</a> para reduzir.',
        },
        {
          q: 'Posso converter vários WebP de uma vez?',
          a: 'Sim. Arraste vários arquivos juntos — até centenas — e o PicShift processa em lote no navegador. Você baixa um por um ou tudo num ZIP. Como nada é enviado para servidor, não há fila nem espera.',
        },
        {
          q: 'Quando vale mais converter para PNG em vez de JPG?',
          a: 'Vale a pena PNG se a imagem tem transparência (logos, ícones) ou se você quer uma saída sem perda para editar depois. JPG é melhor quando a prioridade é abrir, enviar ou subir sem problema. Nesses casos use o <a href="/pt/webp-to-png">conversor de WebP para PNG</a>.',
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
        'Conversor PNG para JPG — lote, sem upload | PicShift',
      description:
        'PNG para JPG no navegador: reduza capturas de tela e PNGs grandes para e-mail ou formulários. Até 200 por lote, qualidade ajustável, local e sem upload.',
      h1: 'Converter PNG para JPG',
      introText:
        'Aquele print de 3 MB ou aquela exportação de design de 5 MB? Em JPG com qualidade 80-85, cai pra 500 KB sem diferença visível. A conversão acontece direto no navegador — o arquivo não sai do seu computador.',
      howToSteps: [
        'Arraste os PNGs pra cá ou clique pra selecionar.',
        'Ajuste a qualidade — entre 80 e 85 é o ponto ideal.',
        'Baixe os JPGs prontos.',
      ],
      faqs: [
        {
          q: 'E se a imagem tiver transparência?',
          a: 'O fundo transparente vira branco. JPG não tem suporte a transparência. Se você precisa manter, use PNG ou converta pra WebP.',
        },
        {
          q: 'Que qualidade eu devo usar?',
          a: 'Entre 80 e 85 funciona pra quase tudo — reduz 40-60% do tamanho sem diferença visível. Abaixo de 70 pode começar a aparecer serrilhado em detalhes finos.',
        },
        {
          q: 'Converter pra JPG estraga a imagem?',
          a: 'JPG descarta alguma informação, mas com qualidade 80+ a diferença é imperceptível em fotos e prints. Dá pra comparar antes de baixar.',
        },
        {
          q: 'Dá pra converter vários de uma vez?',
          a: 'Sim. Arraste até 200 arquivos de uma vez, todos são processados em lote.',
        },
        {
          q: 'JPG ou WebP — qual é melhor?',
          a: 'JPG abre em qualquer lugar — e-mail, formulários, apps antigos. WebP é 25-34% menor, mas nem todo contexto aceita. Se é pra compatibilidade, JPG. Se é pra web moderna, WebP.',
        },
      ],
    },
    'jpg-to-png': {
      title:
        'Converter JPG para PNG online — editar, anotar, sem upload | PicShift',
      description:
        'Converta JPG para PNG online quando você precisa editar, anotar ou reenviar sem adicionar mais perda. Em lote, no navegador e sem upload.',
      h1: 'Converter JPG para PNG',
      introText:
        'Use o conversor de JPG para PNG online quando você quer transformar JPG em PNG para edição, marcação, assinatura ou vários reexports sem nova compressão com perda. Isso não recupera o que já se perdeu no JPG original, mas evita degradar mais a cada salvamento.',
      howToSteps: [
        'Arraste e solte seus arquivos JPG na caixa acima ou clique para procurar.',
        'Os arquivos s\u00e3o convertidos para PNG instantaneamente no seu navegador.',
        'Clique em Baixar para salvar cada arquivo ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Como converter JPG para PNG online?',
          a: 'Arraste os arquivos JPG para a ferramenta, deixe PNG como saída e baixe. Tudo roda no navegador — até 200 arquivos por vez, sem upload.',
        },
        {
          q: 'Dá para converter várias fotos de uma vez?',
          a: 'Sim. Você pode processar até 200 imagens em lote. Para lotes muito grandes, se o navegador ficar lento, divida em duas levas e baixe entre uma e outra.',
        },
        {
          q: 'Converter JPG para PNG melhora a qualidade?',
          a: 'Não. A conversão não recupera qualidade já perdida na compressão JPG. Mas evita que salvar de novo degrade ainda mais a imagem, o que é útil quando você precisa editar ou anotar o arquivo.',
        },
        {
          q: 'Quando vale a pena converter JPG para PNG?',
          a: 'Quando você vai editar, assinar, anotar ou reexportar a imagem mais de uma vez. Nesses casos, PNG é mais estável do que continuar salvando o mesmo JPG repetidamente.',
        },
        {
          q: 'O arquivo PNG fica maior que o JPG?',
          a: 'Sim, na maioria dos casos fica bem maior. PNG guarda mais dados de imagem e comprime menos. Isso é normal quando o objetivo é estabilidade e não leveza.',
        },
        {
          q: 'Quando é melhor continuar em JPG?',
          a: 'Quando você só precisa de um arquivo leve para compartilhar, enviar ou subir, e não precisa de transparência nem de edição posterior. Se o objetivo é compatibilidade e peso baixo, JPG continua mais prático.',
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
      title:
        'Redimensionar imagem online — mudar tamanho e largura | PicShift',
      description:
        'Mudar tamanho da imagem ou redimensionar foto online com largura e altura exatas, ou usando presets rápidos. Ideal para site, formulário, e-commerce e redes sociais, sem upload.',
      h1: 'Redimensionar imagem online',
      introText:
        'Precisa redimensionar imagem ou mudar o tamanho de uma foto para site, formulário, e-commerce ou rede social? Escolha um preset ou defina largura e altura na mão. O processamento é 100% local — nada sai do seu computador.',
      howToSteps: [
        'Arraste as imagens pra cá ou clique pra selecionar.',
        'Escolha um preset ou digite as dimensões que precisa.',
        'Escolha o formato, ajuste a qualidade e baixe.',
      ],
      faqs: [
        {
          q: 'Como redimensionar imagem online grátis?',
          a: 'Arraste a imagem pra ferramenta, escolha um preset ou o modo Personalizado e baixe. Tudo roda no navegador, sem cadastro e sem upload.',
        },
        {
          q: 'Como mudar o tamanho de uma imagem em pixels?',
          a: 'No modo Personalizado, digite a largura e a altura desejadas em pixels (ou use uma porcentagem). PicShift recalcula a imagem com reamostragem de alta qualidade, sem deformar.',
        },
        {
          q: 'Como colocar largura e altura exatas?',
          a: 'Use o modo Personalizado e digite largura e altura em pixels. Se você só quer reduzir sem meta exata, os presets (Máx 1920px, 50% etc.) resolvem mais rápido.',
        },
        {
          q: 'Serve para Instagram, loja, formulário e rede social?',
          a: 'Serve. Você pode colocar 1080×1080 para Instagram, 1200×630 para Facebook, imagem de produto para marketplace ou qualquer medida exata que o site pedir.',
        },
        {
          q: 'Redimensionar perde qualidade?',
          a: 'Diminuir dimensões em si não estraga a imagem — a reamostragem é de alta qualidade. A perda visível normalmente vem da compressão, e isso você controla separado no slider de qualidade.',
        },
        {
          q: 'Dá pra redimensionar e mudar o formato junto?',
          a: 'Sim. Você pode mudar as dimensões e o formato (JPG, PNG, WebP, AVIF) de uma vez, no mesmo passo.',
        },
        {
          q: 'Meus arquivos são enviados pra algum lugar?',
          a: 'Não. Tudo roda no seu navegador. Pode até desligar a internet depois de abrir a página que a ferramenta continua funcionando.',
        },
      ],
    },
    'image-compressor': {
      title:
        'Comprimir imagens online — em lote, sem upload | PicShift',
      description:
        'Comprima JPG, PNG, WebP, HEIC e AVIF para reduzir o peso antes de e-mail, formulário ou upload. Até 200 imagens por lote, direto no navegador, sem mandar nada ao servidor.',
      h1: 'Comprimir Imagens',
      introText:
        'Reduza o peso das suas fotos sem perder nitidez visível — útil quando o e-mail trava no anexo, o site exige menos de 2 MB ou você só quer aliviar a pasta. Arraste vários arquivos juntos, ajuste a qualidade e compare antes/depois antes de baixar.',
      howToSteps: [
        'Arraste e solte suas imagens na caixa acima ou clique para procurar.',
        'Ajuste o controle de qualidade para controlar o nível de compressão.',
        'Clique em Baixar para salvar as imagens comprimidas, ou em Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Como comprimir uma imagem sem perder qualidade?',
          a: 'Arraste o arquivo, deixe a qualidade entre 80 e 85 e use a vista de comparação. Nessa faixa quase não dá para perceber diferença na tela, mas o arquivo costuma cair de 40% a 60% em relação ao original. Só abaixo de 70 começam a aparecer artefatos visíveis em céu, pele e gradientes.',
        },
        {
          q: 'Dá para comprimir várias imagens de uma vez?',
          a: 'Sim, até 200 arquivos por execução. Se o lote for muito grande e o navegador travar, processe em partes menores e baixe entre uma e outra. Como tudo é local, não tem fila de servidor.',
        },
        {
          q: 'Como comprimir foto para enviar por e-mail (Gmail, Outlook)?',
          a: 'O Gmail aceita até 25 MB por e-mail e o Outlook 20 MB, mas muitos provedores corporativos cortam em 10 MB. Comprimir com qualidade 80 já costuma ser suficiente para passar nesses limites sem mexer na resolução. Se ainda ficar grande, combine com redimensionar para 2000 px no lado maior.',
        },
        {
          q: 'Quanto consigo reduzir o tamanho?',
          a: 'Depende da imagem. Um JPG de celular cai entre 40% e 60% com qualidade 80; um PNG de captura de tela convertido em JPG perde de 70% a 80%. Imagens com poucas cores (logos, gráficos) reduzem menos — nesses casos PNG ou WebP funcionam melhor que JPG.',
        },
        {
          q: 'Quais formatos posso usar como compressor de imagens?',
          a: 'Entrada: JPG, PNG, WebP, HEIC e AVIF. Saída: JPG, PNG, WebP ou AVIF. Para web moderno, WebP em qualidade 80 costuma ser o melhor equilíbrio de peso e qualidade; para máxima compatibilidade (e-mail, Office, sistemas antigos) é melhor manter JPG.',
        },
        {
          q: 'Comprimir ou redimensionar — qual é melhor?',
          a: 'Se a imagem está enorme em pixels (uma foto de câmera 4000×3000 para usar num site, por exemplo), redimensionar reduz mais peso do que só comprimir. Se já está numa resolução razoável, comprimir basta. Na prática se faz os dois: redimensionar para 1920–2000 px no lado maior e depois comprimir em 80.',
        },
        {
          q: 'Minhas imagens são enviadas para um servidor?',
          a: 'Não. A compressão acontece dentro do seu navegador, com JavaScript e Canvas. Os arquivos não saem do seu dispositivo, não há upload, não fica nenhuma cópia no servidor e não precisa de cadastro.',
        },
      ],
    },
    'metadata-remover': {
      title: 'Remover metadados de imagem — EXIF, GPS, dados da câmera | PicShift',
      description:
        'Remova EXIF, localização GPS, modelo da câmera e outros metadados de imagens JPG, PNG, WebP, HEIC e AVIF. Processamento local no navegador, nenhum arquivo é enviado.',
      h1: 'Remover metadados de imagem',
      introText:
        'Remova os metadados ocultos das suas fotos antes de compartilhar. Fotos tiradas com celular ou câmera incluem por padrão coordenadas GPS, modelo do dispositivo, data e hora, e tags de software. Esta ferramenta remove tudo localmente no seu navegador — a imagem nunca sai do seu dispositivo.',
      howToSteps: [
        'Arraste e solte suas imagens na área acima ou clique para procurar.',
        'Os metadados são removidos instantaneamente no navegador — nada é enviado.',
        'Clique em Baixar para salvar as imagens limpas, ou Baixar tudo para obter um ZIP.',
      ],
      faqs: [
        {
          q: 'Quais metadados são removidos?',
          a: 'Todos os dados EXIF são removidos, incluindo coordenadas GPS, marca e modelo da câmera, informações da lente, data e hora, tags de software e miniaturas incorporadas. A imagem resultante não contém nenhum metadado.',
        },
        {
          q: 'Remover metadados afeta a qualidade da imagem?',
          a: 'Não. A remoção de metadados elimina apenas os dados não visuais incorporados no arquivo. O conteúdo em pixels da sua imagem permanece idêntico.',
        },
        {
          q: 'Por que devo remover metadados antes de compartilhar fotos?',
          a: 'Fotos tiradas com celulares e câmeras contêm dados ocultos como sua localização GPS exata, modelo do dispositivo e o horário em que a foto foi tirada. Remover os metadados protege sua privacidade ao compartilhar imagens em redes sociais ou com outras pessoas.',
        },
        {
          q: 'Por que o JPG limpo fica maior que o HEIC ou HEIF original?',
          a: 'HEIC e HEIF foram feitos para comprimir bastante, então o arquivo de origem costuma ser menor que um JPG típico. No navegador, o PicShift exporta HEIC/HEIF limpos como JPG porque ainda não há suporte confiável para baixar no mesmo formato. Um JPG maior é esperado e não significa que a limpeza falhou. JPG, PNG, WebP e AVIF continuam baixando no mesmo formato da entrada. Se o tamanho importa mais que a compatibilidade total, guarde os HEIC/HEIF originais quando der, ou use outro formato moderno que seu fluxo aceite (como AVIF) quando fizer sentido.',
        },
        {
          q: 'Quais formatos de imagem são suportados?',
          a: 'JPG, PNG, WebP, HEIC, HEIF e AVIF. JPG, PNG, WebP e AVIF baixam no mesmo formato; HEIC/HEIF limpos vêm como JPG.',
        },
      ],
      detailSections: [
        {
          title: 'Escopo e limites',
          body: 'Esta ferramenta remove os metadados embutidos no próprio arquivo. Ela não altera os pixels visíveis da imagem. Ou seja: ajuda a evitar vazamento de informação oculta, mas não apaga o que já aparece na tela.',
          items: [
            'Ela pode remover GPS, modelo do aparelho, horário de captura e tags de software, mas não apaga rostos, placas, marcas d’água nem textos que já estão visíveis na imagem.',
            'JPG, PNG, WebP e AVIF são baixados no mesmo formato. HEIC e HEIF limpos saem como JPG porque o navegador ainda não consegue gravar esses formatos de volta com confiança.',
            'Alguns apps e plataformas sociais removem parte dos metadados depois do upload, mas esse comportamento não é consistente e pode mudar. O mais seguro é limpar o arquivo você mesmo antes de usá-lo.',
          ],
        },
        {
          title: 'Como remover metadados de uma imagem',
          body: 'O fluxo é simples: primeiro confira o que o arquivo contém, depois limpe e, quando precisar, use a cópia limpa.',
          items: [
            'Arraste a imagem para a ferramenta e veja exatamente quais informações o arquivo traz.',
            'Se aparecerem apenas largura, altura ou espaço de cor, você verá 0 dados sensíveis. Se houver GPS, dados do aparelho ou horário, isso será marcado como sensível.',
            'Baixe o arquivo limpo e use essa versão quando for salvar, enviar, subir ou apenas guardar uma cópia.',
          ],
        },
      ],
    },
  },
}

export default pt
