'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowLeft, Share2, CheckCircle, AlertCircle } from 'lucide-react'

export default function GuiaElegirKioscoPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const postData = {
    title: 'Guía para elegir el kiosco de autoservicio ideal según el sector de tu negocio',
    excerpt: 'Descubre cómo elegir el kiosco de autoservicio perfecto para tu negocio. Compara kioscos completos, terminales avanzadas y sistemas premium para hostelería, lavanderías, parkings y administraciones públicas.',
    image: '/T-Cobro Prometheus.webp',
    category: 'Guías',
    date: '2024-12-25',
    readTime: '10 min',
    tags: ['Guías', 'Kioscos', 'Selección', 'Negocios', 'Sectores']
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": postData.title,
    "description": postData.excerpt,
    "image": `https://tcsystems.es${postData.image}`,
    "datePublished": postData.date,
    "dateModified": postData.date,
    "author": {
      "@type": "Organization",
      "name": "TCSystems",
      "url": "https://tcsystems.es"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TCSystems",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tcsystems.es/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://tcsystems.es/blog/guia-elegir-kiosco-autoservicio"
    },
    "keywords": postData.tags.join(', '),
    "articleSection": postData.category,
    "wordCount": 1500,
    "inLanguage": "es-ES"
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        {/* Header */}
        <header className="py-8 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-b border-gray-200 dark:border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-[#0e9acd] hover:text-[#0c87b8] transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al blog
            </Link>
            
            <div className="mb-6">
              <span className="inline-flex items-center bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                <Tag className="w-4 h-4 mr-1" />
                {postData.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              {postData.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-zinc-400 space-x-6 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(postData.date)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {postData.readTime}
              </div>
              <button className="flex items-center hover:text-[#0e9acd] transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            
            {/* Introducción */}
            <div className="mb-12">
              <p className="text-xl text-gray-600 dark:text-zinc-300 leading-relaxed">
                La automatización de los procesos de cobro es clave para optimizar cualquier negocio moderno. Sin embargo, no todos los kioscos de autoservicio son iguales ni se adaptan a las mismas necesidades. Elegir el kiosco correcto puede marcar la diferencia entre una inversión rentable y un sistema ineficiente.
              </p>
              <p className="text-xl text-gray-600 dark:text-zinc-300 leading-relaxed">
                En esta guía, te ayudamos a elegir el kiosco de autoservicio ideal según el sector de tu negocio, explicando las características, ventajas y aplicaciones de cada tipo de solución disponible en TCSystems. Así, podrás tomar una decisión informada que impulse la productividad y la satisfacción de tus clientes.
              </p>
            </div>

            {/* Tipos de kioscos */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Tipos de kioscos de autoservicio que ofrece TCSystems
              </h2>
              
              <div className="space-y-8">
                {/* Kioscos completos */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">1</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Kioscos completos (Ejemplo: EVO)
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Características:</h4>
                          <p className="text-gray-600 dark:text-zinc-300">
                            Admiten monedas, billetes y pagos con tarjeta. Pantalla táctil grande (19 pulgadas) e impresora térmica incluida.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sectores ideales:</h4>
                          <p className="text-gray-600 dark:text-zinc-300">
                            Administraciones públicas, parkings y negocios que requieren procesamiento de múltiples tipos de pago.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ventajas:</h4>
                          <p className="text-gray-600 dark:text-zinc-300">
                            Solución integral para una amplia variedad de pagos y servicios, con alta robustez y facilidad de uso.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terminales avanzadas */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">2</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Terminales de pago avanzadas (Ejemplo: Prometheus)
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Características:</h4>
                          <p className="text-gray-600 dark:text-zinc-300">
                            Alta velocidad en la emisión de billetes, sistema de audio integrado, pagos sin contacto y diseño antivandálico.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sectores ideales:</h4>
                          <p className="text-gray-600 dark:text-zinc-300">
                            Estaciones de servicio, hostelería y puntos con alta afluencia que necesitan rapidez y robustez.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ventajas:</h4>
                          <p className="text-gray-600 dark:text-zinc-300">
                            Perfecto para ambientes exigentes y donde la velocidad es crucial para la rotación de clientes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sistemas premium */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">3</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Sistemas de pago premium (Ejemplo: Elysium)
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Características:</h4>
                          <p className="text-gray-600 dark:text-zinc-300">
                            Pago exclusivo con tarjeta, pantalla táctil de gran tamaño (21.5 pulgadas) y diseño moderno y elegante.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sectores ideales:</h4>
                          <p className="text-gray-600 dark:text-zinc-300">
                            Hoteles, comercios de alta gama y lugares donde la imagen y experiencia premium son esenciales.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ventajas:</h4>
                          <p className="text-gray-600 dark:text-zinc-300">
                            Combina funcionalidad con diseño para atraer a un cliente exigente y mejorar la percepción de marca.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tabla comparativa */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                ¿Cómo elegir el kiosco adecuado según tu sector?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-zinc-600 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-zinc-800">
                      <th className="border border-gray-300 dark:border-zinc-600 p-4 text-left font-semibold text-gray-900 dark:text-white">
                        Sector
                      </th>
                      <th className="border border-gray-300 dark:border-zinc-600 p-4 text-left font-semibold text-gray-900 dark:text-white">
                        Tipo de kiosco recomendado
                      </th>
                      <th className="border border-gray-300 dark:border-zinc-600 p-4 text-left font-semibold text-gray-900 dark:text-white">
                        Consideraciones clave
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        sector: "Administraciones Públicas",
                        kiosco: "Kioscos completos (EVO)",
                        consideraciones: "Debe manejar múltiples tipos de pago y ofrecer servicios oficiales. Seguridad y durabilidad son cruciales."
                      },
                      {
                        sector: "Hostelería",
                        kiosco: "Terminales avanzadas (Prometheus)",
                        consideraciones: "Rapidez en cobros y facilidad de uso para clientes, integración con sistemas de comandas."
                      },
                      {
                        sector: "Estaciones de Servicio",
                        kiosco: "Terminales avanzadas (Prometheus)",
                        consideraciones: "Alta velocidad y resistencia antivandálica para entornos exigentes."
                      },
                      {
                        sector: "Lavanderías autoservicio",
                        kiosco: "Kioscos completos (EVO)",
                        consideraciones: "Pago cómodo con monedas, billetes y tarjetas, operación continua 24/7."
                      },
                      {
                        sector: "Parkings",
                        kiosco: "Kioscos completos (EVO)",
                        consideraciones: "Control de acceso, emisión y cobro de tickets, abonos mensuales."
                      },
                      {
                        sector: "Comercios premium",
                        kiosco: "Sistemas premium (Elysium)",
                        consideraciones: "Diseño atractivo, pago ágil y seguro con tarjeta, instalación rápida."
                      }
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-zinc-800/50">
                        <td className="border border-gray-300 dark:border-zinc-600 p-4 font-medium text-gray-900 dark:text-white">
                          {row.sector}
                        </td>
                        <td className="border border-gray-300 dark:border-zinc-600 p-4 text-[#0e9acd] font-semibold">
                          {row.kiosco}
                        </td>
                        <td className="border border-gray-300 dark:border-zinc-600 p-4 text-gray-600 dark:text-zinc-300">
                          {row.consideraciones}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Factores clave */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Factores clave para tomar la decisión
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "💳",
                    title: "Métodos de pago aceptados",
                    description: "¿Necesitas admitir monedas, billetes, tarjetas o pagos sin contacto?"
                  },
                  {
                    icon: "⚡",
                    title: "Velocidad de procesamiento",
                    description: "Fundamental para negocios con gran flujo de clientes."
                  },
                  {
                    icon: "🔒",
                    title: "Seguridad",
                    description: "Sistemas antivandálicos, encriptación y certificaciones."
                  },
                  {
                    icon: "🔗",
                    title: "Integración",
                    description: "¿Es compatible con tu software o sistemas actuales?"
                  },
                  {
                    icon: "🎨",
                    title: "Diseño y tamaño",
                    description: "Importante para sectores donde la imagen impacta en la experiencia del cliente."
                  },
                  {
                    icon: "🛠️",
                    title: "Soporte técnico",
                    description: "Disponibilidad y rapidez en resolución de incidencias."
                  }
                ].map((factor, index) => (
                  <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-gray-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{factor.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {factor.title}
                        </h3>
                        <p className="text-gray-600 dark:text-zinc-300 text-sm leading-relaxed">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Preguntas frecuentes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Preguntas frecuentes antes de comprar un kiosco de autoservicio
              </h2>
              
              <div className="space-y-4">
                {[
                  "¿Qué mantenimiento requieren estos kioscos?",
                  "¿Puedo personalizar el diseño o la interfaz?",
                  "¿Qué garantías ofrecen y cómo es el soporte técnico?",
                  "¿Es posible integrar el kiosco con mi sistema de gestión actual?",
                  "¿Cuál es el tiempo medio de instalación y puesta en marcha?"
                ].map((question, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl border border-gray-200 dark:border-zinc-700">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-[#0e9acd] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-zinc-300 font-medium">
                        {question}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusión */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Conclusión
              </h2>
              <div className="bg-gradient-to-r from-[#0e9acd]/10 to-blue-500/10 dark:from-[#0e9acd]/20 dark:to-blue-500/20 p-8 rounded-2xl border border-[#0e9acd]/20 dark:border-[#0e9acd]/30">
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed text-lg">
                  Seleccionar el kiosco de autoservicio adecuado según el sector y las necesidades específicas de tu negocio es esencial para maximizar el retorno de inversión y la satisfacción del cliente. <strong className="text-[#0e9acd]">TCSystems</strong> ofrece soluciones personalizadas, con opciones para cada tipo de empresa, que combinan tecnología avanzada, diseño innovador y soporte continuo.
                </p>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed text-lg mt-4">
                  Si quieres asesoramiento para elegir el kiosco perfecto para tu negocio, no dudes en contactar con TCSystems y solicitar una solución adaptada.
                </p>
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {postData.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-[#0e9acd] p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Necesitas ayuda para elegir el kiosco perfecto?
              </h3>
              <p className="text-white/90 mb-6">
                Nuestro equipo de expertos te ayudará a seleccionar la solución ideal para tu sector y necesidades específicas.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center bg-white text-[#0e9acd] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Solicitar asesoramiento
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  )
} 