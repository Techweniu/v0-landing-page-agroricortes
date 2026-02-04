"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-gray-100">
      
      {/* ELEMENTOS DE FUNDO (Background) */}
      
      {/* Caminhão Marca D'água (Esquerda) */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-full opacity-5 pointer-events-none z-0">
         <img 
            src="/images/transporteequipa.webp" 
            alt="Background Truck" 
            className="w-full h-full object-cover object-left grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
      </div>

      {/* Recorte Plantação Algodão (Canto Superior Direito) - AJUSTADO */}
      <div className="absolute top-0 right-0 w-[40%] md:w-[30%] h-[200px] pointer-events-none z-0">
          {/* Adicionei gradientes para suavizar a transição e não brigar com o texto */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10"></div>
          
          <img 
            src="/images/colheitaalgodao.webp" 
            alt="Detail Crop" 
            className="w-full h-full object-cover rounded-bl-[100px] opacity-25" // Opacidade reduzida para 25%
          />
      </div>


      <div className="container mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO CENTRALIZADO */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl uppercase tracking-wider mb-2 drop-shadow-sm bg-white/60 inline-block rounded-lg px-4 backdrop-blur-sm">
            <span className="text-[#ff6600] font-normal">ENTRE EM </span>
            <span className="text-[#005e00] font-bold">CONTATO CONOSCO</span>
          </h2>
          {/* Tracinhos decorativos */}
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-8 h-1 bg-[#005e00]"></div>
            <div className="w-8 h-1 bg-[#ff6600]"></div>
          </div>
        </div>

        {/* SEÇÃO INFORMAÇÕES */}
        <div className="mb-12">
           <div className="flex items-center gap-4 mb-8">
              <span className="text-[#ff6600] text-xl font-bold uppercase whitespace-nowrap">Informações</span>
              <div className="w-full h-[1px] bg-gray-400"></div>
           </div>

           {/* Grid de Contatos (3 Colunas) */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
             {/* Coluna 1: Contato (Telefone) */}
             <div className="flex flex-col items-start gap-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-[#005e00] rounded-md flex items-center justify-center text-[#ff6600]">
                   <Phone size={24} fill="currentColor" />
                 </div>
                 <h4 className="font-bold text-gray-800 text-lg uppercase">Contato</h4>
               </div>
               <div className="pl-14 space-y-2">
                 <p className="text-gray-800 font-medium text-lg">(64) 9 9331-1111</p>
                 <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-lg font-medium">
                   (64) 99236-3033
                 </span>
               </div>
             </div>

             {/* Coluna 2: E-mail */}
             <div className="flex flex-col items-start gap-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-[#005e00] rounded-md flex items-center justify-center text-[#ff6600]">
                   <Mail size={24} fill="currentColor" />
                 </div>
                 <h4 className="font-bold text-gray-800 text-lg uppercase">E-mail</h4>
               </div>
               <div className="pl-14">
                 <a href="mailto:agroricortes@outlook.com" className="text-gray-800 font-medium text-lg hover:text-[#ff6600] break-all">
                    agroricortes@outlook.com
                 </a>
               </div>
             </div>

             {/* Coluna 3: Endereço */}
             <div className="flex flex-col items-start gap-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-[#005e00] rounded-md flex items-center justify-center text-[#ff6600]">
                   <MapPin size={24} fill="currentColor" />
                 </div>
                 <h4 className="font-bold text-gray-800 text-lg uppercase">Endereço</h4>
               </div>
               <div className="pl-14">
                 <p className="text-gray-800 font-medium text-lg leading-relaxed">
                   R. João Manoel de Souza, 819<br />
                   Apt 204 Sala A - Centro<br />
                   Itumbiara - GO, 75503-162
                 </p>
               </div>
             </div>

           </div>
        </div>

        {/* Copyright simples */}
        <div className="text-center pt-8 border-t border-gray-100 mt-8">
           <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AgroRicôrtes. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
