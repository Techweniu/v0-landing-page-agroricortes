import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-6">
             <img 
               src="/images/logo.webp" 
               alt="AgroRicôrtes Logo" 
               className="h-16 w-auto object-contain mb-4" 
             />
             <p className="text-gray-600 text-sm leading-relaxed">
               Soluções agrícolas completas. Da pulverização ao transporte, conectando o campo ao futuro com eficiência e tecnologia.
             </p>
             <div className="flex gap-4">
               <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-gray-100 text-[#417641] hover:bg-[#ff6600] hover:text-white p-3 rounded-full transition-all shadow-sm">
                  <Instagram size={20} />
               </a>
               <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-gray-100 text-[#417641] hover:bg-[#ff6600] hover:text-white p-3 rounded-full transition-all shadow-sm">
                  <Facebook size={20} />
               </a>
             </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ff6600]">Navegação</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#home" className="hover:text-[#417641] transition-colors font-medium">Início</a></li>
              <li><a href="#whoweare" className="hover:text-[#417641] transition-colors font-medium">Quem Somos</a></li>
              <li><a href="#services" className="hover:text-[#417641] transition-colors font-medium">Serviços</a></li>
              <li><a href="#workwithus" className="hover:text-[#417641] transition-colors font-medium">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ff6600]">Contato</h3>
            <ul className="space-y-4 text-gray-600">
               {/* Endereço */}
               <li className="flex items-start gap-3 group">
                  <div className="bg-[#417641]/10 p-2 rounded-lg group-hover:bg-[#ff6600]/10 transition-colors">
                     <MapPin className="text-[#417641] group-hover:text-[#ff6600] transition-colors" size={20} />
                  </div>
                  <span className="text-sm">
                    Rua João Manoel de Souza, 819<br />
                    Apt 204 Sala A - Centro<br />
                    Itumbiara - GO, 75503-162
                  </span>
               </li>
               
               {/* Telefone / WhatsApp */}
               <li className="flex items-center gap-3 group">
                  <div className="bg-[#417641]/10 p-2 rounded-lg group-hover:bg-[#ff6600]/10 transition-colors">
                     <Phone className="text-[#417641] group-hover:text-[#ff6600] transition-colors" size={20} />
                  </div>
                  <a href="https://wa.me/556493311111" target="_blank" rel="noreferrer" className="hover:text-[#417641] transition-colors font-bold">
                    (64) 9331-1111
                  </a>
               </li>
               
               {/* E-mail */}
               <li className="flex items-center gap-3 group">
                   <div className="bg-[#417641]/10 p-2 rounded-lg group-hover:bg-[#ff6600]/10 transition-colors">
                     <Mail className="text-[#417641] group-hover:text-[#ff6600] transition-colors" size={20} />
                  </div>
                  <a href="mailto:agroricortes@outlook.com" className="hover:text-[#417641] transition-colors">
                    agroricortes@outlook.com
                  </a>
               </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AgroRicôrtes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
