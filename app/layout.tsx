import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import ConditionalLayout from "@/components/ConditionalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tcsystems.es'),
  title: "TCSystems - Kioscos de Autoservicio | Líderes en España",
  description: "Empresa española líder en sistemas de cobro automático, máquinas de pago automáticas y kioscos de autoservicio. Más de 14 años desarrollando soluciones de TPV automático y kioscos de autoservicio para empresas. Automatización de cobros con soporte 24/7 en toda España.",
  keywords: [
    // Palabras clave principales
    "sistemas de cobro automático",
    "máquinas de pago automáticas", 
    "automatización de cobros",
    "kioscos de autoservicio",
    "sistemas de autoservicio",
    "soluciones de pago sin contacto",
    "pago automatizado para negocios",
    "TPV automático",
    "máquinas de cobro para empresas",
    "sistemas de cobro para tiendas",
    
    // Palabras clave geolocalizadas
    "soluciones de cobro automático en España",
    "máquinas de autoservicio para empresas en España", 
    "proveedor nacional de sistemas de pago",
    "empresa española de automatización de cobros",
    
    // Palabras clave por sectores
    "sistemas de cobro para lavanderías",
    "soluciones de autoservicio para estaciones de servicio",
    "cobro automático en tiendas 24h",
    "kioscos de pago para hostelería",
    
    // Marca y productos
    "TCSystems",
    "EVO kioscos",
    "Prometheus terminales",
    "Elysium sistemas premium"
  ],
  authors: [{ name: "TCSystems" }],
  creator: "TCSystems",
  publisher: "TCSystems",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tcsystems.es",
    siteName: "TCSystems",
    title: "TCSystems - Sistemas de Cobro Automático | Líderes en España",
    description: "Empresa española líder en sistemas de cobro automático. Más de 14 años desarrollando soluciones de automatización de cobros para empresas en toda España.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "TCSystems - Sistemas de Cobro Automático"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TCSystems - Sistemas de Cobro Automático",
    description: "Líderes en automatización de cobros en España. Soluciones de TPV automático y kioscos de autoservicio.",
    images: ["/logo.webp"]
  },
  alternates: {
    canonical: "https://tcsystems.es"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tcsystems.es" />
        <meta name="geo.region" content="ES" />
        <meta name="geo.country" content="Spain" />
        <meta name="geo.placename" content="España" />
        <meta name="ICBM" content="40.4168, -3.7038" />
        <meta name="format-detection" content="telephone=yes" />
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TCSystems",
              "description": "Empresa española líder en sistemas de cobro automático y automatización de cobros",
              "url": "https://tcsystems.es",
              "logo": "https://tcsystems.es/logo.webp",
              "foundingDate": "2010",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ES",
                "addressLocality": "Madrid",
                "addressRegion": "Madrid"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34-900-123-456",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              },
              "sameAs": [
                "https://www.linkedin.com/company/tcsystems-grupotcobro/"              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Sistemas de Cobro Automático",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "EVO - Kioscos de Autoservicio",
                      "description": "Sistema integral de cobro automático con admisión de monedas, billetes y tarjetas"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Prometheus - Terminales de Pago",
                      "description": "Terminal de alta velocidad con expendedor de billetes y sistema de audio"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product", 
                      "name": "Elysium - Sistemas Premium",
                      "description": "Solución premium enfocada en pagos con tarjeta y sistemas sin contacto"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <GoogleAnalytics gaId="G-FTNY37SJ4W" />
          <ConditionalLayout>{children}</ConditionalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
