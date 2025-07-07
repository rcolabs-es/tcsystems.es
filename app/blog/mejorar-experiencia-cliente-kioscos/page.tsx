'use client'

import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowLeft, Share2, CheckCircle, Star, Users, Shield, Zap, Clock as ClockIcon } from 'lucide-react'

export default function MejorarExperienciaClientePage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const postData = {
    title: 'Cómo mejorar la experiencia del cliente con kioscos de autoservicio: ventajas y mejores prácticas',
    excerpt: 'Descubre cómo los kioscos de autoservicio pueden transformar la experiencia del cliente en tu negocio. Ventajas, consejos para su implementación y mejores prácticas para aumentar la satisfacción y eficiencia.',
    image: '/T-COBRO ELYSIUM SIN FONDO (1).webp',
    category: 'Experiencia Cliente',
    date: '2024-12-23',
    readTime: '7 min',
    tags: ['Experiencia Cliente', 'Kioscos', 'Mejores Prácticas', 'Satisfacción', 'Autoservicio']
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
      "@id": "https://tcsystems.es/blog/mejorar-experiencia-cliente-kioscos"
    },
    "keywords": postData.tags.join(', '),
    "articleSection": postData.category,
    "wordCount": 1200,
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
              <span className="inline-flex items-center bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-semibold">
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
                En la era digital, la experiencia del cliente es un factor decisivo para el éxito de cualquier negocio. Los kioscos de autoservicio han revolucionado la forma en que los usuarios interactúan con productos y servicios, facilitando procesos y ahorrando tiempo.
              </p>
              <p className="text-xl text-gray-600 dark:text-zinc-300 leading-relaxed">
                En este artículo exploraremos las principales ventajas de implementar kioscos de autoservicio en tu negocio y te daremos las mejores prácticas para que esta tecnología no solo agilice el proceso de pago, sino que también mejore significativamente la satisfacción de tus clientes.
              </p>
            </div>

            {/* Ventajas */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Ventajas de los kioscos de autoservicio para la experiencia del cliente
              </h2>
              
              <div className="grid gap-6">
                {/* Rapidez y eficiencia */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Rapidez y eficiencia en el pago
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                        Los kioscos permiten transacciones rápidas y sin esperas, reduciendo las colas y tiempos muertos, algo especialmente valioso en sectores como hostelería, parkings o estaciones de servicio.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Autonomía y control */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Autonomía y control para el usuario
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                        El autoservicio ofrece al cliente la posibilidad de gestionar sus pagos o pedidos a su propio ritmo, lo que reduce errores y aumenta la percepción de control y comodidad.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Disponibilidad 24/7 */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <ClockIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Disponibilidad 24/7
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                        Los kioscos funcionan de forma continua, incluso fuera del horario habitual, permitiendo a tus clientes realizar pagos o acceder a servicios en cualquier momento.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interfaz intuitiva */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Interfaz intuitiva y accesible
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                        Gracias a pantallas táctiles fáciles de usar y diseños pensados para todo tipo de usuarios, los kioscos eliminan barreras tecnológicas y facilitan la interacción.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Seguridad en pagos */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Seguridad en los pagos
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                        Sistemas con certificaciones y encriptación avanzada garantizan la seguridad de los datos, lo que genera confianza en los clientes al realizar transacciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mejores prácticas */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Mejores prácticas para maximizar el impacto positivo de los kioscos de autoservicio
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "🎨",
                    title: "Diseño sencillo y claro",
                    description: "Usa interfaces visuales limpias y botones grandes que guíen al usuario paso a paso, minimizando la curva de aprendizaje."
                  },
                  {
                    icon: "🛟",
                    title: "Incluir soporte y ayuda accesible",
                    description: "Incorpora opciones de ayuda en pantalla o asistencia vía audio para usuarios que lo necesiten."
                  },
                  {
                    icon: "🔗",
                    title: "Integración con otros canales de servicio",
                    description: "Permite que los kioscos complementen la atención personal, no que la sustituyan completamente, para cubrir todas las preferencias de tus clientes."
                  },
                  {
                    icon: "🔧",
                    title: "Mantenimiento regular y soporte técnico 24/7",
                    description: "Garantiza el correcto funcionamiento y disponibilidad continua de los kioscos para evitar frustraciones."
                  },
                  {
                    icon: "⚙️",
                    title: "Personalización según el sector y cliente",
                    description: "Ajusta las funcionalidades y servicios del kiosco para responder a las necesidades específicas de tu negocio y tus clientes."
                  }
                ].map((practice, index) => (
                  <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-gray-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{practice.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {practice.title}
                        </h3>
                        <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                          {practice.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Casos de éxito */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Casos de éxito: ¿Qué dicen los clientes de TCSystems?
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Ayuntamiento de Arnedillo
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                        Aumentó la satisfacción ciudadana y <strong className="text-blue-600 dark:text-blue-400">triplicó la eficiencia</strong> en el cobro de tasas municipales gracias a la instalación de kioscos EVO.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        SpeedyWash
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                        Redujo las colas y <strong className="text-green-600 dark:text-green-400">mejoró la experiencia de sus usuarios</strong> con kioscos completos para lavanderías autoservicio.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Cadenas hoteleras premium
                      </h3>
                      <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                        Implementaron terminales Elysium para <strong className="text-purple-600 dark:text-purple-400">agilizar el check-in y el pago</strong>, mejorando la percepción de modernidad y servicio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusión */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Conclusión
              </h2>
              <div className="bg-gradient-to-r from-[#0e9acd]/10 to-blue-500/10 dark:from-[#0e9acd]/20 dark:to-blue-500/20 p-8 rounded-2xl border border-[#0e9acd]/20 dark:border-[#0e9acd]/30">
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed text-lg">
                  Los kioscos de autoservicio no solo automatizan los pagos, sino que representan una inversión estratégica para mejorar la experiencia de tus clientes. Al ofrecer rapidez, autonomía y seguridad, estos sistemas transforman la forma en que interactúan con tu negocio, generando mayor satisfacción y fidelización.
                </p>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed text-lg mt-4">
                  Si buscas implementar kioscos de autoservicio con tecnología avanzada, soporte continuo y soluciones personalizadas, <strong className="text-[#0e9acd]">TCSystems</strong> es tu socio ideal.
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
                ¿Quieres mejorar la experiencia de tus clientes?
              </h3>
              <p className="text-white/90 mb-6">
                Descubre cómo nuestros kioscos de autoservicio pueden transformar tu negocio y aumentar la satisfacción de tus clientes.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center bg-white text-[#0e9acd] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Solicitar consultoría
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  )
} 