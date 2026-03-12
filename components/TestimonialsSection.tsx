"use client"
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function TestimonialsSection() {
  const { theme } = useTheme();

  const clientLogos = [
    {
      name: 'Ayuntamiento de Arnedillo',
      logo: theme === 'dark' ? '/logosClientes/ayuntamiendo arnedillo blanco.webp' : '/logosClientes/ayuntamiento arnedillo.webp',
      alt: 'Ayuntamiento de Arnedillo'
    },
    {
      name: 'Ayuntamiento de Tortosa',
      logo: '/logosClientes/ayuntamiento tortosa logo.webp',
      alt: 'Ayuntamiento de Tortosa'
    },
    {
      name: 'Ballenoil',
      logo: theme === 'dark' ? '/logosClientes/ballenoil_logo_blanco.webp' : '/logosClientes/ballenoil_logo.webp',
      alt: 'Ballenoil'
    },
    {
      name: 'CC Las Arenas',
      logo: '/logosClientes/cc las arenas logo.webp',
      alt: 'Centro Comercial Las Arenas'
    },
    {
      name: 'Cuartel General del Aire',
      logo: '/logosClientes/cuartel general del aire logo.webp',
      alt: 'Cuartel General del Aire'
    },
    {
      name: 'Deza',
      logo: '/logosClientes/LOGO-DEZA-plano_RGB_1200x628_facebook.webp',
      alt: 'Deza'
    },
    {
      name: 'Grupo Ruiz',
      logo: '/logosClientes/grupo ruiz logo.webp',
      alt: 'Grupo Ruiz'
    },
    {
      name: 'Proaleh',
      logo: '/logosClientes/LOGO-PROALEH-VERDE1.webp',
      alt: 'Proaleh'
    },
    {
      name: 'Socibus',
      logo: '/logosClientes/socibus logo.webp',
      alt: 'Socibus'
    },
    {
      name: 'Albie SA',
      logo: '/logosClientes/albie-sa_li1.webp',
      alt: 'Albie SA'
    }
  ];

  // const testimonials = [
  //   {
  //     name: "María González",
  //     position: "Directora de Operaciones",
  //     company: "Ayuntamiento de Madrid",
  //     content: "TCSystems revolucionó nuestro sistema de cobro de tasas municipales. La eficiencia aumentó un 300% y los ciudadanos están mucho más satisfechos.",
  //     rating: 5,
  //     sector: "Administración Pública"
  //   },
  //   {
  //     name: "Carlos Ruiz",
  //     position: "Gerente",
  //     company: "Cadena Hotelera Premium",
  //     content: "La integración fue perfecta y el soporte técnico excepcional. Nuestros huéspedes valoran la comodidad del sistema de pago automático.",
  //     rating: 5,
  //     sector: "Hostelería"
  //   },
  //   {
  //     name: "Ana Martín",
  //     position: "Propietaria",
  //     company: "Lavandería SpeedyWash",
  //     content: "Desde que instalamos el sistema de TCSystems, nuestros ingresos aumentaron un 40%. La máquina funciona perfectamente las 24 horas.",
  //     rating: 5,
  //     sector: "Lavanderías"
  //   }
  // ];

  // const stats = [
  //   { value: "98%", label: "Satisfacción del cliente" },
  //   { value: "99.9%", label: "Tiempo de actividad" },
  //   { value: "24h", label: "Tiempo de respuesta" },
  //   { value: "500+", label: "Clientes satisfechos" }
  // ];

  return (
    <section className="relative py-24 bg-white dark:bg-zinc-950 overflow-hidden" id="clientes">
      {/* Blobs sutiles de fondo */}
      <div className="absolute top-16 right-16 w-68 h-68 bg-gradient-to-br from-[#0e9acd]/7 to-blue-600/7 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 left-16 w-84 h-84 bg-gradient-to-br from-[#0e9acd]/5 to-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/2 w-44 h-44 bg-gradient-to-br from-[#0e9acd]/6 to-blue-600/6 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
            Nuestros Clientes
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Más de <span className="text-[#0e9acd]">500 clientes</span> en toda España
          </h2>
        </div>

        {/* Testimonials Grid - COMENTADO TEMPORALMENTE */}
        {/* <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-[#121214] rounded-2xl p-8 relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-[#0e9acd] rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-zinc-300 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-zinc-800 pt-6">
                <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-600 dark:text-zinc-400">{testimonial.position}</div>
                <div className="text-sm text-gray-600 dark:text-zinc-400">{testimonial.company}</div>
                <div className="inline-flex items-center bg-white dark:bg-zinc-800 text-[#0e9acd] px-3 py-1 rounded-full text-xs font-medium mt-2 border border-gray-200 dark:border-zinc-700">
                  {testimonial.sector}
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Client Logos Section - Subtle */}
        <div className="pt-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto text-lg">
              Desde administraciones públicas hasta grandes corporaciones, nuestras soluciones están transformando negocios en toda España.
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 items-center justify-items-center mb-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center h-16 w-full transition-all duration-300 hover:scale-105"
              >
                                 <Image
                   src={client.logo}
                   alt={client.alt}
                   width={120}
                   height={64}
                   className="max-w-full max-h-full object-contain filter grayscale dark:grayscale-0 group-hover:grayscale-0 transition-all duration-300 opacity-50 group-hover:opacity-80"
                 />
              </div>
            ))}
          </div>

          {/* Additional subtle text */}
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-zinc-500">
              Y muchas más empresas que han elegido TCSystems para automatizar sus procesos de cobro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 