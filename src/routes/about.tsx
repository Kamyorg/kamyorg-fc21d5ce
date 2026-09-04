import { createFileRoute, Link } from "@tanstack/react-router";
import { SiShopify, SiWix, SiSquarespace, SiWhatsapp } from "react-icons/si";
import { Globe2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SocialIcons } from "@/components/site/SocialIcons";
import { CONTACT } from "@/lib/site-data";
import portrait from "@/assets/kamyorg-portrait.png.asset.json";
import heroesLogo from "@/assets/heroes-agency-logo.png.asset.json";
import { SmartImage } from "@/components/site/SmartImage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mohammed Kamaldeen — Kamyorg" },
      {
        name: "description",
        content:
          "Mohammed Kamaldeen is the Shopify developer and store growth specialist behind Kamyorg — store builds, redesigns, technical fixes, SEO and conversion work. Remote / Worldwide.",
      },
      { property: "og:title", content: "About Mohammed Kamaldeen — Kamyorg" },
      {
        property: "og:description",
        content:
          "How I work on Shopify stores: structure, customer journey, technical fixes and growth. 2+ years, 20+ stores, remote / worldwide.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const FACTS = [
  { k: "2+ yrs", v: "Consistent client work" },
  { k: "20+", v: "Stores built or improved" },
  { k: "Remote", v: "Worldwide clients" },
  { k: "Partner", v: "TheHeroes Agency" },
];

const STORY = [
  {
    n: "01",
    t: "Started with other people's problems",
    d: "My first paid work wasn't building stores — it was fixing them. Broken sections, themes that behaved differently on mobile, checkout and tracking that quietly stopped working. Learning stores that way taught me how they're actually put together.",
  },
  {
    n: "02",
    t: "Moved into full builds and redesigns",
    d: "Once I was comfortable in Liquid and theme architecture, the work shifted to complete builds and redesigns — structure, collection and product pages, custom sections and app setups, done so the owner can still manage the store afterwards.",
  },
  {
    n: "03",
    t: "Then everything around the store",
    d: "Clients kept asking for the parts next to development: SEO, email flows, product graphics, short-form video, ad creatives. I learned those properly instead of handing them off, so a project doesn't stall waiting on someone else.",
  },
];

const APPROACH = [
  {
    t: "I start with the customer's path, not the homepage",
    d: "Where people land, what they compare, where they hesitate. That decides what the layout needs to do before any visual choice gets made.",
  },
  {
    t: "Structure before decoration",
    d: "Navigation, collection logic, product page order and content hierarchy. A tidy structure makes a store easier to browse and easier to keep updated.",
  },
  {
    t: "Credibility is a detail job",
    d: "Consistent spacing, real imagery, clear policies and pricing, working links. Small things, but they're what makes a shop feel safe to buy from.",
  },
  {
    t: "Technical health counts as design",
    d: "Speed, mobile behaviour, broken tracking, indexing and on-page SEO get checked as part of the build — not treated as a separate project later.",
  },
  {
    t: "The business goal stays in view",
    d: "A store for a single hero product isn't built like a 400-SKU catalogue. I ask what the store needs to do commercially, then make choices that serve that.",
  },
];

const WHY = [
  { t: "You talk to the person doing the work", d: "No account manager relaying messages. You brief me, I build it, I answer the questions." },
  { t: "Design and development in one place", d: "The person choosing the layout is the person writing the Liquid, so nothing gets lost between design and build." },
  { t: "Shopify beyond the theme editor", d: "Custom sections, metafields, app integrations, migrations and theme code — not only what a drag-and-drop panel allows." },
  { t: "Marketing context, not just files", d: "Because I also handle SEO, email and creatives, the store gets built in a way that those channels can actually use." },
  { t: "Set up for remote work", d: "Clear updates, agreed timelines and communication over email or WhatsApp. Time zones haven't been a problem yet." },
  { t: "Still around after launch", d: "Fixes, product uploads, updates and ongoing store management if you want them." },
];

