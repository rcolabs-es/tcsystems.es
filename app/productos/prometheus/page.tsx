import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Coins, Banknote, Receipt, Volume2, CreditCard, QrCode, Printer, Monitor, Wifi, Cpu, Phone, Mail, MessageCircle, Zap, Shield, Settings } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prometheus - Terminal de Pago Avanzado | TCSystems',
  description: 'Descubre Prometheus, nuestro terminal de pago más avanzado. Expendedor de billetes de alta velocidad, sistema de audio, pago con tarjeta, lector QR y pantalla táctil de 19".',
  keywords: 'Prometheus, terminal pago avanzado, expendedor billetes, sistema audio, pago tarjeta, lector QR, TPV automático alta velocidad',
  openGraph: {
    title: 'Prometheus - Terminal de Pago Avanzado | TCSystems',
    description: 'Descubre Prometheus, nuestro terminal de pago más avanzado. Expendedor de billetes de alta velocidad, sistema de audio, pago con tarjeta, lector QR y pantalla táctil de 19".',
    images: ['/T-Cobro Prometheus.jpg'],
  },
}

const features = [
  {
    title: 'Admisión de monedas y billetes',
    description: 'Sistema completo de aceptación de efectivo con validación automática avanzada',
    icon: Coins
  },
  {
    title: 'Devolución de monedas y billetes',
    description: 'Cambio automático preciso y rápido para cualquier transacción',
    icon: Banknote
  },
  {
    title: 'Expendedor de billetes de alta velocidad',
    description: 'Dispensador ultra-rápido para entrega eficiente de billetes y cambio',
    icon: Receipt
  },
  {
    title: 'Sistema de audio',
    description: 'Retroalimentación sonora y guía por voz para mejor experiencia de usuario',
    icon: Volume2
  },
  {
    title: 'Pago con tarjeta',
    description: 'Aceptación completa de tarjetas de débito y crédito con tecnología contactless',
    icon: CreditCard
  },
  {
    title: 'Lector QR',
    description: 'Pagos móviles y códigos QR de última generación',
    icon: QrCode
  },
  {
    title: 'Impresora térmica 80mm',
    description: 'Con presenter y auto-cutter para tickets y recibos profesionales',
    icon: Printer
  },
  {
    title: 'Pantalla táctil 19"',
    description: 'Interfaz intuitiva y responsive de alta resolución',
    icon: Monitor
  },
  {
    title: 'Lector de proximidad',
    description: 'Codificación 125/Mifare para control de acceso avanzado',
    icon: Wifi
  },
  {
    title: 'Mini PC Industrial',
    description: 'Potencia y fiabilidad industrial superior para operación 24/7',
    icon: Cpu
  }
]

