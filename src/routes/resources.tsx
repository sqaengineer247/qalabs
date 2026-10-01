import { createFileRoute, Link } from "@tanstack/react-router";
import { RESOURCE_CATS } from "@/lib/site";
import { PageHero } from "@/components/site/Blocks";
import { Newsletter } from "@/components/site/Newsletter";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  head: () => seo("Guides & Resources", "Guides on QA testing, AI integration, web and mobile development, video, and marketing."),
  component: () => (
    <>
      <PageHero eyebrow="Guide library" title="Guides for teams that ship." intro="Free, practical guides from our engineers."><div className="mt-8"><Newsletter /></div></PageHero>
      <section className="bg-paper"><div className="container-site grid gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCE_CATS.map((c, i) => (
          <Link key={c} to="/blog" className="bg-cream p-6 ring-1 ring-black/5 hover:ring-ink">
            <span className="font-mono text-xs text-signal">G{i + 1}</span>
            <h2 className="mt-3 font-display text-lg font-semibold text-ink">{c}</h2>
            <p className="mt-2 text-sm text-ink2">Checklists, how-tos, and lessons from real projects.</p>
          </Link>
        ))}
        <Link to="/requirements-guide" className="bg-signal p-6"><h2 className="font-display text-lg font-semibold text-ink">Download: What to ask QA vendors →</h2></Link>
      </div></section>
    </>
  ),
});
