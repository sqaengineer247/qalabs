import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => seo("Services", "QA testing, AI apps, web and mobile development, video and animation, and digital marketing."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Services" title="Six disciplines, one quality standard." intro="Every service we offer is built around testing first. Open a discipline to see what's inside." />
      <section className="bg-paper">
        <div className="container-site pb-20">
          <div className="border-t-2 border-ink">
            {SERVICES.map((s) => (
              <details key={s.slug} className="group border-b-2 border-ink py-6">
                <summary className="flex cursor-pointer list-none items-baseline gap-6">
                  <span className="font-mono text-sm text-signal">{s.code}</span>
                  <span className="flex-1 font-display text-2xl font-semibold text-ink sm:text-4xl">{s.title}</span>
                  <span className="font-mono text-2xl text-signal transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="mt-6 grid gap-6 pl-0 sm:pl-12 lg:grid-cols-2">
                  <p className="max-w-[50ch] text-ink2">{s.short}</p>
                  <div>
                    <ul className="grid gap-1 text-sm text-ink2 sm:grid-cols-2">{s.subs.map((x) => <li key={x}>— {x}</li>)}</ul>
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="btn-ink mt-5 !py-2">Explore {s.title}</Link>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
