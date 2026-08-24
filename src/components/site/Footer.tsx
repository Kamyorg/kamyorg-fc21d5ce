import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site-data";
import kamyorgLogo from "@/assets/kamyorg-logo.png.asset.json";

const EXPLORE = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
] as const;

export function Footer() {
  return (
    <footer className="hairline bg-background-alt">
      <div className="container-site py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <img
                src={kamyorgLogo.url}
                alt="Kamyorg Agency"
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9 rounded-lg object-cover ring-1 ring-border"
              />
              <span className="font-display text-base font-extrabold tracking-tight">
                Kamyorg <span className="font-medium text-muted-foreground">Agency</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Shopify development, design and store growth, led by Mohammed Kamaldeen (Kamyorg).
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Explore</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {EXPLORE.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Connect</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/testimonials" className="text-muted-foreground transition-colors hover:text-foreground">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="text-muted-foreground transition-colors hover:text-foreground">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Availability</div>
            <p className="mt-4 text-sm font-semibold">{CONTACT.availability}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Strategic partner: TheHeroes Agency
            </p>
          </div>
        </div>

        <div className="hairline mt-12 flex flex-col gap-2 pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Kamyorg Agency</span>
          <span>Shopify Development • Design • Growth</span>
        </div>
      </div>
    </footer>
  );
}
