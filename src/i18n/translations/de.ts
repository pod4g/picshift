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
        'HEIC in JPG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie HEIC-Fotos sofort in Ihrem Browser in JPG. 100% privat -- Dateien verlassen nie Ihr Geraet. Kostenlos, ohne Limits, ohne Registrierung.',
      h1: 'HEIC in JPG konvertieren',
      introText:
        'Konvertieren Sie Ihre iPhone HEIC-Fotos sofort in das JPG-Format. Alles geschieht in Ihrem Browser -- Ihre Fotos verlassen nie Ihr Geraet.',
      howToSteps: [
        'Ziehen Sie Ihre HEIC-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Ihre Fotos werden sofort in Ihrem Browser konvertiert -- nichts wird hochgeladen.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen fuer eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Was ist das HEIC-Format?',
          a: 'HEIC (High Efficiency Image Container) ist das Standard-Fotoformat auf iPhones seit iOS 11. Es erzeugt kleinere Dateien als JPG bei gleicher Qualitaet. Allerdings unterstuetzen viele Windows-Anwendungen und Websites HEIC nicht.',
        },
        {
          q: 'Ist es sicher, meine Fotos hier zu konvertieren?',
          a: 'Ja. PicShift verarbeitet alles in Ihrem Browser mit WebAssembly. Ihre Fotos verlassen nie Ihr Geraet -- es werden keine Dateien auf einen Server hochgeladen. Sie koennen dies ueberpruefen, indem Sie die Internetverbindung trennen und den Konverter ausprobieren.',
        },
        {
          q: 'Wie viele Dateien kann ich gleichzeitig konvertieren?',
          a: 'Sie k\u00f6nnen bis zu 200 Dateien auf einmal konvertieren. F\u00fcr beste Leistung bei gro\u00dfen Mengen empfehlen wir 100 oder weniger.',
        },
        {
          q: 'Geht Bildqualitaet verloren?',
          a: 'Die Standard-Qualitaetseinstellung (85%) erzeugt Dateien, die visuell identisch mit dem Original sind. Sie koennen den Qualitaetsregler anpassen -- hoehere Werte bedeuten bessere Qualitaet, aber groessere Dateien.',
        },
      ],
    },
    'heic-to-png': {
      title:
        'HEIC in PNG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie HEIC-Fotos in Ihrem Browser in das PNG-Format. Verlustfreie Qualitaet, 100% privat, ohne Upload.',
      h1: 'HEIC in PNG konvertieren',
      introText:
        'Konvertieren Sie Ihre iPhone HEIC-Fotos in das verlustfreie PNG-Format. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.',
      howToSteps: [
        'Ziehen Sie Ihre HEIC-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser verlustfrei in PNG konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen fuer eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Warum HEIC in PNG statt JPG konvertieren?',
          a: 'PNG ist ein verlustfreies Format, das heisst, bei der Konvertierung geht keine Qualitaet verloren. Waehlen Sie PNG, wenn Sie perfekte Qualitaet oder Transparenzunterstuetzung benoetigen. Waehlen Sie JPG fuer kleinere Dateien.',
        },
        {
          q: 'Sind PNG-Dateien groesser als JPG?',
          a: 'Ja, in standardisierten Foto-Workflows sind PNG-Dateien 2- bis 5-mal groesser als JPG, da PNG verlustfrei ist. Wenn die Dateigroesse wichtiger ist als perfekte Qualitaet, konvertieren Sie stattdessen in JPG.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'HEIC in WebP Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie HEIC-Fotos in Ihrem Browser in das WebP-Format. Kleinere Dateien, hervorragende Qualitaet, 100% privat.',
      h1: 'HEIC in WebP konvertieren',
      introText:
        'Konvertieren Sie Ihre iPhone HEIC-Fotos in das moderne WebP-Format. WebP bietet 25-34% kleinere Dateien als JPG bei gleicher Qualitaet.',
      howToSteps: [
        'Ziehen Sie Ihre HEIC-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in WebP konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen fuer eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Was ist WebP?',
          a: 'WebP ist ein modernes Bildformat, das von Google entwickelt wurde. Es bietet 25-34% kleinere Dateien im Vergleich zu JPG bei gleichwertiger Qualitaet. WebP wird von allen gaengigen Browsern unterstuetzt (96,5% globale Unterstuetzung).',
        },
        {
          q: 'Wann sollte ich WebP verwenden?',
          a: 'WebP ist ideal fuer die Webnutzung -- kleinere Dateien bedeuten schnellere Ladezeiten. Zum Teilen per E-Mail oder Messenger ist JPG universeller kompatibel.',
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
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen fuer eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Warum WebP in JPG konvertieren?',
          a: 'Obwohl WebP in Browsern weit verbreitet ist, akzeptieren einige aeltere Anwendungen, E-Mail-Clients und Social-Media-Plattformen WebP moeglicherweise nicht. JPG ist das universell kompatibelste Bildformat.',
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
        'Konvertieren Sie WebP-Bilder in das verlustfreie PNG-Format. Perfekt, wenn Sie Transparenz oder verlustfreie Qualitaet benoetigen.',
      howToSteps: [
        'Ziehen Sie Ihre WebP-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser verlustfrei in PNG konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen fuer eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Geht bei der Konvertierung von WebP in PNG Qualitaet verloren?',
          a: 'Nein. PNG ist ein verlustfreies Format, daher wird bei der Konvertierung jedes Pixel der WebP-Quelle erhalten. Die resultierende PNG-Datei ist groesser, aber qualitativ identisch.',
        },
      ],
    },
    'png-to-jpg': {
      title: 'PNG in JPG Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie PNG-Bilder in Ihrem Browser in das JPG-Format. Reduzieren Sie die Dateigroesse bei hervorragender Qualitaet.',
      h1: 'PNG in JPG konvertieren',
      introText:
        'Konvertieren Sie PNG-Bilder in JPG, um die Dateigroesse zu reduzieren. Ideal fuer Fotos, die als PNG gespeichert wurden und keine Transparenz benoetigen.',
      howToSteps: [
        'Ziehen Sie Ihre PNG-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in JPG konvertiert.',
        'Passen Sie den Qualitaetsregler an, um Groesse und Qualitaet auszubalancieren.',
      ],
      faqs: [
        {
          q: 'Geht die Transparenz verloren?',
          a: 'Ja. JPG unterstuetzt keine Transparenz. Transparente Bereiche in Ihrem PNG werden weiss dargestellt. Wenn Sie Transparenz benoetigen, behalten Sie Ihr Bild als PNG oder konvertieren Sie es in WebP.',
        },
      ],
    },
    'jpg-to-png': {
      title:
        'JPG in PNG umwandeln online – Stapel, ohne Upload | PicShift',
      description:
        'Wandeln Sie JPG in PNG um, wenn Sie eine verlustfreie Datei zum Bearbeiten, Beschriften oder erneuten Export brauchen. Bis zu 200 Dateien pro Durchlauf, lokal im Browser — kein Upload.',
      h1: 'JPG in PNG konvertieren',
      introText:
        'Wandeln Sie ein JPG-Bild in PNG um, wenn Sie eine Datei brauchen, die sich besser bearbeiten, beschriften oder erneut exportieren laesst. Das verbessert nicht die Ausgangsqualitaet, verhindert aber, dass beim naechsten Speichern weitere Qualitaet verloren geht.',
      howToSteps: [
        'Ziehen Sie Ihre JPG-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in PNG konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen fuer eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Verbessert die Konvertierung von JPG in PNG die Qualitaet?',
          a: 'Nein. Die Konvertierung stellt keine verlorene Qualitaet wieder her. Aber sie verhindert, dass beim naechsten Speichern weitere Qualitaet verloren geht — das ist nuetzlich, wenn Sie das Bild bearbeiten oder beschriften wollen.',
        },
        {
          q: 'Warum JPG in PNG umwandeln?',
          a: 'Meistens, um ein Bild stabiler bearbeiten zu koennen. PNG ist verlustfrei, d.h. wiederholtes Speichern fuehrt nicht zu weiterer Verschlechterung. Auch wenn Transparenz noetig ist, ist PNG die bessere Wahl.',
        },
        {
          q: 'Wird die PNG-Datei groesser als das JPG?',
          a: 'Ja, in den meisten Faellen deutlich groesser. PNG speichert mehr Bilddaten und komprimiert weniger aggressiv. Das ist normal, wenn Ihnen Bearbeitungsstabilitaet wichtiger ist als Dateigroesse.',
        },
        {
          q: 'Wann ist JPG die bessere Wahl?',
          a: 'Wenn Sie einfach eine kleinere Datei zum Teilen, Hochladen oder Versenden brauchen und keine Transparenz oder verlustfreie Bearbeitung benoetigen.',
        },
      ],
    },
    'jpg-to-webp': {
      title:
        'JPG in WebP Konverter - Kostenlos, Privat, Ohne Upload | PicShift',
      description:
        'Konvertieren Sie JPG-Bilder in Ihrem Browser in das WebP-Format. Kleinere Dateien, gleiche Qualitaet, 100% privat.',
      h1: 'JPG in WebP konvertieren',
      introText:
        'Konvertieren Sie JPG-Bilder in das moderne WebP-Format fuer 25-34% kleinere Dateien bei gleicher visueller Qualitaet.',
      howToSteps: [
        'Ziehen Sie Ihre JPG-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser in WebP konvertiert.',
        'Passen Sie den Qualitaetsregler an, um Groesse und Qualitaet auszubalancieren.',
      ],
      faqs: [
        {
          q: 'Wie viel kleiner ist WebP im Vergleich zu JPG?',
          a: 'WebP ist bei gleicher visueller Qualitaet in Benchmark-Vergleichen 25-34% kleiner als JPG. Ein 1 MB grosses JPG wird als WebP zu 650-750 KB, ohne sichtbaren Unterschied.',
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
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen fuer eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Was ist AVIF?',
          a: 'AVIF ist ein Bildformat der naechsten Generation, das auf dem AV1-Videocodec basiert. Es bietet eine bessere Komprimierung als JPG und WebP, aber die Unterstuetzung waechst noch.',
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
        'Konvertieren Sie AVIF-Bilder in das verlustfreie PNG-Format. Perfekt, um maximale Qualitaet zu erhalten.',
      howToSteps: [
        'Ziehen Sie Ihre AVIF-Dateien in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Dateien werden sofort in Ihrem Browser verlustfrei in PNG konvertiert.',
        'Klicken Sie auf Herunterladen, um jede Datei zu speichern, oder auf Alle herunterladen fuer eine ZIP-Datei.',
      ],
      faqs: [
        {
          q: 'Warum AVIF in PNG konvertieren?',
          a: 'AVIF wird in einigen Anwendungen nur eingeschraenkt unterstuetzt. Die Konvertierung in PNG gibt Ihnen ein verlustfreies, universell kompatibles Format, das ueberall funktioniert.',
        },
      ],
    },
    'image-resizer': {
      title:
        'Bildgroesse online aendern – skalieren, ohne Upload | PicShift',
      description:
        'Bildaufloesung oder Kantenlaenge im Browser anpassen: Presets oder eigene Pixelmasse. Auch fuer WebP und Screenshots geeignet. Bis zu 200 Dateien pro Durchlauf, kein Upload.',
      h1: 'Bilder Skalieren',
      introText:
        'Aufloesung und Abmessungen aendern, wenn ein Portal feste Pixel vorgibt oder ein Screenshot zu gross ist. Waehlen Sie eine Voreinstellung oder exakte Werte — die Verarbeitung bleibt lokal im Browser.',
      howToSteps: [
        'Ziehen Sie Ihre Bilder in den Bereich oben, oder klicken Sie zum Durchsuchen.',
        'Wählen Sie eine Größenvoreinstellung oder geben Sie benutzerdefinierte Abmessungen ein.',
        'Wählen Sie Ausgabeformat und Qualität, dann laden Sie herunter.',
      ],
      faqs: [
        {
          q: 'Kann ich auch WebP-Bilder verkleinern oder die Groesse aendern?',
          a: 'Ja. WebP-Dateien koennen Sie wie JPG oder PNG einfuegen und dann Preset oder eigene Pixelwerte waehlen. Bei Bedarf aendern Sie im selben Schritt noch das Ausgabeformat.',
        },
        {
          q: 'Was ist der Unterschied zwischen Skalieren und Aufloesung aendern?',
          a: 'Hier meinen wir dasselbe: Sie setzen neue Breite und Hoehe in Pixeln (oder einen Prozentwert), damit die Datei weniger Pixel enthaelt. Das senkt meist staerker das Dateigewicht als reine Kompression.',
        },
        { q: 'Welche Größenvoreinstellungen sind verfügbar?', a: 'PicShift bietet Max 1920px (lange Seite), Max 1080px, 50% Skalierung und einen benutzerdefinierten Modus für exakte Pixel-Abmessungen oder Prozentangaben.' },
        { q: 'Verringert das Skalieren die Bildqualität?', a: 'Die Verkleinerung verwendet hochwertige Neuabtastung. Sie können auch den Qualitätsregler anpassen, um die Komprimierung zu steuern.' },
        { q: 'Kann ich gleichzeitig skalieren und das Format konvertieren?', a: 'Ja. Sie können sowohl das Ausgabeformat (JPG, PNG, WebP, AVIF) als auch die Abmessungen in einem Schritt ändern. Wenn Sie primär Dateigröße sparen möchten, nutzen Sie zusätzlich /de/image-compressor.' },
      ],
    },
    'image-compressor': {
      title:
        'Bildkomprimierer Kostenlos - Dateigröße online reduzieren | PicShift',
      description:
        'Komprimieren Sie Bilder in Ihrem Browser. Reduzieren Sie die Größe von JPG-, PNG-, WebP-, HEIC- und AVIF-Dateien bei hoher Qualität. 100% privat, ohne Upload.',
      h1: 'Bilder komprimieren',
      introText:
        'Reduzieren Sie die Dateigroesse Ihrer Bilder bei gleichbleibender visueller Qualitaet. Passen Sie den Qualitaetsregler an, um die perfekte Balance zu finden.',
      howToSteps: [
        'Ziehen Sie Ihre Bilder in den Bereich oben oder klicken Sie zum Durchsuchen.',
        'Passen Sie den Qualitaetsregler an, um den Komprimierungsgrad zu steuern.',
        'Klicken Sie auf Herunterladen, um die komprimierten Bilder zu speichern.',
      ],
      faqs: [
        {
          q: 'Wie stark kann ich meine Bilder komprimieren?',
          a: 'Das haengt vom Ausgangsbild ab. Eine Qualitaetseinstellung von 80% reduziert die Groesse von JPG-Dateien typischerweise um 40-60% bei minimalem sichtbarem Unterschied. Nutzen Sie die Vergleichsansicht, um die Qualitaet vor dem Herunterladen zu ueberpruefen.',
        },
        {
          q: 'Welche Formate kann ich komprimieren?',
          a: 'Sie koennen JPG-, PNG-, WebP-, HEIC- und AVIF-Bilder komprimieren. Das Ausgabeformat kann JPG, PNG, WebP oder AVIF sein.',
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
            'Einige Apps und Plattformen entfernen nach dem Upload einen Teil der Metadaten, aber dieses Verhalten ist uneinheitlich und kann sich jederzeit aendern. Am sichersten ist es, die Datei selbst vor der weiteren Nutzung zu bereinigen.',
          ],
        },
        {
          title: 'So entfernen Sie Metadaten aus Bildern',
          body: 'Der Ablauf ist einfach: erst pruefen, dann bereinigen und anschliessend bei Bedarf die bereinigte Version verwenden.',
          items: [
            'Legen Sie das Bild im Tool ab und schauen Sie sich zuerst an, welche Informationen die Datei tatsaechlich enthaelt.',
            'Wenn nur Breite, Hoehe oder Farbraum angezeigt werden, sehen Sie 0 sensible Daten. Falls GPS, Geraetedetails oder Zeitstempel enthalten sind, werden diese als sensibel markiert.',
            'Laden Sie die bereinigte Datei herunter und verwenden Sie diese Version, wenn Sie sie speichern, versenden, hochladen oder einfach behalten moechten.',
          ],
        },
      ],
    },
  },
}

export default de
