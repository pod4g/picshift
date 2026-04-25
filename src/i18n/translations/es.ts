import type { PageTranslations } from '../config'

const es: PageTranslations = {
  home: {
    title:
      'PicShift - Convertidor de Imágenes Gratis | HEIC, WebP, PNG, JPG, AVIF | Sin Subir Archivos',
    description:
      'Convierte imágenes al instante en tu navegador, sin subir archivos. De HEIC a JPG, de WebP a PNG, AVIF y más. 100% privado, funciona sin conexión. Gratis, sin límites y sin registro.',
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
        'Convertir HEIC a JPG online — fotos del iPhone en tu navegador | PicShift',
      description:
        'Convierte HEIC a JPG cuando Windows, una página web, un correo o un formulario no abre las fotos del iPhone. Hasta 200 archivos por lote en el navegador, sin subir nada.',
      h1: 'Convertir HEIC a JPG',
      introText:
        'Convierte HEIC a JPG cuando un PC con Windows, un sitio web, un correo o un formulario rechaza las fotos del iPhone. JPG es el formato que abre todo el mundo, y todo el proceso ocurre en tu navegador — las fotos nunca salen de tu dispositivo.',
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
          a: 'La configuración predeterminada (calidad 85) produce un JPG visualmente idéntico al HEIC original en pantalla. Si necesitas máxima fidelidad para imprimir o archivar, sube el control de calidad a 90–95.',
        },
        {
          q: '¿La conversión conserva la rotación y la fecha de la foto?',
          a: 'Sí. PicShift conserva la orientación correcta y respeta los metadatos básicos. Si prefieres eliminar EXIF antes de compartir, puedes pasar el resultado por /es/metadata-remover.',
        },
        {
          q: '¿Cuántas fotos HEIC puedo convertir a la vez?',
          a: 'Hasta 200 archivos por lote directamente en el navegador. Para tandas muy grandes, ve en grupos de 50–100 para mantener el navegador fluido.',
        },
        {
          q: '¿Es seguro? ¿Mis fotos se suben a algún servidor?',
          a: 'No. PicShift procesa todo en tu navegador con WebAssembly — las fotos nunca salen de tu dispositivo. Puedes desconectarte de internet después de cargar la página y la herramienta sigue funcionando.',
        },
        {
          q: '¿Hay alguna alternativa si necesito transparencia?',
          a: 'JPG no soporta transparencia. Si tu foto la necesita, usa /es/heic-to-png (sin pérdida) o convierte a WebP, que combina transparencia y archivos pequeños.',
        },
      ],
    },
    'heic-to-png': {
      title:
        'HEIC a PNG online - Convertidor sin subir archivos | PicShift',
      description:
        'Pasa fotos HEIC a PNG cuando necesitas calidad sin pérdida, transparencia o un archivo más estable para editar. Hasta 200 archivos en el navegador, sin subirlos a ningún servidor.',
      h1: 'Convertir HEIC a PNG',
      introText:
        'Convierte fotos HEIC del iPhone a PNG cuando necesitas un archivo sin pérdida para edición, revisión o diseño. El PNG es más pesado que el JPG, pero es mejor opción cuando la estabilidad de la imagen importa más que el tamaño.',
      howToSteps: [
        'Arrastra y suelta tus archivos HEIC en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG sin pérdida al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Por qué convertir HEIC a PNG en lugar de JPG?',
          a: 'Porque PNG no añade otra capa de compresión con pérdida. Es mejor para edición, anotaciones, revisión de diseño o cuando necesitas un archivo estable que se pueda reexportar sin degradarse.',
        },
        {
          q: '¿Los archivos PNG son más grandes que los HEIC o JPG?',
          a: 'Sí, bastante más grandes en la mayoría de fotos. HEIC comprime muy bien y PNG guarda mucha más información por píxel. El aumento de tamaño es normal cuando priorizas la calidad sin pérdida.',
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
          a: 'No. PNG es sin pérdida y suele pesar más, pero es mejor cuando vas a retocar, recortar o reexportar varias veces. JPG es más ligero y práctico si solo quieres compartir o subir la foto con menos peso.',
        },
      ],
    },
    'heic-to-webp': {
      title:
        'Convertidor de HEIC a WebP - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte fotos HEIC a formato WebP en tu navegador. Archivos más pequeños, gran calidad, 100% privado.',
      h1: 'Convertir HEIC a WebP',
      introText:
        'Convierte tus fotos HEIC del iPhone al formato moderno WebP. WebP ofrece archivos un 25-34% más pequeños que JPG con la misma calidad.',
      howToSteps: [
        'Arrastra y suelta tus archivos HEIC en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a WebP al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Qué es WebP?',
          a: 'WebP es un formato de imagen moderno desarrollado por Google. Ofrece archivos un 25-34% más pequeños que JPG con calidad equivalente. WebP es compatible con todos los navegadores principales (96,5% de soporte global).',
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
        'Convertir WebP a JPG online — pasar archivo en el navegador | PicShift',
      description:
        'Pasa archivos WebP a JPG cuando una app, un correo o un formulario no aceptan WebP. Conversión por lotes directamente en el navegador, sin subir nada a un servidor y sin registrarse.',
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
          a: 'WebP y JPG son formatos con pérdida, así que siempre hay una pequeña recompresión. Con calidad entre 85 y 90 la diferencia en pantalla es prácticamente imperceptible. Si necesitas una salida sin pérdida (impresión, edición posterior), prueba <a href="/es/webp-to-png">WebP a PNG</a>.',
        },
        {
          q: '¿WebP a JPG puede hacer el archivo más grande?',
          a: 'Sí, puede pasar. WebP suele comprimir mejor que JPG, así que al convertir para ganar compatibilidad el archivo final puede pesar un poco más, sobre todo en fotos de alta resolución. Si el peso importa, después de convertir pasa la imagen por nuestro <a href="/es/image-compressor">compresor de imágenes</a>.',
        },
        {
          q: '¿Puedo convertir varios WebP a la vez?',
          a: 'Sí. Arrastra varios archivos juntos — incluso cientos — y PicShift los procesa en lote dentro del navegador. Puedes descargarlos uno a uno o todos juntos en un ZIP. Como nada se sube a un servidor, no hay cola ni espera.',
        },
        {
          q: '¿Cuándo conviene usar PNG en lugar de JPG?',
          a: 'Conviene PNG si la imagen necesita transparencia (logos, iconos) o si quieres una salida sin pérdida para edición. JPG tiene más sentido cuando la prioridad es abrir, compartir o subir el archivo con menos problemas. En esos casos usa el <a href="/es/webp-to-png">convertidor WebP a PNG</a>.',
        },
      ],
    },
    'webp-to-png': {
      title:
        'Convertidor de WebP a PNG - Gratis, Privado, Sin Subir | PicShift',
      description:
        'Convierte WebP a PNG cuando necesitas transparencia, una salida sin pérdida o un archivo más cómodo para editar.',
      h1: 'Convertir WebP a PNG',
      introText:
        'Convierte imágenes WebP a PNG cuando necesitas mantener la transparencia, editar la imagen con más margen o guardar una salida sin pérdida. PNG suele pesar más, pero es una mejor opción para ciertos flujos de trabajo.',
      howToSteps: [
        'Arrastra y suelta tus archivos WebP en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG sin pérdida al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿La conversión de WebP a PNG pierde calidad?',
          a: 'No. PNG es un formato sin pérdida, por lo que la conversión preserva cada píxel de la fuente WebP. El archivo PNG resultante será más grande pero idéntico en calidad.',
        },
        {
          q: '¿Cuándo conviene convertir WebP a PNG?',
          a: 'Conviene cuando necesitas transparencia, una imagen más estable para edición o un archivo que no vuelva a pasar por compresión con pérdida. También es una buena opción para revisión, diseño o reutilización del recurso.',
        },
        {
          q: '¿Por qué el PNG pesa más que el WebP?',
          a: 'Porque PNG guarda mucha más información de imagen y no busca la misma eficiencia de compresión que WebP. El aumento de tamaño es normal cuando priorizas transparencia o una salida sin pérdida.',
        },
        {
          q: '¿Cuándo es mejor JPG que PNG?',
          a: 'JPG suele ser mejor si no necesitas transparencia y tu prioridad es un archivo más ligero para compartir, subir o enviar. PNG tiene más sentido cuando prefieres estabilidad y calidad sin pérdida.',
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
        'Convertir JPG a PNG online — sin pérdida, por lotes | PicShift',
      description:
        'Convertir JPG a PNG cuando necesitas una versión sin pérdida para editar, anotar o re-exportar. Hasta 200 archivos por lote, todo en tu navegador, sin subir nada.',
      h1: 'Convertir JPG a PNG',
      introText:
        'Convierte JPG a PNG cuando vas a editar, recortar o anotar una imagen y no quieres que cada nueva exportación pierda calidad. PNG conserva los píxeles intactos — no recupera detalle ya perdido en el JPG, pero evita degradación adicional.',
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
          a: 'No. Convertir de JPG a PNG no restaura la calidad perdida durante la compresión JPG. Sin embargo, convertir a PNG evita cualquier pérdida adicional si vas a editar y volver a guardar la imagen.',
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
          a: 'No. Todo se procesa en tu navegador con WebAssembly. Puedes incluso desconectarte de internet después de cargar la página y la herramienta sigue funcionando.',
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
          a: 'WebP es 25-34% más pequeño que JPG con la misma calidad visual en comparaciones de referencia. Un JPG de 1 MB se convierte en 650-750 KB como WebP sin diferencia visible.',
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
        'Convierte imágenes AVIF a formato PNG sin pérdida en tu navegador. Gratis, privado, sin subir archivos.',
      h1: 'Convertir AVIF a PNG',
      introText:
        'Convierte imágenes AVIF a formato PNG sin pérdida. Perfecto para preservar la máxima calidad.',
      howToSteps: [
        'Arrastra y suelta tus archivos AVIF en el área de arriba, o haz clic para buscarlos.',
        'Los archivos se convierten a PNG sin pérdida al instante en tu navegador.',
        'Haz clic en Descargar para guardar cada archivo, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Por qué convertir AVIF a PNG?',
          a: 'AVIF tiene soporte limitado en algunas aplicaciones. Convertir a PNG te da un formato sin pérdida y universalmente compatible que funciona en todas partes.',
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
          a: 'No. Todo se procesa en tu navegador con WebAssembly. Puedes incluso desconectarte de internet después de cargar la página y la herramienta sigue funcionando.',
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
        'Reduce el peso de tus fotos sin que se note la diferencia: útil cuando un correo rechaza el adjunto, una web pide menos de 2 MB o quieres aligerar una carpeta. Puedes arrastrar varios archivos a la vez, ajustar la calidad y comparar antes y después antes de descargar.',
      howToSteps: [
        'Arrastra tus imágenes al área de arriba o haz clic para buscarlas.',
        'Ajusta el control de calidad para equilibrar peso y aspecto.',
        'Haz clic en Descargar para guardar las imágenes comprimidas, o en Descargar todo para obtener un ZIP.',
      ],
      faqs: [
        {
          q: '¿Cómo comprimir una imagen sin perder calidad?',
          a: 'Arrastra el archivo, deja la calidad entre 80 y 85 y usa la vista de comparación. En ese rango casi no se nota la diferencia en pantalla, pero el archivo suele bajar entre un 40% y un 60% respecto al original. Solo por debajo de 70 empiezan a aparecer artefactos visibles en cielos, piel y degradados.',
        },
        {
          q: '¿Puedo comprimir muchas imágenes a la vez?',
          a: 'Sí. Puedes arrastrar hasta 200 archivos en un solo lote. Para lotes muy grandes, si el navegador va lento, conviene procesar en grupos más pequeños y descargar entre tandas. Como todo es local, no hay cola de servidor.',
        },
        {
          q: '¿Cómo comprimir una foto para enviar por correo (Gmail, Outlook)?',
          a: 'Gmail acepta hasta 25 MB por correo y Outlook 20 MB, pero muchos correos corporativos cortan en 10 MB. Comprimir con calidad 80 suele bastar para entrar en esos límites sin tocar la resolución. Si aún se queda grande, combina la compresión con un redimensionado a 2000 px en el lado largo.',
        },
        {
          q: '¿Cuánto puedo comprimir mis imágenes?',
          a: 'Depende del contenido. Una JPG de móvil baja entre un 40% y un 60% con calidad 80; un PNG de captura convertido a JPG puede perder un 70–80%. Las imágenes con pocos colores (logos, gráficos) reducen menos: en esos casos PNG o WebP funcionan mejor que JPG.',
        },
        {
          q: '¿Qué formatos puedo comprimir?',
          a: 'Entrada: JPG, PNG, WebP, HEIC y AVIF. Salida: JPG, PNG, WebP o AVIF. Para web moderna, WebP a calidad 80 suele ser el mejor compromiso entre peso y calidad; para máxima compatibilidad (correo, Office, sistemas antiguos) lo más seguro sigue siendo JPG.',
        },
        {
          q: '¿Comprimir o redimensionar, cuál es mejor?',
          a: 'Si la imagen es enorme en píxeles (por ejemplo una foto 4000×3000 para usar en una web), redimensionar suele bajar más el peso que solo comprimir. Para fotos que ya tienen un tamaño razonable, comprimir es el paso más directo. En la práctica conviene combinar: redimensiona a 1920–2000 px y comprime a 80.',
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
          title: 'Alcance y límites',
          body: 'Esta herramienta elimina los metadatos incrustados en el archivo. No modifica los píxeles visibles de la imagen, así que sirve para evitar fugas de información oculta, no para borrar contenido que ya se ve en pantalla.',
          items: [
            'Puede quitar GPS, modelo del dispositivo, fecha, hora y etiquetas de software, pero no borra caras, matriculas, marcas de agua ni texto que ya aparezca en la imagen.',
            'JPG, PNG, WebP y AVIF se descargan en el mismo formato. Los HEIC y HEIF limpios se descargan como JPG porque el navegador todavía no puede escribirlos de vuelta como HEIC o HEIF.',
            'Algunas apps y redes sociales eliminan parte de los metadatos al subir una imagen, pero ese comportamiento no es consistente y puede cambiar. Lo más seguro es limpiar el archivo tu mismo antes de usarlo.',
          ],
        },
        {
          title: 'Cómo eliminar metadatos de una imagen',
          body: 'El flujo es simple: revisa primero, limpia después y luego usa la copia limpia cuando la necesites.',
          items: [
            'Arrastra la imagen a la herramienta y comprueba que información contiene realmente el archivo.',
            'Si solo aparecen ancho, alto o espacio de color, verás 0 datos sensibles. Si incluye GPS, datos del dispositivo o marcas de tiempo, se marcara como sensible.',
            'Descarga el archivo limpio y usa esa versión cuando vayas a guardarlo, enviarlo, subirlo o conservar una copia.',
          ],
        },
      ],
    },
  },
}

export default es
