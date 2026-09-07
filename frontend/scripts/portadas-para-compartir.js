/**
 * Genera una portada HTML propia para las páginas que se van a compartir.
 *
 * El problema: esto es una aplicación de React servida como ficheros estáticos.
 * Todas las direcciones sirven el mismo `index.html`, con el mismo título y la
 * misma descripción. WhatsApp, Facebook y las vistas previas de Google **no
 * ejecutan JavaScript**: leen el HTML tal y como llega. Así que al mandar
 * ayg-asesores.com/deca por WhatsApp, la vista previa decía «Asesoría en
 * Laguardia | Fiscal, Laboral y Contable» y ni mencionaba el DeCA. En una
 * página cuyo único propósito es mandarse por WhatsApp, eso se carga el trabajo.
 *
 * La solución: después de compilar, se copia el `index.html` a
 * `build/deca/index.html` cambiándole las etiquetas. Como el `.htaccess` sirve
 * primero los ficheros que existen de verdad, quien entre a /deca recibe esa
 * copia —con las etiquetas correctas para la vista previa— y dentro arranca la
 * misma aplicación de siempre, que pinta la página del DeCA. Nadie nota nada.
 *
 * Se hace copiando el index recién compilado y no con una plantilla aparte a
 * propósito: los nombres de los ficheros de JavaScript llevan una huella que
 * cambia en cada compilación, y una plantilla fija quedaría desfasada al primer
 * despliegue.
 *
 * Se lanza solo al hacer `npm run build`.
 */
const fs = require('fs');
const path = require('path');

const BUILD = path.join(__dirname, '..', 'build');
const DOMINIO = 'https://www.ayg-asesores.com';

const PAGINAS = [
  {
    ruta: 'deca',
    titulo: 'El documento de control del transporte pasa a ser digital | Argomaniz y García',
    descripcion:
      'Desde el 5 de octubre de 2026 hay que llevar a bordo el documento de control ' +
      'administrativo (DeCA) en formato electrónico. Te explicamos qué cambia, cómo se ' +
      'controla en carretera y cómo cumplirlo.',
    imagen: '/fotos/deca-carretera.webp',
  },
];

/**
 * Cambia una etiqueta si ya existe, y la añade al <head> si no.
 *
 * Sustituir en vez de añadir no es un detalle: el `index.html` ya trae las
 * etiquetas generales de la web, y si estas se limitasen a añadirse quedarían
 * las dos. Los rastreadores se quedan con la primera, así que WhatsApp seguiría
 * enseñando el título de la asesoría en vez del del DeCA.
 *
 * El atributo y su valor van por separado a posta: buscar solo «name» casaría
 * con la primera etiqueta que lo lleve, que puede ser cualquiera.
 */
function ponerEtiqueta(html, atributo, valor, etiquetaNueva) {
  const re = new RegExp(`<meta[^>]*${atributo}=["']${valor}["'][^>]*/?>`, 'i');
  return re.test(html)
    ? html.replace(re, etiquetaNueva)
    : html.replace('</head>', `  ${etiquetaNueva}\n  </head>`);
}

const original = fs.readFileSync(path.join(BUILD, 'index.html'), 'utf8');

for (const p of PAGINAS) {
  let html = original;

  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${p.titulo}</title>`);

  // Cada una sustituye a la general si ya estaba. Cada aplicación mira las
  // suyas: WhatsApp y Facebook las og:, y X las twitter:.
  const cambios = [
    ['name', 'description', `<meta name="description" content="${p.descripcion}"/>`],
    ['property', 'og:type', `<meta property="og:type" content="article"/>`],
    ['property', 'og:site_name', `<meta property="og:site_name" content="Argomaniz y García Asesores"/>`],
    ['property', 'og:locale', `<meta property="og:locale" content="es_ES"/>`],
    ['property', 'og:title', `<meta property="og:title" content="${p.titulo}"/>`],
    ['property', 'og:description', `<meta property="og:description" content="${p.descripcion}"/>`],
    ['property', 'og:url', `<meta property="og:url" content="${DOMINIO}/${p.ruta}"/>`],
    ['property', 'og:image', `<meta property="og:image" content="${DOMINIO}${p.imagen}"/>`],
    ['property', 'og:image:width', `<meta property="og:image:width" content="1920"/>`],
    ['property', 'og:image:height', `<meta property="og:image:height" content="1280"/>`],
    ['name', 'twitter:card', `<meta name="twitter:card" content="summary_large_image"/>`],
    ['name', 'twitter:title', `<meta name="twitter:title" content="${p.titulo}"/>`],
    ['name', 'twitter:description', `<meta name="twitter:description" content="${p.descripcion}"/>`],
    ['name', 'twitter:image', `<meta name="twitter:image" content="${DOMINIO}${p.imagen}"/>`],
  ];
  for (const [atributo, valor, etiqueta] of cambios) {
    html = ponerEtiqueta(html, atributo, valor, etiqueta);
  }
  html = html.replace('</head>', `  <link rel="canonical" href="${DOMINIO}/${p.ruta}"/>\n  </head>`);

  const carpeta = path.join(BUILD, p.ruta);
  fs.mkdirSync(carpeta, { recursive: true });
  fs.writeFileSync(path.join(carpeta, 'index.html'), html);
  console.log(`  /${p.ruta}  portada propia con vista previa`);
}
