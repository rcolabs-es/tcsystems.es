/**
 * Fuente única de las preguntas frecuentes de /control-accesos.
 * La consume la propia página (render visible) y el JSON-LD FAQPage del layout.
 */
import type { FaqEntry } from '@/lib/schema'

export const controlAccesosFaqs: FaqEntry[] = [
  {
    question: '¿Qué tecnologías de identificación admite un sistema de control de accesos?',
    answer:
      'Los sistemas de TCSystems admiten identificación multitecnología: huella dactilar, reconocimiento facial, tarjetas RFID de proximidad, códigos QR y acceso desde el móvil. Cada instalación combina las tecnologías que mejor se ajustan a su nivel de seguridad y a su operativa.',
  },
  {
    question: '¿Se pueden definir permisos por zonas y horarios?',
    answer:
      'Sí. El software de gestión permite un control granular de los accesos por zonas, franjas horarias, perfiles de usuario y niveles de autorización, de modo que cada persona solo entra donde y cuando le corresponde, con trazabilidad completa de cada acceso.',
  },
  {
    question: '¿Para qué tipo de instalaciones sirve?',
    answer:
      'Las soluciones de control de accesos se implantan en empresas, edificios de oficinas, instalaciones industriales, centros deportivos y espacios con control de aforo, combinando hardware de última generación con software de gestión centralizada adaptado a cada caso.',
  },
  {
    question: '¿El sistema queda registrado y es trazable?',
    answer:
      'Sí. Todos los accesos quedan registrados, lo que garantiza la trazabilidad y permite auditar quién ha accedido, a qué zona y en qué momento. Es la base para reforzar la seguridad y cumplir con los requisitos de control de cada instalación.',
  },
  {
    question: '¿Se integra el control de accesos con otros sistemas?',
    answer:
      'El software es propio de TCSystems, lo que permite integrar el control de accesos con la gestión de aforo, el control horario o los sistemas que ya utilice la instalación, adaptando la solución al flujo de trabajo existente en lugar de forzar un cambio de sistema.',
  },
  {
    question: '¿TCSystems fabrica, instala y mantiene estos sistemas?',
    answer:
      'Sí. TCSystems es un fabricante español con sede en Griñón (Madrid) que diseña, fabrica, instala y mantiene sus propios equipos. Cuenta con soporte técnico y una red de 5 delegaciones en España, con más de 500 instalaciones y más de 14 años de actividad.',
  },
]
