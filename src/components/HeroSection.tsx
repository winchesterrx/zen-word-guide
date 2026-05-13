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
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center grain">
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
        {/* Dramatic layered overlay */}
        <div className="absolute inset-0 bg-[var(--ink)]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/70 via-transparent to-[var(--ink)]/40" />
        {/* Gold ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[var(--gold)]/15 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" strokeWidth={1.5} />
          <span className="text-xs tracking-[0.25em] uppercase text-[var(--gold-soft)]">
            Luz e Propósito
          </span>
        </div>

        <h1 className="font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[1.02] text-white text-balance animate-fade-up [animation-delay:120ms] drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
          Uma pausa para a alma,
          <br />
          <span className="italic text-gold-gradient">um caminho</span> para o eterno.
        </h1>

        <div className="mt-10 h-14 relative max-w-xl mx-auto">
          {phrases.map((p, idx) => (
            <p
              key={idx}
              className={`absolute inset-0 text-lg md:text-xl text-white/85 font-light transition-all duration-700 drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] ${
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
            className="group relative inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full glass text-white text-sm tracking-wide hover:ring-glow transition-all"
          >
            <span>Explorar Reflexões</span>
            <span className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] grid place-items-center text-[var(--ink)] transition-transform group-hover:rotate-45 shadow-[var(--shadow-glow)]">
              <ArrowRight className="w-4 h-4" strokeWidth={2.25} />
            </span>
          </button>
        </div>

        <p className="mt-6 text-[11px] text-white/55 tracking-[0.25em] uppercase animate-fade-up [animation-delay:500ms]">
          Reflexão do dia · Versículo + aplicação prática
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--gold)]/60 to-transparent" />
      </div>
    </section>
  );
}
