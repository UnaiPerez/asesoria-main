import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, FileText, Calculator, Scale, Building, Monitor, Award, TrendingUp, Truck, CalendarClock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const Home = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Asesoramiento Fiscal',
      description: 'IRPF, IVA, Impuesto de Sociedades y planificación fiscal personalizada.',
    },
    {
      icon: Users,
      title: 'Asesoramiento Laboral',
      description: 'Gestión de nóminas, contratos, Seguridad Social y asesoramiento en RRHH.',
    },
    {
      icon: FileText,
      title: 'Asesoramiento Contable',
      description: 'Contabilidad, cierres contables, libros oficiales y cuentas anuales.',
    },
    {
      icon: Scale,
      title: 'Asesoramiento Legal',
      description: 'Constitución de sociedades, contratos mercantiles y asesoramiento jurídico.',
    },
    {
      icon: Building,
      title: 'Gestion Administrativa',
      description: 'Trámites con Hacienda, Gestiones con la Seguridad Social',
    },
    {
      icon: Monitor,
      title: 'Diseño Web',
      description: 'Diseño y desarrollo de páginas web modernas, adaptados a móviles y tablets',
    },
    {
      icon: Truck,
      title: 'DeCA Transporte',
      description: 'El documento de control del transporte, obligatoriamente digital desde el 5 de octubre de 2026.',
      to: '/deca'
    }
  ];

  const benefits = [
    'Más de 10 años de experiencia en la zona',
    'Conocimiento profundo del tejido empresarial local',
    'Trato personalizado y cercano',
    'Equipo especializado por áreas',
    'Respuesta rápida ante tus necesidades',
    'Acompañamiento continuo con los socios'
  ];

  const stats = [
    { number: '10+', label: 'Años de Experiencia' },
    { number: '200+', label: 'Clientes Satisfechos' },
    { number: '6', label: 'Áreas Especializadas' },
    { number: '100%', label: 'Compromiso' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* 88vh y no la pantalla entera: así asoma el aviso del DeCA por abajo
          y se ve que hay algo más. Con h-screen quedaba justo en el pliegue,
          invisible para quien no baje. */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden py-24">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/fotos/photo-1758519288417-d359ac3c494d.webp" 
            alt="Asesoría profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/75"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Tu Asesoría de Confianza
              <span className="block text-amber-400 mt-2">en Laguardia</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Asesoramiento fiscal, laboral, contable y legal para empresas, autónomos y particulares. 
              Desde 2013, ayudando al tejido empresarial de la Rioja Alavesa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contacto">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300">
                  Contacta con Nosotros
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/servicios">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
                  Ver Servicios
                </Button>
              </Link>
              <Link to="https://confirmafy.com/argomanizygarcia">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300">
                  Pide tu cita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso del DeCA. Va aquí arriba y no como una tarjeta más porque es un
          aviso con fecha de caducidad. Pasado el 5 de octubre de 2026 se dejó
          hasta final de noviembre, cambiado de «va a ser obligatorio» a «ya lo
          es»: son las semanas en que más empresas buscan cómo cumplir. Después
          se quita de aquí y se queda solo la tarjeta de servicio. */}
      <section className="bg-amber-500">
        <Link
          to="/deca"
          className="block max-w-7xl mx-auto px-4 py-5 group"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <div className="flex-none w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center">
              <CalendarClock className="w-6 h-6 text-amber-400" />
            </div>
            <p className="flex-1 text-slate-900 text-base md:text-lg leading-snug">
              <strong className="font-bold">Transportistas: el documento de control ya es
              obligatorio en digital.</strong>{' '}
              Te lo dejamos resuelto con nuestra aplicación, TransGap.
            </p>
            <span className="flex-none inline-flex items-center gap-2 font-bold text-slate-900 group-hover:gap-3 transition-all">
              Más información
              <ArrowRight className="w-5 h-5" />
            </span>
          </div>
        </Link>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Soluciones integrales adaptadas a las necesidades de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    /* El DeCA tiene página propia; el resto van al listado. */
                    to={service.to ?? '/servicios'}
                    className="inline-flex items-center text-amber-600 font-semibold hover:gap-3 gap-2 transition-all"
                  >
                    Más información
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <img 
            src="/fotos/photo-1721831394872-949dea2b5c04.webp" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                ¿Por Qué Elegirnos?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Somos tu asesoría de confianza en Laguardia. Conocemos en profundidad el tejido empresarial 
                de la Rioja Alavesa y ofrecemos un servicio personalizado adaptado a tus necesidades.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/fotos/photo-1765020553734-2c050ddb9494.webp" 
                alt="Equipo profesional"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-xl shadow-xl">
                <Award className="w-12 h-12 mb-2" />
                <div className="text-2xl font-bold">Calidad</div>
                <div className="text-sm">Certificada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/fotos/photo-1724693880256-5fca93912c32.webp" 
            alt="Rioja Alavesa"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Necesitas Asesoramiento Profesional?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Contáctanos sin compromiso. Estaremos encantados de ayudarte con tu negocio o tus necesidades personales.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-7 text-xl font-bold rounded-xl shadow-2xl transition-all duration-300">
              Contáctanos
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
