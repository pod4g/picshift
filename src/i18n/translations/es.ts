import type { PageTranslations } from '../config'

const es: PageTranslations = {
  home: {
    title:
      'PicShift - Convertidor de Imagenes Gratis | HEIC, WebP, PNG, JPG, AVIF | Sin Subir Archivos',
    description:
      'Convierte imagenes al instante en tu navegador, sin subir archivos. HEIC a JPG, WebP a PNG, AVIF y mas. 100% privado, funciona sin conexion. Gratis, sin limites, sin registro.',
  },
  privacy: {
    title: 'Politica de Privacidad | PicShift',
    description:
      'Politica de privacidad de PicShift. Todo el procesamiento de imagenes ocurre en tu dispositivo. No se suben archivos ni se recopilan datos personales.',
    sections: [
      {
        heading: 'En pocas palabras',
        content:
          'Tus imagenes se quedan en tu dispositivo, siempre. PicShift convierte imagenes directamente en tu navegador. Nada se sube a internet. Nosotros no vemos, ni almacenamos, ni tenemos acceso a tus fotos.',
      },
      {
        heading: 'Como funciona',
        content:
          'Cuando conviertes una imagen con PicShift, todo ocurre en tu propio dispositivo. Tus archivos nunca se envian a ningun servidor. De hecho, puedes desconectarte de internet y PicShift seguira funcionando perfectamente — asi de local es.',
      },
      {
        heading: 'Que registramos',
        content:
          'Contamos cosas basicas como cuantas personas visitan PicShift para poder mejorarlo. Eso es todo:',
        items: [
          'No usamos cookies',
          'No sabemos quien eres',
          'No podemos ver que imagenes conviertes',
          'No te rastreamos entre sitios web',
        ],
      },
      {
        heading: 'Tus datos',
        content:
          'No hay cuentas, no hay registro, no se almacenan datos personales. Tus imagenes convertidas solo existen en tu dispositivo y desaparecen al cerrar o actualizar la pagina. No tenemos base de datos de usuarios ni archivos — porque no la necesitamos.',
      },
      {
        heading: 'Sin anuncios, sin venta de datos',
        content:
          'PicShift no tiene anuncios y no vende datos. Los unicos servicios externos que usamos son:',
        items: [
          'Umami, una herramienta de analítica de código abierto — conteo anónimo de visitantes sin cookies ni seguimiento personal',
        ],
      },
      {
        heading: 'Cambios en esta politica',
        content:
          'Si actualizamos esta politica, actualizaremos esta pagina. Nuestra promesa principal nunca cambiara: tus imagenes se quedan en tu dispositivo y nunca se suben.',
      },
      {
        heading: 'Contacto',
        content: 'Preguntas? Escribenos a privacy@picshift.app.',
      },
    ],
    lastUpdated: 'Ultima actualizacion: febrero de 2026',
  },
  tools: {
    'heic-to-jpg': {
      title:
        'Convertidor de HEIC a JPG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte fotos HEIC a JPG al instante en tu navegador. 100% privado: los archivos nunca salen de tu dispositivo. Gratis, sin limites, sin registro.',
      h1: 'Convertir HEIC a JPG',
      introText:
        'Convierte tus fotos HEIC del iPhone a formato JPG al instante. Todo ocurre en tu navegador: tus fotos nunca salen de tu dispositivo.',
      howToSteps: [
        'Arrastra y suelta tus archivos HEIC en el area de arriba, o haz clic para buscarlos.',
        'Tus fotos se convierten al instante en tu navegador, sin subir nada.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: 'Que es el formato HEIC?',
          a: 'HEIC (High Efficiency Image Container) es el formato de foto predeterminado en iPhones desde iOS 11. Produce archivos mas pequenos que JPG manteniendo la misma calidad. Sin embargo, muchas aplicaciones de Windows y sitios web no soportan HEIC.',
        },
        {
          q: 'Es seguro convertir mis fotos aqui?',
          a: 'Si. PicShift procesa todo en tu navegador usando WebAssembly. Tus fotos nunca salen de tu dispositivo; no se sube ningun archivo a ningun servidor. Puedes verificarlo desconectandote de internet e intentando usar el convertidor.',
        },
        {
          q: 'Cuantos archivos puedo convertir a la vez?',
          a: 'Puedes convertir hasta 200 archivos a la vez. Para un mejor rendimiento con lotes grandes, recomendamos 100 o menos.',
        },
        {
          q: 'Perdere calidad de imagen?',
          a: 'La configuracion de calidad predeterminada (85%) produce archivos visualmente identicos al original. Puedes ajustar el control de calidad: valores mas altos significan mejor calidad pero archivos mas grandes.',
        },
      ],
    },
    'heic-to-png': {
      title:
        'Convertidor de HEIC a PNG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte fotos HEIC a formato PNG en tu navegador. Calidad sin perdida, 100% privado, sin necesidad de subir archivos.',
      h1: 'Convertir HEIC a PNG',
      introText:
        'Convierte tus fotos HEIC del iPhone a formato PNG sin perdida. Todo el procesamiento ocurre localmente en tu navegador.',
      howToSteps: [
        'Arrastra y suelta tus archivos HEIC en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG sin perdida al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: 'Por que convertir HEIC a PNG en lugar de JPG?',
          a: 'PNG es un formato sin perdida, lo que significa que no se pierde calidad durante la conversion. Elige PNG cuando necesites calidad perfecta o soporte de transparencia. Elige JPG para archivos mas pequenos.',
        },
        {
          q: 'Los archivos PNG son mas grandes que los JPG?',
          a: 'Si, los archivos PNG son tipicamente 2 a 5 veces mas grandes que los JPG porque PNG es sin perdida. Si el tamano del archivo importa mas que la calidad perfecta, considera convertir a JPG.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'Convertidor de HEIC a WebP - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte fotos HEIC a formato WebP en tu navegador. Archivos mas pequenos, gran calidad, 100% privado.',
      h1: 'Convertir HEIC a WebP',
      introText:
        'Convierte tus fotos HEIC del iPhone al formato moderno WebP. WebP ofrece archivos un 25-34% mas pequenos que JPG con la misma calidad.',
      howToSteps: [
        'Arrastra y suelta tus archivos HEIC en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a WebP al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: 'Que es WebP?',
          a: 'WebP es un formato de imagen moderno desarrollado por Google. Ofrece archivos un 25-34% mas pequenos que JPG con calidad equivalente. WebP es compatible con todos los navegadores principales (96,5% de soporte global).',
        },
        {
          q: 'Cuando deberia usar WebP?',
          a: 'WebP es ideal para uso web: archivos mas pequenos significan cargas de pagina mas rapidas. Para compartir por correo electronico o mensajeria, JPG es mas universalmente compatible.',
        },
      ],
    },
    'webp-to-jpg': {
      title:
        'Convertidor de WebP a JPG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte imagenes WebP a formato JPG en tu navegador. Gratis, privado, sin necesidad de subir archivos.',
      h1: 'Convertir WebP a JPG',
      introText:
        'Convierte imagenes WebP al formato JPG universalmente compatible. Todo el procesamiento ocurre localmente en tu navegador.',
      howToSteps: [
        'Arrastra y suelta tus archivos WebP en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a JPG al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: 'Por que convertir WebP a JPG?',
          a: 'Aunque WebP es ampliamente compatible en navegadores, algunas aplicaciones antiguas, clientes de correo electronico y plataformas de redes sociales pueden no aceptar WebP. JPG es el formato de imagen mas universalmente compatible.',
        },
      ],
    },
    'webp-to-png': {
      title:
        'Convertidor de WebP a PNG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte imagenes WebP a formato PNG sin perdida en tu navegador. Gratis, privado, sin subir archivos.',
      h1: 'Convertir WebP a PNG',
      introText:
        'Convierte imagenes WebP a formato PNG sin perdida. Perfecto cuando necesitas transparencia o calidad sin perdida.',
      howToSteps: [
        'Arrastra y suelta tus archivos WebP en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG sin perdida al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: 'La conversion de WebP a PNG pierde calidad?',
          a: 'No. PNG es un formato sin perdida, por lo que la conversion preserva cada pixel de la fuente WebP. El archivo PNG resultante sera mas grande pero identico en calidad.',
        },
      ],
    },
    'png-to-jpg': {
      title: 'Convertidor de PNG a JPG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte imagenes PNG a formato JPG en tu navegador. Reduce el tamano del archivo manteniendo una gran calidad.',
      h1: 'Convertir PNG a JPG',
      introText:
        'Convierte imagenes PNG a JPG para reducir el tamano del archivo. Ideal para fotos guardadas como PNG que no necesitan transparencia.',
      howToSteps: [
        'Arrastra y suelta tus archivos PNG en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a JPG al instante en tu navegador.',
        'Ajusta el control de calidad para equilibrar tamano y calidad.',
      ],
      faqs: [
        {
          q: 'Perdere la transparencia?',
          a: 'Si. JPG no soporta transparencia. Las areas transparentes de tu PNG se convertiran en blanco. Si necesitas transparencia, mantiene tu imagen como PNG o convierte a WebP.',
        },
      ],
    },
    'jpg-to-png': {
      title: 'Convertidor de JPG a PNG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte imagenes JPG a formato PNG sin perdida en tu navegador. Gratis, privado, sin subir archivos.',
      h1: 'Convertir JPG a PNG',
      introText:
        'Convierte imagenes JPG a formato PNG sin perdida. Util cuando necesitas una version sin perdida para edicion.',
      howToSteps: [
        'Arrastra y suelta tus archivos JPG en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: 'Convertir JPG a PNG mejora la calidad?',
          a: 'No. Convertir de JPG a PNG no restaura la calidad perdida durante la compresion JPG. Sin embargo, convertir a PNG evita cualquier perdida de calidad adicional si necesitas editar y volver a guardar la imagen.',
        },
      ],
    },
    'jpg-to-webp': {
      title:
        'Convertidor de JPG a WebP - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte imagenes JPG a formato WebP en tu navegador. Archivos mas pequenos, misma calidad, 100% privado.',
      h1: 'Convertir JPG a WebP',
      introText:
        'Convierte imagenes JPG al formato moderno WebP para obtener archivos un 25-34% mas pequenos con la misma calidad visual.',
      howToSteps: [
        'Arrastra y suelta tus archivos JPG en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a WebP al instante en tu navegador.',
        'Ajusta el control de calidad para equilibrar tamano y calidad.',
      ],
      faqs: [
        {
          q: 'Cuanto mas pequeno es WebP comparado con JPG?',
          a: 'WebP es tipicamente un 25-34% mas pequeno que JPG con la misma calidad visual. Un JPG de 1 MB podria convertirse en 650-750 KB como WebP sin diferencia visible.',
        },
      ],
    },
    'avif-to-jpg': {
      title:
        'Convertidor de AVIF a JPG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte imagenes AVIF a formato JPG en tu navegador. Gratis, privado, sin necesidad de subir archivos.',
      h1: 'Convertir AVIF a JPG',
      introText:
        'Convierte imagenes AVIF al formato JPG universalmente compatible. Todo el procesamiento ocurre localmente.',
      howToSteps: [
        'Arrastra y suelta tus archivos AVIF en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a JPG al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: 'Que es AVIF?',
          a: 'AVIF es un formato de imagen de nueva generacion basado en el codec de video AV1. Ofrece mejor compresion que JPG y WebP, pero su soporte aun esta en crecimiento.',
        },
      ],
    },
    'avif-to-png': {
      title:
        'Convertidor de AVIF a PNG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte imagenes AVIF a formato PNG sin perdida en tu navegador. Gratis, privado, sin subir archivos.',
      h1: 'Convertir AVIF a PNG',
      introText:
        'Convierte imagenes AVIF a formato PNG sin perdida. Perfecto para preservar la maxima calidad.',
      howToSteps: [
        'Arrastra y suelta tus archivos AVIF en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG sin perdida al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: 'Por que convertir AVIF a PNG?',
          a: 'AVIF tiene soporte limitado en algunas aplicaciones. Convertir a PNG te da un formato sin perdida y universalmente compatible que funciona en todas partes.',
        },
      ],
    },
    'image-compressor': {
      title:
        'Compresor de Imagenes - Reduce el Tamano Online, Gratis y Privado | PicShift',
      description:
        'Comprime imagenes en tu navegador. Reduce el tamano de archivos JPG, PNG y WebP manteniendo una gran calidad. 100% privado, sin subir archivos.',
      h1: 'Comprimir Imagenes',
      introText:
        'Reduce el tamano de tus imagenes manteniendo la calidad visual. Ajusta el control de calidad para encontrar el equilibrio perfecto.',
      howToSteps: [
        'Arrastra y suelta tus imagenes en el area de arriba, o haz clic para buscarlas.',
        'Ajusta el control de calidad para controlar el nivel de compresion.',
        'Haz clic en Descargar para guardar las imagenes comprimidas.',
      ],
      faqs: [
        {
          q: 'Cuanto puedo comprimir mis imagenes?',
          a: 'Depende de la imagen original. Una configuracion de calidad del 80% tipicamente reduce el tamano de archivos JPG en un 40-60% con una diferencia visible minima. Usa la vista de comparacion para verificar la calidad antes de descargar.',
        },
        {
          q: 'Que formatos puedo comprimir?',
          a: 'Puedes comprimir imagenes JPG, PNG, WebP, HEIC y AVIF. El formato de salida puede ser JPG, PNG o WebP.',
        },
      ],
    },
  },
}

export default es
