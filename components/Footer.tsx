import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  ArrowRight,
  Award,
  Users,
  Clock,
  Shield,
} from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Productos",
      links: [
        { name: "EVO - Kioscos Completos", href: "/productos/evo", icon: undefined, isExternal: false },
        { name: "Prometheus - Terminales", href: "/productos/prometheus", icon: undefined, isExternal: false },
        { name: "Elysium - Sistemas Premium", href: "/productos/elysium", icon: undefined, isExternal: false },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "/#empresa", icon: undefined, isExternal: false },
        { name: "Casos de Éxito", href: "/#clientes", icon: undefined, isExternal: false },
        { name: "Contacto", href: "/contacto", icon: undefined, isExternal: false },
      ],
    },
    {
      title: "Social",
      links: [
        { 
          name: "LinkedIn", 
          href: "https://www.linkedin.com/company/tcsystems-grupotcobro/",
          icon: Linkedin,
          isExternal: true 
        },
        { 
          name: "Facebook", 
          href: "https://www.facebook.com/profile.php?id=61572716694969",
          icon: Facebook,
          isExternal: true 
        },
      ],
    },
  ];

  const stats = [
    {
      icon: Award,
      number: "14+",
      label: "Años de experiencia",
      color: "from-[#0e9acd] to-blue-600",
    },
    {
      icon: Users,
      number: "500+",
      label: "Empresas satisfechas",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Soporte técnico",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Shield,
      number: "100%",
      label: "Garantía completa",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-blue-950/30 border-t border-gray-200 dark:border-zinc-800">
      {/* Main Footer */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Company Info - Larger section */}
            <div className="lg:col-span-5">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo.webp"
                  alt="TCSystems"
                  width={50}
                  height={50}
                  className="w-12 h-12 dark:brightness-0 dark:invert"
                />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  TCSystems
                </span>
              </Link>

              <p className="text-lg text-gray-600 dark:text-zinc-300 mb-8 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Líderes en automatización de cobros
                </strong>{" "}
                con más de{" "}
                <strong className="text-[#0e9acd]">
                  14 años de experiencia
                </strong>
                . Transformamos la gestión de pagos de empresas en toda España.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center mr-3 group-hover:bg-[#0e9acd] group-hover:text-white transition-all duration-300">
                      <Phone className="w-5 h-5 text-[#0e9acd] group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Teléfono
                      </div>
                      <Link
                        href="tel:916216237"
                        className="text-[#0e9acd] hover:text-blue-600 font-medium"
                      >
                        916 216 237
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center mr-3 group-hover:bg-[#0e9acd] group-hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5 text-[#0e9acd] group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Email
                      </div>
                      <Link
                        href="mailto:consultoria@tcsystems.es"
                        className="text-[#0e9acd] hover:text-blue-600 font-medium"
                      >
                        consultoria@tcsystems.es
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-gray-200 dark:border-zinc-800 hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#0e9acd]/10 dark:bg-[#0e9acd]/20 rounded-xl flex items-center justify-center mr-3 group-hover:bg-[#0e9acd] group-hover:text-white transition-all duration-300">
                      <MapPin className="w-5 h-5 text-[#0e9acd] group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        Dirección
                      </div>
                      <div className="text-gray-600 dark:text-zinc-400 text-sm">
                        C. Centauro, 15, 28971 Griñón, Madrid
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-7">
              <div className="grid md:grid-cols-3 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                            className="text-gray-600 dark:text-zinc-400 hover:text-[#0e9acd] transition-colors duration-200 flex items-center group"
                          >
                            {link.icon ? (
                              <link.icon className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-all duration-200" />
                            ) : (
                              <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                            )}
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-gradient-to-r from-[#0e9acd] to-[#0c7ba3] rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-2">
                  ¿Listo para automatizar tu negocio?
                </h4>
                <p className="text-white/90 mb-6">
                  Solicita tu presupuesto personalizado.
                </p>
                <Link
                  href="/contacto#presupuesto"
                  className="inline-flex items-center bg-white text-[#0e9acd] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 group"
                >
                  Solicitar presupuesto
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="text-sm text-gray-600 dark:text-zinc-400">
                © 2025 TCSystems. Todos los derechos reservados.
              </div>
              <div className="text-xs text-gray-500 dark:text-zinc-500">
                Desarrollado por{" "}
                <Link
                  href="https://rcolabs.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-zinc-500 hover:text-[#0e9acd] transition-colors duration-200 underline decoration-dotted underline-offset-2"
                >
                  rcolabs.es
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm mt-6 md:mt-0">
              <Link
                href="/legal/aviso-legal"
                className="text-gray-600 dark:text-zinc-400 hover:text-[#0e9acd] transition-colors"
              >
                Aviso Legal
              </Link>
              <Link
                href="/legal/privacidad"
                className="text-gray-600 dark:text-zinc-400 hover:text-[#0e9acd] transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/legal/cookies"
                className="text-gray-600 dark:text-zinc-400 hover:text-[#0e9acd] transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
