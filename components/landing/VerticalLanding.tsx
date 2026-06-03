import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import HeroStats, { type LandingStat } from './HeroStats'
import LandingForm from './LandingForm'
import { clientLogos } from './clientLogos'
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

export interface ProblemItem {
  num: string
  title: string
  body: string
}

export interface SpecItem {
  title: string
  sub: string
}

export interface UseCase {
  tag: string
  title: string
  items: string[]
}

export interface CaseStudy {
  logo: string
  logoDark?: string
  logoAlt: string
  statement: ReactNode
  results: string[]
}

export interface LandingConfig {
  /** Texto del eyebrow del hero, p. ej. "01 / Lavanderías autoservicio" */
  eyebrow: string
  /** Etiqueta secundaria del eyebrow (derecha), p. ej. "Hechos en España" */
  eyebrowRight?: string
  /** H1 — message match con la keyword/anuncio. JSX para mezclar serif/itálica. */
  heroTitle: ReactNode
  heroSubtitle: ReactNode
  primaryCtaLabel: string
  stats: LandingStat[]
  heroImage: { src: string; alt: string; modelLabel?: string }

  /** Datos enviados al CRM/email para trazabilidad de campaña */
  productName: string
  origin: string

  /** Sección problema → solución */
  problemEyebrow: string
  problemHeading: ReactNode
  problems: ProblemItem[]

  /** Producto destacado (sección oscura) */
  product: {
    eyebrowRight: string
    heading: ReactNode
    media:
      | { type: 'image'; src: string; alt: string }
      | { type: 'video'; src: string; poster?: string; alt: string }
    specs: SpecItem[]
    fichaHref?: string
  }

  /** Caso de éxito (opcional) */
  caseStudy?: CaseStudy
  caseStudyEyebrow?: string

  /** Casos de uso / sectores (opcional) */
  useCasesEyebrow?: string
  useCases?: UseCase[]

  /** Sección formulario */
  formHeading: ReactNode
  formIntro: string

  /** JSON-LD Service para SEO */
  structuredData: object

  footerTagline: string
  versionLabel: string
}

/**
 * Plantilla de landing vertical para campañas de Google Ads.
 * Chrome propio (sin header/footer global), un único objetivo de conversión,
 * formulario en hero + repetido, sticky CTA móvil. Diseño editorial coherente
 * con /kioscos-autoservicio.
 */
