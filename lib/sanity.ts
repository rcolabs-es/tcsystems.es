import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-11-06',
  useCdn: false, // Set to false for Studio to see real-time updates
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Tipos para los posts del blog
export interface BlogPost {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  mainImage?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: string
  featured: boolean
  content: any[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

// Queries para obtener posts
export async function getAllPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    tags,
    publishedAt,
    readTime,
    featured,
    seo
  }`
  
  return await sanityClient.fetch(query)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    tags,
    publishedAt,
    readTime,
    featured,
    content,
    seo
  }`
  
  return await sanityClient.fetch(query, { slug })
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && featured == true] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    tags,
    publishedAt,
    readTime,
    featured,
    seo
  }`
  
  return await sanityClient.fetch(query)
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost" && category == $category] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    tags,
    publishedAt,
    readTime,
    featured,
    seo
  }`
  
  return await sanityClient.fetch(query, { category })
}

export async function getAllCategories(): Promise<string[]> {
  const query = `*[_type == "blogPost"] | order(category asc) {
    category
  }`
  
  const posts = await sanityClient.fetch(query)
  const categories = [...new Set(posts.map((post: any) => post.category))]
  return categories
}

