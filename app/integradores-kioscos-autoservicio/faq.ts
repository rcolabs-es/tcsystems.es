/**
 * Fuente única de las preguntas frecuentes de /integradores-kioscos-autoservicio.
 * La consume la propia página (render visible) y el JSON-LD FAQPage del layout.
 *
 * `answer` es texto definitivo y es lo único que viaja al schema FAQPage.
 * `pending` es una nota visible solo en la página, con lo que falta confirmar
 * con TCSystems; no entra en el schema. Hay que quitarla antes de publicar.
 */
import type { FaqEntry } from '@/lib/schema'

export interface IntegradoresFaq extends FaqEntry {
  pending?: string
}

export const integradoresFaqs: IntegradoresFaq[] = [
  {
    question: '¿Puedo instalar mi propio software en un kiosco autoservicio de TCSystems?',
    answer:
      'Sí. TCSystems vende sus kioscos y terminales de autoservicio también sin software, para que una empresa de software o un integrador instale su propia aplicación: ERP, TPV, software para estaciones de servicio, cita previa, control de accesos o cualquier software de gestión. TCSystems pone el hardware y tú pones el software.',
  },
  {
    question: '¿Fabricáis kioscos a medida o solo modelos de catálogo?',
    answer:
      'Las dos cosas. Puedes partir de un modelo de catálogo (EVO, Prometheus, Elysium o Elysium Plus) o diseñar con TCSystems un kiosco o un poste de pago a medida: nos cuentas lo que necesita tu software, lo diseñamos contigo y lo fabricamos.',
  },
  {
    question: '¿Podéis fabricar un poste de pago para estaciones de servicio?',
    answer:
      'Sí. Fabricamos postes y terminales de pago para estaciones de servicio desatendidas y lavaderos, de catálogo o diseñados a medida con la empresa que pone el software de gestión de la estación.',
  },
  {
    question: '¿Qué periféricos puede llevar el kiosco?',
    answer:
      'Según el modelo y la configuración: admisión y devolución de monedas y billetes, pago con tarjeta y contactless, lector de códigos QR, impresora térmica de tickets, lector de proximidad o de usuarios, pantalla táctil de 19 a 27 pulgadas y PC industrial preparado para funcionar 24/7.',
  },
  {
    question: '¿Qué sistema operativo llevan y cómo integro los periféricos con mi software?',
    answer:
      'Depende del modelo y de la configuración que elijas. Antes de empezar revisamos con tu equipo técnico qué periféricos va a usar tu aplicación y cómo se van a integrar.',
    pending:
      'Sistemas operativos soportados, cómo se integran los periféricos (SDK, drivers, API o protocolos) y qué documentación se entrega al desarrollador.',
  },
  {
    question: '¿Cuál es el pedido mínimo y cuánto tarda la fabricación?',
    answer:
      'Depende de si partes de un modelo de catálogo o de un diseño a medida. Cuéntanos tu proyecto y te damos condiciones y plazos concretos.',
    pending: 'Pedido mínimo, si hay unidad piloto y plazos orientativos de fabricación y entrega.',
  },
  {
    question: '¿Puedo personalizar el kiosco con la imagen de mi marca o la de mi cliente?',
    answer:
      'En un kiosco a medida la imagen exterior se diseña contigo desde el principio, junto con el formato y los periféricos.',
    pending: 'Si se ofrece marca blanca y vinilado también en los modelos de catálogo.',
  },
  {
    question: '¿En qué tipo de establecimientos se pueden instalar?',
    answer:
      'En cualquier establecimiento con atención o cobro desatendido: gasolineras y estaciones de servicio desatendidas, ayuntamientos y administración pública, lavaderos y boxes de lavado, hostelería, retail, parkings, centros deportivos y control de accesos.',
  },
  {
    question: 'Tengo un establecimiento pero no tengo software, ¿podéis ayudarme?',
    answer:
      'Sí. Si vas a abrir una estación de servicio u otro negocio de autoservicio y aún no tienes software, te ponemos en contacto con empresas de software que ya trabajan con nuestros kioscos.',
    pending: 'Confirmar que queréis ofrecer esta derivación a partners de software en la web.',
  },
  {
    question: '¿Quién da el soporte técnico y los recambios del hardware?',
    answer:
      'TCSystems fabrica sus equipos y da el soporte técnico y los recambios del hardware desde España.',
    pending:
      'Modelo de soporte para integradores (al integrador, al cliente final o a ambos) y condiciones de garantía.',
  },
]