const benefits = [
  {
    icon: Zap,
    title: 'Velocidad Extrema',
    description: 'Expendedor de alta velocidad que reduce drásticamente los tiempos de transacción'
  },
  {
    icon: Volume2,
    title: 'Experiencia Inmersiva',
    description: 'Sistema de audio integrado para guía y confirmación de operaciones'
  },
  {
    icon: Shield,
    title: 'Máxima Seguridad',
    description: 'Sistemas de seguridad multicapa para protección total de transacciones'
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

export default function PrometheusPage() {
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
                    Prometheus
                  </span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-2xl text-gray-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
                La <strong className="text-[#0e9acd]">evolución</strong> de los <strong className="text-gray-900 dark:text-white">sistemas de pago automáticos</strong>. 
                Prometheus combina <strong className="text-gray-900 dark:text-white">velocidad extrema</strong>, <strong className="text-gray-900 dark:text-white">audio inmersivo</strong> y <strong className="text-[#0e9acd]">tecnología de vanguardia</strong> para una experiencia sin igual.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-4">
                <div className="group px-6 py-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl border border-[#0e9acd]/20 hover:border-[#0e9acd]/40 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="text-[#0e9acd] font-semibold flex items-center">
                    <div className="w-2 h-2 bg-[#0e9acd] rounded-full mr-2"></div>
                    Alta Velocidad
                  </span>
                </div>
                <div className="group px-6 py-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl border border-[#0e9acd]/20 hover:border-[#0e9acd]/40 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="text-[#0e9acd] font-semibold flex items-center">
                    <div className="w-2 h-2 bg-[#0e9acd] rounded-full mr-2"></div>
                    Sistema Audio
                  </span>
                </div>
                <div className="group px-6 py-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl border border-[#0e9acd]/20 hover:border-[#0e9acd]/40 transition-all duration-300 hover:scale-105 shadow-lg">
                  <span className="text-[#0e9acd] font-semibold flex items-center">
                    <div className="w-2 h-2 bg-[#0e9acd] rounded-full mr-2"></div>
                    Pantalla 19"
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
                  <div className="text-3xl font-black text-[#0e9acd] group-hover:scale-110 transition-transform">Ultra</div>
                  <div className="text-sm text-[#0e9acd] font-medium">Velocidad</div>
                </div>
                <div className="w-px h-12 bg-[#0e9acd]/30"></div>
                <div className="text-center group">
                  <div className="text-3xl font-black text-[#0e9acd] group-hover:scale-110 transition-transform">Audio</div>
                  <div className="text-sm text-[#0e9acd] font-medium">Inmersivo</div>
                </div>
                <div className="w-px h-12 bg-[#0e9acd]/30"></div>
                <div className="text-center group">
                  <div className="text-3xl font-black text-[#0e9acd] group-hover:scale-110 transition-transform">Pro</div>
                  <div className="text-sm text-[#0e9acd] font-medium">Avanzado</div>
                </div>
              </div>
            </div>

            {/* Image - 1/3 */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-3xl">
                <Image
                  src="/T-Cobro Prometheus.webp"
                  alt="Prometheus - Terminal de Pago Avanzado"
                  width={400}
                  height={500}
                  className="w-full h-full object-contain rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especificaciones */}
      <section id="especificaciones" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm mb-8">
              Especificaciones Técnicas
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Potencia <span className="text-[#0e9acd]">Avanzada</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              Prometheus combina velocidad extrema con tecnología de vanguardia para ofrecer 
              el rendimiento más alto del mercado en sistemas de pago automático.
            </p>
          </div>

          {/* Featured Specs */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Hardware Principal */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-zinc-900 dark:to-zinc-950/30 rounded-3xl p-8 border border-gray-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0e9acd] rounded-lg flex items-center justify-center mr-3">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                Hardware Principal
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-700">
                  <span className="font-medium text-gray-700 dark:text-zinc-300">Pantalla</span>
                  <span className="text-[#0e9acd] font-bold">19" Táctil Capacitiva</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-700">
                  <span className="font-medium text-gray-700 dark:text-zinc-300">Procesador</span>
                  <span className="text-[#0e9acd] font-bold">Mini PC Industrial</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-700">
                  <span className="font-medium text-gray-700 dark:text-zinc-300">Audio</span>
                  <span className="text-[#0e9acd] font-bold">Sistema Integrado</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700 dark:text-zinc-300">Expendedor</span>
                  <span className="text-[#0e9acd] font-bold">Alta Velocidad</span>
                </div>
              </div>
            </div>

            {/* Sistemas de Pago */}
            <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-zinc-900 dark:to-zinc-950/30 rounded-3xl p-8 border border-gray-200 dark:border-zinc-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0e9acd] rounded-lg flex items-center justify-center mr-3">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                Sistemas de Pago
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-700">
                  <span className="font-medium text-gray-700 dark:text-zinc-300">Monedas</span>
                  <span className="text-[#0e9acd] font-bold">Validador + Dispensador</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-700">
                  <span className="font-medium text-gray-700 dark:text-zinc-300">Billetes</span>
                  <span className="text-[#0e9acd] font-bold">Ultra Velocidad</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-700">
                  <span className="font-medium text-gray-700 dark:text-zinc-300">Tarjetas</span>
                  <span className="text-[#0e9acd] font-bold">Chip + Contactless</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700 dark:text-zinc-300">QR / Móvil</span>
                  <span className="text-[#0e9acd] font-bold">Lector Integrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Características Detalladas */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Características <span className="text-[#0e9acd]">Avanzadas</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              ¿Por qué elegir Prometheus?
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400">
              Ventajas exclusivas que definen el futuro de los pagos automáticos
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
              ¿Interesado en Prometheus?
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12">
                              Contacta con nuestros especialistas para más información 
              y descubre el poder de la tecnología Prometheus en tu negocio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form - Primero en móvil */}
            <div className="order-2 lg:order-2">
              <ContactForm productName="Prometheus" />
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