import type { PageTranslations } from '../config'

const es: PageTranslations = {
  home: {
    title:
      'PicShift - Convertidor de Imágenes Gratis | HEIC, WebP, PNG, JPG, AVIF | Sin Subir Archivos',
    description:
      'Convierte imágenes al instante en tu navegador, sin subir archivos. De HEIC a JPG, de WebP a PNG, AVIF y más. 100% privado, funciona sin conexión. Gratis, sin límites y sin registro.',
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
        'Convertidor de HEIC a PNG - Calidad sin perdida, gratis | PicShift',
      description:
        'Convierte HEIC a PNG cuando necesitas calidad sin perdida, transparencia o un archivo mas comodo para editar o retocar.',
      h1: 'Convertir HEIC a PNG',
      introText:
        'Convierte fotos HEIC del iPhone a PNG cuando necesitas un archivo sin perdida para edicion, revision o diseno. El PNG es mas pesado que el JPG, pero es mejor opcion cuando la estabilidad de la imagen importa mas que el tamano.',
      howToSteps: [
        'Arrastra y suelta tus archivos HEIC en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG sin perdida al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: 'Por que convertir HEIC a PNG en lugar de JPG?',
          a: 'Porque PNG no anade otra capa de compresion con perdida. Es mejor para edicion, anotaciones, revision de diseno o cuando necesitas un archivo estable que se pueda reexportar sin degradarse.',
        },
        {
          q: 'Los archivos PNG son mas grandes que los HEIC o JPG?',
          a: 'Si, bastante mas grandes en la mayoria de fotos. HEIC comprime muy bien y PNG guarda mucha mas informacion por pixel. El aumento de tamano es normal cuando priorizas la calidad sin perdida.',
        },
        {
          q: 'Cuando es mejor convertir a JPG que a PNG?',
          a: 'Cuando tu objetivo es un archivo mas ligero para compartir, subir o enviar y no necesitas transparencia ni edicion posterior. JPG es mas practico para el uso diario; PNG es mejor para flujos de trabajo mas exigentes.',
        },
        {
          q: 'Como paso HEIC a PNG?',
          a: 'Anade tu archivo HEIC, deja PNG como formato de salida y descarga la imagen convertida. PicShift lo hace todo en tu navegador, sin enviar nada a ningun servidor.',
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
        'Convertidor de WebP a JPG - Mas compatible, sin subir archivos | PicShift',
      description:
        'Convierte WebP a JPG cuando una app, una web o un formulario no acepta WebP. Gratis, privado y sin subir archivos.',
      h1: 'Convertir WebP a JPG',
      introText:
        'Convierte imagenes WebP a JPG cuando necesitas un archivo que abra, suba o se comparta con menos problemas. JPG sigue siendo la opcion mas compatible para correo, herramientas de oficina y muchos formularios.',
      howToSteps: [
        'Arrastra y suelta tus archivos WebP en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a JPG al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: 'Por que convertir WebP a JPG?',
          a: 'WebP funciona muy bien en navegadores, pero fuera de la web todavia falla en algunas aplicaciones antiguas, clientes de correo, herramientas de oficina y formularios de subida. JPG sigue siendo el formato mas facil de usar en casi cualquier sitio.',
        },
        {
          q: 'Como convertir WebP a JPG?',
          a: 'Arrastra tu archivo WebP, deja JPG como formato de salida y descarga la imagen convertida. Es una solucion rapida cuando una plataforma no acepta WebP o cuando necesitas una imagen mas compatible.',
        },
        {
          q: 'Por que algunas apps no aceptan WebP?',
          a: 'Muchas herramientas antiguas solo fueron pensadas para JPG y PNG. Cuando un sistema valida formatos contra listas viejas, WebP puede quedar fuera y convertir a JPG suele resolver el problema.',
        },
        {
          q: 'WebP a JPG puede hacer el archivo mas grande?',
          a: 'Si, puede pasar. WebP suele ser mas eficiente que JPG, asi que al convertir para ganar compatibilidad el archivo final puede pesar mas dependiendo de la imagen y de la calidad elegida.',
        },
        {
          q: 'Cuando conviene usar PNG en lugar de JPG?',
          a: 'Conviene usar PNG si la imagen necesita transparencia o si prefieres una salida mas estable para edicion. JPG tiene mas sentido cuando tu prioridad es abrir, compartir o subir el archivo con menos problemas.',
        },
      ],
    },
    'webp-to-png': {
      title:
        'Convertidor de WebP a PNG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte WebP a PNG cuando necesitas transparencia, una salida sin perdida o un archivo mas comodo para editar.',
      h1: 'Convertir WebP a PNG',
      introText:
        'Convierte imagenes WebP a PNG cuando necesitas mantener la transparencia, editar la imagen con mas margen o guardar una salida sin perdida. PNG suele pesar mas, pero es una mejor opcion para ciertos flujos de trabajo.',
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
        {
          q: 'Cuando conviene convertir WebP a PNG?',
          a: 'Conviene cuando necesitas transparencia, una imagen mas estable para edicion o un archivo que no vuelva a pasar por compresion con perdida. Tambien es una buena opcion para revision, diseno o reutilizacion del recurso.',
        },
        {
          q: 'Por que el PNG pesa mas que el WebP?',
          a: 'Porque PNG guarda mucha mas informacion de imagen y no busca la misma eficiencia de compresion que WebP. El aumento de tamano es normal cuando priorizas transparencia o una salida sin perdida.',
        },
        {
          q: 'Cuando es mejor JPG que PNG?',
          a: 'JPG suele ser mejor si no necesitas transparencia y tu prioridad es un archivo mas ligero para compartir, subir o enviar. PNG tiene mas sentido cuando prefieres estabilidad y calidad sin perdida.',
        },
      ],
    },
    'png-to-jpg': {
      title: 'Convertidor de PNG a JPG - Mas ligero, online y privado | PicShift',
      description:
        'Convierte PNG a JPG para reducir el tamano del archivo cuando la transparencia ya no hace falta.',
      h1: 'Convertir PNG a JPG',
      introText:
        'Convierte imagenes PNG a JPG cuando pesan demasiado para compartir, subir o enviar. Es una solucion muy util para fotos guardadas como PNG aunque ya no necesiten transparencia.',
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
        {
          q: 'Por que convertir PNG a JPG?',
          a: 'La razon mas comun es bajar el peso del archivo. JPG suele ser mucho mas ligero que PNG en imagenes fotograficas, por eso es una opcion practica para compartir, enviar o subir a una web.',
        },
        {
          q: 'JPG pesa menos que PNG?',
          a: 'Normalmente si. PNG guarda mucha mas informacion y se vuelve pesado con facilidad, mientras que JPG esta pensado para fotos y suele ocupar menos espacio.',
        },
        {
          q: 'Cuando es mejor mantener PNG?',
          a: 'Manten PNG si tu imagen necesita transparencia, contiene texto fino o si quieres evitar una compresion con perdida. Para logos, interfaces o capturas detalladas, PNG suele seguir siendo mejor.',
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
        'Convertidor de JPG a WebP - Imagenes mas ligeras para web | PicShift',
      description:
        'Convierte JPG a WebP para reducir el peso de las imagenes y mejorar la carga de paginas en navegadores modernos.',
      h1: 'Convertir JPG a WebP',
      introText:
        'Convierte imagenes JPG a WebP cuando quieres una imagen mas ligera para web sin cambiar demasiado su aspecto. Es una mejora muy comun para tiendas, blogs, landings y paginas con muchas fotos.',
      howToSteps: [
        'Arrastra y suelta tus archivos JPG en el area de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a WebP al instante en tu navegador.',
        'Ajusta el control de calidad para equilibrar tamano y calidad.',
      ],
      faqs: [
        {
          q: 'Cuanto mas pequeno es WebP comparado con JPG?',
          a: 'WebP es 25-34% mas pequeno que JPG con la misma calidad visual en comparaciones de referencia. Un JPG de 1 MB se convierte en 650-750 KB como WebP sin diferencia visible.',
        },
        {
          q: 'Por que convertir JPG a WebP?',
          a: 'Porque WebP suele pesar menos que JPG con una calidad visual muy parecida. Eso ayuda a cargar mas rapido una web y a reducir el tamano total de imagenes que se transfieren al navegador.',
        },
        {
          q: 'Cuando conviene usar WebP en lugar de JPG?',
          a: 'Conviene cuando la imagen esta pensada para una pagina web y tu prioridad es bajar el peso sin empeorar demasiado el resultado visual. En navegadores modernos, WebP suele ser una opcion muy practica.',
        },
        {
          q: 'Cuando es mejor mantener JPG?',
          a: 'Mantener JPG tiene sentido si la imagen va a pasar por herramientas antiguas, adjuntos de correo o sistemas que todavia no trabajan bien con WebP. JPG sigue siendo mas facil de abrir en casi cualquier entorno.',
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
    'image-resizer': {
      title: 'Redimensionar imagen online - Gratis y privado | PicShift',
      description: 'Redimensiona una imagen o foto en tu navegador. Elige dimensiones exactas o un tamaño predefinido, sin subir archivos.',
      h1: 'Redimensionar Imágenes',
      introText: 'Redimensiona una imagen al tamano exacto que necesitas para un sitio web, un formulario, una red social o un envio por correo. Todo se procesa en tu navegador y tus archivos nunca salen de tu dispositivo.',
      howToSteps: [
        'Arrastra tus imagenes al area de arriba o haz clic para explorar.',
        'Elige un tamano predefinido o introduce dimensiones personalizadas.',
        'Elige el formato de salida y la calidad, luego descarga.',
      ],
      faqs: [
        { q: 'Como redimensionar una imagen sin deformarla?', a: 'Elige una anchura y altura adecuadas para tu uso, o selecciona un preset. PicShift mantiene las proporciones cuando corresponde y aplica un redimensionado de alta calidad para evitar que el resultado se vea degradado.' },
        { q: 'Que presets de tamano hay disponibles?', a: 'PicShift ofrece Max 1920px (lado largo), Max 1080px, escala al 50%, y un modo Personalizado para introducir dimensiones exactas en pixeles o un porcentaje.' },
        { q: 'Que tamano elegir para subir una foto a un sitio o enviarla?', a: 'Para un envio rapido o un formulario web, una imagen de 1080px o 1920px en el lado largo suele ser suficiente. Si el sitio pide un tamano exacto, usa el modo Personalizado.' },
        { q: 'Puedo redimensionar y cambiar el formato a la vez?', a: 'Si. Puedes cambiar el formato de salida (JPG, PNG, WebP, AVIF) y las dimensiones en un solo paso. Si lo que necesitas es sobre todo bajar el peso, combinalo con /es/image-compressor.' },
      ],
    },
    'image-compressor': {
      title:
        'Comprimir imagenes online - Gratis, privado, sin subir | PicShift',
      description:
        'Comprime imagenes en tu navegador para reducir su peso sin perder demasiada calidad. Compatible con JPG, PNG, WebP, HEIC y AVIF.',
      h1: 'Comprimir Imagenes Gratis',
      introText:
        'Reduce el peso de tus imagenes sin que se note mucho la diferencia visual. Es util para subir fotos a una web, enviarlas por correo, cumplir limites de tamano o simplemente ahorrar espacio.',
      howToSteps: [
        'Arrastra tus imagenes al area de arriba o haz clic para buscarlas.',
        'Ajusta el control de calidad para equilibrar peso y aspecto.',
        'Haz clic en Descargar para guardar las imagenes comprimidas.',
      ],
      faqs: [
        {
          q: 'Cuanto puedo comprimir mis imagenes?',
          a: 'Depende de la imagen original. Con calidad al 80%, los archivos JPG suelen reducirse entre un 40% y un 60% sin que la diferencia sea visible a simple vista. Puedes usar la vista de comparacion para verificar antes de descargar.',
        },
        {
          q: 'Que formatos puedo comprimir?',
          a: 'JPG, PNG, WebP, HEIC y AVIF. El formato de salida puede ser JPG, PNG, WebP o AVIF.',
        },
        {
          q: 'Comprimir una imagen baja mucho la calidad?',
          a: 'Con una compresion moderada, la diferencia suele ser imperceptible en pantalla. Si la imagen tiene mucho detalle fino o texto, conviene no bajar demasiado el control de calidad para que el resultado se vea bien.',
        },
        {
          q: 'Comprimir o redimensionar, cual es mejor?',
          a: 'Si la imagen es demasiado grande en pixeles, redimensionar suele bajar mas el peso que solo comprimir. Para fotos que ya tienen un tamano razonable, comprimir es el paso mas directo.',
        },
      ],
    },
  },
}

export default es
