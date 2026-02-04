import { Sprout, Truck, Settings, Wheat } from "lucide-react"

const services = [
  {
    icon: <Sprout size={48} className="text-white" />,
    image: "/images/imagemdrone.webp", // Drone na pulverização
    title: "Soluções para o Agronegócio",
    desc: "Oferecemos soluções completas em pulverização e logística agrícola para grandes propriedades rurais, usinas e produtores, garantindo eficiência e alta produtividade no campo.",
  },
  {
    icon: <Truck size={48} className="text-white" />,
    image: "/images/colheitacampoaberto.webp", // Reutilizando provisoriamente
    title: "Transporte de maquinários",
    desc: "Realizamos o transporte seguro e eficiente de equipamentos e maquinários agrícolas, assegurando que cheguem ao destino com agilidade e segurança.",
  },
  {
    icon: <Settings size={48} className="text-white" />,
    image: "/images/imagemeditada.webp", // Reutilizando provisoriamente
    title: "Transporte de Peças Industriais",
    desc: "Atendemos indústrias com transporte especializado de peças e componentes, garantindo logística confiável e eficiente para o setor industrial.",
  },
  {
    icon: <Wheat size={48} className="text-white" />,
    image: "/images/colheitaalgodao.webp", // Colheita no transporte de grãos
    title: "Transporte de Grãos",
    desc: "Oferecemos serviços de transporte de grãos com qualidade e agilidade, assegurando que sua produção chegue ao mercado de forma segura e eficiente.",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#fafafa] relative pb-20">
      {/* Top Decoration */}
      <div className="bg-[#ff6600] h-4 w-full rounded-b-[50%] absolute top-0 left-0 z-10"></div>

      {/* Header Block */}
      <div className="bg-[#ff6600] text-white py-12 rounded-b-[40px] mb-16 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider">Atendemos</h2>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  {/* Icon Overlay */}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4 bg-[#417641] w-12 h-12 rounded-full flex items-center justify-center shadow-md -mt-10 border-4 border-white">
                  <div className="scale-50">{item.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#417641]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 16.48V0h1200v120z" className="fill-[#e5e5e5]"></path>
        </svg>
      </div>
    </section>
  )
}
