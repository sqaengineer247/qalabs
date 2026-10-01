import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site";
import { CaseGrid, PageHero, SectionHead } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/thank-you")({
  head: () => ({ ...seo("Thank you", "We received your message."), meta: [...seo("Thank you", "We received your message.").meta, { name: "robots", content: "noindex" }] }),
  component: () => (
    <>
      <PageHero eyebrow="Received" title="Thanks — your brief is in." intro={`A senior engineer will reply within one business day. Need us sooner? Email ${CONTACT.email}.`} />
      <section className="bg-paper"><div className="container-site pb-16">
        <div className="mb-16 grid gap-4 md:grid-cols-3">
          {["We review your brief", "We book a scoping call", "You get a clear proposal"].map((s, i) => (
            <div key={s} className="border-t-2 border-ink pt-5"><span className="font-mono text-xs text-signal">0{i + 1}</span><h3 className="mt-2 font-display text-lg font-semibold text-ink">{s}</h3></div>
          ))}
        </div>
        <SectionHead title="While you wait" /><CaseGrid />
      </div></section>
    </>
  ),
});
