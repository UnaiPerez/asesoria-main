import React from 'react';
import { Users, Target, Heart, Shield, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export const QuienesSomos = () => {
  const values = [
    {
      icon: Shield,
      title: 'Confianza',
      description: 'Confidencialidad absoluta en el tratamiento de tu información'
    },
    {
      icon: Heart,
      title: 'Cercanía',
      description: 'Trato personalizado y directo con nuestro equipo'
    },
    {
      icon: TrendingUp,
      title: 'Excelencia',
      description: 'Compromiso con la calidad y la mejora continua'
    },
    {
      icon: Award,
      title: 'Experiencia',
      description: 'Más de 10 años al servicio de nuestros clientes'
    }
  ];

  const team = [
    {
      name: 'Área Fiscal',
      role: 'Especialista en Fiscalidad',
      description: 'Expertos en planificación fiscal, declaraciones de impuestos y optimización tributaria.'
    },
    {
      name: 'Área Laboral',
      role: 'Especialista en RRHH',
      description: 'Gestión integral de recursos humanos, nóminas y relaciones laborales.'
    },
    {
      name: 'Área Contable',
      role: 'Especialista en Contabilidad',
      description: 'Contabilidad, auditoría interna y asesoramiento financiero empresarial.'
    },
    {
      name: 'Área Legal',
      role: 'Especialista en Derecho Mercantil',
      description: 'Asesoramiento jurídico en constitución de empresas y derecho mercantil.'
    },
    {
      name: 'Área Digital',
      role: 'Especialista en Diseño Web',
      description: 'Diseño de páginas web modernas para empresas y autónomos'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494" 
            alt="Nuestro equipo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quiénes Somos
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed">
            Tu asesoría de confianza en Laguardia desde 2013
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  <span className="font-bold text-amber-600">Argomaniz y Garcia Asesores Sociedad Limitada</span> nació 
                  en 2013 con el objetivo de ofrecer servicios de asesoramiento integral a empresas, autónomos y particulares 
                  de la zona de Laguardia y la Rioja Alavesa.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos comprometido con el tejido empresarial local, especialmente con sectores 
                  como la viticultura, el turismo, el comercio y la hostelería, tan importantes en nuestra región.
                </p>
                <p>
                  Nuestra ubicación en el corazón de Laguardia nos permite estar cerca de nuestros clientes, ofreciendo 
                  un servicio personalizado y adaptado a las particularidades del mercado local y las necesidades específicas 
                  de cada cliente.
                </p>
                <p>
                  Con más de una década de experiencia, nos hemos consolidado como una asesoría de referencia en la zona, 
                  ayudando a cientos de empresas y particulares a cumplir con sus obligaciones fiscales, laborales y contables, 
                  siempre con el objetivo de optimizar sus recursos y facilitar su crecimiento.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721831394872-949dea2b5c04" 
                alt="Laguardia"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-8 rounded-xl shadow-xl">
                <div className="text-5xl font-bold mb-2">2013</div>
                <div className="text-lg">Año de fundación</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Profesionales especializados en cada área de asesoramiento
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className={"w-full md:w-[45%] lg:w-[30%] group hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-amber-400"
                  }
                >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-sm text-amber-600 font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1660815312830-7cb4e23547a8" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 mx-auto text-amber-400 mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Nuestra Misión
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-xl leading-relaxed text-center">
              Acompañar a empresas, autónomos y particulares en el cumplimiento de sus obligaciones fiscales, 
              laborales, contables y legales, ofreciendo un servicio de calidad, cercano y personalizado que 
              contribuya al crecimiento y éxito de nuestros clientes en la Rioja Alavesa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
