export default function StatsStripe() {
  const stats = [
    { label: "Años de experiencia", value: "14+" },
    { label: "Empresas satisfechas", value: "500+" },
    { label: "Soporte técnico", value: "24/7" },
    { label: "Delegaciones", value: "5" },
  ];

  return (
    <section className="py-16 bg-[#0e9acd] border-y border-[#0c7ba3]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 