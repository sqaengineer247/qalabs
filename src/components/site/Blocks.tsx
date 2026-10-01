import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CASES, CONTACT, POSTS } from "@/lib/site";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

export const CASE_IMG = { case1, case2, case3 };

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="bg-paper">
      <div className="container-site py-14 sm:py-20">
        <p className="eyebrow mb-6 text-signal">{eyebrow}</p>
        <h1 className="max-w-[20ch] text-balance font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.02em] text-ink">{title}</h1>
        {intro && <p className="mt-6 max-w-[56ch] text-pretty text-ink2">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ title, label, link }: { title: string; label?: string; link?: ReactNode }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4">
      <h2 className="max-w-[22ch] text-balance font-display text-3xl font-semibold tracking-tight text-ink">{title}</h2>
      {label && <span className="eyebrow hidden text-ink2 sm:inline">{label}</span>}
      {link}
    </div>
  );
}

export function CaseGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {CASES.map((c) => (
        <Link key={c.slug} to="/case-studies/$slug" params={{ slug: c.slug }} className="block bg-cream ring-1 ring-black/5 transition-colors hover:ring-ink">
          <img src={CASE_IMG[c.img]} alt={c.title} loading="lazy" width={1088} height={800} className="aspect-[4/3] w-full object-cover" />
          <div className="p-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal">{c.tag}</span>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink">{c.title}</h3>
            <p className="mt-2 max-w-[40ch] text-sm text-ink2">{c.short}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function PostGrid({ posts = POSTS }: { posts?: typeof POSTS }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {posts.map((p) => (
        <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="bg-cream p-6 ring-1 ring-black/5 transition-colors hover:ring-ink">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-signal">{p.tag}</span>
          <h3 className="mt-3 font-display text-lg font-semibold text-ink">{p.title}</h3>
          <p className="mt-2 max-w-[42ch] text-sm text-ink2">{p.short}</p>
          <span className="mt-4 inline-block font-mono text-[11px] text-ink2">Read · {p.mins} min</span>
        </Link>
      ))}
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y-2 divide-ink border-y-2 border-ink">
      {items.map((f, i) => (
        <details key={f.q} className="group py-5" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-ink">
            {f.q}<span className="font-mono text-signal group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="mt-3 max-w-[60ch] text-sm text-ink2">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-ink">
      <div className="container-site flex flex-col gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-[22ch] font-display text-3xl font-bold leading-tight text-cream">Tell us what needs to hold in production.</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-signal">Start a project</Link>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-cream">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
