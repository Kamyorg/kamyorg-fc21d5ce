import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, LoaderCircle, RotateCcw, WandSparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { recommendShopifyServices } from "@/lib/shopify-recommender.functions";
import type { ShopifyBrief, ShopifyRecommendationResult } from "@/lib/shopify-recommender.schema";
import { SmartImage } from "./SmartImage";

const INITIAL_BRIEF: ShopifyBrief = {
  stage: "live",
  goal: "sales",
  challenge: "",
  context: "",
};

const SELECT_CLASS =
  "mt-2 h-12 w-full rounded-lg border border-input bg-background-alt px-3 text-sm text-foreground outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-ring";

export function ShopifyRecommender() {
  const recommend = useServerFn(recommendShopifyServices);
  const [brief, setBrief] = useState<ShopifyBrief>(INITIAL_BRIEF);
  const [result, setResult] = useState<ShopifyRecommendationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState("");

  const update = <Key extends keyof ShopifyBrief>(key: Key, value: ShopifyBrief[Key]) => {
    setBrief((current) => ({ ...current, [key]: value }));
    if (validationError) setValidationError("");
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (brief.challenge.trim().length < 12) {
      setValidationError("Please share a little more about the main challenge.");
      return;
    }

    setLoading(true);
    setResult(null);
    setValidationError("");
    try {
      setResult(await recommend({ data: brief }));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Recommendations are temporarily unavailable.";
      setResult({ ok: false, error: message });
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setBrief(INITIAL_BRIEF);
    setResult(null);
    setValidationError("");
  };

  return (
    <section aria-labelledby="service-match-title" className="border-y border-border bg-background-alt">
      <div className="container-site section">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="max-w-md">
            <p className="eyebrow">Service match</p>
            <h2 id="service-match-title" className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              Not sure what your store needs first?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Share where the store is now and what you want to improve. You’ll get a focused starting point based on
              the services I offer and stores I’ve actually worked on.
            </p>
            <div className="mt-8 border-l-2 border-brand pl-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                This is a useful first recommendation, not a quote. I’ll confirm the right scope after looking at your
                store and speaking with you.
              </p>
            </div>
          </div>

          <div className="surface overflow-hidden rounded-2xl">
            <form onSubmit={submit} className="p-6 md:p-8" aria-busy={loading}>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="text-sm font-medium">
                  Where is your store now?
                  <select
                    value={brief.stage}
                    onChange={(event) => update("stage", event.target.value as ShopifyBrief["stage"])}
                    className={SELECT_CLASS}
                  >
                    <option value="planning">Still planning</option>
                    <option value="launching">Preparing to launch</option>
                    <option value="live">Live, but needs work</option>
                    <option value="growing">Growing and ready to improve</option>
                  </select>
                </label>

                <label className="text-sm font-medium">
                  What matters most right now?
                  <select
                    value={brief.goal}
                    onChange={(event) => update("goal", event.target.value as ShopifyBrief["goal"])}
                    className={SELECT_CLASS}
                  >
                    <option value="launch">Launch a new store</option>
                    <option value="redesign">Look more credible</option>
                    <option value="sales">Improve conversions</option>
                    <option value="traffic">Bring in better traffic</option>
                    <option value="fixes">Fix technical problems</option>
                    <option value="ongoing">Get ongoing support</option>
                  </select>
                </label>

                <label className="text-sm font-medium sm:col-span-2">
                  What is the main challenge?
                  <Textarea
                    value={brief.challenge}
                    onChange={(event) => update("challenge", event.target.value)}
                    rows={4}
                    maxLength={800}
                    placeholder="For example: people visit the product pages, but very few add to cart. The store also feels slow on mobile."
                    className="mt-2 min-h-28 resize-y rounded-lg bg-background-alt p-4 leading-relaxed"
                    aria-describedby={validationError ? "brief-error" : undefined}
                  />
                  <span className="mt-2 block text-xs font-normal text-muted-foreground">
                    {brief.challenge.length}/800
                  </span>
                </label>

                <label className="text-sm font-medium sm:col-span-2">
                  Anything else that would help? <span className="font-normal text-muted-foreground">(optional)</span>
                  <Textarea
                    value={brief.context}
                    onChange={(event) => update("context", event.target.value)}
                    rows={3}
                    maxLength={1200}
                    placeholder="Your product type, target customer, theme, apps, or anything you have already tried."
                    className="mt-2 min-h-24 resize-y rounded-lg bg-background-alt p-4 leading-relaxed"
                  />
                </label>
              </div>

              {validationError && (
                <p id="brief-error" role="alert" className="mt-4 text-sm text-destructive">
                  {validationError}
                </p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="mt-6 h-auto rounded-full bg-primary px-7 py-3.5 text-primary-foreground hover:bg-primary/90"
              >
                {loading ? (
                  <>
                    <LoaderCircle className="animate-spin" aria-hidden /> Reviewing your brief…
                  </>
                ) : (
                  <>
                    <WandSparkles aria-hidden /> Recommend my next steps
                  </>
                )}
              </Button>
            </form>

            <div aria-live="polite" aria-atomic="true">
              {result?.ok === false && (
                <div className="border-t border-border bg-destructive/10 p-6 md:p-8">
                  <p className="font-semibold text-foreground">The recommendation couldn’t be completed.</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{result.error}</p>
                  <Button type="button" variant="outline" onClick={() => setResult(null)} className="mt-5 rounded-full">
                    Try again
                  </Button>
                </div>
              )}

              {result?.ok === true && (
                <div className="border-t border-border bg-background p-6 md:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <p className="eyebrow">Your recommendation</p>
                      <h3 className="mt-3 font-display text-2xl font-bold">A practical place to start</h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{result.summary}</p>
                    </div>
                    <Button type="button" variant="ghost" onClick={reset} className="self-start text-muted-foreground">
                      <RotateCcw aria-hidden /> Start over
                    </Button>
                  </div>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {result.priorities.map((priority) => (
                      <li key={priority} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                        {priority}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <h4 className="font-display text-lg font-semibold">Services that fit</h4>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {result.services.map((service) => (
                        <article key={service.title} className="rounded-xl border border-border bg-surface p-5">
                          <p className="text-xs uppercase tracking-[0.14em] text-brand">{service.group}</p>
                          <h5 className="mt-2 font-display font-semibold">{service.title}</h5>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.reason}</p>
                        </article>
                      ))}
                    </div>
                  </div>

                  <div className="mt-9">
                    <h4 className="font-display text-lg font-semibold">Relevant work</h4>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {result.projects.map((project) => (
                        <article key={project.slug} className="overflow-hidden rounded-xl border border-border bg-surface">
                          <a href={project.url} target="_blank" rel="noreferrer" className="group block">
                            <SmartImage
                              src={project.image}
                              alt={`${project.title} live homepage`}
                              className="aspect-[16/8] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="p-5">
                              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{project.category}</p>
                              <h5 className="mt-2 flex items-center justify-between gap-3 font-display font-semibold">
                                {project.title}
                                <ArrowUpRight className="h-4 w-4 text-brand" aria-hidden />
                              </h5>
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.reason}</p>
                            </div>
                          </a>
                        </article>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-7">
                    <Link to="/contact" className="btn-primary">
                      Discuss this recommendation
                    </Link>
                    <p className="text-sm text-muted-foreground">Your final scope is confirmed after a quick store review.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}