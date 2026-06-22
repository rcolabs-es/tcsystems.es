import VerticalLanding, {
  type LandingConfig,
} from '@/components/landing/VerticalLanding'

const fraunces = {
  fontFamily: 'var(--font-fraunces), Georgia, serif',
  fontVariationSettings: '"opsz" 96, "SOFT" 50',
} as const

const config: LandingConfig = {
  eyebrow: 'Gasolineras y túnel de lavado',
  eyebrowRight: 'Hecho en España',
  heroTitle: (
    <>
      <span className="block">Cobro</span>
      <span className="block">
        <span style={fraunces} className="italic font-normal text-[#0e9acd]">
          automático
        </span>
      </span>
      <span className="block">24/7 en tu estación.</span>
    </>
  ),
  heroSubtitle: (
    <>
      Tu gasolinera y tu túnel de lavado cobran solos, a toda hora. Efectivo,
      tarjeta y devolución de cambio, con la velocidad que exige el alto
      tráfico.{' '}
      <strong className="text-zinc-900 dark:text-white">Como en Ballenoil.</strong>
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
    alt: 'Terminal de cobro automático Elysium Plus para gasolineras',
    modelLabel: 'Terminal · Elysium Plus',
  },
  productName: 'Gasolineras y Túnel de Lavado',
  origin: 'Landing Gasolineras (Google Ads)',

  problemEyebrow: 'Por qué automatizar',
  problemHeading: (
    <>
      Cada cola
      <br />
      <span className="italic text-[#0e9acd]">es una venta perdida</span>
    </>
  ),
  problems: [
    {
      num: '01',
      title: 'Picos sin personal',
      body: 'Atiende repostajes y lavados 24/7 sin caja atendida. Absorbe las horas punta y los turnos de noche sin colas.',
    },
    {
      num: '02',
      title: 'Efectivo descontrolado',
      body: 'Admisión y devolución de billetes y monedas con trazabilidad total. Cada operación queda registrada y conciliada.',
    },
    {
      num: '03',
      title: 'Cobro lento en hora punta',
      body: 'Pantalla de 27" y cobro ágil por tarjeta, contactless o efectivo con devolución de cambio, para no frenar el tráfico de tu estación.',
    },
  ],

  product: {
    eyebrowRight: 'Elysium Plus',
    heading: (
      <>
        Elysium Plus: efectivo y tarjeta,{' '}
        <span className="italic text-[#0e9acd]">con devolución de cambio.</span>
      </>
    ),
    media: {
      type: 'video',
      src: '/videos/web/elysium-plus.mp4',
      poster: '/videos/web/elysium-plus.jpg',
      alt: 'Terminal de cobro automático Elysium Plus en funcionamiento',
    },
    specs: [
      { title: 'Tarjeta · contactless · efectivo', sub: 'Cobra como pague tu cliente' },
      { title: 'Devolución de cambio', sub: 'Admite y devuelve billetes y monedas' },
      { title: 'Pantalla 27" · uso 24/7', sub: 'Operación ágil incluso en hora punta' },
      { title: 'Fabricación propia', sub: 'Soporte y recambios desde España' },
    ],
    fichaHref: '/productos/elysium-plus',
  },

  caseStudy: {
    logo: '/logosClientes/ballenoil_logo.webp',
    logoDark: '/logosClientes/ballenoil_logo_blanco.webp',
    logoAlt: 'Ballenoil — cliente de TCSystems',
    statement: (
      <>
        Redes de estaciones como{' '}
        <span className="text-[#0e9acd]">Ballenoil</span> confían en TCSystems
        para automatizar el cobro de su servicio: 24/7, sin colas y con control
        total del efectivo.
      </>
    ),
    results: [
      'Cobro desatendido a toda hora',
      'Control y trazabilidad del efectivo',
      'Soporte y recambios desde España',
    ],
  },
  caseStudyEyebrow: 'Caso de éxito',

  formHeading: (
    <>
      Cuéntanos tu estación.{' '}
      <span className="italic text-[#0e9acd]">Te respondemos hoy.</span>
    </>
  ),
  formIntro:
    'Cuatro datos. Sin compromiso. Un especialista estudia tu estación o túnel de lavado y te envía una propuesta a medida.',

  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cobro automático para gasolineras y túneles de lavado',
    provider: {
      '@type': 'Organization',
      name: 'TCSystems',
      url: 'https://www.tcsystems.es',
      logo: 'https://www.tcsystems.es/logo.webp',
    },
    areaServed: { '@type': 'Country', name: 'España' },
    description:
      'Fabricación e instalación de terminales de cobro automático para gasolineras y túneles de lavado: efectivo, tarjeta y devolución de cambio a alta velocidad, 24/7. 14+ años, 500+ instalaciones.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
  },

  footerTagline:
    'Empresa española especializada en cobro automático para gasolineras, túneles de lavado y lavaderos. 14+ años, soporte directo en toda España.',
  versionLabel: 'v 2026.06 · Landing gasolineras',
}

export default function GasolinerasLanding() {
  return <VerticalLanding config={config} />
}
