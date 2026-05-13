import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingBag, Flame } from "lucide-react";

interface Props {
  onCartOpen: () => void;
  cartCount: number;
}

export function MentorHeader({ onCartOpen, cartCount }: Props) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Propósito", href: "#proposito" },
    { label: "Mentor Store", href: "#store" },
    { label: "Reino", href: "#blog" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-full grid place-items-center bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-[var(--ink)] transition-transform group-hover:rotate-12 shadow-[0_0_20px_-2px_var(--gold)]">
            <Flame className="w-4 h-4" strokeWidth={1.75} />
          </span>
          <span className="font-serif text-xl tracking-tight text-white">
            Mentor <span className="italic text-gold-gradient">Bíblico</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm text-white/85">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="gold-underline pb-1 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={onCartOpen}
          aria-label="Abrir carrinho"
          className="relative w-11 h-11 rounded-full grid place-items-center glass hover:ring-glow transition-all"
        >
          <ShoppingBag className="w-4 h-4 text-white" strokeWidth={1.75} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-[10px] grid place-items-center text-[var(--ink)] font-semibold shadow-[0_0_12px_var(--gold)]">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
