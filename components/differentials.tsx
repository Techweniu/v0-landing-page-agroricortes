"use client";

import React from 'react';
import { Truck, Calendar, Users, Handshake, Map } from 'lucide-react';

export default function Differentials() {
  return (
    <section id="differentials" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* LADO ESQUERDO: Imagem */}
          <div className="w-full lg:w-1/2 relative">
             <div className="mb-6 text-left">
                <h2 className="text-3xl md:text-4xl uppercase leading-none">
                  <span className="text-[#ff6600] font-normal block">POR QUE</span>
                  <span className="text-[#005e00] font-bold block">ESCOLHER</span>
                  <span className="text-[#005e00] font-bold block text-2xl md:text-3xl mt-1">A RICÔRTES?</span>
                </h2>
             </div>

             <div className="relative border-[10px] border-[#005e00] rounded-lg overflow-hidden shadow-2xl">
               <img 
                 src="/images/imagemdrone.webp" 
                 alt="Caminhão AgroRicôrtes" 
                 className="w-full h-auto object-cover aspect-[3/4]"
               />
             </div>
          </div>

          {/* LADO DIREITO: Lista de Diferenciais */}
          <div className="w-full lg:w-1/2 space-y-8">
            
            {/* Item 1 */}
            <div className="flex items-center gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-[#ff6600] rounded-full flex items-center justify-center text-[#005e00] shadow-md group-hover:scale-110 transition-transform">
                <Truck size={32} strokeWidth={2.5} />
              </div>
              <p className="text-black font-medium text-lg">
                Frota moderna e equipada para atender diferentes demandas logísticas.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-[#ff6600] rounded-full flex items-center justify-center text-[#005e00] shadow-md group-hover:scale-110 transition-transform">
                <Calendar size={32} strokeWidth={2.5} />
              </div>
              <p className="text-black font-medium text-lg">
                Compromisso com prazos e segurança no transporte.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-[#ff6600] rounded-full flex items-center justify-center text-[#005e00] shadow-md group-hover:scale-110 transition-transform">
                <Users size={32} strokeWidth={2.5} />
              </div>
              <p className="text-black font-medium text-lg">
                Equipe especializada e experiente no setor.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-[#ff6600] rounded-full flex items-center justify-center text-[#005e00] shadow-md group-hover:scale-110 transition-transform">
                <Handshake size={32} strokeWidth={2.5} />
              </div>
              <p className="text-black font-medium text-lg">
                Atendimento personalizado e soluções sob medida para cada cliente.
              </p>
            </div>

            {/* Item 5 */}
            <div className="flex items-center gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-[#ff6600] rounded-full flex items-center justify-center text-[#005e00] shadow-md group-hover:scale-110 transition-transform">
                <Map size={32} strokeWidth={2.5} />
              </div>
              <p className="text-black font-medium text-lg">
                Atuação em diversas regiões do Brasil, abrangendo os estados de GO, BA, SP, MG, MT e MS.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
