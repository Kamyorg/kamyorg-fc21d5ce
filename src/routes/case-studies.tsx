import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Kamyorg Agency" },
      { name: "description", content: "A closer look at the RebelShape.fr Shopify redesign: what was broken, what I changed and how the store works now." },
      { property: "og:title", content: "Case Studies — Kamyorg Agency" },
      { property: "og:description", content: "A closer look at the RebelShape.fr Shopify redesign and other client work." },
    ],
  }),
  component: CaseStudiesPage,
});

const rebel = PROJECTS.find((p) => p.slug === "rebelshape")!;

function CaseStudiesPage() {
  return (
    <PageShell
      eyebrow="Case Studies"
      title="A closer look at the work"
      intro="Rather than list numbers I can't verify, here's a plain description of what the store looked like before, what I changed and why."
    >
      <article className="glass overflow-hidden rounded-3xl">
        <img src={rebel.img} alt="RebelShape.fr Shopify store redesign" className="h-72 w-full object-cover" />
        <div className="p-7 md:p-10">
          <div className="text-xs uppercase tracking-wider text-brand">{rebel.c}</div>
          <h2 className="mt-2 font-display text-3xl font-bold">{rebel.t}</h2>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-display font-semibold">The starting point</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                An activewear store on the Shrine Pro theme that had grown messy over time — inconsistent sections,
                a confusing collection layout and a handful of theme errors showing on the front end.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold">What I did</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rebuilt the homepage, collection and product pages around a consistent structure, cleaned up the
                theme code, fixed the existing technical errors and tidied the mobile layout.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold">Where it landed</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The store now reads like a proper brand instead of a template, the product pages are easier to
                follow, and the owner can update sections without breaking the layout.
              </p>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {rebel.tags.map((t) => (
              <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</li>
            ))}
          </ul>
        </div>
      </article>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link to="/portfolio" className="rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:border-brand/50">
          See more projects
        </Link>
        <Link to="/contact" className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-background hover:bg-brand-soft">
          Start a project
        </Link>
      </div>
    </PageShell>
  );
}
