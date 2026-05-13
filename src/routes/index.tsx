import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MentorHeader } from "@/components/MentorHeader";
import { HeroSection } from "@/components/HeroSection";
import { PurposeSection } from "@/components/PurposeSection";
import { StoreSection, type Product } from "@/components/StoreSection";
import { BlogSection } from "@/components/BlogSection";
import { MentorFooter } from "@/components/MentorFooter";
import { ReflectionModal } from "@/components/ReflectionModal";
import { CartDrawer, type CartItem } from "@/components/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mentor Bíblico — Luz e Propósito para a sua jornada" },
      {
        name: "description",
        content:
          "Sabedoria milenar para desafios modernos. Reflexões, cursos e ferramentas para uma vida com propósito guiada pela Palavra.",
      },
      { property: "og:title", content: "Mentor Bíblico — Luz e Propósito" },
      {
        property: "og:description",
        content: "Uma pausa para a alma, um caminho para o eterno.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [reflectOpen, setReflectOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

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
    <div className="min-h-screen bg-[var(--background)]">
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <MentorHeader onCartOpen={() => setCartOpen(true)} cartCount={cartCount} />
      <main>
        <HeroSection onReflect={() => setReflectOpen(true)} />
        <PurposeSection />
        <StoreSection onAdd={addItem} />
        <BlogSection />
      </main>
      <MentorFooter />

      <ReflectionModal open={reflectOpen} onClose={() => setReflectOpen(false)} />
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
