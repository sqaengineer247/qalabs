import { createFileRoute, notFound } from "@tanstack/react-router";
import { POSTS } from "@/lib/site";
import { PostGrid, SectionHead } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => loaderData ? seo(loaderData.post.title, loaderData.post.short) : { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const { post } = Route.useLoaderData();
  const url = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const share = [
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${url}`],
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${url}`],
    ["WhatsApp", `https://api.whatsapp.com/send?text=${url}`],
    ["X", `https://x.com/intent/tweet?url=${url}`],
  ];
  return (
    <>
      <article className="bg-paper">
        <div className="container-site max-w-3xl py-16">
          <p className="eyebrow text-signal">{post.tag}</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">{post.title}</h1>
          <p className="mt-4 font-mono text-xs text-ink2">{post.date} · {post.mins} min read · {post.author}</p>
          <div className="mt-10 space-y-5 text-ink2">
            <p className="text-lg text-ink">{post.short}</p>
            <p>Shipping reliable software is less about heroics and more about habits. In this note we share what we've learned running this practice across dozens of client projects.</p>
            <p>Start by measuring where time and risk actually go, then fix the biggest bottleneck first. Small, repeatable improvements beat big rewrites every time.</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t-2 border-ink pt-6">
            <span className="eyebrow mr-2 text-ink2">Share</span>
            {share.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noreferrer" className="btn-cream !px-3 !py-1.5 !text-xs">{l}</a>)}
          </div>
          <div className="mt-8 bg-cream p-6 ring-1 ring-black/5">
            <p className="eyebrow text-signal">Author</p>
            <p className="mt-2 font-display font-semibold text-ink">{post.author}</p>
            <p className="text-sm text-ink2">QA engineers and developers at Quality Assurance Labs.</p>
          </div>
        </div>
      </article>
      <section className="bg-paper2"><div className="container-site py-16"><SectionHead title="Related posts" /><PostGrid posts={POSTS.filter((p) => p.slug !== post.slug)} /></div></section>
    </>
  );
}
