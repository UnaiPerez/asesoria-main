import React from 'react';
import { Calculator, Users, FileText, Monitor, Scale, Building, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const Servicios = () => {
  const mainServices = [
    {
      icon: Calculator,
      title: 'Asesoramiento Fiscal',
      subtitle: 'Optimización tributaria y cumplimiento fiscal',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19'
    },
    {
      icon: Users,
      title: 'Asesoramiento Laboral',
      subtitle: 'Gestión integral de recursos humanos',
      color: 'from-amber-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1758519288417-d359ac3c494d'
    },
    {
      icon: FileText,
      title: 'Asesoramiento Contable',
      subtitle: 'Contabilidad y gestión financiera',
      color: 'from-slate-500 to-slate-600',
      image: 'https://images.unsplash.com/photo-1765020553734-2c050ddb9494'
    },
    {
      icon: Scale,
      title: 'Asesoramiento Legal',
      subtitle: 'Asesoría jurídica mercantil',
      color: 'from-emerald-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19'
    },
    {
      icon: Building,
      title: 'Gestoría Administrativa',
      subtitle: 'Trámites y gestiones administrativas',
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1758519288417-d359ac3c494d'
    },
    {
      icon: Monitor,
      title: 'Diseño Web',
      subtitle:'Páginas web modernas para empresas y autónomos',
      color:'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    }
  ];

  const serviciosDetallados = [
    {
      area: 'Asesoramiento Fiscal',
      servicios: [
        'Declaraciones trimestrales y anuales de IRPF',
        'Declaraciones de IVA (modelos 303, 390)',
        'Impuesto de Sociedades',
        'Impuestos locales (IBI, IAE)',
        'Planificación fiscal personalizada',
        'Asesoramiento en deducciones y bonificaciones',
        'Gestión de patrimonio y rentas del capital',
        'Retenciones e ingresos a cuenta',
        'Reclamaciones y recursos ante Hacienda'
      ]
    },
    {
      area: 'Asesoramiento Laboral',
      servicios: [
        'Altas y bajas en la Seguridad Social',
        'Elaboración de contratos laborales',
        'Gestión mensual de nóminas',
        'Seguros sociales y cotizaciones',
        'Gestión de ERTE y despidos',
        'Asesoramiento en contratación y subvenciones',
        'Calendario laboral y convenios colectivos',
        'Prevención de riesgos laborales básica',
        'Gestión de IT y prestaciones'
      ]
    },
    {
      area: 'Asesoramiento Contable',
      servicios: [
        'Contabilidad de empresas y autónomos',
        'Elaboración de libros oficiales',
        'Cierres contables trimestrales y anuales',
        'Cuentas anuales y depósito en Registro Mercantil',
        'Análisis de balances y ratios financieros',
        'Presupuestos y control de gestión',
        'Contabilidad analítica por centros de coste',
        'Asesoramiento en inversiones',
        'Tesorería y planificación financiera'
      ]
    },
    {
      area: 'Asesoramiento Legal',
      servicios: [
        'Constitución de sociedades (SL, SA, cooperativas)',
        'Modificación de estatutos sociales',
        'Contratos mercantiles',
        'Compraventa de empresas y participaciones',
        'Fusiones y transformaciones societarias',
        'Juntas generales y actas',
        'Asesoramiento en propiedad intelectual e industrial',
        'Revisión de contratos con proveedores y clientes'
      ]
    },
    {
      area: 'Gestoría Administrativa',
      servicios: [
        'Trámites con Hacienda',
        'Gestiones con la Seguridad Social',
        'Trámites en ayuntamientos y diputaciones',
        'Obtención de certificados oficiales',
        'Presentación de documentación en organismos públicos',
        'Gestión de subvenciones y ayudas',
        'Tramitación de licencias de actividad',
        'Representación ante las administraciones'
      ]
    },
    {
      area: 'Diseño Web y Servicios Digitales',
      servicios: [
        'Diseño y desarrollo de páginas web profesionales',
        'Creación de webs para empresas y autónomos',
        'Diseño responsive adaptado a móviles y tablets',
        'Mantenimiento y actualización de páginas web',
        'Creación de landing pages y páginas de captación',
        'Integración de formularios de contacto y herramientas digitales'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562564055-71e051d33c19" 
            alt="Servicios profesionales"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/75"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed">
            Soluciones integrales de asesoramiento para tu negocio
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Áreas de Especialización
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Equipo multidisciplinar especializado en cada área
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {service.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Servicios Detallados
            </h2>
            <p className="text-xl text-slate-600">
              Todo lo que necesitas para tu empresa o negocio
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {serviciosDetallados.map((area, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-amber-400 transition-colors"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline bg-slate-50 hover:bg-slate-100 transition-colors">
                  <span className="text-xl font-bold text-slate-900">{area.area}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {area.servicios.map((servicio, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-700">{servicio}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Necesitas más información?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Contacta con nosotros y te asesoraremos sin compromiso sobre el servicio que mejor se adapte a tus necesidades.
          </p>
          <Link to="/contacto">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
              Contactar Ahora
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
