import { Heart, Briefcase, Leaf, Compass, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const items = [
  {
    icon: Heart,
    title: "Identidade em Cristo",
    verse: "Sois pedras vivas — 1 Pe 2:5",
    tip: "Quem você é precede o que você faz.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Briefcase,
    title: "Vocação e Carreira",
    verse: "Tudo o que fizerdes — Cl 3:23",
    tip: "Trabalho como adoração diária.",
    span: "",
  },
  {
    icon: Leaf,
    title: "Paz Mental e Oração",
    verse: "Não andeis ansiosos — Fp 4:6",
    tip: "Respire. Ore. Confie.",
    span: "",
  },
  {
    icon: Compass,
    title: "Liderança com Princípios",
    verse: "Como o servo — Mc 10:43",
    tip: "Liderar é servir com clareza.",
    span: "md:col-span-2",
  },
];

export function PurposeSection() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="proposito" className="relative py-32 px-6 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[var(--sage)] mb-4 block">
            02 — Caminho de Estudos
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--sage-deep)] leading-[1.05] text-balance">
            Conheça seu <span className="italic text-[var(--gold)]">propósito</span>,
            uma estação por vez.
          </h2>
          <p className="mt-6 text-[var(--muted-foreground)] max-w-lg">
            Quatro trilhas curadas para estudar com profundidade, sem pressa e com
            aplicação real. Escolha por onde começar.
          </p>
        </div>

        <div className="grid md:grid-cols-4 md:auto-rows-[180px] gap-4">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <button
                key={idx}
                onMouseEnter={() => setHover(idx)}
                onMouseLeave={() => setHover(null)}
                className={`group relative text-left p-7 rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden transition-all duration-500 hover:border-[var(--gold)]/50 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 ${it.span}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--sand)] to-transparent" />
                <div className="relative flex flex-col h-full justify-between">
                  <div className="flex items-start justify-between">
                    <span className="w-11 h-11 rounded-xl grid place-items-center bg-[var(--sand)] text-[var(--sage-deep)] group-hover:bg-[var(--sage-deep)] group-hover:text-[var(--gold)] transition-colors">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--muted-foreground)] group-hover:text-[var(--gold)] group-hover:rotate-12 transition-all" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[var(--sage-deep)]">
                      {it.title}
                    </h3>
                    <p className="text-xs italic mt-1.5 text-[var(--sage)]">
                      {it.verse}
                    </p>
                  </div>
                </div>
                {hover === idx && (
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-[var(--sage-deep)] text-[var(--background)] text-[11px] animate-fade-up">
                    {it.tip}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[var(--sage-deep)] text-[var(--background)] text-sm hover:bg-[var(--foreground)] transition-colors">
            Descobrir meu Propósito
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
