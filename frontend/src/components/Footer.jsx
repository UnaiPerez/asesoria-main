import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <img 
              src="/logo.png" 
              alt="Argomaniz y Garcia" 
              className="h-16 w-auto mb-4"
            />
            <h3 className="font-bold text-lg mb-3">Argomaniz y Garcia Asesores S.L.</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Asesoría fiscal, laboral, contable y legal en Laguardia. 
              Más de 10 años de experiencia al servicio de empresas y particulares.
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Calle Mayor 55, 1º<br />
                  01300 Laguardia, Álava
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="tel:945600676" className="text-slate-300 hover:text-amber-400 transition-colors">
                  945 600 676
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@argomanizgarcia.com" className="text-slate-300 hover:text-amber-400 transition-colors">
                  info@argomanizgarcia.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Lun - Vie: 9:00 - 14:00, 16:00 - 19:00
                </span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/quienes-somos" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Clientes
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-slate-300 hover:text-amber-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-amber-400">Servicios</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Asesoramiento Fiscal</li>
              <li>Asesoramiento Laboral</li>
              <li>Asesoramiento Contable</li>
              <li>Asesoramiento Legal</li>
              <li>Gestoría Administrativa</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © 2013-{new Date().getFullYear()} Argomaniz y Garcia Asesores S.L. - Todos los derechos reservados
            </p>
            <div className="flex items-center gap-10">
                <p>Aviso Legal</p>
                <p>Política de Privacidad</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
