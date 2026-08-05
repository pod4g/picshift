import type { PageTranslations } from '../config'

const de: PageTranslations = {
  home: {
    title:
      'PicShift | Kostenloser Bildkonverter auf Deutsch, ohne Anmeldung',
    description:
      'Bilder lokal im Browser konvertieren — ohne Upload oder Anmeldung. HEIC in JPG, WebP in PNG, AVIF und mehr; erfolgreich geladene Abläufe sind offline wiederverwendbar.',
  },
  privacy: {
    title: 'Datenschutzerklärung — Lokale Bildverarbeitung | PicShift',
    description:
      'Konvertieren, Komprimieren, Größe ändern oder Metadaten streichen passiert auf Ihrem Gerät — wir laden keine Bilder hoch. Unten steht, welche Zugriffsdaten die Website sieht.',
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
          'Verfügbarkeit und Aufbewahrung der Analysedaten richten sich nach den aktuellen Richtlinien des jeweiligen Anbieters und der aktiven PicShift-Kontokonfiguration; hier veröffentlichen wir keine feste Löschfrist',
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
    lastUpdated: 'Zuletzt aktualisiert: August 2026',
  },
  tools: {
    'heic-to-jpg': {
      title:
        'HEIC in JPG umwandeln online — iPhone-Fotos im Browser | PicShift',
      description:
        'HEIC in JPG umwandeln, wenn Windows, eine Webseite, ein E-Mail-Anhang oder ein Bewerbungsformular die iPhone-Fotos nicht öffnet. Bis zu 200 Dateien pro Durchlauf, ohne Upload.',
      h1: 'HEIC in JPG umwandeln',
      introText:
        'Wandeln Sie HEIC in JPG um, wenn Windows, eine Webseite, E-Mail oder ein Formular die Fotos nicht annimmt. Die Konvertierung läuft im Browser; Quellbilder werden dafür nicht auf einen Konvertierungsserver hochgeladen.',
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
          a: 'JPG nutzt verlustbehaftete Kompression. Qualität 85 ist ein Ausgangspunkt; Darstellung und Größe hängen vom Foto ab. Prüfen Sie Details und passen Sie den Regler vor dem Download an.',
        },
        {
          q: 'Bleibt die Bildausrichtung und das Aufnahmedatum erhalten?',
          a: 'PicShift kodiert die sichtbaren Pixel neu und garantiert nicht, Ausrichtung oder Aufnahmedatum als Metadaten beizubehalten. Es kopiert Aufnahmedatum, GPS und andere EXIF-Metadaten nicht absichtlich in die neue JPG-Datei. Prüfen Sie die Vorschau vor dem Download; wenn Sie das ursprüngliche Datum benötigen, bewahren Sie es separat auf, und untersuchen Sie für eine Datenschutzprüfung die Datei oder verwenden /de/metadata-remover.',
        },
        {
          q: 'Wie viele HEIC-Fotos kann ich auf einmal umwandeln?',
          a: 'Bis zu 200 Dateien pro Durchlauf direkt im Browser. Bei sehr großen Mengen empfehlen sich Gruppen von 50–100, damit der Browser flüssig bleibt.',
        },
        {
          q: 'Werden meine Fotos auf einen Server hochgeladen?',
          a: 'Nein. PicShift verarbeitet alles im Browser mit WebAssembly; für die Konvertierung wird kein Bild hochgeladen. Für einen Offline-Test führen Sie genau diesen Ablauf zuerst online erfolgreich aus, trennen dann die Verbindung, laden dieselbe Seite neu und wiederholen ihn mit einem Testbild.',
        },
        {
          q: 'Was, wenn ich Transparenz oder verlustfreie Qualität brauche?',
          a: 'JPG unterstützt keine Transparenz. Nutzen Sie dafür /de/heic-to-png oder WebP. Auf der PNG-Seite bleiben bei Qualität 95–100 die dekodierten Pixel erhalten und nur OxiPNG arbeitet verlustfrei; unter 95 kann die Palettenquantisierung verlustbehaftet sein.',
        },
      ],
    },
    'heic-to-png': {
      title:
        'HEIC in PNG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'HEIC in PNG im Browser konvertieren. Qualität 100 als Standard; Quellbilder werden nicht zur Konvertierung hochgeladen. Limits: 50 MB, 200 Dateien und 1 GB pro Stapel.',
      h1: 'HEIC in PNG konvertieren',
      introText:
        'HEIC in PNG konvertieren. Standard ist Qualität 100; bei 95–100 wird nur verlustfrei mit OxiPNG optimiert, unter 95 kann die Palettenquantisierung verlustbehaftet sein.',
      howToSteps: [
        'Ziehen Sie Ihre HEIC-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden im Browser in PNG konvertiert; Einstellung prüfen und Ausgabe vergleichen.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Warum HEIC in PNG statt JPG konvertieren?',
          a: 'PNG unterstützt Transparenz. Bei Qualität 95–100 bleiben die dekodierten Pixel erhalten und nur OxiPNG optimiert verlustfrei; unter 95 kann die Palettenquantisierung Verluste einführen.',
        },
        {
          q: 'Sind PNG-Dateien größer als JPG?',
          a: 'PNG kann größer als JPG sein, aber es gibt keinen festen Faktor. Das Ergebnis hängt vom Bild und der PNG-Einstellung ab; vergleichen Sie Größe und Darstellung.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'HEIC in WebP Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'HEIC in WebP im Browser konvertieren. Größe und Qualität hängen von Quelle und Einstellungen ab; Quellbilder werden dafür nicht hochgeladen.',
      h1: 'HEIC in WebP konvertieren',
      introText:
        'iPhone-HEIC-Fotos in WebP konvertieren und die tatsächliche Qualität und Größe vergleichen. Das Ergebnis hängt von Quelle, Einstellungen und Zielumgebung ab.',
      howToSteps: [
        'Ziehen Sie Ihre HEIC-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in WebP konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Was ist WebP?',
          a: 'WebP ist ein von Google entwickeltes Bildformat mit verlustbehafteter und verlustfreier Kompression. Je nach Quelle und Einstellungen kann es kleiner als JPG sein; eine feste Einsparung gibt es nicht. Ausgabe vergleichen und Zielunterstützung prüfen.',
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
        'WebP in JPG umwandeln online — kompatibel, ohne Upload | PicShift',
      description:
        'Wandle WebP-Dateien in JPG um, wenn eine App, eine E-Mail oder ein Formular WebP nicht akzeptiert. Stapelumwandlung direkt im Browser, ohne Upload zu einem Server und ohne Anmeldung.',
      h1: 'WebP in JPG umwandeln',
      introText:
        'Wandle WebP-Bilder in JPG um, wenn du eine Datei brauchst, die sich überall öffnen, anhängen und hochladen lässt. JPG bleibt das pragmatischste Format für E-Mail, Office-Programme und ältere Upload-Formulare, die mit WebP nichts anfangen können.',
      howToSteps: [
        'Ziehe deine WebP-Dateien in den Bereich oben oder klicke zum Auswählen.',
        'Lass JPG als Ausgabeformat — die Umwandlung läuft sofort im Browser.',
        'Klicke auf Herunterladen für einzelne Dateien oder auf Alle herunterladen für einen ZIP-Stapel.',
      ],
      faqs: [
        {
          q: 'Wie wandle ich eine WebP-Datei in JPG um?',
          a: 'Zieh die WebP-Datei in den Bereich oben, lass JPG als Ausgabeformat eingestellt und klicke auf Herunterladen. Das ist der schnellste Weg, wenn eine Plattform WebP ablehnt oder du einfach eine kompatiblere Version zum Versenden brauchst — alles passiert im Browser, ohne Upload.',
        },
        {
          q: 'Warum WebP in JPG umwandeln?',
          a: 'WebP funktioniert in Browsern hervorragend, aber außerhalb des Webs scheitern noch immer einige ältere Anwendungen, E-Mail-Programme, Office-Tools und Upload-Formulare daran. Eine Umwandlung in JPG ist meistens die einfachste Lösung und du bekommst eine Datei, die jedes Programm öffnet.',
        },
        {
          q: 'Wie speichere ich WebP als JPG?',
          a: 'Statt im Bild „Speichern unter" zu suchen (nicht jeder Browser bietet das an), zieh die Datei einfach hier rein, wähl JPG und klicke auf Download. Das funktioniert auf Windows, Mac, Linux, ChromeOS und auch auf dem Smartphone gleich.',
        },
        {
          q: 'Verliert WebP zu JPG an Qualität?',
          a: 'WebP und JPG können verlustbehaftet sein; die Neukodierung kann Details verändern. Beginnen Sie bei 85–90, vergleichen Sie und passen Sie an. Bei PNG nutzt Qualität 95–100 nur verlustfreies OxiPNG, unter 95 kann quantisiert werden.',
        },
        {
          q: 'Kann die JPG-Datei größer werden als das WebP-Original?',
          a: 'Ja, kann passieren. WebP komprimiert effizienter als JPG, daher kann die Ausgabedatei nach der Umwandlung etwas größer sein, besonders bei hohen Auflösungen. Wenn das stört, hänge unseren <a href="/de/image-compressor">Bildkompressor</a> hinten dran und du bekommst beides — Kompatibilität und kleine Dateigröße.',
        },
        {
          q: 'Kann ich mehrere WebP-Dateien gleichzeitig umwandeln?',
          a: 'Ja. Bis zu 200 Dateien pro Stapel werden im Browser verarbeitet und einzeln oder als ZIP heruntergeladen. Leistung und Dauer hängen von Gerät und Bildern ab.',
        },
        {
          q: 'Wann ist PNG die bessere Wahl als JPG?',
          a: 'PNG ist für Transparenz oder Bearbeitung sinnvoll. Nutzen Sie Qualität 95–100, um verlustbehaftete Palettenquantisierung zu vermeiden; darunter kann quantisiert werden. Für reine Kompatibilität kann JPG praktischer sein.',
        },
      ],
    },
    'webp-to-png': {
      title:
        'WebP in PNG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'WebP in PNG im Browser konvertieren, mit Qualität 100 als Standard und ohne Upload der Quellbilder zur Konvertierung.',
      h1: 'WebP in PNG konvertieren',
      introText:
        'WebP in PNG für Transparenz oder Bearbeitung konvertieren. Bei 95–100 arbeitet nur OxiPNG verlustfrei; unter 95 kann Palettenquantisierung verlustbehaftet sein.',
      howToSteps: [
        'Ziehen Sie Ihre WebP-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden im Browser in PNG konvertiert; Einstellung prüfen und Ausgabe vergleichen.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Geht bei der Konvertierung von WebP in PNG Qualität verloren?',
          a: 'Bei Qualität 95–100 bleiben die dekodierten Pixel erhalten und PicShift nutzt nur verlustfreies OxiPNG. Unter 95 kann Palettenquantisierung Verluste einführen. Die Dateigröße hängt vom Bild ab.',
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
        'JPG in PNG umwandeln online — Qualität einstellbar, im Stapel | PicShift',
      description:
        'JPG in PNG zum Bearbeiten oder Beschriften umwandeln. Qualität 100 als Standard, bis zu 200 Dateien pro Durchlauf, ohne Upload der Quellbilder.',
      h1: 'JPG in PNG umwandeln',
      introText:
        'JPG in PNG zum Bearbeiten, Zuschneiden oder Beschriften umwandeln. Verlorene JPG-Details kommen nicht zurück. Bei Qualität 95–100 arbeitet nur OxiPNG verlustfrei; unter 95 kann die Quantisierung Verluste einführen.',
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
          a: 'Nein. Verlorene JPG-Details werden nicht wiederhergestellt. Bei PNG-Qualität 95–100 kommt keine verlustbehaftete Quantisierung hinzu; unter 95 kann sie eingesetzt werden. Vergleichen Sie die Ausgabe.',
        },
        {
          q: 'Warum JPG in PNG umwandeln?',
          a: 'Vor allem für Transparenz und Bearbeitung. Verwenden Sie Qualität 95–100, wenn nur die verlustfreie OxiPNG-Optimierung gewünscht ist; niedrigere Werte können Palettenquantisierung aktivieren.',
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
          a: 'Nein. Alles läuft im Browser über WebAssembly. Nachdem genau dieser Ablauf samt Codec online erfolgreich geladen wurde, können Sie die Verbindung trennen, dieselbe Seite neu laden und den Ablauf offline testen. Ein unbenutzter Codec kann weiterhin Netzwerk benötigen.',
        },
      ],
    },
    'jpg-to-webp': {
      title:
        'JPG in WebP Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'JPG in WebP im Browser konvertieren. Größe und Darstellung hängen von Bild und Einstellung ab; Quellbilder werden nicht zur Konvertierung hochgeladen.',
      h1: 'JPG in WebP konvertieren',
      introText:
        'JPG in WebP konvertieren und tatsächliche Qualität und Größe vergleichen; die Einsparung hängt von Quelle und Einstellungen ab.',
      howToSteps: [
        'Ziehen Sie Ihre JPG-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in WebP konvertiert.',
        'Passen Sie den Qualitätsregler an, um Größe und Qualität auszubalancieren.',
      ],
      faqs: [
        {
          q: 'Wie viel kleiner ist WebP im Vergleich zu JPG?',
          a: 'WebP kann bei ähnlicher visueller Qualität kleiner als JPG sein, aber es gibt keinen festen Wert für jedes Bild. Ausgabe vor der Veröffentlichung vergleichen.',
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
        'AVIF in PNG im Browser konvertieren, mit Qualität 100 als Standard und ohne Upload der Quellbilder zur Konvertierung.',
      h1: 'AVIF in PNG konvertieren',
      introText:
        'AVIF in PNG konvertieren. Bei Qualität 95–100 arbeitet nur OxiPNG verlustfrei; unter 95 kann die Palettenquantisierung verlustbehaftet sein.',
      howToSteps: [
        'Ziehen Sie Ihre AVIF-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden im Browser in PNG konvertiert; Einstellung prüfen und Ausgabe vergleichen.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen für eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Warum AVIF in PNG konvertieren?',
          a: 'PNG kann in Anwendungen funktionieren, die AVIF nicht unterstützen; prüfen Sie die Zielumgebung. Qualität 95–100 beschränkt die Verarbeitung auf verlustfreies OxiPNG.',
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
          a: 'Nein. Alles läuft direkt im Browser mit WebAssembly. Nachdem dieser Resize-Ablauf und sein Codec online erfolgreich geladen wurden, können Sie dieselbe Seite offline neu laden und den Ablauf testen. Ein neuer Ausgabe-Codec kann weiterhin Netzwerk benötigen.',
        },
      ],
    },
    'image-compressor': {
      title:
        'Bildkomprimierer online — kostenlos, im Stapel, ohne Upload | PicShift',
      description:
        'Bilder kostenlos komprimieren: JPG, PNG, WebP, HEIC und AVIF lokal im Browser verkleinern — vor E-Mail, Anhang oder Upload. Bis zu 200 Dateien pro Stapel, ohne Server.',
      h1: 'Bilder kostenlos komprimieren',
      introText:
        'Verkleinere Bilddateien für Anhänge oder Formulare und vergleiche Darstellung und Größe vor dem Download. Das Ergebnis hängt von Bild, Format und Einstellung ab.',
      howToSteps: [
        'Ziehe deine Bilder in den Bereich oben oder klicke zum Auswählen.',
        'Passe den Qualitätsregler an, um die Stärke der Komprimierung zu steuern.',
        'Klicke auf Herunterladen, um die komprimierten Bilder einzeln zu speichern, oder auf Alle herunterladen für einen ZIP-Stapel.',
      ],
      faqs: [
        {
          q: 'Wie wähle ich die Qualität beim Komprimieren?',
          a: 'Ziehe die Datei hinein, starte bei Qualität 80–85 und prüfe die Vergleichsansicht. Das ist nur ein Ausgangsbereich: sichtbare Details und Dateigröße hängen vom Bild ab. Ändere den Wert in kleinen Schritten.',
        },
        {
          q: 'Wie stark lassen sich meine Bilder komprimieren?',
          a: 'Das hängt vollständig vom Ausgangsmaterial ab. Qualität 80 ist ein Startwert, kein garantierter Prozentsatz. Fotos, Screenshots, Logos und Grafiken reagieren unterschiedlich; vergleiche Größe und wichtige Details und erwäge für scharfe Grafik PNG oder WebP.',
        },
        {
          q: 'Wie komprimiere ich Fotos für eine E-Mail (Gmail, Outlook)?',
          a: 'Prüfe das aktuelle Limit des Maildienstes und die endgültige Anhangsgröße. Starte bei Qualität 80, vergleiche und reduziere bei Bedarf zusätzlich die Abmessungen; kein Qualitätswert garantiert eine bestimmte Größe.',
        },
        {
          q: 'Kann ich viele Bilder gleichzeitig komprimieren?',
          a: 'Ja, bis zu 200 Dateien pro Durchgang. Bei sehr großen Stapeln, wenn der Browser träge wird, einfach in kleineren Gruppen verarbeiten und zwischendurch herunterladen. Da alles lokal läuft, gibt es keine Warteschlange auf dem Server.',
        },
        {
          q: 'Welche Formate kann ich komprimieren?',
          a: 'Eingang: JPG, PNG, WebP, HEIC und AVIF. Ausgang: JPG, PNG, WebP oder AVIF. Wähle nach Zielkompatibilität und vergleiche Größe und Darstellung; kein Format ist immer am kleinsten.',
        },
        {
          q: 'Komprimieren oder Größe ändern — was bringt mehr?',
          a: 'Wenn die Abmessungen größer als für das Ziel nötig sind, kann Skalieren mehr sparen als reine Neukodierung. Sind sie bereits passend, teste nur Komprimierung. Richte beide Werte am Ziel aus und vergleiche.',
        },
        {
          q: 'Werden meine Bilder hochgeladen?',
          a: 'Quellbilder werden im Browser verarbeitet und nicht zur Komprimierung hochgeladen. Üblicher Website-Traffic und Analysesignale sind in der Datenschutzerklärung beschrieben; ein Konto ist nicht nötig.',
        },
      ],
    },
    'metadata-remover': {
      title: 'Bild-Metadaten entfernen — EXIF, GPS, Kameradaten löschen | PicShift',
      description:
        'Entfernen Sie EXIF-, GPS-Standort-, Kameramodell- und andere Metadaten aus JPG-, PNG-, WebP-, HEIC- und AVIF-Bildern. Läuft lokal in Ihrem Browser — nichts wird hochgeladen.',
      h1: 'Bild-Metadaten entfernen',
      introText:
        'Prüfen Sie Metadaten vor dem Teilen. PicShift kodiert das Bild im Browser neu, ohne erkannte unterstützte Felder absichtlich zu kopieren; der Inhalt des Quellbilds wird für diesen Vorgang nicht hochgeladen.',
      howToSteps: [
        'Ziehen Sie Ihre Bilder in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Prüfen Sie die lokal erkannten unterstützten Metadatenfelder.',
        'Starten Sie die Neukodierung und laden Sie erfolgreiche Ergebnisse einzeln oder als ZIP herunter.',
      ],
      faqs: [
        {
          q: 'Welche Metadaten werden entfernt?',
          a: 'Der Scan kann GPS-, Kamera-, Objektiv-, Zeit-, Software- und Vorschaudaten erkennen. Bei der Neukodierung werden erkannte Felder nicht absichtlich kopiert; Daten des Browser-Encoders oder Farbprofils können jedoch verbleiben. Prüfen Sie sicherheitskritische Ergebnisse zusätzlich mit einem unabhängigen Tool.',
        },
        {
          q: 'Beeinflusst das Entfernen von Metadaten die Bildqualität?',
          a: 'Das Tool zielt auf nicht sichtbare Daten. Einige Formate müssen neu kodiert werden; vergleichen Sie die Ausgabe, wenn strikte Wiedergabetreue wichtig ist. Das Ergebnis hängt vom Quellformat ab.',
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
          body: 'Dieses Tool zielt auf eingebettete Metadaten. Die Neukodierung entfernt keine sichtbaren Objekte oder Texte, kann bei verlustbehafteten Formaten aber Pixelwerte verändern. Sie betrifft versteckte Daten, nicht bereits sichtbare Inhalte.',
          items: [
            'Erkannte Felder können GPS-Daten, Gerätemodell, Aufnahmezeit und Software-Tags umfassen; Gesichter, Kennzeichen, Wasserzeichen oder sichtbare Texte werden nicht entfernt.',
            'JPG, PNG, WebP und AVIF werden im gleichen Format heruntergeladen. Bereinigte HEIC- und HEIF-Dateien werden als JPG ausgeliefert, weil der Browser sie derzeit noch nicht verlaesslich als HEIC oder HEIF zurueckschreiben kann.',
            'Einige Apps und Plattformen entfernen nach dem Upload einen Teil der Metadaten, aber dieses Verhalten ist uneinheitlich und kann sich jederzeit ändern. Am sichersten ist es, die Datei selbst vor der weiteren Nutzung zu bereinigen.',
          ],
        },
        {
          title: 'So entfernen Sie Metadaten aus Bildern',
          body: 'Der Ablauf ist einfach: erst pruefen, dann bereinigen und anschließend bei Bedarf die bereinigte Version verwenden.',
          items: [
            'Legen Sie das Bild im Tool ab und schauen Sie sich zuerst an, welche Informationen die Datei tatsaechlich enthält.',
            'Ein Ergebnis von 0 bedeutet nur, dass kein unterstütztes Feld erkannt wurde, nicht dass jeder mögliche Datenblock fehlt. Erkannte GPS-, Geräte- oder Zeitfelder werden als sensibel markiert.',
            'Laden Sie die bereinigte Datei herunter und verwenden Sie diese Version, wenn Sie sie speichern, versenden, hochladen oder einfach behalten moechten.',
          ],
        },
      ],
    },
  },
}

export default de
