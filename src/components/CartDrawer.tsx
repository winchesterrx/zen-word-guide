import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "./StoreSection";

export interface CartItem extends Product {
  qty: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onInc: (id: string) => void;
  onDec: (id: string) => void;
}

export function CartDrawer({ open, onClose, items, onInc, onDec }: Props) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-[var(--sage-deep)]/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[var(--background)] shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-7 py-6 border-b border-[var(--border)]">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--sage)]">
              Mentor Store
            </p>
            <h3 className="font-serif text-2xl text-[var(--sage-deep)] mt-0.5">
              Sua Cesta
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="w-9 h-9 rounded-full grid place-items-center hover:bg-[var(--sand)] transition-colors text-[var(--sage-deep)]"
          >
            <X className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[var(--muted-foreground)]">
              <span className="w-14 h-14 rounded-full bg-[var(--sand)] grid place-items-center mb-4">
                <ShoppingBag className="w-5 h-5 text-[var(--sage-deep)]" strokeWidth={1.5} />
              </span>
              <p className="font-serif text-lg text-[var(--sage-deep)]">
                Sua cesta aguarda silenciosa.
              </p>
              <p className="text-sm mt-2 max-w-xs">
                Adicione um item da Mentor Store para começar sua jornada.
              </p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((it) => (
                <li key={it.id} className="flex gap-4 pb-5 border-b border-[var(--border)]">
                  <img
                    src={it.image}
                    alt={it.name}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="w-20 h-20 rounded-xl object-cover bg-[var(--sand)]"
                  />
                  <div className="flex-1">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--sage)]">
                      {it.category}
                    </p>
                    <h4 className="font-serif text-base text-[var(--sage-deep)] leading-tight mt-0.5">
                      {it.name}
                    </h4>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onDec(it.id)}
                          className="w-7 h-7 rounded-full border border-[var(--border)] grid place-items-center hover:bg-[var(--sand)]"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.75} />
                        </button>
                        <span className="text-sm w-5 text-center">{it.qty}</span>
                        <button
                          onClick={() => onInc(it.id)}
                          className="w-7 h-7 rounded-full border border-[var(--border)] grid place-items-center hover:bg-[var(--sand)]"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.75} />
                        </button>
                      </div>
                      <span className="font-serif text-[var(--sage-deep)]">
                        R$ {it.price * it.qty}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-7 py-6 border-t border-[var(--border)] bg-[var(--sand)]/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[var(--muted-foreground)]">Subtotal</span>
              <span className="font-serif text-2xl text-[var(--sage-deep)]">
                R$ {total}
              </span>
            </div>
            <button className="w-full py-4 rounded-full bg-[var(--sage-deep)] text-[var(--background)] text-sm hover:bg-[var(--foreground)] transition-colors">
              Finalizar Compra
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
