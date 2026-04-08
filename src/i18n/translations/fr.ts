import type { PageTranslations } from '../config'

const fr: PageTranslations = {
  home: {
    title:
      "PicShift - Convertisseur d'Images Gratuit | HEIC, WebP, PNG, JPG, AVIF | Sans Téléchargement",
    description:
      "Convertissez vos images instantanément dans votre navigateur, sans téléchargement. HEIC en JPG, WebP en PNG, AVIF et plus. 100% privé, fonctionne hors ligne. Gratuit, sans limite, sans inscription.",
  },
  privacy: {
    title: 'Politique de confidentialité | PicShift',
    description:
      'Notre position : convertir, compresser, redimensionner ou retirer les métadonnées se fait sur votre appareil ; nous n’envoyons pas vos images pour les traiter. Cette page précise aussi ce que le site enregistre côté trafic — et ce qui reste en dehors.',
    sections: [
      {
        heading: 'En deux mots',
        content:
          'PicShift traite vos images localement, sur votre appareil. Conversion, compression, redimensionnement, nettoyage des métadonnées : rien n’est envoyé chez nous. Pas de compte à créer, pas de connexion obligatoire.',
      },
      {
        heading: 'Comment vos images sont traitées',
        content:
          'Vous choisissez un fichier : le navigateur le lit en mémoire, s’appuie sur ses codecs et des modules WebAssembly, et fabrique le fichier à télécharger au même endroit. Il n’y a pas d’étape « envoi sur notre serveur, traitement, retour » : nous ne stockons ni la source ni le résultat.',
      },
      {
        heading: 'Ce que nous ne collectons pas',
        content: 'Nous ne récupérons pas le contenu de vos images. Pour être clairs :',
        items: [
          "Nous n'envoyons pas d'images, ni avant ni après traitement",
        ],
      },
      {
        heading: 'Ce que nous voyons',
        content:
          'Comme sur tout site public, nous voyons des traces de visite : URL visitée, site d’origine, pays ou région approximatifs, type d’appareil, navigateur, clic sur un bouton ou un lien interne. Cela sert à améliorer le produit : pages utiles, outils menés au bout, articles qui amènent vers l’outil, parties du site où il manque de la localisation ou de la performance. À retenir : ces traces ne contiennent pas votre image.',
      },
      {
        heading: 'Analytique et services tiers',
        content:
          'Pour que le site tienne la route et pour comprendre comment il est utilisé, nous faisons appel à peu de prestataires (infrastructure et statistiques) :',
        items: [
          'Cloudflare : fichiers statiques, CDN, Cloudflare Web Analytics',
          'Umami : statistiques web pensées pour rester raisonnables côté vie privée',
          'Ils traitent des données de requêtes web ; vos images, non',
          'Dans notre configuration actuelle, Umami et Cloudflare Web Analytics conservent chacun les données d’analyse pendant six mois',
        ],
      },
      {
        heading: 'Cookies et pistage',
        content:
          'Pas de régie publicitaire, pas de scripts qui vous suivent d’un site à l’autre. Les statistiques sont volontairement légères : vérifier que le site tient le coup, pas vous profiler ailleurs. Impossible d’utiliser vos photos pour du profilage : nous ne les recevons pas pour le traitement.',
      },
      {
        heading: 'Réglages locaux dans le navigateur',
        content:
          'De petits réglages d’interface — langue, thème, qualité par défaut — peuvent rester dans votre navigateur pour éviter de tout refaire à chaque fois. Ils restent chez vous jusqu’à ce que vous les effaciez.',
      },
      {
        heading: 'Vos droits',
        content:
          'Selon votre pays, vous pouvez avoir droit d’accès, de rectification, de suppression ou d’opposition. PicShift ne propose pas de compte : nous n’avons pas de données qui disent « c’est vous ». Écrivez-nous : nous vous expliquons franchement ce que nous avons et ce que nous n’avons pas.',
      },
      {
        heading: 'Statut du projet',
        content:
          'PicShift est un projet indépendant sur picshift.app pour l’instant. Si l’exploitant, l’hébergement ou le cadre légal change d’une façon qui touche vraiment à la vie privée, nous mettrons cette page à jour au lieu de faire l’autruche.',
      },
      {
        heading: 'Évolution de cette politique',
        content:
          'Quand nous modifions ce texte, nous mettons à jour la page et la date « Dernière mise à jour ». La ligne de conduite ne bouge pas : les images sont traitées sur votre appareil, pas sur nos serveurs.',
      },
      {
        heading: 'Contact',
        content:
          'Questions vie privée, corrections ou demandes liées aux données : privacy@picshift.app.',
      },
    ],
    lastUpdated: 'Dernière mise à jour : avril 2026',
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
          q: 'Pourquoi le JPG nettoyé est-il plus lourd que le fichier HEIC ou HEIF d’origine ?',
          a: 'HEIC et HEIF visent une compression très efficace : à qualité comparable, l’original est souvent bien plus léger qu’un JPG classique. Dans le navigateur, PicShift enregistre les HEIC/HEIF nettoyés en JPG, car l’export au même format n’est pas encore fiable. Un fichier plus volumineux est donc courant et ne signifie pas que le nettoyage a échoué. Les JPG, PNG, WebP et AVIF restent au même format en téléchargement. Si la taille prime sur une compatibilité maximale, gardez vos HEIC/HEIF sources lorsque c’est possible, ou adoptez un format plus récent pris en charge par vos outils (par exemple l’AVIF) lorsque c’est pertinent.',
        },
        {
          q: 'Quels formats d\'image sont pris en charge ?',
          a: 'JPG, PNG, WebP, HEIC, HEIF et AVIF. JPG, PNG, WebP et AVIF se téléchargent au même format ; les HEIC/HEIF nettoyés sont fournis en JPG.',
        },
      ],
      detailSections: [
        {
          title: 'Perimetre et limites',
          body: 'Cet outil supprime les metadonnees integrees dans le fichier lui-meme. Il ne modifie pas les pixels visibles de l’image : il sert donc a eliminer les fuites d’informations cachees, pas a effacer ce qui apparait deja a l’ecran.',
          items: [
            'Il peut supprimer les coordonnees GPS, le modele de l’appareil, la date, l’heure et les balises logicielles, mais il ne retire pas les visages, plaques, filigranes ou textes deja visibles dans l’image.',
            'Les JPG, PNG, WebP et AVIF sont telecharges dans le meme format. Les HEIC et HEIF nettoyes sont fournis en JPG, car le navigateur ne sait pas encore les reecrire de maniere fiable en HEIC ou HEIF.',
            'Certaines applications et plateformes sociales retirent une partie des metadonnees apres envoi, mais ce comportement reste variable et peut changer. Le plus sur est donc de nettoyer le fichier vous-meme avant de l’utiliser.',
          ],
        },
        {
          title: 'Comment supprimer les metadonnees d’une image',
          body: 'Le principe est simple : verifiez d’abord ce que contient le fichier, nettoyez-le ensuite, puis utilisez la copie nettoyee quand vous en avez besoin.',
          items: [
            'Deposez l’image dans l’outil pour voir exactement quelles informations le fichier contient.',
            'Si le fichier n’affiche que la largeur, la hauteur ou l’espace colorimetrique, vous verrez 0 donnee sensible. S’il contient des coordonnees GPS, des details sur l’appareil ou des horodatages, ces elements seront signales comme sensibles.',
            'Telechargez le fichier nettoye et utilisez cette version lorsque vous voulez l’enregistrer, l’envoyer, la mettre en ligne ou simplement la conserver.',
          ],
        },
      ],
    },
  },
}

export default fr
