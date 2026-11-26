import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Desactiva ESLint durante el build en producción
    ignoreDuringBuilds: true,
  },
  typescript: {
    // También ignora errores de TypeScript durante el build si es necesario
    ignoreBuildErrors: false,
  },
  // Informes de cliente: accesibles por enlace pero fuera de buscadores
  async headers() {
    return [
      {
        source: '/informes/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
