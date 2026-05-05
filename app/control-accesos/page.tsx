import Link from 'next/link'
import { CheckCircle, Shield, Fingerprint, KeyRound, ArrowRight, Phone, Mail, MessageCircle, Wifi, Eye, Users } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const contactOptions = [
  {
    icon: Phone,
    title: 'Llámanos',
    subtitle: '+34 916 216 237',
    action: 'tel:+34916216237',
    color: 'from-green-400 to-emerald-600'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    subtitle: 'Consulta inmediata',
    action: 'https://wa.me/34677614129',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Mail,
    title: 'Email',
    subtitle: 'consultoria@tcsystems.es',
    action: 'mailto:consultoria@tcsystems.es',
    color: 'from-blue-400 to-[#0e9acd]'
  }
]

export default function ControlAccesosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50 dark:bg-[#121214] overflow-hidden">
        {/* Blobs sutiles de fondo */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-linear-to-br from-[#0e9acd]/6 to-blue-600/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-20 w-80 h-80 bg-linear-to-br from-[#0e9acd]/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-linear-to-br from-[#0e9acd]/6 to-blue-600/6 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
                  Control de Accesos
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Sistemas de 
                  <span className="text-[#0e9acd]"> control de accesos</span> inteligentes
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Implementamos <strong className="text-[#0e9acd]">soluciones profesionales</strong> de <strong className="text-gray-900 dark:text-white">control de accesos</strong> para empresas, edificios e instalaciones, combinando hardware de última generación con software de gestión centralizada.
                </p>
                
                <p className="text-base text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Desde <strong className="text-[#0e9acd]">lectores biométricos</strong> hasta <strong className="text-[#0e9acd]">tarjetas RFID</strong> y acceso móvil, diseñamos sistemas a medida que garantizan la seguridad y trazabilidad de todos los accesos.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center shrink-0">
                    <Fingerprint className="w-6 h-6 text-[#0e9acd]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Identificación multitecnología
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400">
                      Huella dactilar, reconocimiento facial, tarjetas RFID, códigos QR y acceso desde el móvil.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center shrink-0">
                    <KeyRound className="w-6 h-6 text-[#0e9acd]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Gestión de permisos avanzada
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400">
                      Control granular de accesos por zonas, horarios, perfiles de usuario y niveles de autorización.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6 text-[#0e9acd]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Monitorización en tiempo real
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400">
                      Paneles de control con visualización en directo, alertas automáticas y registro completo de eventos.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="#contacto"
                className="inline-flex items-center bg-[#0e9acd] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0c7ba3] transition-all duration-200 shadow-lg hover:shadow-xl group hover:scale-105"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="bg-linear-to-br from-[#0e9acd]/10 to-blue-600/10 dark:from-[#0e9acd]/20 dark:to-blue-600/20 rounded-3xl p-8 lg:p-10 border border-[#0e9acd]/20 dark:border-[#0e9acd]/30">
                {/* Video demo - Sistema en acción */}
                <div className="relative mx-auto w-full max-w-[280px] mb-8">
                  <div className="relative rounded-[2.5rem] p-2 bg-linear-to-br from-[#0e9acd] to-blue-600 shadow-2xl">
                    <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-zinc-950">
                      <video
                        src="/videos/web/grid-1.mp4"
                        poster="/videos/web/grid-1.jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label="Sistema TCSystems de control de accesos con pago integrado en funcionamiento"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Badge "EN VIVO" sutil */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-full px-3 py-1.5 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-gray-700 dark:text-zinc-300 uppercase tracking-wide">En vivo</span>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-zinc-700">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white block">Lectores biométricos y RFID</span>
                      <span className="text-sm text-gray-600 dark:text-zinc-400">Huella, facial, tarjeta y acceso móvil</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white block">Tornos y barreras inteligentes</span>
                      <span className="text-sm text-gray-600 dark:text-zinc-400">Control físico robusto con integración completa</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white block">Gestión de visitantes</span>
                      <span className="text-sm text-gray-600 dark:text-zinc-400">Registro, preautorización y seguimiento de visitas</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white block">Software de gestión centralizado</span>
                      <span className="text-sm text-gray-600 dark:text-zinc-400">Paneles, reportes y alertas en tiempo real</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-linear-to-br from-[#0e9acd]/20 to-blue-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-linear-to-br from-[#0e9acd]/15 to-blue-600/15 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué elegir nuestros sistemas?
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Soluciones de control de accesos que protegen tus instalaciones y simplifican la gestión
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-linear-to-br from-[#0e9acd]/10 to-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-linear-to-br group-hover:from-[#0e9acd] group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110">
                <Shield className="w-8 h-8 text-[#0e9acd] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Seguridad total
              </h3>
              <p className="text-gray-600 dark:text-zinc-400">
                Control completo de quién accede, cuándo y dónde. Registro detallado de cada evento para máxima trazabilidad.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-linear-to-br from-[#0e9acd]/10 to-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-linear-to-br group-hover:from-[#0e9acd] group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110">
                <Wifi className="w-8 h-8 text-[#0e9acd] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Conectividad avanzada
              </h3>
              <p className="text-gray-600 dark:text-zinc-400">
                Sistemas conectados en red con gestión remota, integración con CCTV y comunicación con otros sistemas de seguridad.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-linear-to-br from-[#0e9acd]/10 to-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-linear-to-br group-hover:from-[#0e9acd] group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110">
                <Users className="w-8 h-8 text-[#0e9acd] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Escalable y flexible
              </h3>
              <p className="text-gray-600 dark:text-zinc-400">
                Desde una puerta hasta cientos de puntos de acceso. Sistemas que crecen con tu instalación sin límites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Aplicaciones del control de accesos
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Soluciones adaptadas a cada tipo de instalación y necesidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group">
              <div className="w-12 h-12 bg-gray-100 dark:bg-[#121214] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0e9acd] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#0e9acd] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Edificios corporativos</h3>
              <p className="text-gray-600 dark:text-zinc-400 mb-4 leading-relaxed">Control de acceso a oficinas, plantas y áreas restringidas con perfiles por empleado.</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Acceso por zonas y horarios
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Control de aforo
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Gestión de visitantes
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group">
              <div className="w-12 h-12 bg-gray-100 dark:bg-[#121214] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0e9acd] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#0e9acd] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Instalaciones industriales</h3>
              <p className="text-gray-600 dark:text-zinc-400 mb-4 leading-relaxed">Seguridad perimetral y control de acceso a zonas de producción y almacenes.</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Control perimetral
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Zonas de alta seguridad
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Registro de vehículos
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group">
              <div className="w-12 h-12 bg-gray-100 dark:bg-[#121214] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0e9acd] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#0e9acd] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Centros educativos</h3>
              <p className="text-gray-600 dark:text-zinc-400 mb-4 leading-relaxed">Protección de alumnos y personal con control de entradas y salidas automatizado.</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Control de entrada/salida
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Notificaciones a padres
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Zonas restringidas
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group">
              <div className="w-12 h-12 bg-gray-100 dark:bg-[#121214] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0e9acd] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#0e9acd] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Centros deportivos</h3>
              <p className="text-gray-600 dark:text-zinc-400 mb-4 leading-relaxed">Gestión de socios y acceso a instalaciones deportivas con control de abonos.</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Control de abonados
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Acceso por franjas horarias
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Aforo en tiempo real
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group">
              <div className="w-12 h-12 bg-gray-100 dark:bg-[#121214] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0e9acd] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#0e9acd] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Administraciones públicas</h3>
              <p className="text-gray-600 dark:text-zinc-400 mb-4 leading-relaxed">Seguridad en edificios públicos con gestión de personal y ciudadanos.</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Control horario empleados
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Áreas de acceso público
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Zonas de seguridad
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group">
              <div className="w-12 h-12 bg-gray-100 dark:bg-[#121214] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0e9acd] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#0e9acd] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Comunidades residenciales</h3>
              <p className="text-gray-600 dark:text-zinc-400 mb-4 leading-relaxed">Acceso seguro a urbanizaciones, portales y zonas comunes con gestión centralizada.</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Control de puertas y garajes
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Gestión de proveedores
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                  <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 shrink-0"></div>
                  Acceso a zonas comunes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Necesitas un sistema de control de accesos?
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
              Contacta con nuestros especialistas para recibir un estudio personalizado y descubre cómo podemos proteger y gestionar los accesos de tu instalación.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-2">
              <ContactForm productName="Control de Accesos" />
            </div>

            {/* Contact Options */}
            <div className="space-y-6 order-1 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Otras formas de contacto
              </h3>
              <div className="grid gap-6">
                {contactOptions.map((option, index) => (
                  <Link
                    key={index}
                    href={option.action}
                    className="bg-white dark:bg-zinc-950 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] flex items-center"
                  >
                    <div className={`w-12 h-12 bg-linear-to-br ${option.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300`}>
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {option.title}
                      </h4>
                      <p className="text-gray-600 dark:text-zinc-400">
                        {option.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
