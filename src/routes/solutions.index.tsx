import { createFileRoute, Link } from "@tanstack/react-router";
import { SOLUTIONS } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/")({
  head: () => seo("Solutions", "Use-case solutions: reduce QA cycle time, automate testing, integrate AI, and launch mobile apps."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Start from the problem, not the service." intro="Common challenges we solve for product teams." />
      <section className="bg-paper"><div className="container-site grid gap-4 pb-20 md:grid-cols-2">
        {SOLUTIONS.map((s, i) => (
          <Link key={s.slug} to="/solutions/$slug" params={{ slug: s.slug }} className="bg-cream p-8 ring-1 ring-black/5 transition-colors hover:ring-ink">
            <span className="font-mono text-xs text-signal">S{i + 1}</span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">{s.title}</h2>
            <p className="mt-2 text-sm text-ink2">{s.short}</p>
          </Link>
        ))}
      </div></section>
      <CtaBand />
    </>
  );
}
