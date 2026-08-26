import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageCTA } from "@/components/site/PageShell";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Shopify Stores by Kamyorg" },
      {
        name: "description",
        content:
          "Shopify builds, redesigns and store improvements by Kamyorg: RebelShape.fr, Trade-collector.com, Bon-Ceero and Slimora-Sculpt.",
      },
      { property: "og:title", content: "Work — Shopify Stores by Kamyorg" },
      { property: "og:description", content: "Shopify builds, redesigns and store improvements, project by project." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const featured = PROJECTS.find((p) => p.caseStudy) ?? PROJECTS[0];
  const rest = PROJECTS.filter((p) => p.slug !== featured.slug);

  return (
    <PageShell
      eyebrow="Work"
      title="Stores I've built and improved"
      intro="Projects grouped in one place — what each store needed, and what I actually did on it."
    >
      {/* Featured project */}
      <article className="surface overflow-hidden rounded-2xl">
        <img
          src={featured.img}
          alt={`${featured.t} Shopify store design`}
          loading="lazy"
          className="h-56 w-full object-cover sm:h-72 lg:h-80"
        />
        <div className="p-7 md:p-10">
          <p className="eyebrow">Featured project</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold md:text-3xl">{featured.t}</h2>
          <div className="mt-1 text-sm text-muted-foreground">{featured.c}</div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-display font-bold">The starting point</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                An activewear store on the Shrine Pro theme that had grown messy over time — inconsistent sections, a
                confusing collection layout and a handful of theme errors showing on the front end.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold">What I did</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rebuilt the homepage, collection and product pages around a consistent structure, cleaned up the theme
                code, fixed the existing technical errors and tidied the mobile layout.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold">Where it landed</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The store now reads like a proper brand instead of a template, the product pages are easier to follow,
                and the owner can update sections without breaking the layout.
              </p>
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {featured.tags.map((t) => (
              <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Other projects */}
      <section className="mt-16 md:mt-20">
        <h2 className="font-display text-2xl font-extrabold md:text-3xl">Other projects</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {rest.map((p) => (
            <article key={p.slug} className="surface overflow-hidden rounded-2xl">
              <img
                src={p.img}
                alt={`${p.t} Shopify store design`}
                loading="lazy"
                className="h-48 w-full object-cover sm:h-56"
              />
              <div className="p-6 md:p-7">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.c}</div>
                <h3 className="mt-2 font-display text-xl font-bold">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-14">
        <Link to="/services" className="btn-ghost">
          See what's included
        </Link>
      </div>

      <PageCTA
        heading="Want something similar for your store?"
        sub="Send me your store link and what you'd like changed, and I'll come back with a plan, a timeline and a price."
      />
    </PageShell>
  );
}
