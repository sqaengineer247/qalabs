import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PostGrid } from "@/components/site/Blocks";
import { Newsletter } from "@/components/site/Newsletter";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => seo("Blog & Insights", "Notes from the lab on testing, AI, and shipping reliable software."),
  component: () => (
    <>
      <PageHero eyebrow="Blog" title="From the lab." intro="Practical notes on testing, AI, and shipping reliable software."><div className="mt-8"><Newsletter /></div></PageHero>
      <section className="bg-paper"><div className="container-site pb-20"><PostGrid /></div></section>
    </>
  ),
});
