'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const navigation = [
    { name: "Empresa", href: "/#empresa" },
    { name: "Productos", href: "/#productos", hasDropdown: true },
    { name: "Clientes", href: "/#clientes" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" }
  ];

  const products = [
    {
      name: "EVO",
      href: "/productos/evo",
      description: "Kiosco de Autoservicio",
      image: "/EVO LATERAL SIN FONDO.webp"
    },
    {
      name: "Prometheus",
      href: "/productos/prometheus", 
      description: "Terminal de Pago Avanzado",
      image: "/T-Cobro Prometheus.webp"
    },
    {
      name: "Elysium",
      href: "/productos/elysium",
      description: "Terminal de Pago Premium", 
      image: "/Elysium sin fondo.webp"
    }
  ];

  return (
    <header className="bg-white/85 dark:bg-zinc-950/60 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-50 backdrop-blur-2xl">
      {/* Top bar */}
      <div className="hidden md:block bg-gray-50 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600 dark:text-zinc-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>916 216 237</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-zinc-400">
                <Mail className="w-4 h-4 mr-2" />
                <span>consultoria@tcsystems.es</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-gray-600 dark:text-zinc-400">
              <span>Soporte 24/7</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="TCSystems"
              width={60}
              height={60}
              className="w-20 h-20 dark:brightness-0 dark:invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 pt-2 w-80 z-50">
                        <div className="bg-white dark:bg-zinc-950 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-800 p-6">
                        <div className="space-y-4">
                          {products.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="flex items-center p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors duration-200 group"
                            >
                              <div className="w-12 h-12 bg-gray-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  width={48}
                                  height={48}
                                  className="w-8 h-8 object-contain"
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#0e9acd] transition-colors">
                                  {product.name}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-zinc-400">
                                  {product.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-zinc-800">
                            <Link
                              href="/productos"
                              className="text-[#0e9acd] hover:text-blue-600 font-medium text-sm transition-colors"
                            >
                              Ver todos los productos →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
                          <Link
                href="/contacto"
                className="bg-[#0e9acd] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0c7ba3] transition-colors duration-200"
              >
                Solicitar presupuesto
              </Link>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white font-medium py-2 transition-colors duration-200 flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="flex items-center py-2 text-gray-500 dark:text-zinc-500 hover:text-[#0e9acd] transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="w-8 h-8 bg-gray-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={32}
                              height={32}
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{product.name}</div>
                            <div className="text-xs">{product.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                                  <Link
                    href="/contacto"
                    className="bg-[#0e9acd] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0c7ba3] transition-colors duration-200 text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Solicitar presupuesto
                  </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 