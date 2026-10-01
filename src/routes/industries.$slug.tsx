import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { INDUSTRIES, SERVICES } from "@/lib/site";
import { CtaBand, PageHero, SectionHead } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const ind = INDUSTRIES.find((s) => s.slug === params.slug);
    if (!ind) throw notFound();
    return { ind };
  },
  head: ({ loaderData }) => loaderData ? seo(`${loaderData.ind.title} QA & Development`, `Testing and engineering for ${loaderData.ind.title} products.`) : { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const { ind } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`Industry — ${ind.title}`} title={`Quality for ${ind.title} teams.`} intro={`We help ${ind.title} companies release faster without breaking things — with testing, engineering, and growth services that understand your domain.`} />
      <section className="bg-paper"><div className="container-site pb-20">
        <SectionHead title="How we help" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="bg-cream p-6 ring-1 ring-black/5 hover:ring-ink">
              <span className="font-mono text-xs text-signal">{s.code}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{s.title} for {ind.title}</h3>
              <p className="mt-2 text-sm text-ink2">{s.short}</p>
            </Link>
          ))}
        </div>
      </div></section>
      <CtaBand />
    </>
  );
}
