import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-sunrise.jpg";

const phrases = [
  "Sabedoria milenar para desafios modernos.",
  "Encontre a paz que excede todo o entendimento.",
  "Sua jornada de propósito guiada pela Palavra.",
];

interface Props {
  onReflect: () => void;
}

export function HeroSection({ onReflect }: Props) {
  const [i, setI] = useState(0);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % phrases.length), 4500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 -top-20 -bottom-20"
        style={{ transform: `translateY(${parallax}px)` }}
      >
        <img
          src={heroImg}
          alt="Nascer do sol sobre dunas serenas"
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-[var(--sage-deep)]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" strokeWidth={1.5} />
          <span className="text-xs tracking-[0.2em] uppercase text-white/90">
            Luz e Propósito
          </span>
        </div>

        <h1 className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.05] text-white text-balance animate-fade-up [animation-delay:120ms]">
          Uma pausa para a alma,
          <br />
          <span className="italic text-[var(--gold)]">um caminho</span> para o eterno.
        </h1>

        <div className="mt-10 h-14 relative max-w-xl mx-auto">
          {phrases.map((p, idx) => (
            <p
              key={idx}
              className={`absolute inset-0 text-lg md:text-xl text-white/85 font-light transition-all duration-700 ${
                i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 flex justify-center animate-fade-up [animation-delay:300ms]">
          <button
            onClick={onReflect}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full glass-dark text-white text-sm tracking-wide hover:bg-white/15 transition-all hover:shadow-[var(--shadow-glow)]"
          >
            <span>Explorar Reflexões</span>
            <span className="w-8 h-8 rounded-full bg-[var(--gold)] grid place-items-center text-[var(--sage-deep)] transition-transform group-hover:rotate-45">
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </span>
          </button>
        </div>

        <p className="mt-6 text-xs text-white/60 tracking-widest uppercase animate-fade-up [animation-delay:500ms]">
          Reflexão do dia · Versículo + aplicação prática
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>
  );
}
