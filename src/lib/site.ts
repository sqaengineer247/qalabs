export const CONTACT = {
  email: "support@qualityassurancelabs.com",
  phone: "+880 1816 736141",
  whatsapp: "https://api.whatsapp.com/send?phone=8801816736141",
  address: "Bogura, Rajshahi, Bangladesh 5800",
};

export const SOCIALS = [
  { label: "Upwork", href: "https://www.upwork.com/agencies/qalabs/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/quality-assurance-labs/" },
  { label: "WhatsApp", href: CONTACT.whatsapp },
  { label: "YouTube", href: "https://www.youtube.com/watch?v=PvqICbd2xuc" },
  { label: "X", href: "https://x.com/qalabs" },
  { label: "Facebook", href: "https://www.facebook.com/qualityassurancelabs" },
];

export type Service = { slug: string; code: string; title: string; short: string; tags: string[]; subs: string[] };

export const SERVICES: Service[] = [
  {
    slug: "qa-testing", code: "A1", title: "QA Testing",
    short: "Automated suites, manual deep-dives, and CI guardrails that catch regressions before your users do.",
    tags: ["Selenium", "Playwright", "Appium"],
    subs: ["Software QA Testing", "Manual Testing", "Test Automation", "API Testing", "Web Application Testing", "Mobile App Testing", "Performance Testing", "Security Testing", "Regression Testing", "Usability Testing", "Accessibility Testing (WCAG)", "Cross-Browser Testing", "Real Device Testing Lab"],
  },
  {
    slug: "ai-apps", code: "A2", title: "AI Apps & Integration",
    short: "Chatbots, LLM integrations, and AI agents tested for accuracy before they meet your users.",
    tags: ["OpenAI", "Anthropic", "RAG"],
    subs: ["Custom AI Chatbot & Virtual Assistant Development", "LLM Integration (OpenAI, Anthropic, etc.)", "AI-Powered Analytics & Predictive Modeling", "Computer Vision & Image Recognition", "Workflow Automation & AI Agents", "Third-Party AI API Integration", "AI Strategy & Consultation"],
  },
  {
    slug: "web-development", code: "A3", title: "Web Development",
    short: "Fast, accessible web apps backed by resilient APIs.",
    tags: ["React", "Node", "PWA"],
    subs: ["Full-Stack Web Application Development", "Frontend Architecture & UI/UX", "Backend API & Microservices", "E-commerce & CMS Development", "Progressive Web Apps (PWA)", "Web Performance Optimization"],
  },
  {
    slug: "mobile-development", code: "A4", title: "Mobile Development",
    short: "Native and cross-platform apps with store-ready QA built in.",
    tags: ["iOS", "Android", "Flutter"],
    subs: ["Native iOS & Android Development", "Cross-Platform (Flutter, React Native)", "Mobile Architecture & Consulting", "App Store Optimization (ASO)", "Mobile Backend as a Service (MBaaS)", "Wearable & IoT Development"],
  },
  {
    slug: "video-animation", code: "A5", title: "Video & Animation",
    short: "Explainers, motion systems, and launch films made to convert.",
    tags: ["2D/3D", "Motion", "VFX"],
    subs: ["2D/3D Motion Graphics & Explainer Videos", "UI/UX Micro-Interactions", "AI-Generated Video & VFX", "Product Demos & Branding Videos", "Video Streaming Optimization", "Animation QA & Rendering Validation"],
  },
  {
    slug: "digital-marketing", code: "A6", title: "Digital Marketing",
    short: "SEO, paid, and lifecycle campaigns measured against revenue.",
    tags: ["SEO", "PPC", "CRO"],
    subs: ["SEO & SEM Strategy", "Performance Marketing & PPC", "Social Media Marketing", "Content Marketing & Copywriting", "CRO & A/B Testing", "Email & Marketing Automation"],
  },
];

export const SOLUTIONS = [
  { slug: "reduce-qa-cycle-time", title: "Reduce QA Cycle Time", short: "Cut release testing from weeks to days with parallel suites and risk-based test plans.", points: ["Risk-based test prioritisation", "Parallel test execution in CI", "Daily defect triage with your team"] },
  { slug: "automate-testing", title: "Automate Testing", short: "Turn repetitive manual checks into reliable automated suites that run on every commit.", points: ["Framework setup (Playwright, Appium)", "Migration of manual cases", "Flaky test elimination"] },
  { slug: "ai-integration", title: "AI Integration", short: "Add LLM features to your product safely, with evaluation and guardrails from day one.", points: ["Use-case discovery", "LLM integration & prompt design", "Accuracy and safety evaluation"] },
  { slug: "mobile-launch", title: "Mobile App Launch", short: "Ship a store-ready app with device-lab testing, ASO, and launch support.", points: ["Real device testing", "Store submission & ASO", "Post-launch crash monitoring"] },
];

