import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Factory,
  MapPin,
  Wrench,
  Phone,
  Mail,
  Building2,
} from 'lucide-react'
import { clientLogos } from '@/components/landing/clientLogos'
import { quienesSomosFaqs } from './faq'

const stats = [
  { value: '2010', label: 'Año de fundación' },
  { value: '14+', label: 'Años en el sector' },
  { value: '500+', label: 'Instalaciones en España' },
  { value: '5', label: 'Delegaciones' },
]

const pillars = [
  {
    icon: Factory,
    title: 'Fabricante, no revendedor',
    body: 'Diseñamos y fabricamos nuestros propios kioscos. El hardware, el software y el servicio de asistencia técnica salen de la misma casa, sin intermediarios ni esperas de importación.',
  },
  {
    icon: Wrench,
    title: 'SAT propio en España',
    body: 'El soporte y los recambios los damos nosotros, desde nuestras 5 delegaciones. Soporte técnico 24/7 y mantenimiento preventivo programado, con técnicos en toda España.',
  },
  {
    icon: MapPin,
    title: 'Hecho en España',
    body: 'Fabricación nacional y adaptación al sector de cada cliente. No vendemos una talla única: ajustamos el kiosco y el software a la operación real del negocio.',
  },
]

const products = [
  {
    name: 'Elysium',
    href: '/productos/elysium',
    body: 'Solución premium centrada en pagos con tarjeta y sistemas sin contacto.',
  },
  {
    name: 'Elysium Plus',
    href: '/productos/elysium-plus',
    body: 'Kiosco de 27" con tarjeta, contactless y efectivo, con devolución de cambio.',
  },
  {
    name: 'EVO',
    href: '/productos/evo',
    body: 'Kiosco completo de autoservicio con admisión de monedas, billetes y tarjetas.',
  },
  {
    name: 'Prometheus',
    href: '/productos/prometheus',
    body: 'Terminal de alta velocidad con expendedor de billetes para alto tráfico.',
  },
]

