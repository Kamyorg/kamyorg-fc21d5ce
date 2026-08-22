import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site-data";
import kamyorgLogo from "@/assets/kamyorg-logo.png.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-5">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled || open ? "glass rounded-2xl px-4 py-2.5" : ""}`}>
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <img src={kamyorgLogo.url} alt="Kamyorg Agency logo" className="h-9 w-9 rounded-lg object-cover ring-1 ring-border" />
            <span className="font-display text-lg font-bold tracking-tight">
              Kamyorg <span className="text-muted-foreground font-medium">Agency</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-brand-soft"
            >
              Let's Talk <span aria-hidden>→</span>
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl glass"
            >
              <span className="text-lg">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden mt-2 glass rounded-2xl p-3 flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
