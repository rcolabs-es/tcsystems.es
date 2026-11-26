'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import CountUp from '@/components/reactbits/CountUp/CountUp'
import ScrollReveal from '@/components/reactbits/ScrollReveal/ScrollReveal'
import { CompareBars, Delta, RankBars, fmt, fmt1 } from './Charts'
import {
  clics,
  contactos,
  embudo,
  oportunidades,
  periodo,
  plan,
  presupuestos,
  visibilidad,
  visitas,
} from '@/lib/informes/seo-sep-nov-2026'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const FunnelScene = dynamic(() => import('./FunnelScene'), { ssr: false })
const STAGES = embudo.map((e) => e.valor)

function useIsDesktop() {
  const [desk, setDesk] = useState<boolean | null>(null)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const on = () => setDesk(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return desk
}

function Logos({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`inline-flex items-center ${compact ? 'gap-3' : 'gap-5'}`}>
      <Image
        src="/informes/tcsystems.png"
        alt="TCSystems"
        width={640}
        height={410}
        className={`w-auto brightness-0 invert ${compact ? 'h-8' : 'h-12'}`}
        priority
      />
      <span className="text-[14px] text-[var(--muted)]" aria-hidden>
        ×
      </span>
      <Image src="/informes/rco.png" alt="RCO Labs" width={480} height={188} className={`w-auto brightness-0 invert ${compact ? 'h-4' : 'h-6'}`} />
    </div>
  )
}

