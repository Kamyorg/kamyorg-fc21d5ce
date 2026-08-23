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
    <div className="min-h-screen">
      <Nav />
      <main className="px-5 pt-32 pb-24">
        <div className="mx-auto max-w-7xl">
          <header className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-brand">{eyebrow}</div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
            {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
          </header>
          <div className="mt-14">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
