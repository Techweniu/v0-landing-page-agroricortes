import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#005e00] rounded-l-[100px] opacity-10 hidden lg:block" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <span className="text-[#ff6600] font-bold tracking-widest text-sm block mb-2">
                SOBRE NÓS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#005e00] mb-6">
                Por que o nome <br /> Ricôrtes?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nosso nome é uma homenagem às famílias Ribeiro e Côrtes, que se
                uniram para criar uma empresa sólida e comprometida com o setor
                agroindustrial.
              </p>
              <p className="text-xl italic text-[#417641] font-semibold border-l-4 border-[#ff6600] pl-4">
                Eficiência e Inovação a serviço da produtividade e melhores
                resultados para a sua empresa.
              </p>
            </div>

            {/* Image for mobile/tablet in flow */}
            <div className="lg:hidden mb-12">
              <img
                src="/images/imagemcolhendo.webp"
                alt="Agro Field"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-12 h-12 bg-[#ff6600] rounded-full flex items-center justify-center text-white shadow-md">
                    <Target size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#005e00] mb-2">
                    Missão
                  </h3>
                  <p className="text-gray-600">
                    Atender as necessidades dos clientes do setor agrícola com
                    qualidade, eficiência e produtividade, contribuindo
                    diretamente para seus resultados no plantio e na colheita.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-12 h-12 bg-[#ff6600] rounded-full flex items-center justify-center text-white shadow-md">
                    <Eye size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#005e00] mb-2">
                    Visão
                  </h3>
                  <p className="text-gray-600">
                    Ser referência no setor agrícola, garantindo segurança e
                    bem-estar aos colaboradores, crescimento sustentável e
                    rentável. Buscamos atender nossos clientes com qualidade e
                    responsabilidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-12 h-12 bg-[#ff6600] rounded-full flex items-center justify-center text-white shadow-md">
                    <Heart size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#005e00] mb-2">
                    Valores
                  </h3>
                  <p className="text-gray-600">
                    Valorizamos o bem-estar e a saúde das pessoas, promovendo
                    relacionamentos sólidos e respeitosos. Atuação pautada pela
                    responsabilidade e compromisso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Content (Desktop) */}
          <div className="hidden lg:block w-1/2 relative h-full min-h-[600px]">
            <div className="absolute right-0 top-0 w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src="/images/imagemcolhendo.webp"
                  alt="Agro Machine"
                  className="rounded-l-[100px] shadow-2xl object-cover w-full h-full border-8 border-white"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="text-[#005e00] font-bold text-lg">
                    "Compromisso com o futuro do campo."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
