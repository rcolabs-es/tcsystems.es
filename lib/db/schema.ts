import {
  pgTable,
  pgEnum,
  uuid,
  text,
  timestamp,
  numeric,
  index,
} from 'drizzle-orm/pg-core'

/**
 * Tipo de lead según el canal de entrada:
 * - formulario: envío de ContactForm o LandingForm (datos completos)
 * - whatsapp:   clic en un enlace wa.me (anónimo, solo página de origen)
 * - llamada:    clic en un enlace tel: (anónimo, solo página de origen)
 */
export const leadTypeEnum = pgEnum('lead_type', [
  'formulario',
  'whatsapp',
  'llamada',
])

/** Ciclo de gestión: nuevo → atendido → ganado/perdido */
export const leadStatusEnum = pgEnum('lead_status', [
  'nuevo',
  'atendido',
  'ganado',
  'perdido',
])

export const leads = pgTable(
  'leads',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    type: leadTypeEnum('type').notNull(),

    // Datos de contacto (solo formularios; los clics son anónimos)
    name: text('name'),
    email: text('email'),
    phone: text('phone'),
    company: text('company'),
    message: text('message'),

    // Atribución
    product: text('product'),
    source: text('source'),
    page: text('page'),

    // Gestión desde el panel
    status: leadStatusEnum('status').notNull().default('nuevo'),
    closedAmount: numeric('closed_amount', { precision: 12, scale: 2 }),
    notes: text('notes'),

    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    index('leads_created_at_idx').on(t.createdAt),
    index('leads_status_idx').on(t.status),
    index('leads_type_idx').on(t.type),
  ]
)

export type Lead = typeof leads.$inferSelect
export type NewLead = typeof leads.$inferInsert
