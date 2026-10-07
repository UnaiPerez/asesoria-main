import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import datos from '../paginas.json';

const { paginas } = datos;

/**
 * Pone el título de la pestaña de cada sección al navegar por el menú.
 *
 * Quien entra directo por un enlace ya recibe el título bueno, porque al
 * compilar cada sección tiene su propio .html (scripts/portadas-para-compartir.js).
 * Pero al pinchar en el menú no se descarga nada, y sin esto la pestaña se
 * quedaba con el título de la página por la que se entró.
 */
export const TituloDePagina = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const ruta = pathname.replace(/^\/|\/$/g, '');
    const pagina = paginas.find((p) => p.ruta === ruta);
    document.title = pagina ? pagina.titulo : 'Página no encontrada | Argomaniz y García Asesores';
  }, [pathname]);

  return null;
};
