import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Configuração do Número e da Mensagem
    const phoneNumber = "556493311111"; // Formato internacional: 55 + DDD + Numero
    
    // 2. Montando o texto da mensagem (usando quebra de linha %0a)
    const text = `*Olá, vim através do site da AgroRicôrtes!*%0a%0a` +
                 `*Nome:* ${formData.name}%0a` +
                 `*Telefone:* ${formData.phone}%0a` +
                 `*Mensagem:* ${formData.message}`;

    // 3. Criando o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    // 4. Abrindo em nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em <span className="text-[#ff6600]">Contato</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você. Fale conosco pelo WhatsApp, telefone ou venha nos visitar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Lado Esquerdo: Informações de Contato */}
          <div className="bg-[#417641] rounded-2xl p-8 md:p-12 text-white shadow-xl h-full relative overflow-hidden">
            {/* Círculos decorativos */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[#ff6600] rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-[#ff6600] rounded-full opacity-20"></div>

            <h3 className="text-2xl font-bold mb-8 relative z-10">Informações de Contato</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Nosso Endereço</h4>
                  <p className="text-gray-100 leading-relaxed">
                    Rua João Manoel de Souza, 819<br />
                    Apt 204 Sala A - Centro<br />
                    Itumbiara - Goiás<br />
                    CEP: 75503-162
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-100">(64) 9331-1111</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">E-mail</h4>
                  <p className="text-gray-100">agroricortes@outlook.com</p>
                </div>
              </div>
            </div>

            {/* Mapa Incorporado (Google Maps) */}
            <div className="mt-10 rounded-xl overflow-hidden shadow-lg border-2 border-white/30 h-48 bg-gray-300">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.903829035654!2d-49.3245464!3d-18.4116041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a108e488106295%3A0x6f3801f4c782729e!2sR.%20Jo%C3%A3o%20Manoel%20de%20Souza%2C%20819%20-%20St.%20Central%2C%20Itumbiara%20-%20GO%2C%2075503-162!5e0!3m2!1spt-BR!2sbr!4v1709230000000!5m2!1spt-BR!2sbr" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Mapa da Localização"
               ></iframe>
            </div>
          </div>

          {/* Lado Direito: Formulário WhatsApp */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
             <h3 className="text-2xl font-bold mb-6 text-gray-800">Envie uma mensagem</h3>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Seu Nome</label>
                   <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Como podemos te chamar?"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all"
                   />
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Seu Telefone</label>
                   <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="(DD) 99999-9999"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all"
                   />
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                   <textarea 
                      rows={4}
                      name="message"
                      required
                      placeholder="Descreva o que você precisa..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all resize-none"
                   ></textarea>
                </div>

                <button 
                   type="submit"
                   className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                >
                   <MessageCircle size={24} />
                   Enviar via WhatsApp
                </button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  Ao clicar, você será redirecionado para o WhatsApp Web ou App.
                </p>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
