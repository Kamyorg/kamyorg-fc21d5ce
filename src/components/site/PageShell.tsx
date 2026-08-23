import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="page-enter flex-1 pt-16 md:pt-20">
        <header className="container-site pt-14 pb-2 md:pt-20">
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 font-display text-[2.15rem] font-extrabold leading-[1.06] sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            {intro && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
            )}
          </div>
        </header>
        <div className="container-site pt-12 pb-20 md:pt-16 md:pb-28">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export function PageCTA({ heading, sub }: { heading: string; sub?: string }) {
  return (
    <section className="surface mt-20 rounded-2xl p-8 md:p-12">
      <h2 className="font-display text-2xl font-extrabold md:text-3xl">{heading}</h2>
      {sub && <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{sub}</p>}
      <a
        href="/contact"
        className="mt-7 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand-soft"
      >
        Let's Work Together
      </a>
    </section>
  );
}
