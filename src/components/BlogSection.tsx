import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  { img: blog1, tag: "Paz Mental", title: "Como manter a calma em tempos de ansiedade", read: "5 min" },
  { img: blog2, tag: "Estudo", title: "Três hábitos para uma leitura bíblica que transforma", read: "7 min" },
  { img: blog3, tag: "Identidade", title: "O que a oliveira ensina sobre raízes profundas", read: "4 min" },
];

export function BlogSection() {
  return (
    <section
      id="blog"
      className="relative py-32 px-6 overflow-hidden grain"
      style={{ background: "linear-gradient(180deg, var(--ink) 0%, var(--sage-deep) 100%)" }}
    >
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[var(--gold)]/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-4 block">
              04 — Notícias do Reino
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.05] text-balance">
              Reflexões para o seu{" "}
              <span className="italic text-gold-gradient">cotidiano</span>.
            </h2>
          </div>
          <a href="#" className="text-sm text-white/80 gold-underline pb-1">
            Todos os artigos →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 ring-1 ring-white/10">
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/30 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[10px] tracking-[0.2em] uppercase text-white">
                  {post.tag}
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.2em] uppercase text-white/80">
                  {post.read}
                </div>
              </div>
              <h3 className="font-serif text-2xl text-white leading-snug group-hover:text-[var(--gold)] transition-colors">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
