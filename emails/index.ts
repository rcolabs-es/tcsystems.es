// Exportar todos los templates de email
export { AdminContactNotification } from './admin-contact-notification';
export { UserConfirmation } from './user-confirmation';

// Tipos para los templates
export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  corporateEmail: string;
  project: string;
  productName?: string;
}

export interface AdminNotificationProps {
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  corporateEmail: string;
  project: string;
  productName?: string;
}

export interface UserConfirmationProps {
  firstName: string;
  lastName: string;
  productName?: string;
}

// Constantes para configuración de emails
export const EMAIL_CONFIG = {
  FROM: 'TCSystems <noreply@tcsystems.es>',
  ADMIN_EMAIL: 'consultoria@tcsystems.es',
  DOMAIN: 'tcsystems.es',
} as const;

// Funciones helper para generar asuntos
export const generateSubjects = (productName?: string) => {
  const productSuffix = productName ? ` - ${productName}` : '';
  return {
    admin: `🔔 Nuevo contacto desde la web${productSuffix}`,
    user: `✅ Confirmación de contacto - TCSystems${productSuffix}`,
  };
};

// Información de productos para personalización
export const PRODUCT_INFO = {
  EVO: {
    title: 'EVO - Kioscos Completos',
    description: 'Solución integral de kioscos para maximizar la eficiencia de cobro',
    icon: '🚀',
  },
  Prometheus: {
    title: 'Prometheus - Terminales',
    description: 'Terminales de última generación para automatización de pagos',
    icon: '⚡',
  },
  Elysium: {
    title: 'Elysium - Sistemas Premium',
    description: 'La solución más avanzada para empresas que buscan la excelencia',
    icon: '👑',
  },
} as const;

export type ProductName = keyof typeof PRODUCT_INFO; 