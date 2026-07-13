import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import {
  AdminContactNotification,
  UserConfirmation,
  EMAIL_CONFIG,
  generateSubjects,
  type ContactFormData
} from '../../../emails';
import { getDb, hasDb, schema } from '@/lib/db';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      phone,
      company,
      corporateEmail,
      project,
      productName,
      source,
      page,
    } = body;

    // Validar campos requeridos (lastName es opcional: las landings usan un
    // único campo "Nombre completo" que llega en firstName, sin apellidos)
    if (!firstName || !corporateEmail) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(corporateEmail)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Guardar el lead en BD para el panel /admin. Si la BD falla o no está
    // configurada, el flujo de emails sigue funcionando igual que antes.
    if (hasDb()) {
      try {
        await getDb().insert(schema.leads).values({
          type: 'formulario',
          name: [firstName, lastName].filter(Boolean).join(' '),
          email: corporateEmail,
          phone: phone || null,
          company: company || null,
          message: project || null,
          product: productName || null,
          source: source || null,
          page: page || null,
        });
      } catch (dbError) {
        console.error('Error guardando lead en BD:', dbError);
      }
    }

    // Generar emails HTML
    const adminEmailHtml = await render(
      AdminContactNotification({
        firstName,
        lastName,
        phone,
        company,
        corporateEmail,
        project,
        productName,
      })
    );

    const userEmailHtml = await render(
      UserConfirmation({
        firstName,
        lastName,
        productName,
      })
    );

    // Configurar asuntos personalizados
    const subjects = generateSubjects(productName);

    // Enviar email al admin
    const adminEmail = await resend.emails.send({
      from: EMAIL_CONFIG.FROM,
      to: EMAIL_CONFIG.ADMIN_EMAIL,
      subject: subjects.admin,
      html: adminEmailHtml,
      replyTo: corporateEmail,
    });

    // Enviar email de confirmación al usuario
    const userEmail = await resend.emails.send({
      from: EMAIL_CONFIG.FROM,
      to: corporateEmail,
      subject: subjects.user,
      html: userEmailHtml,
    });

    // Verificar que ambos emails se enviaron correctamente
    if (adminEmail.error || userEmail.error) {
      console.error('Error enviando emails:', {
        adminError: adminEmail.error,
        userError: userEmail.error,
      });
      
      return NextResponse.json(
        { error: 'Error al enviar emails' },
        { status: 500 }
      );
    }

    // Log para debug (opcional)
    console.log('Emails enviados exitosamente:', {
      adminEmailId: adminEmail.data?.id,
      userEmailId: userEmail.data?.id,
      contactData: {
        name: `${firstName} ${lastName}`,
        email: corporateEmail,
        company,
        product: productName,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Emails enviados correctamente',
      data: {
        adminEmailId: adminEmail.data?.id,
        userEmailId: userEmail.data?.id,
      },
    });

  } catch (error) {
    console.error('Error en API contact:', error);
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

// Método GET para verificar que la API funciona
export async function GET() {
  return NextResponse.json({
    message: 'API de contacto funcionando correctamente',
    timestamp: new Date().toISOString(),
  });
} 