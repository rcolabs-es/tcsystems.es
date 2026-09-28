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
  data: {
    status: string
    closedAmount: string
    notes: string
    name: string
    phone: string
    email: string
    company: string
  }
): Promise<{ error: string | null }> {
  await requireSession()

  if (!VALID_STATUSES.includes(data.status as LeadStatus)) {
    return { error: 'Estado inválido' }
  }

  // Importe: acepta "12.500,50" o "12500.50"; vacío → null
  let closedAmount: string | null = null
  const rawAmount = data.closedAmount.trim()
  if (rawAmount) {
    const normalized = rawAmount.replace(/\./g, '').replace(',', '.')
    const parsed = Number(normalized)
    if (Number.isNaN(parsed) || parsed < 0) return { error: 'Importe inválido' }
    closedAmount = parsed.toFixed(2)
  }

  // Datos de contacto: permiten identificar clics anónimos (WhatsApp/llamada)
  // cuando el cliente ya ha hablado con la persona, o corregir los de un formulario
  const clean = (v: string, max: number) => v.trim().slice(0, max) || null
  const email = clean(data.email, 200)
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Email inválido' }
  }

  await getDb()
    .update(schema.leads)
    .set({
      status: data.status as LeadStatus,
      closedAmount,
      notes: data.notes.trim() || null,
      name: clean(data.name, 200),
      phone: clean(data.phone, 50),
      email,
      company: clean(data.company, 200),
      updatedAt: new Date(),
    })
    .where(eq(schema.leads.id, id))

  revalidatePath('/admin')
  return { error: null }
}

export async function deleteLead(id: string) {
  await requireSession()
  await getDb().delete(schema.leads).where(eq(schema.leads.id, id))
  revalidatePath('/admin')
}
