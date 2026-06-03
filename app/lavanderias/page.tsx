import VerticalLanding, {
  type LandingConfig,
} from '@/components/landing/VerticalLanding'

const fraunces = {
  fontFamily: 'var(--font-fraunces), Georgia, serif',
  fontVariationSettings: '"opsz" 96, "SOFT" 50',
} as const

const config: LandingConfig = {
  eyebrow: 'Lavanderías autoservicio',
  eyebrowRight: 'Hecho en España',
  heroTitle: (
    <>
      <span className="block">La</span>
      <span className="block">
        <span style={fraunces} className="italic font-normal text-[#0e9acd]">
          central de pago
        </span>
      </span>
      <span className="block">de tu lavandería.</span>
    </>
  ),
  heroSubtitle: (
    <>
      Una sola máquina cobra, activa los programas y te da el control de toda la
      lavandería. Tarjeta, contactless y efectivo —{' '}
      <strong className="text-zinc-900 dark:text-white">
        24/7, sin personal.
      </strong>
    </>
  ),
  primaryCtaLabel: 'Solicitar mi estudio gratuito',
  stats: [
    { end: 14, suffix: '+', label: 'años' },
    { end: 500, suffix: '+', label: 'instalaciones' },
    { end: 5, label: 'delegaciones' },
  ],
  heroImage: {
    src: '/elysium-plus.png',
    alt: 'Central de pago para lavandería de autoservicio',
    modelLabel: 'Central de pago · Elysium Plus',
  },
  productName: 'Lavanderías Autoservicio',
  origin: 'Landing Lavanderías (Google Ads)',

  problemEyebrow: 'Por qué una central',
  problemHeading: (
    <>
      El monedero tradicional
      <br />
      <span className="italic text-[#0e9acd]">te cuesta dinero</span>
    </>
  ),
  problems: [
    {
      num: '01',
      title: 'Recaudación manual',
      body: 'Vaciar monederos máquina por máquina, descuadres y caja sin trazabilidad. La central centraliza el cobro y concilia sola.',
    },
    {
      num: '02',
      title: 'Solo monedas',
      body: 'Pierdes al cliente que no lleva efectivo. Con tarjeta, contactless y app cobras siempre, también de madrugada.',
    },
    {
      num: '03',
      title: 'Sin control remoto',
      body: 'No sabes qué máquina factura ni cuándo falla. Reporting en tiempo real y activación de programas desde la central.',
    },
  ],

  product: {
    eyebrowRight: 'Elysium Plus',
    heading: (
      <>
        Una central. Tarjeta, efectivo y app.{' '}
        <span className="italic text-[#0e9acd]">Tus máquinas, bajo control.</span>
      </>
    ),
    media: {
      type: 'video',
      src: '/videos/web/elysium-plus.mp4',
      poster: '/videos/web/elysium-plus.jpg',
      alt: 'Central de pago Elysium Plus en funcionamiento',
    },
    specs: [
      { title: 'Tarjeta · contactless · efectivo', sub: 'Cobra como tu cliente quiera pagar' },
      { title: 'Activa los programas', sub: 'Controla cada lavadora y secadora' },
      { title: 'Reporting 24/7', sub: 'Facturación por máquina, en tiempo real' },
      { title: 'Fabricación propia', sub: 'Soporte y recambios desde España' },
    ],
    fichaHref: '/productos/elysium-plus',
  },

  caseStudy: {
    logo: '/twash.webp',
    logoAlt: 'T-Wash — lavandería de autoservicio cliente de TCSystems',
    statement: (
      <>
        Lavanderías como{' '}
        <span className="text-[#0e9acd]">T-Wash</span> automatizan su cobro con
        TCSystems: una central por local, cero efectivo descuadrado y control
        de todas las máquinas a distancia.
      </>
    ),
    results: [
      'Cobro 24/7 sin personal en sala',
      'Conciliación automática, fin del descuadre',
      'Activación y control remoto de máquinas',
    ],
  },
  caseStudyEyebrow: 'Caso de éxito',

  formHeading: (
    <>
      Cuéntanos tu lavandería.{' '}
      <span className="italic text-[#0e9acd]">Te respondemos hoy.</span>
    </>
  ),
  formIntro:
    'Cuatro datos. Sin compromiso. Un especialista estudia tu local (nº de máquinas, ubicación) y te envía una propuesta cerrada.',

  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Central de pago para lavandería de autoservicio',
    provider: {
      '@type': 'Organization',
      name: 'TCSystems',
      url: 'https://www.tcsystems.es',
      logo: 'https://www.tcsystems.es/logo.webp',
    },
    areaServed: { '@type': 'Country', name: 'España' },
    description:
      'Diseño, fabricación e instalación de centrales de pago para lavanderías de autoservicio: tarjeta, contactless y efectivo, control de máquinas y reporting 24/7. 14+ años, 500+ instalaciones.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
  },

  footerTagline:
    'Empresa española especializada en centrales de pago y cobro automático para lavanderías de autoservicio. 14+ años, soporte directo en toda España.',
  versionLabel: 'v 2026.06 · Landing lavanderías',
}

export default function LavanderiasLanding() {
  return <VerticalLanding config={config} />
}
