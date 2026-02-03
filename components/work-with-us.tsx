import { ExternalLink } from "lucide-react";

export default function WorkWithUs() {
  return (
    <section id="workwithus" className="py-24 bg-[#005e00] text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">
          Trabalhe <span className="text-[#ff6600]">conosco</span>
        </h2>
        <p className="mb-12 text-lg text-gray-200">
          Faça parte da nossa equipe e ajude-nos a transformar o agronegócio.
          Preencha nosso formulário de candidatura.
        </p>

        <div className="bg-white rounded-lg p-8 md:p-12 shadow-2xl text-gray-800 max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="bg-green-100 p-4 rounded-full">
              <svg
                className="w-16 h-16 text-[#005e00]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#005e00]">
              Formulário de Candidatura
            </h3>
            <p>
              Clique no botão abaixo para abrir o formulário externo de
              candidatura.
            </p>

            <a
              href="https://form.jotform.com/250494872597675"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#ff6600] hover:bg-[#d95500] text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
            >
              Preencher Formulário <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
