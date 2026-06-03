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
