import { createFileRoute } from "@tanstack/react-router";
import { CaseGrid, CtaBand, PageHero } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/")({
  head: () => seo("Case Studies", "Selected QA, AI, web, mobile and marketing work from Quality Assurance Labs."),
  component: () => (
    <>
      <PageHero eyebrow="Case studies" title="Selected work." intro="Real projects, measurable results." />
      <section className="bg-paper"><div className="container-site pb-20"><CaseGrid /></div></section>
      <CtaBand />
    </>
  ),
});
