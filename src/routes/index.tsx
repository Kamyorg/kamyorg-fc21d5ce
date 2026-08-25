import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CONTACT, PROCESS, PROJECTS, REVIEWS, SERVICE_GROUPS } from "@/lib/site-data";
import heroesLogo from "@/assets/heroes-agency-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamyorg Agency — Shopify Development & Growth" },
      {
        name: "description",
        content:
          "Kamyorg Agency builds, redesigns and manages Shopify stores. Shopify development, design and store growth, led by Mohammed Kamaldeen (Kamyorg). Remote, worldwide.",
      },
      { property: "og:title", content: "Kamyorg Agency — Shopify Development & Growth" },
      {
        property: "og:description",
        content: "Shopify development, design and store growth, led by Mohammed Kamaldeen (Kamyorg). Remote / Worldwide.",
      },
    ],
  }),
  component: HomePage,
});

function SectionHead({
  eyebrow,
  title,
  to,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  to?: "/about" | "/services" | "/work" | "/testimonials" | "/contact";
  linkLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-[1.75rem] font-extrabold leading-tight sm:text-4xl">{title}</h2>
      </div>
      {to && linkLabel && (
        <Link
          to={to}
          className="shrink-0 border-b border-border-strong pb-1 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}

function HomePage() {
  const selectedServices = SERVICE_GROUPS.flatMap((g) => g.items).slice(0, 6);
  const selectedWork = PROJECTS.slice(0, 4);
  const preview = REVIEWS.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="page-enter flex-1 pt-16 md:pt-20">
        {/* 1. Hero */}
        <section className="container-site pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="max-w-4xl">
            <p className="eyebrow">Shopify Development • Design • Growth</p>
            <h1 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.03] sm:text-6xl lg:text-[4.25rem]">
              Kamyorg Agency builds and improves Shopify stores.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Led by Mohammed Kamaldeen — known as Kamyorg — working remotely with brands worldwide.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Let's Work Together
              </Link>
              <Link to="/work" className="btn-ghost">
                View Work
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Trust / proof */}
        <section className="hairline bg-background-alt">
          <div className="container-site grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 md:py-14">
            {[
              { k: "Availability", v: CONTACT.availability },
              { k: "Main focus", v: "Shopify" },
              { k: "Also on", v: "Wix & Squarespace" },
              { k: "Partner", v: "TheHeroes Agency" },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.k}</div>
                <div className="mt-2 font-display text-lg font-bold">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Selected services */}
        <section className="container-site section">
          <SectionHead eyebrow="Services" title="What the agency does" to="/services" linkLabel="All services" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {selectedServices.map((s) => (
              <div key={s.t} className="bg-background p-7">
                <h3 className="font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Selected work */}
        <section className="container-site section pt-0">
          <SectionHead eyebrow="Selected Work" title="Recent Shopify projects" to="/work" linkLabel="View all work" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {selectedWork.map((p) => (
              <article key={p.slug} className="surface rounded-2xl p-7">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.c}</div>
                <h3 className="mt-3 font-display text-xl font-bold">{p.t}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* 5. About introduction + 6. Partnership */}
        <section className="container-site section pt-0">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">About</p>
              <h2 className="mt-3 font-display text-[1.75rem] font-extrabold leading-tight sm:text-4xl">
                The person behind Kamyorg Agency
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Mohammed Kamaldeen is a Shopify developer, designer and store growth specialist working remotely with
                clients worldwide.
              </p>
              <Link
                to="/about"
                className="mt-7 inline-flex border-b border-border-strong pb-1 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
              >
                Read more
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="surface rounded-2xl p-7">
                <p className="eyebrow">Partnership</p>
                <div className="mt-5 flex items-center gap-4">
                  <img
                    src={heroesLogo.url}
                    alt="TheHeroes Agency"
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-1 ring-border"
                  />
                  <div>
                    <div className="font-display font-bold">TheHeroes Agency</div>
                    <div className="text-sm text-muted-foreground">Strategic partner on larger client projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Testimonials preview */}
        <section className="container-site section pt-0">
          <SectionHead eyebrow="Testimonials" title="What clients say" to="/testimonials" linkLabel="All reviews" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {preview.map((r) => (
              <figure key={r.n} className="surface flex h-full flex-col rounded-2xl p-7">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">{r.q}</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{r.n}</span>
                  <span className="block text-xs text-muted-foreground">{r.r}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 8. Working process */}
        <section className="container-site section pt-0">
          <SectionHead eyebrow="Process" title="How a project runs" to="/services" linkLabel="More detail" />
          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <li key={p.n} className="bg-background p-7">
                <div className="text-sm font-semibold text-brand">{p.n}</div>
                <div className="mt-3 font-display font-bold">{p.t}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* 9. Final CTA */}
        <section className="hairline bg-background-alt">
          <div className="container-site section">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Contact</p>
                <h2 className="mt-3 font-display text-[1.75rem] font-extrabold leading-tight sm:text-4xl">
                  Tell me about your store
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {CONTACT.email} · WhatsApp {CONTACT.whatsapp} · {CONTACT.availability}
                </p>
              </div>
              <Link to="/contact" className="btn-primary shrink-0">
                Let's Work Together
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
