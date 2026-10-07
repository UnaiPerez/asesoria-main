import React from 'react';
import { Link } from 'react-router-dom';
import {
  Truck, QrCode, Smartphone, FileCheck, AlertTriangle, Phone, Mail,
  MessageCircle, ArrowRight, CalendarClock, HelpCircle, Printer, Server
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

/**
 * Página informativa sobre el documento electrónico de control administrativo.
 *
 * Criterio al escribirla: informar primero y ofrecer después. Una asesoría
 * avisando a sus clientes de una obligación que entra en vigor el mes que viene
 * está haciendo su trabajo, y eso convence más que un anuncio.
 *
 * Dos cosas que NO están aquí, a propósito:
 *
 *  - La lista de quién queda exento. Si alguien lee «esto no me afecta», no
 *    cumple y le sancionan, se lo va a reprochar a quien se lo dijo por escrito.
 *    Averiguar si te aplica una norma es justamente el servicio que se vende:
 *    va como invitación a llamar, no como tabla.
 *  - La cuantía de la sanción. Nadie la ha confirmado sobre el texto legal, y
 *    una cifra inventada en la web de una asesoría es un problema serio.
 *    Cuando esté confirmada, se añade en el bloque de la infracción.
 */
export const Deca = () => {
  const telefono = '629125142';
  const correo = 'p.perez@ayg-asesores.com';

  const comoSeControla = [
    {
      icon: QrCode,
      titulo: 'Un código QR',
      texto: 'El agente escanea el código que lleva el conductor y el documento se abre al instante en su propio móvil.'
    },
    {
      icon: Server,
      titulo: 'O una descarga directa',
      texto: 'El documento también se puede abrir desde el enlace donde lo guarda la empresa de transporte, sin usuario ni contraseña.'
    },
    {
      icon: Printer,
      titulo: 'Con copia de respaldo',
      texto: 'El conductor puede llevar además su copia guardada en el móvil o impresa, por si se queda sin cobertura.'
    }
  ];

  return (
    <div className="min-h-screen">

      {/* ------------------------------------------------------------ portada */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* La foto va guardada en el proyecto y no enlazada desde Unsplash: así
            la web no depende de un tercero para pintar su propia cabecera. El
            degradado por encima es el mismo de la portada de inicio, para que
            el texto blanco se lea sobre cualquier parte de la imagen. */}
        <div className="absolute inset-0 z-0">
          <img
            src="/fotos/deca-carretera.webp"
            alt="Camión de mercancías circulando por carretera al anochecer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
            <CalendarClock className="w-4 h-4" />
            Obligatorio desde el 5 de octubre de 2026
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            El documento de control del transporte
            <span className="block text-amber-400 mt-2">pasa a ser digital</span>
          </h1>

          <p className="text-xl text-slate-200 leading-relaxed max-w-3xl">
            Desde el 5 de octubre de 2026 hay que llevar a bordo del vehículo el documento
            de control administrativo (DeCA) debidamente cumplimentado, en formato
            electrónico. Te explicamos qué cambia, cómo se controla en carretera y cómo lo
            resolvemos nosotros.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- qué es el DeCA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            ¿Qué es el DeCA?
          </h2>
          <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              El <strong className="text-slate-900">Documento Electrónico de Control
              Administrativo</strong> es el formato digital del tradicional documento de
              control para el transporte público de mercancías por carretera en España.
            </p>
            <p>
              Amparado por la Ley de Movilidad Sostenible, es obligatorio desde
              el <strong className="text-slate-900">5 de octubre de 2026</strong> para las
              operaciones nacionales y de cabotaje en territorio español. El documento deja
              de emitirse en papel: nace digital.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- ¿te afecta a ti? */}
      <section className="py-16 bg-amber-50 border-y-4 border-amber-400">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-none">
              <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                ¿No sabes si te afecta?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                La obligación alcanza al transporte público de mercancías por carretera,
                pero hay excepciones según el tipo de transporte, el vehículo y la
                mercancía. <strong>Llámanos y lo miramos contigo:</strong> en cinco minutos
                sabrás si tienes que cumplirlo y desde cuándo.
              </p>
              <a href={`tel:${telefono}`}>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300">
                  <Phone className="mr-2 w-5 h-5" />
                  629 125 142
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- cómo se controla en ruta */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Cómo se controla en carretera
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              El conductor ya no entrega copias de papel a la Guardia Civil ni a los
              inspectores de transporte. El control se hace en digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comoSeControla.map((paso, i) => (
              <Card key={i} className="group hover:shadow-2xl transition-all duration-500 border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 shadow-lg">
                    <paso.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{paso.titulo}</h3>
                  <p className="text-slate-600 leading-relaxed">{paso.texto}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ la infracción */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-6 items-start bg-slate-50 border border-slate-200 p-8 rounded-2xl">
            <AlertTriangle className="w-8 h-8 text-slate-900 flex-none mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Circular sin el documento es una infracción
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                No llevar a bordo el documento de control debidamente cumplimentado es una
                infracción en materia de transporte. Si tienes dudas sobre cómo te afecta a
                ti o a tus conductores, consúltanos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ nuestra herramienta */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center mb-8 shadow-lg">
            <Truck className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hemos desarrollado nuestra propia aplicación
          </h2>

          {/* La marca se nombra una sola vez y subordinada a la asesoría: la
              confianza del lector viene de «lo ha hecho mi asesoría», no de un
              nombre que no ha oído nunca. Con enlace desde el 7 de octubre de
              2026, cuando transgap.es ya llevaba un mes en marcha. */}
          <p className="text-xl text-slate-200 leading-relaxed mb-10 max-w-3xl">
            En Argomaniz y García, a través de nuestro departamento informático, hemos
            desarrollado nuestra propia aplicación,{' '}
            <a href="https://transgap.es" className="text-white font-semibold underline decoration-amber-400 underline-offset-4 hover:text-amber-300">TransGap</a>,
            para generar y gestionar estos documentos electrónicos. La usan nuestros
            clientes de transporte y está disponible para cualquier empresa que la
            necesite.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FileCheck, texto: 'Rellenas los datos del envío y el documento se genera con su código QR' },
              { icon: Smartphone, texto: 'Se lo mandas al conductor por WhatsApp y lo lleva en el móvil' },
              { icon: QrCode, texto: 'Si algo cambia en ruta, se corrige sin cambiar el código QR' }
            ].map((punto, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <punto.icon className="w-7 h-7 text-amber-400 mb-4" />
                <p className="text-slate-200 leading-relaxed">{punto.texto}</p>
              </div>
            ))}
          </div>

          {/* Para quien ya tiene cuenta. Discreto a propósito: el botón de esta
              sección es escribirnos, no entrar. */}
          <p className="-mt-6 mb-12">
            <a href="https://transgap.es" className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold underline-offset-4 hover:underline">
              ¿Ya eres cliente? Entra en TransGap
              <ArrowRight className="w-4 h-4" />
            </a>
          </p>

          <p className="text-lg text-slate-300 mb-8 max-w-3xl">
            Escríbenos y te explicamos cómo funciona, qué cuesta y cómo lo gestionamos
            contigo. Sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`https://wa.me/34${telefono}`} target="_blank" rel="noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300">
                <MessageCircle className="mr-2 w-5 h-5" />
                Escríbenos por WhatsApp
              </Button>
            </a>
            <a href={`mailto:${correo}?subject=${encodeURIComponent('Información sobre el DeCA')}`}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
                <Mail className="mr-2 w-5 h-5" />
                Mándanos un correo
              </Button>
            </a>
          </div>

          <p className="text-slate-400 mt-8">
            O llámanos al <a href={`tel:${telefono}`} className="text-amber-400 hover:text-amber-300 font-semibold">629 125 142</a> y al{' '}
            <a href="tel:945600676" className="text-amber-400 hover:text-amber-300 font-semibold">945 600 676</a>.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- cierre */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-lg text-slate-600 mb-6">
            ¿Necesitas ayuda con otra cosa? Somos tu asesoría de confianza en Laguardia
            desde 2013.
          </p>
          <Link to="/servicios">
            <Button variant="outline" size="lg" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
              Ver todos nuestros servicios
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
