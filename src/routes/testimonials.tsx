import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { REVIEWS, FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Feedback — Kamyorg" },
      { name: "description", content: "What store owners in the UK, US, France, Spain, Brazil and Colombia say about working with Mohammed Kamaldeen on their Shopify stores." },
      { property: "og:title", content: "Client Feedback — Kamyorg" },
      { property: "og:description", content: "What store owners say about working with Mohammed Kamaldeen on their Shopify stores." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <PageShell
      eyebrow="Testimonials"
      title="What clients say"
      intro="Feedback from store owners I've worked with, in their own words."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.n + r.r} className="surface flex flex-col rounded-2xl p-6">
            <blockquote className="text-sm leading-relaxed text-muted-foreground">"{r.q}"</blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <div className="font-display font-semibold">{r.n}</div>
              <div className="text-xs text-muted-foreground">{r.r}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold">Common questions</h2>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="cursor-pointer list-none font-display font-semibold">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <Link to="/contact" className="btn-primary">
          Get in touch
        </Link>
      </div>
    </PageShell>
  );
}
