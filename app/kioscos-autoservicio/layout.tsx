import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kioscos de Autoservicio para empresas | TCSystems",
  description:
    "Automatiza cobros, accesos y atención con kioscos hechos en España. 14+ años, 500+ instalaciones, soporte directo. Solicita tu estudio gratuito.",
  keywords: [
    "kioscos autoservicio",
    "kioscos de autoservicio España",
    "automatización de cobros",
    "TPV automático",
    "máquinas de pago automáticas",
    "kioscos para parking",
    "kioscos centros deportivos",
    "kioscos lavadero",
    "fabricante kioscos España",
  ],
  alternates: {
    canonical: "https://tcsystems.es/kioscos-autoservicio",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tcsystems.es/kioscos-autoservicio",
    siteName: "TCSystems",
    title: "Kioscos de Autoservicio para empresas | TCSystems",
    description:
      "Automatiza cobros, accesos y atención con kioscos hechos en España. Estudio gratuito sin compromiso.",
    images: [{ url: "/elysium-plus.png", width: 1200, height: 630, alt: "Kiosco autoservicio Elysium Plus" }],
  },
  robots: { index: true, follow: true },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="[font-family:var(--font-geist-sans),system-ui,sans-serif] antialiased">
      {children}
    </div>
  );
}
