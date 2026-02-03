import {
  ShieldCheck,
  Leaf,
  Truck,
  Lightbulb,
  UserCheck,
} from "lucide-react";
import type { ReactNode } from "react";

interface DifferentialItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

const diffs: DifferentialItem[] = [
  {
    icon: <Lightbulb size={40} />,
    title: "Tecnologia",
    subtitle: "e inovação",
  },
  {
    icon: <UserCheck size={40} />,
    title: "Qualidade",
    subtitle: "e eficiência",
  },
  {
    icon: <Leaf size={40} />,
    title: "Sustentabilidade",
    subtitle: "e responsabilidade",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Serviço com",
    subtitle: "Segurança e Compromisso",
  },
  {
    icon: <Truck size={40} />,
    title: "Frota",
    subtitle: "moderna",
  },
];

export default function Differentials() {
  return (
    <section id="differentials" className="bg-[#e5e5e5] py-24">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="mb-16">
          <p className="text-[#ff6600] tracking-[0.5em] text-sm uppercase font-bold mb-2">
            NOSSOS DIFERENCIAIS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#005e00]">
            Por que escolher a AgroRicôrtes?
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {diffs.map((item, index) => (
            <div key={index} className="flex flex-col items-center max-w-[160px]">
              <div
                className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center mb-6 shadow-lg border-4 transition-all duration-300 hover:scale-110 ${
                  index % 2 === 0
                    ? "bg-[#005e00] text-white border-transparent"
                    : "bg-transparent border-[#438a55] text-[#438a55]"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-[#005e00] leading-tight">
                {item.title} <br />
                <span className="font-normal text-gray-600">{item.subtitle}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
