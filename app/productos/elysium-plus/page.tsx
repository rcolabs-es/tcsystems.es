import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CreditCard, Coins, Users, QrCode, Monitor, Cpu, Phone, Mail, MessageCircle, Zap, Shield, Settings } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elysium Plus - Terminal de Pago Avanzado | TCSystems',
  description: 'Descubre Elysium Plus, nuestro terminal de pago más completo. Pantalla táctil de 27", pagos con tarjeta, efectivo o mixto, lector de usuarios, lector QR y PC Industrial.',
  keywords: 'Elysium Plus, terminal pago avanzado, pago tarjeta, pago efectivo, pago mixto, pantalla táctil 27, TPV automático, lector usuarios, lector QR',
  openGraph: {
    title: 'Elysium Plus - Terminal de Pago Avanzado | TCSystems',
    description: 'Descubre Elysium Plus, nuestro terminal de pago más completo. Pantalla táctil de 27", pagos con tarjeta, efectivo o mixto, lector de usuarios, lector QR y PC Industrial.',
    images: ['/elysium-plus.png'],
  },
}

const features = [
  {
    title: 'Pantalla táctil de 27 pulgadas',
    description: 'Pantalla grande de alta resolución para experiencia premium del usuario',
    icon: Monitor
  },
  {
    title: 'Pagos con tarjeta, efectivo o mixto',
    description: 'Máxima flexibilidad con múltiples métodos de pago en un solo terminal',
    icon: CreditCard
  },
  {
    title: 'Lector de usuarios',
    description: 'Sistema de identificación para personalizar la experiencia',
    icon: Users
  },
  {
    title: 'Lector de QR',
    description: 'Lectura ultrarrápida de códigos QR para pagos móviles modernos',
    icon: QrCode
  },
  {
    title: 'PC Industrial',
    description: 'Potencia industrial diseñada para funcionamiento continuo 24/7',
    icon: Cpu
  },
  {
    title: 'Software TCSystems integrable',
    description: 'Software propietario con capacidad de integración con sistemas de terceros',
    icon: Settings
  }
]

const benefits = [
  {
    icon: Monitor,
    title: 'Pantalla XL',
    description: 'La pantalla más grande del mercado para máxima comodidad y visibilidad'
  },
  {
    icon: Coins,
    title: 'Pagos Flexibles',
    description: 'Tarjeta, efectivo o combinados - máxima versatilidad para tus clientes'
  },
  {
    icon: Zap,
    title: 'Integración Total',
    description: 'Software TCSystems compatible con tus sistemas existentes'
  }
]

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

export default function ElysiumPlusPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-16 items-center">
            {/* Content - 2/3 */}
            <div className="lg:col-span-2 space-y-8">
              {/* Category Badge */}
              <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
                Terminal de Pago Avanzado
              </div>
              
              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black leading-none">
                  <span className="text-[#0e9acd]">
                    Elysium Plus
                  </span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-2xl text-gray-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
                La <strong className="text-[#0e9acd]">solución más completa</strong> en <strong className="text-gray-900 dark:text-white">automatización de pagos</strong>. 
                Elysium Plus integra <strong className="text-gray-900 dark:text-white">pantalla de 27"</strong>, <strong className="text-[#0e9acd]">múltiples métodos de pago</strong> y <strong className="text-gray-900 dark:text-white">software integrable</strong>.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-4">
                <div className="group px-6 py-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl border border-[#0e9acd]/20 hover:border-[#0e9acd]/40 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="text-[#0e9acd] font-semibold flex items-center">
                    <div className="w-2 h-2 bg-[#0e9acd] rounded-full mr-2"></div>
                    Pantalla 27"
                  </span>
                </div>
                <div className="group px-6 py-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl border border-[#0e9acd]/20 hover:border-[#0e9acd]/40 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="text-[#0e9acd] font-semibold flex items-center">
                    <div className="w-2 h-2 bg-[#0e9acd] rounded-full mr-2"></div>
                    Pago Mixto
                  </span>
                </div>
                <div className="group px-6 py-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl border border-[#0e9acd]/20 hover:border-[#0e9acd]/40 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="text-[#0e9acd] font-semibold flex items-center">
                    <div className="w-2 h-2 bg-[#0e9acd] rounded-full mr-2"></div>
                    Software Integrable
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 pt-4">
                <Link
                  href="#especificaciones"
                  className="group relative bg-[#0e9acd] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#0e9acd]/30 transition-all duration-300 hover:scale-105 hover:bg-[#0c87b8]"
                >
                  <span className="flex items-center">
                    Ver Especificaciones
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="#contacto"
                  className="group relative bg-white dark:bg-zinc-900 text-[#0e9acd] px-10 py-5 rounded-2xl font-bold text-lg border-2 border-[#0e9acd] hover:bg-[#0e9acd] hover:text-white hover:shadow-xl hover:shadow-[#0e9acd]/20 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0e9acd]/0 via-[#0e9acd]/10 to-[#0e9acd]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    Solicitar Info
                    <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center group">
                  <div className="text-3xl font-black text-[#0e9acd] group-hover:scale-110 transition-transform">27"</div>
                  <div className="text-sm text-[#0e9acd] font-medium">Pantalla</div>
                </div>
                <div className="w-px h-12 bg-[#0e9acd]/30"></div>
                <div className="text-center group">
                  <div className="text-3xl font-black text-[#0e9acd] group-hover:scale-110 transition-transform">3 en 1</div>
                  <div className="text-sm text-[#0e9acd] font-medium">Métodos Pago</div>
                </div>
                <div className="w-px h-12 bg-[#0e9acd]/30"></div>
                <div className="text-center group">
                  <div className="text-3xl font-black text-[#0e9acd] group-hover:scale-110 transition-transform">100%</div>
                  <div className="text-sm text-[#0e9acd] font-medium">Integrable</div>
                </div>
              </div>
            </div>

            {/* Image - 1/3 */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] max-w-sm mx-auto">
                <Image
                  src="/elysium-plus.png"
                  alt="Elysium Plus - Terminal de Pago Avanzado"
                  width={400}
                  height={500}
                  className="w-full h-[35rem] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especificaciones */}
      <section id="especificaciones" className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm mb-8">
              Especificaciones Técnicas
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tecnología <span className="text-[#0e9acd]">Completa</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              Elysium Plus representa la solución integral que combina todos los métodos de pago, 
              identificación de usuarios y software integrable en un único terminal avanzado.
            </p>
          </div>

          {/* Características Detalladas */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-zinc-950 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-zinc-800 hover:shadow-xl hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0e9acd]/10 to-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-[#0e9acd] group-hover:to-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-[#0e9acd] group-hover:text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué elegir Elysium Plus?
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400">
              La solución más completa que integra todo lo que necesitas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0e9acd]/10 to-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-[#0e9acd] group-hover:to-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="w-8 h-8 text-[#0e9acd] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Interesado en Elysium Plus?
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
              Descubre cómo Elysium Plus puede transformar tu negocio con la solución más completa 
              del mercado. Contacta para más información.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form - Primero en móvil */}
            <div className="order-2 lg:order-2">
              <ContactForm productName="Elysium Plus" />
            </div>

            {/* Contact Options - Segundo en móvil */}
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

