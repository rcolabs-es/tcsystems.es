import { Building2, Car, Coffee, Shirt, MapPin, ShoppingCart } from "lucide-react";

export default function SectorsSection() {
  const sectors = [
    {
      icon: Building2,
      title: "Administraciones Públicas",
      description: "Sistemas de cobro para tasas, multas y servicios municipales",
      applications: ["Pago de tasas municipales", "Multas de tráfico", "Servicios públicos", "Certificados oficiales"]
    },
    {
      icon: Coffee,
      title: "Hostelería",
      description: "Soluciones de pago para restaurantes, bares y hoteles",
      applications: ["Comandas automáticas", "Pago de consumiciones", "Check-in hoteles", "Servicios adicionales"]
    },
    {
      icon: Car,
      title: "Estaciones de Servicio",
      description: "Sistemas de pago para combustible y servicios adicionales",
      applications: ["Pago de combustible", "Lavado de coches", "Productos de tienda", "Servicios de taller"]
    },
    {
      icon: Shirt,
      title: "Lavanderías",
      description: "Automatización completa para lavanderías autoservicio",
      applications: ["Lavado y secado", "Productos de limpieza", "Servicios premium", "Membresías"]
    },
    {
      icon: MapPin,
      title: "Parkings",
      description: "Control de acceso y pago para zonas de estacionamiento",
      applications: ["Tickets de parking", "Abonos mensuales", "Servicios adicionales", "Control de acceso"]
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Puntos de venta automatizados",
      applications: ["Tiendas 24h", "Productos frescos", "Servicios express"]
    }
  ];

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-neutral-900 overflow-hidden">
      {/* Blobs sutiles de fondo */}
      <div className="absolute top-12 right-12 w-64 h-64 bg-gradient-to-br from-[#0e9acd]/6 to-blue-600/6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-12 w-88 h-88 bg-gradient-to-br from-[#0e9acd]/4 to-blue-600/4 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 right-1/3 w-52 h-52 bg-gradient-to-br from-[#0e9acd]/5 to-blue-600/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-4 py-2 text-sm text-gray-600 dark:text-zinc-400 shadow-sm">
            Sectores de Aplicación
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Soluciones para 
            <span className="text-[#0e9acd]"> todos los sectores</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Desde <strong className="text-gray-900 dark:text-white">administraciones públicas</strong> hasta <strong className="text-gray-900 dark:text-white">pequeños comercios</strong>. 
            Nuestras <strong className="text-[#0e9acd]">soluciones se adaptan</strong> a cualquier sector y necesidad.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-zinc-800 hover:shadow-lg hover:border-[#0e9acd] dark:hover:border-[#0e9acd] transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-[#121214] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0e9acd] group-hover:text-white transition-all duration-300">
                <sector.icon className="w-6 h-6 text-[#0e9acd] group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{sector.title}</h3>
              <p className="text-gray-600 dark:text-zinc-400 mb-6 leading-relaxed">{sector.description}</p>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">Aplicaciones principales:</div>
                {sector.applications.map((app, appIndex) => (
                  <div key={appIndex} className="flex items-center text-sm text-gray-600 dark:text-zinc-400">
                    <div className="w-1.5 h-1.5 bg-[#0e9acd] rounded-full mr-3 flex-shrink-0"></div>
                    {app}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 