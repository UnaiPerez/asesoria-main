import { useLocation } from 'react-router-dom';

/**
 * Botón flotante para escribir a la asesoría por WhatsApp.
 *
 * Va al móvil (629 125 142), el mismo que usa la página del DeCA. Abre el
 * chat vacío: el mensaje lo escribe cada uno.
 *
 * No sale en /deca: allí el botón grande de WhatsApp ya es la llamada
 * principal de la página, y dos a la vez sobran.
 *
 * En el móvil tapa una esquina del final de la página; para que no se coma
 * nada, el pie lleva un margen inferior en pantallas pequeñas (Footer.jsx).
 */
const TELEFONO = '34629125142';

export const BotonWhatsApp = () => {
  const { pathname } = useLocation();
  if (pathname.replace(/\/$/, '') === '/deca') return null;

  return (
    <a
      href={`https://wa.me/${TELEFONO}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] shadow-lg flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
    >
      {/* Logotipo de WhatsApp: es lo que la gente reconoce de un vistazo. */}
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="white" aria-hidden="true">
        <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.71A12.95 12.95 0 0 0 16.004 29C23.18 29 29 23.18 29 16S23.18 3 16.004 3Zm0 23.62c-2.04 0-4.04-.55-5.78-1.6l-.41-.24-3.96 1.02 1.06-3.86-.27-.4A10.6 10.6 0 0 1 5.38 16c0-5.86 4.77-10.62 10.63-10.62 5.85 0 10.61 4.76 10.61 10.62 0 5.86-4.76 10.62-10.62 10.62Zm5.83-7.95c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.43 5.44 4.81.76.33 1.35.52 1.82.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
};
