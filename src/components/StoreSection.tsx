import { Plus } from "lucide-react";
import bibleImg from "@/assets/product-bible.jpg";
import journalImg from "@/assets/product-journal.jpg";
import courseImg from "@/assets/product-course.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  { id: "p1", name: "Bíblia de Estudo Sálvia", category: "Bíblia", price: 189, image: bibleImg },
  { id: "p2", name: "Diário de Oração 'Manhã'", category: "Diário", price: 79, image: journalImg },
  { id: "p3", name: "Curso · Identidade em Cristo", category: "Curso", price: 249, image: courseImg },
];

interface Props {
  onAdd: (p: Product) => void;
}

export function StoreSection({ onAdd }: Props) {
  return (
    <section id="store" className="relative py-32 px-6 overflow-hidden grain bg-[var(--ink)]">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[var(--gold)]/8 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4 block">
              03 — Mentor Store
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.05] text-balance max-w-2xl">
              Ferramentas para a sua{" "}
              <span className="italic text-gold-gradient">jornada diária</span>.
            </h2>
          </div>
          <a href="#" className="text-sm text-white/80 gold-underline pb-1">
            Ver toda a coleção →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="group rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:ring-glow"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent" />
                <button
                  onClick={() => onAdd(p)}
                  aria-label={`Adicionar ${p.name}`}
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-[var(--ink)] grid place-items-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[var(--shadow-glow)]"
                >
                  <Plus className="w-5 h-5" strokeWidth={2} />
                </button>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[10px] tracking-[0.2em] uppercase text-white">
                  {p.category}
                </div>
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <h3 className="font-serif text-xl text-white leading-tight">
                  {p.name}
                </h3>
                <p className="font-serif text-xl text-gold-gradient whitespace-nowrap">
                  R$ {p.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
