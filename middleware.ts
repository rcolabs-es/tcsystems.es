export { auth as middleware } from '@/auth'

// Solo protege el panel de leads; el resto de la web no pasa por middleware
export const config = {
  matcher: ['/admin/:path*'],
}
