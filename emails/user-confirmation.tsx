import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface UserConfirmationProps {
  firstName: string;
  lastName: string;
  productName?: string;
}

export const UserConfirmation = ({
  firstName,
  lastName,
  productName,
}: UserConfirmationProps) => {
  const getProductInfo = (product?: string) => {
    switch (product) {
      case 'EVO':
        return {
          title: 'EVO - Kioscos Completos',
          description: 'Solución integral de kioscos para maximizar la eficiencia de cobro',
          icon: '🚀',
        };
      case 'Prometheus':
        return {
          title: 'Prometheus - Terminales',
          description: 'Terminales de última generación para automatización de pagos',
          icon: '⚡',
        };
      case 'Elysium':
        return {
          title: 'Elysium - Sistemas Premium',
          description: 'La solución más avanzada para empresas que buscan la excelencia',
          icon: '👑',
        };
      default:
        return {
          title: 'Nuestros Productos',
          description: 'Soluciones de automatización de cobros adaptadas a tu negocio',
          icon: '💼',
        };
    }
  };

  const productInfo = getProductInfo(productName);

  return (
    <Html>
      <Head />
      <Preview>
        Gracias por tu interés en TCSystems{productName ? ` - ${productName}` : ''}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Row>
              <Column>
                <Img
                  src="https://tcsystems.es/logo.png"
                  width="40"
                  height="40"
                  alt="TCSystems"
                  style={logo}
                />
              </Column>
              <Column style={headerColumn}>
                <Text style={headerText}>TCSystems</Text>
              </Column>
            </Row>
          </Section>
          
          <Section style={content}>
            <Text style={greeting}>
              ¡Hola {firstName}! 👋
            </Text>
            
            <Text style={title}>
              Gracias por contactarnos
            </Text>
            
            <Text style={description}>
              Hemos recibido tu solicitud de información y nos pondremos en contacto contigo 
              <strong style={highlight}> dentro de las próximas 24 horas</strong> para ayudarte 
              con tu proyecto.
            </Text>
            
            {productName && (
              <Section style={productSection}>
                <Text style={productTitle}>
                  {productInfo.icon} {productInfo.title}
                </Text>
                <Text style={productDescription}>
                  {productInfo.description}
                </Text>
              </Section>
            )}
            
            <Section style={nextStepsSection}>
              <Text style={sectionTitle}>📋 Próximos pasos</Text>
              <ul style={stepsList}>
                <li style={stepItem}>
                  <Text style={stepText}>
                    <strong>Análisis personalizado:</strong> Estudiaremos tu proyecto en detalle
                  </Text>
                </li>
                <li style={stepItem}>
                  <Text style={stepText}>
                    <strong>Propuesta técnica:</strong> Diseñaremos la solución perfecta para ti
                  </Text>
                </li>
                <li style={stepItem}>
                  <Text style={stepText}>
                    <strong>Presupuesto sin compromiso:</strong> Recibirás una oferta transparente
                  </Text>
                </li>
              </ul>
            </Section>
            
            <Hr style={hr} />
            
            <Section style={whySection}>
              <Text style={sectionTitle}>🌟 ¿Por qué elegir TCSystems?</Text>
              <Row style={benefitRow}>
                <Column style={benefitColumn}>
                  <Text style={benefitNumber}>14+</Text>
                  <Text style={benefitLabel}>Años de experiencia</Text>
                </Column>
                <Column style={benefitColumn}>
                  <Text style={benefitNumber}>500+</Text>
                  <Text style={benefitLabel}>Empresas satisfechas</Text>
                </Column>
                <Column style={benefitColumn}>
                  <Text style={benefitNumber}>24/7</Text>
                  <Text style={benefitLabel}>Soporte técnico</Text>
                </Column>
              </Row>
            </Section>
            
            <Section style={contactSection}>
              <Text style={sectionTitle}>📞 ¿Tienes alguna pregunta?</Text>
              <Text style={contactText}>
                Si necesitas información adicional, no dudes en contactarnos:
              </Text>
              <Row style={contactRow}>
                <Column style={contactColumn}>
                  <Text style={contactLabel}>📧 Email:</Text>
                  <Link href="mailto:consultoria@tcsystems.es" style={contactLink}>
                    consultoria@tcsystems.es
                  </Link>
                </Column>
                <Column style={contactColumn}>
                  <Text style={contactLabel}>📱 Teléfono:</Text>
                  <Link href="tel:916216237" style={contactLink}>
                    916 216 237
                  </Link>
                </Column>
              </Row>
            </Section>
            
            <Section style={ctaSection}>
              <Text style={ctaText}>
                Mientras tanto, puedes explorar más sobre nuestros productos:
              </Text>
              <Link href="https://tcsystems.es/#productos" style={ctaButton}>
                🔍 Ver todos nuestros productos
              </Link>
            </Section>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>
              TCSystems - Líderes en automatización de cobros desde 2010
            </Text>
            <Text style={footerAddress}>
              C/ Centauro, 15, 28971 Griñón, Madrid
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const header = {
  padding: '20px 30px',
  backgroundColor: '#0e9acd',
};

const headerColumn = {
  verticalAlign: 'middle' as const,
  paddingLeft: '12px',
};

const headerText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const logo = {
  borderRadius: '8px',
  filter: 'brightness(0) invert(1)',
};

const content = {
  padding: '30px',
};

const greeting = {
  fontSize: '24px',
  color: '#2d3748',
  marginBottom: '16px',
};

const title = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#1a202c',
  marginBottom: '16px',
};

const description = {
  fontSize: '16px',
  color: '#4a5568',
  lineHeight: '1.5',
  marginBottom: '24px',
};

const highlight = {
  color: '#0e9acd',
};

const productSection = {
  backgroundColor: '#f0f9ff',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '24px',
  border: '2px solid #0e9acd',
};

const productTitle = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#0e9acd',
  marginBottom: '8px',
};

