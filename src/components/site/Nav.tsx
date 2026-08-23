import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site-data";
import kamyorgLogo from "@/assets/kamyorg-logo.png.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <img
            src={kamyorgLogo.url}
            alt="Kamyorg Agency"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-cover ring-1 ring-border"
          />
          <span className="font-display text-[0.95rem] font-extrabold tracking-tight sm:text-base">
            Kamyorg <span className="font-medium text-muted-foreground">Agency</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-brand-soft md:inline-flex"
          >
            Let's Work Together
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-foreground transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-foreground transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-site flex flex-col py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="border-b border-border py-4 font-display text-lg font-semibold text-muted-foreground last:border-0"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-background"
            >
              Let's Work Together
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
