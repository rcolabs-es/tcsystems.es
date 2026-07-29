/**
 * Fuente única de las preguntas frecuentes de /contacto.
 * La consume la página (render visible) y el layout (JSON-LD FAQPage),
 * de forma que el marcado estructurado nunca se desincronice del texto real.
 */
export interface Faq {
  question: string
  answer: string
}

export const contactoFaqs: Faq[] = [
  {
    question: '¿Cuánto tiempo tarda la instalación?',
    answer:
      'La instalación típica se completa en 1-2 días laborables, incluyendo configuración y formación básica del personal. Nuestro equipo técnico se encarga de todo el proceso desde la instalación física hasta la puesta en marcha completa del sistema.',
  },
  {
    question: '¿Qué tipo de soporte técnico ofrecen?',
    answer:
      'Ofrecemos soporte técnico 24/7 por teléfono, email y conexión remota. Incluye mantenimiento preventivo, actualizaciones de software, resolución de incidencias y formación continua del personal. Nuestro tiempo de respuesta promedio es inferior a 2 horas.',
  },
  {
    question: '¿Los sistemas funcionan sin conexión a internet?',
    answer:
      'Sí, nuestros sistemas pueden funcionar en modo offline, almacenando las transacciones localmente hasta que se restablezca la conexión. Una vez reconectado, todos los datos se sincronizan automáticamente con nuestros servidores seguros.',
  },
  {
    question: '¿Qué garantía incluyen los equipos?',
    answer:
      'Todos nuestros equipos incluyen 1 año de garantía completa que cubre hardware, software y mano de obra. Ofrecemos la posibilidad de ampliar la garantía a 3 años con nuestros planes de mantenimiento premium, incluyendo piezas de repuesto y actualizaciones prioritarias.',
  },
  {
    question: '¿Qué métodos de pago aceptan los sistemas?',
    answer:
      'Nuestros sistemas aceptan efectivo (monedas y billetes), tarjetas de débito y crédito (chip y contactless), pagos móviles, códigos QR y tarjetas de proximidad. Cada sistema se puede configurar según las necesidades específicas de tu negocio.',
  },
  {
    question: '¿Cómo se realiza el mantenimiento de los equipos?',
    answer:
      'Realizamos mantenimiento preventivo programado cada 3 meses, incluyendo limpieza, calibración y actualización de software. Además, ofrecemos mantenimiento correctivo inmediato en caso de incidencias, con técnicos especializados disponibles en toda España.',
  },
]
