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

  return <PostContent post={post} />
}