const SKILL_GROUPS = [
  {
    g: "Shopify & eCommerce",
    Icon: SiShopify,
    items: ["Store Design", "Development", "Theme Customization", "Migration", "Store Management", "Technical Fixes"],
  },
  {
    g: "Growth & Optimization",
    Icon: Globe2,
    items: ["Conversion Optimization", "Shopify SEO", "Store Structure", "Customer Experience", "Performance"],
  },
  {
    g: "Creative & Marketing",
    Icon: SiSquarespace,
    items: ["Graphic Design", "Email Marketing", "Social Media Management", "Short-Form Video", "Ad Creative", "Content"],
  },
];

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="page-enter flex-1 pt-16 md:pt-20">
        {/* WHO I AM ------------------------------------------------ */}
        <section className="container-site pt-14 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="eyebrow">About</p>
              <h1 className="mt-4 max-w-2xl font-display text-[1.9rem] font-semibold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
                I'm Mohammed Kamaldeen. Kamyorg is the name I work under.
              </h1>
              <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Kamyorg covers everything I do around Shopify: building stores, redesigning existing ones, fixing
                  what's broken, and the design and growth work that sits next to it.
                </p>
                <p>
                  Most people who come to me already have a store that looks acceptable. What they need is one that
                  makes sense to shop in — clear structure, honest presentation, pages that load and work on a phone,
                  and a buying flow that doesn't lose people halfway through.
                </p>
              </div>
              <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Role</dt>
                  <dd className="mt-1 font-medium">Shopify Developer &amp; Store Growth Specialist</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Availability</dt>
                  <dd className="mt-1 font-medium">{CONTACT.availability}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl ring-1 ring-border lg:max-w-none">
                <SmartImage
                  src={portrait.url}
                  alt="Mohammed Kamaldeen, Shopify developer working under the name Kamyorg"
                  width={900}
                  height={1100}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="overlay-card absolute bottom-3 left-3 right-3 flex items-center gap-2.5 px-3.5 py-2.5">
                  <SiShopify className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  <span className="text-xs leading-tight text-muted-foreground">
                    Shopify development, design and store growth — remote / worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Credibility strip */}
          <ul className="hairline mt-14 grid grid-cols-2 gap-6 pt-8 sm:grid-cols-4">
            {FACTS.map((f) => (
              <li key={f.k}>
                <div className="font-display text-xl font-semibold text-brand sm:text-2xl">{f.k}</div>
                <div className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{f.v}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* HOW I GOT HERE ----------------------------------------- */}
        <section className="container-site pt-16 md:pt-24">
          <div className="max-w-xl">
            <p className="eyebrow">Background</p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-[2rem]">
              How the work developed
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {STORY.map((s) => (
              <article key={s.n} className="surface rounded-2xl p-6">
                <span className="text-xs tracking-[0.2em] text-brand">{s.n}</span>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Two-plus years in, that's added up to more than twenty stores across activewear, beauty, wellness,
            collectibles and general retail, with clients in Europe, North America and South America. Shopify is the
            main platform; I also build on Wix and Squarespace when a project suits them better.
          </p>
          <ul className="mt-6 flex flex-wrap items-center gap-6">
            {[
              { Icon: SiShopify, label: "Shopify" },
              { Icon: SiWix, label: "Wix" },
              { Icon: SiSquarespace, label: "Squarespace" },
            ].map(({ Icon, label }) => (
              <li key={label}>
                <Icon role="img" aria-label={label} title={label} className="h-5 w-5 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </section>

        {/* HOW I APPROACH THE WORK -------------------------------- */}
        <section className="container-site pt-16 md:pt-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Approach</p>
              <h2 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-[2rem]">
                How I work on a store
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                A redesign isn't only a visual job. These are the things I go through on every project, whether it's a
                new build or a store that needs sorting out.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-border">
                {APPROACH.map((a) => (
                  <li key={a.t} className="flex flex-col gap-2 py-5 first:pt-0 sm:flex-row sm:gap-8">
                    <h3 className="font-display text-base font-medium leading-snug sm:w-2/5">{a.t}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:flex-1">{a.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WHAT I BRING ------------------------------------------- */}
        <section className="container-site pt-16 md:pt-24">
          <div className="max-w-xl">
            <p className="eyebrow">Expertise</p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-[2rem]">
              What I bring to a project
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {SKILL_GROUPS.map(({ g, Icon, items }) => (
              <article key={g} className="surface-alt rounded-2xl p-6">
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-brand" aria-hidden />
                  <h3 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{g}</h3>
                </div>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {items.map((i) => (
                    <li key={i} className="text-muted-foreground">
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* WHY WORK WITH ME -------------------------------------- */}
        <section className="container-site pt-16 md:pt-24">
          <div className="max-w-xl">
            <p className="eyebrow">Why Kamyorg</p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-[2rem]">
              What working with me is like
            </h2>
          </div>
          <div className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.t}>
                <h3 className="font-display text-base font-medium leading-snug">{w.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERSHIP ------------------------------------------- */}
        <section className="container-site pt-16 md:pt-24">
          <div className="surface flex flex-col gap-6 rounded-2xl p-7 md:flex-row md:items-center md:gap-10 md:p-10">
            <SmartImage
              src={heroesLogo.url}
              alt="TheHeroes Agency"
              width={72}
              height={72}
              className="h-16 w-16 shrink-0 rounded-full object-cover ring-1 ring-border"
            />
            <div className="max-w-2xl">
              <p className="eyebrow">Strategic partner</p>
              <h2 className="mt-2 font-display text-xl font-semibold leading-snug md:text-2xl">
                Working with TheHeroes Agency
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Kamyorg is my own practice and stays that way — you hire me directly. Alongside that, I collaborate
                with TheHeroes Agency as a strategic partner on larger Shopify and eCommerce projects, which means
                extra hands and a wider range of experience are available when a build calls for it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA --------------------------------------------------- */}
        <section className="container-site pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="surface-alt rounded-2xl p-8 md:p-12">
            <h2 className="max-w-xl font-display text-2xl font-semibold leading-snug md:text-3xl">
              If any of this sounds like what your store needs, let's talk it through.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Tell me what you're working with and what isn't going well. I'll come back with a plan, a timeline and a
              price before anything starts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Let's Work Together
              </Link>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <SiWhatsapp className="h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
            <SocialIcons size="sm" className="mt-6" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
