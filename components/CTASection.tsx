import Link from "next/link";
import { ArrowRight, Phone, Mail, MessageCircle, Calendar } from "lucide-react";

export default function CTASection() {
  const contactOptions = [
    {
      icon: Phone,
      title: "Llamada directa",
      description: "Habla con un especialista",
      action: "tel:916216237",
      label: "916 216 237"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Escríbenos tus dudas",
      action: "mailto:consultoria@tcsystems.es",
      label: "consultoria@tcsystems.es"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat directo",
      action: "https://wa.me/34677614129",
      label: "Abrir chat"
    },
    {
      icon: Calendar,
      title: "Solicitar presupuesto",
      description: "Solicita información detallada",
      action: "/contacto#presupuesto",
      label: "Solicitar ahora"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-[#0e9acd] to-[#0c7ba3] rounded-3xl p-8 lg:p-16 text-white text-center mb-16 shadow-2xl">
          <h2 className="text-3xl lg:text-6xl font-bold mb-6 leading-tight">
            Automatiza los cobros
            <br />
            <span className="text-white/90">de tu empresa</span>
          </h2>
          <p className="text-lg lg:text-2xl text-white/90 mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Únete a las más de <strong className="text-white">500 empresas</strong> que ya han <strong className="text-white">transformado sus procesos de cobro</strong>. 
            <strong className="text-white">{" "}Consulta</strong> y <strong className="text-white">presupuesto gratuitos</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-8 lg:mb-10">
            <Link
              href="/contacto#presupuesto"
              className="inline-flex items-center justify-center bg-white text-[#0e9acd] px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 group"
            >
              Solicitar presupuesto gratuito
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 ml-2 lg:ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/productos"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-bold text-base lg:text-lg hover:bg-white hover:text-[#0e9acd] transition-all duration-200 hover:scale-105"
            >
              Ver productos
            </Link>
          </div>

          {/* Beneficios - Mejorado para móvil */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 text-white/90 max-w-2xl mx-auto">
            <div className="flex items-center justify-center sm:justify-center">
              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full mr-2 lg:mr-3 animate-pulse flex-shrink-0"></div>
              <span className="font-medium text-sm lg:text-base">Consulta gratuita</span>
            </div>
            <div className="flex items-center justify-center sm:justify-center">
              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full mr-2 lg:mr-3 animate-pulse flex-shrink-0"></div>
              <span className="font-medium text-sm lg:text-base">Presupuesto</span>
            </div>
            <div className="flex items-center justify-center sm:justify-center">
              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full mr-2 lg:mr-3 animate-pulse flex-shrink-0"></div>
              <span className="font-medium text-sm lg:text-base">Respuesta en 24h</span>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option, index) => (
            <Link
              key={index}
              href={option.action}
              className="bg-white dark:bg-[#121214] rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 group border border-gray-200 dark:border-neutral-700 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0e9acd] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <option.icon className="w-8 h-8 text-[#0e9acd] group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{option.title}</h3>
              <p className="text-gray-600 dark:text-zinc-400 mb-4">{option.description}</p>
              <div className="text-[#0e9acd] font-bold group-hover:text-[#0c7ba3] transition-colors">
                {option.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 