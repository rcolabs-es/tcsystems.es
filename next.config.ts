import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
