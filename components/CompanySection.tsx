import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CompanySection() {

  return (
    <section className="relative py-24 bg-white dark:bg-zinc-950 overflow-hidden" id="empresa">
      {/* Blobs sutiles de fondo */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-[#0e9acd]/8 to-blue-600/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#0e9acd]/6 to-blue-600/6 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-[#0e9acd]/4 to-blue-600/4 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
                Sobre TCSystems
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Innovación y 
                <span className="text-[#0e9acd]"> excelencia</span> {" "}
                en automatización
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-zinc-300 leading-relaxed">
                Especializados en la <strong className="text-gray-900 dark:text-white">fabricación y diseño de kioscos autoservicio</strong>. Nuestros conocimientos técnicos en materia de <strong className="text-gray-900 dark:text-white">ingeniería, arquitectura y tecnologías de la información</strong> nos permiten ofrecer un <strong className="text-[#0e9acd]">servicio integral y llave en mano</strong> a nuestros clientes.
              </p>
              
              <p className="hidden md:block text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
                Con más de <strong className="text-[#0e9acd]">14 años de experiencia</strong> en el sector, desarrollamos <strong className="text-gray-900 dark:text-white">soluciones personalizadas</strong> que se adaptan perfectamente a las necesidades específicas de cada negocio. 
              </p>
            </div>
            

            
            <Link
              href="/contacto"
              className="inline-flex items-center bg-[#0e9acd] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0c7ba3] transition-all duration-200 shadow-lg hover:shadow-xl group hover:scale-105"
            >
              Solicitar información
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Images Grid - Reestructurado */}
          <div className="relative space-y-6">
            {/* Imagen principal grande */}
            <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-zinc-900 dark:to-zinc-800 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/twash.tiff"
                alt="Instalación TCSystems - Sistema de cobro automático en funcionamiento"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-xl font-bold">T-Wash</div>
                <div className="text-sm text-white/90">Instalación real de cliente</div>
              </div>

              {/* Logo badge flotante */}
              <div className="absolute top-8 right-8 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-white/20">
                <Image
                  src="/logo.webp"
                  alt="Logo TCSystems"
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Grid de imágenes secundarias - Más grandes */}
            <div className="grid grid-cols-2 gap-6">
              {/* Imagen cliente Hanna */}
              <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                <Image
                  src="/Hanna.webp"
                  alt="Cliente satisfecho TCSystems"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-lg font-semibold">Cliente Satisfecho</div>
                  <div className="text-sm text-white/80">Experiencia positiva</div>
                </div>
              </div>

              {/* Cliente TWash */}
              <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                <Image
                  src="/Speedywash.webp"
                  alt="Cliente TWash - Sistema TCSystems"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-lg font-semibold">Speedywash</div>
                  <div className="text-sm text-white/80">Solución automatizada</div>
                </div>
              </div>
            </div>



            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#0e9acd]/20 to-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#0e9acd]/15 to-blue-600/15 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}