/**
 * Fuente única de las preguntas frecuentes de /verifactu.
 * La consume la página (render visible) y el layout (JSON-LD FAQPage).
 *
 * Las fechas y referencias normativas están contrastadas con la nota informativa
 * de la AEAT y el texto consolidado del BOE (ver enlaces en la propia página).
 * Si cambia la normativa, actualizar aquí y en la sección "Marco normativo".
 */
import type { FaqEntry } from '@/lib/schema'

export const verifactuFaqs: FaqEntry[] = [
  {
    question: '¿Qué es Veri*factu?',
    answer:
      'Veri*factu es la modalidad de remisión voluntaria de los registros de facturación a la Agencia Tributaria prevista en el Reglamento aprobado por el Real Decreto 1007/2023, de 5 de diciembre. Ese reglamento (conocido como RRSIF) obliga a que los sistemas informáticos de facturación garanticen la integridad, conservación, accesibilidad, legibilidad, trazabilidad e inalterabilidad de los registros de facturación, para dificultar el uso del llamado software de doble uso.',
  },
  {
    question: '¿Cuándo es obligatorio Veri*factu?',
    answer:
      'Tras la modificación introducida por el Real Decreto-ley 15/2025, de 2 de diciembre, los contribuyentes del Impuesto sobre Sociedades deberán tener adaptados sus sistemas informáticos de facturación antes del 1 de enero de 2027, y el resto de obligados tributarios antes del 1 de julio de 2027. Estos plazos ampliaron los que fijaba inicialmente el Real Decreto 1007/2023.',
  },
  {
    question: '¿Los terminales de TCSystems son compatibles con Veri*factu?',
    answer:
      'Sí. TCSystems integra Veri*factu en todos sus terminales de pago y kioscos de autoservicio —Elysium, Elysium Plus, EVO y Prometheus—, de forma que el equipo emita facturación electrónica conforme al reglamento. La integración la realiza el equipo técnico de TCSystems sobre el terminal que ya tenga instalado el cliente o sobre uno nuevo.',
  },
  {
    question: '¿Tengo que cambiar de terminal para cumplir con Veri*factu?',
    answer:
      'No necesariamente. La integración de Veri*factu está disponible como opción sobre los terminales TCSystems ya instalados, sin sustituir el equipo. El equipo técnico de TCSystems estudia cada caso y confirma la vía de integración antes de intervenir.',
  },
  {
    question: '¿Qué pasa durante el periodo previo a esas fechas?',
    answer:
      'Según la nota informativa de la Agencia Tributaria, el periodo previo a las respectivas fechas es un periodo de pruebas, durante el cual se pueden remitir registros de prueba con un sistema en modalidad Veri*factu. Es el momento de adaptar los equipos sin la presión del plazo.',
  },
  {
    question: '¿Veri*factu es lo mismo que la factura electrónica obligatoria entre empresas?',
    answer:
      'No son lo mismo. Veri*factu regula los requisitos de los sistemas informáticos de facturación y la remisión de los registros a la AEAT (Real Decreto 1007/2023). La factura electrónica obligatoria entre empresas y profesionales procede de la Ley 18/2022 (Ley Crea y Crece) y tiene su propio desarrollo y calendario. Un negocio puede verse afectado por ambas normas.',
  },
]
