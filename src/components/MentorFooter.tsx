import { Flame } from "lucide-react";

export function MentorFooter() {
  return (
    <footer
      className="relative text-white px-6 pt-24 pb-10 overflow-hidden grain"
      style={{ background: "linear-gradient(180deg, var(--sage-deep) 0%, var(--ink) 100%)" }}
    >
      <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--gold)]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-9 h-9 rounded-full grid place-items-center bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-[var(--ink)] shadow-[0_0_20px_-2px_var(--gold)]">
                <Flame className="w-4 h-4" strokeWidth={1.75} />
              </span>
              <span className="font-serif text-xl">
                Mentor <span className="italic text-gold-gradient">Bíblico</span>
              </span>
            </div>
            <p className="font-serif text-3xl md:text-4xl leading-tight text-balance max-w-md">
              Receba uma reflexão semanal direto no seu silêncio.
            </p>
            <form
              className="mt-8 flex gap-2 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-5 py-3.5 rounded-full glass text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-glow"
              />
              <button className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[var(--gold-soft)] to-[var(--gold)] text-[var(--ink)] text-sm font-medium hover:shadow-[var(--shadow-glow)] transition-all">
                Receber
              </button>
            </form>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {[
              { t: "Caminhos", l: ["Identidade", "Vocação", "Paz Mental", "Liderança"] },
              { t: "Mentor Store", l: ["Bíblias", "Diários", "Cursos", "Presentes"] },
              { t: "Comunidade", l: ["Reflexões", "Notícias do Reino", "Sobre", "Contato"] },
            ].map((c) => (
              <div key={c.t}>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold)] mb-5">
                  {c.t}
                </p>
                <ul className="space-y-3 text-white/75">
                  {c.l.map((x) => (
                    <li key={x}>
                      <a href="#" className="hover:text-[var(--gold)] transition-colors">
                        {x}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-wrap justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Mentor Bíblico. Todos os caminhos para a luz.</p>
          <p className="italic font-serif text-sm text-[var(--gold)]/85">
            "A tua palavra é lâmpada para os meus pés." — Sl 119:105
          </p>
        </div>
      </div>
    </footer>
  );
}
