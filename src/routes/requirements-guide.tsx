import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/requirements-guide")({
  head: () => seo("QA Vendor Requirements Guide", "Free checklist: what to ask before hiring a QA vendor."),
  component: Page,
});

const QUESTIONS = ["Which testing types do you cover?", "How do you report defects and progress?", "Which tools and devices do you use?", "How do you handle security and NDAs?", "What does onboarding look like?", "How do you measure quality improvement?"];

function Page() {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <>
      <PageHero eyebrow="Free guide" title="What to ask QA vendors." intro="A one-page checklist to compare testing partners with confidence." />
      <section className="bg-paper"><div className="container-site grid gap-6 pb-20 lg:grid-cols-2">
        <ol className="divide-y-2 divide-ink border-y-2 border-ink">
          {QUESTIONS.map((q, i) => <li key={q} className={`py-4 font-display text-lg text-ink ${!unlocked && i > 1 ? "blur-sm select-none" : ""}`}><span className="mr-3 font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>{q}</li>)}
        </ol>
        <div className="bg-ink p-8">
          {unlocked ? (
            <p className="font-display text-2xl text-cream">Unlocked — the full checklist is shown. We've also sent a copy to your inbox.</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setUnlocked(true); }} className="space-y-4">
              <p className="eyebrow text-signal2">Get the full checklist</p>
              <input required type="email" placeholder="you@company.com" className="w-full bg-cream/10 px-4 py-3 font-mono text-sm text-cream outline-none ring-1 ring-cream/20" />
              <button className="btn-signal w-full justify-center">Unlock the guide</button>
            </form>
          )}
        </div>
      </div></section>
    </>
  );
}
