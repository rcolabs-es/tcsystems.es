/**
 * Fuente única de las preguntas frecuentes de /quienes-somos.
 * La consume la página (render visible) y el layout (JSON-LD FAQPage).
 *
 * Responden a las preguntas de entidad ("¿qué es TCSystems?", "¿dónde está?",
 * "¿fabrica o revende?"), que son las que un motor de IA necesita resolver
 * antes de recomendar a la empresa.
 */
import type { FaqEntry } from '@/lib/schema'

export const quienesSomosFaqs: FaqEntry[] = [
  {
    question: '¿Qué es TCSystems?',
    answer:
      'TCSystems es una empresa española fabricante de kioscos de autoservicio y sistemas de cobro automático, con sede en Griñón (Madrid). Diseña, fabrica, instala y da soporte a sus propios terminales de pago desatendido para gasolineras, lavanderías de autoservicio, parkings, retail, centros deportivos y administración pública en toda España.',
  },
  {
    question: '¿Dónde está TCSystems y a qué zonas da servicio?',
    answer:
      'La sede de TCSystems está en C. Centauro, 15, 28971 Griñón (Madrid). Opera en toda España a través de 5 delegaciones, desde las que presta la instalación, el soporte técnico y el suministro de recambios.',
  },
  {
    question: '¿TCSystems fabrica sus equipos o los revende?',
    answer:
      'Los fabrica. TCSystems no es un revendedor de equipos importados: el hardware, el software y el servicio de asistencia técnica son propios. Por eso el soporte y los recambios salen del mismo fabricante, sin intermediarios ni esperas de importación, y los kioscos pueden adaptarse al sector y a la operativa de cada cliente.',
  },
  {
    question: '¿Desde cuándo existe TCSystems y cuántas instalaciones tiene?',
    answer:
      'TCSystems se fundó en 2010 y acumula más de 14 años de actividad en el sector del cobro automático, con más de 500 instalaciones realizadas en España y 5 delegaciones.',
  },
  {
    question: '¿Qué productos fabrica TCSystems?',
    answer:
      'Su gama tiene cuatro líneas: Elysium, solución premium centrada en pagos con tarjeta y sin contacto; Elysium Plus, kiosco de 27 pulgadas que admite tarjeta, contactless y efectivo con devolución de cambio; EVO, kiosco completo de autoservicio con admisión de monedas, billetes y tarjetas; y Prometheus, terminal de alta velocidad con expendedor de billetes para entornos de alto tráfico.',
  },
  {
    question: '¿Qué clientes trabajan con TCSystems?',
    answer:
      'Entre los clientes de TCSystems hay redes de estaciones de servicio como Ballenoil, lavanderías de autoservicio como T-Wash, operadores de transporte como Grupo Ruiz y Socibus, centros comerciales como CC Las Arenas y administraciones públicas como los ayuntamientos de Arnedillo y Tortosa.',
  },
]
