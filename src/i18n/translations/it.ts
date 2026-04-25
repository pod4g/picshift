import type { PageTranslations } from '../config'

const it: PageTranslations = {
  home: {
    title:
      'PicShift - Convertitore di Immagini Gratuito | HEIC, WebP, PNG, JPG, AVIF | Nessun Upload',
    description:
      'Converti immagini direttamente nel browser: HEIC in JPG, WebP in PNG, AVIF e altro. Funziona offline, 100% privato, gratuito, senza registrazione.',
  },
  privacy: {
    title: 'Informativa sulla privacy — Elaborazione locale | PicShift',
    description:
      'Convertire, comprimere, ridimensionare o togliere metadati avviene sul tuo dispositivo: non carichiamo le foto per elaborarle. Qui spieghiamo che cosa resta nei log del sito.',
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
        'Convertire WebP in JPG online — più compatibile, senza upload | PicShift',
      description:
        'Trasforma file WebP in JPG quando un\'app, una mail o un sito non accettano WebP. Conversione in batch direttamente nel browser, senza caricare i file su un server e senza registrarsi.',
      h1: 'Convertire WebP in JPG',
      introText:
        'Converti immagini WebP in JPG quando ti serve un file che si apra, si invii e si carichi senza problemi. JPG resta il formato più semplice da gestire per e-mail, programmi d\'ufficio e moduli di upload che non riconoscono ancora WebP.',
      howToSteps: [
        'Trascina i tuoi file WebP nel riquadro sopra oppure clicca per sfogliare.',
        'Lascia JPG come formato di uscita: la conversione avviene subito nel browser.',
        'Clicca Scarica per salvare ogni file, oppure Scarica tutto per ottenere uno ZIP.',
      ],
      faqs: [
        {
          q: 'Come trasformare WebP in JPG?',
          a: 'Trascina il file WebP nel riquadro, lascia JPG come formato di output e clicca Scarica. È il modo più veloce quando una piattaforma rifiuta WebP o quando ti serve una versione più compatibile da inviare. Tutto avviene nel browser, senza caricare nulla.',
        },
        {
          q: 'Perché convertire WebP in JPG?',
          a: 'WebP funziona benissimo nei browser, ma fuori dal web alcune applicazioni più vecchie, client di posta elettronica, software d\'ufficio e moduli di upload non lo riconoscono. Convertire in JPG risolve nella maggior parte dei casi e ti dà un file che chiunque può aprire.',
        },
        {
          q: 'Perché alcune app non accettano WebP?',
          a: 'Molti sistemi sono stati pensati solo per JPG e PNG: quando il controllo del formato si basa su una lista vecchia, WebP viene rifiutato anche se l\'immagine è perfettamente leggibile. Convertirlo in JPG bypassa il problema senza riconfigurare il software.',
        },
        {
          q: 'Convertire WebP in JPG fa perdere qualità?',
          a: 'Sia WebP sia JPG sono formati con perdita, quindi una piccola riconversione c\'è sempre. Con qualità tra 85 e 90 il risultato resta praticamente identico all\'originale ad occhio nudo. Per cose stampate o lavorazioni successive, conviene WebP → PNG che invece è senza perdita.',
        },
        {
          q: 'Il file JPG può risultare più pesante del WebP originale?',
          a: 'Sì, può capitare. WebP è più efficiente di JPG, quindi convertendo per guadagnare compatibilità il file finale può pesare un po\' di più, specialmente per foto a risoluzione alta. Se la dimensione è importante, puoi abbinare la nostra <a href="/it/image-compressor">compressione immagini</a> dopo la conversione.',
        },
        {
          q: 'Posso convertire più file WebP in una volta sola?',
          a: 'Sì. Trascina più file insieme — anche centinaia — e PicShift li elabora in batch nel browser. Puoi scaricarli singolarmente o tutti in uno ZIP. Non c\'è coda lato server perché niente viene caricato.',
        },
        {
          q: 'Quando conviene PNG invece di JPG?',
          a: 'Conviene PNG se il file ha trasparenza o se vuoi un\'uscita senza perdita per editing successivo. JPG ha senso quando la priorità è aprire, inviare o caricare il file con meno problemi. In quel caso prova il <a href="/it/webp-to-png">convertitore WebP a PNG</a>.',
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
        'Convertire JPG in PNG online — senza perdita, batch | PicShift',
      description:
        'Converti JPG in PNG quando ti serve una versione senza perdita per modificare, annotare o riesportare. Fino a 200 file per batch nel browser, senza upload.',
      h1: 'Convertire JPG in PNG',
      introText:
        'Converti JPG in PNG quando devi modificare, ritagliare o annotare un\u2019immagine e non vuoi che ogni nuova esportazione perda qualità. PNG conserva i pixel intatti — non recupera dettaglio già perso nel JPG di partenza, ma evita ulteriori degradazioni.',
      howToSteps: [
        'Trascina i tuoi file JPG nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in PNG istantaneamente nel tuo browser.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: 'Come convertire JPG in PNG online?',
          a: 'Trascina i JPG in PicShift, mantieni PNG come formato di output e scarica. La conversione gira interamente nel browser con supporto batch (fino a 200 file per volta) e senza upload.',
        },
        {
          q: 'Convertire JPG in PNG migliora la qualità?',
          a: 'No. La conversione da JPG a PNG non ripristina la qualità persa durante la compressione JPG. Però, passando a PNG, eviti ulteriori perdite se devi modificare e risalvare l\u2019immagine.',
        },
        {
          q: 'Quando conviene passare a PNG invece di restare su JPG?',
          a: 'Scegli PNG quando ti servono trasparenza, screenshot nitidi, grafiche con testo o un file intermedio da modificare più volte. Resta su JPG se devi solo condividere o caricare un file leggero.',
        },
        {
          q: 'Il PNG sarà più grande del JPG di partenza?',
          a: 'Di solito sì. PNG conserva più informazioni e scarta meno dettaglio, quindi la dimensione cresce — è normale quando dai priorità alla stabilità di editing rispetto al peso.',
        },
        {
          q: 'Posso convertire più JPG insieme?',
          a: 'Sì. PicShift gestisce fino a 200 file per batch direttamente nel browser. Per carichi grandi, procedi in gruppi di 50–100 per mantenere reattivo il browser.',
        },
        {
          q: 'I miei file vengono caricati su un server?',
          a: 'No. Tutto avviene nel tuo browser con WebAssembly. Puoi anche disattivare la connessione dopo aver aperto la pagina e lo strumento continua a funzionare.',
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
        'Ridimensionare immagini online — pixel, risoluzione e preset | PicShift',
      description:
        'Ridimensiona foto online per Instagram (1080×1080), e-commerce, moduli o social. Imposta pixel esatti o usa un preset. Fino a 200 file per batch nel browser, senza upload.',
      h1: 'Ridimensiona Immagini',
      introText:
        'Ridimensiona foto o cambia risoluzione quando un sito chiede pixel esatti, un social impone un quadrato 1080×1080 o un modulo rifiuta file troppo grandi. Scegli un preset rapido o inserisci larghezza e altezza su misura — tutto resta nel browser sul tuo dispositivo, senza upload.',
      howToSteps: [
        'Trascina le tue immagini nell\'area sopra, o clicca per sfogliare.',
        'Scegli una dimensione predefinita o inserisci dimensioni personalizzate.',
        'Scegli il formato di output e la qualità, poi scarica.',
      ],
      faqs: [
        {
          q: 'Come ridimensionare un\u2019immagine senza installare programmi?',
          a: 'Trascina l\u2019immagine in PicShift, scegli un preset o inserisci larghezza e altezza nella modalità Personalizzata, poi scarica. Tutto avviene nel browser e i file non vanno su nessun server.',
        },
        {
          q: 'Quali pixel servono per Instagram, Facebook o i social?',
          a: 'Per i post quadrati di Instagram usa 1080×1080. Per le copertine Facebook 1200×630. Per Storie e Reels verticali 1080×1920. Inserisci i pixel esatti in modalità Personalizzata e scarica subito.',
        },
        {
          q: 'Come cambiare la risoluzione di un\u2019immagine in pixel?',
          a: 'In modalità Personalizzata inserisci larghezza e altezza desiderate (o una percentuale). PicShift ricalcola l\u2019immagine con ricampionamento di alta qualità.',
        },
        {
          q: 'Posso ridimensionare anche file WebP o screenshot?',
          a: 'Sì: trascina il WebP o lo screenshot come qualsiasi altro formato, scegli preset o pixel, e se serve cambia anche il formato di output nello stesso passaggio.',
        },
        {
          q: 'Quali preset di dimensione sono disponibili?',
          a: 'PicShift offre Max 1920px (lato lungo), Max 1080px, scala 50% e una modalità Personalizzata per dimensioni esatte in pixel o percentuale.',
        },
        {
          q: 'Il ridimensionamento riduce la qualità dell\'immagine?',
          a: 'La riduzione usa un ricampionamento di alta qualità. Puoi anche regolare il cursore della qualità per controllare la compressione.',
        },
        {
          q: 'Posso ridimensionare e convertire il formato contemporaneamente?',
          a: 'Sì. Puoi cambiare sia il formato di output (JPG, PNG, WebP, AVIF) che le dimensioni in un solo passaggio. Se ti interessa solo alleggerire il file, abbinalo a /it/image-compressor.',
        },
        {
          q: 'Le mie immagini vengono caricate su un server?',
          a: 'No. Tutto gira nel tuo browser con WebAssembly. Puoi anche disattivare la connessione dopo aver aperto la pagina e lo strumento continua a funzionare.',
        },
      ],
    },
    'image-compressor': {
      title:
        'Comprimere immagini online — batch, senza upload | PicShift',
      description:
        'Comprimi JPG, PNG, WebP, HEIC e AVIF per ridurre il peso prima di e-mail, allegati o caricamento. Fino a 200 immagini per batch nel browser, senza inviarle a un server.',
      h1: 'Comprimere Immagini',
      introText:
        'Riduci il peso delle tue foto senza perdere nitidezza visibile: utile quando un\'e-mail blocca un allegato, un sito chiede meno di 2 MB o vuoi alleggerire un archivio. Trascina più file insieme, regola la qualità e confronta prima e dopo prima di scaricare.',
      howToSteps: [
        'Trascina le tue immagini nel riquadro sopra oppure clicca per sfogliare.',
        'Regola il cursore della qualità per controllare il livello di compressione.',
        'Clicca Scarica per salvare le immagini compresse, o Scarica tutto per uno ZIP.',
      ],
      faqs: [
        {
          q: 'Come comprimere le foto senza perdere qualità?',
          a: 'Trascina i file, lascia la qualità intorno all\'80–85 e usa la vista di confronto per controllare. A questo livello di solito non si nota differenza, ma il file pesa il 40–60% in meno rispetto all\'originale. Se serve più peso scendi gradualmente: meglio testare un valore alla volta che impostare 50 alla cieca.',
        },
        {
          q: 'Posso comprimere più immagini in una volta?',
          a: 'Sì, fino a 200 file per esecuzione. Se il lotto è enorme e il browser rallenta, conviene lavorare a gruppi più piccoli e scaricare tra un gruppo e l\'altro: tutto resta sulla tua macchina, non c\'è coda lato server.',
        },
        {
          q: 'Come comprimere foto per e-mail (Gmail, Outlook)?',
          a: 'I limiti tipici sono 25 MB su Gmail e 20 MB su Outlook, ma molti gateway aziendali tagliano già a 10 MB. Comprimere a qualità 80 di solito basta per stare sotto questi limiti senza ridimensionare. Se l\'immagine è ancora troppo grande, abbina un ridimensionamento a 2000 px sul lato lungo.',
        },
        {
          q: 'Di quanto posso ridurre il peso delle immagini?',
          a: 'Dipende dal contenuto. Una foto JPG già compressa scende del 40–60% a qualità 80; un PNG di screenshot convertito in JPG può perdere il 70–80%. Le immagini con poche zone di colore (loghi, grafica) rendono meno: in quel caso conviene PNG o WebP invece che JPG.',
        },
        {
          q: 'Quali formati posso comprimere?',
          a: 'In ingresso: JPG, PNG, WebP, HEIC e AVIF. In uscita puoi scegliere JPG, PNG, WebP o AVIF. Per il web moderno WebP a qualità 80 è di solito il miglior compromesso peso/qualità; per la massima compatibilità (e-mail, Office, vecchi sistemi) resta JPG.',
        },
        {
          q: 'Comprimere o ridimensionare: cosa conviene?',
          a: 'Se l\'immagine è enorme in pixel (es. una foto da fotocamera 4000×3000 da usare su un sito), ridimensionare prima fa più del solo comprimere. Se è già a una risoluzione ragionevole, basta la compressione. Spesso si fanno entrambi: ridimensiona a 1920–2000 px lato lungo, poi comprimi a 80.',
        },
        {
          q: 'Le mie foto vengono caricate su un server?',
          a: 'No. Tutta la compressione avviene nel tuo browser usando JavaScript e il <code>Canvas</code>. I file non lasciano il dispositivo, non c\'è upload, non viene salvata alcuna copia, non serve registrarsi.',
        },
        {
          q: 'Posso comprimere di nuovo un\'immagine già compressa?',
          a: 'Sì, ma il guadagno è minore e la qualità peggiora a ogni passaggio (è una compressione con perdita). Se vedi che la dimensione non scende più, significa che il file è già vicino al suo limite — meglio ridimensionare o cambiare formato (es. JPG → WebP) che insistere a ricomprimere.',
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
