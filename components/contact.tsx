"use client";

import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

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
    
    const phoneNumber = "556493311111"; 
    
    const text = `*Olá, vim através do site da AgroRicôrtes!*%0a%0a` +
                 `*Nome:* ${formData.name}%0a` +
                 `*Telefone:* ${formData.phone}%0a` +
                 `*Mensagem:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Envie uma <span className="text-[#ff6600]">Mensagem</span>
          </h2>
          <p className="text-gray-600">
            Ficou com alguma dúvida ou precisa de um orçamento? Preencha abaixo e te responderemos no WhatsApp rapidinho.
          </p>
        </div>

        {/* Formulário Centralizado */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all bg-gray-50"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all bg-gray-50"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all resize-none bg-gray-50"
                   ></textarea>
                </div>

                <button 
                   type="submit"
                   className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 text-lg"
                >
                   <MessageCircle size={24} />
                   Iniciar conversa no WhatsApp
                </button>
             </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
