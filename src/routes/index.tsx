import { createFileRoute, Link } from "@tanstack/react-router";
import { SiShopify, SiWix, SiSquarespace } from "react-icons/si";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SocialIcons } from "@/components/site/SocialIcons";
import { CONTACT, PROCESS, PROJECTS, REVIEWS, SERVICE_GROUPS } from "@/lib/site-data";
import heroesLogo from "@/assets/heroes-agency-logo.png.asset.json";
import portrait from "@/assets/kamyorg-portrait.png.asset.json";
import { SmartImage } from "@/components/site/SmartImage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamyorg — Shopify Development & Growth" },
      {
        name: "description",
        content:
          "Mohammed Kamaldeen (Kamyorg) is a Shopify developer and store growth specialist. Store builds, redesigns, technical fixes, SEO and conversion work. Remote / Worldwide.",
      },
      { property: "og:title", content: "Kamyorg — Shopify Development & Growth" },
      {
        property: "og:description",
        content:
          "Shopify stores built and refined around how customers actually browse, compare and buy. Mohammed Kamaldeen, remote / worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kamyorg.lovable.app/" }],
  }),
  component: HomePage,
});

function SectionHead({
  eyebrow,
  title,
  sub,
  to,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  to?: "/about" | "/services" | "/work" | "/testimonials" | "/contact";
  linkLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-[2rem]">{title}</h2>
        {sub && <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">{sub}</p>}
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

const PLATFORMS = [
  { Icon: SiShopify, label: "Shopify" },
  { Icon: SiWix, label: "Wix" },
  { Icon: SiSquarespace, label: "Squarespace" },
];

const VALUE = [
  {
    t: "A store people trust in the first few seconds",
    d: "Most visitors decide whether a shop looks legitimate before they read a word. I fix the details that quietly cost you that trust — spacing, imagery, product presentation and consistency across pages.",
  },
  {
    t: "A path to checkout that doesn't lose people",
    d: "I look at how customers move from collection to product to cart, then remove the steps, confusion and slow pages that make them leave with a full basket.",
  },
  {
    t: "Technical problems handled properly",
    d: "Theme errors, broken layouts, tracking that never fired, checkout issues. I go into the theme code and fix the cause instead of hiding it.",
  },
  {
    t: "Being found by the right buyers",
    d: "Page structure, headings, product copy, speed and the technical SEO setup search engines need before they can rank you at all.",
  },
];

function HomePage() {
  const selectedServices = SERVICE_GROUPS.flatMap((g) => g.items).slice(0, 6);
  const selectedWork = PROJECTS.slice(0, 4);
  const preview = REVIEWS.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main className="page-enter flex-1 pt-16 md:pt-20">
        {/* 1. Hero — editorial split */}
        <section className="container-site pt-14 pb-16 md:pt-24 md:pb-24">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
            <div className="flex-1 space-y-8">
              <div className="space-y-5">
                <span className="eyebrow block">Mohammed Kamaldeen — Kamyorg</span>
                <h1 className="font-display text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4rem]">
                  Building{" "}
                  <span className="bg-gradient-to-r from-brand to-foreground bg-clip-text text-transparent">
                    Shopify stores
                  </span>{" "}
                  that people trust and buy from.
                </h1>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                  I build and refine Shopify stores so the shop looks credible, the buying journey makes sense, and the
                  technical side stops getting in the way.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Let's Work Together
                </Link>
                <Link to="/work" className="btn-ghost">
                  View My Work
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <SocialIcons size="sm" />
                <div className="hidden h-4 w-px bg-border-strong sm:block" />
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <Globe2 className="h-4 w-4 text-brand" aria-hidden />
                  {CONTACT.availability}
                </span>
              </div>
            </div>

            {/* Portrait with two purposeful overlays */}
            <div className="relative w-full max-w-sm flex-1 lg:max-w-none">
              <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-surface shadow-elevated">
                <SmartImage
                  src={portrait.url}
                  alt="Mohammed Kamaldeen, Shopify developer known as Kamyorg"
                  width={888}
                  height={1184}
                  className="aspect-[4/5] w-full object-cover object-top grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 z-20 rounded-xl border border-border-strong bg-surface p-5 shadow-elevated sm:-left-6 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl font-bold text-brand">2+</span>
                  <span className="text-[0.68rem] uppercase leading-tight tracking-wide text-muted-foreground">
                    Years
                    <br />
                    experience
                  </span>
                </div>
              </div>

              <div className="absolute -right-4 top-10 z-20 rounded-xl bg-brand p-5 text-center shadow-elevated sm:-right-6 sm:p-6">
                <div className="font-display text-2xl font-bold text-background">20+</div>
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-background">Stores</div>
              </div>

              <div className="glow-brand" aria-hidden />
            </div>
          </div>
        </section>

        {/* 2. Trust / platforms */}
        <section className="container-site">
          <div className="flex flex-col gap-8 border-y border-border py-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                Platforms I build on
              </span>
              {PLATFORMS.map(({ Icon, label }) => (
                <Icon
                  key={label}
                  role="img"
                  aria-label={label}
                  title={label}
                  className="h-6 w-6 text-muted-foreground transition-colors hover:text-brand"
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <SmartImage
                src={heroesLogo.url}
                alt="TheHeroes Agency"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-border"
              />
              <div className="text-sm">
                <div className="font-medium">Strategic partner — TheHeroes Agency</div>
                <div className="text-muted-foreground">Extra capacity on larger client projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Value / problems solved */}
        <section className="container-site section">
          <SectionHead
            eyebrow="What I help with"
            title="The things that usually stand between a store and its sales"
            sub="Most projects I take on start with one of these four problems."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE.map((v, i) => (
              <div
                key={v.t}
                className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-brand/40"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 font-display text-sm font-bold text-brand transition-colors group-hover:bg-brand group-hover:text-background">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg font-bold leading-snug">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Services */}
        <section className="container-site section pt-0">
          <SectionHead
            eyebrow="Services"
            title="Where I usually get involved"
            sub="From a first build to ongoing improvements on a store that already sells."
            to="/services"
            linkLabel="All services"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {selectedServices.map((s) => (
              <div
                key={s.t}
                className="rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-brand/40"
              >
                <h3 className="font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Selected work */}
        <section className="container-site section pt-0">
          <SectionHead
            eyebrow="Selected work"
            title="Recent Shopify projects"
            sub="A short selection — the full breakdown of each project lives on the work page."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {selectedWork.map((p) => (
              <article key={p.slug} className="surface group overflow-hidden rounded-2xl">
                <div className="relative">
                  <SmartImage
                    src={p.img}
                    alt={`${p.t} Shopify store`}
                    className="h-48 w-full object-cover sm:h-52"
                  />
                  <span className="overlay-card absolute left-4 top-4 inline-flex items-center gap-2 px-2.5 py-1.5 text-[0.7rem] text-muted-foreground">
                    <SiShopify className="h-3.5 w-3.5 text-brand" aria-hidden />
                    Shopify
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{p.c}</div>
                  <h3 className="mt-2 font-display text-lg font-medium">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/work"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-brand transition-colors hover:text-brand-soft"
                  >
                    View project <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-9">
            <Link to="/work" className="btn-ghost">
              View All Work
            </Link>
          </div>
        </section>

        {/* 6. About intro */}
        <section className="container-site section pt-0">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">About</p>
              <h2 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-[2rem]">
                The person you'll actually be working with
              </h2>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
                I'm Mohammed Kamaldeen. I've spent the last couple of years building, rebuilding and looking after
                Shopify stores for small brands and growing shops. You deal with me directly — the same person who
                writes the plan, builds the store and answers your messages after launch.
              </p>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
                I explain what I'm doing in plain language, give a fixed price before starting, and stay reachable when
                something needs changing later.
              </p>
              <Link
                to="/about"
                className="mt-7 inline-flex border-b border-border-strong pb-1 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
              >
                More about me
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="surface rounded-2xl p-7">
                <p className="eyebrow">Good to know</p>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <div className="font-medium">Fixed price, agreed upfront</div>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      You see the scope, timeline and cost before any work starts.
                    </p>
                  </li>
                  <li>
                    <div className="font-medium">Direct communication</div>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      Email or WhatsApp, with progress shared as the build moves.
                    </p>
                  </li>
                  <li>
                    <div className="font-medium">Support after launch</div>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      Fixes, updates and small changes once the store is live.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Testimonials */}
        <section className="container-site section pt-0">
          <SectionHead
            eyebrow="Client feedback"
            title="What people say after working with me"
            to="/testimonials"
            linkLabel="All feedback"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {preview.map((r) => (
              <figure key={r.n} className="surface flex h-full flex-col rounded-2xl p-7">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">{r.q}</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium">{r.n}</span>
                  <span className="block text-xs text-muted-foreground">{r.r}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 8. Process */}
        <section className="container-site section pt-0">
          <SectionHead
            eyebrow="Process"
            title="What happens after you get in touch"
            sub="No long onboarding — usually a short conversation, then a clear plan."
          />
          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <li key={p.n} className="bg-background p-7">
                <div className="text-xs tracking-[0.2em] text-brand">{p.n}</div>
                <div className="mt-3 font-display font-medium">{p.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 9. Contact */}
        <section className="hairline bg-background-alt">
          <div className="container-site section">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow">Contact</p>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-[2rem]">
                  Tell me what your store needs
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Send me the link and a short note about what's not working. I'll reply with what I'd change, how long
                  it takes and what it costs — no pressure either way.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <SocialIcons size="sm" />
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe2 className="h-4 w-4 text-brand" aria-hidden />
                    {CONTACT.availability}
                  </span>
                </div>
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
