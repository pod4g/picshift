import type { PageTranslations } from '../config'

const it: PageTranslations = {
  home: {
    title:
      'PicShift - Convertitore di Immagini Gratuito | HEIC, WebP, PNG, JPG, AVIF | Nessun Upload',
    description:
      'Converti le immagini istantaneamente nel tuo browser — senza caricare file. Da HEIC a JPG, da WebP a PNG, AVIF e molto altro. 100% privato, funziona offline. Gratuito, senza limiti, senza registrazione.',
  },
  privacy: {
    title: 'Informativa sulla Privacy | PicShift',
    description:
      "Informativa sulla privacy di PicShift. Tutta l'elaborazione delle immagini avviene sul tuo dispositivo. Nessun file viene caricato, nessun dato personale viene raccolto.",
    sections: [
      {
        heading: 'In breve',
        content:
          'Le tue immagini restano sul tuo dispositivo \u2014 sempre. PicShift converte le immagini direttamente nel tuo browser. Niente viene caricato su internet. Noi non vediamo, non memorizziamo e non abbiamo accesso alle tue foto.',
      },
      {
        heading: 'Come funziona',
        content:
          "Quando converti un'immagine con PicShift, tutto avviene sul tuo dispositivo. I tuoi file non vengono mai inviati a nessun server. Puoi persino disconnetterti da internet e PicShift continuer\u00e0 a funzionare perfettamente \u2014 ecco quanto \u00e8 locale.",
      },
      {
        heading: 'Cosa registriamo',
        content:
          'Contiamo cose basilari come quante persone visitano PicShift per poterlo migliorare. Tutto qui:',
        items: [
          'Non usiamo cookie',
          'Non sappiamo chi sei',
          'Non possiamo vedere quali immagini converti',
          'Non ti tracciamo tra i siti web',
        ],
      },
      {
        heading: 'I tuoi dati',
        content:
          'Nessun account, nessuna registrazione, nessun dato personale memorizzato. Le tue immagini convertite esistono solo sul tuo dispositivo e scompaiono quando chiudi o aggiorni la pagina. Non abbiamo database di utenti o file \u2014 perch\u00e9 non ne abbiamo bisogno.',
      },
      {
        heading: 'Niente pubblicit\u00e0, niente vendita dati',
        content:
          'PicShift non ha pubblicit\u00e0 e non vende dati. Gli unici servizi esterni che utilizziamo sono:',
        items: [
          'Umami, uno strumento di analisi open source — conteggio anonimo dei visitatori senza cookie o tracciamento personale',
        ],
      },
      {
        heading: 'Modifiche a questa informativa',
        content:
          'Se aggiorniamo questa informativa, aggiorneremo questa pagina. La nostra promessa fondamentale non cambier\u00e0 mai: le tue immagini restano sul tuo dispositivo e non vengono mai caricate.',
      },
      {
        heading: 'Contatti',
        content: 'Domande? Scrivici a privacy@picshift.app.',
      },
    ],
    lastUpdated: 'Ultimo aggiornamento: febbraio 2026',
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
          a: 'S\u00ec, i file PNG sono tipicamente 2-5 volte pi\u00f9 grandi dei JPG perch\u00e9 PNG \u00e8 un formato senza perdita. Se la dimensione del file conta pi\u00f9 della qualit\u00e0 perfetta, considera la conversione in JPG.',
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
          a: 'Sebbene WebP sia ampiamente supportato nei browser, alcune applicazioni meno recenti, client di posta elettronica e piattaforme di social media potrebbero non accettare WebP. JPG \u00e8 il formato immagine pi\u00f9 universalmente compatibile.',
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
          a: 'WebP \u00e8 tipicamente dal 25 al 34% pi\u00f9 piccolo del JPG alla stessa qualit\u00e0 visiva. Un JPG da 1 MB potrebbe diventare 650-750 KB come WebP senza differenze visibili.',
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
      title: 'Ridimensiona Immagini - Gratuito e Privato | PicShift',
      description: 'Ridimensiona immagini nel browser. Dimensioni predefinite o personalizzate. 100% privato, senza upload.',
      h1: 'Ridimensiona Immagini',
      introText: 'Ridimensiona le tue immagini a dimensioni esatte o preset comuni. Tutto avviene nel tuo browser — le tue immagini non lasciano mai il tuo dispositivo.',
      howToSteps: [
        'Trascina le tue immagini nell\'area sopra, o clicca per sfogliare.',
        'Scegli una dimensione predefinita o inserisci dimensioni personalizzate.',
        'Scegli il formato di output e la qualità, poi scarica.',
      ],
      faqs: [
        { q: 'Quali preset di dimensione sono disponibili?', a: 'PicShift offre Max 1920px (lato lungo), Max 1080px, scala 50% e una modalità Personalizzata per dimensioni esatte in pixel o percentuale.' },
        { q: 'Il ridimensionamento riduce la qualità dell\'immagine?', a: 'La riduzione usa un ricampionamento di alta qualità. Puoi anche regolare il cursore della qualità per controllare la compressione.' },
        { q: 'Posso ridimensionare e convertire il formato contemporaneamente?', a: 'Sì. Puoi cambiare sia il formato di output (JPG, PNG, WebP, AVIF) che le dimensioni in un solo passaggio.' },
      ],
    },
    'image-compressor': {
      title:
        'Compressore di Immagini - Riduci le Dimensioni Online, Gratuito e Privato | PicShift',
      description:
        "Comprimi le immagini nel tuo browser. Riduci le dimensioni dei file JPG, PNG e WebP mantenendo un'ottima qualit\u00e0. 100% privato, nessun upload.",
      h1: 'Comprimi Immagini',
      introText:
        'Riduci le dimensioni dei file delle immagini mantenendo la qualit\u00e0 visiva. Trascina il cursore della qualit\u00e0 per trovare il bilanciamento perfetto.',
      howToSteps: [
        'Trascina le tue immagini nel riquadro sopra oppure clicca per sfogliare.',
        'Regola il cursore della qualit\u00e0 per controllare il livello di compressione.',
        'Clicca Scarica per salvare le immagini compresse.',
      ],
      faqs: [
        {
          q: 'Di quanto posso comprimere le mie immagini?',
          a: "Dipende dall'immagine di origine. Un'impostazione di qualit\u00e0 dell'80% riduce tipicamente le dimensioni dei file JPG del 40-60% con differenze visibili minime. Usa la vista confronto per verificare la qualit\u00e0 prima di scaricare.",
        },
        {
          q: 'Quali formati posso comprimere?',
          a: 'Puoi comprimere immagini JPG, PNG, WebP, HEIC e AVIF. Il formato di output pu\u00f2 essere JPG, PNG o WebP.',
        },
      ],
    },
  },
}

export default it
