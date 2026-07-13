import { defineConfig } from 'drizzle-kit'

// Ejecutar con `bun run db:push` (bun carga .env automáticamente)
export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
