import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import { CONTACT, FAQS, SERVICES, TESTIMONIALS } from "@/lib/site";
import { CaseGrid, FaqList, PostGrid, SectionHead } from "@/components/site/Blocks";
import { Newsletter } from "@/components/site/Newsletter";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Software that survives production", "Bangladesh-based studio for QA testing, AI apps, web and mobile development, video and digital marketing."),
  component: Home,
});

const TOP_FAQ = [...FAQS.General, ...FAQS["Service-Specific"], FAQS["Pricing & Engagement"][0]];

function Home() {
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();
  const visible = [0, 1, 2].map((i) => TESTIMONIALS[(slide + i) % TESTIMONIALS.length]);

  return (
    <>
      <section className="bg-paper">
        <div className="container-site py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7 lg:self-center">
              <p className="eyebrow mb-6 text-signal">Bangladesh — QA &amp; Software Studio</p>
              <h1 className="max-w-[16ch] text-balance font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.02em] text-ink">We build software that survives <span className="text-signal">production.</span></h1>
              <p className="mt-6 max-w-[42ch] text-pretty text-ink2">Quality Assurance Labs engineers, tests, and ships AI apps, web, and mobile products for ambitious teams worldwide.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-signal">Book a scoping call</Link>
                <Link to="/case-studies" className="btn-cream">See case studies</Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img src={hero} alt="Engineers reviewing code on monitors" width={1088} height={1280} className="aspect-[4/5] w-full rounded-[min(1vw,12px)] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-site flex flex-col items-start gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="eyebrow text-cream/50">Trusted by product teams</span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-display font-semibold tracking-tight text-cream/80">
            <span>Northwind</span><span>Helix</span><span>Banyan Pay</span><span>Corda</span><span>Meridian</span><span>Upwork Top Rated</span>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site py-16 sm:py-20">
          <SectionHead title="Six ways we de-risk your build" label="01 — Services" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}
                className={`p-6 ring-1 transition-colors hover:ring-ink ${i === 0 ? "bg-cream ring-black/5 sm:col-span-2" : i === 1 ? "bg-signal ring-signal" : "bg-cream ring-black/5"}`}>
                <div className="flex items-start justify-between">
                  <h3 className={`font-display font-semibold text-ink ${i < 2 ? "text-xl" : "text-lg"}`}>{s.title}</h3>
                  <span className={`font-mono text-xs ${i === 1 ? "text-ink/70" : "text-signal"}`}>{s.code}</span>
                </div>
                <p className={`mt-3 max-w-[46ch] text-pretty text-sm ${i === 1 ? "text-ink/80" : "text-ink2"}`}>{s.short}</p>
                {i === 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => <span key={t} className="bg-paper2 px-2 py-1 font-mono text-[11px] text-ink2">{t}</span>)}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-signal">
        <div className="container-site py-16 sm:py-20">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="eyebrow text-ink/70">Clients on record</span>
              <span className="font-display text-2xl font-semibold text-ink">“Ship fast, break nothing.”</span>
            </div>
            <div className="flex gap-2">
              <button aria-label="Previous" onClick={() => setSlide((slide - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="grid size-10 place-items-center bg-ink font-mono text-cream">←</button>
              <button aria-label="Next" onClick={() => setSlide((slide + 1) % TESTIMONIALS.length)} className="grid size-10 place-items-center bg-ink font-mono text-cream">→</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {visible.map((t, i) => (
              <figure key={t.who} className={`bg-cream p-6 ring-1 ring-black/10 ${i > 0 ? "hidden md:block" : ""}`}>
                <blockquote className="font-display text-lg font-medium leading-snug text-ink">{t.quote}</blockquote>
                <figcaption className="mt-5 font-mono text-[12px] text-ink2">{t.who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site py-16 sm:py-20">
          <SectionHead title="Selected work" link={<Link to="/case-studies" className="font-mono text-xs text-signal hover:text-ink">View all case studies</Link>} />
          <CaseGrid />
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-site py-16 sm:py-20">
          <div className="mb-10 flex flex-wrap items-center gap-4">
            <span className="eyebrow text-signal">How we work</span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Three steps to a shippable build</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[["01", "Diagnose", "We audit your product, tooling, and release risk in a two-week sprint."], ["02", "Engineer", "Design, build, and test in weekly increments with a shared backlog."], ["03", "Verify & ship", "Automate the guardrails, then hand over a system your team owns."]].map(([n, h, p]) => (
              <div key={n} className="border-t-2 border-ink pt-5">
                <span className="font-mono text-xs text-signal">{n}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{h}</h3>
                <p className="mt-2 max-w-[38ch] text-sm text-ink2">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-site grid grid-cols-1 gap-8 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="max-w-[14ch] text-balance font-display text-3xl font-semibold tracking-tight text-ink">Questions, answered</h2>
            <p className="mt-4 max-w-[36ch] text-sm text-ink2">Straight answers on scope, timelines, and how we work with distributed teams.</p>
            <Link to="/faq" className="mt-6 inline-block font-mono text-xs text-signal hover:text-ink">All FAQs →</Link>
          </div>
          <div className="lg:col-span-8"><FaqList items={TOP_FAQ} /></div>
        </div>
      </section>

      <section className="bg-paper2">
        <div className="container-site py-16 sm:py-20">
          <SectionHead title="From the lab" link={<Link to="/blog" className="font-mono text-xs text-signal hover:text-ink">All notes</Link>} />
          <PostGrid />
          <div className="mt-12 flex flex-col gap-4 border-t-2 border-ink pt-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-display text-xl font-semibold text-ink">Get lab notes in your inbox.</p>
            <Newsletter />
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="container-site grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="eyebrow text-signal2">Start now</span>
            <h2 className="mt-4 max-w-[14ch] text-balance font-display text-4xl font-bold leading-[0.98] tracking-[-0.02em] text-cream">Tell us what needs to hold in production.</h2>
            <p className="mt-5 max-w-[42ch] text-pretty text-cream/70">Send a few lines about your product and timeline. A senior engineer replies within one business day.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-signal">Chat on WhatsApp</a>
              <a href={`mailto:${CONTACT.email}`} className="btn-cream break-all">{CONTACT.email}</a>
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); navigate({ to: "/thank-you" }); }} className="space-y-4 bg-cream p-6 lg:col-span-6">
            <label className="block font-mono text-[12px] uppercase tracking-[0.12em] text-ink2">Name<input required className="field" placeholder="Your name" /></label>
            <label className="block font-mono text-[12px] uppercase tracking-[0.12em] text-ink2">Work email<input required type="email" className="field" placeholder="you@company.com" /></label>
            <label className="block font-mono text-[12px] uppercase tracking-[0.12em] text-ink2">What are you building?<input className="field" placeholder="e.g. mobile banking app, 3-month scope" /></label>
            <button className="btn-ink w-full">Send brief</button>
          </form>
        </div>
      </section>
    </>
  );
}
