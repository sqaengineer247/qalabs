import { createFileRoute } from "@tanstack/react-router";
import { SOCIALS, TESTIMONIALS } from "@/lib/site";
import { CtaBand, PageHero, SectionHead } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/testimonials")({
  head: () => seo("Testimonials", "What clients say about working with Quality Assurance Labs."),
  component: () => (
    <>
      <PageHero eyebrow="Testimonials" title="Clients on record." />
      <section className="bg-signal"><div className="container-site grid gap-4 py-16 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <figure key={t.who} className="bg-cream p-6"><blockquote className="font-display text-xl font-medium text-ink">{t.quote}</blockquote><figcaption className="mt-5 font-mono text-[12px] text-ink2">{t.who}</figcaption></figure>
        ))}
      </div></section>
      <section className="bg-paper"><div className="container-site py-16">
        <SectionHead title="Video & platform reviews" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="aspect-video bg-ink"><iframe className="size-full" src="https://www.youtube.com/embed/PvqICbd2xuc" title="Quality Assurance Labs video" allowFullScreen /></div>
          <div className="flex flex-col justify-center gap-4 bg-cream p-8 ring-1 ring-black/5">
            <p className="font-display text-2xl font-semibold text-ink">Read verified reviews on Upwork.</p>
            <a href={SOCIALS[0]!.href} target="_blank" rel="noreferrer" className="btn-ink w-fit">View Upwork profile</a>
          </div>
        </div>
      </div></section>
      <CtaBand />
    </>
  ),
});
