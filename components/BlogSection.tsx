'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Beneficios de los kioscos de autoservicio para negocios: Ahorro de costes y mejora de la experiencia cliente',
    excerpt: 'Descubre cómo los kioscos de autoservicio automatizan los pagos, reducen costes operativos y mejoran la experiencia del cliente en sectores como hostelería, lavanderías, parkings y estaciones de servicio.',
    image: '/blogImages/blogpost1.jpg',
    category: 'Tecnología',
    date: '2024-12-27',
    readTime: '8 min',
    slug: 'beneficios-kioscos-autoservicio',
    featured: true
  },
  {
    id: 2,
    title: 'Guía para elegir el kiosco de autoservicio ideal según el sector de tu negocio',
    excerpt: 'Descubre cómo elegir el kiosco de autoservicio perfecto para tu negocio. Compara kioscos completos, terminales avanzadas y sistemas premium para hostelería, lavanderías, parkings y administraciones públicas.',
    image: '/blogImages/blogpost2.jpg',
    category: 'Guías',
    date: '2024-12-25',
    readTime: '10 min',
    slug: 'guia-elegir-kiosco-autoservicio',
    featured: false
  },
  {
    id: 3,
    title: 'Cómo mejorar la experiencia del cliente con kioscos de autoservicio: ventajas y mejores prácticas',
    excerpt: 'Descubre cómo los kioscos de autoservicio pueden transformar la experiencia del cliente en tu negocio. Ventajas, consejos para su implementación y mejores prácticas para aumentar la satisfacción y eficiencia.',
    image: '/blogImages/blogpost3.jpg',
    category: 'Experiencia Cliente',
    date: '2024-12-23',
    readTime: '7 min',
    slug: 'mejorar-experiencia-cliente-kioscos',
    featured: false
  }
]

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const cardsToShow = isMobile ? 1 : 3
  const maxIndex = Math.max(0, blogPosts.length - cardsToShow)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) return 0
        return prevIndex + 1
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) return 0
      return prevIndex + 1
    })
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) return maxIndex
      return prevIndex - 1
    })
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
    setIsAutoPlaying(false)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Tecnología': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Casos de Éxito': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Guías': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Experiencia Cliente': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      'Sostenibilidad': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
      'Seguridad': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
    }
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
  }

  const getTransformPercentage = () => {
    if (isMobile) {
      return currentIndex * 100 // 100% por cada slide en móvil
    } else {
      return currentIndex * 33.333 // 33.333% por cada slide en desktop (1/3)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 dark:from-zinc-950 dark:to-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm mb-8">
            <Tag className="w-4 h-4 mr-2" />
            Blog & Noticias
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Últimas <span className="text-[#0e9acd]">noticias</span> del sector
          </h2>
          <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Mantente al día con las últimas tendencias, casos de éxito y novedades 
            en sistemas de pago automático y tecnología de autoservicio.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 mb-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center text-gray-600 dark:text-zinc-300 hover:text-[#0e9acd] dark:hover:text-[#0e9acd] transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-zinc-700"
            aria-label="Artículo anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center text-gray-600 dark:text-zinc-300 hover:text-[#0e9acd] dark:hover:text-[#0e9acd] transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-zinc-700"
            aria-label="Siguiente artículo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-4">
          {/* Main Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${getTransformPercentage()}%)` }}
            >
              {blogPosts.map((post, index) => (
                <div key={post.id} className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 ${isMobile ? 'px-2' : 'pr-6 last:pr-0'}`}>
                  <div className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-700 transition-all duration-300 hover:-translate-y-2 group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-[#0e9acd] text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Destacado
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-zinc-400 mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-zinc-300 mb-6 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center bg-[#0e9acd] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c87b8] transition-all duration-300 hover:scale-105 group"
                      >
                        Leer más
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#0e9acd] w-8'
                  : 'bg-gray-300 dark:bg-zinc-600 hover:bg-gray-400 dark:hover:bg-zinc-500'
              }`}
              aria-label={`Ir al grupo ${index + 1} de artículos`}
            />
          ))}
        </div>

        {/* View All Blog Link */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#0e9acd] hover:text-[#0c87b8] font-semibold text-lg transition-colors duration-300 group"
          >
            Ver todos los artículos
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
} 