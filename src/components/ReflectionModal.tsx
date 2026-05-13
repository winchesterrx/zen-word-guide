import { X, RefreshCw, Bookmark } from "lucide-react";
import { useEffect, useState } from "react";

const reflections = [
  {
    verse: "“O Senhor é o meu pastor; nada me faltará.”",
    ref: "Salmos 23:1",
    application:
      "Hoje, antes de listar o que falta, agradeça por três coisas que já estão presentes. A confiança floresce na atenção ao agora.",
  },
  {
    verse: "“Aquietai-vos e sabei que eu sou Deus.”",
    ref: "Salmos 46:10",
    application:
      "Reserve dois minutos em silêncio absoluto antes da próxima reunião. A clareza nasce na pausa.",
  },
  {
    verse: "“Tudo posso naquele que me fortalece.”",
    ref: "Filipenses 4:13",
    application:
      "Identifique uma tarefa que você vinha adiando por medo. Dê apenas o primeiro passo hoje — apenas o primeiro.",
  },
  {
    verse: "“O coração alegre é bom remédio.”",
    ref: "Provérbios 17:22",
    application:
      "Envie uma mensagem de gratidão a alguém que cruzou seu caminho recentemente. Alegria compartilhada se multiplica.",
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ReflectionModal({ open, onClose }: Props) {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * reflections.length));
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (open) {
      setIdx(Math.floor(Math.random() * reflections.length));
      setKey((k) => k + 1);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  const r = reflections[idx];

  const next = () => {
    setIdx((p) => (p + 1) % reflections.length);
    setKey((k) => k + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-up">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[var(--ink)]/85 backdrop-blur-xl"
      />
      <div
        key={key}
        className="relative w-full max-w-xl glass-card rounded-3xl overflow-hidden ring-glow animate-fade-up"
      >
        {/* Glow halo */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[var(--gold)]/30 blur-[100px] pointer-events-none" />

        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full grid place-items-center glass hover:bg-white/15 transition-colors text-white"
        >
          <X className="w-4 h-4" strokeWidth={1.75} />
        </button>

        <div className="relative px-10 pt-14 pb-10">
          <div className="flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[var(--gold)] mb-6">
            <span className="w-6 h-px bg-[var(--gold)]" />
            Reflexão do Dia
          </div>

          <blockquote className="font-serif text-3xl md:text-4xl text-white leading-tight italic text-balance">
            {r.verse}
          </blockquote>
          <p className="mt-4 text-sm text-[var(--gold)] tracking-wide">— {r.ref}</p>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-3">
              Aplicação Prática
            </p>
            <p className="text-white/85 leading-relaxed">{r.application}</p>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={next}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[var(--gold)] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" strokeWidth={1.75} />
              Outra reflexão
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--gold-soft)] to-[var(--gold)] text-[var(--ink)] text-sm font-medium hover:shadow-[var(--shadow-glow)] transition-all">
              <Bookmark className="w-3.5 h-3.5" strokeWidth={2} />
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
