import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kamyorg Agency — Shopify Developer" },
      { name: "description", content: "Tell me about your Shopify project. Email kamyorg001@gmail.com or message me on WhatsApp and I'll reply with a plan, timeline and price." },
      { property: "og:title", content: "Contact Kamyorg Agency — Shopify Developer" },
      { property: "og:description", content: "Tell me about your Shopify project and I'll reply with a plan, timeline and price." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Store / website: ${f.get("store")}`,
      `Service needed: ${f.get("service")}`,
      `Rough budget: ${f.get("budget")}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("New project enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = "mt-2 w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-brand";

  return (
    <PageShell
      eyebrow="Contact"
      title="Let's talk about your store"
      intro="Tell me a little about your project and I'll get back to you with a plan, a timeline and a price."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <form onSubmit={onSubmit} className="surface rounded-3xl p-7 lg:col-span-3">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm">
              <span className="text-muted-foreground">Name</span>
              <input name="name" required placeholder="Your name" className={field} />
            </label>
            <label className="text-sm">
              <span className="text-muted-foreground">Email</span>
              <input name="email" type="email" required placeholder="you@email.com" className={field} />
            </label>
            <label className="text-sm">
              <span className="text-muted-foreground">Store or website</span>
              <input name="store" placeholder="yourstore.com (optional)" className={field} />
            </label>
            <label className="text-sm">
              <span className="text-muted-foreground">Service needed</span>
              <select name="service" className={field} defaultValue="Shopify store design">
                <option>Shopify store design</option>
                <option>Shopify development</option>
                <option>Store redesign</option>
                <option>Technical fixes</option>
                <option>Conversion optimization</option>
                <option>Shopify SEO</option>
                <option>Email marketing</option>
                <option>Ads management</option>
                <option>Store management</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-muted-foreground">Rough budget</span>
              <input name="budget" placeholder="e.g. 500 – 5,000 (any currency)" className={field} />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-muted-foreground">Project details</span>
              <textarea name="message" required rows={5} placeholder="What are you trying to build or fix?" className={field} />
            </label>
          </div>
          <button
            type="submit"
            className="btn-primary mt-6 w-full sm:w-auto"
          >
            Send enquiry <span aria-hidden>→</span>
          </button>
          {sent && (
            <p className="mt-4 text-sm text-brand">
              Your email app should be opening. If it didn't, email me directly at {CONTACT.email}.
            </p>
          )}
        </form>

        <aside className="lg:col-span-2 space-y-4">
          <a href={`mailto:${CONTACT.email}`} className="surface block rounded-2xl p-6 transition-colors hover:border-brand/40">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
            <div className="mt-1.5 font-display text-lg font-semibold">{CONTACT.email}</div>
          </a>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="surface block rounded-2xl p-6 transition-colors hover:border-brand/40">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
            <div className="mt-1.5 font-display text-lg font-semibold">{CONTACT.whatsapp}</div>
          </a>
          <div className="surface rounded-2xl p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Availability</div>
            <div className="mt-1.5 text-sm">{CONTACT.availability}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I usually reply within a day. Most projects start with a short call or a few messages.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
