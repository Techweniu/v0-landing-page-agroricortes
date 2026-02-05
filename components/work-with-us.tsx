"use client";

import React, { useState } from 'react';
import { Upload, Check, Loader2 } from 'lucide-react';

// --- CONFIGURAÇÃO ---
// SUBSTITUA PELA URL QUE VOCÊ COPIOU DO GOOGLE APPS SCRIPT
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxZXYlW5UNevocuxfGy4J_q4jvkrEoqnupDXPkeqHR5xd8KhtenMP9NwJT80HEWVkZr/exec";

const WorkWithUs: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  
  // Estado do formulário
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    about: '' // Novo estado para o campo "Sobre"
  });
  const [file, setFile] = useState<File | null>(null);

  // Atualizado para aceitar HTMLTextAreaElement também
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      // Validação simples de tamanho (ex: 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert("O arquivo é muito grande. O máximo é 5MB.");
        return;
      }
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  // Função auxiliar para converter arquivo em Base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Remove o prefixo "data:application/pdf;base64," para enviar apenas os dados
        const result = reader.result as string;
        const base64 = result.split(',')[1]; 
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Por favor, anexe seu currículo.");
      return;
    }

    setLoading(true);

    try {
      const base64File = await fileToBase64(file);

      const payload = {
        ...formData,
        file: {
          name: file.name,
          mimeType: file.type,
          data: base64File
        }
      };

      // Usamos 'no-cors' para evitar erros de bloqueio do navegador, 
      // mas isso significa que não conseguimos ler a resposta JSON do Google.
      // Assumimos sucesso se a requisição for enviada.
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload)
      });

      setSuccess(true);
      // Limpa o formulário, incluindo o novo campo 'about'
      setFormData({ firstName: '', lastName: '', email: '', phone: '', about: '' });
      setFile(null);
      setFileName(null);

    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Houve um erro ao enviar o formulário. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="workwithus" className="py-24 bg-[#005e00] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="bg-white rounded-xl p-12 shadow-2xl text-gray-800 max-w-2xl mx-auto">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-[#005e00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#005e00] mb-4">Enviado com sucesso</h3>
                <p className="text-gray-600 mb-8">Recebemos seus dados e seu currículo com sucesso. Boa sorte!</p>
                <button 
                    onClick={() => setSuccess(false)}
                    className="text-[#ff6600] font-bold hover:underline"
                >
                    Enviar outra candidatura
                </button>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="workwithus" className="py-24 bg-[#005e00] text-white">
       <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
                Trabalhe <span className="text-[#ff6600]">conosco</span>
            </h2>
            <p className="text-lg text-gray-200">
                Faça parte da nossa equipe e ajude-nos a transformar o agronegócio.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl text-gray-800 max-w-3xl mx-auto">
             <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nome Completo */}
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Nome <span className="text-red-500">*</span></label>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        required 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        type="text" 
                        placeholder="Primeiro nome" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all bg-gray-50"
                      />
                      <input 
                        required 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        type="text" 
                        placeholder="Sobrenome" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all bg-gray-50"
                      />
                   </div>
                </div>

                {/* E-mail e Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">E-mail <span className="text-red-500">*</span></label>
                       <input 
                         required 
                         name="email"
                         value={formData.email}
                         onChange={handleInputChange}
                         type="email" 
                         placeholder="exemplo@exemplo.com" 
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all bg-gray-50" 
                       />
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Telefone <span className="text-red-500">*</span></label>
                       <input 
                         required 
                         name="phone"
                         value={formData.phone}
                         onChange={handleInputChange}
                         type="tel" 
                         placeholder="(00) 00000-0000" 
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all bg-gray-50" 
                       />
                    </div>
                </div>

                {/* NOVO CAMPO: Sobre você */}
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Fale um pouco sobre você</label>
                   <textarea 
                     name="about"
                     value={formData.about}
                     onChange={handleInputChange}
                     rows={4}
                     placeholder="Conte-nos brevemente suas experiências, objetivos e por que gostaria de trabalhar conosco..."
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all resize-none bg-gray-50" 
                   ></textarea>
                </div>

                {/* Upload de Arquivo */}
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">
                     Faça o upload do seu currículo logo abaixo <span className="text-red-500">*</span>
                   </label>
                   <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition-colors relative group">
                      <div className="space-y-1 text-center">
                         {fileName ? (
                             <div className="flex flex-col items-center text-[#005e00]">
                                <Check className="h-12 w-12 mb-2" />
                                <span className="text-sm font-medium">{fileName}</span>
                                <span className="text-xs text-gray-500 mt-1">Clique para trocar o arquivo</span>
                             </div>
                         ) : (
                             <>
                                <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-[#ff6600] transition-colors" />
                                <div className="flex text-sm text-gray-600 justify-center">
                                   <span className="relative cursor-pointer bg-white rounded-md font-medium text-[#ff6600] hover:text-[#d95500] focus-within:outline-none">
                                      <span>Carregar Currículo</span>
                                   </span>
                                </div>
                                <p className="text-xs text-gray-500">Arraste e solte seus arquivos aqui</p>
                                <p className="text-xs text-gray-400 mt-1">PDF, DOC ou DOCX até 5MB</p>
                             </>
                         )}
                         <input 
                            id="file-upload" 
                            name="file-upload" 
                            type="file" 
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                         />
                      </div>
                   </div>
                </div>

                {/* Consentimento */}
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-[#ff6600] focus:ring-[#ff6600] border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="consent" className="font-medium text-gray-700">
                        Consentimento sobre os dados fornecidos acima <span className="text-red-500">*</span>
                      </label>
                      <p className="text-gray-500 text-xs mt-1">Ao marcar esta caixa, você concorda que seus dados sejam processados para fins de recrutamento.</p>
                    </div>
                </div>

                {/* Botão de Envio */}
                <button 
                   type="submit" 
                   disabled={loading}
                   className="w-full flex items-center justify-center gap-2 bg-[#ff6600] hover:bg-[#d95500] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                   {loading ? (
                       <>Enviando... <Loader2 className="animate-spin" /></>
                   ) : (
                       "Enviar formulário"
                   )}
                </button>

             </form>
          </div>
       </div>
    </section>
  );
};

export default WorkWithUs;
