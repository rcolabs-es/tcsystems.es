import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

/**
 * Comparación en tiempo constante para no filtrar información
 * por timing en el login del panel.
 */
function safeEqual(a: string, b: string): boolean {
  const enc = new TextEncoder()
  const ba = enc.encode(a)
  const bb = enc.encode(b)
  if (ba.length !== bb.length) return false
  let diff = 0
  for (let i = 0; i < ba.length; i++) diff |= ba[i] ^ bb[i]
  return diff === 0
}

/**
 * Auth del panel de leads (/admin). Usuario único de TCSystems definido
 * en variables de entorno: ADMIN_USER y ADMIN_PASSWORD. Sesión JWT,
 * sin tabla de usuarios.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 },
  pages: { signIn: '/admin/login' },
  providers: [
    Credentials({
      name: 'Credenciales',
      credentials: {
        user: { label: 'Usuario', type: 'text' },
        password: { label: 'Contraseña', type: 'password' },
      },
      authorize(credentials) {
        const user = process.env.ADMIN_USER
        const password = process.env.ADMIN_PASSWORD
        if (!user || !password) return null
        if (
          typeof credentials?.user === 'string' &&
          typeof credentials?.password === 'string' &&
          safeEqual(credentials.user, user) &&
          safeEqual(credentials.password, password)
        ) {
          return { id: 'tcsystems', name: 'TCSystems' }
        }
        return null
      },
    }),
  ],
  callbacks: {
    // Usado por el middleware: exige sesión en /admin salvo en el login
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl
      if (pathname.startsWith('/admin/login')) return true
      return Boolean(auth?.user)
    },
  },
})
