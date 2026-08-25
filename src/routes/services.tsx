import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SERVICE_GROUPS, PROCESS } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Shopify Services — Kamyorg Agency" },
      { name: "description", content: "Shopify design, development, redesigns, technical fixes, CRO, SEO, email marketing, ads, graphics and store management." },
      { property: "og:title", content: "Shopify Services — Kamyorg Agency" },
      { property: "og:description", content: "Shopify design, development, redesigns, fixes, CRO, SEO, email, ads and store management." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="What I can do for your store"
      intro="Everything below is work I do myself. If your project needs something that isn't listed, ask me and I'll tell you honestly whether I'm the right fit."
    >
      <div className="space-y-14">
        {SERVICE_GROUPS.map((g) => (
          <section key={g.group}>
            <h2 className="font-display text-2xl font-bold">{g.group}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((i) => (
                <div key={i.t} className="surface rounded-2xl p-6 transition-colors hover:border-brand/40">
                  <h3 className="font-display text-lg font-semibold">{i.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold">How we work together</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-5">
          {PROCESS.map((p) => (
            <li key={p.n} className="rounded-2xl border border-border p-5">
              <div className="text-sm text-brand">{p.n}</div>
              <div className="mt-2 font-display font-semibold">{p.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-14">
        <Link
          to="/contact"
          className="btn-primary"
        >
          Tell me about your project <span aria-hidden>→</span>
        </Link>
      </div>
    </PageShell>
  );
}
