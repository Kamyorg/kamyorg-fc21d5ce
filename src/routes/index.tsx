import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";
import heroPortrait from "@/assets/kamyorg-hero.jpg";
import projRebel from "@/assets/project-rebelshape.jpg";
import projTrade from "@/assets/project-trade.jpg";
import projBon from "@/assets/project-bonceero.jpg";
import projSlim from "@/assets/project-slimora.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamyorg — Shopify Growth Partner & Developer | Mohammed Kamaldeen" },
      { name: "description", content: "Premium Shopify development, CRO, SEO and digital marketing. 20+ stores delivered worldwide. Strategic Partner at TheHeroes Agency." },
      { property: "og:title", content: "Kamyorg — Shopify Growth Partner" },
      { property: "og:description", content: "I build high-converting Shopify stores that turn visitors into customers." },
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
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_var(--color-gold)]" />
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
      {/* gold orb */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px] bg-gold pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full opacity-10 blur-[120px] bg-gold pointer-events-none" />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for select Q1 partnerships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.03em]"
          >
            Shopify stores built to <em className="gold-text not-italic font-normal italic">sell, scale</em> & dominate.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            I'm <span className="text-foreground">Mohammed Kamaldeen (Kamyorg)</span> — a Shopify developer, CRO specialist & e-commerce growth partner helping ambitious DTC brands launch and scale profitable stores worldwide.
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
              View portfolio
            </a>
            <a href="https://wa.me/447455903789" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-muted-foreground hover:text-gold transition-colors">
              Book a free consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
          >
            {[
              { v: 20, s: "+", l: "Stores Delivered" },
              { v: 2, s: "+", l: "Years Experience" },
              { v: 6, s: "", l: "Countries Served" },
              { v: 100, s: "%", l: "Client-Focused" },
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
            <img src={heroPortrait} alt="Mohammed Kamaldeen — Kamyorg, Shopify Growth Partner" width={1024} height={1280} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-6 glass rounded-full px-3 py-1.5 text-xs flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Shopify Plus Ready
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-6 right-6 glass rounded-2xl px-4 py-3"
            >
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Based in</div>
              <div className="text-sm font-medium">London, UK</div>
            </motion.div>
          </motion.div>

          {/* partner card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 glass rounded-xl p-4 max-w-[220px] hidden sm:block"
          >
            <div className="text-[10px] text-gold uppercase tracking-wider">Strategic Partner</div>
            <div className="text-sm font-medium mt-1">TheHeroes Agency</div>
            <div className="text-xs text-muted-foreground mt-1">Verified collaboration</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* marquee */}
      <div className="relative mt-24 border-y border-border py-5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap font-display text-2xl text-muted-foreground/60"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16">
              {["Shopify Plus", "Liquid", "CRO", "SEO", "Klaviyo", "Meta Ads", "Google Ads", "Theme Dev", "Migrations", "Analytics"].map(t => (
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
            <img src={heroPortrait} alt="Kamyorg portrait" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover scale-110" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
          </motion.div>
        </div>
        <div className="lg:col-span-7">
          <SectionLabel>About</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]"
          >
            Meet <em className="gold-text not-italic italic">Kamyorg</em>.
          </motion.h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>My name is <span className="text-foreground">Mohammed Kamaldeen</span>, professionally known as Kamyorg. I help brands launch, optimize and scale high-converting Shopify stores.</p>
            <p>Over the past 2+ years I've worked with businesses across the <span className="text-foreground">UK, US, France, Spain, Brazil and Colombia</span> — delivering Shopify development, conversion optimization, SEO, store redesigns, technical fixes and growth-focused digital solutions.</p>
            <p>As a <span className="text-gold">Strategic Partner of TheHeroes Agency</span>, I combine technical expertise, design thinking and marketing strategy to create eCommerce experiences that drive measurable business growth.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
            {["Performance-driven", "Conversion-focused", "Transparent comms", "Agency execution", "Long-term partnerships", "Creative problem solving"].map(item => (
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
  { t: "Shopify Store Design", d: "Stunning experiences engineered to maximize conversion and engagement.", n: "01" },
  { t: "Shopify Development", d: "Custom functionality, advanced features and performance-focused builds.", n: "02" },
  { t: "Theme Customization", d: "Tailored Shopify themes aligned with your brand identity and goals.", n: "03" },
  { t: "Platform Migration", d: "Seamless migrations from Wix, Squarespace, WooCommerce and more.", n: "04" },
  { t: "Conversion Rate Optimization", d: "Data-driven improvements that reduce friction and grow revenue.", n: "05" },
  { t: "Shopify SEO", d: "Technical SEO, on-page optimization and organic visibility growth.", n: "06" },
  { t: "Store Management", d: "Ongoing maintenance, updates and continuous optimization.", n: "07" },
  { t: "Email Marketing", d: "Automated customer journeys & revenue-generating Klaviyo campaigns.", n: "08" },
  { t: "Paid Advertising", d: "Meta Ads and Google Ads strategy, creative and campaign management.", n: "09" },
  { t: "Graphic Design", d: "Creative assets that elevate brand perception across every touchpoint.", n: "10" },
  { t: "AI Content Creation", d: "AI-powered videos, creatives and content systems built to scale.", n: "11" },
  { t: "Technical Fixes", d: "Speed, bugs, checkout issues, tracking setup and backend troubleshooting.", n: "12" },
];

function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <SectionLabel>What I do</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05] max-w-3xl">
              Everything your Shopify brand needs — <em className="gold-text not-italic italic">under one roof.</em>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">From first pixel to scaling past seven figures. End-to-end e-commerce execution.</p>
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
                <span className="text-xs text-muted-foreground font-mono">{s.n}</span>
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

/* ---------- Expertise (skill bars) ---------- */
const SKILLS = [
  { n: "Shopify & Liquid", v: 98 },
  { n: "HTML / CSS / JavaScript", v: 95 },
  { n: "Conversion Rate Optimization", v: 92 },
  { n: "SEO (Technical & On-page)", v: 90 },
  { n: "Email Marketing (Klaviyo)", v: 88 },
  { n: "Meta & Google Ads", v: 85 },
  { n: "Graphic & Brand Design", v: 87 },
  { n: "AI Automation & Content", v: 90 },
];

function Expertise() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <SectionLabel>Expertise</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
            A full stack of <em className="gold-text not-italic italic">e-commerce</em> capabilities.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">Years of execution distilled into the disciplines that move the needle.</p>
        </div>
        <div className="lg:col-span-7 space-y-7">
          {SKILLS.map((s, i) => (
            <SkillBar key={s.n} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index }: { skill: { n: string; v: number }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref}>
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-display text-lg">{skill.n}</span>
        <span className="text-xs text-gold font-mono">{skill.v}%</span>
      </div>
      <div className="h-px bg-border relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.v}%` } : {}}
          transition={{ duration: 1.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold/40 via-gold to-gold-soft shadow-[0_0_20px_var(--color-gold)]"
        />
      </div>
    </div>
  );
}

/* ---------- Partnership ---------- */
function Partnership() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full bg-gold/20 blur-[100px]" />
          <div className="relative">
            <SectionLabel>Strategic Partnership</SectionLabel>
            <div className="flex items-center justify-center gap-8 md:gap-16 mb-8">
              <div className="font-display text-3xl md:text-4xl font-medium">Kamyorg</div>
              <div className="h-px w-12 md:w-24 bg-gold" />
              <div className="font-display text-3xl md:text-4xl font-medium gold-text">TheHeroes</div>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-tight max-w-3xl mx-auto">
              Building conversion-focused Shopify solutions for ambitious DTC brands worldwide.
            </h3>
            <div className="mt-10 inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm">
              <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Verified Strategic Partner
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Work ---------- */
const PROJECTS = [
  { t: "RebelShape.fr", c: "Athletic Apparel · France", img: projRebel, tags: ["Shrine Pro", "Redesign", "Technical SEO", "CRO"], desc: "Complete redesign and conversion-focused rebuild using Shrine Pro. Resolved technical errors and rebuilt the store structure for a frictionless purchase journey." },
  { t: "Trade-collector.com", c: "Collectibles · International", img: projTrade, tags: ["Optimization", "Growth"], desc: "Store optimization and growth-focused improvements across UX, performance and merchandising." },
  { t: "Bon-Ceero", c: "Beauty & Cosmetics", img: projBon, tags: ["Development", "Customization"], desc: "End-to-end Shopify build with custom theme work tailored to the brand's premium positioning." },
  { t: "Slimora-Sculpt", c: "Wellness · DTC", img: projSlim, tags: ["CRO", "Implementation"], desc: "Conversion-focused Shopify implementation with a frictionless checkout and lifecycle email setup." },
];

function Work() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
              Stores that <em className="gold-text not-italic italic">convert.</em>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">A snapshot of recent collaborations with DTC brands across the UK, EU and the Americas.</p>
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
  { n: "Léa M.", r: "RebelShape · France", q: "Kamyorg rebuilt our entire Shopify store. The new design loads beautifully and our conversion rate jumped within weeks. Genuinely the most thoughtful developer we've worked with." },
  { n: "Daniel R.", r: "DTC Founder · United States", q: "Technical, creative and reliable. He fixed checkout issues two other devs couldn't and then optimized the funnel. Numbers speak for themselves." },
  { n: "Ana C.", r: "Wellness Brand · Brazil", q: "The redesign elevated our entire brand. Kamyorg pairs an agency-level eye for design with deep Shopify engineering. Highly recommended." },
  { n: "James T.", r: "E-commerce Lead · UK", q: "Communication was sharp, deadlines respected, output exceptional. Our store finally looks and performs like the premium brand we are." },
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
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05] mb-16">
          Trusted by store owners <em className="gold-text not-italic italic">worldwide.</em>
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
  { n: "01", t: "Discovery", d: "Understanding your goals, audience and business model." },
  { n: "02", t: "Strategy", d: "A tailored growth roadmap with priorities and KPIs." },
  { n: "03", t: "Design & Build", d: "Premium UI design and conversion-engineered Shopify build." },
  { n: "04", t: "Optimize", d: "Data-driven CRO, SEO and performance improvements." },
  { n: "05", t: "Scale", d: "Long-term partnership to compound growth quarter over quarter." },
];

function Process() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <SectionLabel>Process</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05]">
            From idea to <em className="gold-text not-italic italic">scale</em>.
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

/* ---------- Why ---------- */
function Why() {
  const items = ["20+ Shopify Projects", "International Experience", "Performance Driven", "Conversion Focused", "Transparent Communication", "Agency-Level Execution"];
  return (
    <section className="relative py-32 px-6 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Why clients choose me</SectionLabel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mt-10">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="font-display text-3xl md:text-4xl font-medium tracking-[-0.02em] flex items-center gap-4"
            >
              <span className="text-gold text-xl">✦</span> {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "What Shopify services do you offer?", a: "End-to-end: store design, development, theme customization, migrations, CRO, SEO, technical fixes, store management, plus integrated marketing (email, paid, content)." },
  { q: "Can you redesign an existing store?", a: "Absolutely. Most of my work is high-impact redesigns of established stores — preserving SEO and revenue while modernizing the experience." },
  { q: "Do you provide SEO services?", a: "Yes. Technical SEO, on-page optimization, schema implementation and ongoing visibility improvements tailored to Shopify." },
  { q: "Do you work with international clients?", a: "I work remotely with brands across the UK, US, France, Spain, Brazil, Colombia and beyond." },
  { q: "Can you manage my store after launch?", a: "Yes — ongoing retainers are available for maintenance, optimization, marketing and growth." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.05] mb-12">
          Common <em className="gold-text not-italic italic">questions</em>.
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
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[1.02]">
            Let's build something <em className="gold-text not-italic italic">exceptional.</em>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Tell me about your brand and what you want to build. I'll get back within 24 hours.
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
                <div className="font-medium">London, United Kingdom · Available worldwide</div>
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
            <Field name="type" label="Project type" placeholder="e.g. Shopify redesign" />
            <Field name="budget" label="Budget" placeholder="e.g. £5k – £15k" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea name="message" required rows={5} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground resize-none transition-colors" />
          </div>
          <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 font-medium hover:bg-gold transition-all">
            {sent ? "Opening email…" : "Start your project"}
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
              Mohammed Kamaldeen — Shopify Growth Partner. Strategic Partner at TheHeroes Agency.
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
              <li className="text-muted-foreground">London, UK · Worldwide</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Mohammed Kamaldeen (Kamyorg). All rights reserved.</div>
          <div>Designed & engineered in London.</div>
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
        <Expertise />
        <Partnership />
        <Work />
        <Testimonials />
        <Why />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
