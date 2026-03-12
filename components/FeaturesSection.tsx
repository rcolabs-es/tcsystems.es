import Link from "next/link";
import { ArrowRight, Shield, Clock, Settings, Users, Zap, Award } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Sistemas certificados con los más altos estándares de seguridad y encriptación de datos."
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Soporte técnico continuo y sistemas que funcionan sin interrupciones todo el año."
    },
    {
      icon: Settings,
      title: "Fácil Integración",
      description: "Se adapta a cualquier sistema existente con nuestra API flexible y documentación completa."
    },
    {
      icon: Users,
      title: "Experiencia de Usuario",
      description: "Interfaces intuitivas que cualquier cliente puede usar sin necesidad de formación."
    },
    {
      icon: Zap,
      title: "Procesamiento Rápido",
      description: "Transacciones procesadas en segundos con la más alta velocidad del mercado."
    },
    {
      icon: Award,
      title: "Calidad Probada",
      description: "14 años de experiencia y más de 500 instalaciones exitosas nos avalan."
    }
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Blobs sutiles de fondo */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-[#0e9acd]/7 to-blue-600/7 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-20 w-80 h-80 bg-gradient-to-br from-[#0e9acd]/5 to-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-[#0e9acd]/6 to-blue-600/6 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
            ¿Por qué TCSystems?
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            La elección 
            <span className="text-[#0e9acd]"> inteligente</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Más que un proveedor, somos tu <strong className="text-[#0e9acd]">socio tecnológico</strong> para <strong className="text-gray-900 dark:text-white">automatizar y optimizar</strong> los <strong className="text-gray-900 dark:text-white">procesos de cobro</strong> de tu empresa.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
                              <div className="w-12 h-12 bg-gray-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0e9acd] group-hover:text-white transition-all duration-300">
                <feature.icon className="w-6 h-6 text-[#0e9acd] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 dark:bg-[#121214] rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="text-lg text-gray-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Únete a las más de <strong className="text-[#0e9acd]">500 empresas</strong> que ya han <strong className="text-gray-900 dark:text-white">automatizado sus procesos de cobro</strong> con TCSystems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center bg-[#0e9acd] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0c7ba3] transition-all duration-200 group shadow-lg hover:shadow-xl"
            >
              Solicitar consulta gratuita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center border-2 border-[#0e9acd] text-[#0e9acd] px-8 py-4 rounded-xl font-semibold hover:bg-[#0e9acd] hover:text-white transition-all duration-200"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 