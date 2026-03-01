import type { PageTranslations } from '../config'

const fr: PageTranslations = {
  home: {
    title:
      "PicShift - Convertisseur d'Images Gratuit | HEIC, WebP, PNG, JPG, AVIF | Sans Telechargement",
    description:
      "Convertissez vos images instantanement dans votre navigateur, sans telechargement. HEIC en JPG, WebP en PNG, AVIF et plus. 100% prive, fonctionne hors ligne. Gratuit, sans limite, sans inscription.",
  },
  privacy: {
    title: 'Politique de Confidentialite | PicShift',
    description:
      "Politique de confidentialite de PicShift. Tout le traitement des images se fait sur votre appareil. Aucun fichier n'est envoye, aucune donnee personnelle n'est collectee.",
    sections: [
      {
        heading: 'En bref',
        content:
          "Vos images restent sur votre appareil, toujours. PicShift convertit les images directement dans votre navigateur. Rien n'est envoye sur internet. Nous ne voyons, ne stockons et n'avons acces a aucune de vos photos.",
      },
      {
        heading: 'Comment ca marche',
        content:
          "Quand vous convertissez une image avec PicShift, tout se passe sur votre propre appareil. Vos fichiers ne sont jamais envoyes a un serveur. Vous pouvez meme couper votre connexion internet et PicShift fonctionnera parfaitement — c'est a quel point c'est local.",
      },
      {
        heading: 'Ce que nous mesurons',
        content:
          "Nous comptons des choses basiques comme le nombre de visiteurs sur PicShift pour pouvoir l'ameliorer. C'est tout :",
        items: [
          "Nous n'utilisons pas de cookies",
          'Nous ne savons pas qui vous etes',
          'Nous ne pouvons pas voir quelles images vous convertissez',
          'Nous ne vous suivons pas entre les sites web',
        ],
      },
      {
        heading: 'Vos donnees',
        content:
          "Pas de compte, pas d'inscription, aucune donnee personnelle stockee. Vos images converties n'existent que sur votre appareil et disparaissent quand vous fermez ou actualisez la page. Nous n'avons aucune base de donnees d'utilisateurs ou de fichiers — parce que nous n'en avons pas besoin.",
      },
      {
        heading: 'Pas de pub, pas de vente de donnees',
        content:
          "PicShift n'a pas de publicite et ne vend aucune donnee. Les seuls services externes que nous utilisons sont :",
        items: [
          'Umami, un outil d\'analyse open source — comptage anonyme des visiteurs sans cookies ni suivi personnel',
        ],
      },
      {
        heading: 'Modifications de cette politique',
        content:
          'Si nous mettons a jour cette politique, nous mettrons a jour cette page. Notre promesse fondamentale ne changera jamais : vos images restent sur votre appareil et ne sont jamais envoyees.',
      },
      {
        heading: 'Contact',
        content: 'Des questions ? Ecrivez-nous a privacy@picshift.app.',
      },
    ],
    lastUpdated: 'Derniere mise a jour : fevrier 2026',
  },
  tools: {
    'heic-to-jpg': {
      title:
        'Convertisseur HEIC en JPG - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        "Convertissez vos photos HEIC en JPG instantanement dans votre navigateur. 100% prive : les fichiers ne quittent jamais votre appareil. Gratuit, sans limite, sans inscription.",
      h1: 'Convertir HEIC en JPG',
      introText:
        "Convertissez vos photos HEIC d'iPhone en format JPG instantanement. Tout se passe dans votre navigateur : vos photos ne quittent jamais votre appareil.",
      howToSteps: [
        'Glissez-deposez vos fichiers HEIC dans la zone ci-dessus, ou cliquez pour les parcourir.',
        "Vos photos sont converties instantanement dans votre navigateur, rien n'est envoye.",
        'Cliquez sur Telecharger pour enregistrer chaque fichier, ou sur Tout telecharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: "Qu'est-ce que le format HEIC ?",
          a: 'HEIC (High Efficiency Image Container) est le format photo par defaut sur les iPhones depuis iOS 11. Il produit des fichiers plus petits que le JPG tout en maintenant la meme qualite. Cependant, de nombreuses applications Windows et sites web ne prennent pas en charge le HEIC.',
        },
        {
          q: 'Est-il sûr de convertir mes photos ici ?',
          a: "Oui. PicShift traite tout dans votre navigateur a l'aide de WebAssembly. Vos photos ne quittent jamais votre appareil : aucun fichier n'est envoye a un serveur. Vous pouvez le verifier en vous deconnectant d'internet et en essayant le convertisseur.",
        },
        {
          q: 'Combien de fichiers puis-je convertir a la fois ?',
          a: "Vous pouvez convertir jusqu'\u00e0 200 fichiers \u00e0 la fois. Pour de meilleures performances avec de gros lots, nous recommandons 100 ou moins.",
        },
        {
          q: "Vais-je perdre en qualite d'image ?",
          a: "Le reglage de qualite par defaut (85%) produit des fichiers visuellement identiques a l'original. Vous pouvez ajuster le curseur de qualite : des valeurs plus elevees signifient une meilleure qualite mais des fichiers plus volumineux.",
        },
      ],
    },
    'heic-to-png': {
      title:
        'Convertisseur HEIC en PNG - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez vos photos HEIC en format PNG dans votre navigateur. Qualite sans perte, 100% prive, aucun envoi requis.',
      h1: 'Convertir HEIC en PNG',
      introText:
        "Convertissez vos photos HEIC d'iPhone en format PNG sans perte. Tout le traitement se fait localement dans votre navigateur.",
      howToSteps: [
        'Glissez-deposez vos fichiers HEIC dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en PNG sans perte instantanement dans votre navigateur.',
        'Cliquez sur Telecharger pour enregistrer chaque fichier, ou sur Tout telecharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: "Pourquoi convertir HEIC en PNG plutot qu'en JPG ?",
          a: "PNG est un format sans perte, ce qui signifie qu'aucune qualite n'est perdue lors de la conversion. Choisissez PNG lorsque vous avez besoin d'une qualite parfaite ou de la prise en charge de la transparence. Choisissez JPG pour des fichiers plus petits.",
        },
        {
          q: 'Les fichiers PNG sont-ils plus volumineux que les JPG ?',
          a: 'Oui, les fichiers PNG sont generalement 2 a 5 fois plus volumineux que les JPG car le PNG est sans perte. Si la taille du fichier compte plus que la qualite parfaite, envisagez de convertir en JPG.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'Convertisseur HEIC en WebP - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez vos photos HEIC en format WebP dans votre navigateur. Fichiers plus petits, excellente qualite, 100% prive.',
      h1: 'Convertir HEIC en WebP',
      introText:
        "Convertissez vos photos HEIC d'iPhone au format moderne WebP. WebP offre des fichiers 25 a 34% plus petits que le JPG a qualite egale.",
      howToSteps: [
        'Glissez-deposez vos fichiers HEIC dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en WebP instantanement dans votre navigateur.',
        'Cliquez sur Telecharger pour enregistrer chaque fichier, ou sur Tout telecharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: "Qu'est-ce que WebP ?",
          a: "WebP est un format d'image moderne developpe par Google. Il offre des fichiers 25 a 34% plus petits que le JPG a qualite equivalente. WebP est pris en charge par tous les principaux navigateurs (96,5% de prise en charge mondiale).",
        },
        {
          q: 'Quand devrais-je utiliser WebP ?',
          a: 'WebP est ideal pour le web : des fichiers plus petits signifient des chargements de page plus rapides. Pour le partage par e-mail ou messagerie, JPG est plus universellement compatible.',
        },
      ],
    },
    'webp-to-jpg': {
      title:
        'Convertisseur WebP en JPG - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez vos images WebP en format JPG dans votre navigateur. Gratuit, prive, aucun envoi necessaire.',
      h1: 'Convertir WebP en JPG',
      introText:
        'Convertissez vos images WebP au format JPG universellement compatible. Tout le traitement se fait localement dans votre navigateur.',
      howToSteps: [
        'Glissez-deposez vos fichiers WebP dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en JPG instantanement dans votre navigateur.',
        'Cliquez sur Telecharger pour enregistrer chaque fichier, ou sur Tout telecharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: 'Pourquoi convertir WebP en JPG ?',
          a: "Bien que WebP soit largement pris en charge dans les navigateurs, certaines applications plus anciennes, clients de messagerie et plateformes de reseaux sociaux peuvent ne pas accepter le WebP. JPG est le format d'image le plus universellement compatible.",
        },
      ],
    },
    'webp-to-png': {
      title:
        'Convertisseur WebP en PNG - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez vos images WebP en format PNG sans perte dans votre navigateur. Gratuit, prive, sans envoi.',
      h1: 'Convertir WebP en PNG',
      introText:
        "Convertissez vos images WebP en format PNG sans perte. Parfait lorsque vous avez besoin de transparence ou d'une qualite sans perte.",
      howToSteps: [
        'Glissez-deposez vos fichiers WebP dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en PNG sans perte instantanement dans votre navigateur.',
        'Cliquez sur Telecharger pour enregistrer chaque fichier, ou sur Tout telecharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: 'La conversion de WebP en PNG entraine-t-elle une perte de qualite ?',
          a: 'Non. PNG est un format sans perte, donc la conversion preserve chaque pixel de la source WebP. Le fichier PNG resultant sera plus volumineux mais identique en qualite.',
        },
      ],
    },
    'png-to-jpg': {
      title: 'Convertisseur PNG en JPG - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez vos images PNG en format JPG dans votre navigateur. Reduisez la taille des fichiers tout en conservant une excellente qualite.',
      h1: 'Convertir PNG en JPG',
      introText:
        "Convertissez vos images PNG en JPG pour reduire la taille des fichiers. Ideal pour les photos enregistrees en PNG qui n'ont pas besoin de transparence.",
      howToSteps: [
        'Glissez-deposez vos fichiers PNG dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en JPG instantanement dans votre navigateur.',
        'Ajustez le curseur de qualite pour equilibrer taille et qualite.',
      ],
      faqs: [
        {
          q: 'Vais-je perdre la transparence ?',
          a: 'Oui. JPG ne prend pas en charge la transparence. Les zones transparentes de votre PNG deviendront blanches. Si vous avez besoin de transparence, gardez votre image en PNG ou convertissez-la en WebP.',
        },
      ],
    },
    'jpg-to-png': {
      title: 'Convertisseur JPG en PNG - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez vos images JPG en format PNG sans perte dans votre navigateur. Gratuit, prive, sans envoi.',
      h1: 'Convertir JPG en PNG',
      introText:
        "Convertissez vos images JPG en format PNG sans perte. Utile lorsque vous avez besoin d'une version sans perte pour l'edition.",
      howToSteps: [
        'Glissez-deposez vos fichiers JPG dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en PNG instantanement dans votre navigateur.',
        'Cliquez sur Telecharger pour enregistrer chaque fichier, ou sur Tout telecharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: 'Convertir JPG en PNG ameliore-t-il la qualite ?',
          a: "Non. Convertir de JPG en PNG ne restaure pas la qualite perdue lors de la compression JPG. Cependant, convertir en PNG empeche toute perte de qualite supplementaire si vous devez editer et re-enregistrer l'image.",
        },
      ],
    },
    'jpg-to-webp': {
      title:
        'Convertisseur JPG en WebP - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez vos images JPG en format WebP dans votre navigateur. Fichiers plus petits, meme qualite, 100% prive.',
      h1: 'Convertir JPG en WebP',
      introText:
        'Convertissez vos images JPG au format moderne WebP pour des fichiers 25 a 34% plus petits avec la meme qualite visuelle.',
      howToSteps: [
        'Glissez-deposez vos fichiers JPG dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en WebP instantanement dans votre navigateur.',
        'Ajustez le curseur de qualite pour equilibrer taille et qualite.',
      ],
      faqs: [
        {
          q: 'Quelle reduction de taille offre WebP par rapport a JPG ?',
          a: 'WebP est generalement 25 a 34% plus petit que JPG a qualite visuelle egale. Un JPG de 1 Mo pourrait devenir 650-750 Ko en WebP sans difference visible.',
        },
      ],
    },
    'avif-to-jpg': {
      title:
        'Convertisseur AVIF en JPG - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez vos images AVIF en format JPG dans votre navigateur. Gratuit, prive, aucun envoi requis.',
      h1: 'Convertir AVIF en JPG',
      introText:
        'Convertissez vos images AVIF au format JPG universellement compatible. Tout le traitement se fait localement.',
      howToSteps: [
        'Glissez-deposez vos fichiers AVIF dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en JPG instantanement dans votre navigateur.',
        'Cliquez sur Telecharger pour enregistrer chaque fichier, ou sur Tout telecharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: "Qu'est-ce que AVIF ?",
          a: "AVIF est un format d'image de nouvelle generation base sur le codec video AV1. Il offre une meilleure compression que JPG et WebP, mais sa prise en charge est encore en cours de developpement.",
        },
      ],
    },
    'avif-to-png': {
      title:
        'Convertisseur AVIF en PNG - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez vos images AVIF en format PNG sans perte dans votre navigateur. Gratuit, prive, sans envoi.',
      h1: 'Convertir AVIF en PNG',
      introText:
        'Convertissez vos images AVIF en format PNG sans perte. Parfait pour preserver la qualite maximale.',
      howToSteps: [
        'Glissez-deposez vos fichiers AVIF dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en PNG sans perte instantanement dans votre navigateur.',
        'Cliquez sur Telecharger pour enregistrer chaque fichier, ou sur Tout telecharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: 'Pourquoi convertir AVIF en PNG ?',
          a: 'AVIF a une prise en charge limitee dans certaines applications. Convertir en PNG vous donne un format sans perte et universellement compatible qui fonctionne partout.',
        },
      ],
    },
    'image-resizer': {
      title: 'Redimensionner des Images - Gratuit et Privé | PicShift',
      description: 'Redimensionnez vos images dans votre navigateur. Tailles prédéfinies ou dimensions personnalisées. 100% privé, aucun téléchargement.',
      h1: 'Redimensionner les Images',
      introText: 'Redimensionnez vos images aux dimensions exactes ou aux préréglages courants. Tout se passe dans votre navigateur — vos images ne quittent jamais votre appareil.',
      howToSteps: [
        'Déposez vos images dans la zone ci-dessus, ou cliquez pour parcourir.',
        'Choisissez une taille prédéfinie ou entrez des dimensions personnalisées.',
        'Choisissez le format de sortie et la qualité, puis téléchargez.',
      ],
      faqs: [
        { q: 'Quels préréglages de taille sont disponibles ?', a: 'PicShift propose Max 1920px (côté long), Max 1080px, échelle 50%, et un mode Personnalisé pour entrer des dimensions exactes en pixels ou un pourcentage.' },
        { q: 'Le redimensionnement réduit-il la qualité de l\'image ?', a: 'La réduction d\'échelle utilise un rééchantillonnage de haute qualité. Vous pouvez aussi ajuster le curseur de qualité pour contrôler la compression.' },
        { q: 'Puis-je redimensionner et convertir le format en même temps ?', a: 'Oui. Vous pouvez changer le format de sortie (JPG, PNG, WebP, AVIF) et les dimensions en une seule étape.' },
      ],
    },
    'image-compressor': {
      title:
        "Compresseur d'Images - Reduisez la Taille en Ligne, Gratuit et Prive | PicShift",
      description:
        'Compressez vos images dans votre navigateur. Reduisez la taille des fichiers JPG, PNG et WebP tout en conservant une excellente qualite. 100% prive, sans envoi.',
      h1: 'Compresser des Images',
      introText:
        "Reduisez la taille de vos fichiers image tout en conservant la qualite visuelle. Ajustez le curseur de qualite pour trouver l'equilibre parfait.",
      howToSteps: [
        'Glissez-deposez vos images dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Ajustez le curseur de qualite pour controler le niveau de compression.',
        'Cliquez sur Telecharger pour enregistrer les images compressees.',
      ],
      faqs: [
        {
          q: 'De combien puis-je compresser mes images ?',
          a: "Cela depend de l'image source. Un reglage de qualite a 80% reduit generalement la taille des fichiers JPG de 40 a 60% avec une difference visible minimale. Utilisez la vue de comparaison pour verifier la qualite avant de telecharger.",
        },
        {
          q: 'Quels formats puis-je compresser ?',
          a: 'Vous pouvez compresser des images JPG, PNG, WebP, HEIC et AVIF. Le format de sortie peut etre JPG, PNG ou WebP.',
        },
      ],
    },
  },
}

export default fr
