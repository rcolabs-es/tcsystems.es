'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { BlogPost, urlFor } from '@/lib/sanity'
import { PortableTextComponents } from '@/components/PortableTextComponents'

interface PostContentProps {
  post: BlogPost
}

export default function PostContent({ post }: PostContentProps) {
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

  const getImageUrl = () => {
    if (post.mainImage?.asset) {
      return urlFor(post.mainImage).width(1200).height(630).url()
    }
    return '/blogImages/blogpost1.jpg'
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": getImageUrl(),
    "datePublished": post.publishedAt,
    "dateModified": post._createdAt,
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
      "@id": `https://tcsystems.es/blog/${post.slug.current}`
    },
    "keywords": post.tags?.join(', '),
    "articleSection": post.category,
    "inLanguage": "es-ES"
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error compartiendo:', err)
      }
    }
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
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                <Tag className="w-4 h-4 mr-1" />
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-zinc-400 space-x-6 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center hover:text-[#0e9acd] transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </button>
            </div>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={getImageUrl()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* Excerpt */}
            <div className="mb-12">
              <p className="text-xl text-gray-600 dark:text-zinc-300 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Main Content */}
            {post.content && (
              <PortableText 
                value={post.content} 
                components={PortableTextComponents}
              />
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 my-12">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="bg-[#0e9acd] p-8 rounded-2xl text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Quieres saber más sobre nuestras soluciones?
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

