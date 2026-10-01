import { createFileRoute } from "@tanstack/react-router";
import { FAQS } from "@/lib/site";
import { CtaBand, FaqList, PageHero } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQ", "Answers about our services, pricing, and how we work."),
  component: () => (
    <>
      <PageHero eyebrow="FAQ" title="Questions, answered." />
      <section className="bg-paper"><div className="container-site space-y-12 pb-20">
        {Object.entries(FAQS).map(([group, items]) => (
          <div key={group} className="grid gap-6 lg:grid-cols-12">
            <h2 className="font-display text-2xl font-semibold text-ink lg:col-span-4">{group}</h2>
            <div className="lg:col-span-8"><FaqList items={items} /></div>
          </div>
        ))}
      </div></section>
      <CtaBand />
    </>
  ),
});
