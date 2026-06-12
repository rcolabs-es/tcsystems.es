import type { Metadata } from "next";
import { Inter, Fraunces, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ConditionalLayout from "@/components/ConditionalLayout";

const inter = Inter({ subsets: ["latin"] });

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tcsystems.es'),
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
    url: "https://www.tcsystems.es",
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
    canonical: "https://www.tcsystems.es"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${fraunces.variable} ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
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
              "url": "https://www.tcsystems.es",
              "logo": "https://www.tcsystems.es/logo.webp",
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
                    "url": "https://www.tcsystems.es/productos/evo",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "EUR",
                      "valueAddedTaxIncluded": false
                    },
                    "availability": "https://schema.org/InStock",
                    "areaServed": { "@type": "Country", "name": "España" },
                    "seller": { "@type": "Organization", "name": "TCSystems" },
                    "itemOffered": {
                      "@type": "Service",
                      "name": "EVO - Kioscos de Autoservicio",
                      "description": "Sistema integral de cobro automático con admisión de monedas, billetes y tarjetas",
                      "provider": { "@type": "Organization", "name": "TCSystems" }
                    }
                  },
                  {
                    "@type": "Offer",
                    "url": "https://www.tcsystems.es/productos/prometheus",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "EUR",
                      "valueAddedTaxIncluded": false
                    },
                    "availability": "https://schema.org/InStock",
                    "areaServed": { "@type": "Country", "name": "España" },
                    "seller": { "@type": "Organization", "name": "TCSystems" },
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Prometheus - Terminales de Pago",
                      "description": "Terminal de alta velocidad con expendedor de billetes y sistema de audio",
                      "provider": { "@type": "Organization", "name": "TCSystems" }
                    }
                  },
                  {
                    "@type": "Offer",
                    "url": "https://www.tcsystems.es/productos/elysium",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "EUR",
                      "valueAddedTaxIncluded": false
                    },
                    "availability": "https://schema.org/InStock",
                    "areaServed": { "@type": "Country", "name": "España" },
                    "seller": { "@type": "Organization", "name": "TCSystems" },
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Elysium - Sistemas Premium",
                      "description": "Solución premium enfocada en pagos con tarjeta y sistemas sin contacto",
                      "provider": { "@type": "Organization", "name": "TCSystems" }
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-gray-900 dark:text-white transition-colors duration-300`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18233086137"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18233086137');
          `}
        </Script>
        <ThemeProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
