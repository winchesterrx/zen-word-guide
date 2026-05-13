import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    img: blog1,
    tag: "Paz Mental",
    title: "Como manter a calma em tempos de ansiedade",
    read: "5 min",
  },
  {
    img: blog2,
    tag: "Estudo",
    title: "Três hábitos para uma leitura bíblica que transforma",
    read: "7 min",
  },
  {
    img: blog3,
    tag: "Identidade",
    title: "O que a oliveira ensina sobre raízes profundas",
    read: "4 min",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="relative py-32 px-6 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[var(--sage)] mb-4 block">
              04 — Notícias do Reino
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[var(--sage-deep)] leading-[1.05] text-balance">
              Reflexões para o seu{" "}
              <span className="italic text-[var(--gold)]">cotidiano</span>.
            </h2>
          </div>
          <a href="#" className="text-sm text-[var(--sage-deep)] gold-underline pb-1">
            Todos os artigos →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--sand)] mb-5">
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[var(--sage)] mb-3">
                <span>{post.tag}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                <span>{post.read}</span>
              </div>
              <h3 className="font-serif text-2xl text-[var(--sage-deep)] leading-snug group-hover:text-[var(--gold)] transition-colors">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