const sectors = [
  { name: 'Gasolineras y túneles de lavado', href: '/gasolineras' },
  { name: 'Lavanderías de autoservicio', href: '/lavanderias' },
  { name: 'Parkings', href: '/parkings' },
  { name: 'Control de accesos', href: '/control-accesos' },
  { name: 'Retail y centros comerciales', href: '/kioscos-autoservicio' },
  { name: 'Administración pública', href: '/kioscos-autoservicio' },
]

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero — definición de entidad */}
      <section className="relative py-24 bg-gray-50 dark:bg-[#121214] overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#0e9acd]/6 to-blue-600/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-20 w-80 h-80 bg-gradient-to-br from-[#0e9acd]/5 to-blue-600/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm mb-8">
            Quiénes somos
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
            Fabricamos el cobro
            <span className="text-[#0e9acd]"> automático</span> de tu negocio
          </h1>

          {/* Párrafo definicional: respuesta directa y autocontenida a
              "¿qué es TCSystems?" — el fragmento que citan los motores de IA. */}
          <p className="text-xl text-gray-700 dark:text-zinc-300 leading-relaxed mb-6">
            <strong className="text-gray-900 dark:text-white">TCSystems</strong> es una empresa
            española fabricante de{' '}
            <strong className="text-gray-900 dark:text-white">kioscos de autoservicio</strong> y{' '}
            <strong className="text-gray-900 dark:text-white">sistemas de cobro automático</strong>,
            con sede en Griñón (Madrid). Diseñamos, fabricamos, instalamos y damos soporte a
            nuestros propios terminales de pago desatendido para gasolineras, lavanderías de
            autoservicio, parkings, retail, centros deportivos y administración pública.
          </p>

          <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed">
            Desde 2010 hemos realizado más de 500 instalaciones en España, con soporte técnico
            propio desde nuestras 5 delegaciones. No somos un revendedor: el hardware, el software
            y el servicio técnico son nuestros.
          </p>
        </div>
      </section>

      {/* Cifras */}
      <section className="py-16 bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-4xl lg:text-5xl font-bold text-[#0e9acd] mb-2">
                    {stat.value}
                  </span>
                  <span className="block text-sm text-gray-600 dark:text-zinc-400">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cómo <span className="text-[#0e9acd]">trabajamos</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Todo el ciclo bajo el mismo techo: del diseño de la máquina al técnico que la
              mantiene.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-gray-50 dark:bg-[#121214] rounded-2xl p-8 border border-gray-200 dark:border-zinc-800"
              >
                <div className="w-12 h-12 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-[#0e9acd]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gama */}
      <section className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestra <span className="text-[#0e9acd]">gama</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Cuatro líneas de producto, todas de fabricación propia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group bg-white dark:bg-zinc-950 rounded-2xl p-6 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#0e9acd] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {product.body}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-[#0e9acd]">
                  Ver ficha
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Dónde nos <span className="text-[#0e9acd]">instalan</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <Link
                key={sector.name}
                href={sector.href}
                className="px-5 py-3 rounded-full border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 hover:border-[#0e9acd] hover:text-[#0e9acd] transition-colors"
              >
                {sector.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Quién <span className="text-[#0e9acd]">confía</span> en nosotros
            </h2>
            <p className="text-lg text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              Redes de estaciones de servicio, lavanderías, operadores de transporte, centros
              comerciales y administraciones públicas.
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-200 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
            {clientLogos.map((logo) => (
              <li
                key={logo.name}
                className="bg-white dark:bg-zinc-950 p-6 flex flex-col items-center justify-center gap-3 min-h-[120px]"
              >
                <Image
                  src={logo.light}
                  alt={`${logo.name} — cliente de TCSystems`}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain dark:hidden"
                />
                <Image
                  src={logo.dark ?? logo.light}
                  alt=""
                  aria-hidden
                  width={120}
                  height={40}
                  className={`h-8 w-auto object-contain hidden dark:block ${
                    logo.dark ? '' : 'dark:brightness-0 dark:invert'
                  }`}
                />
                <span className="text-xs text-gray-500 dark:text-zinc-500 text-center leading-tight">
                  {logo.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Preguntas <span className="text-[#0e9acd]">frecuentes</span>
            </h2>
          </div>

          {/* <details> nativo: sin JavaScript y con la respuesta siempre en el HTML. */}
          <div className="space-y-4">
            {quienesSomosFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-gray-50 dark:bg-[#121214] rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-colors duration-300"
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

      {/* Datos de la empresa (NAP) + CTA */}
      <section className="py-24 bg-gray-50 dark:bg-[#121214]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Datos de la <span className="text-[#0e9acd]">empresa</span>
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <Building2 className="w-5 h-5 text-[#0e9acd] mr-4 mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-gray-900 dark:text-white">
                      TCSystems
                    </span>
                    <span className="text-gray-600 dark:text-zinc-400">
                      Fabricante de kioscos de autoservicio y sistemas de cobro automático
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#0e9acd] mr-4 mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-gray-900 dark:text-white">Sede</span>
                    <address className="not-italic text-gray-600 dark:text-zinc-400">
                      C. Centauro, 15, 28971 Griñón, Madrid (España)
                    </address>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-[#0e9acd] mr-4 mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-gray-900 dark:text-white">
                      Teléfono
                    </span>
                    <a
                      href="tel:+34916216237"
                      className="text-[#0e9acd] hover:text-blue-600 transition-colors"
                    >
                      +34 916 216 237
                    </a>
                    <span className="block text-sm text-gray-500 dark:text-zinc-500">
                      Lunes a viernes de 9:00 a 18:00
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-[#0e9acd] mr-4 mt-1 shrink-0" />
                  <div>
                    <span className="block font-semibold text-gray-900 dark:text-white">Email</span>
                    <a
                      href="mailto:consultoria@tcsystems.es"
                      className="text-[#0e9acd] hover:text-blue-600 transition-colors"
                    >
                      consultoria@tcsystems.es
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0e9acd] to-[#0c7ba3] rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">¿Hablamos de tu proyecto?</h3>
              <p className="text-white/90 leading-relaxed mb-8">
                Un especialista estudia tu caso y te envía una propuesta cerrada, sin compromiso.
                Respuesta en menos de 24 horas.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center bg-white text-[#0e9acd] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 group"
              >
                Solicitar estudio gratuito
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
