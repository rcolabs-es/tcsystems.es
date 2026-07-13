import { neon } from '@neondatabase/serverless'
import { drizzle, type NeonHttpDatabase } from 'drizzle-orm/neon-http'
import * as schema from './schema'

let _db: NeonHttpDatabase<typeof schema> | null = null

/** True si hay DATABASE_URL configurada (Neon vía Vercel Marketplace). */
export function hasDb(): boolean {
  return Boolean(process.env.DATABASE_URL)
}

/**
 * Conexión lazy a Neon Postgres (HTTP driver, apto para serverless).
 * Lazy para que el build no falle si DATABASE_URL aún no existe.
 */
export function getDb(): NeonHttpDatabase<typeof schema> {
  if (!_db) {
    const url = process.env.DATABASE_URL
    if (!url) throw new Error('DATABASE_URL no está configurada')
    _db = drizzle(neon(url), { schema })
  }
  return _db
}

export { schema }
