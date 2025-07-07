'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Calendar, Clock, Tag, ArrowRight, Filter } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Beneficios de los kioscos de autoservicio para negocios: Ahorro de costes y mejora de la experiencia cliente',
    excerpt: 'Descubre cómo los kioscos de autoservicio automatizan los pagos, reducen costes operativos y mejoran la experiencia del cliente en sectores como hostelería, lavanderías, parkings y estaciones de servicio.',
    content: 'En un mundo donde la automatización y la eficiencia marcan la diferencia, los kioscos de autoservicio se han convertido en una solución tecnológica indispensable para todo tipo de negocios.',
    image: '/blogImages/blogpost1.jpg',
    category: 'Tecnología',
    date: '2024-12-27',
    readTime: '8 min',
    slug: 'beneficios-kioscos-autoservicio',
    featured: true,
    tags: ['Kioscos', 'Autoservicio', 'Ahorro de costes', 'Experiencia cliente']
  },
  {
    id: 2,
    title: 'Guía para elegir el kiosco de autoservicio ideal según el sector de tu negocio',
    excerpt: 'Descubre cómo elegir el kiosco de autoservicio perfecto para tu negocio. Compara kioscos completos, terminales avanzadas y sistemas premium para hostelería, lavanderías, parkings y administraciones públicas.',
    content: 'La automatización de los procesos de cobro es clave para optimizar cualquier negocio moderno. Sin embargo, no todos los kioscos de autoservicio son iguales ni se adaptan a las mismas necesidades.',
    image: '/blogImages/blogpost2.jpg',
    category: 'Guías',
    date: '2024-12-25',
    readTime: '10 min',
    slug: 'guia-elegir-kiosco-autoservicio',
    featured: false,
    tags: ['Guías', 'Kioscos', 'Selección', 'Negocios', 'Sectores']
  },
  {
    id: 3,
    title: 'Cómo mejorar la experiencia del cliente con kioscos de autoservicio: ventajas y mejores prácticas',
    excerpt: 'Descubre cómo los kioscos de autoservicio pueden transformar la experiencia del cliente en tu negocio. Ventajas, consejos para su implementación y mejores prácticas para aumentar la satisfacción y eficiencia.',
    content: 'En la era digital, la experiencia del cliente es un factor decisivo para el éxito de cualquier negocio. Los kioscos de autoservicio han revolucionado la forma en que los usuarios interactúan con productos y servicios.',
    image: '/blogImages/blogpost3.jpg',
    category: 'Experiencia Cliente',
    date: '2024-12-23',
    readTime: '7 min',
    slug: 'mejorar-experiencia-cliente-kioscos',
    featured: false,
    tags: ['Experiencia Cliente', 'Kioscos', 'Mejores Prácticas', 'Satisfacción', 'Autoservicio']
  }
]

export default function BlogPage() {
  // Extraer categorías dinámicamente de los posts existentes
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(blogPosts.map(post => post.category))]
    return ['Todos', ...uniqueCategories.sort()]
  }, [])
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts

    // Filtrar por categoría
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    return filtered
  }, [selectedCategory, searchTerm])

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

  const regularPosts = filteredPosts

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-blue-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm mb-6">
              <Tag className="w-4 h-4 mr-2" />
              Blog TC Systems
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-none">
              Nuestro <span className="text-[#0e9acd]">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Descubre las últimas tendencias, casos de éxito y guías especializadas en 
              <strong className="text-gray-900 dark:text-white"> sistemas de pago automático</strong> y 
              <strong className="text-[#0e9acd]"> tecnología de autoservicio</strong>.
            </p>
          </div>


        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0e9acd] focus:border-transparent text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-500 dark:text-zinc-400 mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#0e9acd] text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600 dark:text-zinc-400">
              {filteredPosts.length === 0 ? (
                'No se encontraron artículos'
              ) : (
                `${filteredPosts.length} ${filteredPosts.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}`
              )}
            </p>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-700 transition-all duration-300 hover:-translate-y-2 group hover:shadow-xl">
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
                      className="inline-flex items-center bg-[#0e9acd] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c87b8] transition-all duration-300 hover:scale-105 group w-full justify-center"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No se encontraron artículos
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 mb-8">
                Intenta con otros términos de búsqueda o selecciona una categoría diferente.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('Todos')
                }}
                className="bg-[#0e9acd] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0c87b8] transition-all duration-300"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
