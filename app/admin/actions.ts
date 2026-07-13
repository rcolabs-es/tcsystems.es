'use server'

import { revalidatePath } from 'next/cache'
import { eq } from 'drizzle-orm'
import { auth } from '@/auth'
import { getDb, schema } from '@/lib/db'

const VALID_STATUSES = ['nuevo', 'atendido', 'ganado', 'perdido'] as const
type LeadStatus = (typeof VALID_STATUSES)[number]

async function requireSession() {
  const session = await auth()
  if (!session?.user) throw new Error('No autorizado')
}

export async function updateLead(
  id: string,
  data: { status: string; closedAmount: string; notes: string }
) {
  await requireSession()

  if (!VALID_STATUSES.includes(data.status as LeadStatus)) {
    throw new Error('Estado inválido')
  }

  // Importe: acepta "12.500,50" o "12500.50"; vacío → null
  let closedAmount: string | null = null
  const rawAmount = data.closedAmount.trim()
  if (rawAmount) {
    const normalized = rawAmount.replace(/\./g, '').replace(',', '.')
    const parsed = Number(normalized)
    if (Number.isNaN(parsed) || parsed < 0) throw new Error('Importe inválido')
    closedAmount = parsed.toFixed(2)
  }

  await getDb()
    .update(schema.leads)
    .set({
      status: data.status as LeadStatus,
      closedAmount,
      notes: data.notes.trim() || null,
      updatedAt: new Date(),
    })
    .where(eq(schema.leads.id, id))

  revalidatePath('/admin')
}

export async function deleteLead(id: string) {
  await requireSession()
  await getDb().delete(schema.leads).where(eq(schema.leads.id, id))
  revalidatePath('/admin')
}
