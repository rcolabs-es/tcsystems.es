# Migración de Posts a Sanity

Este directorio contiene los datos estructurados de los posts existentes para facilitar su migración a Sanity CMS.

## Archivo de datos

- `posts-data.json`: Contiene los 3 posts actuales del blog con toda su información estructurada

## Cómo migrar los posts

### Opción 1: Manualmente a través de Sanity Studio (Recomendado)

1. Inicia Sanity Studio:
   ```bash
   npm run sanity
   ```

2. Abre `http://localhost:3333` en tu navegador

3. Para cada post en `posts-data.json`:
   - Haz clic en "Create" → "Blog Post"
   - Copia los datos del JSON a los campos correspondientes:
     - **Title**: Copiar el campo `title`
     - **Slug**: Generar a partir del campo `slug`
     - **Excerpt**: Copiar el campo `excerpt`
     - **Category**: Seleccionar el valor de `category`
     - **Tags**: Añadir cada tag del array `tags`
     - **Published At**: Usar la fecha de `publishedAt`
     - **Read Time**: Copiar `readTime`
     - **Featured**: Marcar según el valor de `featured`
     - **Main Image**: Subir la imagen desde `/public` usando `imagePath` como referencia
     - **Content**: Escribir el contenido usando los bloques disponibles (ver secciones)
     - **SEO**: Completar con los datos de `seo`

4. Para el contenido, usar el array `sections`:
   - `type: "intro"` → Bloque de texto normal
   - `type: "h2"` → Encabezado H2
   - `type: "h3"` → Encabezado H3
   - `type: "paragraph"` → Bloque de texto normal
   - `type: "highlightBox"` → Bloque de "Caja de Resaltado" con el estilo y contenido indicado

5. Haz clic en "Publish" para publicar cada post

### Opción 2: Mediante la API de Sanity (Avanzado)

Si prefieres importar los posts programáticamente, puedes crear un script usando el cliente de Sanity:

```javascript
import { sanityClient } from '@/lib/sanity'
import postsData from './posts-data.json'

async function migratePost(postData) {
  // Convertir las secciones en bloques de Portable Text
  const content = postData.sections.map(section => {
    switch (section.type) {
      case 'h2':
        return {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: section.content }]
        }
      case 'paragraph':
        return {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: section.content }]
        }
      case 'highlightBox':
        return {
          _type: 'highlightBox',
          style: section.style,
          title: section.title,
          content: section.content
        }
      default:
        return null
    }
  }).filter(Boolean)

  // Crear el documento en Sanity
  const doc = {
    _type: 'blogPost',
    title: postData.title,
    slug: { current: postData.slug },
    excerpt: postData.excerpt,
    category: postData.category,
    tags: postData.tags,
    publishedAt: postData.publishedAt,
    readTime: postData.readTime,
    featured: postData.featured,
    content: content,
    seo: postData.seo
  }

  await sanityClient.create(doc)
  console.log(`Post migrado: ${postData.title}`)
}

// Migrar todos los posts
async function migrateAll() {
  for (const post of postsData) {
    await migratePost(post)
  }
  console.log('Migración completada')
}

migrateAll()
```

## Notas importantes

1. **Imágenes**: Las imágenes deben subirse manualmente a Sanity Studio desde la carpeta `/public`
2. **Contenido rico**: El contenido puede enriquecerse con más bloques disponibles en Sanity
3. **SEO**: Asegúrate de completar todos los campos de SEO para mejor posicionamiento
4. **Fechas**: Las fechas en el JSON están en formato ISO 8601

## Verificación post-migración

Después de migrar los posts:

1. Verifica que los posts aparezcan en `http://localhost:3000/blog`
2. Comprueba que cada post individual se visualice correctamente
3. Verifica que las imágenes se muestren correctamente
4. Confirma que los filtros por categoría funcionen
5. Prueba la búsqueda con diferentes términos

## Posts a migrar

1. ✅ Beneficios de los kioscos de autoservicio
2. ✅ Guía para elegir el kiosco de autoservicio ideal
3. ✅ Cómo mejorar la experiencia del cliente

