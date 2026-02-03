import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img
              src="https://picsum.photos/150/50?random=10"
              alt="AgroRicôrtes Logo"
              className="h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>

          <div className="text-center md:text-right text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} AgroRicôrtes – Todos os direitos
              reservados.
            </p>
            <div className="flex gap-4 justify-center md:justify-end mt-2">
              <a href="#" className="hover:text-[#417641] transition-colors">
                Termos de Uso
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#417641] transition-colors">
                Políticas de Privacidade
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#417641] transition-colors">
                Políticas de Cookies
              </a>
            </div>
          </div>

          <div>
            <a
              href="https://wa.me/556499331111"
              target="_blank"
              rel="noreferrer"
              className="bg-[#005e00] hover:bg-[#004d00] text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-colors"
            >
              <Phone size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
