import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, FileText, Calculator, Scale, Building, Monitor, Award, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const Home = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Asesoramiento Fiscal',
      description: 'IRPF, IVA, Impuesto de Sociedades y planificación fiscal personalizada.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Asesoramiento Laboral',
      description: 'Gestión de nóminas, contratos, Seguridad Social y asesoramiento en RRHH.',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: FileText,
      title: 'Asesoramiento Contable',
      description: 'Contabilidad, cierres contables, libros oficiales y cuentas anuales.',
      color: 'from-slate-500 to-slate-600'
    },
    {
      icon: Scale,
      title: 'Asesoramiento Legal',
      description: 'Constitución de sociedades, contratos mercantiles y asesoramiento jurídico.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Building,
      title: 'Gestion Administrativa',
      description: 'Trámites con Hacienda, Gestiones con la Seguridad Social',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Monitor,
      title: 'Diseño Web',
      description: 'Diseño y desarrollo de páginas web modernas, adaptados a móviles y tablets',
      color: 'from-red-500 to-red-600'
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1758519288417-d359ac3c494d" 
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
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
                  Contacta con Nosotros
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/servicios">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-slate-500"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to="/servicios" 
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
            src="https://images.unsplash.com/photo-1721831394872-949dea2b5c04" 
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
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494" 
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
            src="https://images.unsplash.com/photo-1724693880256-5fca93912c32" 
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
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-7 text-xl font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
              Pide tu Cita
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
