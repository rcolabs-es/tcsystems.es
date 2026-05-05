import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import HeroStats from './HeroStats'
import LandingForm from './LandingForm'
import ThemeToggle from '@/components/ThemeToggle'

const fraunces = {
  fontFamily: 'var(--font-fraunces), Georgia, serif',
  fontVariationSettings: '"opsz" 96, "SOFT" 50',
} as const

const fraunces60 = {
  fontFamily: 'var(--font-fraunces), Georgia, serif',
  fontVariationSettings: '"opsz" 60, "SOFT" 40',
} as const

const mono = { fontFamily: 'var(--font-geist-mono), monospace' } as const

// Estructura JSON-LD para SEO de la landing
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kioscos de Autoservicio',
  provider: {
    '@type': 'Organization',
    name: 'TCSystems',
    url: 'https://tcsystems.es',
    logo: 'https://tcsystems.es/logo.webp',
  },
  areaServed: { '@type': 'Country', name: 'España' },
  description:
    'Diseño, fabricación e instalación de kioscos de autoservicio para parkings, centros deportivos, lavaderos, hostelería y administraciones públicas. 14+ años, 500+ instalaciones, soporte directo.',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'EUR',
  },
}

export default function KioscosAutoservicioLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ───────── HEADER MINIMAL ───────── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-900/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Inicio TCSystems" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="TCSystems"
              width={120}
              height={48}
              className="w-16 h-auto object-contain dark:brightness-0 dark:invert"
              priority
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+34916216237"
              className="hidden md:inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              style={mono}
            >
              <Phone className="w-3.5 h-3.5" />
              +34 916 216 237
            </a>
            <ThemeToggle />
            <a
              href="#solicitar"
              className="hidden sm:inline-flex items-center gap-1.5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0e9acd] hover:text-white dark:hover:bg-[#0e9acd] dark:hover:text-white transition-colors"
            >
              Solicitar estudio
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
        {/* Grid de fondo técnico sutil */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Glow brand */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#0e9acd]/15 blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Columna izquierda: copy */}
            <div className="lg:col-span-7 space-y-10">
              {/* Eyebrow editorial */}
              <div className="flex items-center gap-3">
                <span
                  className="text-[11px] uppercase tracking-[0.24em] text-[#0e9acd]"
                  style={mono}
                >
                  01 / Kioscos autoservicio
                </span>
                <span className="h-px w-12 bg-zinc-300 dark:bg-zinc-700" />
                <span
                  className="text-[11px] uppercase tracking-[0.24em] text-zinc-500"
                  style={mono}
                >
                  Hechos en España
                </span>
              </div>

              {/* H1 mixto: serif + sans para máximo carácter */}
              <h1 className="text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95] tracking-tight font-medium">
                <span className="block">Automatiza</span>
                <span className="block">
                  <span style={fraunces} className="italic font-normal">
                    cobros
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-600">,</span>
                </span>
                <span className="block">
                  <span style={fraunces} className="italic font-normal">
                    accesos
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-600"> y </span>
                  <span style={fraunces} className="italic font-normal">
                    atención.
                  </span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                Diseñamos y fabricamos los kioscos. Instalamos el software.
                Damos soporte directo. <strong className="text-zinc-900 dark:text-white">Sin intermediarios.</strong>
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#solicitar"
                  className="group inline-flex items-center gap-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-6 py-3.5 rounded-full text-base font-medium hover:bg-[#0e9acd] hover:text-white dark:hover:bg-[#0e9acd] dark:hover:text-white transition-all duration-200"
                >
                  Solicitar estudio gratuito
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#producto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white transition-colors"
                >
                  Ver el producto
                </a>
              </div>

              {/* Stats */}
              <HeroStats />
            </div>

            {/* Columna derecha: imagen del kiosco como objeto editorial */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full max-w-md lg:max-w-none mx-auto">
                {/* Marco editorial */}
                <div
                  aria-hidden
                  className="absolute inset-0 -m-2 sm:-m-3 border border-zinc-200 dark:border-zinc-800 rounded-[2rem]"
                />
                <div
                  aria-hidden
                  className="absolute -inset-1 sm:-inset-2 rounded-[1.75rem] bg-gradient-to-br from-[#0e9acd]/0 via-transparent to-[#0e9acd]/20 pointer-events-none"
                />
                <Image
                  src="/elysium-plus.png"
                  alt="Kiosco autoservicio Elysium Plus"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 90vw"
                  className="object-contain"
                />
                {/* Etiqueta tipo museo */}
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-900/5 dark:border-white/10 rounded-2xl px-3 py-2 shadow-sm">
                  <div
                    className="text-[10px] uppercase tracking-[0.22em] text-zinc-500"
                    style={mono}
                  >
                    Modelo
                  </div>
                  <div className="text-sm font-medium text-zinc-900 dark:text-white">
                    Elysium Plus · 27"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── LOGO MARQUEE ───────── */}
      <section className="relative bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-900/5 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-14">
          <div className="flex items-baseline gap-3 mb-6">
            <span
              className="text-[11px] uppercase tracking-[0.24em] text-[#0e9acd]"
              style={mono}
            >
              02 / Confían en nosotros
            </span>
            <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-zinc-50 dark:from-zinc-900/40 to-transparent z-10"
          />
          <div
            aria-hidden
            className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-zinc-50 dark:from-zinc-900/40 to-transparent z-10"
          />
          <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 marquee-track py-6 lg:py-10">
            {(() => {
              type Logo = { name: string; light: string; dark?: string }
              const logos: Logo[] = [
                {
                  name: 'Ayuntamiento de Arnedillo',
                  light: '/logosClientes/ayuntamiento arnedillo.webp',
                  dark: '/logosClientes/ayuntamiendo arnedillo blanco.webp',
                },
                {
                  name: 'Ayuntamiento de Tortosa',
                  light: '/logosClientes/ayuntamiento tortosa logo.webp',
                },
                {
                  name: 'Ballenoil',
                  light: '/logosClientes/ballenoil_logo.webp',
                  dark: '/logosClientes/ballenoil_logo_blanco.webp',
                },
                {
                  name: 'CC Las Arenas',
                  light: '/logosClientes/cc las arenas logo.webp',
                },
                {
                  name: 'Cuartel General del Aire',
                  light: '/logosClientes/cuartel general del aire logo.webp',
                },
                {
                  name: 'Deza',
                  light: '/logosClientes/LOGO-DEZA-plano_RGB_1200x628_facebook.webp',
                },
                {
                  name: 'Grupo Ruiz',
                  light: '/logosClientes/grupo ruiz logo.webp',
                },
                {
                  name: 'Proaleh',
                  light: '/logosClientes/LOGO-PROALEH-VERDE1.webp',
                },
                {
                  name: 'Socibus',
                  light: '/logosClientes/socibus logo.webp',
                },
                {
                  name: 'Albie SA',
                  light: '/logosClientes/albie-sa_li1.webp',
                },
              ]
              const doubled = [...logos, ...logos]
              return doubled.map((logo, i) => (
                <div
                  key={i}
                  className="relative h-12 sm:h-14 lg:h-16 w-32 sm:w-40 lg:w-44 shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-[filter,opacity] duration-300"
                  aria-hidden={i >= logos.length ? 'true' : undefined}
                >
                  {logo.dark ? (
                    <>
                      <Image
                        src={logo.light}
                        alt={i >= logos.length ? '' : `${logo.name} — cliente TCSystems`}
                        fill
                        className="object-contain dark:hidden"
                        sizes="(min-width: 1024px) 176px, (min-width: 640px) 160px, 128px"
                      />
                      <Image
                        src={logo.dark}
                        alt=""
                        aria-hidden="true"
                        fill
                        className="object-contain hidden dark:block"
                        sizes="(min-width: 1024px) 176px, (min-width: 640px) 160px, 128px"
                      />
                    </>
                  ) : (
                    <Image
                      src={logo.light}
                      alt={i >= logos.length ? '' : `${logo.name} — cliente TCSystems`}
                      fill
                      className="object-contain dark:invert"
                      sizes="(min-width: 1024px) 176px, (min-width: 640px) 160px, 128px"
                    />
                  )}
                </div>
              ))
            })()}
          </div>
        </div>

        <style>{`
          .marquee-track {
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none; }
          }
        `}</style>
      </section>

      {/* ───────── PROBLEMAS / SOLUCIONES ───────── */}
      <section className="bg-white dark:bg-zinc-950 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-baseline gap-3 mb-12 lg:mb-20">
            <span
              className="text-[11px] uppercase tracking-[0.24em] text-[#0e9acd]"
              style={mono}
            >
              03 / Por qué un kiosco
            </span>
            <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-medium"
                style={fraunces}
              >
                Lo que tu negocio
                <br />
                <span className="italic text-[#0e9acd]">deja de perder</span>
              </h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden">
              {[
                {
                  num: '01',
                  title: 'Colas y tiempos muertos',
                  body:
                    'Cobro 24/7 sin un mostrador atendido. Reduces personal en caja y absorbes picos sin esperas.',
                },
                {
                  num: '02',
                  title: 'Errores y descuadres',
                  body:
                    'Cada operación queda registrada. Reportes en tiempo real, conciliación automática, fin del papel.',
                },
                {
                  num: '03',
                  title: 'Soporte que tarda',
                  body:
                    'Fabricación propia, sin intermediarios. Recambios, mantenimiento y desarrollo bajo el mismo techo.',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-white dark:bg-zinc-950 p-7 sm:p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors duration-300"
                >
                  <div
                    className="text-[10px] uppercase tracking-[0.24em] text-[#0e9acd] mb-5"
                    style={mono}
                  >
                    {item.num}
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PRODUCTO DESTACADO ───────── */}
      <section
        id="producto"
        className="relative bg-zinc-950 text-white py-20 lg:py-32 overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-[#0e9acd]/20 blur-[120px] pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-baseline gap-3 mb-12 lg:mb-16">
            <span
              className="text-[11px] uppercase tracking-[0.24em] text-[#0e9acd]"
              style={mono}
            >
              04 / Producto destacado
            </span>
            <span className="h-px flex-1 bg-white/10" />
            <span
              className="text-[11px] uppercase tracking-[0.24em] text-white/50"
              style={mono}
            >
              Elysium Plus
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Video con marco editorial — cuadrado */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative aspect-square lg:aspect-[5/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <video
                  src="/videos/web/elysium-plus.mp4"
                  poster="/videos/web/elysium-plus.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Elysium Plus en funcionamiento"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute top-4 left-4 inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10"
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0e9acd] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0e9acd]" />
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.22em] text-white/90"
                    style={mono}
                  >
                    En vivo
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight font-medium"
                style={fraunces}
              >
                Pantalla de <span className="italic text-[#0e9acd]">27"</span>,
                pago integrado, software propio.
              </h2>

              <ul className="space-y-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {[
                  ['Tarjeta · efectivo · QR', 'Múltiples métodos en un solo cobro'],
                  ['PC industrial', 'Diseñado para uso continuo 24/7'],
                  ['Software TCSystems', 'Integración con tu ERP / TPV'],
                  ['Soporte directo', 'Recambios y mantenimiento desde España'],
                ].map(([title, sub]) => (
                  <li
                    key={title}
                    className="bg-zinc-950 px-5 py-4 flex items-baseline justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base font-medium tracking-tight">
                      {title}
                    </span>
                    <span className="text-xs text-white/60 text-right max-w-[55%]">
                      {sub}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/productos/elysium-plus"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm border border-white/20 hover:border-white text-white transition-colors"
                >
                  Ver ficha técnica
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#solicitar"
                  className="inline-flex items-center gap-2 bg-[#0e9acd] hover:bg-[#0c87b8] text-white px-5 py-3 rounded-full text-sm transition-colors"
                >
                  Pedir presupuesto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CASOS DE USO ───────── */}
      <section className="bg-white dark:bg-zinc-950 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-baseline gap-3 mb-12 lg:mb-16">
            <span
              className="text-[11px] uppercase tracking-[0.24em] text-[#0e9acd]"
              style={mono}
            >
              05 / Casos de uso
            </span>
            <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden">
            {[
              {
                tag: 'Centros deportivos',
                title: 'Acceso, abonos, taquilla.',
                items: ['Control de aforo', 'Renovación de cuotas', 'Reserva de pistas'],
              },
              {
                tag: 'Lavaderos',
                title: 'Cobro 24/7 sin personal.',
                items: ['Tarjeta, efectivo o app', 'Activación de programas', 'Reporting por máquina'],
              },
              {
                tag: 'Parkings',
                title: 'Entrada, salida, tarifa.',
                items: ['Lectura de matrícula', 'Pre-pago y abonados', 'Integración con barreras'],
              },
            ].map((c) => (
              <article
                key={c.tag}
                className="bg-white dark:bg-zinc-950 p-8 lg:p-10 flex flex-col gap-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors duration-300"
              >
                <div
                  className="text-[10px] uppercase tracking-[0.24em] text-[#0e9acd]"
                  style={mono}
                >
                  {c.tag}
                </div>
                <h3
                  className="text-2xl sm:text-3xl leading-tight tracking-tight font-medium text-zinc-900 dark:text-white"
                  style={fraunces60}
                >
                  {c.title}
                </h3>
                <ul className="space-y-2 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-baseline gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#0e9acd] shrink-0 translate-y-2" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FORMULARIO + CONTACTO ───────── */}
      <section
        id="solicitar"
        className="relative bg-white dark:bg-zinc-950 py-20 lg:py-32 overflow-hidden scroll-mt-20"
      >
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#0e9acd]/10 blur-3xl pointer-events-none"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Lado izquierdo: copy + alternativas */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-24">
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.24em] text-[#0e9acd] mb-6"
                style={mono}
              >
                06 / Solicita estudio
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight font-medium"
                style={fraunces}
              >
                Cuéntanos tu proyecto.{' '}
                <span className="italic text-[#0e9acd]">
                  Te respondemos hoy.
                </span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-6 leading-relaxed">
                Cuatro datos. Sin compromiso. Un especialista revisará tu caso y
                te enviará una propuesta a medida.
              </p>
            </div>

            <div className="space-y-px border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
              {[
                {
                  Icon: Clock,
                  title: 'Respuesta en 24 h',
                  sub: 'Días laborables · Sin call centers',
                },
                {
                  Icon: ShieldCheck,
                  title: 'Estudio gratuito',
                  sub: 'Análisis de tu caso, propuesta cerrada',
                },
                {
                  Icon: Wrench,
                  title: 'Llave en mano',
                  sub: 'Hardware, software, instalación y soporte',
                },
              ].map(({ Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-5 bg-white dark:bg-zinc-950"
                >
                  <Icon className="w-5 h-5 text-[#0e9acd] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium tracking-tight text-zinc-900 dark:text-white">
                      {title}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div
                className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 mb-3"
                style={mono}
              >
                ¿Prefieres directo?
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+34916216237"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm hover:border-zinc-900 dark:hover:border-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +34 916 216 237
                </a>
                <a
                  href="https://wa.me/34677614129"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-sm hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Lado derecho: form */}
          <div className="lg:col-span-7">
            <LandingForm />
          </div>
        </div>
      </section>

      {/* ───────── FOOTER MINIMAL ───────── */}
      <footer className="bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            <Image
              src="/logo.webp"
              alt="TCSystems"
              width={160}
              height={48}
              className="w-20 h-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-white/60 max-w-md leading-relaxed">
              Empresa española especializada en sistemas de cobro automático y
              kioscos de autoservicio. 14+ años, soporte directo en toda España.
            </p>
          </div>
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.24em] text-white/40 mb-3"
              style={mono}
            >
              Contacto
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="tel:+34916216237" className="hover:text-[#0e9acd]">
                  +34 916 216 237
                </a>
              </li>
              <li>
                <a href="mailto:consultoria@tcsystems.es" className="hover:text-[#0e9acd]">
                  consultoria@tcsystems.es
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.24em] text-white/40 mb-3"
              style={mono}
            >
              Legal
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/legal/privacidad" className="hover:text-[#0e9acd]">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/terminos" className="hover:text-[#0e9acd]">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-[#0e9acd]">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div
            className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-white/50"
            style={mono}
          >
            <div>© {new Date().getFullYear()} TCSystems · Hecho en España</div>
            <div>v 2026.05 · Landing kioscos autoservicio</div>
          </div>
        </div>
        {/* Spacer mobile para que el sticky CTA no tape el contenido del footer */}
        <div aria-hidden className="h-20 sm:hidden" />
      </footer>

      {/* ───────── STICKY MOBILE CTA ───────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-t border-zinc-900/10 dark:border-white/10 px-4 pt-3"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <a
          href="#solicitar"
          className="group flex items-center justify-center gap-2 w-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-5 py-3.5 rounded-full text-base font-medium hover:bg-[#0e9acd] hover:text-white transition-colors"
        >
          Solicitar estudio gratuito
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </>
  )
}
