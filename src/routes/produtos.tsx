import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MentorHeader } from "@/components/MentorHeader";
import { StoreSection, type Product, products } from "@/components/StoreSection";
import { MentorFooter } from "@/components/MentorFooter";
import { CartDrawer, type CartItem } from "@/components/CartDrawer";
import { Sparkles, Filter } from "lucide-react";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Nossa Coleção — Mentor Bíblico" },
      {
        name: "description",
        content: "Explore nossa coleção de Bíblias, diários e cursos projetados para sua jornada espiritual.",
      },
    ],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);
  const [category, setCategory] = useState<string>("Todos");

  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

  const filteredProducts = category === "Todos" 
    ? products 
    : products.filter(p => p.category === category);

  const addItem = (p: Product) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...p, qty: 1 }];
    });
    setCartOpen(true);
  };

  const inc = (id: string) =>
    setItems((p) => p.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const dec = (id: string) =>
    setItems((p) =>
      p.flatMap((i) =>
        i.id === id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i],
      ),
    );

  const cartCount = items.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-[var(--background)] grain">
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <MentorHeader onCartOpen={() => setCartOpen(true)} cartCount={cartCount} />
      
      <main className="pt-32 pb-20">
        {/* Page Hero */}
        <section className="relative px-6 mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-6 animate-fade-up">
              <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold-soft)]">
                Exclusividade e Fé
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 animate-fade-up [animation-delay:100ms]">
              Nossa <span className="italic text-gold-gradient">Coleção</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg font-light animate-fade-up [animation-delay:200ms]">
              Ferramentas selecionadas para aprofundar sua comunhão e organizar seu tempo com o Criador.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="px-6 mb-12 animate-fade-up [animation-delay:300ms]">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 mr-4 text-white/40 text-xs uppercase tracking-widest">
              <Filter className="w-3 h-3" />
              Filtrar por:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                  category === cat
                    ? "glass-gold text-[var(--gold)]"
                    : "glass text-white/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((p, idx) => (
                <article
                  key={p.id}
                  className="group rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:ring-glow animate-fade-up"
                  style={{ animationDelay: `${400 + idx * 100}ms` }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[10px] tracking-[0.2em] uppercase text-white">
                      {p.category}
                    </div>

                    <button
                      onClick={() => addItem(p)}
                      className="absolute bottom-6 right-6 px-6 py-3 rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-[var(--ink)] font-semibold text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[var(--shadow-glow)]"
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-2xl text-white leading-tight">
                        {p.name}
                      </h3>
                      <span className="font-serif text-2xl text-gold-gradient">
                        R$ {p.price}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm font-light line-clamp-2">
                      Um item exclusivo da nossa curadoria para elevar sua experiência de estudo e oração.
                    </p>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-white/40 font-serif text-2xl">
                Nenhum produto encontrado nesta categoria.
              </div>
            )}
          </div>
        </section>
      </main>

      <MentorFooter />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        onInc={inc}
        onDec={dec}
      />
    </div>
  );
}
