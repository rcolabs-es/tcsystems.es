'use client'

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 overflow-hidden py-12">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#0e9acd]/20 to-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#0e9acd]/15 to-blue-600/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            <div className="inline-flex items-center bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Más de 500 empresas confían en nosotros
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Kioscos de 
                <span className="bg-clip-text text-[#0e9acd]"> autoservicio</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                <strong className="text-gray-900 dark:text-white">Automatiza los pagos</strong> de tu negocio con nuestras soluciones de <strong className="text-[#0e9acd]">TPV y kioscos de autoservicio</strong>. <strong className="text-[#0e9acd]">14 años de experiencia</strong> respaldándonos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-[#0e9acd] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0c7ba3] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                Solicitar presupuesto
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#productos"
                className="inline-flex items-center justify-center border-2 border-[#0e9acd] text-[#0e9acd] px-8 py-4 rounded-xl font-semibold hover:bg-[#0e9acd] hover:text-white transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver productos
              </Link>
            </div>
            
            {/* Client Logos */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 dark:text-zinc-400 mb-6">Confían en nosotros:</p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
                <div className="flex items-center justify-center h-12 opacity-60 hover:opacity-90 transition-opacity duration-300">
                  <Image
                    src={theme === 'dark' ? "/logosClientes/ayuntamiendo arnedillo blanco.webp" : "/logosClientes/ayuntamiento arnedillo.webp"}
                    alt="Ayuntamiento de Arnedillo"
                    width={100}
                    height={48}
                    className="max-w-full max-h-full object-contain filter grayscale dark:grayscale-0 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 opacity-60 hover:opacity-90 transition-opacity duration-300">
                  <Image
                    src={theme === 'dark' ? "/logosClientes/ballenoil_logo_blanco.webp" : "/logosClientes/ballenoil_logo.webp"}
                    alt="Ballenoil"
                    width={100}
                    height={48}
                    className="max-w-full max-h-full object-contain filter grayscale dark:grayscale-0 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 opacity-60 hover:opacity-90 transition-opacity duration-300">
                  <Image
                    src="/logosClientes/cc las arenas logo.webp"
                    alt="Centro Comercial Las Arenas"
                    width={100}
                    height={48}
                    className="max-w-full max-h-full object-contain filter grayscale dark:grayscale-0 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Image - 1/3 width */}
          <div className="lg:col-span-1 relative">
            <div className="relative">
              <Image
                src="/Elysium sin fondo.webp"
                alt="Sistema de cobro automático TCSystems"
                width={1000}
                height={1500}
                className="w-full h-[40rem] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 