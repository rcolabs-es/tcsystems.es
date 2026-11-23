import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Banknote,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle,
  Code,
  Coffee,
  Coins,
  Cpu,
  CreditCard,
  Database,
  Droplets,
  Factory,
  Fuel,
  Headphones,
  Layers,
  Mail,
  MessageCircle,
  Monitor,
  Nfc,
  Phone,
  Plus,
  Printer,
  QrCode,
  Ruler,
  ShoppingCart,
  Palette,
  Unlock,
  Wrench,
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ThemedProductImage from '@/components/ThemedProductImage'
import { integradoresFaqs } from './faq'

/* ------------------------------------------------------------------ */
/* Contenido                                                           */
/* ------------------------------------------------------------------ */

const pillars = [
  { icon: Code, label: 'API para efectivo y tarjeta' },
  { icon: Ruler, label: 'De catálogo o a medida' },
  { icon: Factory, label: 'Fabricación en España' },
  { icon: Wrench, label: 'Instalación y soporte' },
]

const audiences = [
  {
    icon: Database,
    title: 'Si desarrollas un ERP, un TPV o software de gestión',
    body: 'Llevas tu programa de gestión o tu TPV a un kiosco de autopago sin tener que fabricar ni importar hardware.',
  },
  {
    icon: Layers,
    title: 'Si desarrollas software para un sector concreto',
    body: 'Estaciones de servicio, lavaderos, parkings, hostelería o administración pública: tus clientes te piden un punto de autoservicio y lo fabricamos a tu medida.',
  },
  {
    icon: CalendarCheck,
    title: 'Si desarrollas software de cita previa, turnos o accesos',
    body: 'Cita previa, turnos, control de accesos o cobro de servicios: si tu software necesita un punto físico de autoservicio, lo fabricamos.',
  },
]

const yourPart = [
  'Tu software: ERP, TPV, cita previa, accesos…',
  'La experiencia del usuario en la pantalla',
  'La relación con tus clientes',
]

const ourPart = [
  'Diseño y fabricación del kiosco, con el color y el logo que elijas',
  'API y drivers para cobrar en efectivo y tarjeta',
  'Instalación en tu cliente, soporte técnico y recambios',
]

const catalog = [
  {
    name: 'EVO',
    href: '/productos/evo',
    image: '/EVO LATERAL SIN FONDO.webp',
    alt: 'Kiosco autoservicio EVO de TCSystems con pantalla táctil y pago en efectivo y tarjeta',
    body: 'Kiosco completo: efectivo con devolución, tarjeta, QR, impresora y pantalla táctil de 19".',
  },
  {
    name: 'Prometheus',
    href: '/productos/prometheus',
    image: '/T-Cobro Prometheus.webp',
    alt: 'Terminal de pago Prometheus de TCSystems con expendedor de billetes de alta velocidad',
    body: 'Terminal de alta velocidad con expendedor de billetes, audio y pantalla táctil de 19".',
  },
  {
    name: 'Elysium',
    href: '/productos/elysium',
    image: '/Elysium sin fondo.webp',
    alt: 'Terminal de autoservicio Elysium de TCSystems para pago con tarjeta',
    body: 'Pago solo con tarjeta, pantalla de 21,5", lector de usuarios y lector QR.',
  },
  {
    name: 'Elysium Plus',
    href: '/productos/elysium-plus',
    image: '/elysium-plus.png',
    alt: 'Kiosco autoservicio Elysium Plus de TCSystems con pantalla de 27 pulgadas',
    body: 'Pantalla de 27", tarjeta, efectivo o mixto, lector de usuarios y QR.',
  },
]