function FunnelPanel({ active, labelRoom, className }: { active: number; labelRoom?: number; className?: string }) {
  const labelRefs = useRef<(HTMLElement | null)[]>([])
  return (
    <div className={className} aria-hidden>
      <FunnelScene stages={STAGES} active={active} labels={labelRefs} labelRoom={labelRoom} className="absolute inset-0" />
      <ol className="pointer-events-none absolute inset-0">
        {embudo.map((e, i) => (
          <li
            key={e.id}
            ref={(el) => {
              labelRefs.current[i] = el
            }}
            className="absolute left-0 top-0 will-change-transform"
          >
            <span
              className={`flex items-center gap-3 pl-2 transition-opacity duration-500 ${i === active || active < 0 || active >= embudo.length ? 'opacity-100' : 'opacity-40'}`}
            >
              <i className={`h-px w-6 max-sm:w-3 ${i === active ? 'bg-[var(--cyan-text)]' : 'bg-[var(--line-strong)]'}`} />
              <span>
                <span className="block text-[20px] font-semibold leading-tight tabular-nums tracking-[-0.02em] text-[var(--ink)] max-sm:text-[16px]">
                  {fmt(e.valor)}
                </span>
                <span className="block whitespace-nowrap text-[12.5px] text-[var(--muted)] max-sm:text-[11.5px]">{e.unidad}</span>
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Chapter({
  id,
  index,
  children,
}: {
  id: string
  index: number
  children: ReactNode
}) {
  return (
    <section id={id} data-stage={index} className="informe-chapter scroll-mt-20 border-t border-[var(--line)] py-24 lg:py-32">
      {children}
    </section>
  )
}

function StageHead({ i, statement }: { i: number; statement: string }) {
  const e = embudo[i]
  return (
    <header>
      <p className="text-[14px] font-medium text-[var(--cyan-text)]">
        Etapa {i + 1} de 4 · {e.etapa}
      </p>
      <p className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <CountUp
          to={e.valor}
          separator="."
          duration={1.6}
          easing="expo"
          className="text-[clamp(3.5rem,9vw,6rem)] font-semibold leading-none tracking-[-0.04em] text-[var(--ink)] tabular-nums"
        />
        <span className="text-[18px] text-[var(--ink-2)]">{e.unidad}</span>
      </p>
      {e.antes !== null && (
        <p className="mt-3 text-[15px] tabular-nums text-[var(--muted)]">
          Antes {fmt(e.antes)} · <Delta ahora={e.valor} antes={e.antes} />
        </p>
      )}
      <ScrollReveal
        baseOpacity={0.12}
        blurStrength={6}
        baseRotation={0}
        containerClassName="mt-10 max-w-[34rem]"
        textClassName="!text-[clamp(1.5rem,2.6vw,2.15rem)] !leading-[1.25] !font-semibold tracking-[-0.02em] text-[var(--ink)]"
        rotationEnd="bottom 70%"
        wordAnimationEnd="bottom 70%"
      >
        {statement}
      </ScrollReveal>
    </header>
  )
}

function Prose({ children }: { children: ReactNode }) {
  return <div className="mt-8 max-w-[62ch] space-y-4 text-[17px] leading-[1.65] text-[var(--ink-2)]">{children}</div>
}

const NAV = [
  ...embudo.map((e, i) => ({ id: `etapa-${i + 1}`, label: e.etapa })),
  { id: 'plan', label: 'Plan dic–feb' },
]

export default function InformeSepNov() {
  const root = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(-1)
  const desktop = useIsDesktop()
  const navRef = useRef<HTMLOListElement>(null)

  // En móvil la barra de etapas no cabe: centra la etapa activa
  useEffect(() => {
    const nav = navRef.current
    const chip = nav?.querySelector<HTMLElement>('[aria-current="step"]')
    if (!nav || !chip || nav.scrollWidth <= nav.clientWidth) return
    // offsetLeft es relativo a la lista (position: relative)
    nav.scrollTo({ left: chip.offsetLeft - nav.clientWidth / 2 + chip.offsetWidth / 2 })
  }, [active])

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>('.informe-chapter')
      sections.forEach((el) => {
        const idx = Number(el.dataset.stage)
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => {
            if (self.isActive) setActive(idx)
          },
          onLeaveBack: () => {
            if (idx === 0) setActive(-1)
          },
        })
      })

      // Las barras crecen desde su base al entrar en pantalla
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.informe-figure').forEach((fig) => {
          gsap.from(fig.querySelectorAll('.informe-bar'), {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.04,
            scrollTrigger: { trigger: fig, start: 'top 85%', once: true },
          })
        })
      })
    },
    { scope: root }
  )

  return (
    <div ref={root} className="informe-root min-h-[100svh] overflow-x-clip bg-[var(--bg)] text-[var(--ink)] antialiased selection:bg-[var(--cyan)] selection:text-white">
      {/* Barra de navegación por etapas */}
      <nav
        aria-label="Etapas del informe"
        className="sticky top-0 z-30 border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-md"
      >
        <div className="mx-auto flex h-14 max-w-[1320px] items-center gap-6 px-4 sm:px-8">
          <a href="#inicio" className="shrink-0 text-[14px] font-semibold text-[var(--ink)]">
            Informe SEO <span className="font-normal text-[var(--muted)] max-sm:hidden">· {periodo.corto}</span>
          </a>
          <ol ref={navRef} className="relative ml-auto flex min-w-0 gap-1 overflow-x-auto scroll-smooth px-1 [scrollbar-width:none]">
            {NAV.map((n, i) => {
              const on = i === active || (n.id === 'plan' && active === 4)
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    aria-current={on ? 'step' : undefined}
                    className={`block whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] transition-colors duration-200 ${
                      on ? 'bg-[var(--cyan)] text-white' : 'text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </nav>

      <div className="mx-auto grid max-w-[1320px] grid-cols-[minmax(0,1fr)] px-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-12">
        {/* Columna de lectura */}
        <main id="inicio">
          {/* ── Portada ─────────────────────────────────────── */}
          <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center py-16">
            <div className="relative">
              <Logos />
              <h1 className="mt-10 max-w-[12ch] text-[clamp(2.9rem,6.4vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-balance">
                De Google al presupuesto
              </h1>
              <p className="mt-6 max-w-[46ch] text-[18px] leading-[1.55] text-[var(--ink-2)]">
                Informe SEO de {periodo.titulo.toLowerCase()} para TCSystems: cuánta gente nos encuentra en Google,
                cuántos entran y cuántos acaban pidiendo presupuesto, {periodo.comparado}.
              </p>

              {desktop === false && <FunnelPanel active={active} labelRoom={2.4} className="relative -mx-4 mt-8 h-[min(70svh,34rem)]" />}

              <ol className="mt-12 max-w-[34rem] divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {embudo.map((e, i) => (
                  <li key={e.id}>
                    <a
                      href={`#etapa-${i + 1}`}
                      className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-3.5 transition-colors hover:text-[var(--cyan-text)]"
                      style={{ paddingLeft: `${i * 1.1}rem` }}
                    >
                      <span className="text-[15px] text-[var(--ink-2)] group-hover:text-[var(--ink)]">
                        <span className="font-semibold text-[var(--ink)]">{e.etapa}</span> · {e.unidad}
                      </span>
                      <span className="text-[26px] font-semibold tabular-nums tracking-[-0.02em]">{fmt(e.valor)}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-4 max-w-[52ch] text-[13px] leading-[1.5] text-[var(--muted)]">
                Cada etapa mide algo distinto (Search Console las dos primeras, Google Analytics las dos últimas).
                No todas las solicitudes llegan desde Google.
              </p>
            </div>
          </section>

          {/* ── 1. Nos ven ───────────────────────────────────── */}
          <Chapter id="etapa-1" index={0}>
            <StageHead i={0} statement="Google nos enseña un 63 % más y, sobre todo, más arriba: la posición media pasa del 18,9 al 13,4." />
            <Prose>
              <p>
                En el trimestre aparecimos en {fmt(visibilidad.consultasConImpresiones.ahora)} búsquedas distintas, {fmt(visibilidad.consultasNuevas)} de
                ellas nuevas. El cambio importante es de calidad: las búsquedas en las que salimos entre los tres primeros resultados
                se han duplicado con creces, de {visibilidad.franjas[0].antes} a {visibilidad.franjas[0].ahora}.
              </p>
            </Prose>
            <div className="mt-14 space-y-16">
              <CompareBars
                caption="Búsquedas según la posición en la que salimos"
                unit="búsquedas"
                rows={visibilidad.franjas.map((f) => ({ label: f.franja, ahora: f.ahora, antes: f.antes }))}
              />
              <CompareBars
                caption="Apariciones en Google por sector"
                unit="apariciones"
                rows={visibilidad.sectores.map((s) => ({ label: s.sector, ahora: s.ahora, antes: s.antes }))}
              />
            </div>
            <Prose>
              <p>
                <strong className="text-[var(--ink)]">Lavanderías se multiplica por 11</strong> y ya es el sector en el que más nos ve Google.
                Gasolineras se cuadruplica. Parkings es el único que baja en apariciones, aunque su página sube de la
                posición 33 a la 23.
              </p>
            </Prose>
          </Chapter>

          {/* ── 2. Nos eligen ────────────────────────────────── */}
          <Chapter id="etapa-2" index={1}>
            <StageHead i={1} statement="Casi el doble de personas hace clic en TCSystems. El móvil, casi el triple." />
            <Prose>
              <p>
                De cada 100 veces que aparecemos, {fmt1(clics.ctr.ahora)} acaban en clic (antes {fmt1(clics.ctr.antes)}). Desde España, los clics
                pasan de {clics.espana.antes} a {clics.espana.ahora} y la posición media mejora del {fmt1(clics.espana.posAntes)} al {fmt1(clics.espana.posAhora)}.
              </p>
            </Prose>
            <div className="mt-14 space-y-16">
              <CompareBars
                caption="Clics desde Google por dispositivo"
                unit="clics"
                rows={clics.dispositivos.slice(0, 2).map((d) => ({ label: d.dispositivo, ahora: d.ahora, antes: d.antes }))}
              />
              <figure>
                <figcaption className="text-[15px] font-semibold text-[var(--ink)]">Páginas que más clics reciben desde Google</figcaption>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[34rem] border-collapse text-left text-[14px]">
                    <thead>
                      <tr className="border-b border-[var(--line)] text-[12.5px] text-[var(--muted)]">
                        <th className="py-2.5 pr-4 font-medium">Página</th>
                        <th className="py-2.5 pr-4 text-right font-medium">Clics</th>
                        <th className="py-2.5 pr-4 text-right font-medium">Cambio</th>
                        <th className="py-2.5 text-right font-medium">Posición</th>
                      </tr>
                    </thead>
                    <tbody className="tabular-nums">
                      {clics.paginas.map((p) => (
                        <tr key={p.ruta} className="border-b border-[var(--line)] transition-colors hover:bg-[var(--surface)]">
                          <td className="py-3 pr-4 text-[var(--ink)]">
                            {p.nombre}
                            <span className="block max-w-[28ch] truncate text-[12px] text-[var(--muted)]">{p.ruta}</span>
                          </td>
                          <td className="py-3 pr-4 text-right font-semibold">
                            <span className="font-normal text-[var(--muted)]">{p.antes} →</span> {p.ahora}
                          </td>
                          <td className="py-3 pr-4 text-right text-[13px]">
                            <Delta ahora={p.ahora} antes={p.antes} />
                          </td>
                          <td className="py-3 text-right text-[var(--ink-2)]">
                            {fmt1(p.posAntes)} → <span className="text-[var(--ink)]">{fmt1(p.posAhora)}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </figure>
            </div>
            <Prose>
              <p>
                La landing de <strong className="text-[var(--ink)]">lavanderías pasa de 3 a 45 clics</strong> y el artículo sobre su rentabilidad, de
                11 a 52. La marca también crece: «tcsystems» sube de 40 a 52 clics y aparece una búsqueda nueva, «tcobro», con 8.
              </p>
            </Prose>
          </Chapter>

          {/* ── 3. Recorren la web ───────────────────────────── */}
          <Chapter id="etapa-3" index={2}>
            <StageHead i={2} statement="Los buscadores ya traen casi la mitad de las visitas, y los asistentes de IA empiezan a mandar clientes." />
            <Prose>
              <p>
                Entre septiembre y el 26 de noviembre la web recibió {fmt(visitas.sesiones)} visitas de {fmt(visitas.usuariosNuevos)} usuarios nuevos.
                Los buscadores aportaron {fmt(visitas.canales[1].sesiones)}. Los asistentes de IA, como ChatGPT o Perplexity, trajeron {visitas.canales[2].sesiones}:
                es el canal que se empezó a trabajar en julio con la optimización para IA de nueve landings.
              </p>
            </Prose>
            <div className="mt-14 space-y-16">
              <RankBars
                caption="Visitas por canal de entrada"
                unit="visitas"
                highlight="Buscadores (orgánico)"
                rows={visitas.canales.map((c) => ({ label: c.canal, value: c.sesiones }))}
              />
              <RankBars
                caption="Páginas más vistas"
                unit="vistas"
                rows={visitas.paginasVistas.map((p) => ({ label: p.pagina, value: p.vistas }))}
              />
            </div>
            <Prose>
              <p>
                Después de la portada, lo más visto es Contacto, el kiosco EVO y Quiénes somos: quien llega tiende a ir directo a producto y a
                contacto. Los dos contenidos de lavandería suman {83 + 76} vistas.
              </p>
            </Prose>
          </Chapter>

          {/* ── 4. Nos piden presupuesto ─────────────────────── */}
          <Chapter id="etapa-4" index={3}>
            <StageHead i={3} statement="21 solicitudes de presupuesto: casi 8 de cada 10 personas que empiezan el formulario lo terminan." />
            <Prose>
              <p>
                {presupuestos.formulariosEmpezados} personas empezaron a rellenar un formulario y {presupuestos.solicitudes} lo enviaron. Es una tasa
                de finalización del {presupuestos.tasaFinalizacion} %: el formulario no frena, el reto está en llevar más gente hasta él.
              </p>
              <p>
                Ayuda que la página de Contacto ahora aparezca en la posición {fmt1(presupuestos.contactoPosicion.ahora)} cuando alguien busca la
                empresa (antes, {fmt1(presupuestos.contactoPosicion.antes)}).
              </p>
            </Prose>
            <div className="mt-14 grid max-w-[40rem] grid-cols-[auto_minmax(0,1fr)] items-center gap-x-6 gap-y-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8">
              <span className="text-[44px] font-semibold leading-none tabular-nums tracking-[-0.03em]">{presupuestos.formulariosEmpezados}</span>
              <span className="text-[15px] text-[var(--ink-2)]">empiezan un formulario</span>
              <span className="col-span-2 h-[11px] overflow-hidden rounded-full bg-[var(--prev)]">
                <span className="informe-bar block h-full rounded-full bg-[var(--cyan)]" style={{ width: `${presupuestos.tasaFinalizacion}%` }} />
              </span>
              <span className="text-[44px] font-semibold leading-none tabular-nums tracking-[-0.03em] text-[var(--cyan-text)]">{presupuestos.solicitudes}</span>
              <span className="text-[15px] text-[var(--ink-2)]">envían la solicitud ({presupuestos.tasaFinalizacion} %)</span>
            </div>

            <h3 className="mt-20 max-w-[30ch] text-[clamp(1.4rem,2.2vw,1.75rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
              Detrás de esas 21 solicitudes hay {contactos.formularios.empresas} empresas distintas, y un tercio son lavanderías.
            </h3>
            <Prose>
              <p>
                Al revisar el panel de contactos, {contactos.formularios.proveedores} de los formularios eran agencias y medios ofreciendo sus
                servicios, y {contactos.formularios.repetidos} empresas escribieron dos veces. {contactos.formularios.viaLandingAds} de las empresas
                llegaron por la landing de lavanderías de Google Ads; el resto, por la propia web.
              </p>
            </Prose>
            <div className="mt-12 space-y-16">
              <RankBars
                caption="Empresas que pidieron presupuesto, por sector"
                unit="empresas"
                highlight="Lavanderías"
                rows={contactos.formularios.sectores.map((s) => ({ label: s.sector, value: s.empresas }))}
              />
            </div>

            <h3 className="mt-20 max-w-[30ch] text-[clamp(1.4rem,2.2vw,1.75rem)] font-semibold leading-[1.25] tracking-[-0.02em]">
              Además, {contactos.whatsapp + contactos.llamadas} personas pulsaron para hablar con nosotros al momento.
            </h3>
            <div className="mt-8 grid max-w-[40rem] grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)]">
              <div className="bg-[var(--surface)] p-6 sm:p-8">
                <span className="block text-[44px] font-semibold leading-none tabular-nums tracking-[-0.03em]">{contactos.whatsapp}</span>
                <span className="mt-2 block text-[15px] text-[var(--ink-2)]">clics en WhatsApp</span>
              </div>
              <div className="bg-[var(--surface)] p-6 sm:p-8">
                <span className="block text-[44px] font-semibold leading-none tabular-nums tracking-[-0.03em]">{contactos.llamadas}</span>
                <span className="mt-2 block text-[15px] text-[var(--ink-2)]">clics en llamar</span>
              </div>
            </div>
            <div className="mt-14">
              <RankBars
                caption="De dónde venían (octubre y noviembre, 12 clics)"
                unit="clics"
                highlight="Buscadores (Google, Ecosia)"
                rows={contactos.origenClics.map((o) => ({ label: o.origen, value: o.clics }))}
              />
            </div>
            <Prose>
              <p>
                Desde octubre el panel guarda de dónde viene cada clic: la mitad llega desde buscadores, sobre todo desde la portada y la página
                de lavanderías. ChatGPT ya aparece como origen de un contacto.
              </p>
            </Prose>
          </Chapter>

          {/* ── Plan ─────────────────────────────────────────── */}
          <section id="plan" data-stage={4} className="informe-chapter scroll-mt-20 border-t border-[var(--line)] py-24 lg:py-32">
            <p className="text-[14px] font-medium text-[var(--cyan-text)]">Diciembre – febrero</p>
            <h2 className="mt-4 max-w-[18ch] text-[clamp(2.2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Dónde se nos escapan clientes y cómo lo vamos a tapar
            </h2>
            <ol className="mt-14 space-y-0 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {plan.map((p, i) => (
                <li key={p.titulo} className="grid gap-x-8 gap-y-3 py-8 sm:grid-cols-[3rem_minmax(0,1fr)]">
                  <span className="text-[15px] font-semibold tabular-nums text-[var(--cyan-text)]">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-[21px] font-semibold leading-snug tracking-[-0.01em]">{p.titulo}</h3>
                    <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.6] text-[var(--ink-2)]">{p.porque}</p>
                    <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.6] text-[var(--ink)]">
                      <span className="font-semibold text-[var(--cyan-text)]">Acción: </span>
                      {p.accion}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <figure className="mt-20">
              <figcaption className="text-[15px] font-semibold text-[var(--ink)]">Búsquedas a un paso de la primera página</figcaption>
              <p className="mt-2 max-w-[60ch] text-[14px] text-[var(--muted)]">
                Ya salimos en ellas, pero sin clics o con muy pocos. Son las más baratas de ganar.
              </p>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[30rem] border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-[var(--line)] text-[12.5px] text-[var(--muted)]">
                      <th className="py-2.5 pr-4 font-medium">Búsqueda</th>
                      <th className="py-2.5 pr-4 text-right font-medium">Apariciones</th>
                      <th className="py-2.5 pr-4 text-right font-medium">Posición</th>
                      <th className="py-2.5 text-right font-medium">Clics</th>
                    </tr>
                  </thead>
                  <tbody className="tabular-nums">
                    {oportunidades.map((o) => (
                      <tr key={o.consulta} className="border-b border-[var(--line)] transition-colors hover:bg-[var(--surface)]">
                        <td className="py-3 pr-4 text-[var(--ink)]">{o.consulta}</td>
                        <td className="py-3 pr-4 text-right">{fmt(o.impresiones)}</td>
                        <td className="py-3 pr-4 text-right">{fmt1(o.posicion)}</td>
                        <td className="py-3 text-right text-[var(--muted)]">{o.clics}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </figure>
          </section>

          {/* ── Cierre ───────────────────────────────────────── */}
          <footer className="border-t border-[var(--line)] pb-20 pt-14">
            <Logos compact />
            <p className="mt-8 max-w-[62ch] text-[13.5px] leading-[1.6] text-[var(--muted)]">
              Fuentes: Google Search Console (búsqueda web, últimos 3 meses frente a los 3 anteriores, exportado el 26/11/2026) y Google Analytics 4
              (01/09/2026 – 26/11/2026). Las cifras por sector suman solo las búsquedas que Google muestra; las búsquedas anónimas no se
              pueden asignar. Preparado por RCO Labs para TCSystems el {periodo.emitido}.
            </p>
            <a
              href="/informes/informe-seo-sep-nov-2026.pdf"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 text-[14px] font-medium text-[var(--ink)] transition-[background-color,transform] duration-150 hover:bg-[var(--surface-2)] active:scale-[0.97]"
            >
              Descargar en PDF (A4)
            </a>
          </footer>
        </main>

        {/* Columna del embudo 3D (escritorio) */}
        <aside className="relative hidden lg:block" aria-hidden>
          <div className="sticky top-14 h-[calc(100svh-3.5rem)]">
            {/* El lienzo se extiende hasta el borde derecho de la ventana para que el embudo respire */}
            {desktop && (
              <FunnelPanel
                active={active}
                labelRoom={2.2}
                className="absolute inset-y-0 left-0 right-[calc(-1*max(2rem,(100vw-1320px)/2+2rem))]"
              />
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
