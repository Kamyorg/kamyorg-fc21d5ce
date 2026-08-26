import projRebel from "@/assets/project-rebelshape.jpg";
import projTrade from "@/assets/project-trade.jpg";
import projBon from "@/assets/project-bonceero.jpg";
import projSlim from "@/assets/project-slimora.jpg";

export const CONTACT = {
  email: "info@kamyorg.com",
  whatsapp: "+44 7455 903789",
  whatsappUrl: "https://wa.me/447455903789",
  availability: "Remote / Worldwide",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICE_GROUPS = [
  {
    group: "Shopify Development",
    items: [
      { t: "Shopify Store Design", d: "Clean, modern store designs built around your brand and your customers." },
      { t: "Shopify Development", d: "Custom sections, app integrations and functionality built properly in Liquid." },
      { t: "Theme Customization", d: "Tailoring premium or free themes so your store actually looks like yours." },
      { t: "Store Redesign", d: "Refreshing existing stores without losing your products, content or SEO." },
      { t: "Technical Fixes", d: "Broken layouts, checkout issues, tracking problems, theme bugs — sorted." },
      { t: "Store Management", d: "Ongoing updates, product uploads, fixes and day-to-day store admin." },
    ],
  },
  {
    group: "Growth & Optimization",
    items: [
      { t: "Conversion Optimization", d: "Reviewing your store and fixing the things that lose you sales." },
      { t: "Shopify SEO", d: "On-page SEO, structure, speed and the technical setup search engines need." },
      { t: "Email Marketing", d: "Klaviyo flows and campaigns: welcome, abandoned cart, post-purchase." },
      { t: "Ads Management", d: "Setting up and managing Meta and Google ad campaigns end to end." },
    ],
  },
  {
    group: "Content & Design",
    items: [
      { t: "Graphic Design", d: "Banners, product graphics, social posts and simple brand assets." },
      { t: "Short-Form Video", d: "Quick product and ad videos edited for Instagram, TikTok and Meta ads." },
      { t: "Content Creation", d: "Product copy, page content and creatives written to match your brand." },
      { t: "Social Media Management", d: "Planning and posting content that fits your brand on Instagram & TikTok." },
    ],
  },
  {
    group: "Other Platforms",
    items: [
      { t: "Wix Development", d: "Building and editing Wix websites for businesses that prefer the platform." },
      { t: "Squarespace Development", d: "Designing and customizing Squarespace sites for service and product brands." },
    ],
  },
];

export const PROJECTS = [
  {
    slug: "rebelshape",
    t: "RebelShape.fr",
    c: "Activewear · France",
    img: projRebel,
    tags: ["Shrine Pro", "Redesign", "Technical Fixes"],
    desc:
      "Full redesign of the store on the Shrine Pro theme. Cleaned up the structure, fixed existing technical errors and rebuilt the product and collection pages to feel more like a real brand.",
    caseStudy: true,
  },
  {
    slug: "trade-collector",
    t: "Trade-collector.com",
    c: "Collectibles · International",
    img: projTrade,
    tags: ["Store Optimization", "UX"],
    desc:
      "Ongoing improvements to an existing store — adjusting the layout, fixing usability issues and making the buying flow easier to follow.",
    caseStudy: false,
  },
  {
    slug: "bon-ceero",
    t: "Bon-Ceero",
    c: "Beauty & Cosmetics",
    img: projBon,
    tags: ["Shopify Build", "Theme Customization"],
    desc:
      "Built the store from scratch on Shopify with a customized theme set up around the brand's look, product range and audience.",
    caseStudy: false,
  },
  {
    slug: "slimora-sculpt",
    t: "Slimora-Sculpt",
    c: "Wellness · DTC",
    img: projSlim,
    tags: ["Setup", "Checkout"],
    desc:
      "Shopify setup with a focus on a clean product page, a simple checkout and a basic email flow for new customers.",
    caseStudy: false,
  },
];

export const REVIEWS = [
  { n: "Léa", r: "RebelShape · France", q: "Kamyorg redesigned our Shopify store and fixed issues we had been struggling with for months. Communication was easy and the result speaks for itself." },
  { n: "Daniel", r: "Store Owner · United States", q: "He understood what I wanted from the first call. Delivered on time, kept me updated through the whole project and was happy to make small changes after launch." },
  { n: "Ana", r: "Wellness Brand · Brazil", q: "Honestly one of the easiest people I've worked with. He explained things in plain language and the store actually looks like a real brand now." },
  { n: "James", r: "Founder · UK", q: "Reliable, technical and patient. He answered every question and didn't disappear after the project was finished." },
  { n: "Marta", r: "Fashion Store · Spain", q: "We came with a messy theme and a long list of problems. He worked through all of it and explained what he changed and why." },
  { n: "Camilo", r: "Accessories Brand · Colombia", q: "Fair pricing, honest timelines and no jargon. I'd work with him again on our next store." },
];

export const PROCESS = [
  { n: "01", t: "We talk", d: "A quick call or chat so I understand your business, your goals and what's not working right now." },
  { n: "02", t: "Plan & quote", d: "I send a clear plan with what's included, how long it'll take and a fixed price." },
  { n: "03", t: "Design & build", d: "I design and build the store, sharing progress as I go so there are no surprises." },
  { n: "04", t: "Review & launch", d: "We review everything together, make any final tweaks, and launch when you're happy." },
  { n: "05", t: "Support", d: "I stay available after launch for fixes, updates and any ongoing changes you need." },
];

export const FAQS = [
  { q: "What do you actually do?", a: "I build, redesign and manage Shopify stores. I also handle related work like SEO, conversion fixes, email marketing, ads and graphic design." },
  { q: "Can you redesign my existing store?", a: "Yes. That's a big part of my work. I can refresh your store without losing your products, content, customer data or SEO." },
  { q: "How long does a Shopify project take?", a: "Most stores take between 2 and 4 weeks depending on the size and what's included. I'll give you a clear timeline before we start." },
  { q: "Where are you based?", a: "I work remotely with clients worldwide. Most communication happens over email or WhatsApp, and time zones have never been an issue." },
  { q: "Do you also help with Wix or Squarespace?", a: "Yes, but Shopify is my main focus. If your project suits Wix or Squarespace better, I can build that instead." },
  { q: "Can you help after the store is launched?", a: "Yes. I offer ongoing support for updates, fixes, product uploads, marketing and general store management." },
];

export const SKILLS = [
  "Shopify", "Liquid", "Theme Development", "Shrine Pro", "Dawn", "CRO", "Shopify SEO",
  "Klaviyo", "Meta Ads", "Google Ads", "Wix", "Squarespace", "Figma", "Photoshop",
];
