'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react'

export default function BeneficiosKioscosPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const postData = {
    title: 'Beneficios de los kioscos de autoservicio para negocios: Ahorro de costes y mejora de la experiencia cliente',
    excerpt: 'Descubre cómo los kioscos de autoservicio automatizan los pagos, reducen costes operativos y mejoran la experiencia del cliente en sectores como hostelería, lavanderías, parkings y estaciones de servicio.',
    image: '/EVO LATERAL SIN FONDO.webp',
    category: 'Tecnología',
    date: '2024-12-27',
    readTime: '8 min',
    tags: ['Kioscos', 'Autoservicio', 'Ahorro de costes', 'Experiencia cliente']
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
      "@id": "https://tcsystems.es/blog/beneficios-kioscos-autoservicio"
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
            <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
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
          <div className="mb-8">
            <p className="text-xl text-gray-600 dark:text-zinc-300 leading-relaxed">
              En un mundo donde la automatización y la eficiencia marcan la diferencia, los kioscos de autoservicio se han convertido en una solución tecnológica indispensable para todo tipo de negocios. Desde lavanderías hasta estaciones de servicio y administraciones públicas, esta innovación permite agilizar procesos de pago, optimizar recursos y ofrecer una experiencia de usuario superior.
            </p>
            <p className="text-xl text-gray-600 dark:text-zinc-300 leading-relaxed">
              En este artículo exploraremos en detalle los beneficios de los kioscos de autoservicio para negocios, centrándonos en el ahorro de costes, la mejora en la experiencia del cliente y ejemplos reales que demuestran su impacto positivo.
            </p>
          </div>

          {/* ¿Qué es un kiosco de autoservicio? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Qué es un kiosco de autoservicio?
            </h2>
            <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
              Un kiosco de autoservicio es un dispositivo electrónico diseñado para que los clientes realicen pagos y gestiones de forma autónoma, sin necesidad de interacción directa con personal. Equipados con pantallas táctiles, sistemas de pago con tarjeta, billetes y monedas, y funcionalidades personalizadas, estos kioscos son ideales para automatizar el cobro en negocios de diversos sectores.
            </p>
          </section>

          {/* Beneficios clave */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Beneficios clave de implementar kioscos de autoservicio
            </h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  1. Ahorro significativo en costes operativos
                </h3>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                  La instalación de kioscos de autoservicio reduce la dependencia del personal para tareas repetitivas como la recepción de pagos, emisión de tickets o control de acceso. Esto permite a las empresas disminuir gastos en salarios y formación, optimizando la inversión.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Mayor rapidez y eficiencia en las transacciones
                </h3>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Los kioscos permiten procesar pagos en segundos, evitando colas y mejorando la rotación de clientes, especialmente en negocios con alta afluencia, como estaciones de servicio o lavanderías autoservicio.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  3. Disponibilidad 24/7 para los clientes
                </h3>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Al automatizar el proceso de pago, los kioscos pueden operar sin interrupciones, permitiendo que el negocio funcione fuera del horario tradicional, aumentando las ventas y mejorando la satisfacción del cliente.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  4. Reducción de errores y fraudes
                </h3>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Los sistemas automatizados minimizan errores humanos en el manejo de dinero y transacciones. Además, cuentan con sistemas de seguridad avanzados que protegen los datos y evitan manipulaciones.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Mejora en la experiencia de usuario
                </h3>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Las interfaces táctiles intuitivas y la rapidez en la gestión hacen que los clientes perciban el servicio como moderno y cómodo, lo que incrementa la fidelización.
                </p>
              </div>
            </div>
          </section>

          {/* Sectores que se benefician */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Sectores que se benefician de los kioscos de autoservicio
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Hostelería',
                  description: 'Pagos rápidos en restaurantes, bares y hoteles sin esperas ni colas.',
                  icon: '🍽️'
                },
                {
                  title: 'Lavanderías autoservicio',
                  description: 'Control y pago automático para máquinas de lavado y secado.',
                  icon: '🧺'
                },
                {
                  title: 'Parkings',
                  description: 'Gestión de accesos y cobro de tarifas de forma sencilla.',
                  icon: '🚗'
                },
                {
                  title: 'Estaciones de servicio',
                  description: 'Pago automático de combustible y servicios adicionales.',
                  icon: '⛽'
                },
                {
                  title: 'Administraciones públicas',
                  description: 'Cobro de tasas, multas y servicios municipales con mayor eficiencia.',
                  icon: '🏛️'
                }
              ].map((sector, index) => (
                <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-2xl border border-gray-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{sector.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-300 text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Casos reales de éxito */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Casos reales de éxito con TCSystems
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Speedywash
                </h3>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Gracias a nuestros kioscos, esta lavandería autoservicio aumentó sus ingresos en un <strong className="text-blue-600 dark:text-blue-400">40%</strong>, con un sistema que funciona sin interrupciones las 24 horas del día.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Ayuntamiento de Arnedillo
                </h3>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                  La eficiencia en el cobro de tasas municipales se incrementó un <strong className="text-green-600 dark:text-green-400">300%</strong>, mejorando la satisfacción de los ciudadanos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Ballenoil
                </h3>
                <p className="text-gray-600 dark:text-zinc-300 leading-relaxed">
                  Estaciones de servicio que implementaron kioscos avanzados para agilizar pagos y ofrecer una mejor experiencia al cliente.
                </p>
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
                Implementar kioscos de autoservicio es una inversión inteligente para cualquier negocio que busque modernizar sus procesos, reducir costes operativos y ofrecer una experiencia cómoda y eficiente a sus clientes. Con más de 14 años de experiencia y más de 500 instalaciones exitosas, <strong className="text-[#0e9acd]">TCSystems</strong> es el socio tecnológico ideal para llevar tu negocio al siguiente nivel.
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
              ¿Quieres implementar kioscos de autoservicio en tu negocio?
            </h3>
            <p className="text-white/90 mb-6">
              Contacta con nuestro equipo de expertos y descubre cómo podemos ayudarte a modernizar tu negocio.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center bg-white text-[#0e9acd] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </article>
    </div>
    </>
  )
} 