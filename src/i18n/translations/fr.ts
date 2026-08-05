import type { PageTranslations } from '../config'

const fr: PageTranslations = {
  home: {
    title:
      'PicShift: Convertisseur d’image gratuit en ligne sans inscription',
    description:
      "Convertissez vos images localement dans le navigateur, sans envoi ni inscription. HEIC en JPG, WebP en PNG, AVIF et plus ; les parcours déjà chargés sont réutilisables hors ligne.",
  },
  privacy: {
    title: 'Politique de confidentialité — traitement local | PicShift',
    description:
      'Convertir, compresser, redimensionner ou retirer les métadonnées se fait sur votre appareil. Nous n’envoyons pas vos images. Cette page précise aussi ce que le trafic enregistre.',
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
          'La disponibilité et la conservation des données d’analyse suivent les politiques actuelles de chaque fournisseur et la configuration active du compte PicShift ; nous ne publions pas ici de délai fixe de suppression',
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
    lastUpdated: 'Dernière mise à jour : août 2026',
  },
  tools: {
    'heic-to-jpg': {
      title:
        'Convertisseur HEIC en JPG - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        "Convertissez HEIC en JPG dans le navigateur. Les images sources ne sont pas envoyées pour conversion. Limites : 50 Mo par fichier, 200 fichiers et 1 Go par lot.",
      h1: 'Convertir HEIC en JPG',
      introText:
        "Convertissez vos photos HEIC d'iPhone en JPG dans le navigateur ; les images sources ne sont pas envoyées à un serveur de conversion.",
      howToSteps: [
        'Glissez-déposez vos fichiers HEIC dans la zone ci-dessus, ou cliquez pour les parcourir.',
        "Vos photos sont converties instantanément dans votre navigateur, rien n'est envoyé.",
        'Cliquez sur Télécharger pour enregistrer chaque fichier, ou sur Tout télécharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: "Qu'est-ce que le format HEIC ?",
          a: 'HEIC (High Efficiency Image Container) est le format photo par défaut sur les iPhones depuis iOS 11. Il produit des fichiers plus petits que le JPG tout en maintenant la même qualité. Cependant, de nombreuses applications Windows et sites web ne prennent pas en charge le HEIC.',
        },
        {
          q: 'Est-il sûr de convertir mes photos ici ?',
          a: "Les images sources sont traitées dans le navigateur et ne sont pas envoyées pour conversion. Le trafic normal et les signaux d’analyse sont décrits dans la politique de confidentialité. Après chargement réussi du parcours, vous pouvez le tester hors ligne.",
        },
        {
          q: 'Combien de fichiers puis-je convertir à la fois ?',
          a: "Vous pouvez convertir jusqu'\u00e0 200 fichiers \u00e0 la fois. Pour de meilleures performances avec de gros lots, nous recommandons 100 ou moins.",
        },
        {
          q: "Vais-je perdre en qualité d'image ?",
          a: "JPG utilise une compression avec perte. La qualité 85 est un point de départ ; le rendu et la taille dépendent de la photo. Comparez les détails et ajustez avant de télécharger.",
        },
      ],
    },
    'heic-to-png': {
      title:
        'HEIC en PNG en ligne — lots, sans envoi | PicShift',
      description:
        'Convertissez les photos HEIC en PNG pour l’édition. Qualité 100 par défaut, jusqu’à 200 fichiers dans le navigateur, sans envoi des images sources pour conversion.',
      h1: 'Convertir HEIC en PNG',
      introText:
        "Convertissez vos photos HEIC en PNG. La qualité 100 est utilisée par défaut ; entre 95 et 100, seuls les pixels décodés sont optimisés sans perte par OxiPNG. Sous 95, la quantification peut être avec perte.",
      howToSteps: [
        'Glissez-déposez vos fichiers HEIC dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en PNG dans votre navigateur ; vérifiez le réglage et comparez la sortie.',
        'Cliquez sur Télécharger pour enregistrer chaque fichier, ou sur Tout télécharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: "Pourquoi convertir HEIC en PNG plutot qu'en JPG ?",
          a: "PNG prend en charge la transparence. Entre qualité 95 et 100, PicShift conserve les pixels décodés et applique seulement OxiPNG sans perte ; sous 95, la quantification de palette peut introduire une perte.",
        },
        {
          q: 'Les fichiers PNG sont-ils plus volumineux que les JPG ?',
          a: 'Le PNG peut être plus volumineux que le JPG, mais il n’existe pas de multiplicateur fixe. Le résultat dépend de la photo et du réglage ; comparez la taille et le rendu.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'Convertisseur HEIC en WebP - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez HEIC en WebP dans le navigateur. Taille et qualité dépendent de la source et des réglages ; les images sources ne sont pas envoyées pour conversion.',
      h1: 'Convertir HEIC en WebP',
      introText:
        "Convertissez vos photos HEIC en WebP et comparez la taille et le rendu. Le résultat dépend de l’image, des réglages et de l’environnement cible.",
      howToSteps: [
        'Glissez-déposez vos fichiers HEIC dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en WebP instantanément dans votre navigateur.',
        'Cliquez sur Télécharger pour enregistrer chaque fichier, ou sur Tout télécharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: "Qu'est-ce que WebP ?",
          a: "WebP est un format développé par Google avec compression avec ou sans perte. Il peut être plus petit que JPG selon l’image et les réglages, sans pourcentage fixe. Vérifiez aussi la compatibilité de l’application cible.",
        },
        {
          q: 'Quand devrais-je utiliser WebP ?',
          a: 'WebP est ideal pour le web : des fichiers plus petits signifient des chargements de page plus rapides. Pour le partage par e-mail ou messagerie, JPG est plus universellement compatible.',
        },
      ],
    },
    'heif-to-jpg': {
      title:
        'Convertisseur HEIF en JPG — Windows, upload, sans envoi | PicShift',
      description:
        "Convertissez HEIF en JPG pour Windows, les formulaires d'upload, l'e-mail et les outils qui gèrent mal HEIF. Tout reste local dans votre navigateur, sans téléversement.",
      h1: 'Convertir HEIF en JPG',
      introText:
        "Convertissez un fichier HEIF en JPG quand vous avez besoin d'une version qui s'ouvre plus facilement sous Windows, passe dans un formulaire d'upload ou se partage sans friction. Le traitement se fait localement dans votre navigateur, sans envoi de fichier vers un serveur.",
      howToSteps: [
        'Glissez-déposez vos fichiers HEIF dans la zone ci-dessus, ou cliquez pour les sélectionner.',
        'Les fichiers sont convertis en JPG instantanément dans votre navigateur.',
        'Ajustez la qualité si besoin, puis téléchargez chaque fichier ou tout le lot.',
      ],
      faqs: [
        {
          q: 'Pourquoi convertir HEIF en JPG ?',
          a: "Parce que JPG reste beaucoup plus simple à ouvrir dans Windows, à joindre dans un e-mail, à téléverser sur un site ou à partager avec quelqu'un qui n'utilise pas un environnement compatible HEIF.",
        },
        {
          q: 'HEIF et HEIC, est-ce la même chose ?',
          a: "HEIF est la famille de formats, tandis que HEIC est le format photo HEIF le plus connu sur les appareils Apple. Dans la pratique, les mêmes problèmes de compatibilité reviennent souvent, et la conversion en JPG règle ces blocages.",
        },
        {
          q: 'Quand JPG est-il la sortie la plus sûre ?',
          a: "Quand le fichier part vers un PC Windows, un formulaire d'upload, un service client, un outil bureautique ou un collègue dont vous ne maîtrisez pas l'environnement. JPG reste le format le plus tolérant dans ces contextes.",
        },
        {
          q: 'La conversion HEIF en JPG fait-elle perdre de la qualité ?',
          a: "Oui, JPG est un format avec perte. Cela dit, c'est souvent le meilleur compromis quand la compatibilité compte plus que la conservation parfaite de chaque donnée de l'image.",
        },
        {
          q: 'Quand faut-il garder HEIF au lieu de le convertir ?',
          a: "Gardez HEIF si tous vos appareils et applications le prennent déjà en charge et si vous voulez profiter d'un format plus efficace en taille. Convertissez en JPG dès qu'un partage, un upload ou un logiciel commence à poser problème.",
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
        'Glissez-déposez vos fichiers WebP dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en JPG instantanément dans votre navigateur.',
        'Cliquez sur Télécharger pour enregistrer chaque fichier, ou sur Tout télécharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: 'Pourquoi convertir WebP en JPG ?',
          a: "WebP fonctionne très bien dans les navigateurs, mais pas toujours dans les logiciels plus anciens, les clients mail ou certains formulaires. Convertir en JPG reste le moyen le plus simple d'obtenir une image acceptee presque partout.",
        },
        {
          q: 'Comment convertir WebP en JPG ?',
          a: "Ajoutez votre fichier WebP, laissez JPG comme format de sortie, puis téléchargéz l'image convertie. C'est utile quand un site ou une application refusé le WebP.",
        },
        {
          q: 'Pourquoi certains sites refusént le WebP ?',
          a: "Beaucoup d'outils plus anciens ont été construits autour de JPG et PNG. Quand la validation des fichiers n'a pas été mise à jour, le WebP peut être refusé même s'il s'affiche très bien dans le navigateur.",
        },
        {
          q: 'Le fichier JPG sera-t-il plus lourd ?',
          a: "Parfois oui. WebP est souvent plus efficace que JPG, donc convertir pour gagner en compatibilite peut produire un fichier un peu plus volumineux.",
        },
      ],
    },
    'webp-to-png': {
      title:
        'Convertisseur WebP en PNG - Qualité réglable, transparence | PicShift',
      description:
        "Convertissez WebP en PNG pour la transparence ou l’édition. Qualité 100 par défaut ; le comportement change sous 95.",
      h1: 'Convertir WebP en PNG',
      introText:
        "Convertissez WebP en PNG pour conserver la transparence ou éditer l’image. Entre qualité 95 et 100, seuls les pixels décodés passent par OxiPNG sans perte ; sous 95, la quantification peut être avec perte.",
      howToSteps: [
        'Glissez-déposez vos fichiers WebP dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en PNG dans le navigateur ; comparez la sortie avec le réglage choisi.',
        'Cliquez sur Télécharger pour enregistrer chaque fichier, ou sur Tout télécharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: 'La conversion de WebP en PNG entraîne-t-elle une perte de qualité ?',
          a: 'Entre qualité 95 et 100, PicShift conserve les pixels décodés et applique uniquement OxiPNG sans perte. Sous 95, la quantification de palette peut introduire une perte. La taille dépend de l’image.',
        },
        {
          q: 'Quand faut-il convertir WebP en PNG ?',
          a: "Choisissez PNG pour la transparence ou l’édition. Utilisez qualité 95–100 pour éviter la quantification avec perte ; comparez le résultat avant un autre export.",
        },
        {
          q: 'Pourquoi le PNG est-il plus lourd que le WebP ?',
          a: "PNG et WebP stockent l’image différemment. Le PNG peut être plus lourd, mais le résultat dépend de la source et du réglage ; aucune proportion fixe n’est garantie.",
        },
        {
          q: 'Quand JPG est-il plus adapte que PNG ?',
          a: "Si vous n’avez pas besoin de transparence, JPG peut être plus pratique. PNG convient à la transparence et à l’édition ; choisissez qualité 95–100 si vous voulez éviter la quantification avec perte.",
        },
      ],
    },
    'png-to-jpg': {
      title: 'Convertisseur PNG JPG en ligne — plus léger, sans envoi | PicShift',
      description:
        "Utilisez ce convertisseur PNG JPG en ligne pour alléger un PNG avant envoi, partage ou téléversement quand la transparence n'est pas nécessaire.",
      h1: 'Convertir PNG en JPG',
      introText:
        "Utilisez un convertisseur PNG JPG en ligne quand un PNG est trop lourd pour un formulaire, un e-mail ou une mise en ligne. C'est souvent le bon choix pour une capture, une photo ou une exportation qui n'a plus besoin de transparence.",
      howToSteps: [
        'Glissez-déposez vos fichiers PNG dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en JPG instantanément dans votre navigateur.',
        'Ajustez le curseur de qualité pour equilibrer taille et qualité.',
      ],
      faqs: [
        {
          q: 'Quand utiliser un convertisseur PNG JPG en ligne ?',
          a: "Utilisez-le quand votre PNG est trop lourd pour un e-mail, un upload, un site ou un partage rapide, et que la transparence n'est plus utile. C'est un cas très fréquent avec les captures d'écran, exports ou photos enregistrées en PNG.",
        },
        {
          q: 'Pourquoi le JPG est-il souvent plus léger que le PNG ?',
          a: "Parce que PNG est sans perte et garde davantage de donnees image. Pour une photo ou une capture sans transparence, JPG suffit souvent et permet de reduire fortement la taille du fichier.",
        },
        {
          q: 'Vais-je perdre la transparence ?',
          a: 'Oui. JPG ne prend pas en charge la transparence. Les zones transparentes de votre PNG deviendront blanches. Si vous avez besoin de transparence, gardez votre image en PNG ou convertissez-la en WebP.',
        },
        {
          q: 'Quand faut-il garder PNG au lieu de convertir vers JPG ?',
          a: "Gardez PNG si l'image contient de la transparence, du texte fin, une interface, un logo ou si vous voulez eviter une compression avec perte. Pour les visuels de travail ou les assets transparents, PNG reste souvent plus adapte.",
        },
        {
          q: 'PNG vers JPG degrade-t-il fortement l’image ?',
          a: "Pas forcément. Avec une qualité raisonnable, l'écart est souvent très faible à l'œil sur les photos et les captures simples. Vérifiez surtout les zones fines, le texte et les aplats avant de télécharger.",
        },
      ],
    },
    'jpg-to-png': {
      title: 'Convertisseur JPG en PNG - Edition, transparence et reprise | PicShift',
      description:
        "Convertissez JPG en PNG pour l’édition ou un nouvel export. Qualité 100 par défaut ; sous 95, la quantification peut être avec perte.",
      h1: 'Convertir JPG en PNG',
      introText:
        "Convertissez JPG en PNG pour retoucher ou annoter. Cela ne restaure pas le détail perdu dans le JPG. Entre qualité 95 et 100, seul OxiPNG sans perte est appliqué ; sous 95, la quantification peut être avec perte.",
      howToSteps: [
        'Glissez-déposez vos fichiers JPG dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en PNG instantanément dans votre navigateur.',
        'Cliquez sur Télécharger pour enregistrer chaque fichier, ou sur Tout télécharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: 'Convertir JPG en PNG améliore-t-il la qualité ?',
          a: "Non. La conversion ne restaure pas le détail perdu dans le JPG. À qualité 95–100, le flux PNG n’ajoute pas de quantification avec perte ; sous 95, il peut le faire. Comparez avant de télécharger.",
        },
        {
          q: 'Pourquoi convertir un JPG en PNG ?',
          a: "On le fait surtout pour reprendre une image dans un logiciel d'edition, ajouter des annotations ou eviter une nouvelle degradation lors des prochains enregistrements. Le PNG est souvent plus lourd, mais plus stable pour ce type de travail.",
        },
        {
          q: 'Quand faut-il choisir PNG plutot que JPG ?',
          a: "Choisissez PNG si l'image doit être retouchee, revue, ou reexportee plusieurs fois. Si votre objectif est surtout un fichier léger a partager, rester en JPG reste plus logique.",
        },
        {
          q: 'Le PNG sera-t-il plus lourd que le JPG ?',
          a: "Oui, dans la plupart des cas. Le PNG compresse moins agressivement et produit souvent un fichier bien plus volumineux. Ce choix vaut surtout le coup quand la stabilite d'edition compte plus que la légerete.",
        },
      ],
    },
    'jpg-to-webp': {
      title:
        'Convertisseur JPG en WebP - Images plus légeres pour le web | PicShift',
      description:
        'Convertissez un JPG en WebP pour obtenir des images plus légeres sur le web et accélérer le chargement des pages.',
      h1: 'Convertir JPG en WebP',
      introText:
        "Convertissez JPG en WebP pour le web, puis comparez taille et rendu. Le résultat varie selon l’image et la qualité choisie.",
      howToSteps: [
        'Glissez-déposez vos fichiers JPG dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en WebP instantanément dans votre navigateur.',
        'Ajustez le curseur de qualité pour equilibrer taille et qualité.',
      ],
      faqs: [
        {
          q: 'Quelle reduction de taille offre WebP par rapport a JPG ?',
          a: 'WebP peut être plus petit que JPG à rendu proche, mais aucune réduction fixe ne vaut pour toutes les images. Comparez le fichier et les détails avant publication.',
        },
        {
          q: 'Pourquoi convertir JPG en WebP ?',
          a: "Parce qu'un WebP est souvent plus léger qu'un JPG a qualité visuelle proche. Sur un site, cela peut reduire le poids des pages et accélérer le chargement, surtout quand il y a beaucoup d'images.",
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
        'Glissez-déposez vos fichiers AVIF dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en JPG instantanément dans votre navigateur.',
        'Cliquez sur Télécharger pour enregistrer chaque fichier, ou sur Tout télécharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: "Qu'est-ce que AVIF ?",
          a: "AVIF est un format d'image de nouvelle generation base sur le codec video AV1. Il offre une meilleure compression que JPG et WebP, mais sa prise en charge est encore en cours de développément.",
        },
      ],
    },
    'avif-to-png': {
      title:
        'Convertisseur AVIF en PNG - Gratuit, Prive, Sans Envoi | PicShift',
      description:
        'Convertissez AVIF en PNG dans le navigateur, avec qualité 100 par défaut et sans envoyer les images sources pour conversion.',
      h1: 'Convertir AVIF en PNG',
      introText:
        'Convertissez AVIF en PNG. Entre qualité 95 et 100, seuls les pixels décodés passent par OxiPNG sans perte ; sous 95, la quantification peut être avec perte.',
      howToSteps: [
        'Glissez-déposez vos fichiers AVIF dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Les fichiers sont convertis en PNG dans le navigateur ; vérifiez le réglage et comparez la sortie.',
        'Cliquez sur Télécharger pour enregistrer chaque fichier, ou sur Tout télécharger pour obtenir un ZIP.',
      ],
      faqs: [
        {
          q: 'Pourquoi convertir AVIF en PNG ?',
          a: 'PNG peut être mieux pris en charge dans les applications qui refusent AVIF. Vérifiez l’environnement cible et utilisez qualité 95–100 pour limiter le traitement à OxiPNG sans perte.',
        },
      ],
    },
    'image-resizer': {
      title:
        'Redimensionner image en ligne — largeur, hauteur, résolution | PicShift',
      description:
        "Redimensionnez une image en ligne avec largeur/hauteur exactes ou des préréglages rapides. Pratique pour formulaires, fiches produit et réseaux sociaux, sans téléversement.",
      h1: 'Redimensionner une image en ligne',
      introText:
        "Redimensionner une image en ligne sert quand un fichier est trop grand pour un site, un formulaire, une fiche produit ou un visuel social. Choisissez une largeur/hauteur exacte ou un préréglage : tout reste local dans votre navigateur.",
      howToSteps: [
        'Déposez vos images dans la zone ci-dessus, ou cliquez pour parcourir.',
        'Choisissez une taille prédéfinie ou entrez des dimensions personnalisées.',
        'Choisissez le format de sortie et la qualité, puis téléchargez.',
      ],
      faqs: [
        {
          q: 'Comment redimensionner une image en ligne ?',
          a: "Déposez l'image dans PicShift, choisissez un préréglage ou le mode Personnalisé pour entrer largeur et hauteur, puis téléchargez. Le traitement reste dans le navigateur, sans envoi de fichier à un serveur.",
        },
        {
          q: 'Comment changer largeur et hauteur en pixels ?',
          a: "En mode Personnalisé, entrez les dimensions exactes en pixels ou un pourcentage. PicShift recalcule l'image avec un rééchantillonnage de haute qualité pour rester propre après réduction.",
        },
        { q: 'Comment redimensionner une image sans la déformer ?', a: "Choisissez une largeur et une hauteur adaptées à votre usage, ou utilisez un préréglage. PicShift conserve les proportions lorsque c'est pertinent et applique un redimensionnement propre pour éviter un rendu dégradé." },
        { q: 'Quels préréglages de taille sont disponibles ?', a: 'PicShift propose Max 1920px (côté long), Max 1080px, échelle 50%, et un mode Personnalisé pour entrer des dimensions exactes en pixels ou en pourcentage.' },
        { q: 'Quelle taille choisir pour un upload ou un visuel social ?', a: "Pour un téléversement, un e-mail ou une publication sociale, 1080px ou 1920px sur le côté long suffisent souvent. Si la plateforme impose une taille précise, utilisez le mode Personnalisé." },
        { q: 'Puis-je redimensionner et convertir le format en même temps ?', a: "Oui. Vous pouvez changer le format de sortie (JPG, PNG, WebP, AVIF) et les dimensions en une seule étape. Si votre vrai problème est surtout le poids du fichier, combinez le redimensionnement avec /fr/image-compressor." },
      ],
    },
    'image-compressor': {
      title:
        "Compresser des images en ligne — lots, sans envoi | PicShift",
      description:
        'Compressez JPG, PNG, WebP, HEIC et AVIF pour r\u00e9duire le poids avant envoi ou t\u00e9l\u00e9versement. Jusqu\u2019\u00e0 200 fichiers par lot dans le navigateur, sans serveur.',
      h1: 'Compresser des Images Gratuitement',
      introText:
        "Réduisez la taille des images et comparez le rendu. Le résultat dépend de la source, du format et du réglage ; ajustez le curseur avant de télécharger.",
      howToSteps: [
        'Glissez-déposez vos images dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Ajustez le curseur de qualité pour contrôler le niveau de compression.',
        'Cliquez sur Télécharger pour enregistrer les images compressees.',
      ],
      faqs: [
        {
          q: 'Puis-je compresser beaucoup d\u2019images \u00e0 la fois ?',
          a: "Oui, jusqu\u00e0 200 fichiers par ex\u00e9cution. Pour les tr\u00e8s gros lots, si le navigateur ralentit, traitez en plusieurs passes et t\u00e9l\u00e9chargez entre chaque lot.",
        },
        {
          q: 'De combien puis-je compresser mes images ?',
          a: "Le résultat dépend de l’image, du format et du réglage. Qualité 80 est un point de départ, pas une réduction garantie ; utilisez la comparaison pour vérifier taille et détails avant de télécharger.",
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
        "Supprimez EXIF, géolocalisation GPS, modèle d'appareil et autres métadonnées des images JPG, PNG, WebP, HEIC, AVIF. Traitement local dans le navigateur, aucun envoi.",
      h1: 'Supprimer les métadonnées image',
      introText:
        "Inspectez les métadonnées avant partage. PicShift réencode l’image dans le navigateur sans copier volontairement les champs pris en charge qu’il détecte ; le contenu de l’image source n’est pas envoyé pour cette opération.",
      howToSteps: [
        'Glissez-déposez vos images dans la zone ci-dessus, ou cliquez pour les parcourir.',
        'Examinez les champs de métadonnées pris en charge détectés localement.',
        'Lancez le réencodage puis téléchargez les résultats réussis séparément ou dans un ZIP.',
      ],
      faqs: [
        {
          q: 'Quelles métadonnées sont supprimées ?',
          a: "L’analyse peut détecter les coordonnées GPS, les données d’appareil et d’objectif, les dates, les balises logicielles et les miniatures. Le réencodage ne copie pas volontairement ces champs, mais des données ajoutées par l’encodeur du navigateur ou le profil colorimétrique peuvent subsister ; vérifiez séparément tout résultat critique.",
        },
        {
          q: "La suppression des métadonnées affecte-t-elle la qualité de l'image ?",
          a: "L’outil vise les données non visuelles. Certains formats peuvent nécessiter un réencodage ; comparez la sortie si vous exigez une fidélité stricte. Le résultat dépend du format source.",
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
          title: 'Périmètre et limites',
          body: 'Cet outil cible les métadonnées intégrées au fichier. Le réencodage n’efface pas les objets ou textes visibles, mais peut modifier les valeurs de pixels dans les formats avec perte ; il traite les informations cachées, pas le contenu déjà visible.',
          items: [
            'Les champs détectés peuvent inclure les coordonnées GPS, le modèle de l’appareil, la date, l’heure et les balises logicielles ; le nettoyage ne retire pas les visages, plaques, filigranes ou textes visibles.',
            'Les JPG, PNG, WebP et AVIF sont téléchargés dans le même format. Les HEIC et HEIF nettoyés sont fournis en JPG, car le navigateur ne sait pas encore les réécrire de manière fiable en HEIC ou HEIF.',
            'Certaines applications et plateformes sociales retirent une partie des métadonnées après envoi, mais ce comportement reste variable et peut changer. Le plus sûr est donc de nettoyer le fichier vous-même avant de l’utiliser.',
          ],
        },
        {
          title: 'Comment supprimer les métadonnées d’une image',
          body: 'Le principe est simple : verifiez d’abord ce que contient le fichier, nettoyez-le ensuite, puis utilisez la copie nettoyee quand vous en avez besoin.',
          items: [
            'Deposez l’image dans l’outil pour voir exactement quelles informations le fichier contient.',
            'Un résultat de 0 signifie qu’aucun champ pris en charge n’a été détecté, pas que tout bloc possible est absent. Les champs GPS, appareil ou date détectés sont signalés comme sensibles.',
            'Téléchargéz le fichier nettoye et utilisez cette version lorsque vous voulez l’enregistrer, l’envoyér, la mettre en ligne ou simplement la conserver.',
          ],
        },
      ],
    },
  },
}

export default fr
