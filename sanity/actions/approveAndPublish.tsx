import { CheckmarkCircleIcon } from '@sanity/icons'
import { DocumentActionComponent, useDocumentOperation } from 'sanity'
import { useState, useEffect } from 'react'

/**
 * Document Action "Aprobar y publicar":
 *  - Marca el documento como status = 'published'
 *  - Publica el draft (Sanity nativo)
 *
 * Reemplaza al botón nativo "Publish" para los blogPost generados por la
 * automation de n8n, dándole un nombre más explícito al revisor humano.
 */
export const approveAndPublishAction: DocumentActionComponent = (props) => {
  const { id, type, draft, published, onComplete } = props
  const { patch, publish } = useDocumentOperation(id, type)
  const [isPublishing, setIsPublishing] = useState(false)

  useEffect(() => {
    if (isPublishing && !draft) {
      setIsPublishing(false)
      onComplete()
    }
  }, [draft, isPublishing, onComplete])

  // Solo aplicar a blogPost
  if (type !== 'blogPost') return null

  // publish.disabled puede ser boolean o string ("LIVE_EDIT_ENABLED" | "ALREADY_PUBLISHED" |
  // "NO_CHANGES" | "NOT_READY") — cualquier valor truthy bloquea la acción.
  const isDisabled = Boolean(publish.disabled) || isPublishing

  return {
    label: isPublishing ? 'Aprobando…' : 'Aprobar y publicar',
    icon: CheckmarkCircleIcon,
    tone: 'positive',
    disabled: isDisabled,
    onHandle: () => {
      setIsPublishing(true)
      // 1) Marca el doc como aprobado
      patch.execute([{ set: { status: 'published' } }])
      // 2) Publica (mueve drafts.X → X)
      publish.execute()
    },
  }
}
