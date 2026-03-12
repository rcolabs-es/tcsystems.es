import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-11-06',
  useCdn: false, // Set to false to ensure fresh data in Studio
}

export const sanityClient = createClient(sanityConfig)

// Configurar el generador de URLs de imágenes
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

