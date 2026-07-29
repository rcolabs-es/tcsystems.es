/**
 * Fuente única de las preguntas frecuentes de /parkings.
 * La consume la propia página (render visible) y el JSON-LD FAQPage del layout.
 */
import type { FaqEntry } from '@/lib/schema'

export const parkingsFaqs: FaqEntry[] = [
  {
    question: '¿Qué incluye un sistema de gestión de parking de TCSystems?',
    answer:
      'Un sistema completo de TCSystems integra el control de acceso (barreras automáticas, lectores de matrícula y control de aforo en tiempo real), el cobro automático en cajero, la gestión de tarifas y abonos, y el software de gestión que unifica toda la operativa. Cada instalación se configura según sea un parking público o privado.',
  },
  {
    question: '¿Qué métodos de pago admite el cajero de un parking?',
    answer:
      'El cajero automático admite efectivo (monedas y billetes con devolución de cambio), tarjeta de débito y crédito con contactless, pagos móviles y abonos. El objetivo es que el usuario pueda pagar sin personal atendiendo y que el parking opere de forma desatendida.',
  },
  {
    question: '¿El sistema funciona con lectura de matrículas (LPR)?',
    answer:
      'Sí. Los sistemas para parking incorporan lectores de matrícula que permiten el acceso y la salida sin ticket, la gestión de abonados por matrícula y el control de aforo en tiempo real, reduciendo colas en las horas de mayor afluencia.',
  },
  {
    question: '¿Sirve tanto para parkings públicos como privados?',
    answer:
      'Sí. Las soluciones se adaptan a parkings públicos rotacionales, parkings privados de empresa o comunidad y aparcamientos con abonados. La configuración de tarifas, accesos y método de cobro se ajusta a la operativa de cada instalación.',
  },
  {
    question: '¿TCSystems instala y da soporte al sistema completo?',
    answer:
      'Sí. TCSystems es un fabricante español con sede en Griñón (Madrid) que diseña, fabrica, instala y mantiene sus propios equipos. Cuenta con soporte técnico y una red de 5 delegaciones en España, con más de 500 instalaciones y más de 14 años de actividad.',
  },
  {
    question: '¿Se integra con el software de gestión que ya usamos?',
    answer:
      'El software es propio de TCSystems, lo que permite integrarlo con los sistemas de gestión y control que ya tenga el parking y adaptar la operativa al flujo de trabajo existente, en lugar de forzar un cambio completo de sistema.',
  },
]
