import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

/**
 * Página para cualquier dirección que no exista.
 *
 * Hace falta desde que el servidor manda todas las direcciones a la aplicación
 * (ver public/.htaccess): sin una ruta que recoja lo que no encaja, una
 * dirección mal escrita pintaba la cabecera y el pie con el hueco vacío en
 * medio, que parece una web rota. Comprobado el 5 de septiembre de 2026.
 *
 * Importa más de lo que parece porque los enlaces se comparten por WhatsApp y
 * por correo, que es justo donde se cortan y se copian a medias.
 */
export const NoEncontrado = () => {
  const enlaces = [
    { to: '/servicios', label: 'Nuestros servicios' },
    { to: '/deca', label: 'DeCA: el documento de transporte' },
    { to: '/contacto', label: 'Contacto' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-7xl md:text-8xl font-bold text-amber-500 mb-4">404</p>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Esta página no existe
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          Puede que el enlace esté mal escrito o se haya cortado al copiarlo. La web sigue
          funcionando: desde aquí puedes seguir.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300">
              <Home className="mr-2 w-5 h-5" />
              Ir a la portada
            </Button>
          </Link>
          <a href="tel:945600676">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
              <Phone className="mr-2 w-5 h-5" />
              Llamarnos
            </Button>
          </a>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            O quizá buscabas
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {enlaces.map((e) => (
              <Link
                key={e.to}
                to={e.to}
                className="inline-flex items-center justify-center gap-1 text-slate-700 hover:text-amber-600 font-medium transition-colors"
              >
                {e.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