const sectors = [
  {
    icon: Fuel,
    title: 'Gasolineras y estaciones desatendidas',
    body: 'Postes de pago y terminales de autopago para estaciones de servicio desatendidas y túneles de lavado, preparados para el software de gestión de la estación.',
    link: { href: '/gasolineras', label: 'Cobro automático en gasolineras' },
  },
  {
    icon: Building2,
    title: 'Ayuntamientos y administración pública',
    body: 'Kioscos de autoservicio para pago de tasas y recibos, cita previa, registro o emisión de documentos, con tu software de administración electrónica.',
  },
  {
    icon: Droplets,
    title: 'Lavaderos y lavanderías',
    body: 'Terminales de pago para boxes de lavado, túneles y lavanderías de autoservicio, con efectivo, tarjeta y control de las máquinas desde tu software.',
    link: { href: '/lavanderias', label: 'Central de pago para lavanderías' },
  },
  {
    icon: Coffee,
    title: 'Hostelería',
    body: 'Kioscos de autopedido y pago para restaurantes y cafeterías, conectados a tu TPV de hostelería sin depender de una plataforma cerrada.',
  },
  {
    icon: ShoppingCart,
    title: 'Retail',
    body: 'Kioscos de autopago y cajeros de cobro automático para tiendas y espacios 24 horas, integrados con tu TPV o tu ERP de retail.',
  },
  {
    icon: Car,
    title: 'Parkings',
    body: 'Cajeros de pago automático para parkings públicos y privados, listos para conectarse a tu software de gestión de aparcamientos.',
    link: { href: '/parkings', label: 'Sistemas de pago para parkings' },
  },
]

const steps = [
  {
    title: 'Nos cuentas tu software y tu cliente',
    body: 'Qué hace tu aplicación, en qué establecimientos se va a usar y qué tiene que poder hacer el usuario en el kiosco: pagar, identificarse, imprimir, sacar un turno…',
  },
  {
    title: 'Eliges modelo o lo diseñamos contigo',
    body: 'Partimos de un modelo de catálogo o diseñamos un kiosco a medida: formato, periféricos y medios de pago. Sale con el color RAL y el logo de tu cliente o con los tuyos.',
  },
  {
    title: 'Fabricamos una unidad piloto',
    body: 'Si el kiosco es a medida, te pasamos presupuesto de una unidad piloto y la fabricamos en nuestras instalaciones en España. Tras el prototipo, la primera unidad real está lista en un plazo de 8 a 12 semanas.',
  },
  {
    title: 'Integras tu software',
    body: 'El kiosco lleva un PC industrial con Windows. Te damos las APIs y los drivers para que tu aplicación cobre en efectivo y con tarjeta y use el resto de periféricos.',
  },
  {
    title: 'Lanzamos la serie',
    body: 'Cuando apruebas la unidad piloto, fabricamos la serie para tus clientes.',
  },
  {
    title: 'Lo instalamos en tus clientes',
    body: 'Nuestros instaladores montan los kioscos en el cliente final. Tú tienes un soporte técnico directo y, si hace falta, presencial.',
  },
]

const peripherals = [
  { icon: Coins, label: 'Admisión y devolución de monedas y billetes' },
  { icon: CreditCard, label: 'Pago con tarjeta de débito y crédito, también contactless' },
  { icon: QrCode, label: 'Lector de códigos QR' },
  { icon: Printer, label: 'Impresora térmica de tickets de 80 mm' },
  { icon: Nfc, label: 'Lector de proximidad o de usuarios' },
  { icon: Monitor, label: 'Pantalla táctil de 19", 21,5" o 27"' },
  { icon: Banknote, label: 'Expendedor de billetes de alta velocidad' },
  { icon: Cpu, label: 'PC industrial con Windows, para funcionar 24/7' },
]

const reasons = [
  {
    icon: Factory,
    title: 'Fabricación propia en España',
    body: 'Diseñamos y fabricamos nuestros kioscos. Hablas con quien hace el hardware, sin intermediarios ni esperas de importación.',
  },
  {
    icon: Ruler,
    title: 'Hardware a medida',
    body: 'No es una talla única: adaptamos el formato, los periféricos y la imagen del kiosco a tu software y a tu sector.',
  },
  {
    icon: Unlock,
    title: 'Tu software, sin ataduras',
    body: 'Vendemos el hardware sin software, así que en el kiosco funciona tu aplicación y no la nuestra.',
  },
  {
    icon: Headphones,
    title: 'Instalación y soporte técnico',
    body: 'Te atendemos a ti como integrador, instalamos los kioscos en tu cliente y damos soporte presencial cuando hace falta, con delegaciones en Madrid, Cataluña, Andalucía, País Vasco y Comunidad Valenciana.',
  },
]

const contactOptions = [
  {
    icon: Phone,
    title: 'Llámanos',
    subtitle: '+34 916 216 237',
    action: 'tel:+34916216237',
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    subtitle: 'Consulta inmediata',
    action: 'https://wa.me/34677614129',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Mail,
    title: 'Email',
    subtitle: 'consultoria@tcsystems.es',
    action: 'mailto:consultoria@tcsystems.es',
    color: 'from-blue-400 to-[#0e9acd]',
  },
]

