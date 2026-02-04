import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para detectar rolagem (opcional, mas bom para refinar a sombra)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajuste do offset por causa do menu fixo (aprox 80px)
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div id="home" className="relative bg-[#417641] min-h-screen text-white overflow-hidden">
      
      {/* --- BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-black/40 z-10"></div>
         <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
         >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-agro-sbNU9GjYxbiuHgUxhJZcMeXXWlZOQQ.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
         </video>
      </div>

      {/* --- NAVIGATION (FIXED / FROZEN PANEL) --- 
         Mudanças: bg-white, fixed, shadow, cores de texto escuras
      */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-2 shadow-md' : 'py-4'
        } bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90`}
      >
        <div className="flex justify-between items-center px-6 max-w-6xl mx-auto">
          
          {/* LOGO */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/images/logo.webp" 
              alt="AgroRicôrtes Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </div>
          
          {/* Desktop Nav - Texto Escuro agora */}
          <div className="hidden md:flex space-x-8 items-center font-bold text-sm text-gray-700">
            <button onClick={() => scrollToSection('whoweare')} className="hover:text-[#ff6600] transition-colors">Quem somos</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#ff6600] transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('differentials')} className="hover:text-[#ff6600] transition-colors">Diferenciais</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#ff6600] transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('workwithus')} className="hover:text-[#ff6600] transition-colors">Trabalhe conosco</button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-[#ff6600] hover:bg-[#d95500] text-white px-6 py-2 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button - Escuro */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu - Branco */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white z-50 p-6 flex flex-col space-y-4 shadow-xl border-t border-gray-100 text-gray-800">
             <button onClick={() => scrollToSection('whoweare')} className="text-left font-bold hover:text-[#ff6600] py-2 border-b border-gray-100">Quem somos</button>
             <button onClick={() => scrollToSection('services')} className="text-left font-bold hover:text-[#ff6600] py-2 border-b border-gray-100">Serviços</button>
             <button onClick={() => scrollToSection('differentials')} className="text-left font-bold hover:text-[#ff6600] py-2 border-b border-gray-100">Diferenciais</button>
             <button onClick={() => scrollToSection('about')} className="text-left font-bold hover:text-[#ff6600] py-2 border-b border-gray-100">Sobre</button>
             <button onClick={() => scrollToSection('workwithus')} className="text-left font-bold hover:text-[#ff6600] py-2 border-b border-gray-100">Trabalhe conosco</button>
             <button onClick={() => scrollToSection('contact')} className="bg-[#ff6600] text-white px-6 py-3 rounded-full w-full font-bold mt-2">Contato</button>
          </div>
        )}
      </nav>

      {/* Content - Adicionado padding-top extra para compensar o menu fixo */}
      <div className="relative z-10 container max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-48 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
            A produtividade do <span className="text-[#ff6600]">seu campo</span> começa aqui!
          </h1>
          <div className="space-y-6 text-lg md:text-xl font-light drop-shadow-sm">
             <p>
               Com tecnologia, maquinários modernos, eficiência e o compromisso com nossos clientes, levamos soluções agrícolas que impulsionam seus resultados.
             </p>
             <p className="text-gray-200">
               Além da pulverização, trabalhamos com transporte de máquinas agrícolas e peças industriais, com responsabilidade e respeito aos nossos amigos, parceiros e fornecedores.
             </p>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <button 
                onClick={() => scrollToSection('services')}
                className="flex items-center justify-center gap-2 bg-[#ff6600] hover:bg-[#d95500] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg border-2 border-[#ff6600]"
             >
                Nossos Serviços <ArrowRight size={20} />
             </button>
          </div>
        </div>

        {/* Decorative Image/Element on the right */}
        <div className="md:w-1/2 flex justify-center relative">
           <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#528d52]/80 backdrop-blur-sm flex items-center justify-center relative z-0 shadow-2xl">
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-[#417641] border-4 border-white/20 overflow-hidden">
                <img 
                    src="/images/imagemeditada.webp" 
                    alt="Agro Field"
                    className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#ff6600] p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
           </div>
        </div>
      </div>
      
      {/* Curved Divider */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
