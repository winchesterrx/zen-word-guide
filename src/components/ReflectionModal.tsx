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
        className="absolute inset-0 bg-[var(--sage-deep)]/70 backdrop-blur-md"
      />
      <div
        key={key}
        className="relative w-full max-w-xl bg-[var(--background)] rounded-3xl overflow-hidden shadow-[var(--shadow-glow)] animate-fade-up"
      >
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[var(--sand)] to-transparent pointer-events-none" />
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 w-9 h-9 rounded-full grid place-items-center hover:bg-[var(--sand)] transition-colors text-[var(--sage-deep)]"
        >
          <X className="w-4 h-4" strokeWidth={1.75} />
        </button>

        <div className="relative px-10 pt-14 pb-10">
          <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[var(--gold)] mb-6">
            <span className="w-6 h-px bg-[var(--gold)]" />
            Reflexão do Dia
          </div>

          <blockquote className="font-serif text-3xl md:text-4xl text-[var(--sage-deep)] leading-tight italic text-balance">
            {r.verse}
          </blockquote>
          <p className="mt-4 text-sm text-[var(--sage)] tracking-wide">— {r.ref}</p>

          <div className="mt-8 pt-8 border-t border-[var(--border)]">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--sage)] mb-3">
              Aplicação Prática
            </p>
            <p className="text-[var(--foreground)] leading-relaxed">{r.application}</p>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <button
              onClick={next}
              className="inline-flex items-center gap-2 text-sm text-[var(--sage-deep)] hover:text-[var(--gold)] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" strokeWidth={1.75} />
              Outra reflexão
            </button>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--sage-deep)] text-[var(--background)] text-sm hover:bg-[var(--foreground)] transition-colors">
              <Bookmark className="w-3.5 h-3.5" strokeWidth={1.75} />
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