const productDescription = {
  fontSize: '14px',
  color: '#4a5568',
  margin: '0',
};

const nextStepsSection = {
  backgroundColor: '#f8fafc',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '24px',
};

const sectionTitle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#2d3748',
  marginBottom: '16px',
};

const stepsList = {
  margin: '0',
  paddingLeft: '0',
  listStyle: 'none',
};

const stepItem = {
  marginBottom: '12px',
};

const stepText = {
  fontSize: '14px',
  color: '#4a5568',
  margin: '0',
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '24px 0',
};

const whySection = {
  backgroundColor: '#fefefe',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  marginBottom: '24px',
};

const benefitRow = {
  marginTop: '16px',
};

const benefitColumn = {
  textAlign: 'center' as const,
  padding: '0 8px',
};

const benefitNumber = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#0e9acd',
  marginBottom: '4px',
};

const benefitLabel = {
  fontSize: '12px',
  color: '#718096',
  margin: '0',
};

const contactSection = {
  backgroundColor: '#f7fafc',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '24px',
};

const contactText = {
  fontSize: '14px',
  color: '#4a5568',
  marginBottom: '16px',
};

const contactRow = {
  marginTop: '16px',
};

const contactColumn = {
  padding: '0 8px',
};

const contactLabel = {
  fontSize: '12px',
  color: '#718096',
  marginBottom: '4px',
  fontWeight: '500',
};

const contactLink = {
  fontSize: '14px',
  color: '#0e9acd',
  textDecoration: 'none',
  fontWeight: '500',
};

const ctaSection = {
  textAlign: 'center' as const,
  padding: '24px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
};

const ctaText = {
  fontSize: '14px',
  color: '#4a5568',
  marginBottom: '16px',
};

const ctaButton = {
  backgroundColor: '#0e9acd',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: '500',
  display: 'inline-block',
};

const footer = {
  padding: '20px 30px',
  textAlign: 'center' as const,
  backgroundColor: '#f8fafc',
};

const footerText = {
  fontSize: '12px',
  color: '#718096',
  marginBottom: '4px',
  fontWeight: '500',
};

const footerAddress = {
  fontSize: '12px',
  color: '#a0aec0',
  margin: '0',
};

export default UserConfirmation; 