import { createFileRoute, notFound } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { CaseGrid, CtaBand, PageHero, SectionHead } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => loaderData ? seo(loaderData.service.title, loaderData.service.short) : { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const { service: s } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`${s.code} — Service`} title={s.title} intro={s.short}>
        <div className="mt-6 flex flex-wrap gap-2">{s.tags.map((t) => <span key={t} className="bg-paper2 px-2 py-1 font-mono text-[11px] text-ink2">{t}</span>)}</div>
      </PageHero>
      <section className="bg-paper">
        <div className="container-site pb-20">
          <SectionHead title="What's included" label={`${s.subs.length} capabilities`} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.subs.map((x, i) => (
              <div key={x} className="bg-cream p-6 ring-1 ring-black/5">
                <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{x}</h3>
                <p className="mt-2 text-sm text-ink2">Senior specialists, clear reporting, and results you can verify — delivered as part of your {s.title.toLowerCase()} engagement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-paper2"><div className="container-site py-16"><SectionHead title="Related work" /><CaseGrid /></div></section>
      <CtaBand />
    </>
  );
}
