import type { PageTranslations } from '../config'

const es: PageTranslations = {
  home: {
    title:
      'PicShift - Convertidor de Imágenes Gratis | HEIC, WebP, PNG, JPG, AVIF | Sin Subir Archivos',
    description:
      'Convierte imágenes localmente en tu navegador, sin subir archivos ni registrarte. HEIC a JPG, WebP a PNG, AVIF y más; los flujos ya cargados pueden reutilizarse sin conexión.',
  },
  privacy: {
    title: 'Política de privacidad — Procesamiento local | PicShift',
    description:
      'Convertir, comprimir, cambiar el tamaño o limpiar metadatos pasa en tu equipo: no subimos fotos para procesarlas. Abajo detallamos qué registros de tráfico genera la web.',
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
          'La disponibilidad y la conservación de los datos de analítica siguen las políticas vigentes de cada proveedor y la configuración activa de la cuenta de PicShift; aquí no publicamos un plazo fijo de eliminación',
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
    lastUpdated: 'Última actualización: agosto de 2026',
  },
  tools: {
    'heic-to-jpg': {
      title:
        'Convertir HEIC a JPG online — fotos del iPhone en tu navegador | PicShift',
      description:
        'Convierte HEIC a JPG cuando Windows, una página web, un correo o un formulario no abre las fotos del iPhone. Hasta 200 archivos por lote en el navegador, sin subir nada.',
      h1: 'Convertir HEIC a JPG',
      introText:
        'Convierte HEIC a JPG cuando un PC con Windows, un sitio web, un correo o un formulario rechaza las fotos del iPhone. El proceso de conversión ocurre en tu navegador y las imágenes fuente no se suben a un servidor de conversión.',
      howToSteps: [
        'Arrastra y suelta tus archivos HEIC en el área de arriba, o haz clic para buscarlos.',
        'Tus fotos se convierten al instante en tu navegador, sin subir nada.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Cómo convertir HEIC a JPG online?',
          a: 'Arrastra los archivos HEIC del iPhone a PicShift, mantén JPG como formato de salida y descarga. La conversión ocurre dentro del navegador — los archivos no se suben a ningún servidor.',
        },
        {
          q: '¿Por qué convertir HEIC a JPG?',
          a: 'Muchos PCs con Windows, formularios web, programas de correo y sitios de comercio electrónico todavía no abren HEIC. JPG sí lo abren todos. Si vas a enviar la foto a alguien que no conoces (o a un sistema que no controlas), JPG suele ser la opción que evita problemas.',
        },
        {
          q: '¿Qué es el formato HEIC?',
          a: 'HEIC (High Efficiency Image Container) es el formato predeterminado de fotos en iPhone desde iOS 11. Produce archivos más pequeños que JPG con calidad similar, pero sigue sin tener soporte universal fuera del ecosistema Apple.',
        },
        {
          q: '¿Perderé calidad al convertir HEIC a JPG?',
          a: 'JPG usa compresión con pérdida. La calidad 85 es el punto de partida, pero el resultado depende de la foto; compara los detalles y ajusta el control antes de descargar, especialmente para impresión o archivo.',
        },
        {
          q: '¿La conversión conserva la rotación y la fecha de la foto?',
          a: 'PicShift vuelve a codificar los píxeles visibles y no garantiza conservar la orientación ni la fecha como metadatos. No copia intencionadamente la fecha de captura, el GPS ni otros datos EXIF al JPG nuevo. Comprueba la vista previa antes de descargar; si necesitas la fecha original, guárdala por separado, y para una revisión de privacidad inspecciona el archivo o usa /es/metadata-remover.',
        },
        {
          q: '¿Cuántas fotos HEIC puedo convertir a la vez?',
          a: 'Hasta 200 archivos por lote directamente en el navegador. Para tandas muy grandes, ve en grupos de 50–100 para mantener el navegador fluido.',
        },
        {
          q: '¿Es seguro? ¿Mis fotos se suben a algún servidor?',
          a: 'Las imágenes fuente se procesan en el navegador y no se suben para convertirlas. El tráfico normal del sitio y las señales de analítica se describen en la Política de privacidad. Tras cargar correctamente el flujo, puedes probarlo sin conexión.',
        },
        {
          q: '¿Hay alguna alternativa si necesito transparencia?',
          a: 'JPG no soporta transparencia. Si la necesitas, usa /es/heic-to-png o convierte a WebP. En la página PNG, calidad 95–100 conserva los píxeles decodificados con optimización OxiPNG sin pérdida; por debajo de 95 puede haber cuantización con pérdida.',
        },
      ],
    },
    'heic-to-png': {
      title:
        'HEIC a PNG online - Convertidor sin subir archivos | PicShift',
      description:
        'Pasa fotos HEIC a PNG para editar o usar un formato ampliamente compatible. Calidad 100 por defecto; hasta 200 archivos en el navegador, sin subir las imágenes fuente para convertirlas.',
      h1: 'Convertir HEIC a PNG',
      introText:
        'Convierte fotos HEIC del iPhone a PNG para edición, revisión o diseño. La página usa calidad 100 por defecto; con 95–100 solo aplica OxiPNG sin pérdida a los píxeles decodificados, mientras que por debajo de 95 la cuantización puede introducir pérdida.',
      howToSteps: [
        'Arrastra y suelta tus archivos HEIC en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG en tu navegador; revisa la calidad seleccionada antes de descargar.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Por qué convertir HEIC a PNG en lugar de JPG?',
          a: 'PNG admite transparencia y es útil para edición o anotaciones. Con calidad 95–100, PicShift conserva los píxeles decodificados y solo aplica OxiPNG sin pérdida; por debajo de 95, la cuantización de paleta puede ser con pérdida.',
        },
        {
          q: '¿Los archivos PNG son más grandes que los HEIC o JPG?',
          a: 'Puede ser mayor porque HEIC comprime las fotos de otra forma. El tamaño depende de la imagen y del ajuste PNG; compara el resultado en vez de asumir una proporción fija.',
        },
        {
          q: '¿Cuándo es mejor convertir a JPG que a PNG?',
          a: 'Cuando tu objetivo es un archivo más ligero para compartir, subir o enviar y no necesitas transparencia ni edición posterior. JPG es más práctico para el uso diario; PNG es mejor para flujos de trabajo más exigentes.',
        },
        {
          q: '¿Cómo paso HEIC a PNG?',
          a: 'Anade tu archivo HEIC, deja PNG como formato de salida y descarga la imagen convertida. PicShift lo hace todo en tu navegador, sin enviar nada a ningún servidor.',
        },
        {
          q: '¿Es lo mismo HEIC a PNG que HEIC a JPG?',
          a: 'No. JPG aplica compresión con pérdida. PNG usa calidad 100 por defecto y, entre 95 y 100, solo optimización OxiPNG sin pérdida; por debajo de 95 puede usar cuantización con pérdida. El tamaño final varía.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'Convertidor de HEIC a WebP - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte fotos HEIC a WebP en tu navegador. El tamaño y la calidad dependen de la imagen y los ajustes; las imágenes fuente no se suben para convertirlas.',
      h1: 'Convertir HEIC a WebP',
      introText:
        'Convierte fotos HEIC del iPhone a WebP y compara la calidad y el tamaño reales. El resultado depende de la imagen, los ajustes y el entorno de destino.',
      howToSteps: [
        'Arrastra y suelta tus archivos HEIC en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a WebP al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Qué es WebP?',
          a: 'WebP es un formato de imagen desarrollado por Google con compresión con y sin pérdida. Puede ser menor que JPG para ciertas imágenes y ajustes, pero no existe un porcentaje fijo. Compara la salida y verifica el soporte del navegador o la app de destino.',
        },
        {
          q: '¿Cuándo deberia usar WebP?',
          a: 'WebP es ideal para uso web: archivos más pequeños significan cargas de página más rapidas. Para compartir por correo electrónico o mensajería, JPG es más universalmente compatible.',
        },
      ],
    },
    'heif-to-jpg': {
      title:
        'Convertidor HEIF a JPG — Windows, subida, sin envío | PicShift',
      description:
        'Convierte HEIF a JPG para Windows, formularios de subida, correo y herramientas que no abren bien el formato HEIF. Todo se procesa en tu navegador, sin subir archivos.',
      h1: 'Convertir HEIF a JPG',
      introText:
        'Convierte un archivo HEIF a JPG cuando necesitas una versión que se abra sin problemas en Windows, pase por un formulario de subida o se comparta sin fricciones. El procesamiento ocurre en tu navegador, sin enviar el archivo a un servidor.',
      howToSteps: [
        'Arrastra y suelta tus archivos HEIF en el área de arriba, o haz clic para seleccionarlos.',
        'Los archivos se convierten a JPG al instante en tu navegador.',
        'Ajusta la calidad si lo necesitas y descarga cada archivo o todo el lote.',
      ],
      faqs: [
        {
          q: '¿Por qué convertir HEIF a JPG?',
          a: 'Porque JPG se abre mucho mejor en Windows, se adjunta sin problemas al correo, se sube a formularios y se comparte con personas cuyo entorno no es compatible con HEIF.',
        },
        {
          q: '¿HEIF y HEIC son lo mismo?',
          a: 'HEIF es la familia de formatos, mientras que HEIC es el formato de foto HEIF más conocido en dispositivos Apple. En la práctica, las mismas fricciones de compatibilidad aparecen en ambos, y la conversión a JPG las resuelve por igual.',
        },
        {
          q: '¿Cuándo JPG es la salida más segura?',
          a: 'Cuando el archivo va a un PC con Windows, un formulario de subida, un servicio de atención al cliente, una herramienta de oficina o un compañero cuyo entorno no controlas. JPG es el formato que menos sorpresas da en esos contextos.',
        },
        {
          q: '¿Se pierde calidad al convertir HEIF a JPG?',
          a: 'Sí, JPG usa compresión con pérdida. Aun así, suele ser el compromiso correcto cuando la prioridad es la compatibilidad y no conservar cada bit del archivo original.',
        },
        {
          q: '¿Cuándo conviene mantener HEIF en vez de convertirlo?',
          a: 'Mantén HEIF si todos tus dispositivos y aplicaciones ya lo admiten bien y quieres aprovechar un archivo más ligero. Conviértelo a JPG cuando una subida, un envío o un programa empiecen a dar problemas.',
        },
      ],
    },
    'webp-to-jpg': {
      title:
        'Convertir WebP a JPG — gratis y sin subir archivos | PicShift',
      description:
        'Pasa archivos WebP a JPG cuando una app, correo o formulario no acepta WebP. Conversión por lotes en el navegador, sin subir archivos ni registrarte.',
      h1: 'Convertir WebP a JPG',
      introText:
        'Convierte imágenes WebP a JPG cuando necesitas un archivo que se abra, se envíe o se suba sin problemas. JPG sigue siendo la opción más compatible para correo, programas de oficina, formularios web y plataformas que aún no soportan bien WebP. Puedes pasar varios archivos a la vez, todo dentro del navegador.',
      howToSteps: [
        'Arrastra y suelta tus archivos WebP en el área de arriba, o haz clic para buscarlos.',
        'Deja JPG como formato de salida — la conversión es instantánea en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Cómo convertir WebP a JPG?',
          a: 'Arrastra tu archivo WebP al área superior, deja JPG como formato de salida y haz clic en Descargar. Es la forma más rápida cuando una plataforma rechaza WebP o cuando necesitas una versión más compatible para enviar — todo ocurre en el navegador, sin subir nada.',
        },
        {
          q: '¿Cómo pasar un archivo WebP a JPG?',
          a: 'Es lo mismo: suelta el archivo en la caja, deja JPG como salida y descarga. Funciona en Windows, Mac, Linux, ChromeOS y móvil — no necesitas instalar ningún programa ni crear cuenta. También sirve para "transformar webp a jpg" o "cambiar de webp a jpg".',
        },
        {
          q: '¿Por qué convertir WebP a JPG?',
          a: 'WebP funciona muy bien en navegadores, pero fuera de la web todavía falla en algunas aplicaciones antiguas, clientes de correo, herramientas de oficina y formularios de subida. JPG sigue siendo el formato más fácil de usar en casi cualquier sitio del día a día.',
        },
        {
          q: '¿Por qué algunas apps no aceptan WebP?',
          a: 'Muchas herramientas más antiguas solo fueron pensadas para JPG y PNG. Cuando un sistema valida el formato contra una lista vieja, WebP puede quedar fuera aunque la imagen sea perfectamente legible. Convertir a JPG resuelve el caso sin tocar el sistema del otro lado.',
        },
        {
          q: '¿La conversión de WebP a JPG pierde calidad?',
          a: 'WebP y JPG pueden usar compresión con pérdida, por lo que la recodificación puede cambiar detalles. Empieza con 85–90, compara la salida y ajusta. Para PNG, calidad 95–100 usa solo optimización OxiPNG sin pérdida; por debajo de 95 puede haber cuantización con pérdida.',
        },
        {
          q: '¿WebP a JPG puede hacer el archivo más grande?',
          a: 'Sí, puede pasar. WebP suele comprimir mejor que JPG, así que al convertir para ganar compatibilidad el archivo final puede pesar un poco más, sobre todo en fotos de alta resolución. Si el peso importa, después de convertir pasa la imagen por nuestro <a href="/es/image-compressor">compresor de imágenes</a>.',
        },
        {
          q: '¿Puedo convertir varios WebP a la vez?',
          a: 'Sí. Arrastra hasta 200 archivos por lote y PicShift los procesa en el navegador. Puedes descargarlos uno a uno o juntos en un ZIP; el rendimiento depende del dispositivo y de las imágenes.',
        },
        {
          q: '¿Cuándo conviene usar PNG en lugar de JPG?',
          a: 'Conviene PNG si la imagen necesita transparencia o si vas a editarla. JPG tiene más sentido cuando la prioridad es compatibilidad. En la página PNG, usa 95–100 para limitar el proceso a OxiPNG sin pérdida; valores inferiores pueden cuantizar la paleta.',
        },
      ],
    },
    'webp-to-png': {
      title:
        'Convertidor de WebP a PNG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte WebP a PNG cuando necesitas transparencia o un archivo más cómodo para editar. Calidad 100 por defecto; el comportamiento cambia por debajo de 95.',
      h1: 'Convertir WebP a PNG',
      introText:
        'Convierte WebP a PNG para mantener la transparencia o editar. La calidad predeterminada es 100; entre 95 y 100 solo se aplica OxiPNG sin pérdida a los píxeles decodificados, y por debajo de 95 la cuantización puede ser con pérdida.',
      howToSteps: [
        'Arrastra y suelta tus archivos WebP en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG en tu navegador; compara la salida con el ajuste seleccionado.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿La conversión de WebP a PNG pierde calidad?',
          a: 'Con calidad 95–100, PicShift conserva los píxeles decodificados y solo aplica OxiPNG sin pérdida. Por debajo de 95, la cuantización de paleta puede introducir pérdida. El tamaño final depende de la imagen.',
        },
        {
          q: '¿Cuándo conviene convertir WebP a PNG?',
          a: 'Conviene cuando necesitas transparencia, una imagen más estable para edición o un archivo que no vuelva a pasar por compresión con pérdida. También es una buena opción para revisión, diseño o reutilización del recurso.',
        },
        {
          q: '¿Por qué el PNG pesa más que el WebP?',
          a: 'PNG y WebP almacenan la imagen de forma distinta, por lo que el PNG puede ser mayor. El resultado depende de la fuente y del nivel de calidad; no hay una proporción fija.',
        },
        {
          q: '¿Cuándo es mejor JPG que PNG?',
          a: 'JPG suele ser práctico si no necesitas transparencia y priorizas compatibilidad o tamaño. PNG es útil para transparencia y edición; usa calidad 95–100 si quieres evitar la cuantización con pérdida.',
        },
      ],
    },
    'png-to-jpg': {
      title: 'Convertidor de PNG a JPG - Mas ligero, online y privado | PicShift',
      description:
        'Convierte PNG a JPG para reducir el tamaño del archivo cuando la transparencia ya no hace falta.',
      h1: 'Convertir PNG a JPG',
      introText:
        'Convierte imágenes PNG a JPG cuando pesan demasiado para compartir, subir o enviar. Es una solución muy útil para fotos guardadas como PNG aunque ya no necesiten transparencia.',
      howToSteps: [
        'Arrastra y suelta tus archivos PNG en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a JPG al instante en tu navegador.',
        'Ajusta el control de calidad para equilibrar tamaño y calidad.',
      ],
      faqs: [
        {
          q: '¿Perderé la transparencia?',
          a: 'Sí. JPG no soporta transparencia. Las áreas transparentes de tu PNG se convertiran en blanco. Si necesitas transparencia, mantén tu imagen como PNG o convierte a WebP.',
        },
        {
          q: '¿Por qué convertir PNG a JPG?',
          a: 'La razón más común es bajar el peso del archivo. JPG suele ser mucho más ligero que PNG en imágenes fotográficas, por eso es una opción práctica para compartir, enviar o subir a una web.',
        },
        {
          q: '¿JPG pesa menos que PNG?',
          a: 'Normalmente si. PNG guarda mucha más información y se vuelve pesado con facilidad, mientras que JPG está pensado para fotos y suele ocupar menos espacio.',
        },
        {
          q: '¿Cuándo es mejor mantener PNG?',
          a: 'Mantén PNG si tu imagen necesita transparencia, contiene texto fino o si quieres evitar una compresión con pérdida. Para logos, interfaces o capturas detalladas, PNG suele seguir siendo mejor.',
        },
      ],
    },
    'jpg-to-png': {
      title:
        'Convertir JPG a PNG online — calidad ajustable, por lotes | PicShift',
      description:
        'Convierte JPG a PNG para editar, anotar o volver a exportar. Calidad 100 por defecto y hasta 200 archivos por lote en el navegador, sin subir las imágenes fuente.',
      h1: 'Convertir JPG a PNG',
      introText:
        'Convierte JPG a PNG cuando vas a editar, recortar o anotar. No recupera detalle ya perdido en el JPG. Con calidad 95–100, PicShift conserva los píxeles decodificados y solo aplica OxiPNG sin pérdida; por debajo de 95 puede haber cuantización con pérdida.',
      howToSteps: [
        'Arrastra y suelta tus archivos JPG en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Cómo convertir JPG a PNG online?',
          a: 'Arrastra los JPG a PicShift, mantén PNG como formato de salida y descarga. La conversión ocurre dentro del navegador con soporte por lotes (hasta 200 archivos por tanda) y sin subir nada al servidor.',
        },
        {
          q: '¿Convertir JPG a PNG mejora la calidad?',
          a: 'No. Convertir JPG a PNG no restaura el detalle perdido. Con calidad 95–100, el flujo PNG no añade cuantización con pérdida; por debajo de 95 sí puede hacerlo. Compara antes de descargar.',
        },
        {
          q: '¿Cuándo conviene pasar a PNG en lugar de seguir en JPG?',
          a: 'Elige PNG cuando necesites transparencia, capturas de pantalla nítidas, gráficos con texto o un archivo intermedio para editar varias veces. Mantente en JPG si solo vas a compartir o subir un archivo pequeño.',
        },
        {
          q: '¿El PNG resultante pesará más que el JPG original?',
          a: 'Normalmente sí. PNG guarda más información de imagen y descarta menos detalle, así que el archivo crece — es lo esperado cuando priorizas la estabilidad de edición sobre el tamaño.',
        },
        {
          q: '¿Puedo convertir varios JPG a la vez?',
          a: 'Sí. PicShift procesa hasta 200 archivos por lote en el navegador. Para cargas muy grandes, ve en grupos de 50–100 para mantener el navegador fluido.',
        },
        {
          q: '¿Mis archivos se suben a algún servidor?',
          a: 'No se sube el contenido de la imagen para la conversión. Para probar la reutilización sin conexión, completa primero este mismo flujo online para que se carguen y almacenen sus recursos y codec; un formato que nunca se haya usado aún puede necesitar red.',
        },
      ],
    },
    'jpg-to-webp': {
      title:
        'Convertidor de JPG a WebP - Imagenes más ligeras para web | PicShift',
      description:
        'Convierte JPG a WebP para reducir el peso de las imágenes y mejorar la carga de páginas en navegadores modernos.',
      h1: 'Convertir JPG a WebP',
      introText:
        'Convierte imágenes JPG a WebP cuando quieres una imagen más ligera para web sin cambiar demasiado su aspecto. Es una mejora muy común para tiendas, blogs, landings y páginas con muchas fotos.',
      howToSteps: [
        'Arrastra y suelta tus archivos JPG en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a WebP al instante en tu navegador.',
        'Ajusta el control de calidad para equilibrar tamaño y calidad.',
      ],
      faqs: [
        {
          q: '¿Cuánto más pequeño es WebP comparado con JPG?',
          a: 'WebP puede ser menor que JPG con calidad visual similar, pero no hay una reducción fija aplicable a todas las imágenes. Compara el resultado antes de publicarlo.',
        },
        {
          q: '¿Por qué convertir JPG a WebP?',
          a: 'Porque WebP suele pesar menos que JPG con una calidad visual muy parecida. Eso ayuda a cargar más rápido una web y a reducir el tamaño total de imágenes que se transfieren al navegador.',
        },
        {
          q: '¿Cuándo conviene usar WebP en lugar de JPG?',
          a: 'Conviene cuando la imagen está pensada para una página web y tu prioridad es bajar el peso sin empeorar demasiado el resultado visual. En navegadores modernos, WebP suele ser una opción muy práctica.',
        },
        {
          q: '¿Cuándo es mejor mantener JPG?',
          a: 'Mantener JPG tiene sentido si la imagen va a pasar por herramientas antiguas, adjuntos de correo o sistemas que todavía no trabajan bien con WebP. JPG sigue siendo más fácil de abrir en casi cualquier entorno.',
        },
      ],
    },
    'avif-to-jpg': {
      title:
        'Convertidor de AVIF a JPG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte imágenes AVIF a formato JPG en tu navegador. Gratis, privado, sin necesidad de subir archivos.',
      h1: 'Convertir AVIF a JPG',
      introText:
        'Convierte imágenes AVIF al formato JPG universalmente compatible. Todo el procesamiento ocurre localmente.',
      howToSteps: [
        'Arrastra y suelta tus archivos AVIF en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a JPG al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Qué es AVIF?',
          a: 'AVIF es un formato de imagen de nueva generación basado en el codec de video AV1. Ofrece mejor compresión que JPG y WebP, pero su soporte aun esta en crecimiento.',
        },
      ],
    },
    'avif-to-png': {
      title:
        'Convertidor de AVIF a PNG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte AVIF a PNG en tu navegador con calidad 100 por defecto. Gratis y sin subir las imágenes fuente para la conversión.',
      h1: 'Convertir AVIF a PNG',
      introText:
        'Convierte AVIF a PNG. Entre calidad 95 y 100 solo se aplica OxiPNG sin pérdida a los píxeles decodificados; por debajo de 95 la cuantización puede introducir pérdida.',
      howToSteps: [
        'Arrastra y suelta tus archivos AVIF en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG en tu navegador; revisa el ajuste y compara la salida.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Por qué convertir AVIF a PNG?',
          a: 'PNG puede ser más compatible en herramientas que no admiten AVIF. El soporte depende del entorno. Usa calidad 95–100 para limitar el proceso a la optimización OxiPNG sin pérdida.',
        },
      ],
    },
    'image-resizer': {
      title:
        'Redimensionar imagen — cambiar tamaño y resolución online | PicShift',
      description:
        'Cambia el tamaño o la resolución de imagen para Instagram, redes sociales, formularios o e-commerce. Presets o píxeles exactos, hasta 200 archivos por lote, sin subir nada.',
      h1: 'Redimensionar Imágenes',
      introText:
        'Cambia el tamaño o la resolución de una imagen cuando un sitio pide píxeles exactos, una red social impone un cuadrado de 1080×1080 o un formulario rechaza archivos muy grandes. Usa un preset rápido o introduce ancho y alto a medida — todo ocurre en tu navegador y los archivos no salen de tu dispositivo.',
      howToSteps: [
        'Arrastra tus imágenes al área de arriba o haz clic para explorar.',
        'Elige un tamaño predefinido o introduce dimensiones personalizadas.',
        'Elige el formato de salida y la calidad, luego descarga.',
      ],
      faqs: [
        {
          q: '¿Cómo cambiar el tamaño de una imagen sin instalar programas?',
          a: 'Arrastra la imagen a PicShift, elige un preset o escribe ancho y alto en el modo Personalizado, luego descarga. El redimensionado ocurre en tu navegador (sin subir archivos a ningún servidor) y puedes combinarlo con cambio de formato si lo necesitas.',
        },
        {
          q: '¿Cómo cambiar la resolución de una imagen (en píxeles)?',
          a: 'La resolución en pantalla suele medirse en píxeles de ancho y alto. En el modo Personalizado introduces el ancho y el alto deseados (o un porcentaje) y PicShift recalcula la imagen con muestreo de alta calidad.',
        },
        {
          q: '¿Cómo redimensionar una imagen sin deformarla?',
          a: 'Elige una anchura y altura adecuadas para tu uso, o selecciona un preset. PicShift mantiene las proporciones cuando corresponde y aplica un redimensionado de alta calidad para evitar que el resultado se vea degradado.',
        },
        {
          q: '¿Qué tamaño usar para Instagram, Facebook o redes sociales?',
          a: 'Para Instagram en formato cuadrado usa 1080×1080. Para portada de Facebook, 1200×630. Para historias o reels verticales, 1080×1920. Introduce el tamaño exacto en el modo Personalizado y descarga al instante.',
        },
        {
          q: '¿Qué presets de tamaño hay disponibles?',
          a: 'PicShift ofrece Máx. 1920 px (lado largo), Máx. 1080 px, escala al 50 %, y un modo Personalizado para introducir dimensiones exactas en píxeles o un porcentaje.',
        },
        {
          q: '¿Qué tamaño elegir para subir una foto a un sitio o enviarla?',
          a: 'Para un envío rápido o un formulario web, una imagen de 1080 px o 1920 px en el lado largo suele ser suficiente. Si el sitio pide un tamaño exacto, usa el modo Personalizado con esos píxeles.',
        },
        {
          q: '¿Puedo redimensionar y cambiar el formato a la vez?',
          a: 'Sí. Puedes cambiar el formato de salida (JPG, PNG, WebP, AVIF) y las dimensiones en un solo paso. Si lo que necesitas es sobre todo bajar el peso, combínalo con /es/image-compressor.',
        },
        {
          q: '¿Mis imágenes se suben a algún servidor?',
          a: 'No se sube el contenido de la imagen para la conversión. Para probar la reutilización sin conexión, completa primero este mismo flujo online para que se carguen y almacenen sus recursos y codec; un formato que nunca se haya usado aún puede necesitar red.',
        },
      ],
    },
    'image-compressor': {
      title:
        'Comprimir imágenes online — gratis, en lote, sin subir | PicShift',
      description:
        'Comprime JPG, PNG, WebP, HEIC y AVIF para reducir el peso antes de enviar por correo, adjuntar o subir a una web. Hasta 200 imágenes por lote en el navegador, sin subir nada al servidor.',
      h1: 'Comprimir Imágenes Gratis',
      introText:
        'Reduce el peso de tus fotos cuando un correo rechaza el adjunto o una web pide un archivo menor. Ajusta la calidad y compara tamaño y detalles antes de descargar; el resultado depende de cada imagen y formato.',
      howToSteps: [
        'Arrastra tus imágenes al área de arriba o haz clic para buscarlas.',
        'Ajusta el control de calidad para equilibrar peso y aspecto.',
        'Haz clic en Descargar para guardar las imágenes comprimidas, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Cómo comprimir una imagen sin perder calidad?',
          a: 'Arrastra el archivo, empieza con calidad 80–85 y usa la vista de comparación. Es solo un punto de partida: el tamaño y los artefactos dependen de la imagen, el formato y el ajuste. Cambia el valor en pasos pequeños.',
        },
        {
          q: '¿Puedo comprimir muchas imágenes a la vez?',
          a: 'Sí. Puedes arrastrar hasta 200 archivos en un solo lote. Para lotes muy grandes, si el navegador va lento, conviene procesar en grupos más pequeños y descargar entre tandas. Como todo es local, no hay cola de servidor.',
        },
        {
          q: '¿Cómo comprimir una foto para enviar por correo (Gmail, Outlook)?',
          a: 'Comprueba el límite actual del servicio de correo y el tamaño final del adjunto. Empieza con calidad 80, compara el resultado y, si sigue siendo grande, reduce también las dimensiones; ninguna calidad garantiza un tamaño concreto.',
        },
        {
          q: '¿Cuánto puedo comprimir mis imágenes?',
          a: 'Depende del contenido. Calidad 80 es un punto de partida, no un porcentaje garantizado. Fotos, capturas, logos y gráficos responden de forma distinta; compara el tamaño y los detalles y considera PNG o WebP para gráficos nítidos.',
        },
        {
          q: '¿Qué formatos puedo comprimir?',
          a: 'Entrada: JPG, PNG, WebP, HEIC y AVIF. Salida: JPG, PNG, WebP o AVIF. WebP y JPG pueden ser opciones prácticas según el destino, pero compara tamaño, apariencia y compatibilidad antes de elegir.',
        },
        {
          q: '¿Comprimir o redimensionar, cuál es mejor?',
          a: 'Si las dimensiones superan lo que necesita el destino, redimensionar puede ahorrar más que recodificar sin cambiar píxeles. Si ya son adecuadas, prueba solo compresión. Ajusta ambos valores al uso final y compara el resultado.',
        },
        {
          q: '¿Se suben mis imágenes a un servidor?',
          a: 'No. La compresión se hace dentro de tu navegador con JavaScript y Canvas. Los archivos no salen del dispositivo, no hay subida, no se guarda copia en ningún servidor y no necesitas registrarte.',
        },
        {
          q: '¿Comprimir una imagen ya comprimida sirve de algo?',
          a: 'Cada nueva compresión con pérdida añade artefactos y el ahorro disminuye. Si ya bajaste mucho la calidad y vuelves a comprimir, lo más probable es que solo pierdas detalle sin reducir tamaño. Suele rendir más cambiar de formato (por ejemplo JPG → WebP) o redimensionar antes que insistir comprimiendo.',
        },
      ],
    },
    'metadata-remover': {
      title: 'Eliminar metadatos de imagen — EXIF, GPS, datos de cámara | PicShift',
      description:
        'Elimina metadatos EXIF, ubicación GPS, modelo de cámara y otros datos ocultos de imágenes JPG, PNG, WebP, HEIC y AVIF. Se ejecuta en tu navegador, sin subir nada.',
      h1: 'Eliminar metadatos de imagen',
      introText:
        'Revisa los metadatos ocultos antes de compartir. PicShift recodifica la imagen en el navegador sin copiar intencionadamente los campos compatibles que detecta; no sube el contenido de la imagen fuente para esta operación.',
      howToSteps: [
        'Arrastra tus imágenes al área de arriba o haz clic para buscarlas.',
        'Revisa los campos de metadatos compatibles detectados por el análisis local.',
        'Pulsa recodificar y descarga los resultados correctos por separado o en un ZIP.',
      ],
      faqs: [
        {
          q: '¿Qué metadatos se eliminan?',
          a: 'El análisis puede detectar GPS, datos de cámara y lente, fechas, etiquetas de software y miniaturas. La recodificación no copia intencionadamente esos campos, pero pueden quedar datos añadidos por el codificador del navegador o el perfil de color; verifica de forma independiente cualquier resultado crítico.',
        },
        {
          q: '¿Eliminar metadatos afecta la calidad de la imagen?',
          a: 'La herramienta busca eliminar datos no visuales. Algunos formatos pueden requerir recodificación, así que compara el resultado si necesitas fidelidad estricta; la salida depende del formato de entrada.',
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
          title: 'Alcance y límites',
          body: 'Esta herramienta trata los metadatos incrustados en el archivo. La recodificación no borra objetos o texto visibles, pero puede cambiar valores de píxel en formatos con pérdida; aborda la información oculta, no el contenido que ya se ve.',
          items: [
            'Los campos detectados pueden incluir GPS, modelo del dispositivo, fecha, hora y etiquetas de software; la limpieza no borra caras, matrículas, marcas de agua ni texto visible.',
            'JPG, PNG, WebP y AVIF se descargan en el mismo formato. Los HEIC y HEIF limpios se descargan como JPG porque el navegador todavía no puede escribirlos de vuelta como HEIC o HEIF.',
            'Algunas apps y redes sociales eliminan parte de los metadatos al subir una imagen, pero ese comportamiento no es consistente y puede cambiar. Lo más seguro es limpiar el archivo tu mismo antes de usarlo.',
          ],
        },
        {
          title: 'Cómo eliminar metadatos de una imagen',
          body: 'El flujo es simple: revisa primero, limpia después y luego usa la copia limpia cuando la necesites.',
          items: [
            'Arrastra la imagen a la herramienta y comprueba que información contiene realmente el archivo.',
            'Un resultado de 0 significa que no se detectó ningún campo compatible, no que todos los bloques posibles estén ausentes. Los campos de GPS, dispositivo o fecha detectados se marcan como sensibles.',
            'Descarga el archivo limpio y usa esa versión cuando vayas a guardarlo, enviarlo, subirlo o conservar una copia.',
          ],
        },
      ],
    },
  },
}

export default es
