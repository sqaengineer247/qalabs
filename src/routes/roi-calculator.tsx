import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/Blocks";
import { Newsletter } from "@/components/site/Newsletter";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/roi-calculator")({
  head: () => seo("QA Automation ROI Calculator", "Estimate your annual savings from test automation."),
  component: Page,
});

function Page() {
  const [team, setTeam] = useState(5);
  const [rate, setRate] = useState(40);
  const [hours, setHours] = useState(20);
  const savings = Math.round(team * rate * hours * 48 * 0.6);
  const num = (v: string) => Math.max(0, Number(v) || 0);
  return (
    <>
      <PageHero eyebrow="ROI Calculator" title="What is manual testing costing you?" intro="We assume automation removes about 60% of repetitive manual testing hours over 48 working weeks." />
      <section className="bg-paper"><div className="container-site grid gap-6 pb-20 lg:grid-cols-2">
        <div className="space-y-5 bg-cream p-6 ring-1 ring-black/5">
          {[["Team size (testers)", team, setTeam], ["Hourly rate (USD)", rate, setRate], ["Manual hours / week per tester", hours, setHours]].map(([l, v, set]) => (
            <label key={l as string} className="block font-mono text-[12px] uppercase tracking-[0.12em] text-ink2">{l as string}
              <input type="number" min={0} value={v as number} onChange={(e) => (set as (n: number) => void)(num(e.target.value))} className="field font-display !text-2xl" />
            </label>
          ))}
        </div>
        <div className="flex flex-col justify-between bg-ink p-8">
          <div>
            <p className="eyebrow text-signal2">Estimated annual savings</p>
            <p className="mt-4 font-display text-6xl font-bold text-cream">${savings.toLocaleString()}</p>
          </div>
          <div className="mt-8">
            <p className="mb-3 text-sm text-cream/70">Email me these results and a free automation plan:</p>
            <Newsletter dark />
          </div>
        </div>
      </div></section>
    </>
  );
}
