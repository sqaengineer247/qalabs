import { createFileRoute, notFound } from "@tanstack/react-router";
import { PAGES, SOCIALS } from "@/lib/site";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/$page")({
  loader: ({ params }) => {
    const page = PAGES[params.page];
    if (!page) throw notFound();
    return { page, key: params.page };
  },
  head: ({ loaderData }) => loaderData ? seo(loaderData.page.title.replace(/\.$/, ""), loaderData.page.intro) : { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const { page, key } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      <section className="bg-paper"><div className="container-site grid gap-4 pb-20 md:grid-cols-3">
        {page.blocks.map((b) => (
          <div key={b.h} className="border-t-2 border-ink pt-5">
            <h2 className="font-display text-lg font-semibold text-ink">{b.h}</h2>
            <p className="mt-2 break-words text-sm text-ink2">{b.p}</p>
          </div>
        ))}
        {(key === "team" || key === "press") && (
          <div className="flex gap-2 md:col-span-3">
            {SOCIALS.filter((s) => ["LinkedIn", "Upwork", "YouTube"].includes(s.label)).map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="btn-cream !py-2">{s.label}</a>)}
          </div>
        )}
      </div></section>
      <CtaBand />
    </>
  );
}