/* ------------------------------------------------------------------ */
/* Componentes locales                                                 */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
      {children}
    </div>
  )
}

/** Blobs de fondo, como en las secciones de la home. */
function Blobs() {
  return (
    <>
      <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-[#0e9acd]/7 to-blue-600/7 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-20 w-80 h-80 bg-gradient-to-br from-[#0e9acd]/5 to-blue-600/5 rounded-full blur-3xl"></div>
    </>
  )
}

/** Foto real con pie, para la galería y los bloques de proyecto. */
function Photo({
  src,
  alt,
  caption,
  className = '',
  sizes = '(min-width: 1024px) 40vw, 100vw',
}: {
  src: string
  alt: string
  caption?: string
  className?: string
  sizes?: string
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-5 pt-12 pb-4 text-sm font-medium text-white">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function IntegradoresPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 overflow-hidden py-16">
        {/* Cuadrícula y orbes, como el hero de la home */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#0e9acd]/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#0e9acd]/15 to-blue-600/15 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="inline-flex items-center bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
                <Code className="w-4 h-4 text-[#0e9acd] mr-2" />
                Tu software en nuestros kioscos
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Fabricante de kioscos autoservicio{' '}
                  <span className="text-[#0e9acd]">para integrar tu software</span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                  Tú pones el software, nosotros fabricamos el kiosco.{' '}
                  <strong className="text-gray-900 dark:text-white">
                    Cualquier desarrollador o empresa de software
                  </strong>{' '}
                  puede llevar su aplicación a un kiosco autoservicio, de catálogo o{' '}
                  <strong className="text-[#0e9acd]">a medida</strong>, para{' '}
                  <strong className="text-gray-900 dark:text-white">
                    cualquier tipo de establecimiento
                  </strong>
                  .
                </p>

                <ul className="space-y-3">
                  {[
                    'API y drivers para cobrar en efectivo y tarjeta desde tu software',
                    'Modelos de catálogo o diseño a medida, con el color y el logo de tu cliente',
                    'Fabricación en España, instalación y soporte técnico',
                  ].map((item) => (
                    <li key={item} className="flex items-start text-gray-700 dark:text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center bg-[#0e9acd] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0c7ba3] transition-all duration-200 shadow-lg hover:shadow-xl group hover:scale-105"
                >
                  Cuéntanos tu proyecto
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#como-funciona"
                  className="inline-flex items-center justify-center border-2 border-[#0e9acd] text-[#0e9acd] px-8 py-4 rounded-xl font-semibold hover:bg-[#0e9acd] hover:text-white transition-all duration-200"
                >
                  Cómo funciona
                </Link>
              </div>
            </div>

            {/* Kiosco + tarjetas flotantes "tu software / nuestro hardware" */}
            <div className="lg:col-span-2 relative">
              <div className="absolute inset-x-8 top-1/4 bottom-8 bg-gradient-to-br from-[#0e9acd]/25 to-blue-600/25 rounded-full blur-3xl"></div>
              <ThemedProductImage
                lightSrc="/elysium-plus.png"
                darkSrc="/elysium-plus-white.png"
                alt="Kiosco autoservicio Elysium Plus de TCSystems, hardware listo para integrar software de terceros"
                width={1000}
                height={1500}
                priority
                className="relative w-full h-[28rem] lg:h-[38rem] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />

              <div className="hidden sm:flex absolute top-16 -left-4 lg:-left-12 items-center gap-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-gray-200 dark:border-zinc-800 rounded-2xl px-5 py-4 shadow-xl">
                <div className="w-10 h-10 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center">
                  <Code className="w-5 h-5 text-[#0e9acd]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-zinc-400">Tú pones</p>
                  <p className="font-semibold text-gray-900 dark:text-white">El software</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute bottom-16 -right-2 lg:-right-6 items-center gap-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur border border-gray-200 dark:border-zinc-800 rounded-2xl px-5 py-4 shadow-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0e9acd] to-blue-600 rounded-xl flex items-center justify-center">
                  <Factory className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-zinc-400">Nosotros fabricamos</p>
                  <p className="font-semibold text-gray-900 dark:text-white">El kiosco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franja de pilares (mismo estilo que StatsStripe, sin cifras) */}
      <section className="py-12 bg-[#0e9acd] border-y border-[#0c7ba3]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p) => (
              <li key={p.label} className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
                <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold lg:text-lg">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Para quién es */}
      <section className="relative py-24 bg-white dark:bg-zinc-950 overflow-hidden">
        <Blobs />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-6">
            <Eyebrow>Para quién es</Eyebrow>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Para empresas de software que{' '}
              <span className="text-[#0e9acd]">no fabrican hardware</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Tienes un software que funciona y clientes que te piden un punto de autoservicio. Fabricar
              hardware no es tu negocio: es el nuestro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="bg-white dark:bg-[#121214] rounded-2xl p-8 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0e9acd] group-hover:scale-110 transition-all duration-300">
                  <a.icon className="w-7 h-7 text-[#0e9acd] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{a.title}</h3>
                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>

          {/* Reparto: tú / nosotros */}
          <div className="relative grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-50 dark:bg-[#121214] rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-zinc-800">
              <div className="w-14 h-14 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Code className="w-7 h-7 text-[#0e9acd]" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Lo que pones tú
              </h3>
              <ul className="space-y-4">
                {yourPart.map((item) => (
                  <li key={item} className="flex items-start text-gray-700 dark:text-zinc-300 text-lg">
                    <CheckCircle className="w-6 h-6 text-[#0e9acd] mr-3 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              aria-hidden
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 shadow-xl items-center justify-center"
            >
              <Plus className="w-6 h-6 text-[#0e9acd]" />
            </div>

            <div className="bg-gradient-to-br from-[#0e9acd] to-[#0c7ba3] rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                <Factory className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">Lo que ponemos nosotros</h3>
              <ul className="space-y-4">
                {ourPart.map((item) => (
                  <li key={item} className="flex items-start text-white/90 text-lg">
                    <CheckCircle className="w-6 h-6 text-white mr-3 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API */}
      <section id="api" className="relative py-24 bg-zinc-950 text-white overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0e9acd]/25 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-zinc-300">
                <Code className="w-4 h-4 text-[#0e9acd] mr-2" />
                API para desarrolladores
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Cobra en efectivo y con tarjeta{' '}
                <span className="text-[#0e9acd]">desde tu propio software</span>
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                No tienes que pelearte con monederos, lectores de billetes ni datáfonos. Te damos las APIs
                y los drivers para que tu aplicación integre el kiosco fácilmente y empiece a registrar
                pagos en efectivo y con tarjeta.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    icon: Coins,
                    title: 'Efectivo con devolución de cambio',
                    text: 'Tu software pide el importe y el kiosco se encarga de cobrar y devolver el cambio.',
                  },
                  {
                    icon: CreditCard,
                    title: 'Tarjeta y contactless',
                    text: 'Pago con tarjeta de débito o crédito desde la misma aplicación.',
                  },
                  {
                    icon: Cpu,
                    title: 'Windows, APIs y drivers',
                    text: 'Los kioscos llevan un PC industrial con Windows y te damos los drivers de los periféricos.',
                  },
                  {
                    icon: Headphones,
                    title: 'Te acompañamos en la integración',
                    text: 'Hablas directamente con nuestro equipo técnico mientras conectas tu aplicación.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[#0e9acd]/15 border border-[#0e9acd]/30 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#0e9acd]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/integradores/api-integracion-software.webp"
                  alt="Integración de software con la API de los kioscos autoservicio de TCSystems"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent"></div>
              </div>
              {/* Flujo: tu software → API → medios de pago */}
              <div className="relative -mt-12 mx-4 sm:mx-8 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:gap-3 rounded-2xl bg-zinc-900/90 backdrop-blur border border-white/10 p-4 sm:p-5 shadow-2xl">
                {[
                  { icon: Code, label: 'Tu software' },
                  { icon: Cpu, label: 'API TCSystems' },
                  { icon: Banknote, label: 'Efectivo y tarjeta' },
                ].map((node, i) => (
                  <div key={node.label} className="contents">
                    {i > 0 && <ArrowRight aria-hidden className="w-4 h-4 text-[#0e9acd]" />}
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          i === 1 ? 'bg-gradient-to-br from-[#0e9acd] to-blue-600' : 'bg-white/10'
                        }`}
                      >
                        <node.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-zinc-200">{node.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo o a medida */}
      <section className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <Eyebrow>Hardware</Eyebrow>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Kioscos de catálogo o{' '}
              <span className="text-[#0e9acd]">fabricados a medida</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Empieza con un modelo probado o diseña con nosotros el terminal que necesita tu software.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Modelos de catálogo
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {catalog.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="bg-white dark:bg-zinc-950 rounded-3xl p-6 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-60 bg-gradient-to-br from-[#0e9acd]/10 to-blue-600/10 dark:from-[#0e9acd]/20 dark:to-blue-600/20 rounded-2xl mb-6 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-5 drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#0e9acd] transition-colors">
                  {p.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-zinc-400 mb-5 flex-1">{p.body}</p>
                <span className="inline-flex items-center text-sm font-semibold text-[#0e9acd]">
                  Ver ficha
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="bg-white dark:bg-zinc-950 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-zinc-800 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 text-[#0e9acd] rounded-full px-4 py-2 text-sm font-semibold">
                  <Ruler className="w-4 h-4 mr-2" />A medida
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Kiosco a medida, <span className="text-[#0e9acd]">diseñado contigo</span>
                </h3>
                <p className="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Si ningún modelo encaja, lo diseñamos desde cero con tu equipo. Tu software manda; el
                  hardware se adapta.
                </p>
                <ol className="space-y-3">
                  {[
                    'Te pasamos presupuesto de una unidad piloto',
                    'La fabricamos: tras el prototipo, la primera unidad real está lista en 8 a 12 semanas',
                    'Cuando la apruebas, lanzamos la serie',
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-zinc-300">
                      <span className="w-6 h-6 shrink-0 rounded-full bg-[#0e9acd] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    'De pie, de pared o en mobiliario',
                    'Periféricos a elegir',
                    'Medios de pago a elegir',
                    'Uso interior o exterior',
                  ].map((item) => (
                    <li key={item} className="flex items-start text-gray-700 dark:text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className="inline-flex items-center bg-[#0e9acd] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c7ba3] transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Diseñar mi kiosco
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <Photo
                src="/integradores/kiosco-medida-transporte-calle.webp"
                alt="Kiosco autoservicio fabricado a medida por TCSystems, instalado en una parada de autobús con el color y el logo del cliente"
                caption="Kiosco a medida instalado en la calle, con el color y el logo del cliente"
                className="aspect-[3/4] w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Personalización: RAL y vinilado */}
          <div className="mt-16">
            <div className="grid lg:grid-cols-3 gap-8 items-end mb-10">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 text-[#0e9acd] rounded-full px-4 py-2 text-sm font-semibold">
                  <Palette className="w-4 h-4 mr-2" />
                  Personalización
                </div>
                <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  Con el color y el logo{' '}
                  <span className="text-[#0e9acd]">de tu cliente o los tuyos</span>
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
                Todos los equipos, de catálogo o a medida, salen pintados en el RAL que elijas y vinilados
                con el logo del cliente final o con el tuyo.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <Photo
                src="/integradores/kiosco-vinilado-logo-cliente.webp"
                alt="Kiosco autoservicio de TCSystems vinilado con el logo del cliente"
                caption="Vinilado con la marca del cliente"
                className="aspect-[3/4]"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <Photo
                src="/integradores/kiosco-medida-transporte-fabrica.webp"
                alt="Kiosco autoservicio a medida pintado en el RAL del cliente, listo para salir de fábrica"
                caption="En el RAL del cliente, listo para salir de fábrica"
                className="aspect-[3/4]"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <Photo
                src="/integradores/central-pago-pared-lavanderia.webp"
                alt="Central de pago de pared de TCSystems instalada en una lavandería autoservicio"
                caption="Central de pago de pared en una lavandería"
                className="aspect-[3/4]"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <Photo
                src="/integradores/montaje-fabrica-tcsystems.webp"
                alt="Técnico de TCSystems montando equipos de autoservicio en la fábrica"
                caption="Montaje en nuestras instalaciones"
                className="aspect-[3/4]"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="relative py-24 bg-white dark:bg-zinc-950 overflow-hidden">
        <Blobs />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-6">
            <Eyebrow>Sectores</Eyebrow>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Kioscos autoservicio para{' '}
              <span className="text-[#0e9acd]">cualquier tipo de establecimiento</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Sea cual sea el sector de tus clientes, tenemos un hardware de autoservicio para tu software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((s) => (
              <div
                key={s.title}
                className="relative bg-white dark:bg-[#121214] rounded-2xl p-8 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0e9acd] to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-[#0e9acd]/10 to-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#0e9acd] group-hover:to-blue-600 group-hover:scale-110 transition-all duration-300">
                  <s.icon className="w-7 h-7 text-[#0e9acd] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{s.title}</h3>
                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed flex-1">{s.body}</p>
                {s.link && (
                  <Link
                    href={s.link.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#0e9acd] hover:text-[#0c7ba3]"
                  >
                    {s.link.label}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col md:flex-row md:items-center gap-6 rounded-3xl border border-[#0e9acd]/30 bg-[#0e9acd]/5 dark:bg-[#0e9acd]/10 p-8">
            <div className="w-14 h-14 shrink-0 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center shadow-sm">
              <Building2 className="w-7 h-7 text-[#0e9acd]" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ¿Tienes el negocio pero no el software?
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
                Lo desarrollamos nosotros o te ponemos en contacto con un partner de software
                especializado en tu modelo de negocio que ya trabaja con TCSystems.
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center shrink-0 bg-[#0e9acd] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c7ba3] transition-all duration-200 shadow-lg group"
            >
              Cuéntanos tu negocio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-24 bg-gray-50 dark:bg-[#121214] scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <Eyebrow>Cómo funciona</Eyebrow>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Cómo integramos tu software{' '}
              <span className="text-[#0e9acd]">en nuestro hardware</span>
            </h2>
          </div>

          {/* Línea de tiempo */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-6 lg:left-7 top-6 bottom-6 w-px bg-gradient-to-b from-[#0e9acd] via-[#0e9acd]/50 to-blue-600/20"
            ></div>
          <ol className="relative space-y-8">
            {steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-6 lg:gap-8">
                <div className="relative z-10 w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-full bg-gradient-to-br from-[#0e9acd] to-blue-600 text-white font-bold text-lg lg:text-xl flex items-center justify-center shadow-lg ring-8 ring-gray-50 dark:ring-[#121214]">
                  {i + 1}
                </div>
                <div className="flex-1 bg-white dark:bg-zinc-950 rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      {/* Periféricos */}
      <section className="relative py-24 bg-white dark:bg-zinc-950 overflow-hidden">
        <Blobs />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Eyebrow>Configuración</Eyebrow>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Periféricos para lo que necesite{' '}
                <span className="text-[#0e9acd]">tu aplicación</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
                Cada kiosco se configura con los periféricos que tu software va a usar. Estos son los que
                ya montamos en nuestra gama:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {peripherals.map((p) => (
                  <li
                    key={p.label}
                    className="flex items-center gap-4 bg-gray-50 dark:bg-[#121214] rounded-2xl p-4 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-colors duration-300 group"
                  >
                    <div className="w-11 h-11 bg-white dark:bg-zinc-900 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#0e9acd] transition-all duration-300">
                      <p.icon className="w-5 h-5 text-[#0e9acd] group-hover:text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">{p.label}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-[#0e9acd]/5 dark:bg-[#0e9acd]/10 border border-[#0e9acd]/30 p-6">
                <h3 className="flex items-center font-semibold text-gray-900 dark:text-white mb-2">
                  <Code className="w-5 h-5 text-[#0e9acd] mr-2" />
                  Windows, APIs y drivers
                </h3>
                <p className="text-gray-600 dark:text-zinc-400">
                  Los kioscos funcionan con Windows y te damos las APIs y los drivers de los periféricos.
                  Antes de fabricar revisamos con tu equipo técnico qué periféricos va a usar tu aplicación.
                </p>
              </div>
            </div>
            <Photo
              src="/integradores/elysium-plus-fabrica.webp"
              alt="Kiosco autoservicio Elysium Plus de TCSystems en fábrica, con lector de tarjetas, admisión de monedas y billetes e impresora"
              caption="Elysium Plus en fábrica: tarjeta, efectivo, QR e impresora"
              className="aspect-[3/4] w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Por qué TCSystems */}
      <section className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <Eyebrow>Por qué TCSystems</Eyebrow>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Una alternativa a los{' '}
              <span className="text-[#0e9acd]">fabricantes de siempre</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Muchos fabricantes de kioscos venden su hardware atado a su propio software. Nosotros no:
              fabricamos el hardware para que tú pongas el software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="text-center bg-white dark:bg-zinc-950 rounded-3xl p-8 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0e9acd]/10 to-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#0e9acd] group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110">
                  <r.icon className="w-8 h-8 text-[#0e9acd] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{r.title}</h3>
                <p className="text-gray-600 dark:text-zinc-400">{r.body}</p>
              </div>
            ))}
          </div>

          {/* Caso de éxito (anónimo hasta que el cliente autorice citarlo) */}
          <div className="mt-16 bg-white dark:bg-zinc-950 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-zinc-800 shadow-xl">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3 space-y-6">
                <div className="inline-flex items-center bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 text-[#0e9acd] rounded-full px-4 py-2 text-sm font-semibold">
                  <Fuel className="w-4 h-4 mr-2" />
                  Caso real · Estaciones de servicio
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                  Un poste de pago a medida para una{' '}
                  <span className="text-[#0e9acd]">empresa de software de estaciones de servicio</span>
                </h3>
                <dl className="space-y-5">
                  {[
                    {
                      term: 'El punto de partida',
                      text: 'Una empresa con su propio software de gestión para estaciones de servicio necesitaba un poste de pago desatendido para llevar su solución a las estaciones de sus clientes.',
                    },
                    {
                      term: 'Qué hicimos',
                      text: 'Vinieron a vernos, nos contaron qué necesitaban y diseñamos el poste en conjunto. Después lo fabricamos a su medida.',
                    },
                    {
                      term: 'El resultado',
                      text: 'Su software funciona en un poste fabricado por TCSystems, listo para instalar en estaciones.',
                    },
                  ].map((item, i) => (
                    <div key={item.term} className="flex gap-4">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-[#0e9acd] to-blue-600 text-white text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </div>
                      <div>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.term}</dt>
                        <dd className="text-gray-600 dark:text-zinc-400 leading-relaxed">{item.text}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="lg:col-span-2">
                <Photo
                  src="/integradores/postes-pago-medida.webp"
                  alt="Postes de pago desatendido fabricados a medida por TCSystems"
                  caption="Postes de pago fabricados a medida"
                  className="aspect-[4/5] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA intermedio (mismo bloque que CTASection de la home) */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0e9acd] to-[#0c7ba3] rounded-3xl p-8 lg:p-16 text-white text-center shadow-2xl">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-16 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Tú tienes el software.
                <br />
                <span className="text-white/90">Nosotros, el kiosco.</span>
              </h2>
              <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Cuéntanos qué hace tu aplicación y dónde quieres instalarla. Te proponemos el hardware
                que mejor encaja, <strong className="text-white">de catálogo o a medida</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center bg-white text-[#0e9acd] px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 group"
                >
                  Cuéntanos tu proyecto
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 ml-2 lg:ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://wa.me/34677614129"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-white hover:text-[#0e9acd] transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Escríbenos por WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-6">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Dudas sobre <span className="text-[#0e9acd]">integrar tu software</span>
            </h2>
          </div>

          {/* <details> nativo: sin JavaScript y con la respuesta siempre en el HTML. */}
          <div className="space-y-4">
            {integradoresFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white dark:bg-zinc-950 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] open:border-[#0e9acd] open:shadow-lg transition-all duration-300"
              >
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none p-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{faq.question}</h3>
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 flex items-center justify-center text-[#0e9acd] transition-all duration-300 group-open:rotate-45 group-open:bg-[#0e9acd] group-open:text-white"
                  >
                    <Plus className="w-4 h-4" />
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

      {/* CTA + formulario */}
      <section id="contacto" className="relative py-24 bg-white dark:bg-zinc-950 scroll-mt-24 overflow-hidden">
        <Blobs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-6">
            <Eyebrow>Contacto</Eyebrow>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Cuéntanos <span className="text-[#0e9acd]">tu proyecto</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Dinos qué hace tu software y dónde quieres instalarlo. Te proponemos el hardware que mejor
              encaja, de catálogo o a medida.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 shadow-2xl rounded-2xl">
              <ContactForm productName="Integradores de software" integratorFields />
            </div>

            <div className="space-y-6 order-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Otras formas de contacto
              </h3>
              <div className="grid gap-6">
                {contactOptions.map((option) => (
                  <Link
                    key={option.title}
                    href={option.action}
                    className="bg-white dark:bg-[#121214] rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] flex items-center"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300`}
                    >
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{option.title}</h4>
                      <p className="text-gray-600 dark:text-zinc-400">{option.subtitle}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0e9acd] group-hover:translate-x-1 transition-all" />
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
