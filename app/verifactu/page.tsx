import Link from 'next/link'
import { CheckCircle, FileText, Shield, ArrowRight, Phone, Mail, MessageCircle, ExternalLink, CalendarClock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { verifactuFaqs } from './faq'

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

export default function VerifactuPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50 dark:bg-[#121214] overflow-hidden">
        {/* Blobs sutiles de fondo */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#0e9acd]/6 to-blue-600/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-20 w-80 h-80 bg-gradient-to-br from-[#0e9acd]/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-[#0e9acd]/6 to-blue-600/6 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
                  Integración Verifactu
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Verifactu 
                  <span className="text-[#0e9acd]"> disponible</span> para todos nuestros terminales
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Ofrecemos la <strong className="text-[#0e9acd]">integración de Verifactu</strong> en todos nuestros <strong className="text-gray-900 dark:text-white">terminales de pago</strong>, garantizando el <strong className="text-gray-900 dark:text-white">cumplimiento normativo</strong> y la <strong className="text-gray-900 dark:text-white">facturación electrónica</strong> para tu negocio.
                </p>
                
                <p className="text-base text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Si necesitas <strong className="text-[#0e9acd]">facturación electrónica</strong>, podemos integrar Verifactu en cualquiera de nuestros productos de forma sencilla y eficiente.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#0e9acd]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Cumplimiento normativo garantizado
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400">
                      Cumple con todas las normativas de facturación electrónica vigentes en España.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-[#0e9acd]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Facturación electrónica automática
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400">
                      Genera y envía facturas electrónicas automáticamente con cada transacción.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-[#0e9acd]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Integración sencilla
                    </h3>
                    <p className="text-gray-600 dark:text-zinc-400">
                      Proceso de integración directo y sin complicaciones en todos nuestros terminales.
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
              <div className="bg-gradient-to-br from-[#0e9acd]/10 to-blue-600/10 dark:from-[#0e9acd]/20 dark:to-blue-600/20 rounded-3xl p-12 border border-[#0e9acd]/20 dark:border-[#0e9acd]/30">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0e9acd] rounded-2xl mb-4 shadow-lg">
                      <FileText className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Verifactu
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-zinc-400 mb-4">
                      Sistema de facturación electrónica
                    </p>
                    <p className="text-base text-gray-600 dark:text-zinc-400">
                      Solución disponible para integrar en nuestros terminales, garantizando el cumplimiento de la normativa española de facturación electrónica.
                    </p>
                  </div>
                  
                  <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-zinc-700">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white block">Disponible para todos los terminales</span>
                        <span className="text-sm text-gray-600 dark:text-zinc-400">Opción de integración en cualquier producto</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white block">Integración profesional</span>
                        <span className="text-sm text-gray-600 dark:text-zinc-400">Proceso de integración gestionado por nuestro equipo</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white block">Cumplimiento normativo</span>
                        <span className="text-sm text-gray-600 dark:text-zinc-400">Cumple con todas las normativas vigentes</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white block">Facturación electrónica automática</span>
                        <span className="text-sm text-gray-600 dark:text-zinc-400">Generación y envío automático de facturas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#0e9acd]/20 to-blue-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#0e9acd]/15 to-blue-600/15 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Marco normativo — fuentes primarias citadas */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm mb-6">
              Marco normativo
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Qué exige <span className="text-[#0e9acd]">Veri*factu</span> y desde cuándo
            </h2>
            <p className="text-lg text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Veri*factu no es un producto: es el marco de la Agencia Tributaria que obliga a que los
              sistemas informáticos de facturación garanticen la{' '}
              <strong className="text-gray-900 dark:text-white">
                integridad, trazabilidad e inalterabilidad
              </strong>{' '}
              de los registros de facturación. Estas son las fechas y las fuentes oficiales.
            </p>
          </div>

          {/* Plazos */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 dark:bg-[#121214] rounded-2xl p-8 border border-gray-200 dark:border-zinc-800">
              <div className="flex items-center mb-4">
                <CalendarClock className="w-6 h-6 text-[#0e9acd] mr-3" />
                <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-zinc-400">
                  Impuesto sobre Sociedades
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                1 de enero de 2027
              </p>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
                Fecha límite para que los contribuyentes del Impuesto sobre Sociedades tengan
                adaptados sus sistemas informáticos de facturación.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#121214] rounded-2xl p-8 border border-gray-200 dark:border-zinc-800">
              <div className="flex items-center mb-4">
                <CalendarClock className="w-6 h-6 text-[#0e9acd] mr-3" />
                <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-zinc-400">
                  Resto de obligados tributarios
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                1 de julio de 2027
              </p>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
                Autónomos en IRPF y demás obligados tributarios. El periodo previo a cada fecha es,
                según la AEAT, un periodo de pruebas.
              </p>
            </div>
          </div>

          {/* Cita textual atribuida a la fuente oficial */}
          <blockquote className="border-l-4 border-[#0e9acd] bg-[#0e9acd]/5 dark:bg-[#0e9acd]/10 rounded-r-2xl p-8 mb-10">
            <p className="text-lg text-gray-800 dark:text-zinc-200 leading-relaxed italic mb-4">
              «El periodo previo a las respectivas fechas es un periodo de pruebas, durante el cual
              se podrá dejar de remitir registros de prueba con un SIF modalidad VERI*FACTU.»
            </p>
            <footer className="text-sm text-gray-600 dark:text-zinc-400">
              — Agencia Tributaria (AEAT), nota informativa sobre la ampliación del plazo de
              adaptación de los sistemas informáticos de facturación.
            </footer>
          </blockquote>

          {/* Fuentes */}
          <div className="bg-white dark:bg-zinc-950 rounded-2xl border border-gray-200 dark:border-zinc-800 p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Fuentes oficiales
            </h3>
            <ul className="space-y-4">
              {[
                {
                  href: 'https://www.boe.es/eli/es/rd/2023/12/05/1007',
                  title:
                    'Real Decreto 1007/2023, de 5 de diciembre — Reglamento de requisitos de los sistemas informáticos de facturación (RRSIF)',
                  meta: 'BOE núm. 291, de 6 de diciembre de 2023',
                },
                {
                  href: 'https://www.boe.es/eli/es/rdl/2025/12/02/15',
                  title:
                    'Real Decreto-ley 15/2025, de 2 de diciembre — modifica los plazos de adaptación previstos en el RD 1007/2023',
                  meta: 'Boletín Oficial del Estado',
                },
                {
                  href: 'https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/nota-informativa-ampliacion-plazo-adaptacion-facturacion.html',
                  title:
                    'AEAT — Nota informativa: ampliación del plazo de adaptación de los sistemas informáticos de facturación',
                  meta: 'Sede electrónica de la Agencia Tributaria',
                },
              ].map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-gray-700 dark:text-zinc-300 hover:text-[#0e9acd] dark:hover:text-[#0e9acd] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mt-1 shrink-0 text-[#0e9acd]" />
                    <span>
                      <span className="font-medium group-hover:underline">{source.title}</span>
                      <span className="block text-sm text-gray-500 dark:text-zinc-500 mt-0.5">
                        {source.meta}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 dark:text-zinc-500 mt-6 leading-relaxed">
              Esta página resume la normativa a efectos informativos y no constituye asesoramiento
              fiscal. Para tu caso concreto, consulta con tu asesor o directamente con la Agencia
              Tributaria.
            </p>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm mb-6">
              Preguntas frecuentes
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Dudas sobre <span className="text-[#0e9acd]">Veri*factu</span>
            </h2>
          </div>

          {/* <details> nativo: sin JavaScript y con la respuesta siempre en el HTML. */}
          <div className="space-y-4">
            {verifactuFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white dark:bg-zinc-950 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-colors duration-300"
              >
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none p-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 w-6 h-6 rounded-full border border-gray-300 dark:border-zinc-700 flex items-center justify-center text-[#0e9acd] transition-transform duration-300 group-open:rotate-45"
                  >
                    <span className="leading-none">+</span>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-[#0e9acd]/20 to-transparent mb-4"></div>
                  <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Interesado en integrar Verifactu?
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
              Contacta con nuestros especialistas para más información sobre la integración de Verifactu en tus terminales TCSystems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-2">
              <ContactForm productName="Verifactu" />
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
                    <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300`}>
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

