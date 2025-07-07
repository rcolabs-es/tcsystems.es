'use client'

import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Metadata se maneja en layout.tsx para páginas client-side

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    details: '916 216 237',
    action: 'tel:916216237',
    description: 'Lunes a viernes de 9:00 a 18:00'
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'consultoria@tcsystems.es',
    action: 'mailto:consultoria@tcsystems.es',
    description: 'Respuesta en menos de 24 horas'
  },
  {
    icon: MapPin,
    title: 'Dirección',
    details: 'C. Centauro, 15, 28971 Griñón, Madrid',
    action: '#',
    description: 'Cita previa requerida'
  },
]

const quickActions = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat directo para consultas rápidas',
    action: 'https://wa.me/34916216237',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Calendar,
    title: 'Solicitar Presupuesto',
    description: 'Solicita un presupuesto personalizado',
    action: '/contacto',
    color: 'from-[#0e9acd] to-blue-600'
  },
  {
    icon: Phone,
    title: 'Llamada Urgente',
    description: 'Para consultas técnicas urgentes',
    action: 'tel:916216237',
    color: 'from-red-400 to-red-600'
  }
]

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white dark:bg-zinc-950 rounded-2xl border-2 border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-900 rounded-2xl transition-colors duration-200"
      >
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg pr-4">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#0e9acd]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#0e9acd]" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="h-px bg-gradient-to-r from-[#0e9acd]/20 to-transparent mb-4"></div>
          <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-blue-950/30 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#0e9acd]/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#0e9acd]/15 to-blue-600/15 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm mb-8">
              Contacto
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Hablemos de tu
              <span className="text-[#0e9acd]"> proyecto</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-gray-900 dark:text-white">Consulta </strong> y <strong className="text-[#0e9acd]">presupuesto gratuitos</strong>. 
              Nuestro equipo de expertos te ayudará a encontrar la <strong className="text-gray-900 dark:text-white">solución perfecta</strong> para tu negocio.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.action}
                className="group bg-white dark:bg-zinc-950 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{action.title}</h3>
                <p className="text-gray-600 dark:text-zinc-400 text-sm">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Información de <span className="text-[#0e9acd]">contacto</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed mb-8">
                  Elige el método de contacto que prefieras o completa el formulario para recibir una <strong className="text-[#0e9acd]">respuesta personalizada</strong>.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white dark:bg-zinc-950 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#0e9acd] group-hover:text-white transition-all duration-300">
                        <info.icon className="w-6 h-6 text-[#0e9acd] group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                        <Link href={info.action} className="text-[#0e9acd] hover:text-blue-600 font-medium text-lg transition-colors">
                          {info.details}
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-zinc-400 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-[#0e9acd] to-[#0c7ba3] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">¿Por qué elegir TCSystems?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span><strong>14+ años</strong> de experiencia en el sector</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span><strong>500+ empresas</strong> confían en nosotros</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span><strong>Soporte técnico 24/7</strong> disponible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm mb-8">
              Preguntas Frecuentes
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Resolvemos tus <span className="text-[#0e9acd]">dudas</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Las <strong className="text-gray-900 dark:text-white">preguntas más comunes</strong> sobre nuestros <strong className="text-[#0e9acd]">productos y servicios</strong>
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "¿Cuánto tiempo tarda la instalación?",
                answer: "La instalación típica se completa en 1-2 días laborables, incluyendo configuración y formación básica del personal. Nuestro equipo técnico se encarga de todo el proceso desde la instalación física hasta la puesta en marcha completa del sistema."
              },
              {
                question: "¿Qué tipo de soporte técnico ofrecen?",
                answer: "Ofrecemos soporte técnico 24/7 por teléfono, email y conexión remota. Incluye mantenimiento preventivo, actualizaciones de software, resolución de incidencias y formación continua del personal. Nuestro tiempo de respuesta promedio es inferior a 2 horas."
              },
              {
                question: "¿Los sistemas funcionan sin conexión a internet?",
                answer: "Sí, nuestros sistemas pueden funcionar en modo offline, almacenando las transacciones localmente hasta que se restablezca la conexión. Una vez reconectado, todos los datos se sincronizan automáticamente con nuestros servidores seguros."
              },
              {
                question: "¿Qué garantía incluyen los equipos?",
                answer: "Todos nuestros equipos incluyen 1 año de garantía completa que cubre hardware, software y mano de obra. Ofrecemos la posibilidad de ampliar la garantía a 3 años con nuestros planes de mantenimiento premium, incluyendo piezas de repuesto y actualizaciones prioritarias."
              },
              {
                question: "¿Qué métodos de pago aceptan los sistemas?",
                answer: "Nuestros sistemas aceptan efectivo (monedas y billetes), tarjetas de débito y crédito (chip y contactless), pagos móviles, códigos QR y tarjetas de proximidad. Cada sistema se puede configurar según las necesidades específicas de tu negocio."
              },
              {
                question: "¿Cómo se realiza el mantenimiento de los equipos?",
                answer: "Realizamos mantenimiento preventivo programado cada 3 meses, incluyendo limpieza, calibración y actualización de software. Además, ofrecemos mantenimiento correctivo inmediato en caso de incidencias, con técnicos especializados disponibles en toda España."
              }
            ].map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 