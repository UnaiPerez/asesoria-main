import React from 'react';
import { Building2, Wine, ShoppingBag, Users, Briefcase, Home } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export const Clientes = () => {
  const sectors = [
    {
      icon: Wine,
      title: 'Bodegas y Sector Vitivinícola',
      description: 'Asesoramiento especializado para bodegas, viñedos y empresas del sector del vino de la Rioja Alavesa.',
      services: ['Gestión fiscal específica del sector', 'Contabilidad agrícola', 'Ayudas y subvenciones', 'Contratos de vendimia']
    },
    {
      icon: ShoppingBag,
      title: 'Comercio y Retail',
      description: 'Soluciones para tiendas, comercios y establecimientos minoristas.',
      services: ['Control de stock contable', 'IVA en operaciones comerciales', 'Gestión de empleados', 'Licencias comerciales']
    },
    {
      icon: Building2,
      title: 'Hostelería y Turismo',
      description: 'Asesoramiento para hoteles, restaurantes, bares y casas rurales.',
      services: ['Gestión de nóminas hostelería', 'Fiscalidad del sector', 'Licencias turísticas', 'Contratos temporales']
    },
    {
      icon: Briefcase,
      title: 'Pymes y Empresas de Servicios',
      description: 'Asesoría integral para pequeñas y medianas empresas de todos los sectores.',
      services: ['Contabilidad completa', 'Impuestos societarios', 'Gestión laboral', 'Planificación estratégica']
    },
    {
      icon: Users,
      title: 'Autónomos y Profesionales',
      description: 'Acompañamiento personalizado para trabajadores por cuenta propia.',
      services: ['Alta como autónomo', 'Declaraciones trimestrales', 'Gestión de gastos', 'Facturación']
    },
    {
      icon: Home,
      title: 'Particulares',
      description: 'Servicios fiscales y de gestión para personas físicas.',
      services: ['Declaración de la renta', 'Gestión de herencias', 'Alquileres e inmuebles', 'Inversiones']
    }
  ];

  const testimonials = [
    {
      name: 'María G.',
      business: 'Bodega en Laguardia',
      comment: 'Llevan la contabilidad de nuestra bodega desde hace años. Su conocimiento del sector del vino y cercanía son increíbles.'
    },
    {
      name: 'Carlos M.',
      business: 'Restaurante',
      comment: 'Nos han ayudado con todas las gestiones laborales y fiscales. Un trato muy profesional y personal.'
    },
    {
      name: 'Laura S.',
      business: 'Autónoma',
      comment: 'Me dieron de alta como autónoma y desde entonces me llevan todo. Siempre disponibles y resuelven mis dudas rápidamente.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1660815312830-7cb4e23547a8" 
            alt="Nuestros clientes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/75"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestros Clientes
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed">
            Especializados en el tejido empresarial de la Rioja Alavesa
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-slate-700 leading-relaxed">
            En <span className="font-bold text-amber-600">Argomaniz y Garcia Asesores</span> trabajamos con empresas, 
            autónomos y particulares de diversos sectores, con especial conocimiento del tejido empresarial local de 
            Laguardia y la Rioja Alavesa. Entendemos las particularidades de cada sector y ofrecemos soluciones personalizadas.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Sectores que Atendemos
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experiencia en múltiples sectores económicos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <sector.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {sector.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {sector.description}
                  </p>
                  <div className="space-y-2">
                    {sector.services.map((service, idx) => (
                      <div key={idx} className="text-sm text-slate-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-slate-600">
              La confianza de nuestros clientes es nuestro mayor valor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-2 border-slate-100 hover:border-amber-400 transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className="text-4xl text-amber-400 mb-4">"</div>
                  <p className="text-slate-700 mb-6 leading-relaxed italic">
                    {testimonial.comment}
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1724693880256-5fca93912c32" 
            alt="Rioja Alavesa"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <Wine className="w-16 h-16 mx-auto text-amber-400 mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Conocimiento del Territorio
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Nuestra ubicación en Laguardia nos permite conocer en profundidad las particularidades del 
              tejido empresarial de la Rioja Alavesa. Trabajamos especialmente con bodegas, empresas del sector 
              turístico y comercio local, entendiendo sus necesidades específicas y los retos del sector.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">200+</div>
                <div className="text-slate-300">Clientes Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">10+</div>
                <div className="text-slate-300">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">6</div>
                <div className="text-slate-300">Sectores Principales</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
