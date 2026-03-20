import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export const Contacto = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494" 
            alt="Contacto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/75"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contacto
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed">
            Estamos aquí para ayudarte. Contáctanos sin compromiso.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Información de Contacto
              </h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Puedes contactarnos por teléfono, email o visitarnos en nuestra oficina en Laguardia. 
                Estaremos encantados de atenderte y resolver tus dudas.
              </p>

              <div className="space-y-6">
                <Card className="border-2 border-slate-200 hover:border-amber-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Dirección</h3>
                        <p className="text-slate-700">
                          Calle Mayor 55, 1º<br />
                          01300 Laguardia, Álava<br />
                          País Vasco, España
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200 hover:border-amber-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Teléfono</h3>
                        <a href="tel:945600676" className="text-lg text-blue-600 hover:text-blue-700 font-semibold mr-[5px]">
                          945 600 676
                        </a>
                        /
                        <a href="tel:629125142" className="text-lg text-blue-600 hover:text-blue-700 font-semibold ml-[5px]">
                          629 125 142
                        </a>
                        
                        <p className="text-sm text-slate-600 mt-1">
                          Llamadas de lunes a viernes
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200 hover:border-amber-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                        <a href="mailto:info@ayg-asesores.com" className="text-lg text-emerald-600 hover:text-emerald-700 font-semibold">
                          info@ayg-asesores.com
                        </a>
                        <p className="text-sm text-slate-600 mt-1">
                          Respondemos en 24-48 horas
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-slate-200 hover:border-amber-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Horario</h3>
                        <p className="text-slate-700">
                          <span className="font-semibold">Lunes a Viernes:</span><br />
                          8:00 - 16:00
                        </p>
                        <p className="text-sm text-slate-600 mt-2">
                          Posibilidad de cita previa
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Encuéntranos
              </h2>
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-[600px]">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.5!2d-2.5858!3d42.5558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDMzJzIwLjkiTiAywrAzNScwOC45Ilc!5e0!3m2!1ses!2ses!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación Argomaniz y Garcia Asesores"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
              <p className="text-sm text-slate-600 mt-4 text-center">
                Calle Mayor 55, 1º, 01300 Laguardia, Álava
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Empezar?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Llámanos o visítanos en nuestra oficina de Laguardia. Te asesoraremos sin compromiso 
            y encontraremos la mejor solución para tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:945600676">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </button>
            </a>
            <a href="mailto:info@ayg-asesores.com">
              <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <Send className="w-5 h-5" />
                Enviar Email
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
