'use client';

import { useState } from 'react';
import { Send, User, Mail, Phone, Building, Users, FileText } from 'lucide-react';
import Link from 'next/link';

interface ContactFormProps {
  productName?: string;
}

export default function ContactForm({ productName }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    corporateEmail: '',
    project: '',
    privacyPolicy: false,
    dataProcessing: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        company: '',
        corporateEmail: '',
        project: '',
        privacyPolicy: false,
        dataProcessing: false
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-zinc-950 rounded-2xl p-8 border border-gray-200 dark:border-zinc-800 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          ¡Mensaje enviado!
        </h3>
        <p className="text-gray-600 dark:text-zinc-400">
          Gracias por tu interés{productName ? ` en ${productName}` : ''}. 
          Nos pondremos en contacto contigo muy pronto.
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