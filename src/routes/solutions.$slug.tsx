import { createFileRoute, notFound } from "@tanstack/react-router";
import { SOLUTIONS } from "@/lib/site";
import { CaseGrid, CtaBand, PageHero, SectionHead } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const sol = SOLUTIONS.find((s) => s.slug === params.slug);
    if (!sol) throw notFound();
    return { sol };
  },
  head: ({ loaderData }) => loaderData ? seo(loaderData.sol.title, loaderData.sol.short) : { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const { sol } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Solution" title={sol.title} intro={sol.short} />
      <section className="bg-paper"><div className="container-site grid gap-4 pb-20 md:grid-cols-3">
        {sol.points.map((p, i) => (
          <div key={p} className="border-t-2 border-ink pt-5">
            <span className="font-mono text-xs text-signal">0{i + 1}</span>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink">{p}</h3>
          </div>
        ))}
      </div></section>
      <section className="bg-paper2"><div className="container-site py-16"><SectionHead title="Proof in production" /><CaseGrid /></div></section>
      <CtaBand />
    </>
  );
}
