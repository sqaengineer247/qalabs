import { createFileRoute, notFound } from "@tanstack/react-router";
import { CASES } from "@/lib/site";
import { CASE_IMG, CtaBand, PageHero } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const c = CASES.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return { c };
  },
  head: ({ loaderData }) => loaderData ? seo(loaderData.c.title, loaderData.c.short) : { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const { c } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`Case study — ${c.tag}`} title={c.title} intro={c.short} />
      <section className="bg-paper"><div className="container-site pb-20">
        <img src={CASE_IMG[c.img]} alt={c.title} width={1088} height={800} className="aspect-[16/8] w-full object-cover" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[["Challenge", "The team needed to ship faster without risking quality in production."], ["Approach", "We audited the release process, added automated guardrails, and worked in weekly sprints."], ["Result", c.short]].map(([h, p]) => (
            <div key={h} className="border-t-2 border-ink pt-5"><h3 className="font-display text-lg font-semibold text-ink">{h}</h3><p className="mt-2 text-sm text-ink2">{p}</p></div>
          ))}
        </div>
      </div></section>
      <CtaBand />
    </>
  );
}
