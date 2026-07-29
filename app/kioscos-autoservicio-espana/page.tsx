import VerticalLanding, {
  type LandingConfig,
} from '@/components/landing/VerticalLanding'

const fraunces = {
  fontFamily: 'var(--font-fraunces), Georgia, serif',
  fontVariationSettings: '"opsz" 96, "SOFT" 50',
} as const

const config: LandingConfig = {
  eyebrow: 'Fabricante nacional',
  eyebrowRight: 'Hecho en España',
  heroTitle: (
    <>
      <span className="block">Kioscos de autoservicio,</span>
      <span className="block">
        <span style={fraunces} className="italic font-normal text-[#0e9acd]">
          fabricados en España.
        </span>
      </span>
    </>
  ),
  heroSubtitle: (
    <>
      Diseñamos, fabricamos e instalamos nuestros kioscos. Soporte directo y
      recambios sin intermediarios —{' '}
      <strong className="text-zinc-900 dark:text-white">
        no somos un revendedor.
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
    alt: 'Kiosco de autoservicio Elysium Plus fabricado en España',
    modelLabel: 'Elysium Plus · 27"',
  },
  productName: 'Kioscos Autoservicio España',
  origin: 'Landing Fabricante Kioscos España (Google Ads)',

  problemEyebrow: 'Fabricante vs revendedor',
  problemHeading: (
    <>
      Compra a quien
      <br />
      <span className="italic text-[#0e9acd]">lo fabrica</span>
    </>
  ),
  problems: [
    {
      num: '01',
      title: 'Soporte que responde',
      body: 'SAT propio en España. Recambios y mantenimiento bajo el mismo techo, no a través de terceros ni esperas a importación.',
    },
    {
      num: '02',
      title: 'Hardware a medida',
      body: 'No es una talla única importada. Adaptamos el kiosco y el software a tu sector y a tu operación.',
    },
    {
      num: '03',
      title: '14 años de recorrido',
      body: 'Ayuntamientos, gasolineras, lavanderías, centros deportivos y retail ya confían en nuestros equipos.',
    },
  ],

  product: {
    eyebrowRight: 'Gama TCSystems',
    heading: (
      <>
        Una gama propia para{' '}
        <span className="italic text-[#0e9acd]">cada tipo de cobro.</span>
      </>
    ),
    media: {
      type: 'video',
      src: '/videos/web/elysium-plus.mp4',
      poster: '/videos/web/elysium-plus.jpg',
      alt: 'Kiosco de autoservicio Elysium Plus en funcionamiento',
    },
    specs: [
      { title: 'Elysium Plus · 27"', sub: 'Tarjeta, efectivo y QR, software propio' },
      { title: 'EVO', sub: 'Kiosco completo de autoservicio' },
      { title: 'Prometheus', sub: 'Alta velocidad con efectivo' },
      { title: 'Software TCSystems', sub: 'Integración con tu ERP / TPV' },
    ],
    fichaHref: '/',
  },

  useCasesEyebrow: 'Sectores',
  useCases: [
    {
      tag: 'Parking · Lavanderías',
      title: 'Cobro desatendido 24/7.',
      items: ['Tarjeta, efectivo o app', 'Control de máquinas', 'Reporting en tiempo real'],
    },
    {
      tag: 'Gasolineras · Retail',
      title: 'Velocidad en alto tráfico.',
      items: ['Expendedor de billetes', 'Devolución de cambio', 'Antivandálico'],
    },
    {
      tag: 'Deportivos · Admin. pública',
      title: 'Acceso y trámite.',
      items: ['Control de accesos', 'Cobro de cuotas y tasas', 'Identificación de usuario'],
    },
  ],

  faqEyebrow: 'Preguntas frecuentes',
  faqHeading: (
    <>
      Lo que se pregunta{' '}
      <span className="italic text-[#0e9acd]">antes de comprar.</span>
    </>
  ),
  faqs: [
    {
      question: '¿Quién fabrica los kioscos de autoservicio de TCSystems?',
      answer:
        'Los fabrica TCSystems. Es una empresa española, con sede en Griñón (Madrid) y 5 delegaciones, que diseña, fabrica, instala y da soporte a sus propios kioscos. No es un revendedor de equipos importados: el hardware, el software y el SAT son propios.',
    },
    {
      question: '¿Qué ventaja tiene comprar a un fabricante español y no a un revendedor?',
      answer:
        'El soporte y los recambios salen del mismo fabricante, sin intermediarios ni esperas de importación, y el kiosco puede adaptarse al sector y a la operación concreta del cliente en lugar de ser una talla única. TCSystems acumula más de 14 años y más de 500 instalaciones en España.',
    },
    {
      question: '¿Qué modelos de kiosco fabrica TCSystems y en qué se diferencian?',
      answer:
        'La gama tiene tres líneas: Elysium Plus, kiosco de 27 pulgadas con tarjeta, efectivo y QR; EVO, kiosco completo de autoservicio con admisión de monedas, billetes y tarjetas; y Prometheus, terminal de alta velocidad con expendedor de billetes, pensado para alto tráfico.',
    },
    {
      question: '¿En qué sectores se instalan estos kioscos?',
      answer:
        'Se instalan en gasolineras y túneles de lavado, lavanderías de autoservicio, parkings, retail, centros deportivos y administración pública, tanto para cobro desatendido 24/7 como para control de accesos y cobro de cuotas y tasas.',
    },
    {
      question: '¿El kiosco se integra con el ERP o el TPV que ya usamos?',
      answer:
        'Sí. El software es propio de TCSystems, lo que permite integrarlo con el ERP o el TPV existente y adaptar la operativa al flujo de trabajo de cada negocio.',
    },
    {
      question: '¿Cuánto tarda la instalación y qué garantía tienen los equipos?',
      answer:
        'La instalación típica se completa en 1-2 días laborables, con configuración y formación básica incluidas. Los equipos incluyen 1 año de garantía completa sobre hardware, software y mano de obra, ampliable a 3 años con los planes de mantenimiento premium.',
    },
  ],

  formHeading: (
    <>
      Cuéntanos tu proyecto.{' '}
      <span className="italic text-[#0e9acd]">Te respondemos hoy.</span>
    </>
  ),
  formIntro:
    'Cuatro datos. Sin compromiso. Un especialista estudia tu caso y te envía una propuesta a medida, fabricada en España.',

  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fabricante español de kioscos de autoservicio',
    provider: {
      '@type': 'Organization',
      name: 'TCSystems',
      url: 'https://www.tcsystems.es',
      logo: 'https://www.tcsystems.es/logo.webp',
    },
    areaServed: { '@type': 'Country', name: 'España' },
    description:
      'Diseño, fabricación e instalación de kioscos de autoservicio y sistemas de cobro automático en España. SAT y recambios propios. 14+ años, 500+ instalaciones, 5 delegaciones.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
  },

  footerTagline:
    'Fabricante español de kioscos de autoservicio y sistemas de cobro automático. Diseño, fabricación, instalación y SAT propios. 14+ años en toda España.',
  versionLabel: 'v 2026.06 · Landing fabricante kioscos',
}

export default function KioscosEspanaLanding() {
  return <VerticalLanding config={config} />
}