export const INDUSTRIES = [
  { slug: "saas", title: "SaaS" }, { slug: "ai", title: "AI" }, { slug: "fintech", title: "FinTech" },
  { slug: "healthcare", title: "Healthcare" }, { slug: "edtech", title: "EdTech" }, { slug: "web", title: "Web" },
  { slug: "mobile", title: "Mobile" }, { slug: "tv-iot", title: "TV/IoT" },
];

export const CASES = [
  { slug: "banyan-pay", tag: "FinTech", title: "Banyan Pay fraud guardrails", short: "Real-time transaction checks with 99.2% precision in production.", img: "case1" },
  { slug: "tapas-health", tag: "Healthcare", title: "Tapas AI triage assistant", short: "AI chatbot that routes 60% of intake calls without a human.", img: "case2" },
  { slug: "helix-launch", tag: "Marketing", title: "Helix launch film & funnel", short: "Motion-led campaign that lifted demo signups 3.1x in a quarter.", img: "case3" },
] as const;

export const TESTIMONIALS = [
  { quote: "Their QA team found edge cases our own engineers missed for two releases straight.", who: "Sadia R. — CTO, Banyan Pay" },
  { quote: "We went from manual testing to a green CI gate in five weeks. Support tickets dropped 40%.", who: "Tariq M. — Head of Eng, Meridian" },
  { quote: "The AI onboarding flow they built cut our activation time nearly in half.", who: "Nadia H. — VP Product, Corda" },
  { quote: "Reliable, fast, and honest about risk. Exactly what you want from a QA partner.", who: "Jonas K. — Founder, Northwind" },
];

export const POSTS = [
  { slug: "why-e2e-suite-is-slow", tag: "Testing", title: "Why your E2E suite is slow (and the fix)", short: "Sharding, isolation, and the one config change that cut our jobs from 22m to 6m.", mins: 6, date: "Sep 18, 2026", author: "QA Labs Team" },
  { slug: "evaluating-ai-apps", tag: "AI", title: "Evaluating AI apps beyond vibes", short: "A field guide to the three metrics that actually predict user trust.", mins: 8, date: "Sep 02, 2026", author: "QA Labs Team" },
  { slug: "release-checklist", tag: "Process", title: "The release checklist we refuse to skip", short: "Fourteen gates, from feature flags to rollback drills, that keep deploys boring.", mins: 5, date: "Aug 21, 2026", author: "QA Labs Team" },
];

export const FAQS = {
  General: [
    { q: "Do you work with teams outside Bangladesh?", a: "Yes. We run timezone-friendly sprints with clients across North America, Europe, the Gulf, and Asia." },
    { q: "How fast can we get started?", a: "Most engagements kick off within 5–7 business days of agreeing on scope." },
  ],
  "Service-Specific": [
    { q: "Can you plug into our existing CI/CD?", a: "Yes. We integrate tests into GitHub Actions, GitLab, Jenkins, and more without forcing a rewrite." },
    { q: "Do you test on real devices?", a: "Yes, our Real Device Testing Lab covers a wide range of iOS and Android phones and tablets." },
  ],
  "Pricing & Engagement": [
    { q: "How do you price projects?", a: "We offer hourly/retainer, fixed project, and dedicated team models. See the pricing page for details." },
    { q: "Do you sign NDAs?", a: "Always. We're happy to sign your NDA before any project details are shared." },
  ],
};

export const RESOURCE_CATS = ["QA Testing Guides", "AI Apps & Integration Guides", "Web Development Guides", "Mobile Development Guides", "Video & Animation Guides", "Digital Marketing Guides", "QA Insights"];

type SimplePage = { eyebrow: string; title: string; intro: string; blocks: { h: string; p: string }[] };

