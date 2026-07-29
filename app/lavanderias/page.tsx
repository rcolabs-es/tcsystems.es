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

  faqEyebrow: 'Preguntas frecuentes',
  faqHeading: (
    <>
      Lo que nos preguntan{' '}
      <span className="italic text-[#0e9acd]">las lavanderías.</span>
    </>
  ),
  faqs: [
    {
      question: '¿Qué es una central de pago para una lavandería de autoservicio?',
      answer:
        'Una central de pago es un único terminal que centraliza el cobro de todas las lavadoras y secadoras del local: el cliente paga en la central y esta activa el programa de la máquina elegida. Sustituye a los monederos individuales de cada máquina, de modo que no hay que vaciar monedero por monedero ni cuadrar cajas por separado.',
    },
    {
      question: '¿Qué formas de pago acepta la central Elysium Plus?',
      answer:
        'Acepta tarjeta de débito y crédito, contactless, app y efectivo (monedas y billetes). Aceptar tarjeta permite cobrar al cliente que no lleva efectivo, también de madrugada, cuando la lavandería opera sin personal.',
    },
    {
      question: '¿Puedo saber cuánto factura cada máquina sin ir al local?',
      answer:
        'Sí. La central ofrece reporting 24/7 con la facturación por máquina en tiempo real, y permite activar y controlar cada lavadora y secadora en remoto. Así se detecta qué máquina factura menos o está fallando sin desplazarse.',
    },
    {
      question: '¿Funciona la lavandería sin personal las 24 horas?',
      answer:
        'Sí. La central gestiona el cobro y la activación de programas de forma desatendida 24/7. Lavanderías de autoservicio como T-Wash operan así con TCSystems: cobro sin personal en sala y conciliación automática del efectivo.',
    },
    {
      question: '¿Qué pasa si la central se queda sin conexión?',
      answer:
        'Sigue funcionando en modo offline, almacenando las transacciones localmente hasta que se restablece la conexión, momento en el que se sincronizan automáticamente. El local no deja de cobrar por una caída de red.',
    },
    {
      question: '¿Cuánto tarda la instalación y qué soporte hay después?',
      answer:
        'La instalación típica se completa en 1-2 días laborables, incluyendo configuración y formación básica. TCSystems fabrica en España, con soporte técnico 24/7 y recambios desde sus 5 delegaciones, y acumula más de 14 años y más de 500 instalaciones.',
    },
  ],

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
