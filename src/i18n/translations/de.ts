import type { PageTranslations } from '../config'

const de: PageTranslations = {
  home: {
    title:
      'PicShift - Kostenloser Bildkonverter | HEIC, WebP, PNG, JPG, AVIF | Ohne Upload',
    description:
      'Konvertieren Sie Bilder sofort in Ihrem Browser — ohne Upload. HEIC in JPG, WebP in PNG, AVIF und mehr. 100% privat, funktioniert offline. Kostenlos, ohne Limits, ohne Registrierung.',
  },
  privacy: {
    title: 'Datenschutzrichtlinie | PicShift',
    description:
      'Datenschutzrichtlinie von PicShift. Die gesamte Bildverarbeitung erfolgt auf Ihrem Geraet. Es werden keine Dateien hochgeladen und keine personenbezogenen Daten erhoben.',
    sections: [
      {
        heading: 'Kurz gesagt',
        content:
          'Ihre Bilder bleiben auf Ihrem Geraet — immer. PicShift konvertiert Bilder direkt in Ihrem Browser. Nichts wird ins Internet hochgeladen. Wir sehen, speichern und haben keinen Zugriff auf Ihre Fotos.',
      },
      {
        heading: 'So funktioniert es',
        content:
          'Wenn Sie ein Bild mit PicShift konvertieren, geschieht alles auf Ihrem eigenen Geraet. Ihre Dateien werden nie an einen Server gesendet. Sie koennen sogar Ihre Internetverbindung trennen und PicShift funktioniert weiterhin einwandfrei — so lokal ist die Verarbeitung.',
      },
      {
        heading: 'Was wir erfassen',
        content:
          'Wir zaehlen grundlegende Dinge wie die Anzahl der Besucher auf PicShift, um es verbessern zu koennen. Das ist alles:',
        items: [
          'Wir verwenden keine Cookies',
          'Wir wissen nicht, wer Sie sind',
          'Wir koennen nicht sehen, welche Bilder Sie konvertieren',
          'Wir verfolgen Sie nicht ueber Websites hinweg',
        ],
      },
      {
        heading: 'Ihre Daten',
        content:
          'Kein Konto, keine Registrierung, keine personenbezogenen Daten gespeichert. Ihre konvertierten Bilder existieren nur auf Ihrem Geraet und verschwinden, wenn Sie die Seite schliessen oder aktualisieren. Wir haben keine Datenbank mit Benutzern oder Dateien — weil wir keine brauchen.',
      },
      {
        heading: 'Keine Werbung, kein Datenverkauf',
        content:
          'PicShift hat keine Werbung und verkauft keine Daten. Die einzigen externen Dienste, die wir nutzen, sind:',
        items: [
          'Umami, ein Open-Source-Analysetool — anonyme Besucherzählung ohne Cookies oder persönliches Tracking',
        ],
      },
      {
        heading: 'Aenderungen dieser Richtlinie',
        content:
          'Wenn wir diese Richtlinie aktualisieren, aktualisieren wir diese Seite. Unser Kernversprechen wird sich nie aendern: Ihre Bilder bleiben auf Ihrem Geraet und werden niemals hochgeladen.',
      },
      {
        heading: 'Kontakt',
        content: 'Fragen? Schreiben Sie uns an privacy@picshift.app.',
      },
    ],
    lastUpdated: 'Zuletzt aktualisiert: Februar 2026',
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
      title: 'JPG in PNG umwandeln - Verlustfrei, kostenlos, ohne Upload | PicShift',
      description:
        'Wandeln Sie JPG-Bilder in PNG um, wenn Sie eine verlustfreie Datei zum Bearbeiten, Beschriften oder Weiterverarbeiten brauchen.',
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
      title: 'Bilder Skalieren - Kostenlos und Privat | PicShift',
      description: 'Bilder im Browser skalieren. Voreingestellte Größen oder benutzerdefinierte Abmessungen. 100% privat, kein Upload.',
      h1: 'Bilder Skalieren',
      introText: 'Skalieren Sie Ihre Bilder auf exakte Abmessungen oder gängige Voreinstellungen. Alles geschieht in Ihrem Browser — Ihre Bilder verlassen nie Ihr Gerät.',
      howToSteps: [
        'Ziehen Sie Ihre Bilder in den Bereich oben, oder klicken Sie zum Durchsuchen.',
        'Wählen Sie eine Größenvoreinstellung oder geben Sie benutzerdefinierte Abmessungen ein.',
        'Wählen Sie Ausgabeformat und Qualität, dann laden Sie herunter.',
      ],
      faqs: [
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
  },
}

export default de
