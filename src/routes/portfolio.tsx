import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Shopify Stores by Kamyorg Agency" },
      { name: "description", content: "Selected Shopify builds, redesigns and store improvements: RebelShape.fr, Trade-collector.com, Bon-Ceero and Slimora-Sculpt." },
      { property: "og:title", content: "Portfolio — Shopify Stores by Kamyorg Agency" },
      { property: "og:description", content: "Selected Shopify builds, redesigns and store improvements." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Stores I've built and improved"
      intro="A few of the projects I've worked on recently, with what I actually did on each one."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <article key={p.slug} className="glass overflow-hidden rounded-2xl">
            <img src={p.img} alt={`${p.t} Shopify store design`} loading="lazy" className="h-56 w-full object-cover" />
            <div className="p-6">
              <div className="text-xs uppercase tracking-wider text-brand">{p.c}</div>
              <h2 className="mt-2 font-display text-xl font-bold">{p.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</li>
                ))}
              </ul>
              {p.caseStudy && (
                <Link to="/case-studies" className="mt-5 inline-flex text-sm font-semibold text-brand hover:text-brand-soft">
                  Read the case study →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
