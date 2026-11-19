'use client';

import { useState } from 'react';
import { Send, User, Mail, Phone, Building, Users, FileText, Code, MapPin, Hash } from 'lucide-react';
import Link from 'next/link';
import { fireLeadConversion } from './landing/conversion';

interface ContactFormProps {
  productName?: string;
  /**
   * Muestra campos extra para empresas de software / integradores
   * (tipo de software, sector, nº de instalaciones). Se envían dentro del
   * mensaje, así que no requieren cambios en /api/contact ni en la BD.
   */
  integratorFields?: boolean;
}

const SECTOR_OPTIONS = [
  'Gasolineras / estaciones desatendidas',
  'Ayuntamientos / administración pública',
  'Lavaderos / lavanderías',
  'Hostelería',
  'Retail',
  'Parkings',
  'Control de accesos',
  'Varios sectores',
  'Otro',
];

const INSTALLATIONS_OPTIONS = ['1-10', '11-50', '51-200', 'Más de 200', 'Aún no lo sé'];

const initialFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  company: '',
  corporateEmail: '',
  project: '',
  softwareType: '',
  sector: '',
  installations: '',
  privacyPolicy: false,
  dataProcessing: false
};

export default function ContactForm({ productName, integratorFields = false }: ContactFormProps) {
  const [formData, setFormData] = useState(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar que los checkboxes obligatorios estén marcados
    if (!formData.privacyPolicy || !formData.dataProcessing) {
      alert('Debes aceptar la política de privacidad y el procesamiento de datos para continuar.');
      return;
    }
    
    setIsSubmitting(true);

    // Campos de integrador: se anteponen al mensaje para que lleguen al email
    // del admin y al panel de leads sin tocar la API.
    const integratorLines = integratorFields
      ? [
          formData.softwareType && `Tipo de software: ${formData.softwareType}`,
          formData.sector && `Sector: ${formData.sector}`,
          formData.installations && `Instalaciones aprox.: ${formData.installations}`,
        ].filter(Boolean)
      : [];
    const project = integratorLines.length
      ? [...integratorLines, '', formData.project].join('\n').trim()
      : formData.project;
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          company: formData.company,
          corporateEmail: formData.corporateEmail,
          project,
          productName: productName,
          source: 'web',
          page: window.location.pathname,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el formulario');
      }

      // GA4 generate_lead + conversión de Google Ads (+ enhanced conversions con email/teléfono)
      fireLeadConversion({
        product: productName ?? 'general',
        email: formData.corporateEmail,
        phone: formData.phone,
      });

      // Éxito - mostrar mensaje de confirmación
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData(initialFormData);
      }, 5000);

    } catch (error) {
      console.error('Error enviando formulario:', error);
      alert('Error al enviar el formulario. Por favor, inténtalo de nuevo o contacta directamente a consultoria@tcsystems.es');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 border border-gray-200 dark:border-zinc-800 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          ¡Solicitud enviada con éxito!
        </h3>
        <p className="text-gray-600 dark:text-zinc-400 mb-4">
          Gracias por tu interés{productName ? ` en ${productName}` : ''}. 
          Hemos recibido tu solicitud y te hemos enviado un email de confirmación.
        </p>
        <p className="text-sm text-gray-500 dark:text-zinc-500">
          <strong>Próximos pasos:</strong> Nos pondremos en contacto contigo dentro de las próximas 24 horas para ayudarte con tu proyecto.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 border border-gray-200 dark:border-zinc-800">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Solicitar Información{productName ? ` sobre ${productName}` : ''}
        </h3>
        <p className="text-gray-600 dark:text-zinc-400">
          Completa el formulario y te contactaremos en menos de 24 horas
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
              Nombre
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-[#0e9acd] focus:border-transparent bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                placeholder="Tu nombre"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
              Apellidos
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-[#0e9acd] focus:border-transparent bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                placeholder="Tus apellidos"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
            Teléfono
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-[#0e9acd] focus:border-transparent bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
              placeholder="+34 600 000 000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
            Empresa
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-[#0e9acd] focus:border-transparent bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
              placeholder="Nombre de tu empresa"
            />
          </div>
        </div>

        <div>
          <label htmlFor="corporateEmail" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
            Email corporativo *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="corporateEmail"
              name="corporateEmail"
              required
              value={formData.corporateEmail}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-[#0e9acd] focus:border-transparent bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
              placeholder="tu@empresa.com"
            />
          </div>
        </div>

        {integratorFields && (
          <>
            <div>
              <label htmlFor="softwareType" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                Tipo de software
              </label>
              <div className="relative">
                <Code className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="softwareType"
                  name="softwareType"
                  value={formData.softwareType}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-[#0e9acd] focus:border-transparent bg-white dark:bg-zinc-900 text-gray-900 dark:text-white"
                  placeholder="ERP, TPV, cita previa, control de accesos..."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Sector
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-[#0e9acd] focus:border-transparent bg-white dark:bg-zinc-900 text-gray-900 dark:text-white appearance-none"
                  >
                    <option value="">Selecciona un sector</option>
                    {SECTOR_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="installations" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
                  Nº aprox. de instalaciones
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    id="installations"
                    name="installations"
                    value={formData.installations}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-[#0e9acd] focus:border-transparent bg-white dark:bg-zinc-900 text-gray-900 dark:text-white appearance-none"
                  >
                    <option value="">Selecciona un rango</option>
                    {INSTALLATIONS_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </>
        )}

        <div>
          <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
            Cuéntanos brevemente tu proyecto
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              id="project"
              name="project"
              rows={4}
              value={formData.project}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-zinc-600 rounded-xl focus:ring-2 focus:ring-[#0e9acd] focus:border-transparent bg-white dark:bg-zinc-900 text-gray-900 dark:text-white resize-none"
              placeholder="Describe tu proyecto, necesidades, sector de actividad, número aproximado de usuarios..."
            />
          </div>
        </div>

        {/* Checkboxes obligatorios */}
        <div className="space-y-6 pt-6 border-t border-gray-200 dark:border-zinc-700">
          <div className="flex items-start space-x-3">
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                required
                className="sr-only"
              />
              <div 
                className={`w-5 h-5 rounded-sm border-2 transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  formData.privacyPolicy 
                    ? 'bg-[#0e9acd] border-[#0e9acd]' 
                    : 'bg-white dark:bg-zinc-900 border-gray-300 dark:border-zinc-600 hover:border-[#0e9acd]'
                }`}
                onClick={() => handleChange({ target: { name: 'privacyPolicy', type: 'checkbox', checked: !formData.privacyPolicy } } as any)}
              >
                {formData.privacyPolicy && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <label htmlFor="privacyPolicy" className="text-sm text-gray-700 dark:text-zinc-300 leading-relaxed cursor-pointer">
              <span className="font-semibold text-gray-900 dark:text-white">Política de privacidad *</span>
              <br />
              Acepto los{' '}
              <Link 
                href="/legal/terminos" 
                className="text-[#0e9acd] hover:text-[#0c87b8] underline font-medium transition-colors"
                target="_blank"
              >
                términos y condiciones de uso
              </Link>
              {' '}y la{' '}
              <Link 
                href="/legal/privacidad" 
                className="text-[#0e9acd] hover:text-[#0c87b8] underline font-medium transition-colors"
                target="_blank"
              >
                política de privacidad
              </Link>
              .
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                id="dataProcessing"
                name="dataProcessing"
                checked={formData.dataProcessing}
                onChange={handleChange}
                required
                className="sr-only"
              />
              <div 
                className={`w-5 h-5 rounded-sm border-2 transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  formData.dataProcessing 
                    ? 'bg-[#0e9acd] border-[#0e9acd]' 
                    : 'bg-white dark:bg-zinc-900 border-gray-300 dark:border-zinc-600 hover:border-[#0e9acd]'
                }`}
                onClick={() => handleChange({ target: { name: 'dataProcessing', type: 'checkbox', checked: !formData.dataProcessing } } as any)}
              >
                {formData.dataProcessing && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <label htmlFor="dataProcessing" className="text-sm text-gray-700 dark:text-zinc-300 leading-relaxed cursor-pointer">
              <span className="font-semibold text-gray-900 dark:text-white">Procesamiento de datos *</span>
              <br />
              Doy mi consentimiento para el tratamiento de los datos de mi perfil según nuestra{' '}
              <Link 
                href="/legal/privacidad" 
                className="text-[#0e9acd] hover:text-[#0c87b8] underline font-medium transition-colors"
                target="_blank"
              >
                política de privacidad
              </Link>
              .
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !formData.privacyPolicy || !formData.dataProcessing}
          className="w-full bg-[#0e9acd] text-white py-4 px-8 rounded-xl font-semibold hover:bg-[#0c87b8] hover:shadow-lg hover:shadow-[#0e9acd]/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Solicitar Información
            </>
          )}
        </button>
      </form>
    </div>
  );
} 