import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-6">
             <img 
               src="/images/logo.webp" 
               alt="AgroRicôrtes Logo" 
               className="h-16 w-auto object-contain mb-4" 
             />
             <p className="text-gray-400 text-sm leading-relaxed">
               Soluções agrícolas completas. Da pulverização ao transporte, conectando o campo ao futuro com eficiência e tecnologia.
             </p>
             <div className="flex gap-4">
               <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-[#417641] hover:bg-[#ff6600] p-2 rounded-full transition-colors">
                  <Instagram size={20} />
               </a>
               <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-[#417641] hover:bg-[#ff6600] p-2 rounded-full transition-colors">
                  <Facebook size={20} />
               </a>
             </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ff6600]">Navegação</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-[#ff6600] transition-colors">Início</a></li>
              <li><a href="#whoweare" className="hover:text-[#ff6600] transition-colors">Quem Somos</a></li>
              <li><a href="#services" className="hover:text-[#ff6600] transition-colors">Serviços</a></li>
              <li><a href="#workwithus" className="hover:text-[#ff6600] transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ff6600]">Contato</h3>
            <ul className="space-y-4 text-gray-300">
               {/* Endereço */}
               <li className="flex items-start gap-3">
                  <MapPin className="text-[#417641] flex-shrink-0 mt-1" size={20} />
                  <span>
                    Rua João Manoel de Souza, 819<br />
                    Apt 204 Sala A - Centro<br />
                    Itumbiara - GO, 75503-162
                  </span>
               </li>
               
               {/* Telefone / WhatsApp */}
               <li className="flex items-center gap-3">
                  <Phone className="text-[#417641] flex-shrink-0" size={20} />
                  <a href="https://wa.me/556493311111" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    (64) 9331-1111
                  </a>
               </li>
               
               {/* E-mail */}
               <li className="flex items-center gap-3">
                  <Mail className="text-[#417641] flex-shrink-0" size={20} />
                  <a href="mailto:agroricortes@outlook.com" className="hover:text-white transition-colors">
                    agroricortes@outlook.com
                  </a>
               </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AgroRicôrtes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
