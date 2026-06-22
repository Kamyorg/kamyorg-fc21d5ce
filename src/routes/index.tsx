import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";
import heroPortrait from "@/assets/kamyorg-hero.jpg";
import projRebel from "@/assets/project-rebelshape.jpg";
import projTrade from "@/assets/project-trade.jpg";
import projBon from "@/assets/project-bonceero.jpg";
import projSlim from "@/assets/project-slimora.jpg";
import heroesLogo from "@/assets/heroes-agency-logo.png.asset.json";
import kamyorgLogo from "@/assets/kamyorg-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Kamaldeen (Kamyorg) — Shopify Developer & CRO Specialist" },
      { name: "description", content: "I'm Mohammed Kamaldeen (Kamyorg). I build, redesign and optimize Shopify stores that look professional, load fast and turn visitors into customers." },
      { property: "og:title", content: "Kamyorg — Shopify Developer & CRO Specialist" },
      { property: "og:description", content: "Shopify stores built to look professional and help businesses grow." },
    ],
  }),
  component: Index,
});

/* ---------- Cursor glow ---------- */
function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[1] h-[500px] w-[500px] rounded-full opacity-40 blur-3xl hidden md:block"
      style={{
        x: sx, y: sy, translateX: "-50%", translateY: "-50%",
        background: "radial-gradient(circle, oklch(0.78 0.13 85 / 0.35), transparent 60%)",
      }}
    />
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "glass rounded-full px-5 py-2.5" : ""}`}>
          <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight">
            <img src={kamyorgLogo.url} alt="Kamyorg logo" className="h-9 w-9 rounded-md object-cover ring-1 ring-white/10" />
            Kamyorg
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map(l => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-gold transition-colors">
            Start a project <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Counter ---------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px] bg-gold pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full opacity-10 blur-[120px] bg-gold pointer-events-none" />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Currently taking on new Shopify projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.03em]"
          >
            I build Shopify stores that look <em className="gold-text not-italic font-normal italic">professional</em> and help businesses grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            I'm <span className="text-foreground">Mohammed Kamaldeen (Kamyorg)</span>. I help business owners build, redesign, optimize and manage Shopify stores that are fast, easy to use, and built to convert visitors into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 font-medium hover:bg-gold transition-all hover:scale-[1.02]">
              Work with me
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 font-medium hover:border-gold/40 transition-all">
              See recent work
            </a>
            <a href="https://wa.me/447455903789" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-muted-foreground hover:text-gold transition-colors">
              Message on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
          >
            {[
              { v: 20, s: "+", l: "Stores Built & Redesigned" },
              { v: 2, s: "+", l: "Years On Shopify" },
              { v: 6, s: "", l: "Countries Worked With" },
              { v: 24, s: "h", l: "Reply Time" },
            ].map((stat, i) => (
              <div key={i} className="border-l border-border pl-4">
                <div className="font-display text-3xl font-medium gold-text">
                  <Counter to={stat.v} suffix={stat.s} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{stat.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ y }} className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden glass"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          >
            <img src={heroPortrait} alt="Mohammed Kamaldeen — Kamyorg, Shopify developer" width={1024} height={1280} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-6 glass rounded-full px-3 py-1.5 text-xs flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Shopify Developer
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-6 right-6 glass rounded-2xl px-4 py-3"
            >
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Based in</div>
              <div className="text-sm font-medium">London, UK</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 glass rounded-xl p-4 max-w-[260px] hidden sm:flex items-center gap-3"
          >
            <img src={heroesLogo.url} alt="TheHeroes Agency logo" className="h-12 w-12 rounded-full object-cover shrink-0 ring-1 ring-white/10" />
            <div>
              <div className="text-[10px] text-gold uppercase tracking-wider">Working With</div>
              <div className="text-sm font-medium mt-0.5">TheHeroes Agency</div>
              <div className="text-xs text-muted-foreground">Ongoing collaboration</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="relative mt-24 border-y border-border py-5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap font-display text-2xl text-muted-foreground/60"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16">
              {["Shopify", "Liquid", "Theme Dev", "CRO", "SEO", "Klaviyo", "Wix", "Squarespace", "Meta Ads", "Google Ads"].map(t => (
                <span key={t} className="flex items-center gap-16">
                  {t}
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Section title ---------- */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-6">
      <span className="h-px w-8 bg-gold" />{children}
    </div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden glass"
          >
            <img src={heroPortrait} alt="Mohammed Kamaldeen (Kamyorg)" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover scale-110" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
          </motion.div>
        </div>
        <div className="lg:col-span-7">
          <SectionLabel>About</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]"
          >
            Hi, I'm <em className="gold-text not-italic italic">Mohammed Kamaldeen</em>.
          </motion.h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>Also known as Kamyorg. I work with business owners who want a professional online store without the stress of figuring everything out themselves.</p>
            <p>Over the past 2+ years, I've helped brands redesign Shopify stores, improve conversions, fix technical issues, optimize SEO and create better shopping experiences for their customers.</p>
            <p>My focus is simple: <span className="text-foreground">create stores that look professional, work properly, and support long-term business growth.</span></p>
            <p>I've worked with brands across the UK, US, France, Spain, Brazil and Colombia, and I also collaborate with <span className="text-gold">TheHeroes Agency</span> on bigger client projects.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
            {["Clear communication", "Honest timelines", "Clean code", "Conversion-minded", "Long-term support", "Fair pricing"].map(item => (
              <div key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-gold mt-1">✦</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const SERVICES = [
  { t: "Shopify Store Design", d: "Clean, modern store designs built around your brand and your customers." },
  { t: "Shopify Development", d: "Custom sections, app integrations and functionality built properly in Liquid." },
  { t: "Theme Customization", d: "Tailoring premium or free themes so your store actually looks like yours." },
  { t: "Store Redesign", d: "Refreshing existing stores without losing your products, content or SEO." },
  { t: "Shopify SEO", d: "On-page SEO, structure, speed and the technical setup search engines need." },
  { t: "Conversion Optimization", d: "Reviewing your store and fixing the things that lose you sales." },
  { t: "Store Management", d: "Ongoing updates, product uploads, fixes and day-to-day store admin." },
  { t: "Technical Fixes", d: "Broken layouts, checkout issues, tracking problems, theme bugs — sorted." },
  { t: "Email Marketing", d: "Klaviyo flows and campaigns: welcome, abandoned cart, post-purchase." },
  { t: "Social Media Management", d: "Planning and posting content that fits your brand on Instagram & TikTok." },
  { t: "Graphic Design", d: "Banners, product graphics, social posts and simple brand assets." },
  { t: "AI Video Creation", d: "Short product and ad videos generated with AI tools for social and ads." },
  { t: "Ads Management", d: "Setting up and managing Meta and Google ad campaigns end to end." },
  { t: "Content Creation", d: "Product copy, page content and creatives written to match your brand." },
  { t: "Wix Development", d: "Building and editing Wix websites for businesses that prefer the platform." },
  { t: "Squarespace Development", d: "Designing and customizing Squarespace sites for service and product brands." },
];

function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <SectionLabel>What I do</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05] max-w-3xl">
              Services I offer for <em className="gold-text not-italic italic">Shopify & online stores.</em>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">If you don't see what you need listed here, just message me. There's a good chance I can help or point you in the right direction.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative bg-background p-8 hover:bg-secondary transition-colors duration-500 cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-muted-foreground font-mono">{String(i + 1).padStart(2, "0")}</span>
                <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-gold group-hover:text-background group-hover:border-gold transition-all">
                  →
                </div>
              </div>
              <h3 className="font-display text-xl font-medium mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Work ---------- */
const PROJECTS = [
  { t: "RebelShape.fr", c: "Activewear · France", img: projRebel, tags: ["Shrine Pro", "Redesign", "Technical Fixes"], desc: "Full redesign of the store on the Shrine Pro theme. Cleaned up the structure, fixed existing technical errors and rebuilt the product and collection pages to feel more like a real brand." },
  { t: "Trade-collector.com", c: "Collectibles · International", img: projTrade, tags: ["Store Optimization", "UX"], desc: "Ongoing improvements to an existing store — adjusting the layout, fixing usability issues and making the buying flow easier to follow." },
  { t: "Bon-Ceero", c: "Beauty & Cosmetics", img: projBon, tags: ["Shopify Build", "Theme Customization"], desc: "Built the store from scratch on Shopify with a customized theme set up around the brand's look, product range and audience." },
  { t: "Slimora-Sculpt", c: "Wellness · DTC", img: projSlim, tags: ["Setup", "Checkout"], desc: "Shopify setup with a focus on a clean product page, a simple checkout and a basic email flow for new customers." },
];

function Work() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
              A few <em className="gold-text not-italic italic">recent projects.</em>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Most of my work is under NDA or done as part of agency projects. Here are a few I can share publicly.</p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-7 group relative">
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden glass">
                  <motion.img
                    src={p.img}
                    alt={`${p.t} Shopify store`}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 glass rounded-full px-3 py-1 text-xs text-muted-foreground">
                    Project / {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{p.c}</div>
                <h3 className="font-display text-4xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05] mb-5">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs glass rounded-full px-3 py-1.5">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const REVIEWS = [
  { n: "Léa", r: "RebelShape · France", q: "Kamyorg redesigned our Shopify store and fixed issues we had been struggling with for months. Communication was easy and the result speaks for itself." },
  { n: "Daniel", r: "Store Owner · United States", q: "He understood what I wanted from the first call. Delivered on time, kept me updated through the whole project and was happy to make small changes after launch." },
  { n: "Ana", r: "Wellness Brand · Brazil", q: "Honestly one of the easiest people I've worked with. He explained things in plain language and the store actually looks like a real brand now." },
  { n: "James", r: "Founder · UK", q: "Reliable, technical and patient. He answered every question and didn't disappear after the project was finished." },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <SectionLabel>What clients say</SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05] mb-16">
          Kind words from <em className="gold-text not-italic italic">store owners.</em>
        </h2>

        <div className="relative glass rounded-3xl p-10 md:p-16 min-h-[320px] flex flex-col items-center justify-center overflow-hidden">
          <div className="flex gap-1 mb-6 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118L10 14.347l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.65 8.354c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" /></svg>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-2xl md:text-3xl font-light leading-snug max-w-3xl mx-auto">
                "{REVIEWS[idx].q}"
              </p>
              <div className="mt-8">
                <div className="font-medium">{REVIEWS[idx].n}</div>
                <div className="text-sm text-muted-foreground mt-1">{REVIEWS[idx].r}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-1.5 bg-border"}`}
              aria-label={`Review ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
const PROCESS = [
  { n: "01", t: "We talk", d: "A quick call or chat so I understand your business, your goals and what's not working right now." },
  { n: "02", t: "Plan & quote", d: "I send a clear plan with what's included, how long it'll take and a fixed price." },
  { n: "03", t: "Design & build", d: "I design and build the store, sharing progress as I go so there are no surprises." },
  { n: "04", t: "Review & launch", d: "We review everything together, make any final tweaks, and launch when you're happy." },
  { n: "05", t: "Support", d: "I stay available after launch for fixes, updates and any ongoing changes you need." },
];

function Process() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <SectionLabel>How we'll work together</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
            Simple, honest <em className="gold-text not-italic italic">process</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative glass rounded-2xl p-6 hover:border-gold/30 transition-colors"
            >
              <div className="font-display text-5xl font-medium text-gold/30 mb-4">{p.n}</div>
              <h3 className="font-display text-xl font-medium mb-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "What do you actually do?", a: "I build, redesign and manage Shopify stores. I also handle related things like SEO, conversion fixes, email marketing, ads and basic graphic design." },
  { q: "Can you redesign my existing store?", a: "Yes. That's a big part of my work. I can refresh your store without losing your products, content, customer data or SEO." },
  { q: "How long does a Shopify project take?", a: "Most stores take between 2 and 4 weeks depending on the size and what's included. I'll give you a clear timeline before we start." },
  { q: "Do you work with people outside the UK?", a: "Yes. I work remotely with clients in the US, France, Spain, Brazil, Colombia and other countries. Most communication happens by email or WhatsApp." },
  { q: "Do you also help with Wix or Squarespace?", a: "Yes, but Shopify is my main focus. If your project is better suited to Wix or Squarespace, I can build that for you instead." },
  { q: "Can you help after the store is launched?", a: "Yes. I offer ongoing support for updates, fixes, product uploads, marketing and general store management." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05] mb-12">
          Things people <em className="gold-text not-italic italic">usually ask</em>.
        </h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/40 transition-colors"
              >
                <span className="font-display text-lg">{f.q}</span>
                <span className={`text-gold text-2xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }} className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const subject = encodeURIComponent(`New project — ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject type: ${data.get("type")}\nBudget: ${data.get("budget")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:kamyorg001@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.02]">
            Tell me about your <em className="gold-text not-italic italic">store</em>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Share a few details about your business and what you'd like help with. I usually reply within 24 hours.
          </p>

          <div className="mt-12 space-y-5">
            <a href="https://wa.me/447455903789" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</div>
                <div className="font-medium">+44 7455 903789</div>
              </div>
            </a>
            <a href="mailto:kamyorg001@gmail.com" className="flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" /></svg>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="font-medium">kamyorg001@gmail.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full glass flex items-center justify-center">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Based in</div>
                <div className="font-medium">London, United Kingdom · Working worldwide</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 glass rounded-3xl p-8 md:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field name="name" label="Name" required />
            <Field name="email" type="email" label="Email" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field name="type" label="What do you need help with?" placeholder="e.g. New Shopify store" />
            <Field name="budget" label="Rough budget" placeholder="e.g. £1k – £5k" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Tell me a bit more</label>
            <textarea name="message" required rows={5} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground resize-none transition-colors" />
          </div>
          <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 font-medium hover:bg-gold transition-all">
            {sent ? "Opening email…" : "Send message"}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}{required && " *"}</label>
      <input type={type} name={name} required={required} placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition-colors" />
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-16 mt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-display text-2xl font-semibold flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-gold" />
              Kamyorg
            </div>
            <p className="mt-4 text-muted-foreground text-sm max-w-xs leading-relaxed">
              Mohammed Kamaldeen — Shopify Developer, Designer & Store Growth Specialist. Working with TheHeroes Agency.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              {["About","Services","Work","Process","Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Get in touch</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:kamyorg001@gmail.com" className="hover:text-gold transition-colors">kamyorg001@gmail.com</a></li>
              <li><a href="https://wa.me/447455903789" className="hover:text-gold transition-colors">+44 7455 903789</a></li>
              <li className="text-muted-foreground">London, UK · Working worldwide</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Mohammed Kamaldeen (Kamyorg). All rights reserved.</div>
          <div>Built and maintained from London.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
function Index() {
  return (
    <div className="relative overflow-hidden">
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
