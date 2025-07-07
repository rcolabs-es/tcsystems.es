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

interface AdminContactNotificationProps {
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  corporateEmail: string;
  project: string;
  productName?: string;
}

export const AdminContactNotification = ({
  firstName,
  lastName,
  phone,
  company,
  corporateEmail,
  project,
  productName,
}: AdminContactNotificationProps) => (
  <Html>
    <Head />
    <Preview>
      Nuevo contacto desde la web{productName ? ` - ${productName}` : ''}
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
          <Text style={title}>
            📧 Nuevo contacto desde la web
          </Text>
          
          {productName && (
            <Section style={productSection}>
              <Text style={productTitle}>
                🎯 Producto de interés: {productName}
              </Text>
            </Section>
          )}
          
          <Section style={infoSection}>
            <Text style={sectionTitle}>👤 Información del contacto</Text>
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Nombre:</Text>
              </Column>
              <Column>
                <Text style={value}>{firstName} {lastName}</Text>
              </Column>
            </Row>
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Email:</Text>
              </Column>
              <Column>
                <Text style={value}>{corporateEmail}</Text>
              </Column>
            </Row>
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Teléfono:</Text>
              </Column>
              <Column>
                <Text style={value}>{phone}</Text>
              </Column>
            </Row>
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Empresa:</Text>
              </Column>
              <Column>
                <Text style={value}>{company}</Text>
              </Column>
            </Row>
          </Section>
          
          <Section style={projectSection}>
            <Text style={sectionTitle}>💼 Descripción del proyecto</Text>
            <Text style={projectText}>{project}</Text>
          </Section>
          
          <Hr style={hr} />
          
          <Section style={actionSection}>
            <Text style={actionText}>
              💡 Te recomendamos contactar con el cliente dentro de las próximas 24 horas para maximizar la conversión.
            </Text>
            <Link href={`mailto:${corporateEmail}`} style={button}>
              📧 Responder al cliente
            </Link>
          </Section>
        </Section>
        
        <Section style={footer}>
          <Text style={footerText}>
            Este email fue enviado automáticamente desde tcsystems.es
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

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

const title = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#1a202c',
  marginBottom: '24px',
};

const productSection = {
  backgroundColor: '#f0f9ff',
  padding: '16px',
  borderRadius: '8px',
  marginBottom: '24px',
  border: '1px solid #0e9acd',
};

const productTitle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#0e9acd',
  margin: '0',
};

const infoSection = {
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

const infoRow = {
  marginBottom: '8px',
};

const labelColumn = {
  width: '120px',
  verticalAlign: 'top' as const,
};

const label = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#718096',
  margin: '0',
};

const value = {
  fontSize: '14px',
  color: '#2d3748',
  margin: '0',
};

const projectSection = {
  backgroundColor: '#fefefe',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  marginBottom: '24px',
};

const projectText = {
  fontSize: '14px',
  color: '#4a5568',
  lineHeight: '1.5',
  whiteSpace: 'pre-wrap' as const,
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '24px 0',
};

const actionSection = {
  textAlign: 'center' as const,
  padding: '24px',
  backgroundColor: '#f7fafc',
  borderRadius: '8px',
};

const actionText = {
  fontSize: '14px',
  color: '#4a5568',
  marginBottom: '16px',
};

const button = {
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
};

const footerText = {
  fontSize: '12px',
  color: '#718096',
  margin: '0',
};

export default AdminContactNotification; 