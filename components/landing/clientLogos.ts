export type ClientLogo = { name: string; light: string; dark?: string }

/** Logos de clientes reales (en /public/logosClientes) usados en el marquee. */
export const clientLogos: ClientLogo[] = [
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
