// Datos del informe SEO trimestral sep–nov 2026 de TCSystems.
// Fuentes:
//  - Search Console, export "Performance on Search" del 26/11/2026
//    (últimos 3 meses frente a los 3 meses anteriores, búsqueda web).
//  - GA4, "Informe panorámico" 01/09/2026 – 26/11/2026.
// Cifras copiadas tal cual de los exports; no recalcular a mano.

export const periodo = {
  titulo: 'Septiembre – noviembre 2026',
  corto: 'sep–nov 2026',
  comparado: 'frente a los tres meses anteriores (jun–ago)',
  emitido: '26 de noviembre de 2026',
}

/** Embudo principal: cada etapa mide algo distinto, de más a menos. */
export const embudo = [
  {
    id: 'ven',
    etapa: 'Nos ven',
    valor: 13457,
    antes: 8244,
    unidad: 'apariciones en Google',
    fuente: 'Search Console',
  },
  {
    id: 'eligen',
    etapa: 'Nos eligen',
    valor: 335,
    antes: 181,
    unidad: 'clics desde Google',
    fuente: 'Search Console',
  },
  {
    id: 'recorren',
    etapa: 'Recorren la web',
    valor: 27,
    antes: null,
    unidad: 'empiezan un formulario',
    fuente: 'GA4',
  },
  {
    id: 'piden',
    etapa: 'Nos piden presupuesto',
    valor: 21,
    antes: null,
    unidad: 'solicitudes enviadas',
    fuente: 'GA4',
  },
] as const

export const visibilidad = {
  impresiones: { ahora: 13457, antes: 8244 },
  posicionMedia: { ahora: 13.4, antes: 18.9 },
  consultasConImpresiones: { ahora: 511, antes: 446 },
  consultasNuevas: 306,
  // Consultas por franja de posición media (nº de búsquedas distintas)
  franjas: [
    { franja: 'Top 3', ahora: 63, antes: 29 },
    { franja: 'Posición 4–10', ahora: 105, antes: 65 },
    { franja: 'Página 2 (11–20)', ahora: 80, antes: 56 },
    { franja: 'Más allá del 20', ahora: 263, antes: 296 },
  ],
  // Impresiones de consultas agrupadas por sector (solo consultas no anónimas)
  sectores: [
    { sector: 'Lavanderías', ahora: 1162, antes: 102 },
    { sector: 'Kioscos (genérico)', ahora: 573, antes: 540 },
    { sector: 'Gasolineras y lavado', ahora: 440, antes: 109 },
    { sector: 'Hostelería y restaurantes', ahora: 415, antes: 343 },
    { sector: 'Integración y TPV', ahora: 400, antes: 237 },
    { sector: 'Marca TCSystems', ahora: 323, antes: 282 },
    { sector: 'Parkings', ahora: 229, antes: 403 },
    { sector: 'Control de accesos', ahora: 211, antes: 183 },
  ],
}

export const clics = {
  total: { ahora: 335, antes: 181 },
  ctr: { ahora: 2.5, antes: 2.2 },
  dispositivos: [
    { dispositivo: 'Ordenador', ahora: 182, antes: 123 },
    { dispositivo: 'Móvil', ahora: 152, antes: 58 },
    { dispositivo: 'Tablet', ahora: 1, antes: 0 },
  ],
  espana: { ahora: 290, antes: 150, posAhora: 14.6, posAntes: 23.4 },
  // Páginas que más clics reciben desde Google
  paginas: [
    { ruta: '/', nombre: 'Inicio', ahora: 162, antes: 138, posAhora: 22.0, posAntes: 25.2 },
    { ruta: '/blog/franquicia-lavanderia-autoservicio-rentable-analisis-2026', nombre: 'Blog · ¿Es rentable una lavandería autoservicio?', ahora: 52, antes: 11, posAhora: 7.9, posAntes: 7.0 },
    { ruta: '/lavanderias', nombre: 'Lavanderías', ahora: 45, antes: 3, posAhora: 7.2, posAntes: 11.3 },
    { ruta: '/blog/software-propio-kiosco-autoservicio-frente-generico', nombre: 'Blog · Software propio frente a genérico', ahora: 8, antes: 1, posAhora: 11.7, posAntes: 11.1 },
    { ruta: '/parkings', nombre: 'Parkings', ahora: 7, antes: 5, posAhora: 22.9, posAntes: 33.2 },
    { ruta: '/blog/accesibilidad-kioscos-autoservicio-normativa-espanola', nombre: 'Blog · Accesibilidad en kioscos', ahora: 6, antes: 0, posAhora: 4.6, posAntes: 3.4 },
    { ruta: '/quienes-somos', nombre: 'Quiénes somos', ahora: 5, antes: 2, posAhora: 3.9, posAntes: 3.4 },
    { ruta: '/contacto', nombre: 'Contacto', ahora: 4, antes: 1, posAhora: 2.7, posAntes: 7.1 },
  ],
  marca: [
    { consulta: 'tcsystems', ahora: 52, antes: 40 },
    { consulta: 'tc systems', ahora: 9, antes: 12 },
    { consulta: 'tcobro', ahora: 8, antes: 0 },
    { consulta: 'tcsystem', ahora: 4, antes: 5 },
  ],
}

