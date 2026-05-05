import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { esESLocale } from '@sanity/locale-es-es'
import { approveAndPublishAction } from './sanity/actions/approveAndPublish'

export default defineConfig({
  name: 'default',
  title: 'TCSystems Blog',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('🟡 Pendientes de revisión')
              .schemaType('blogPost')
              .child(
                S.documentList()
                  .title('Pendientes de revisión')
                  .filter('_type == "blogPost" && status == "pending_review"')
              ),
            S.listItem()
              .title('🟢 Publicados')
              .schemaType('blogPost')
              .child(
                S.documentList()
                  .title('Publicados')
                  .filter('_type == "blogPost" && status == "published"')
              ),
            S.divider(),
            S.documentTypeListItem('blogPost').title('Todos los posts'),
          ]),
    }),
    visionTool(),
    esESLocale(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Reemplaza el botón "Publish" nativo por "Aprobar y publicar" en blogPost
    actions: (prev, context) => {
      if (context.schemaType !== 'blogPost') return prev
      return prev.map((originalAction) =>
        originalAction.action === 'publish' ? approveAndPublishAction : originalAction
      )
    },
  },

  // Configuración para ver datos en tiempo real
  apiVersion: '2024-11-06',
  useCdn: false,
})

