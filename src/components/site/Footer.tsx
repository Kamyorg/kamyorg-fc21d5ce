import { Link } from "@tanstack/react-router";
import { CONTACT, NAV_LINKS } from "@/lib/site-data";
import kamyorgLogo from "@/assets/kamyorg-logo.png.asset.json";
import heroesLogo from "@/assets/heroes-agency-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={kamyorgLogo.url} alt="Kamyorg Agency logo" className="h-10 w-10 rounded-lg object-cover ring-1 ring-border" />
              <span className="font-display text-xl font-bold">Kamyorg Agency</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Mohammed Kamaldeen — Shopify developer, designer and store growth specialist. Building and
              improving online stores for brands in the UK, US, Europe and South America.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src={heroesLogo.url} alt="TheHeroes Agency logo" className="h-10 w-10 rounded-full object-cover ring-1 ring-border" />
              <div className="text-xs text-muted-foreground">
                <div className="uppercase tracking-wider text-brand">Working with</div>
                <div className="mt-0.5 text-foreground">TheHeroes Agency</div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs uppercase tracking-wider text-muted-foreground">Navigate</div>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground transition-colors hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs uppercase tracking-wider text-muted-foreground">Get in touch</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="text-muted-foreground transition-colors hover:text-brand">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-brand">
                  {CONTACT.whatsapp}
                </a>
              </li>
              <li className="text-muted-foreground">{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-7 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Kamyorg Agency — Mohammed Kamaldeen. All rights reserved.</div>
          <div>Built and maintained from London.</div>
        </div>
      </div>
    </footer>
  );
}
