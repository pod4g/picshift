import type { PageTranslations } from '../config'

const it: PageTranslations = {
  home: {
    title:
      'PicShift - Convertitore di Immagini Gratuito | HEIC, WebP, PNG, JPG, AVIF | Nessun Upload',
    description:
      'Converti immagini localmente nel browser, senza upload o registrazione. HEIC in JPG, WebP in PNG, AVIF e altro; i flussi già caricati sono riutilizzabili offline.',
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
          'La disponibilità e la conservazione dei dati di analitica seguono le politiche correnti di ciascun fornitore e la configurazione attiva dell’account PicShift; qui non pubblichiamo un termine fisso di cancellazione',
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
    lastUpdated: 'Ultimo aggiornamento: agosto 2026',
  },
  tools: {
    'heic-to-jpg': {
      title:
        'Convertitore da HEIC a JPG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti HEIC in JPG nel browser. Le immagini sorgente non vengono caricate per la conversione. Limiti: 50 MB per file, 200 file e 1 GB per batch.',
      h1: 'Converti HEIC in JPG',
      introText:
        "Converti le foto HEIC dell’iPhone in JPG nel browser; le immagini sorgente non vengono inviate a un server di conversione.",
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
          a: 'Le immagini sorgente sono elaborate nel browser e non caricate per la conversione. Il traffico ordinario e i segnali analytics sono descritti nell’informativa privacy. Dopo aver caricato correttamente il flusso puoi provarlo offline.',
        },
        {
          q: 'Quanti file posso convertire alla volta?',
          a: 'Puoi convertire fino a 200 file alla volta. Per le migliori prestazioni con grandi lotti, raccomandiamo 100 o meno.',
        },
        {
          q: "Perder\u00f2 qualit\u00e0 dell'immagine?",
          a: 'JPG usa compressione con perdita. Qualità 85 è un punto di partenza; resa e dimensione dipendono dalla foto. Confronta i dettagli e regola prima di scaricare.',
        },
      ],
    },
    'heic-to-png': {
      title:
        'Convertitore da HEIC a PNG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti HEIC in PNG nel browser. Qualità 100 predefinita; le immagini sorgente non vengono caricate per la conversione.',
      h1: 'Converti HEIC in PNG',
      introText:
        'Converti HEIC in PNG. Tra qualità 95 e 100 i pixel decodificati passano solo dall’ottimizzazione OxiPNG senza perdita; sotto 95 la quantizzazione può introdurre perdita.',
      howToSteps: [
        'Trascina i tuoi file HEIC nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in PNG nel browser; verifica l’impostazione e confronta il risultato.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: 'Perch\u00e9 convertire HEIC in PNG invece di JPG?',
          a: 'PNG supporta la trasparenza. Tra qualità 95 e 100 PicShift conserva i pixel decodificati e applica solo OxiPNG senza perdita; sotto 95 la quantizzazione della palette può introdurre perdita.',
        },
        {
          q: 'I file PNG sono pi\u00f9 grandi dei JPG?',
          a: 'PNG può essere più grande di JPG, ma non esiste un moltiplicatore fisso. Il risultato dipende dalla foto e dall’impostazione PNG; confronta dimensione e resa.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'Convertitore da HEIC a WebP - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti HEIC in WebP nel browser. Dimensione e resa dipendono da sorgente e impostazioni; le immagini sorgente non vengono caricate per la conversione.',
      h1: 'Converti HEIC in WebP',
      introText:
        'Converti HEIC in WebP e confronta dimensione e resa. Il risultato dipende dall’immagine, dalle impostazioni e dall’ambiente di destinazione.',
      howToSteps: [
        'Trascina i tuoi file HEIC nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in WebP istantaneamente nel tuo browser.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: "Cos'\u00e8 WebP?",
          a: 'WebP è un formato sviluppato da Google con compressione con o senza perdita. Può essere più piccolo di JPG per alcune immagini e impostazioni, senza percentuale fissa. Verifica anche la compatibilità dell’app di destinazione.',
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
          a: 'WebP e JPG possono usare compressione con perdita, quindi la ricodifica può cambiare i dettagli. Parti da 85–90, confronta e regola. Per PNG, qualità 95–100 usa solo OxiPNG senza perdita; sotto 95 può quantizzare.',
        },
        {
          q: 'Il file JPG può risultare più pesante del WebP originale?',
          a: 'Sì, può capitare. WebP è più efficiente di JPG, quindi convertendo per guadagnare compatibilità il file finale può pesare un po\' di più, specialmente per foto a risoluzione alta. Se la dimensione è importante, puoi abbinare la nostra <a href="/it/image-compressor">compressione immagini</a> dopo la conversione.',
        },
        {
          q: 'Posso convertire più file WebP in una volta sola?',
          a: 'Sì. PicShift elabora fino a 200 file per batch nel browser, da scaricare singolarmente o in ZIP. Prestazioni e durata dipendono dal dispositivo e dalle immagini.',
        },
        {
          q: 'Quando conviene PNG invece di JPG?',
          a: 'PNG è utile per trasparenza o editing. Usa qualità 95–100 per evitare la quantizzazione con perdita; valori inferiori possono attivarla. JPG può essere più pratico quando conta la compatibilità.',
        },
      ],
    },
    'webp-to-png': {
      title:
        'Convertitore da WebP a PNG - Gratuito, Privato, Nessun Upload | PicShift',
      description:
        'Converti WebP in PNG nel browser con qualità 100 predefinita, senza caricare le immagini sorgente per la conversione.',
      h1: 'Converti WebP in PNG',
      introText:
        'Converti WebP in PNG per trasparenza o editing. Tra qualità 95 e 100 usa solo OxiPNG senza perdita; sotto 95 la quantizzazione può essere con perdita.',
      howToSteps: [
        'Trascina i tuoi file WebP nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in PNG nel browser; verifica l’impostazione e confronta il risultato.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: 'La conversione da WebP a PNG comporta perdita di qualit\u00e0?',
          a: 'Tra qualità 95 e 100 PicShift conserva i pixel decodificati e applica solo OxiPNG senza perdita. Sotto 95 la quantizzazione della palette può introdurre perdita. La dimensione dipende dall’immagine.',
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
        'Convertire JPG in PNG online — qualità regolabile, batch | PicShift',
      description:
        'Converti JPG in PNG per modificare o annotare. Qualità 100 predefinita e fino a 200 file per batch, senza caricare le immagini sorgente.',
      h1: 'Convertire JPG in PNG',
      introText:
        'Converti JPG in PNG per modificare, ritagliare o annotare. Non recupera il dettaglio perso nel JPG. Tra qualità 95 e 100 usa solo OxiPNG senza perdita; sotto 95 la quantizzazione può introdurre perdita.',
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
          a: 'No. La conversione non ripristina il dettaglio perso nel JPG. A qualità 95–100 il flusso PNG non aggiunge quantizzazione con perdita; sotto 95 può farlo. Confronta prima di scaricare.',
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
        'Converti JPG in WebP nel browser. Dimensione e resa dipendono da immagine e impostazione; le sorgenti non vengono caricate per la conversione.',
      h1: 'Converti JPG in WebP',
      introText:
        'Converti JPG in WebP e confronta dimensione e resa; il risultato varia con immagine e qualità scelta.',
      howToSteps: [
        'Trascina i tuoi file JPG nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in WebP istantaneamente nel tuo browser.',
        'Regola il cursore della qualit\u00e0 per bilanciare dimensione e qualit\u00e0.',
      ],
      faqs: [
        {
          q: 'Quanto \u00e8 pi\u00f9 piccolo WebP rispetto a JPG?',
          a: 'WebP può essere più piccolo di JPG con resa simile, ma non esiste una riduzione fissa. Confronta file e dettagli prima di pubblicare.',
        },
      ],
    },
    // Near-win refinement for query "da jpg a avif" (rank 10.8, 5 imp/7d).
    // Only title + description overridden; everything else falls back to
    // the localized tool meta/content so this stays a minimal SEO patch.
    'jpg-to-avif': {
      title: 'Da JPG a AVIF — Convertitore Gratuito nel Browser | PicShift',
      description:
        'Converti JPG in AVIF nel browser e confronta dimensione e resa: il risultato dipende dall’immagine e dalle impostazioni. Senza caricamento delle sorgenti.',
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
        'Converti AVIF in PNG nel browser con qualità 100 predefinita, senza caricare le immagini sorgente per la conversione.',
      h1: 'Converti AVIF in PNG',
      introText:
        'Converti AVIF in PNG. Tra qualità 95 e 100 usa solo OxiPNG senza perdita; sotto 95 la quantizzazione può introdurre perdita.',
      howToSteps: [
        'Trascina i tuoi file AVIF nel riquadro sopra oppure clicca per sfogliare.',
        'I file vengono convertiti in PNG nel browser; verifica l’impostazione e confronta il risultato.',
        'Clicca Scarica per salvare ogni file oppure Scarica tutto per ottenere un file ZIP.',
      ],
      faqs: [
        {
          q: 'Perch\u00e9 convertire AVIF in PNG?',
          a: 'PNG può funzionare nelle app che non supportano AVIF; verifica l’ambiente target. Usa qualità 95–100 per limitare il processo a OxiPNG senza perdita.',
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
        'Riduci il peso delle immagini per allegati o moduli e confronta resa e dimensione prima di scaricare. Il risultato dipende da immagine, formato e impostazione.',
      howToSteps: [
        'Trascina le tue immagini nel riquadro sopra oppure clicca per sfogliare.',
        'Regola il cursore della qualità per controllare il livello di compressione.',
        'Clicca Scarica per salvare le immagini compresse, o Scarica tutto per uno ZIP.',
      ],
      faqs: [
        {
          q: 'Come comprimere le foto senza perdere qualità?',
          a: 'Trascina i file, parti da qualità 80–85 e usa la vista di confronto. È solo un intervallo iniziale: dimensione e dettagli dipendono dall\'immagine. Regola il valore a piccoli passi invece di assumere un risparmio fisso.',
        },
        {
          q: 'Posso comprimere più immagini in una volta?',
          a: 'Sì, fino a 200 file per esecuzione. Se il lotto è enorme e il browser rallenta, conviene lavorare a gruppi più piccoli e scaricare tra un gruppo e l\'altro: tutto resta sulla tua macchina, non c\'è coda lato server.',
        },
        {
          q: 'Come comprimere foto per e-mail (Gmail, Outlook)?',
          a: 'Controlla il limite corrente del servizio e la dimensione finale. Parti da qualità 80, confronta e, se serve, riduci anche le dimensioni; nessun valore garantisce un peso specifico.',
        },
        {
          q: 'Di quanto posso ridurre il peso delle immagini?',
          a: 'Dipende dal contenuto. Qualità 80 è un punto di partenza, non una percentuale garantita. Foto, screenshot, loghi e grafica reagiscono in modo diverso; confronta dimensione e dettagli e valuta PNG o WebP per grafica nitida.',
        },
        {
          q: 'Quali formati posso comprimere?',
          a: 'In ingresso: JPG, PNG, WebP, HEIC e AVIF. In uscita: JPG, PNG, WebP o AVIF. Scegli in base alla compatibilità target e confronta dimensione e resa; nessun formato è sempre il più piccolo.',
        },
        {
          q: 'Comprimere o ridimensionare: cosa conviene?',
          a: 'Se le dimensioni superano ciò che serve al target, ridimensionare può risparmiare più della sola ricodifica. Se sono già adeguate, prova solo la compressione e confronta.',
        },
        {
          q: 'Le mie foto vengono caricate su un server?',
          a: 'Le immagini sorgente sono elaborate nel browser e non caricate per la compressione. Traffico ordinario e analytics sono descritti nell’informativa privacy; non serve registrarsi.',
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
        'Controlla i metadati nascosti prima di condividere. PicShift ricodifica l’immagine nel browser senza copiare intenzionalmente i campi supportati rilevati; il contenuto dell’immagine sorgente non viene caricato per questa operazione.',
      howToSteps: [
        'Trascina le tue immagini nel riquadro sopra oppure clicca per sfogliare.',
        'Controlla i campi di metadati supportati rilevati localmente.',
        'Avvia la ricodifica e scarica i risultati riusciti singolarmente o in un file ZIP.',
      ],
      faqs: [
        {
          q: 'Quali metadati vengono rimossi?',
          a: 'La scansione può rilevare GPS, fotocamera, obiettivo, date, tag software e miniature. La ricodifica non copia intenzionalmente questi campi, ma possono restare dati aggiunti dal codificatore del browser o dal profilo colore; verifica in modo indipendente ogni risultato critico.',
        },
        {
          q: 'La rimozione dei metadati influisce sulla qualità dell\'immagine?',
          a: 'Lo strumento mira ai dati non visivi. Alcuni formati possono richiedere una ricodifica; confronta l’output se serve fedeltà rigorosa. Il risultato dipende dal formato sorgente.',
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
          body: 'Questo strumento tratta i metadati incorporati nel file. La ricodifica non cancella oggetti o testi visibili, ma nei formati con perdita può cambiare i valori dei pixel; riguarda i dati nascosti, non il contenuto già visibile.',
          items: [
            'I campi rilevati possono includere GPS, modello del dispositivo, ora di scatto e tag software; la pulizia non elimina volti, targhe, filigrane o testo visibile.',
            'JPG, PNG, WebP e AVIF vengono scaricati nello stesso formato. HEIC e HEIF ripuliti vengono scaricati come JPG, perché il browser non può ancora riscriverli in modo affidabile come HEIC o HEIF.',
            'Alcune app e piattaforme social rimuovono parte dei metadati dopo l’upload, ma questo comportamento non è costante e può cambiare. La scelta più sicura è pulire il file da soli prima di usarlo.',
          ],
        },
        {
          title: 'Come rimuovere i metadati da un’immagine',
          body: 'Il flusso e semplice: controlla prima cosa contiene il file, poi ripuliscilo e usa la copia pulita quando ti serve.',
          items: [
            'Trascina l’immagine nello strumento e verifica quali informazioni sono realmente presenti nel file.',
            'Un risultato pari a 0 significa che non è stato rilevato alcun campo supportato, non che ogni possibile blocco sia assente. I campi GPS, dispositivo o data rilevati vengono segnalati come sensibili.',
            'Scarica il file ripulito e usa quella versione quando vuoi salvarlo, inviarlo, caricarlo o semplicemente conservarne una copia.',
          ],
        },
      ],
    },
  },
}

export default it
