/**
 * Fuente única de las preguntas frecuentes de /integradores-kioscos-autoservicio.
 * La consume la propia página (render visible) y el JSON-LD FAQPage del layout.
 */
import type { FaqEntry } from '@/lib/schema'

export const integradoresFaqs: FaqEntry[] = [
  {
    question: '¿Puedo instalar mi propio software en un kiosco autoservicio de TCSystems?',
    answer:
      'Sí. TCSystems vende sus kioscos y terminales de autoservicio también sin software, para que una empresa de software o un integrador instale su propia aplicación: ERP, TPV, software para estaciones de servicio, cita previa, control de accesos o cualquier software de gestión. TCSystems pone el hardware y tú pones el software.',
  },
  {
    question: '¿Tenéis API para cobrar en efectivo y con tarjeta desde mi software?',
    answer:
      'Sí. Aportamos las APIs y los drivers para que tu aplicación integre el kiosco fácilmente y empiece a registrar pagos en efectivo, con devolución de cambio, y con tarjeta. Nuestro equipo técnico te acompaña durante la integración.',
  },
  {
    question: '¿Qué sistema operativo llevan los kioscos?',
    answer:
      'Los kioscos llevan un PC industrial con Windows. Junto con el equipo te damos las APIs y los drivers de los periféricos, y antes de fabricar revisamos con tu equipo técnico qué periféricos va a usar tu aplicación.',
  },
  {
    question: '¿Fabricáis kioscos a medida o solo modelos de catálogo?',
    answer:
      'Las dos cosas. Puedes partir de un modelo de catálogo (EVO, Prometheus, Elysium o Elysium Plus) o diseñar con TCSystems un kiosco o un poste de pago a medida: nos cuentas lo que necesita tu software, lo diseñamos contigo y lo fabricamos.',
  },
  {
    question: '¿Cómo funciona un proyecto a medida y cuánto tarda?',
    answer:
      'Te pasamos presupuesto de una unidad piloto, la fabricamos y, cuando la apruebas, lanzamos la serie. Tras el prototipo, la primera unidad real está lista en un plazo de entre 8 y 12 semanas.',
  },
  {
    question: '¿Puedo personalizar el kiosco con la imagen de mi marca o la de mi cliente?',
    answer:
      'Sí. Todos los equipos, de catálogo o a medida, salen pintados en el color RAL del cliente final o del integrador, y vinilados con el logo de uno u otro.',
  },
  {
    question: '¿Podéis fabricar un poste de pago para estaciones de servicio?',
    answer:
      'Sí. Fabricamos postes y terminales de pago para estaciones de servicio desatendidas y lavaderos, de catálogo o diseñados a medida con la empresa que pone el software de gestión de la estación.',
  },
  {
    question: '¿Qué periféricos puede llevar el kiosco?',
    answer:
      'Según el modelo y la configuración: admisión y devolución de monedas y billetes, pago con tarjeta y contactless, lector de códigos QR, impresora térmica de tickets, lector de proximidad o de usuarios, pantalla táctil de 19 a 27 pulgadas y PC industrial con Windows preparado para funcionar 24/7.',
  },
  {
    question: '¿Quién da el soporte técnico e instala los kioscos?',
    answer:
      'Atendemos directamente al integrador. Nuestros instaladores montan los kioscos en el cliente final y damos soporte técnico presencial cuando hace falta, con delegaciones en Madrid, Cataluña, Andalucía, País Vasco y Comunidad Valenciana.',
  },
  {
    question: '¿En qué tipo de establecimientos se pueden instalar?',
    answer:
      'En cualquier establecimiento con atención o cobro desatendido: gasolineras y estaciones de servicio desatendidas, ayuntamientos y administración pública, transporte, lavaderos y lavanderías, hostelería, retail, parkings, centros deportivos y control de accesos.',
  },
  {
    question: 'Tengo un negocio pero no tengo software, ¿podéis ayudarme?',
    answer:
      'Sí. Podemos desarrollar el software nosotros o ponerte en contacto con un partner de software especializado en tu modelo de negocio que ya trabaja con los kioscos de TCSystems.',
  },
]
