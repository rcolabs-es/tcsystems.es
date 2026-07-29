/**
 * Fuente única de las preguntas frecuentes de /kioscos-autoservicio.
 * La consume la propia página (render visible) y el JSON-LD FAQPage.
 */
import type { FaqEntry } from '@/lib/schema'

export const kioscosFaqs: FaqEntry[] = [
  {
    question: '¿Qué es un kiosco de autoservicio y para qué sirve?',
    answer:
      'Un kiosco de autoservicio es un terminal que permite al cliente final completar una operación por sí mismo —pagar, sacar un ticket, identificarse o acceder a una instalación— sin personal atendiendo. En la práctica permite que un negocio opere 24/7, absorba las horas punta sin colas y mantenga la trazabilidad de cada transacción.',
  },
  {
    question: '¿Qué formas de pago admite un kiosco de TCSystems?',
    answer:
      'Los kioscos de TCSystems admiten efectivo (monedas y billetes, con devolución de cambio según el modelo), tarjeta de débito y crédito con chip y contactless, pagos móviles, códigos QR y tarjetas de proximidad. Cada equipo se configura según lo que necesite el negocio.',
  },
  {
    question: '¿En qué sectores se instalan estos kioscos?',
    answer:
      'TCSystems instala kioscos de autoservicio en gasolineras y túneles de lavado, lavanderías de autoservicio, parkings, retail, centros deportivos y administración pública, tanto para cobro desatendido como para control de accesos, gestión de abonos y cobro de tasas.',
  },
  {
    question: '¿El kiosco se integra con el software que ya usamos?',
    answer:
      'Sí. El software es propio de TCSystems, lo que permite integrar el kiosco con el ERP o el TPV que ya tenga el negocio y adaptar la operativa a su flujo de trabajo, en lugar de forzar un cambio de sistema.',
  },
  {
    question: '¿Cuánto tarda la instalación de un kiosco de autoservicio?',
    answer:
      'La instalación típica se completa en 1-2 días laborables, incluyendo la configuración del equipo y la formación básica del personal. TCSystems se encarga del proceso completo, desde la instalación física hasta la puesta en marcha.',
  },
  {
    question: '¿Qué garantía y qué mantenimiento tienen los equipos?',
    answer:
      'Los equipos incluyen 1 año de garantía completa sobre hardware, software y mano de obra, ampliable a 3 años con los planes de mantenimiento premium. El mantenimiento preventivo se programa cada 3 meses e incluye limpieza, calibración y actualización de software, con soporte técnico 24/7 desde las 5 delegaciones de TCSystems en España.',
  },
  {
    question: '¿TCSystems fabrica los kioscos o los importa?',
    answer:
      'Los fabrica. TCSystems es un fabricante español con sede en Griñón (Madrid) que diseña, fabrica, instala y da soporte a sus propios equipos, con más de 14 años de actividad y más de 500 instalaciones. El soporte y los recambios salen del propio fabricante, sin intermediarios ni esperas de importación.',
  },
]
