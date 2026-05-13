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
    <section id="store" className="relative py-32 px-6 bg-[var(--sand)]/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--sage)] mb-4 block">
              03 — Mentor Store
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[var(--sage-deep)] leading-[1.05] text-balance max-w-2xl">
              Ferramentas para a sua{" "}
              <span className="italic text-[var(--gold)]">jornada diária</span>.
            </h2>
          </div>
          <a href="#" className="text-sm text-[var(--sage-deep)] gold-underline pb-1">
            Ver toda a coleção →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="group rounded-3xl overflow-hidden bg-[var(--card)] border border-[var(--border)] transition-all duration-500 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden bg-[var(--sand)]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button
                  onClick={() => onAdd(p)}
                  aria-label={`Adicionar ${p.name}`}
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[var(--sage-deep)] text-[var(--gold)] grid place-items-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-[var(--gold)] hover:text-[var(--sage-deep)]"
                >
                  <Plus className="w-5 h-5" strokeWidth={1.75} />
                </button>
              </div>
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--sage)] mb-2">
                    {p.category}
                  </p>
                  <h3 className="font-serif text-xl text-[var(--sage-deep)] leading-tight">
                    {p.name}
                  </h3>
                </div>
                <p className="font-serif text-xl text-[var(--sage-deep)] whitespace-nowrap">
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
