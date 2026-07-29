/**
 * Helpers de datos estructurados (schema.org / JSON-LD).
 *
 * Se generan en servidor para que el marcado viaje en el HTML inicial: los
 * rastreadores de los motores de IA (GPTBot, ClaudeBot, PerplexityBot…) no
 * ejecutan JavaScript, así que todo lo que dependa de hidratación es invisible
 * para ellos.
 */

export interface FaqEntry {
  question: string
  answer: string
}

/** Construye un FAQPage a partir de la misma lista que se renderiza en pantalla. */
export function faqPageSchema(faqs: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
