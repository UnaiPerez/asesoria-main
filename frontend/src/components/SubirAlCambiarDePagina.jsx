import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Sube al principio cada vez que se cambia de página.
 *
 * React Router no toca el scroll al navegar: si estabas a media pantalla
 * mirando las tarjetas de servicios y pinchas un enlace, la página nueva se
 * abre a esa misma altura, con el título fuera de la vista. Parece que no ha
 * pasado nada, o que la web va mal.
 *
 * Se salta el salto cuando el navegador restaura la posición él mismo —al dar
 * a atrás o adelante—, porque ahí volver a donde estabas es justo lo que la
 * persona espera.
 */
export const SubirAlCambiarDePagina = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};
