"use client";

import React from 'react';
import { Truck, Settings, Wheat, Sprout } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Transporte de Maquinários Agrícolas",
    description: "Transporte especializado de tratores e colheitadeiras, com foco total na segurança da carga e no cumprimento rigoroso dos prazos.",
    image: "/images/transporteequipa.webp", // Use a foto do caminhão prancha aqui
  },
  {
    id: 2,
    title: "Transporte de Peças Industriais",
    description: "Logística eficiente para indústrias, garantindo a integridade e precisão na entrega de grandes peças e componentes.",
    image: "/images/imagemeditada.webp", // Use a foto da peça industrial aqui
  },
  {
    id: 3,
    title: "Transporte de Grãos",
    description: "Frota preparada para o transporte de soja, milho e trigo, com processos otimizados para evitar perdas e garantir qualidade.",
    image: "/images/colheitacampoaberto.webp", // Use a foto da fila de caminhões aqui
  },
  {
    id: 4,
    title: "Pulverização Agrícola",
    description: "Otimização da cadeia produtiva visando maior produtividade e redução de custos operacionais na sua lavoura.",
    image: "/images/imagemdrone.webp", // Use a foto do pulverizador aqui
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl uppercase tracking-wide">
            <span className="text-[#ff6600] font-normal">NOSSOS </span>
            <span className="text-[#005e00] font-bold">SERVIÇOS</span>
          </h2>
        </div>

        {/* Lista Vertical */}
        <div className="flex flex-col gap-10">
          {services.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center">
              
              {/* Imagem (Esquerda) - Borda grossa verde */}
              <div className="w-full md:w-1/3 z-10">
                <div className="aspect-square rounded-3xl border-[6px] border-[#005e00] overflow-hidden shadow-lg bg-white">
                   <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                   />
                </div>
              </div>

              {/* Texto (Direita) - Conectado */}
              <div className="w-full md:w-2/3 md:-ml-10 mt-[-20px] md:mt-0 z-0">
                <div className="h-full border border-gray-300 rounded-r-xl rounded-l-xl md:rounded-l-none bg-white p-6 md:pl-16 md:pr-8 py-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-full items-center">
                    {/* Linha Vertical Laranja */}
                    <div className="w-1 md:w-1.5 h-16 bg-[#ff6600] rounded-full mr-6 flex-shrink-0"></div>
                    
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#005e00] mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
