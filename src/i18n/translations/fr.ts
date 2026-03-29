import type { PageTranslations } from '../config'

const fr: PageTranslations = {
  home: {
    title:
      "PicShift - Convertisseur d'Images Gratuit | HEIC, WebP, PNG, JPG, AVIF | Sans Téléchargement",
    description:
      "Convertissez vos images instantanément dans votre navigateur, sans téléchargement. HEIC en JPG, WebP en PNG, AVIF et plus. 100% privé, fonctionne hors ligne. Gratuit, sans limite, sans inscription.",
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
          a: 'Oui, dans les workflows photo standards, les fichiers PNG sont 2 a 5 fois plus volumineux que les JPG car le PNG est sans perte. Si la taille du fichier compte plus que la qualite parfaite, convertissez en JPG.',
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
        'Convertisseur WebP en JPG - Plus compatible, sans envoi | PicShift',
      description:
        "Convertissez un WebP en JPG lorsqu'un site, une appli ou un televersement n'accepte pas bien le format WebP.",
      h1: 'Convertir WebP en JPG',
      introText:
        "Convertissez un WebP en JPG quand vous avez besoin d'un fichier qui s'ouvre, se partage ou se televerse plus facilement. Le JPG reste le format le plus simple pour de nombreux outils, formulaires et logiciels plus anciens.",
      howToSteps: [
        'Glissez-deposez vos fichiers WebP dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en JPG instantanement dans votre navigateur.',
        'Cliquez sur Telecharger pour enregistrer chaque fichier, ou sur Tout telecharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: 'Pourquoi convertir WebP en JPG ?',
          a: "WebP fonctionne tres bien dans les navigateurs, mais pas toujours dans les logiciels plus anciens, les clients mail ou certains formulaires. Convertir en JPG reste le moyen le plus simple d'obtenir une image acceptee presque partout.",
        },
        {
          q: 'Comment convertir WebP en JPG ?',
          a: "Ajoutez votre fichier WebP, laissez JPG comme format de sortie, puis telechargez l'image convertie. C'est utile quand un site ou une application refuse le WebP.",
        },
        {
          q: 'Pourquoi certains sites refusent le WebP ?',
          a: "Beaucoup d'outils plus anciens ont ete construits autour de JPG et PNG. Quand la validation des fichiers n'a pas ete mise a jour, le WebP peut etre refuse meme s'il s'affiche tres bien dans le navigateur.",
        },
        {
          q: 'Le fichier JPG sera-t-il plus lourd ?',
          a: "Parfois oui. WebP est souvent plus efficace que JPG, donc convertir pour gagner en compatibilite peut produire un fichier un peu plus volumineux.",
        },
      ],
    },
    'webp-to-png': {
      title:
        'Convertisseur WebP en PNG - Sans perte, transparence preservee | PicShift',
      description:
        "Convertissez un WebP en PNG quand vous avez besoin de transparence, d'un fichier sans perte ou d'une image plus simple a retravailler.",
      h1: 'Convertir WebP en PNG',
      introText:
        "Convertissez un WebP en PNG lorsque vous voulez conserver la transparence, eviter une perte supplementaire ou reprendre l'image dans un outil d'edition. Le PNG est souvent plus lourd, mais il reste plus pratique dans certains flux.",
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
        {
          q: 'Quand faut-il convertir WebP en PNG ?',
          a: "Choisissez PNG si vous avez besoin de transparence, d'une image plus stable pour l'edition ou d'un fichier sans perte pour un autre export ensuite.",
        },
        {
          q: 'Pourquoi le PNG est-il plus lourd que le WebP ?',
          a: "Parce que le PNG compresse beaucoup moins agressivement et conserve davantage d'informations image. C'est normal d'obtenir un fichier plus gros quand vous privilegiez la stabilite plutot que la legerete.",
        },
        {
          q: 'Quand JPG est-il plus adapte que PNG ?',
          a: "Si vous n'avez pas besoin de transparence et que vous cherchez surtout un fichier plus leger a envoyer ou televerser, le JPG est souvent plus adapte. Le PNG a plus de sens quand la qualite sans perte ou la retouche priment.",
        },
      ],
    },
    'png-to-jpg': {
      title: 'Convertisseur PNG en JPG - Plus leger, en ligne, sans envoi | PicShift',
      description:
        "Convertissez un PNG en JPG pour obtenir un fichier plus leger, plus simple a partager et plus facile a televerser quand la transparence n'est pas necessaire.",
      h1: 'Convertir PNG en JPG',
      introText:
        "Convertissez un PNG en JPG lorsque votre image est trop lourde pour l'envoi, le partage ou la mise en ligne. C'est souvent le bon choix pour une photo ou une capture exportee en PNG alors que la transparence ne sert plus a rien.",
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
        {
          q: 'Pourquoi convertir un PNG en JPG ?',
          a: "La raison la plus courante est simple : un JPG est souvent beaucoup plus leger qu'un PNG. C'est utile pour envoyer une photo, publier une image sur un site ou passer une limite de taille lors d'un televersement.",
        },
        {
          q: 'Le JPG est-il plus leger que le PNG ?',
          a: "Oui, dans la plupart des cas photo. Le PNG garde plus de donnees et devient vite lourd. Le JPG est generalement plus adapte quand vous voulez un fichier plus leger et que la transparence n'est pas necessaire.",
        },
        {
          q: 'Quand faut-il garder le format PNG ?',
          a: "Gardez le PNG si votre image contient de la transparence, du texte fin, une interface ou si vous voulez eviter une compression avec perte. Pour un logo transparent ou une capture d'ecran detaillee, le PNG reste souvent le meilleur choix.",
        },
      ],
    },
    'jpg-to-png': {
      title: 'Convertisseur JPG en PNG - Edition, transparence et reprise | PicShift',
      description:
        "Convertissez un JPG en PNG lorsque vous voulez un fichier plus stable pour l'edition, la retouche ou un nouvel export sans perte supplementaire.",
      h1: 'Convertir JPG en PNG',
      introText:
        "Convertissez un JPG en PNG quand vous avez besoin d'un fichier plus pratique a retoucher, annoter ou reexporter. Cela n'ameliore pas la qualite d'origine, mais evite d'ajouter une nouvelle compression avec perte a chaque sauvegarde.",
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
        {
          q: 'Pourquoi convertir un JPG en PNG ?',
          a: "On le fait surtout pour reprendre une image dans un logiciel d'edition, ajouter des annotations ou eviter une nouvelle degradation lors des prochains enregistrements. Le PNG est souvent plus lourd, mais plus stable pour ce type de travail.",
        },
        {
          q: 'Quand faut-il choisir PNG plutot que JPG ?',
          a: "Choisissez PNG si l'image doit etre retouchee, revue, ou reexportee plusieurs fois. Si votre objectif est surtout un fichier leger a partager, rester en JPG reste plus logique.",
        },
        {
          q: 'Le PNG sera-t-il plus lourd que le JPG ?',
          a: "Oui, dans la plupart des cas. Le PNG compresse moins agressivement et produit souvent un fichier bien plus volumineux. Ce choix vaut surtout le coup quand la stabilite d'edition compte plus que la legerete.",
        },
      ],
    },
    'jpg-to-webp': {
      title:
        'Convertisseur JPG en WebP - Images plus legeres pour le web | PicShift',
      description:
        'Convertissez un JPG en WebP pour obtenir des images plus legeres sur le web et accelerer le chargement des pages.',
      h1: 'Convertir JPG en WebP',
      introText:
        "Convertissez un JPG en WebP lorsque vous cherchez a alleger une page web sans changer visiblement l'image. C'est souvent la meilleure option pour des photos de produits, des articles, des galeries ou des pages d'atterrissage.",
      howToSteps: [
        'Glissez-deposez vos fichiers JPG dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en WebP instantanement dans votre navigateur.',
        'Ajustez le curseur de qualite pour equilibrer taille et qualite.',
      ],
      faqs: [
        {
          q: 'Quelle reduction de taille offre WebP par rapport a JPG ?',
          a: 'WebP est 25 a 34% plus petit que JPG a qualite visuelle egale dans les comparaisons de reference. Un JPG de 1 Mo devient 650-750 Ko en WebP sans difference visible.',
        },
        {
          q: 'Pourquoi convertir JPG en WebP ?',
          a: "Parce qu'un WebP est souvent plus leger qu'un JPG a qualite visuelle proche. Sur un site, cela peut reduire le poids des pages et accelerer le chargement, surtout quand il y a beaucoup d'images.",
        },
        {
          q: 'Quand WebP est-il plus adapte que JPG ?',
          a: "WebP est plus adapte quand l'image est destinee au navigateur et que vous cherchez a reduire le poids transfere. Pour un usage web moderne, c'est souvent le format le plus interessant.",
        },
        {
          q: 'Quand faut-il garder JPG ?',
          a: "Gardez JPG si l'image doit passer par des outils plus anciens, des pieces jointes mail ou des environnements qui n'acceptent pas encore bien WebP. Le JPG reste plus simple quand la compatibilite prime sur le gain de poids.",
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
      title: 'Redimensionner une image en ligne - Gratuit et prive | PicShift',
      description: 'Redimensionnez une image ou une photo dans votre navigateur. Dimensions exactes, tailles predefinies, aucun envoi, 100% prive.',
      h1: 'Redimensionner les Images',
      introText: "Redimensionnez une image aux bonnes dimensions pour un site, un formulaire, un envoi ou un reseau social. Vous pouvez choisir une taille predefinie ou entrer une largeur et une hauteur exactes, sans jamais televerser vos fichiers.",
      howToSteps: [
        'Déposez vos images dans la zone ci-dessus, ou cliquez pour parcourir.',
        'Choisissez une taille prédéfinie ou entrez des dimensions personnalisées.',
        'Choisissez le format de sortie et la qualité, puis téléchargez.',
      ],
      faqs: [
        { q: 'Comment redimensionner une image sans la deformer ?', a: "Choisissez une largeur et une hauteur adaptees a votre usage, ou utilisez un préréglage. PicShift conserve les proportions lorsque c'est pertinent et applique un redimensionnement de haute qualité pour eviter un rendu degrade." },
        { q: 'Quels préréglages de taille sont disponibles ?', a: 'PicShift propose Max 1920px (côté long), Max 1080px, échelle 50%, et un mode Personnalisé pour entrer des dimensions exactes en pixels ou un pourcentage.' },
        { q: 'Quelle taille choisir pour une photo a envoyer ou televerser ?', a: "Pour un televersement ou un envoi rapide, une image de 1080px ou 1920px sur le cote long suffit souvent. Si le site impose une taille precise, utilisez le mode Personnalise pour entrer les dimensions exactes." },
        { q: 'Puis-je redimensionner et convertir le format en meme temps ?', a: "Oui. Vous pouvez changer le format de sortie (JPG, PNG, WebP, AVIF) et les dimensions en une seule etape. Si votre vrai probleme est surtout le poids du fichier, combinez le redimensionnement avec /fr/image-compressor." },
      ],
    },
    'image-compressor': {
      title:
        "Compresseur d'Images Gratuit - Réduire la Taille en Ligne | PicShift",
      description:
        'Compressez vos images dans votre navigateur. Réduisez la taille des fichiers JPG, PNG, WebP, HEIC et AVIF tout en conservant une excellente qualité. 100% privé, sans envoi.',
      h1: 'Compresser des Images Gratuitement',
      introText:
        "Réduisez la taille de vos fichiers image tout en conservant la qualité visuelle. Ajustez le curseur de qualité pour trouver l'équilibre idéal.",
      howToSteps: [
        'Glissez-deposez vos images dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Ajustez le curseur de qualite pour controler le niveau de compression.',
        'Cliquez sur Telecharger pour enregistrer les images compressees.',
      ],
      faqs: [
        {
          q: 'De combien puis-je compresser mes images ?',
          a: "Le resultat de compression depend de l'image source. Un reglage de qualite a 80% reduit la taille des fichiers JPG de 40 a 60% dans les comparaisons de reference, avec une difference visible minimale. Utilisez la vue de comparaison pour verifier la qualite avant de telecharger.",
        },
        {
          q: 'Quels formats puis-je compresser ?',
          a: 'Vous pouvez compresser des images JPG, PNG, WebP, HEIC et AVIF. Les formats de sortie sont JPG, PNG, WebP et AVIF.',
        },
      ],
    },
    'metadata-remover': {
      title: 'Supprimer les métadonnées image — EXIF, GPS, données appareil | PicShift',
      description:
        "Supprimez les données EXIF, la localisation GPS, le modèle d'appareil photo et autres métadonnées des images JPG, PNG, WebP, HEIC et AVIF. Traitement local dans votre navigateur, aucun fichier envoyé.",
      h1: 'Supprimer les métadonnées image',
      introText:
        "Supprimez les métadonnées cachées de vos photos avant de les partager. Les photos prises avec un téléphone ou un appareil photo contiennent par défaut des coordonnées GPS, le modèle de l'appareil, la date et l'heure de prise de vue et des balises logicielles. Cet outil supprime tout localement dans votre navigateur — l'image ne quitte jamais votre appareil.",
      howToSteps: [
        'Glissez-déposez vos images dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les métadonnées sont supprimées instantanément dans votre navigateur, rien n\'est envoyé.',
        'Cliquez sur Télécharger pour enregistrer les images nettoyées, ou sur Tout télécharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: 'Quelles métadonnées sont supprimées ?',
          a: "Toutes les données EXIF sont supprimées : coordonnées GPS, marque et modèle de l'appareil, informations sur l'objectif, horodatage, balises logicielles et miniatures intégrées. L'image résultante ne contient aucune métadonnée.",
        },
        {
          q: "La suppression des métadonnées affecte-t-elle la qualité de l'image ?",
          a: "Non. La suppression des métadonnées ne retire que les données non visuelles intégrées dans le fichier. Le contenu en pixels de votre image reste identique.",
        },
        {
          q: 'Pourquoi supprimer les métadonnées avant de partager des photos ?',
          a: "Les photos prises avec des téléphones et appareils photo contiennent des données cachées comme votre position GPS exacte, le modèle de votre appareil et l'heure de prise de vue. Supprimer ces métadonnées protège votre vie privée lorsque vous partagez des images en ligne ou avec d'autres personnes.",
        },
        {
          q: 'Quels formats d\'image sont pris en charge ?',
          a: "Vous pouvez supprimer les métadonnées des images JPG, PNG, WebP, HEIC et AVIF. Le format de sortie reste identique au format d'entrée.",
        },
      ],
    },
  },
}

export default fr
