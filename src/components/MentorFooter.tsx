import { Flame } from "lucide-react";

export function MentorFooter() {
  return (
    <footer className="relative bg-[var(--sage-deep)] text-[var(--background)] px-6 pt-24 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-9 h-9 rounded-full grid place-items-center bg-[var(--background)]/10">
                <Flame className="w-4 h-4 text-[var(--gold)]" strokeWidth={1.5} />
              </span>
              <span className="font-serif text-xl">
                Mentor <span className="italic text-[var(--gold)]">Bíblico</span>
              </span>
            </div>
            <p className="font-serif text-3xl md:text-4xl leading-tight text-balance max-w-md">
              Receba uma reflexão semanal direto no seu silêncio.
            </p>
            <form className="mt-8 flex gap-2 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--gold)]"
              />
              <button className="px-6 py-3.5 rounded-full bg-[var(--gold)] text-[var(--sage-deep)] text-sm hover:bg-white transition-colors">
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
                <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold)] mb-5">
                  {c.t}
                </p>
                <ul className="space-y-3 text-white/80">
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
          <p className="italic font-serif text-sm text-[var(--gold)]/80">
            “A tua palavra é lâmpada para os meus pés.” — Sl 119:105
          </p>
        </div>
      </div>
    </footer>
  );
}
