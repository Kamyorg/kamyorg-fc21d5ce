import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { SKILLS, CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mohammed Kamaldeen — Kamyorg" },
      { name: "description", content: "Mohammed Kamaldeen (Kamyorg) is a Shopify developer, designer and store growth specialist working remotely with brands worldwide." },
      { property: "og:title", content: "About Mohammed Kamaldeen — Kamyorg" },
      { property: "og:description", content: "Shopify developer, designer and store growth specialist working remotely with brands worldwide." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="I'm Mohammed Kamaldeen — most people know me as Kamyorg."
      intro="I build, redesign and manage Shopify stores. I work remotely with brands in Europe, North America and South America."
    >
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-2">
          <p>
            I started out fixing small problems on other people’s stores — a broken layout here, a checkout issue
            there. Over time that turned into full builds and redesigns, and then into looking after stores long
            after launch.
          </p>
          <p>
            Most of my work is Shopify: designing the store, building it properly in Liquid, and making sure the
            things that matter — speed, product pages, checkout, tracking — actually work. Alongside that I handle
            the parts store owners usually don't have time for: SEO, email flows, ads, graphics and content.
          </p>
          <p>
            I keep things simple. We talk about what you need, I tell you what it will cost and how long it will
            take, and I keep you updated while I build. No jargon, no disappearing after launch.
          </p>
          <p>I also work with TheHeroes Agency on larger client projects.</p>
        </div>

        <aside className="surface rounded-2xl p-6">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Details</div>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Availability</dt>
              <dd className="mt-1">{CONTACT.availability}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand">{CONTACT.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">WhatsApp</dt>
              <dd className="mt-1">
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-brand">{CONTACT.whatsapp}</a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">Tools I work with</h2>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {SKILLS.map((s) => (
            <li key={s} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              {s}
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