export default function VerticalLanding({ config }: { config: LandingConfig }) {
  const c = config

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(c.structuredData) }}
      />

      {/* ───────── HEADER MINIMAL ───────── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-900/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Inicio TCSystems"
            className="flex items-center gap-3"
          >
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
              {c.primaryCtaLabel}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#0e9acd]/15 blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="flex items-center gap-3">
                <span
                  className="text-[11px] uppercase tracking-[0.24em] text-[#0e9acd]"
                  style={mono}
                >
                  {c.eyebrow}
                </span>
                {c.eyebrowRight && (
                  <>
                    <span className="h-px w-12 bg-zinc-300 dark:bg-zinc-700" />
                    <span
                      className="text-[11px] uppercase tracking-[0.24em] text-zinc-500"
                      style={mono}
                    >
                      {c.eyebrowRight}
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tight font-medium">
                {c.heroTitle}
              </h1>

              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                {c.heroSubtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#solicitar"
                  className="group inline-flex items-center gap-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-6 py-3.5 rounded-full text-base font-medium hover:bg-[#0e9acd] hover:text-white dark:hover:bg-[#0e9acd] dark:hover:text-white transition-all duration-200"
                >
                  {c.primaryCtaLabel}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#producto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white transition-colors"
                >
                  Ver la solución
                </a>
              </div>

              <HeroStats stats={c.stats} />
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full max-w-md lg:max-w-none mx-auto">
                <div
                  aria-hidden
                  className="absolute inset-0 -m-2 sm:-m-3 border border-zinc-200 dark:border-zinc-800 rounded-[2rem]"
                />
                <div
                  aria-hidden
                  className="absolute -inset-1 sm:-inset-2 rounded-[1.75rem] bg-gradient-to-br from-[#0e9acd]/0 via-transparent to-[#0e9acd]/20 pointer-events-none"
                />
                <Image
                  src={c.heroImage.src}
                  alt={c.heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 90vw"
                  className="object-contain"
                />
                {c.heroImage.modelLabel && (
                  <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-900/5 dark:border-white/10 rounded-2xl px-3 py-2 shadow-sm">
                    <div
                      className="text-[10px] uppercase tracking-[0.22em] text-zinc-500"
                      style={mono}
                    >
                      Modelo
                    </div>
                    <div className="text-sm font-medium text-zinc-900 dark:text-white">
                      {c.heroImage.modelLabel}
                    </div>
                  </div>
                )}
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
              Confían en nosotros
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
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="relative h-12 sm:h-14 lg:h-16 w-32 sm:w-40 lg:w-44 shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-[filter,opacity] duration-300"
                aria-hidden={i >= clientLogos.length ? 'true' : undefined}
              >
                {logo.dark ? (
                  <>
                    <Image
                      src={logo.light}
                      alt={
                        i >= clientLogos.length
                          ? ''
                          : `${logo.name} — cliente TCSystems`
                      }
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
                    alt={
                      i >= clientLogos.length
                        ? ''
                        : `${logo.name} — cliente TCSystems`
                    }
                    fill
                    className="object-contain dark:invert"
                    sizes="(min-width: 1024px) 176px, (min-width: 640px) 160px, 128px"
                  />
                )}
              </div>
            ))}
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
              {c.problemEyebrow}
            </span>
            <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-medium"
                style={fraunces}
              >
                {c.problemHeading}
              </h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden">
              {c.problems.map((item) => (
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
              Producto destacado
            </span>
            <span className="h-px flex-1 bg-white/10" />
            <span
              className="text-[11px] uppercase tracking-[0.24em] text-white/50"
              style={mono}
            >
              {c.product.eyebrowRight}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative aspect-square lg:aspect-[5/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                {c.product.media.type === 'video' ? (
                  <video
                    src={c.product.media.src}
                    poster={c.product.media.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={c.product.media.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={c.product.media.src}
                    alt={c.product.media.alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 90vw"
                    className="object-contain p-6"
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight font-medium"
                style={fraunces}
              >
                {c.product.heading}
              </h2>

              <ul className="space-y-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                {c.product.specs.map((s) => (
                  <li
                    key={s.title}
                    className="bg-zinc-950 px-5 py-4 flex items-baseline justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base font-medium tracking-tight">
                      {s.title}
                    </span>
                    <span className="text-xs text-white/60 text-right max-w-[55%]">
                      {s.sub}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {c.product.fichaHref && (
                  <Link
                    href={c.product.fichaHref}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm border border-white/20 hover:border-white text-white transition-colors"
                  >
                    Ver ficha técnica
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
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

      {/* ───────── CASO DE ÉXITO ───────── */}
      {c.caseStudy && (
        <section className="bg-white dark:bg-zinc-950 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-baseline gap-3 mb-12 lg:mb-16">
              <span
                className="text-[11px] uppercase tracking-[0.24em] text-[#0e9acd]"
                style={mono}
              >
                {c.caseStudyEyebrow ?? 'Caso de éxito'}
              </span>
              <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-10 sm:p-12 lg:p-16 flex items-center justify-center">
                  <div className="relative w-full h-32 sm:h-44 lg:h-52">
                    <Image
                      src={c.caseStudy.logo}
                      alt={c.caseStudy.logoAlt}
                      fill
                      className={`object-contain ${
                        c.caseStudy.logoDark ? 'dark:hidden' : 'dark:invert'
                      }`}
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 80vw"
                    />
                    {c.caseStudy.logoDark && (
                      <Image
                        src={c.caseStudy.logoDark}
                        alt=""
                        aria-hidden="true"
                        fill
                        className="object-contain hidden dark:block"
                        sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 80vw"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <p
                  className="text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight font-medium text-zinc-900 dark:text-white"
                  style={fraunces60}
                >
                  {c.caseStudy.statement}
                </p>
                <ul className="grid sm:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
                  {c.caseStudy.results.map((r) => (
                    <li
                      key={r}
                      className="bg-white dark:bg-zinc-950 p-5 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="block w-1.5 h-1.5 rounded-full bg-[#0e9acd] mb-3" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ───────── CASOS DE USO ───────── */}
      {c.useCases && c.useCases.length > 0 && (
        <section className="bg-zinc-50 dark:bg-zinc-900/40 border-y border-zinc-900/5 dark:border-white/5 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-baseline gap-3 mb-12 lg:mb-16">
              <span
                className="text-[11px] uppercase tracking-[0.24em] text-[#0e9acd]"
                style={mono}
              >
                {c.useCasesEyebrow ?? 'Casos de uso'}
              </span>
              <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden">
              {c.useCases.map((uc) => (
                <article
                  key={uc.tag}
                  className="bg-white dark:bg-zinc-950 p-8 lg:p-10 flex flex-col gap-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors duration-300"
                >
                  <div
                    className="text-[10px] uppercase tracking-[0.24em] text-[#0e9acd]"
                    style={mono}
                  >
                    {uc.tag}
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl leading-tight tracking-tight font-medium text-zinc-900 dark:text-white"
                    style={fraunces60}
                  >
                    {uc.title}
                  </h3>
                  <ul className="space-y-2 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    {uc.items.map((it) => (
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
      )}

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
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-24">
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.24em] text-[#0e9acd] mb-6"
                style={mono}
              >
                Solicita estudio
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight font-medium"
                style={fraunces}
              >
                {c.formHeading}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-6 leading-relaxed">
                {c.formIntro}
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

          <div className="lg:col-span-7">
            <LandingForm
              productName={c.productName}
              origin={c.origin}
              ctaLabel={c.primaryCtaLabel}
            />
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
              {c.footerTagline}
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
                <a
                  href="mailto:consultoria@tcsystems.es"
                  className="hover:text-[#0e9acd]"
                >
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
            <div>{c.versionLabel}</div>
          </div>
        </div>
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
          {c.primaryCtaLabel}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </>
  )
}
