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
    <section
      id="proposito"
      className="relative py-32 px-6 overflow-hidden grain"
      style={{ background: "var(--gradient-section)" }}
    >
      {/* Ambient gold blobs */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-[600px] h-[600px] rounded-full bg-[var(--sage)]/15 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4 block">
            02 — Caminho de Estudos
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.05] text-balance">
            Conheça seu <span className="italic text-gold-gradient">propósito</span>,
            uma estação por vez.
          </h2>
          <p className="mt-6 text-white/65 max-w-lg">
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
                className={`group relative text-left p-7 rounded-2xl glass-card overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:ring-glow ${it.span}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--gold)]/10 via-transparent to-transparent" />
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/20 blur-3xl transition-all duration-700" />
                <div className="relative flex flex-col h-full justify-between">
                  <div className="flex items-start justify-between">
                    <span className="w-12 h-12 rounded-xl grid place-items-center bg-white/5 border border-white/10 text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-all duration-500">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[var(--gold)] group-hover:rotate-12 transition-all" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-white">
                      {it.title}
                    </h3>
                    <p className="text-xs italic mt-1.5 text-[var(--gold)]/85">
                      {it.verse}
                    </p>
                  </div>
                </div>
                {hover === idx && (
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full glass-gold text-[var(--gold-soft)] text-[11px] animate-fade-up">
                    {it.tip}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="group inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full bg-gradient-to-r from-[var(--gold-soft)] to-[var(--gold)] text-[var(--ink)] text-sm hover:shadow-[var(--shadow-glow)] transition-all">
            Descobrir meu Propósito
            <span className="w-9 h-9 rounded-full bg-[var(--ink)] grid place-items-center text-[var(--gold)] transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