export const PAGES: Record<string, SimplePage> = {
  about: { eyebrow: "Our story", title: "A QA-first studio from Bangladesh.", intro: "Quality Assurance Labs started as a small testing team and grew into a full software studio — but quality is still the first thing we think about.", blocks: [{ h: "Why we exist", p: "Too much software ships broken. We help teams release with confidence by putting testing at the centre of how products get built." }, { h: "How we work", p: "Small senior teams, clear reports, and honest communication across timezones." }, { h: "Where we are", p: "Based in Bogura, Bangladesh, working with clients worldwide." }] },
  team: { eyebrow: "Team", title: "The people behind the passes.", intro: "QA engineers, developers, designers, and marketers working as one team.", blocks: [{ h: "QA & Automation", p: "Manual testers and automation engineers covering web, mobile, API, and performance." }, { h: "Engineering", p: "Full-stack, mobile, and AI developers." }, { h: "Creative & Growth", p: "Motion designers and digital marketers." }] },
  process: { eyebrow: "Process", title: "Three steps to a shippable build.", intro: "A simple, repeatable way of working that keeps every release predictable.", blocks: [{ h: "01 — Diagnose", p: "We audit your product, tooling, and release risk." }, { h: "02 — Engineer", p: "We build and test in weekly increments with a shared backlog." }, { h: "03 — Verify & ship", p: "We automate the guardrails, then hand over a system your team owns." }] },
  partners: { eyebrow: "Partners & Certifications", title: "Tools and standards we work with.", intro: "We follow recognised testing standards and partner with leading platforms.", blocks: [{ h: "Standards", p: "ISTQB-aligned testing practice, WCAG accessibility, OWASP security guidance." }, { h: "Platforms", p: "BrowserStack, AWS, Google Cloud, GitHub, and more." }, { h: "Marketplaces", p: "Top-rated agency on Upwork." }] },
  awards: { eyebrow: "Awards & Recognition", title: "Recognised for quality.", intro: "Highlights from clients and platforms we work with.", blocks: [{ h: "Upwork Top Rated", p: "Consistently high client satisfaction across projects." }, { h: "Client reviews", p: "Five-star feedback from teams across the world." }, { h: "Community", p: "Talks and workshops on testing best practice." }] },
  careers: { eyebrow: "Careers", title: "Build quality with us.", intro: "We're always looking for curious testers, engineers, and creatives. Send your CV to " + CONTACT.email + ".", blocks: [{ h: "QA Engineer (Manual & Automation)", p: "Full-time · Bogura / Remote" }, { h: "Full-Stack Developer", p: "Full-time · Remote" }, { h: "Motion Designer", p: "Contract · Remote" }] },
  press: { eyebrow: "Press & Media Kit", title: "Press resources.", intro: "Logos, company facts, and media contact for journalists and partners.", blocks: [{ h: "Company facts", p: "Quality Assurance Labs — QA testing, AI, web, mobile, video, and marketing studio based in Bangladesh." }, { h: "Media contact", p: CONTACT.email }, { h: "Video", p: "Watch our story on YouTube." }] },
  "privacy-policy": { eyebrow: "Legal", title: "Privacy Policy", intro: "How we collect, use, and protect your information.", blocks: [{ h: "Information we collect", p: "Details you send through our forms, such as name, email, and project information, plus basic site analytics." }, { h: "How we use it", p: "To reply to your enquiries, deliver services, and improve our website. We never sell your data." }, { h: "Data controller contact", p: CONTACT.email }] },
  "terms-of-service": { eyebrow: "Legal", title: "Terms of Service", intro: "The terms that apply when you use this website.", blocks: [{ h: "Use of the site", p: "Content is provided for information only and may change without notice." }, { h: "Engagements", p: "Project work is governed by a separate signed agreement." }, { h: "Legal contact", p: CONTACT.email }] },
  "cookie-policy": { eyebrow: "Legal", title: "Cookie Policy", intro: "How we use cookies on this website.", blocks: [{ h: "Essential cookies", p: "Needed for the site to work, such as remembering your cookie choice." }, { h: "Analytics cookies", p: "Help us understand how visitors use the site. Only set with your consent." }, { h: "Managing cookies", p: "You can clear or block cookies in your browser settings." }] },
  "accessibility-statement": { eyebrow: "Legal", title: "Accessibility Statement", intro: "We aim to meet WCAG 2.2 AA across this website.", blocks: [{ h: "Our commitment", p: "We test with keyboards, screen readers, and contrast tools." }, { h: "Accessibility tools", p: "Use the accessibility button on any page to enlarge text or increase contrast." }, { h: "Accessibility contact", p: CONTACT.email }] },
  "security-compliance": { eyebrow: "Trust", title: "Security & Compliance", intro: "How we keep your code and data safe.", blocks: [{ h: "SOC 2 / ISO 27001 status", p: "Our practices are aligned with ISO 27001 controls. Contact us for our current security documentation." }, { h: "Data encryption", p: "Data is encrypted in transit and at rest. Access is limited to people working on your project." }, { h: "NDAs & access", p: "Every engagement starts with an NDA and least-privilege access." }] },
};
