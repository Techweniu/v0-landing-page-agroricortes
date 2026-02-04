import { Instagram } from "lucide-react"
import ScrollReveal from "./scroll-reveal"; // Importando a animação

export default function WhoWeAre() {
  return (
    <section id="whoweare" className="py-20 bg-white overflow-hidden"> {/* overflow-hidden evita barra de rolagem horizontal durante a animação */}
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* LADO ESQUERDO: Imagem vindo da esquerda */}
          <div className="w-full md:w-1/2 flex justify-center">
            <ScrollReveal direction="left" className="w-full max-w-md">
                <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full border-4 border-[#417641] rounded-lg -z-10"></div>
                <img
                    src="/images/chapeu.webp"
                    alt="Quem somos"
                    className="rounded-lg shadow-2xl w-full object-cover"
                />
                </div>
            </ScrollReveal>
          </div>

          {/* LADO DIREITO: Texto vindo da direita */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <ScrollReveal direction="right" delay={200}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                QUEM <span className="text-[#005e00]">SOMOS?</span>
                </h2>
                <div className="text-gray-700 text-lg space-y-6 leading-relaxed">
                <p>
                    A AgroRicôrtes é uma empresa especializada em pulverização, transporte de maquinários agrícolas e peças
                    industriais.
                </p>
                <p>
                    Prestamos serviços com segurança, compromisso e respeito aos agricultores e empresas do setor,
                    garantindo produtividade e alto desempenho nas operações.
                </p>
                <p className="font-bold text-xl text-[#417641]">
                    Ajudando a produzir com eficiência, cuidando com responsabilidade.
                </p>
                </div>

                <div className="mt-8">
                <a
                    href="https://www.instagram.com/agroricortes/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-[#ff6600] text-[#ff6600] hover:bg-[#ff6600] hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                >
                    <Instagram size={20} />
                    Siga no Instagram
                </a>
                </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