export const visitas = {
  sesiones: 1557,
  usuariosNuevos: 1252,
  vistas: 2119,
  canales: [
    { canal: 'Directo', sesiones: 721 },
    { canal: 'Buscadores (orgánico)', sesiones: 715 },
    { canal: 'Asistentes de IA', sesiones: 54 },
    { canal: 'Otras webs (referidos)', sesiones: 45 },
    { canal: 'Redes sociales', sesiones: 14 },
    { canal: 'Google Ads', sesiones: 5 },
  ],
  paginasVistas: [
    { pagina: 'Inicio', vistas: 1002 },
    { pagina: 'Contacto', vistas: 131 },
    { pagina: 'EVO', vistas: 112 },
    { pagina: 'Quiénes somos', vistas: 110 },
    { pagina: 'Blog · ¿Es rentable una lavandería?', vistas: 83 },
    { pagina: 'Central de pago para lavandería', vistas: 76 },
    { pagina: 'Elysium Plus', vistas: 72 },
    { pagina: 'Prometheus', vistas: 67 },
  ],
  error404: 33,
}

export const presupuestos = {
  formulariosEmpezados: 27,
  solicitudes: 21,
  // 21 / 27
  tasaFinalizacion: 78,
  contactoPosicion: { ahora: 2.7, antes: 7.1 },
}

export const oportunidades = [
  { consulta: 'es rentable montar una lavandería autoservicio', impresiones: 267, posicion: 9.7, clics: 3 },
  { consulta: 'terminales de autopago para gasolineras', impresiones: 189, posicion: 11.9, clics: 0 },
  { consulta: 'sistema de cobro para restaurante', impresiones: 159, posicion: 22.4, clics: 0 },
  { consulta: 'autopago para gasolinera', impresiones: 154, posicion: 16.2, clics: 0 },
  { consulta: 'integración de tpv', impresiones: 100, posicion: 10.3, clics: 0 },
  { consulta: 'terminales pago gasolinera', impresiones: 90, posicion: 5.7, clics: 0 },
  { consulta: 'recepción automática hotel', impresiones: 52, posicion: 9.4, clics: 0 },
]

export const plan = [
  {
    titulo: 'Convertir la visibilidad de gasolineras en clics',
    porque: '440 apariciones en el trimestre (antes 109) y ningún clic. El artículo de terminales para gasolineras sale en la posición 10,6 con 515 apariciones.',
    accion: 'Reescribir título y descripción del artículo y de /gasolineras, añadir preguntas frecuentes y enlazar ambas páginas entre sí.',
  },
  {
    titulo: 'Exprimir el tirón de lavanderías',
    porque: 'Es el sector que más crece: de 102 a 1.162 apariciones. El artículo de rentabilidad tiene 6.067 apariciones pero solo convierte el 0,9 % en clics.',
    accion: 'Mejorar el título del artículo, sumar una calculadora de rentabilidad y llevar al lector a /lavanderias y a la central de pago.',
  },
  {
    titulo: 'Posicionar la nueva landing de integradores',
    porque: '«integración de tpv» ya aparece 100 veces en posición 10 sin clics. La landing de integradores salió el 19 de noviembre.',
    accion: 'Pedir su indexación en Search Console, enlazarla desde blog y productos y publicar dos artículos de apoyo sobre API e integración.',
  },
  {
    titulo: 'Entrar en restauración y hostelería',
    porque: '415 apariciones con posición media superior a 22: Google nos considera, pero en la tercera página.',
    accion: 'Crear una página específica para restaurantes y cafeterías con casos reales y enlazarla desde la home.',
  },
  {
    titulo: 'Medir mejor quién nos contacta',
    porque: 'De los 21 formularios, 4 eran agencias y medios ofreciendo servicios, y los formularios de la web no guardan de qué canal llega cada empresa.',
    accion: 'Añadir al formulario un campo de tipo de consulta para separar proveedores y registrar el canal de origen de cada solicitud en el panel de leads.',
  },
  {
    titulo: 'Corregir enlaces rotos',
    porque: '33 visitas acabaron en una página de error 404 durante el trimestre.',
    accion: 'Localizar las URL rotas y redirigirlas a la página equivalente.',
  },
]

// Acciones clave del panel de leads (/admin), 01/09 – 26/11/2026.
// Solo cifras agregadas: el informe es público por enlace y no debe llevar
// nombres, emails ni teléfonos de clientes.
export const contactos = {
  formularios: {
    total: 21, // coincide con generate_lead de GA4
    proveedores: 4, // agencias SEO y medios ofreciendo servicios
    repetidos: 2, // misma empresa escribe dos veces
    empresas: 15,
    viaLandingAds: 4, // landing de lavanderías de Google Ads
    sectores: [
      { sector: 'Lavanderías', empresas: 5 },
      { sector: 'Software e informática', empresas: 2 },
      { sector: 'Deporte', empresas: 1 },
      { sector: 'Educación', empresas: 1 },
      { sector: 'Automoción', empresas: 1 },
      { sector: 'Comercio', empresas: 1 },
      { sector: 'Sin identificar', empresas: 4 },
    ],
    porMes: [
      { mes: 'Septiembre', empresas: 4 },
      { mes: 'Octubre', empresas: 7 },
      { mes: 'Noviembre (hasta el 26)', empresas: 4 },
    ],
  },
  whatsapp: 13,
  llamadas: 10, // 12 registros, 2 duplicados en el mismo segundo
  // Origen de los clics en WhatsApp y llamada desde octubre, cuando el panel
  // empezó a registrar la procedencia (12 clics)
  origenClics: [
    { origen: 'Buscadores (Google, Ecosia)', clics: 6 },
    { origen: 'Directo', clics: 4 },
    { origen: 'ChatGPT', clics: 1 },
    { origen: 'LinkedIn', clics: 1 },
  ],
}
