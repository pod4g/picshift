import type { PageTranslations } from '../config'

const it: PageTranslations = {
  home: {
    title:
      'PicShift - Convertitore di Immagini Gratuito | HEIC, WebP, PNG, JPG, AVIF | Nessun Upload',
    description:
      'Converti le immagini istantaneamente nel tuo browser — senza caricare file. Da HEIC a JPG, da WebP a PNG, AVIF e molto altro. 100% privato, funziona offline. Gratuito, senza limiti, senza registrazione.',
  },
  privacy: {
    title: 'Informativa sulla privacy | PicShift',
    description:
      'Come la pensiamo su PicShift: convertire, comprimere, ridimensionare o togliere metadati avviene sul tuo dispositivo; non carichiamo le foto per elaborarle. Qui diciamo anche che cosa resta nei log del sito e che cosa non ci arriva proprio.',
    sections: [
      {
        heading: 'Versione breve',
        content:
          'PicShift lavora le immagini in locale, sul tuo dispositivo. Conversione, compressione, ridimensionamento, pulizia metadati: niente viene spedito ai nostri server. Account e login non servono.',
      },
      {
        heading: 'Cosa succede alle immagini',
        content:
          "Scegli un file: il browser lo legge in memoria, usa codec e moduli WebAssembly e crea il risultato lì, pronto per il download. Non c'è il giro «carico sul server, elaboro, riscarico», quindi non archiviamo né originale né file finale.",
      },
      {
        heading: 'Cosa non raccogliamo',
        content: 'Non prendiamo il contenuto delle tue immagini. In sintesi:',
        items: [
          'Non carichiamo immagini né prima né dopo l\'elaborazione',
        ],
      },
      {
        heading: 'Cosa vediamo',
        content:
          'Come qualsiasi sito pubblico, abbiamo tracce di visita: URL, referrer, paese o zona indicativi, tipo di dispositivo, browser, click su pulsanti o link interni. Ci serve per migliorare il prodotto: pagine utili, strumenti che la gente porta a termine, articoli che portano dentro l\'app, punti dove manca localizzazione o velocità. Da tenere a mente: in queste tracce non c\'è la tua immagine.',
      },
      {
        heading: 'Analitica e servizi di terze parti',
        content:
          'Per far stare in piedi il sito e capire come viene usato ci appoggiamo a pochi fornitori (infrastruttura e statistiche):',
        items: [
          'Cloudflare: file statici, CDN, Cloudflare Web Analytics',
          'Umami: statistiche web pensate per non esagerare con la privacy',
          'Gestiscono dati tipici delle richieste web; le tue immagini no',
          'Con la configurazione attuale, sia Umami sia Cloudflare Web Analytics conservano i dati di analitica per sei mesi',
        ],
      },
      {
        heading: 'Cookie e tracciamento',
        content:
          'Niente reti pubblicitarie, niente script che ti seguono tra un sito e l\'altro. L\'analitica è volutamente leggera: capire se il sito regge, non costruirti un profilo altrove. Le foto non possono finire in un profilo: non ci arrivano per l\'elaborazione.',
      },
      {
        heading: 'Preferenze locali nel browser',
        content:
          'PicShift può tenere nel browser piccole scelte d\'interfaccia — lingua, tema, qualità predefinita — così non riconfiguri tutto ogni volta. Restano lì finché non le cancelli tu.',
      },
      {
        heading: 'I tuoi diritti',
        content:
          'A seconda del paese, puoi avere diritto di accesso, rettifica, cancellazione o opposizione. PicShift non ha account utente: non riceviamo dati che ci dicano chi sei. Scrivici e ti diciamo chiaramente cosa c\'è da noi e cosa no.',
      },
      {
        heading: 'Stato del progetto',
        content:
          'PicShift è oggi un progetto indipendente su picshift.app. Se cambiano gestione, hosting o quadro legale in modo che la privacy ne risenta sul serio, aggiorniamo questa pagina invece di far finta di niente.',
      },
      {
        heading: 'Modifiche a questa informativa',
        content:
          'Se modifichiamo il testo, aggiorniamo pagina e data «Ultimo aggiornamento». La promessa resta una: le immagini si elaborano sul tuo dispositivo, non sul nostro server.',
      },
      {
        heading: 'Contatti',
        content:
          'Privacy, correzioni o richieste sui dati: privacy@picshift.app.',
      },
    ],
    lastUpdated: 'Ultimo aggiornamento: aprile 2026',
  },
  tools: {
    'heic-to-jpg': {
      title:
        'Convertitore da HEIC a JPG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti le foto HEIC in JPG istantaneamente nel tuo browser. 100% privato: i file non lasciano mai il tuo dispositivo. Gratuito, senza limiti, senza registrazione.',
      h1: 'Converti HEIC in JPG',
      introText:
        "Converti le tue foto HEIC dell'iPhone in formato JPG istantaneamente. Tutto avviene nel tuo browser: le tue foto non lasciano mai il tuo dispositivo.",
      howToSteps: [
        'Trascina i tuoi file HEIC nel riquadro sopra oppure clicca per sfogliare.',
        'Le tue foto vengono convertite istantaneamente nel browser: nulla viene caricato.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: "Cos'\u00e8 il formato HEIC?",
          a: 'HEIC (High Efficiency Image Container) \u00e8 il formato foto predefinito sugli iPhone a partire da iOS 11. Produce file pi\u00f9 piccoli rispetto al JPG mantenendo la stessa qualit\u00e0. Tuttavia, molte applicazioni Windows e siti web non supportano il formato HEIC.',
        },
        {
          q: '\u00c8 sicuro convertire le mie foto qui?',
          a: 'S\u00ec. PicShift elabora tutto nel tuo browser utilizzando WebAssembly. Le tue foto non lasciano mai il tuo dispositivo: nessun file viene caricato su alcun server. Puoi verificarlo disconnettendoti da internet e provando il convertitore.',
        },
        {
          q: 'Quanti file posso convertire alla volta?',
          a: 'Puoi convertire fino a 200 file alla volta. Per le migliori prestazioni con grandi lotti, raccomandiamo 100 o meno.',
        },
        {
          q: "Perder\u00f2 qualit\u00e0 dell'immagine?",
          a: "L'impostazione di qualit\u00e0 predefinita (85%) produce file visivamente identici all'originale. Puoi regolare il cursore della qualit\u00e0: valori pi\u00f9 alti significano migliore qualit\u00e0 ma file pi\u00f9 grandi.",
        },
      ],
    },
    'heic-to-png': {
      title:
        'Convertitore da HEIC a PNG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti le foto HEIC in formato PNG nel tuo browser. Qualit\u00e0 senza perdita, 100% privato, nessun upload necessario.',
      h1: 'Converti HEIC in PNG',
      introText:
        "Converti le tue foto HEIC dell'iPhone in formato PNG senza perdita di qualit\u00e0. Tutta l'elaborazione avviene localmente nel tuo browser.",
      howToSteps: [
        'Trascina i tuoi file HEIC nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in PNG senza perdita istantaneamente nel tuo browser.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: 'Perch\u00e9 convertire HEIC in PNG invece di JPG?',
          a: 'PNG \u00e8 un formato senza perdita, il che significa che nessuna qualit\u00e0 viene persa durante la conversione. Scegli PNG quando hai bisogno di qualit\u00e0 perfetta o supporto per la trasparenza. Scegli JPG per file di dimensioni ridotte.',
        },
        {
          q: 'I file PNG sono pi\u00f9 grandi dei JPG?',
          a: 'S\u00ec, nei flussi fotografici standard i file PNG sono 2-5 volte pi\u00f9 grandi dei JPG perch\u00e9 PNG \u00e8 un formato senza perdita. Se la dimensione del file conta pi\u00f9 della qualit\u00e0 perfetta, converti in JPG.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'Convertitore da HEIC a WebP - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti le foto HEIC in formato WebP nel tuo browser. File pi\u00f9 piccoli, ottima qualit\u00e0, 100% privato.',
      h1: 'Converti HEIC in WebP',
      introText:
        "Converti le tue foto HEIC dell'iPhone nel moderno formato WebP. WebP offre file dal 25 al 34% pi\u00f9 piccoli rispetto al JPG a parit\u00e0 di qualit\u00e0.",
      howToSteps: [
        'Trascina i tuoi file HEIC nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in WebP istantaneamente nel tuo browser.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: "Cos'\u00e8 WebP?",
          a: 'WebP \u00e8 un formato immagine moderno sviluppato da Google. Offre file dal 25 al 34% pi\u00f9 piccoli rispetto al JPG a parit\u00e0 di qualit\u00e0. WebP \u00e8 supportato da tutti i principali browser (96,5% di supporto globale).',
        },
        {
          q: 'Quando dovrei usare WebP?',
          a: 'WebP \u00e8 ideale per il web: file pi\u00f9 piccoli significano caricamenti pi\u00f9 veloci delle pagine. Per la condivisione tramite email o messaggistica, JPG \u00e8 pi\u00f9 universalmente compatibile.',
        },
      ],
    },
    'heif-to-jpg': {
      title:
        'Convertitore HEIF in JPG — Windows, upload, senza invio | PicShift',
      description:
        "Converti HEIF in JPG per Windows, moduli di upload, email e programmi che non aprono bene il formato HEIF. Tutto resta locale nel tuo browser, senza caricare file.",
      h1: 'Convertire HEIF in JPG',
      introText:
        "Converti un file HEIF in JPG quando ti serve una versione che si apre senza attriti in Windows, passa in un modulo di upload o arriva ai colleghi senza problemi. L'elaborazione avviene localmente nel tuo browser, senza inviare il file a un server.",
      howToSteps: [
        'Trascina i tuoi file HEIF nel riquadro sopra, oppure clicca per sceglierli.',
        'I file vengono convertiti in JPG istantaneamente nel tuo browser.',
        'Regola la qualità se serve e scarica ogni file o tutto il lotto in un colpo solo.',
      ],
      faqs: [
        {
          q: 'Perché convertire HEIF in JPG?',
          a: "Perché JPG si apre molto più facilmente in Windows, si allega alle email, passa nei moduli di upload e si condivide con persone che non hanno un ambiente compatibile con HEIF.",
        },
        {
          q: 'HEIF e HEIC sono la stessa cosa?',
          a: 'HEIF è la famiglia di formati, mentre HEIC è la variante di foto HEIF più conosciuta sui dispositivi Apple. In pratica gli stessi problemi di compatibilità si ripresentano su entrambi, e la conversione in JPG li risolve allo stesso modo.',
        },
        {
          q: 'Quando JPG è la scelta più sicura?',
          a: "Quando il file va verso un PC Windows, un modulo di upload, un servizio clienti, uno strumento office o un collega di cui non controlli l'ambiente. JPG resta il formato con meno sorprese in questi contesti.",
        },
        {
          q: 'La conversione HEIF → JPG fa perdere qualità?',
          a: 'Sì, JPG è un formato con compressione a perdita. Spesso però è il compromesso giusto quando la compatibilità conta più della conservazione perfetta di ogni dato del file originale.',
        },
        {
          q: 'Quando conviene tenere HEIF invece di convertirlo?',
          a: 'Tieni HEIF se tutti i tuoi dispositivi e le tue applicazioni lo gestiscono già bene e vuoi approfittare di un file più leggero. Converti in JPG non appena un upload, una condivisione o un programma iniziano a creare problemi.',
        },
      ],
    },
    'webp-to-jpg': {
      title:
        'Convertitore da WebP a JPG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti le immagini WebP in formato JPG nel tuo browser. Gratuito, privato, nessun upload necessario.',
      h1: 'Converti WebP in JPG',
      introText:
        "Converti le immagini WebP nel formato JPG universalmente compatibile. Tutta l'elaborazione avviene localmente nel tuo browser.",
      howToSteps: [
        'Trascina i tuoi file WebP nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in JPG istantaneamente nel tuo browser.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: 'Perch\u00e9 convertire WebP in JPG?',
          a: 'WebP \u00e8 ampiamente supportato nei browser, e alcune applicazioni meno recenti, client di posta elettronica e piattaforme di social media non accettano WebP. JPG \u00e8 il formato immagine pi\u00f9 universalmente compatibile.',
        },
      ],
    },
    'webp-to-png': {
      title:
        'Convertitore da WebP a PNG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti le immagini WebP in formato PNG senza perdita nel tuo browser. Gratuito, privato, nessun upload.',
      h1: 'Converti WebP in PNG',
      introText:
        'Converti le immagini WebP in formato PNG senza perdita. Perfetto quando hai bisogno di trasparenza o qualit\u00e0 senza perdita.',
      howToSteps: [
        'Trascina i tuoi file WebP nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in PNG senza perdita istantaneamente nel tuo browser.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: 'La conversione da WebP a PNG comporta perdita di qualit\u00e0?',
          a: 'No. PNG \u00e8 un formato senza perdita, quindi la conversione preserva ogni pixel dalla sorgente WebP. Il file PNG risultante sar\u00e0 pi\u00f9 grande ma identico in qualit\u00e0.',
        },
      ],
    },
    'png-to-jpg': {
      title:
        'Convertitore da PNG a JPG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        "Converti le immagini PNG in formato JPG nel tuo browser. Riduci la dimensione del file mantenendo un'ottima qualit\u00e0.",
      h1: 'Converti PNG in JPG',
      introText:
        'Converti le immagini PNG in JPG per ridurre la dimensione del file. Ideale per le foto salvate come PNG che non necessitano di trasparenza.',
      howToSteps: [
        'Trascina i tuoi file PNG nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in JPG istantaneamente nel tuo browser.',
        'Regola il cursore della qualit\u00e0 per bilanciare dimensione e qualit\u00e0.',
      ],
      faqs: [
        {
          q: 'Perder\u00f2 la trasparenza?',
          a: "S\u00ec. JPG non supporta la trasparenza. Le aree trasparenti nel tuo PNG diventeranno bianche. Se hai bisogno della trasparenza, mantieni l'immagine in formato PNG o convertila in WebP.",
        },
      ],
    },
    'jpg-to-png': {
      title:
        'Convertitore da JPG a PNG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti le immagini JPG in formato PNG senza perdita nel tuo browser. Gratuito, privato, nessun upload.',
      h1: 'Converti JPG in PNG',
      introText:
        'Converti le immagini JPG in formato PNG senza perdita. Utile quando hai bisogno di una versione senza perdita per la modifica.',
      howToSteps: [
        'Trascina i tuoi file JPG nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in PNG istantaneamente nel tuo browser.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: 'Convertire JPG in PNG migliora la qualit\u00e0?',
          a: "No. Convertire da JPG a PNG non ripristina la qualit\u00e0 persa durante la compressione JPG. Tuttavia, la conversione in PNG impedisce ulteriori perdite di qualit\u00e0 se devi modificare e risalvare l'immagine.",
        },
      ],
    },
    'jpg-to-webp': {
      title:
        'Convertitore da JPG a WebP - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti le immagini JPG in formato WebP nel tuo browser. File pi\u00f9 piccoli, stessa qualit\u00e0, 100% privato.',
      h1: 'Converti JPG in WebP',
      introText:
        'Converti le immagini JPG nel moderno formato WebP per file dal 25 al 34% pi\u00f9 piccoli alla stessa qualit\u00e0 visiva.',
      howToSteps: [
        'Trascina i tuoi file JPG nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in WebP istantaneamente nel tuo browser.',
        'Regola il cursore della qualit\u00e0 per bilanciare dimensione e qualit\u00e0.',
      ],
      faqs: [
        {
          q: 'Quanto \u00e8 pi\u00f9 piccolo WebP rispetto a JPG?',
          a: 'WebP \u00e8 dal 25 al 34% pi\u00f9 piccolo del JPG alla stessa qualit\u00e0 visiva nelle comparazioni di riferimento. Un JPG da 1 MB si converte in 650-750 KB come WebP senza differenze visibili.',
        },
      ],
    },
    'avif-to-jpg': {
      title:
        'Convertitore da AVIF a JPG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti le immagini AVIF in formato JPG nel tuo browser. Gratuito, privato, nessun upload necessario.',
      h1: 'Converti AVIF in JPG',
      introText:
        "Converti le immagini AVIF nel formato JPG universalmente compatibile. Tutta l'elaborazione avviene localmente.",
      howToSteps: [
        'Trascina i tuoi file AVIF nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in JPG istantaneamente nel tuo browser.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: "Cos'\u00e8 AVIF?",
          a: 'AVIF \u00e8 un formato immagine di nuova generazione basato sul codec video AV1. Offre una compressione migliore sia di JPG che di WebP, ma il supporto \u00e8 ancora in crescita.',
        },
      ],
    },
    'avif-to-png': {
      title:
        'Convertitore da AVIF a PNG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti le immagini AVIF in formato PNG senza perdita nel tuo browser. Gratuito, privato, nessun upload.',
      h1: 'Converti AVIF in PNG',
      introText:
        'Converti le immagini AVIF in formato PNG senza perdita. Perfetto per preservare la massima qualit\u00e0.',
      howToSteps: [
        'Trascina i tuoi file AVIF nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in PNG senza perdita istantaneamente nel tuo browser.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: 'Perch\u00e9 convertire AVIF in PNG?',
          a: 'AVIF ha un supporto limitato in alcune applicazioni. Convertire in PNG ti offre un formato universalmente compatibile e senza perdita che funziona ovunque.',
        },
      ],
    },
    'image-resizer': {
      title:
        'Ridimensionare immagini online — pixel e preset | PicShift',
      description:
        'Cambia larghezza, altezza o risoluzione in pixel nel browser. Anche WebP e screenshot: fino a 200 file per batch, senza upload.',
      h1: 'Ridimensiona Immagini',
      introText:
        'Ridimensionare foto o cambiare risoluzione serve per siti, moduli e social. Scegli un preset o dimensioni personalizzate: tutto resta nel browser sul tuo dispositivo.',
      howToSteps: [
        'Trascina le tue immagini nell\'area sopra, o clicca per sfogliare.',
        'Scegli una dimensione predefinita o inserisci dimensioni personalizzate.',
        'Scegli il formato di output e la qualità, poi scarica.',
      ],
      faqs: [
        {
          q: 'Come cambiare la risoluzione di un\u2019immagine in pixel?',
          a: 'In modalità Personalizzata inserisci larghezza e altezza desiderate (o una percentuale). PicShift ricalcola l\u2019immagine con ricampionamento di alta qualità.',
        },
        {
          q: 'Posso ridimensionare anche file WebP?',
          a: 'Sì: trascina il WebP come qualsiasi altro formato, scegli preset o pixel, e se serve cambia anche il formato di output nello stesso passaggio.',
        },
        { q: 'Quali preset di dimensione sono disponibili?', a: 'PicShift offre Max 1920px (lato lungo), Max 1080px, scala 50% e una modalità Personalizzata per dimensioni esatte in pixel o percentuale.' },
        { q: 'Il ridimensionamento riduce la qualità dell\'immagine?', a: 'La riduzione usa un ricampionamento di alta qualità. Puoi anche regolare il cursore della qualità per controllare la compressione.' },
        { q: 'Posso ridimensionare e convertire il formato contemporaneamente?', a: 'Sì. Puoi cambiare sia il formato di output (JPG, PNG, WebP, AVIF) che le dimensioni in un solo passaggio.' },
      ],
    },
    'image-compressor': {
      title:
        'Comprimere immagini online — batch, senza upload | PicShift',
      description:
        "Comprimi JPG, PNG, WebP, HEIC e AVIF per alleggerire file prima di inviarli. Fino a 200 immagini per batch nel browser, senza caricamento su server.",
      h1: 'Comprimi Immagini',
      introText:
        'Riduci le dimensioni dei file delle immagini mantenendo la qualità visiva. Trascina il cursore della qualità per trovare il bilanciamento perfetto.',
      howToSteps: [
        'Trascina le tue immagini nel riquadro sopra oppure clicca per sfogliare.',
        'Regola il cursore della qualità per controllare il livello di compressione.',
        'Clicca Scarica per salvare le immagini compresse.',
      ],
      faqs: [
        {
          q: 'Posso comprimere molte immagini in una volta?',
          a: 'Sì, fino a 200 file per esecuzione. Con lotti enormi, se il browser rallenta, conviene lavorare a gruppi e scaricare tra un gruppo e l\'altro.',
        },
        {
          q: 'Di quanto posso comprimere le mie immagini?',
          a: "Il risultato della compressione dipende dall'immagine di origine. Un'impostazione di qualità dell'80% riduce le dimensioni dei file JPG del 40-60% nelle comparazioni di riferimento, con differenze visibili minime. Usa la vista confronto per verificare la qualità prima di scaricare.",
        },
        {
          q: 'Quali formati posso comprimere?',
          a: 'Puoi comprimere immagini JPG, PNG, WebP, HEIC e AVIF. Il formato di output può essere JPG, PNG, WebP o AVIF.',
        },
      ],
    },
    'metadata-remover': {
      title: 'Rimuovere metadati immagine — EXIF, GPS, dati fotocamera | PicShift',
      description:
        'Rimuovi EXIF, posizione GPS, modello fotocamera e altri metadati dalle immagini JPG, PNG, WebP, HEIC e AVIF. Elaborazione locale nel tuo browser — nulla viene caricato.',
      h1: 'Rimuovere metadati immagine',
      introText:
        'Rimuovi i metadati nascosti dalle tue foto prima di condividerle. Le foto scattate con smartphone e fotocamere contengono per impostazione predefinita coordinate GPS, modello del dispositivo, data e ora, e tag software. Questo strumento rimuove tutto localmente nel tuo browser — l\'immagine non lascia mai il tuo dispositivo.',
      howToSteps: [
        'Trascina le tue immagini nel riquadro sopra oppure clicca per sfogliare.',
        'I metadati vengono rimossi istantaneamente nel browser — nulla viene caricato.',
        'Clicca Scarica per salvare le immagini pulite, oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: 'Quali metadati vengono rimossi?',
          a: 'Vengono rimossi tutti i dati EXIF, incluse le coordinate GPS, marca e modello della fotocamera, informazioni sull\'obiettivo, data e ora, tag software e anteprime incorporate. L\'immagine risultante non contiene alcun metadato.',
        },
        {
          q: 'La rimozione dei metadati influisce sulla qualità dell\'immagine?',
          a: 'No. La rimozione dei metadati elimina solo i dati non visivi incorporati nel file. Il contenuto in pixel dell\'immagine rimane identico.',
        },
        {
          q: 'Perché dovrei rimuovere i metadati prima di condividere le foto?',
          a: 'Le foto scattate con smartphone e fotocamere contengono dati nascosti come la tua posizione GPS esatta, il modello del dispositivo e l\'ora dello scatto. Rimuovere i metadati protegge la tua privacy quando condividi immagini sui social o con altre persone.',
        },
        {
          q: 'Perché il JPG ripulito è più grande dell’HEIC o HEIF originale?',
          a: 'HEIC e HEIF sono pensati per una compressione efficace: spesso l’originale pesa molto meno di un JPG tipico. Nel browser PicShift esporta gli HEIC/HEIF ripuliti come JPG, perché lo scaricamento nello stesso formato non è ancora ben supportato. Un JPG più grande è quindi normale e non indica che la rimozione dei metadati sia fallita. JPG, PNG, WebP e AVIF restano nello stesso formato in download. Se conta di più la dimensione del file che la massima compatibilità, conserva gli HEIC/HEIF originali quando puoi, oppure adotta un formato più moderno supportato dai tuoi strumenti (ad esempio AVIF) dove ha senso.',
        },
        {
          q: 'Quali formati di immagine sono supportati?',
          a: 'JPG, PNG, WebP, HEIC, HEIF e AVIF. JPG, PNG, WebP e AVIF si scaricano nello stesso formato; gli HEIC/HEIF ripuliti vengono forniti come JPG.',
        },
      ],
      detailSections: [
        {
          title: 'Ambito e limiti',
          body: 'Questo strumento rimuove i metadati incorporati nel file stesso. Non modifica i pixel visibili dell’immagine. Serve quindi a evitare fughe di informazioni nascoste, non a cancellare ciò che si vede già nello scatto.',
          items: [
            'Può rimuovere GPS, modello del dispositivo, ora di scatto e tag software, ma non elimina volti, targhe, filigrane o testo che è già visibile nell’immagine.',
            'JPG, PNG, WebP e AVIF vengono scaricati nello stesso formato. HEIC e HEIF ripuliti vengono scaricati come JPG, perché il browser non può ancora riscriverli in modo affidabile come HEIC o HEIF.',
            'Alcune app e piattaforme social rimuovono parte dei metadati dopo l’upload, ma questo comportamento non è costante e può cambiare. La scelta più sicura è pulire il file da soli prima di usarlo.',
          ],
        },
        {
          title: 'Come rimuovere i metadati da un’immagine',
          body: 'Il flusso e semplice: controlla prima cosa contiene il file, poi ripuliscilo e usa la copia pulita quando ti serve.',
          items: [
            'Trascina l’immagine nello strumento e verifica quali informazioni sono realmente presenti nel file.',
            'Se compaiono solo larghezza, altezza o spazio colore, vedrai 0 dati sensibili. Se ci sono GPS, dettagli del dispositivo o timestamp, verranno segnalati come sensibili.',
            'Scarica il file ripulito e usa quella versione quando vuoi salvarlo, inviarlo, caricarlo o semplicemente conservarne una copia.',
          ],
        },
      ],
    },
  },
}

export default it
