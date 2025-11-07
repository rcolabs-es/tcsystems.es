import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Extracto',
      type: 'text',
      description: 'Breve descripción del artículo',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Tecnología', value: 'Tecnología' },
          { title: 'Casos de Éxito', value: 'Casos de Éxito' },
          { title: 'Guías', value: 'Guías' },
          { title: 'Experiencia Cliente', value: 'Experiencia Cliente' },
          { title: 'Sostenibilidad', value: 'Sostenibilidad' },
          { title: 'Seguridad', value: 'Seguridad' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'readTime',
      title: 'Tiempo de Lectura',
      type: 'string',
      description: 'Ej: "8 min"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      description: 'Marcar si este artículo es destacado',
      initialValue: false,
    },
    {
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Leyenda',
            },
          ],
        },
        {
          name: 'highlightBox',
          title: 'Caja de Resaltado',
          type: 'object',
          fields: [
            {
              name: 'style',
              title: 'Estilo',
              type: 'string',
              options: {
                list: [
                  { title: 'Azul', value: 'blue' },
                  { title: 'Verde', value: 'green' },
                  { title: 'Púrpura', value: 'purple' },
                  { title: 'Rojo', value: 'red' },
                  { title: 'Amarillo', value: 'yellow' },
                ],
              },
            },
            {
              name: 'title',
              title: 'Título',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Contenido',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Título',
          type: 'string',
          description: 'Título para SEO (máx. 60 caracteres)',
          validation: (Rule: any) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Descripción',
          type: 'text',
          description: 'Descripción para SEO (máx. 160 caracteres)',
          validation: (Rule: any) => Rule.max(160),
        },
        {
          name: 'keywords',
          title: 'Palabras Clave',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category: 'category',
    },
    prepare(selection: any) {
      const { title, media, category } = selection
      return {
        title: title,
        subtitle: category,
        media: media,
      }
    },
  },
}

