import React, { useState } from 'react';
import { Upload, Check, Loader2 } from 'lucide-react';

const WorkWithUs: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Aqui entrará a lógica de conexão com o Google Apps Script depois
    setTimeout(() => {
        alert("Esta é apenas a interface. A integração será feita na próxima etapa!");
        setLoading(false);
    }, 2000);
  };

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
                
                {/* Nome Completo - Dividido */}
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Nome <span className="text-red-500">*</span></label>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        required 
                        type="text" 
                        placeholder="Primeiro nome" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all bg-gray-50"
                      />
                      <input 
                        required 
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
                         type="email" 
                         placeholder="exemplo@exemplo.com" 
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all bg-gray-50" 
                       />
                    </div>
                    <div>
                       <label className="block text-sm font-bold text-gray-700 mb-2">Telefone <span className="text-red-500">*</span></label>
                       <input 
                         required 
                         type="tel" 
                         placeholder="(00) 00000-0000" 
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all bg-gray-50" 
                       />
                    </div>
                </div>

                {/* Upload de Arquivo */}
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">
                     Faça o upload do seu currículo logo abaixo <span className="text-red-500">*</span>
                   </label>
                   <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition-colors relative">
                      <div className="space-y-1 text-center">
                         {fileName ? (
                             <div className="flex flex-col items-center text-[#005e00]">
                                <Check className="h-12 w-12 mb-2" />
                                <span className="text-sm font-medium">{fileName}</span>
                                <span className="text-xs text-gray-500 mt-1">Arquivo selecionado</span>
                             </div>
                         ) : (
                             <>
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
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
                            required
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
