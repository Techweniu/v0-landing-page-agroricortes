import React from 'react';
import { Target, Heart, Lightbulb, CheckCircle2 } from 'lucide-react';
import ScrollReveal from "./scroll-reveal";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#f8f9fa] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <ScrollReveal direction="down">
            <h2 className="text-4xl font-bold mb-6">
              Nossa <span className="text-[#ff6600]">Essência</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Mais do que serviços, entregamos compromisso e resultados para quem move o mundo.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card Missão */}
          <ScrollReveal delay={0} direction="up" className="h-full">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full border-b-4 border-[#ff6600]">
              <div className="bg-[#ff6600]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-[#ff6600]">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Oferecer soluções logísticas e de pulverização com excelência, garantindo agilidade e segurança para impulsionar a produtividade no campo e na indústria.
              </p>
            </div>
          </ScrollReveal>

          {/* Card Visão */}
          <ScrollReveal delay={150} direction="up" className="h-full">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full border-b-4 border-[#417641]">
              <div className="bg-[#417641]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-[#417641]">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser referência nacional em serviços agrícolas e transporte, reconhecida pela inovação, confiabilidade e pelo compromisso com o crescimento sustentável de nossos parceiros.
              </p>
            </div>
          </ScrollReveal>

          {/* Card Valores */}
          <ScrollReveal delay={300} direction="up" className="h-full">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow h-full border-b-4 border-[#ff6600]">
              <div className="bg-[#ff6600]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-[#ff6600]">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Valores</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#417641]" /> Ética e Transparência</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#417641]" /> Compromisso com o Cliente</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#417641]" /> Qualidade e Segurança</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#417641]" /> Inovação Constante</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default About;
