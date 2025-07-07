'use client'

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      name: "EVO",
      subtitle: "Kioscos de Autoservicio Completos",
      image: "/EVO LATERAL SIN FONDO.webp",
      description: "Sistema integral con admisión de monedas, billetes y tarjetas. Ideal para administraciones públicas.",
      price: "Desde €2,999",
      features: [
        "Admisión de monedas y billetes",
        "Pago con tarjeta integrado",
        "Pantalla táctil 19 pulgadas",
        "Impresora térmica incluida"
      ]
    },
    {
      name: "Prometheus",
      subtitle: "Terminales de Pago Avanzadas",
      image: "/T-Cobro Prometheus.webp",
      description: "Terminal de alta velocidad con sistema de audio. Perfecto para estaciones de servicio y hostelería.",
      price: "Desde €1,999",
      features: [
        "Expendedor de billetes alta velocidad",
        "Sistema de audio integrado",
        "Pago sin contacto",
        "Sistema antivandálico"
      ]
    },
    {
      name: "Elysium",
      subtitle: "Sistemas de Pago Premium",
      image: "/Elysium sin fondo.webp",
      description: "Solución premium para pagos con tarjeta. Diseño elegante para hoteles y comercios de alta gama.",
      price: "Desde €3,499",
      features: [
        "Pago exclusivo con tarjeta",
        "Pantalla táctil 21.5 pulgadas",
        "Diseño elegante y moderno",
        "Instalación rápida"
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-[#121214] overflow-hidden" id="productos">
      {/* Blobs sutiles de fondo */}
      <div className="absolute top-16 right-16 w-72 h-72 bg-gradient-to-br from-[#0e9acd]/6 to-blue-600/6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-br from-[#0e9acd]/4 to-blue-600/4 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-gradient-to-br from-[#0e9acd]/5 to-blue-600/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
            Nuestros Productos
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Soluciones para cada 
            <span className="text-[#0e9acd]"> necesidad</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Desde <strong className="text-gray-900 dark:text-white">kioscos completos</strong> hasta <strong className="text-gray-900 dark:text-white">terminales especializadas</strong>. 
            Encuentra la <strong className="text-[#0e9acd]">solución perfecta</strong> para tu negocio.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-zinc-950 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-zinc-800 hover:shadow-2xl hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-50 dark:bg-[#121214] rounded-2xl mb-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} - TCSystems`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{product.name}</h3>
                  <p className="text-[#0e9acd] font-medium">{product.subtitle}</p>
                </div>

                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{product.description}</p>


                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 space-y-3">
                  <Link
                    href={`/productos/${product.name.toLowerCase()}`}
                    className="w-full bg-[#0e9acd] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#0c7ba3] transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl"
                  >
                    Ver detalles
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contacto"
                    className="w-full border-2 border-[#0e9acd] text-[#0e9acd] py-3 px-6 rounded-xl font-semibold hover:bg-[#0e9acd] hover:text-white transition-all duration-200 flex items-center justify-center"
                  >
                    Solicitar presupuesto
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="bg-gradient-to-r from-[#0e9acd] to-[#0c7ba3] rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            ¿Necesitas algo específico?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Creamos <strong className="text-white">soluciones personalizadas</strong> adaptadas a tu <strong className="text-white">sector y necesidades específicas</strong>.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center bg-white text-[#0e9acd] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 group shadow-lg hover:shadow-xl hover:scale-105"
          >
            Consultar solución personalizada
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
} 