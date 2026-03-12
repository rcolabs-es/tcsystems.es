import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mueve el cache de build al disco local para evitar problemas con ExFAT
  distDir: '/tmp/tcsystems-next',
  eslint: {
    // Desactiva ESLint durante el build en producción
    ignoreDuringBuilds: true,
  },
  typescript: {
    // También ignora errores de TypeScript durante el build si es necesario
    ignoreBuildErrors: false,
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
