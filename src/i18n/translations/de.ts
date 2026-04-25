import type { PageTranslations } from '../config'

const de: PageTranslations = {
  home: {
    title:
      'PicShift - Kostenloser Bildkonverter | HEIC, WebP, PNG, JPG, AVIF | Ohne Upload',
    description:
      'Konvertieren Sie Bilder sofort in Ihrem Browser — ohne Upload. HEIC in JPG, WebP in PNG, AVIF und mehr. 100% privat, funktioniert offline. Kostenlos, ohne Limits, ohne Registrierung.',
  },
  privacy: {
    title: 'Datenschutzerklärung | PicShift',
    description:
      'So sehen wir Privatsphäre: Konvertieren, Komprimieren, Größe ändern oder Metadaten streichen passiert auf Ihrem Gerät — wir laden dafür keine Bilder hoch. Unten steht, welche Zugriffsprotokolle die Website sieht und was gar nicht bei uns ankommt.',
    sections: [
      {
        heading: 'Kurzfassung',
        content:
          'PicShift verarbeitet Bilder lokal auf Ihrem Gerät. Konvertierung, Kompression, Größe ändern, Metadaten entfernen: nichts davon geht an unsere Server. Kein Konto, kein Login nötig.',
      },
      {
        heading: 'Wie Bilder verarbeitet werden',
        content:
          'Sie wählen eine Datei: Der Browser liest sie in den Arbeitsspeicher, nutzt seine Codecs und WebAssembly-Module und erzeugt das Ergebnis dort zum Download. Es gibt keinen Umweg über „hochladen, bei uns verarbeiten, wieder herunterladen“. Deshalb speichern wir weder die Quelldatei noch die Ausgabe.',
      },
      {
        heading: 'Was wir nicht erfassen',
        content: 'Wir erfassen den Inhalt Ihrer Bilder nicht. Kurz gesagt:',
        items: [
          'Wir laden weder vor noch nach der Verarbeitung Bilder hoch',
        ],
      },
      {
        heading: 'Was wir sehen',
        content:
          'Wie jede öffentliche Website protokollieren wir Zugriffe: Seiten-URL, Referrer, ungefähres Land oder Region, Gerätetyp, Browserfamilie, Klick auf einen Button oder internen Link. Damit verbessern wir das Produkt: welche Seiten helfen, welche Tools Nutzer zu Ende bringen, welche Blogartikel ins Tool führen, wo Lokalisierung oder Geschwindigkeit fehlt. Wichtig: In diesen Protokollen steckt nicht Ihr Bild.',
      },
      {
        heading: 'Analyse und Drittanbieter',
        content:
          'Damit die Seite stabil lädt und wir sehen, wie sie genutzt wird, nutzen wir wenig Infrastruktur und Auswertung:',
        items: [
          'Cloudflare: statisches Hosting, CDN, Cloudflare Web Analytics',
          'Umami: Webanalyse mit Augenmaß für Datenschutz',
          'Die Dienste verarbeiten typische Webanfrage-Daten, keine Bilddateien von dir',
          'Mit unserer aktuellen Konfiguration bewahren Umami und Cloudflare Web Analytics Analysedaten jeweils sechs Monate lang',
        ],
      },
      {
        heading: 'Cookies und Tracking',
        content:
          'Keine Werbenetzwerke, keine Skripte, die Sie seitenübergreifend verfolgen. Die Auswertung ist bewusst schmal: prüfen, ob die Seite liefert — nicht Ihr Verhalten auf fremden Domains profilieren. Fotos für Profile gibt es bei uns nicht: Wir bekommen sie für die Verarbeitung nicht.',
      },
      {
        heading: 'Lokale Einstellungen im Browser',
        content:
          'Kleine Oberflächeneinstellungen — Sprache, Erscheinungsbild, Standardqualität — können im Browser liegen, damit Sie nicht jedes Mal neu einstellen müssen. Sie bleiben dort, bis Sie sie löschen.',
      },
      {
        heading: 'Ihre Rechte',
        content:
          'Je nach Wohnsitz haben Sie Rechte auf Auskunft, Berichtigung, Löschung oder Widerspruch. PicShift hat keine Nutzerkonten: Wir bekommen keine Daten, die Sie als Person erkennbar machen. Schreiben Sie uns: Wir sagen ehrlich, was bei uns existiert und was nicht.',
      },
      {
        heading: 'Projektstand',
        content:
          'PicShift ist gerade ein eigenes Projekt unter picshift.app. Wechseln Betreiber, Hosting oder Rechtslage so, dass sich Privatsphäre spürbar ändert, aktualisieren wir diese Seite — statt so zu tun, als wäre nichts gewesen.',
      },
      {
        heading: 'Änderungen an dieser Erklärung',
        content:
          'Ändert sich dieser Text, passen wir Seite und „Zuletzt aktualisiert“ an. Was feststeht: Bilder werden auf Ihrem Gerät verarbeitet, nicht auf unserem Server.',
      },
      {
        heading: 'Kontakt',
        content:
          'Fragen zum Datenschutz, Korrekturen, Datenanfragen: privacy@picshift.app.',
      },
    ],
    lastUpdated: 'Zuletzt aktualisiert: April 2026',
  },
  tools: {
    'heic-to-jpg': {
      title:
        'HEIC in JPG umwandeln online — iPhone-Fotos im Browser | PicShift',
      description:
        'HEIC in JPG umwandeln, wenn Windows, eine Webseite, ein E-Mail-Anhang oder ein Bewerbungsformular die iPhone-Fotos nicht öffnet. Bis zu 200 Dateien pro Durchlauf, ohne Upload.',
      h1: 'HEIC in JPG umwandeln',
      introText:
        'Wandeln Sie HEIC in JPG um, wenn ein Windows-PC, eine Webseite, ein E-Mail-Programm oder ein Online-Formular die iPhone-Fotos nicht annimmt. JPG öffnet einfach jeder, und die Umwandlung läuft komplett in Ihrem Browser — die Fotos verlassen Ihr Gerät nie.',
      howToSteps: [
        'Ziehen Sie Ihre HEIC-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Ihre Fotos werden sofort in Ihrem Browser konvertiert — nichts wird hochgeladen.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Wie kann ich HEIC online in JPG umwandeln?',
          a: 'Ziehen Sie die HEIC-Dateien vom iPhone in PicShift, behalten Sie JPG als Ausgabeformat und laden Sie sie herunter. Die Umwandlung läuft direkt im Browser — die Dateien werden nicht auf einen Server hochgeladen.',
        },
        {
          q: 'Warum HEIC in JPG umwandeln?',
          a: 'Viele Windows-PCs, Bewerbungs- und Web-Formulare, E-Mail-Programme und Online-Shops öffnen HEIC bis heute nicht zuverlässig. JPG hingegen öffnet jeder. Wenn Sie das Foto an jemanden senden oder in ein System hochladen, das Sie nicht kontrollieren, ist JPG meist die problemlose Wahl.',
        },
        {
          q: 'Was ist das HEIC-Format?',
          a: 'HEIC (High Efficiency Image Container) ist das Standard-Fotoformat auf iPhones seit iOS 11. Die Dateien sind kleiner als JPG bei vergleichbarer Qualität, werden aber außerhalb des Apple-Ökosystems noch nicht überall unterstützt.',
        },
        {
          q: 'Verliere ich Qualität beim Umwandeln in JPG?',
          a: 'Mit der Standard-Einstellung (Qualität 85) ist das JPG am Bildschirm visuell nicht vom HEIC zu unterscheiden. Wer maximale Schärfe für Druck oder Archiv braucht, stellt den Qualitätsregler einfach auf 90–95.',
        },
        {
          q: 'Bleibt die Bildausrichtung und das Aufnahmedatum erhalten?',
          a: 'Ja. PicShift behält die korrekte Drehung bei und respektiert die wichtigsten Metadaten. Wenn Sie EXIF vor dem Teilen entfernen möchten, lassen Sie das Ergebnis durch /de/metadata-remover laufen.',
        },
        {
          q: 'Wie viele HEIC-Fotos kann ich auf einmal umwandeln?',
          a: 'Bis zu 200 Dateien pro Durchlauf direkt im Browser. Bei sehr großen Mengen empfehlen sich Gruppen von 50–100, damit der Browser flüssig bleibt.',
        },
        {
          q: 'Werden meine Fotos auf einen Server hochgeladen?',
          a: 'Nein. PicShift verarbeitet alles im Browser mit WebAssembly — die Fotos verlassen Ihr Gerät nie. Sie können nach dem Laden der Seite sogar offline gehen, das Tool arbeitet weiter.',
        },
        {
          q: 'Was, wenn ich Transparenz oder verlustfreie Qualität brauche?',
          a: 'JPG unterstützt keine Transparenz. Brauchen Sie sie, nutzen Sie /de/heic-to-png (verlustfrei) oder konvertieren in WebP — das vereint Transparenz mit kleinen Dateien.',
        },
      ],
    },
    'heic-to-png': {
      title:
        'HEIC in PNG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie HEIC-Fotos in Ihrem Browser in das PNG-Format. Verlustfreie Qualität, 100% privat, ohne Upload.',
      h1: 'HEIC in PNG konvertieren',
      introText:
        'Konvertieren Sie Ihre iPhone HEIC-Fotos in das verlustfreie PNG-Format. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.',
      howToSteps: [
        'Ziehen Sie Ihre HEIC-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser verlustfrei in PNG konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Warum HEIC in PNG statt JPG konvertieren?',
          a: 'PNG ist ein verlustfreies Format, das heißt, bei der Konvertierung geht keine Qualität verloren. Wählen Sie PNG, wenn Sie perfekte Qualität oder Transparenzunterstützung benoetigen. Wählen Sie JPG für kleinere Dateien.',
        },
        {
          q: 'Sind PNG-Dateien größer als JPG?',
          a: 'Ja, in standardisierten Foto-Workflows sind PNG-Dateien 2- bis 5-mal größer als JPG, da PNG verlustfrei ist. Wenn die Dateigröße wichtiger ist als perfekte Qualität, konvertieren Sie stattdessen in JPG.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'HEIC in WebP Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie HEIC-Fotos in Ihrem Browser in das WebP-Format. Kleinere Dateien, hervorragende Qualität, 100% privat.',
      h1: 'HEIC in WebP konvertieren',
      introText:
        'Konvertieren Sie Ihre iPhone HEIC-Fotos in das moderne WebP-Format. WebP bietet 25-34% kleinere Dateien als JPG bei gleicher Qualität.',
      howToSteps: [
        'Ziehen Sie Ihre HEIC-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in WebP konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Was ist WebP?',
          a: 'WebP ist ein modernes Bildformat, das von Google entwickelt wurde. Es bietet 25-34% kleinere Dateien im Vergleich zu JPG bei gleichwertiger Qualität. WebP wird von allen gängigen Browsern unterstützt (96,5% globale Unterstützung).',
        },
        {
          q: 'Wann sollte ich WebP verwenden?',
          a: 'WebP ist ideal für die Webnutzung -- kleinere Dateien bedeuten schnellere Ladezeiten. Zum Teilen per E-Mail oder Messenger ist JPG universeller kompatibel.',
        },
      ],
    },
    'heif-to-jpg': {
      title:
        'HEIF in JPG umwandeln — Windows, Upload, ohne Upload | PicShift',
      description:
        'HEIF in JPG umwandeln für Windows, Upload-Formulare, E-Mail und ältere Programme, die HEIF nicht zuverlässig öffnen. Alles läuft lokal im Browser, ohne Datei-Upload.',
      h1: 'HEIF in JPG umwandeln',
      introText:
        'Wandeln Sie eine HEIF-Datei in JPG um, wenn Sie eine Version brauchen, die sich unter Windows problemlos öffnet, ein Upload-Formular zuverlässig akzeptiert oder die Sie reibungslos an Kollegen weitergeben können. Die Umwandlung läuft lokal in Ihrem Browser — ohne Datei-Upload auf einen Server.',
      howToSteps: [
        'Ziehen Sie Ihre HEIF-Dateien in den Bereich oben oder klicken Sie zum Auswählen.',
        'Die Dateien werden sofort in Ihrem Browser in JPG umgewandelt.',
        'Passen Sie bei Bedarf die Qualität an und laden Sie einzelne Dateien oder das ganze Paket herunter.',
      ],
      faqs: [
        {
          q: 'Warum HEIF in JPG umwandeln?',
          a: 'Weil JPG sich unter Windows deutlich zuverlässiger öffnet, sich in E-Mails anhängen, auf Websites hochladen oder an Kollegen schicken lässt, deren System HEIF nicht sauber unterstützt.',
        },
        {
          q: 'Sind HEIF und HEIC dasselbe?',
          a: 'HEIF ist die Format-Familie, HEIC ist die bekannteste HEIF-Foto-Variante auf Apple-Geräten. In der Praxis tauchen dieselben Kompatibilitätsprobleme auf, und die Umwandlung in JPG löst beide gleichermaßen.',
        },
        {
          q: 'Wann ist JPG das sicherste Ausgabeformat?',
          a: 'Wenn die Datei an einen Windows-PC, ein Upload-Formular, einen Kundenservice, ein Office-Tool oder eine Person geht, deren Umgebung Sie nicht kontrollieren. JPG bleibt in diesen Fällen das tolerantste Format.',
        },
        {
          q: 'Verliert das Bild bei HEIF → JPG an Qualität?',
          a: 'Ja, JPG ist ein verlustbehaftetes Format. Der Verlust ist aber meist der richtige Kompromiss, wenn Kompatibilität wichtiger ist als das letzte Bit Originaldaten.',
        },
        {
          q: 'Wann lohnt sich es, HEIF zu behalten?',
          a: 'Behalten Sie HEIF, wenn alle Ihre Geräte und Programme das Format schon gut verarbeiten und Sie von der kleineren Dateigröße profitieren wollen. Wandeln Sie in JPG um, sobald ein Upload, eine Weitergabe oder ein bestimmtes Programm Probleme macht.',
        },
      ],
    },
    'webp-to-jpg': {
      title:
        'WebP in JPG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie WebP-Bilder in Ihrem Browser in das JPG-Format. Kostenlos, privat, ohne Upload.',
      h1: 'WebP in JPG konvertieren',
      introText:
        'Konvertieren Sie WebP-Bilder in das universell kompatible JPG-Format. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.',
      howToSteps: [
        'Ziehen Sie Ihre WebP-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in JPG konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Warum WebP in JPG konvertieren?',
          a: 'Obwohl WebP in Browsern weit verbreitet ist, akzeptieren einige aeltere Anwendungen, E-Mail-Clients und Social-Media-Plattformen WebP möglicherweise nicht. JPG ist das universell kompatibelste Bildformat.',
        },
      ],
    },
    'webp-to-png': {
      title:
        'WebP in PNG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie WebP-Bilder in Ihrem Browser in das verlustfreie PNG-Format. Kostenlos, privat, ohne Upload.',
      h1: 'WebP in PNG konvertieren',
      introText:
        'Konvertieren Sie WebP-Bilder in das verlustfreie PNG-Format. Perfekt, wenn Sie Transparenz oder verlustfreie Qualität benoetigen.',
      howToSteps: [
        'Ziehen Sie Ihre WebP-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser verlustfrei in PNG konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Geht bei der Konvertierung von WebP in PNG Qualität verloren?',
          a: 'Nein. PNG ist ein verlustfreies Format, daher wird bei der Konvertierung jedes Pixel der WebP-Quelle erhalten. Die resultierende PNG-Datei ist größer, aber qualitativ identisch.',
        },
      ],
    },
    'png-to-jpg': {
      title: 'PNG in JPG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie PNG-Bilder in Ihrem Browser in das JPG-Format. Reduzieren Sie die Dateigröße bei hervorragender Qualität.',
      h1: 'PNG in JPG konvertieren',
      introText:
        'Konvertieren Sie PNG-Bilder in JPG, um die Dateigröße zu reduzieren. Ideal für Fotos, die als PNG gespeichert wurden und keine Transparenz benoetigen.',
      howToSteps: [
        'Ziehen Sie Ihre PNG-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in JPG konvertiert.',
        'Passen Sie den Qualitätsregler an, um Größe und Qualität auszubalancieren.',
      ],
      faqs: [
        {
          q: 'Geht die Transparenz verloren?',
          a: 'Ja. JPG unterstützt keine Transparenz. Transparente Bereiche in Ihrem PNG werden weiß dargestellt. Wenn Sie Transparenz benoetigen, behalten Sie Ihr Bild als PNG oder konvertieren Sie es in WebP.',
        },
      ],
    },
    'jpg-to-png': {
      title:
        'JPG in PNG umwandeln online — verlustfrei, im Stapel | PicShift',
      description:
        'JPG in PNG umwandeln, wenn Sie eine verlustfreie Datei zum Bearbeiten, Beschriften oder erneuten Export brauchen. Bis zu 200 Dateien pro Durchlauf, lokal im Browser — kein Upload.',
      h1: 'JPG in PNG umwandeln',
      introText:
        'Wandeln Sie ein JPG in PNG um, wenn Sie das Bild noch bearbeiten, zuschneiden oder beschriften möchten und nicht wollen, dass jeder neue Export weitere Qualität kostet. PNG behält die Pixel verlustfrei — es kann verlorene Details aus dem JPG nicht zurückholen, verhindert aber zusätzliche Verschlechterung.',
      howToSteps: [
        'Ziehen Sie Ihre JPG-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in PNG konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Wie kann ich JPG in PNG online umwandeln?',
          a: 'Ziehen Sie die JPG-Dateien in PicShift, behalten Sie PNG als Ausgabeformat und laden Sie sie herunter. Die Umwandlung läuft komplett im Browser, mit Stapelverarbeitung (bis zu 200 Dateien pro Durchlauf) und ohne Upload.',
        },
        {
          q: 'Verbessert die Konvertierung von JPG in PNG die Qualität?',
          a: 'Nein. Die Konvertierung stellt keine verlorene Qualität wieder her. Aber sie verhindert, dass beim nächsten Speichern weitere Qualität verloren geht — das ist nützlich, wenn Sie das Bild bearbeiten oder beschriften wollen.',
        },
        {
          q: 'Warum JPG in PNG umwandeln?',
          a: 'Meistens, um ein Bild stabiler bearbeiten zu können. PNG ist verlustfrei, d.h. wiederholtes Speichern führt nicht zu weiterer Verschlechterung. Auch wenn Transparenz nötig ist, ist PNG die bessere Wahl.',
        },
        {
          q: 'Wird die PNG-Datei größer als das JPG?',
          a: 'Ja, in den meisten Fällen deutlich größer. PNG speichert mehr Bilddaten und komprimiert weniger aggressiv. Das ist normal, wenn Ihnen Bearbeitungsstabilität wichtiger ist als Dateigröße.',
        },
        {
          q: 'Wann ist JPG die bessere Wahl?',
          a: 'Wenn Sie einfach eine kleinere Datei zum Teilen, Hochladen oder Versenden brauchen und keine Transparenz oder verlustfreie Bearbeitung benötigen.',
        },
        {
          q: 'Kann ich mehrere JPG gleichzeitig umwandeln?',
          a: 'Ja. PicShift verarbeitet bis zu 200 Dateien pro Stapel direkt im Browser. Bei sehr großen Aufträgen empfehlen wir Gruppen von 50–100, damit der Browser flüssig bleibt.',
        },
        {
          q: 'Werden meine Dateien auf einen Server hochgeladen?',
          a: 'Nein. Alles läuft im Browser über WebAssembly. Sie können nach dem Laden der Seite sogar offline gehen — das Tool arbeitet weiter.',
        },
      ],
    },
    'jpg-to-webp': {
      title:
        'JPG in WebP Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie JPG-Bilder in Ihrem Browser in das WebP-Format. Kleinere Dateien, gleiche Qualität, 100% privat.',
      h1: 'JPG in WebP konvertieren',
      introText:
        'Konvertieren Sie JPG-Bilder in das moderne WebP-Format für 25-34% kleinere Dateien bei gleicher visueller Qualität.',
      howToSteps: [
        'Ziehen Sie Ihre JPG-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in WebP konvertiert.',
        'Passen Sie den Qualitätsregler an, um Größe und Qualität auszubalancieren.',
      ],
      faqs: [
        {
          q: 'Wie viel kleiner ist WebP im Vergleich zu JPG?',
          a: 'WebP ist bei gleicher visueller Qualität in Benchmark-Vergleichen 25-34% kleiner als JPG. Ein 1 MB großes JPG wird als WebP zu 650-750 KB, ohne sichtbaren Unterschied.',
        },
      ],
    },
    'avif-to-jpg': {
      title:
        'AVIF in JPG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie AVIF-Bilder in Ihrem Browser in das JPG-Format. Kostenlos, privat, ohne Upload.',
      h1: 'AVIF in JPG konvertieren',
      introText:
        'Konvertieren Sie AVIF-Bilder in das universell kompatible JPG-Format. Die gesamte Verarbeitung erfolgt lokal.',
      howToSteps: [
        'Ziehen Sie Ihre AVIF-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in JPG konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Was ist AVIF?',
          a: 'AVIF ist ein Bildformat der nächsten Generation, das auf dem AV1-Videocodec basiert. Es bietet eine bessere Komprimierung als JPG und WebP, aber die Unterstützung waechst noch.',
        },
      ],
    },
    'avif-to-png': {
      title:
        'AVIF in PNG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie AVIF-Bilder in Ihrem Browser in das verlustfreie PNG-Format. Kostenlos, privat, ohne Upload.',
      h1: 'AVIF in PNG konvertieren',
      introText:
        'Konvertieren Sie AVIF-Bilder in das verlustfreie PNG-Format. Perfekt, um maximale Qualität zu erhalten.',
      howToSteps: [
        'Ziehen Sie Ihre AVIF-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser verlustfrei in PNG konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Warum AVIF in PNG konvertieren?',
          a: 'AVIF wird in einigen Anwendungen nur eingeschraenkt unterstützt. Die Konvertierung in PNG gibt Ihnen ein verlustfreies, universell kompatibles Format, das ueberall funktioniert.',
        },
      ],
    },
    'image-resizer': {
      title:
        'Bildgröße ändern online — Bilder skalieren ohne Upload | PicShift',
      description:
        'Bildgröße ändern im Browser: für Instagram (1080×1080), Online-Shop, Bewerbungsformulare oder E-Mail. Presets oder exakte Pixelmaße. Bis zu 200 Dateien pro Durchlauf, kein Upload.',
      h1: 'Bildgröße ändern',
      introText:
        'Bildgröße oder Auflösung ändern, wenn ein Portal feste Pixel vorgibt, ein soziales Netzwerk ein 1080×1080-Quadrat verlangt oder ein Screenshot einfach zu groß für ein Formular ist. Wählen Sie eine Voreinstellung oder exakte Werte — die Verarbeitung bleibt lokal im Browser, ohne Upload.',
      howToSteps: [
        'Ziehen Sie Ihre Bilder in den Bereich oben, oder klicken Sie zum Durchsuchen.',
        'Wählen Sie eine Größenvoreinstellung oder geben Sie benutzerdefinierte Abmessungen ein.',
        'Wählen Sie Ausgabeformat und Qualität, dann laden Sie herunter.',
      ],
      faqs: [
        {
          q: 'Wie kann ich die Bildgröße ändern, ohne ein Programm zu installieren?',
          a: 'Ziehen Sie das Bild in PicShift, wählen Sie eine Voreinstellung oder geben Sie im Modus „Benutzerdefiniert" Breite und Höhe ein, dann laden Sie das Ergebnis herunter. Alles passiert im Browser, ohne dass die Datei an einen Server geht.',
        },
        {
          q: 'Welche Pixelmaße brauche ich für Instagram, Facebook oder soziale Netzwerke?',
          a: 'Für quadratische Instagram-Posts 1080×1080. Für Facebook-Titelbilder 1200×630. Für Stories oder Reels im Hochformat 1080×1920. Im Modus „Benutzerdefiniert" geben Sie die exakten Pixel ein und laden das Bild sofort herunter.',
        },
        {
          q: 'Was ist der Unterschied zwischen Skalieren und Auflösung ändern?',
          a: 'Hier meinen wir dasselbe: Sie setzen neue Breite und Höhe in Pixeln (oder einen Prozentwert), damit die Datei weniger Pixel enthält. Das senkt meist stärker das Dateigewicht als reine Kompression.',
        },
        {
          q: 'Kann ich auch WebP-Bilder verkleinern oder die Größe ändern?',
          a: 'Ja. WebP-Dateien können Sie wie JPG oder PNG einfügen und dann Preset oder eigene Pixelwerte wählen. Bei Bedarf ändern Sie im selben Schritt noch das Ausgabeformat.',
        },
        {
          q: 'Welche Größenvoreinstellungen sind verfügbar?',
          a: 'PicShift bietet Max 1920px (lange Seite), Max 1080px, 50% Skalierung und einen benutzerdefinierten Modus für exakte Pixel-Abmessungen oder Prozentangaben.',
        },
        {
          q: 'Verringert das Skalieren die Bildqualität?',
          a: 'Die Verkleinerung verwendet hochwertige Neuabtastung. Sie können auch den Qualitätsregler anpassen, um die Komprimierung zu steuern.',
        },
        {
          q: 'Kann ich gleichzeitig skalieren und das Format konvertieren?',
          a: 'Ja. Sie können sowohl das Ausgabeformat (JPG, PNG, WebP, AVIF) als auch die Abmessungen in einem Schritt ändern. Wenn Sie primär Dateigröße sparen möchten, nutzen Sie zusätzlich /de/image-compressor.',
        },
        {
          q: 'Werden meine Bilder auf einen Server hochgeladen?',
          a: 'Nein. Alles läuft direkt in Ihrem Browser mit WebAssembly. Sie können sogar offline gehen, nachdem die Seite geladen ist — die Skalierung funktioniert weiter.',
        },
      ],
    },
    'image-compressor': {
      title:
        'Bildkomprimierer Kostenlos - Dateigröße online reduzieren | PicShift',
      description:
        'Komprimieren Sie Bilder in Ihrem Browser. Reduzieren Sie die Größe von JPG-, PNG-, WebP-, HEIC- und AVIF-Dateien bei hoher Qualität. 100% privat, ohne Upload.',
      h1: 'Bilder komprimieren',
      introText:
        'Reduzieren Sie die Dateigröße Ihrer Bilder bei gleichbleibender visueller Qualität. Passen Sie den Qualitätsregler an, um die perfekte Balance zu finden.',
      howToSteps: [
        'Ziehen Sie Ihre Bilder in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Passen Sie den Qualitätsregler an, um den Komprimierungsgrad zu steuern.',
        'Klicken Sie auf Herunterladen, um die komprimierten Bilder zu speichern.',
      ],
      faqs: [
        {
          q: 'Wie stark kann ich meine Bilder komprimieren?',
          a: 'Das hängt vom Ausgangsbild ab. Eine Qualitätseinstellung von 80% reduziert die Größe von JPG-Dateien typischerweise um 40-60% bei minimalem sichtbarem Unterschied. Nutzen Sie die Vergleichsansicht, um die Qualität vor dem Herunterladen zu überprüfen.',
        },
        {
          q: 'Welche Formate kann ich komprimieren?',
          a: 'Sie können JPG-, PNG-, WebP-, HEIC- und AVIF-Bilder komprimieren. Das Ausgabeformat kann JPG, PNG, WebP oder AVIF sein.',
        },
      ],
    },
    'metadata-remover': {
      title: 'Bild-Metadaten entfernen — EXIF, GPS, Kameradaten löschen | PicShift',
      description:
        'Entfernen Sie EXIF-, GPS-Standort-, Kameramodell- und andere Metadaten aus JPG-, PNG-, WebP-, HEIC- und AVIF-Bildern. Läuft lokal in Ihrem Browser — nichts wird hochgeladen.',
      h1: 'Bild-Metadaten entfernen',
      introText:
        'Entfernen Sie versteckte Metadaten aus Ihren Fotos, bevor Sie sie teilen. Fotos von Smartphones und Kameras enthalten standardmäßig GPS-Koordinaten, Gerätemodell, Aufnahmedatum und Software-Tags. Dieses Tool entfernt alles lokal in Ihrem Browser — das Bild verlässt nie Ihr Gerät.',
      howToSteps: [
        'Ziehen Sie Ihre Bilder in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Metadaten werden sofort in Ihrem Browser entfernt — nichts wird hochgeladen.',
        'Klicken Sie auf Herunterladen, um die bereinigten Bilder zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Welche Metadaten werden entfernt?',
          a: 'Alle EXIF-Daten werden entfernt, einschließlich GPS-Koordinaten, Kamerahersteller und -modell, Objektivinformationen, Zeitstempel, Software-Tags und eingebettete Vorschaubilder. Das resultierende Bild enthält keine eingebetteten Metadaten.',
        },
        {
          q: 'Beeinflusst das Entfernen von Metadaten die Bildqualität?',
          a: 'Nein. Das Entfernen von Metadaten löscht nur die nicht-visuellen Daten, die in der Datei eingebettet sind. Der Pixelinhalt Ihres Bildes bleibt identisch.',
        },
        {
          q: 'Warum sollte ich Metadaten vor dem Teilen entfernen?',
          a: 'Fotos von Smartphones und Kameras enthalten versteckte Daten wie Ihren genauen GPS-Standort, das Gerätemodell und die Aufnahmezeit. Das Entfernen der Metadaten schützt Ihre Privatsphäre beim Teilen von Bildern in sozialen Netzwerken oder mit anderen Personen.',
        },
        {
          q: 'Warum ist die bereinigte JPG-Datei größer als die ursprüngliche HEIC- oder HEIF-Datei?',
          a: 'HEIC und HEIF sind auf starke Kompression ausgelegt; die Originale sind oft deutlich kleiner als ein typisches JPG. Im Browser exportiert PicShift bereinigte HEIC/HEIF als JPG, weil ein zuverlässiger Download im gleichen Format noch kaum möglich ist. Eine größere JPG-Datei ist deshalb normal und kein Zeichen dafür, dass die Bereinigung fehlgeschlagen ist. JPG, PNG, WebP und AVIF laden Sie weiterhin im gleichen Format wie die Eingabe herunter. Wenn Ihnen die Dateigröße wichtiger ist als maximale Kompatibilität, behalten Sie nach Möglichkeit die HEIC/HEIF-Originale oder nutzen Sie dort, wo es passt, ein moderneres Format, das Ihre Tools unterstützen (z. B. AVIF).',
        },
        {
          q: 'Welche Bildformate werden unterstützt?',
          a: 'JPG, PNG, WebP, HEIC, HEIF und AVIF. JPG, PNG, WebP und AVIF werden im gleichen Format heruntergeladen; bereinigte HEIC/HEIF erhalten Sie als JPG.',
        },
      ],
      detailSections: [
        {
          title: 'Geltungsbereich und Grenzen',
          body: 'Dieses Tool entfernt Metadaten, die in der Datei selbst eingebettet sind. Die sichtbaren Pixel des Bildes werden nicht veraendert. Es hilft also gegen versteckte Datenlecks, nicht gegen Inhalte, die bereits im Bild zu sehen sind.',
          items: [
            'Es kann GPS-Daten, Geraetemodell, Aufnahmezeit und Software-Tags entfernen, aber keine Gesichter, Kennzeichen, Wasserzeichen oder Texte loeschen, die bereits im Bild sichtbar sind.',
            'JPG, PNG, WebP und AVIF werden im gleichen Format heruntergeladen. Bereinigte HEIC- und HEIF-Dateien werden als JPG ausgeliefert, weil der Browser sie derzeit noch nicht verlaesslich als HEIC oder HEIF zurueckschreiben kann.',
            'Einige Apps und Plattformen entfernen nach dem Upload einen Teil der Metadaten, aber dieses Verhalten ist uneinheitlich und kann sich jederzeit ändern. Am sichersten ist es, die Datei selbst vor der weiteren Nutzung zu bereinigen.',
          ],
        },
        {
          title: 'So entfernen Sie Metadaten aus Bildern',
          body: 'Der Ablauf ist einfach: erst pruefen, dann bereinigen und anschließend bei Bedarf die bereinigte Version verwenden.',
          items: [
            'Legen Sie das Bild im Tool ab und schauen Sie sich zuerst an, welche Informationen die Datei tatsaechlich enthält.',
            'Wenn nur Breite, Höhe oder Farbraum angezeigt werden, sehen Sie 0 sensible Daten. Falls GPS, Geraetedetails oder Zeitstempel enthalten sind, werden diese als sensibel markiert.',
            'Laden Sie die bereinigte Datei herunter und verwenden Sie diese Version, wenn Sie sie speichern, versenden, hochladen oder einfach behalten moechten.',
          ],
        },
      ],
    },
  },
}

export default de
