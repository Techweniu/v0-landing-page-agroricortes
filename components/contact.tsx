export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#005e00] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-2 text-[#005e00]">
                Entre em <span className="text-[#ff6600]">contato conosco</span>
              </h2>
              <p className="text-gray-500 mb-8">
                Preencha o formulário abaixo e retornaremos em breve.
              </p>

              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/20 outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff6600] hover:bg-[#d95500] text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="bg-white p-2 rounded-2xl shadow-2xl h-[400px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.3660513016557!2d-49.22211133521432!3d-18.42168174071487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a10d0038c88487%3A0xfab37728feb12863!2sAgro%20Ric%C3%B4rtes!5e0!3m2!1spt-BR!2sbr!4v1739565536866!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AgroRicôrtes Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
