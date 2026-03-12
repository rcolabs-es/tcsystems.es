import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PostContent from './PostContent'
import { getAllPosts, getPostBySlug } from '@/lib/sanity'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post no encontrado | TCSystems',
    }
  }

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt
  const keywords = post.seo?.keywords?.join(', ') || post.tags?.join(', ')

  return {
    title: `${title} | TCSystems Blog`,
    description,
    keywords,
    authors: [{ name: 'TCSystems' }],
    creator: 'TCSystems',
    publisher: 'TCSystems',
    openGraph: {
      title,
      description,
      url: `https://tcsystems.es/blog/${slug}`,
      siteName: 'TCSystems',
      locale: 'es_ES',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post._createdAt,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://tcsystems.es/blog/${slug}`,
    },
  }
}

export const revalidate = 60 // Revalidar cada 60 segundos

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Structured Data (JSON-LD) para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage ? `https://tcsystems.es${post.mainImage}` : 'https://tcsystems.es/logo.webp',
    datePublished: post.publishedAt,
    dateModified: post._createdAt,
    author: {
      '@type': 'Organization',
      name: 'TCSystems',
      url: 'https://tcsystems.es',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TCSystems',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tcsystems.es/logo.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tcsystems.es/blog/${slug}`,
    },
    keywords: post.seo?.keywords?.join(', ') || post.tags?.join(', '),
    articleSection: post.category,
    inLanguage: 'es-ES',
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostContent post={post} />
    </>
  )
}

