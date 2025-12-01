import Link from 'next/link'
import { CheckCircle, FileText, Shield, ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'
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

