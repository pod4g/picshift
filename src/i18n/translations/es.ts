import type { PageTranslations } from '../config'

const es: PageTranslations = {
  home: {
    title:
      'PicShift - Convertidor de Imágenes Gratis | HEIC, WebP, PNG, JPG, AVIF | Sin Subir Archivos',
    description:
      'Convierte imágenes al instante en tu navegador, sin subir archivos. De HEIC a JPG, de WebP a PNG, AVIF y más. 100% privado, funciona sin conexión. Gratis, sin límites y sin registro.',
  },
  privacy: {
    title: 'Política de privacidad | PicShift',
    description:
      'Así tratamos tu privacidad en PicShift: convertir, comprimir, cambiar el tamaño o limpiar metadatos pasa en tu equipo; no subimos fotos para procesarlas. Abajo detallamos qué registros genera la web y qué se queda fuera.',
    sections: [
      {
        heading: 'Versión breve',
        content:
          'PicShift trabaja las imágenes en tu propio dispositivo. Conversión, compresión, redimensionar o quitar metadatos: nada de eso se envía a nuestros servidores. No hace falta registrarse ni iniciar sesión.',
      },
      {
        heading: 'Qué pasa con tus imágenes',
        content:
          'Cuando eliges un archivo, el navegador lo mete en memoria, usa códecs y módulos WebAssembly ahí dentro y te deja descargar el resultado en el mismo sitio. No existe el circuito “subir al servidor, procesar allí y bajar de nuevo”, así que no almacenamos ni el original ni el archivo final.',
      },
      {
        heading: 'Qué no recogemos',
        content: 'No nos llevamos el contenido de tus imágenes. En la práctica:',
        items: ['No subimos imágenes ni antes ni después del procesamiento'],
      },
      {
        heading: 'Qué sí vemos',
        content:
          'Igual que cualquier sitio abierto en internet, vemos trazas de visita: qué URL se abrió, de dónde venías, país o región aproximados, tipo de dispositivo, navegador y si alguien pulsó un botón o enlace interno. Con eso afinamos el producto: páginas que sirven, herramientas que la gente termina, artículos que acercan al producto y sitios donde falta idioma o velocidad. Lo que debes quedarte: en esos registros no va la foto ni el archivo gráfico.',
      },
      {
        heading: 'Analítica y servicios de terceros',
        content:
          'Para que la página cargue con fiabilidad y entender cómo se usa el sitio, recurrimos a pocos proveedores de infraestructura y estadísticas:',
        items: [
          'Cloudflare: aloja los estáticos, reparte por CDN y aporta Cloudflare Web Analytics',
          'Umami: estadísticas web pensadas para no ir a lo bestia con la privacidad',
          'Manejan datos típicos de peticiones web; no reciben tus imágenes',
          'Con la configuración actual, tanto Umami como Cloudflare Web Analytics conservan los datos de analítica durante seis meses',
        ],
      },
      {
        heading: 'Cookies y seguimiento',
        content:
          'No vendemos espacio a redes de anuncios ni instalamos scripts que te persigan por otros dominios. La analítica va justa y al grano: comprobar que la web rinde, no montarte un perfil cruzado. Las fotos no entran en ningún perfil: no nos llegan para el procesamiento.',
      },
      {
        heading: 'Preferencias locales en el navegador',
        content:
          'Podemos guardar en tu navegador cosas como idioma, tema o calidad por defecto para que no rehagas ajustes cada vez. Eso vive solo en tu navegador hasta que tú lo borres.',
      },
      {
        heading: 'Tus derechos',
        content:
          'Según tu país, puedes pedir acceso, rectificación, borrado u oposición sobre datos personales. PicShift no tiene cuentas de usuario: no recibimos información que nos diga quién eres. Escríbenos y te contamos con claridad qué tenemos y qué no.',
      },
      {
        heading: 'Estado del proyecto',
        content:
          'PicShift es ahora un proyecto independiente en picshift.app. Si cambia quien lo opera, el hosting o el marco legal y eso altera de verdad la privacidad, actualizamos esta página; no hacemos como si no hubiera pasado nada.',
      },
      {
        heading: 'Cambios en esta política',
        content:
          'Si retocamos este texto, actualizamos la página y la fecha de “Última actualización”. La promesa sigue igual: las imágenes se procesan en tu dispositivo, no en nuestro servidor.',
      },
      {
        heading: 'Contacto',
        content:
          'Privacidad, correcciones o peticiones sobre datos: privacy@picshift.app.',
      },
    ],
    lastUpdated: 'Última actualización: abril de 2026',
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
    'metadata-remover': {
      title: 'Eliminar metadatos de imagen — EXIF, GPS, datos de cámara | PicShift',
      description:
        'Elimina metadatos EXIF, ubicación GPS, modelo de cámara y otros datos ocultos de imágenes JPG, PNG, WebP, HEIC y AVIF. Se ejecuta en tu navegador, sin subir nada.',
      h1: 'Eliminar metadatos de imagen',
      introText:
        'Elimina los metadatos ocultos de tus fotos antes de compartirlas. Las fotos tomadas con el móvil o la cámara incluyen por defecto coordenadas GPS, modelo de dispositivo, fecha y hora, y etiquetas de software. Esta herramienta borra todo localmente en tu navegador — la imagen nunca sale de tu dispositivo.',
      howToSteps: [
        'Arrastra tus imágenes al área de arriba o haz clic para buscarlas.',
        'Los metadatos se eliminan al instante en tu navegador, sin subir nada.',
        'Haz clic en Descargar para guardar las imágenes limpias, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Qué metadatos se eliminan?',
          a: 'Se eliminan todos los datos EXIF, incluyendo coordenadas GPS, marca y modelo de cámara, información de lente, fecha y hora, etiquetas de software y miniaturas incrustadas. La imagen resultante no contiene ningún metadato.',
        },
        {
          q: '¿Eliminar metadatos afecta la calidad de la imagen?',
          a: 'No. La eliminación de metadatos solo borra los datos no visuales incrustados en el archivo. El contenido visual de tu imagen permanece idéntico.',
        },
        {
          q: '¿Por qué debería eliminar los metadatos antes de compartir fotos?',
          a: 'Las fotos tomadas con móviles y cámaras contienen datos ocultos como tu ubicación GPS exacta, el modelo de dispositivo y la hora en que se tomó la foto. Eliminar los metadatos protege tu privacidad al compartir imágenes en redes sociales o con otras personas.',
        },
        {
          q: '¿Por qué el JPG limpio pesa más que el HEIC o HEIF original?',
          a: 'HEIC y HEIF están pensados para comprimir muy bien, así que el original suele ocupar mucho menos que un JPG típico. En el navegador, PicShift exporta HEIC/HEIF limpios como JPG porque aún no hay soporte fiable para descargarlos en el mismo formato. Que el JPG sea más grande es normal y no indica que la limpieza haya fallado. JPG, PNG, WebP y AVIF se descargan en el mismo formato de entrada. Si te importa más el tamaño que la máxima compatibilidad, conserva los HEIC/HEIF originales cuando puedas, o usa otro formato moderno que tus herramientas acepten (por ejemplo AVIF) si encaja en tu flujo.',
        },
        {
          q: '¿Qué formatos de imagen son compatibles?',
          a: 'JPG, PNG, WebP, HEIC, HEIF y AVIF. JPG, PNG, WebP y AVIF se descargan en el mismo formato; los HEIC/HEIF limpios se entregan como JPG.',
        },
      ],
      detailSections: [
        {
          title: 'Alcance y limites',
          body: 'Esta herramienta elimina los metadatos incrustados en el archivo. No modifica los pixeles visibles de la imagen, asi que sirve para evitar fugas de informacion oculta, no para borrar contenido que ya se ve en pantalla.',
          items: [
            'Puede quitar GPS, modelo del dispositivo, fecha, hora y etiquetas de software, pero no borra caras, matriculas, marcas de agua ni texto que ya aparezca en la imagen.',
            'JPG, PNG, WebP y AVIF se descargan en el mismo formato. Los HEIC y HEIF limpios se descargan como JPG porque el navegador todavia no puede escribirlos de vuelta como HEIC o HEIF.',
            'Algunas apps y redes sociales eliminan parte de los metadatos al subir una imagen, pero ese comportamiento no es consistente y puede cambiar. Lo mas seguro es limpiar el archivo tu mismo antes de usarlo.',
          ],
        },
        {
          title: 'Como eliminar metadatos de una imagen',
          body: 'El flujo es simple: revisa primero, limpia despues y luego usa la copia limpia cuando la necesites.',
          items: [
            'Arrastra la imagen a la herramienta y comprueba que informacion contiene realmente el archivo.',
            'Si solo aparecen ancho, alto o espacio de color, veras 0 datos sensibles. Si incluye GPS, datos del dispositivo o marcas de tiempo, se marcara como sensible.',
            'Descarga el archivo limpio y usa esa version cuando vayas a guardarlo, enviarlo, subirlo o conservar una copia.',
          ],
        },
      ],
    },
  },
}

export default es
