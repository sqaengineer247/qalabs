import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () => seo("Pricing", "Flexible engagement models: hourly/retainer, project-based, and dedicated teams."),
  component: Page,
});

const PLANS = [
  { name: "Hourly / Retainer", price: "From $25/hr", desc: "Flexible capacity for ongoing testing and development.", feats: ["Pay for hours used", "Monthly retainer discounts", "Weekly reports"] },
  { name: "Project-Based", price: "Fixed quote", desc: "Clear scope, timeline, and price for a defined project.", feats: ["Scoped deliverables", "Milestone payments", "Final sign-off report"], hot: true },
  { name: "Dedicated Team", price: "Monthly", desc: "A full-time team embedded in your workflow.", feats: ["Your tools & rituals", "Scale up or down", "Senior lead included"] },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Pick how you want to work." intro="Every engagement starts with a free scoping call. Prices shown are starting points." />
      <section className="bg-paper"><div className="container-site grid gap-4 pb-12 md:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className={`flex flex-col p-8 ring-1 ${p.hot ? "bg-signal ring-signal" : "bg-cream ring-black/5"}`}>
            <h2 className="font-display text-xl font-semibold text-ink">{p.name}</h2>
            <p className="mt-4 font-display text-4xl font-bold text-ink">{p.price}</p>
            <p className="mt-3 text-sm text-ink2">{p.desc}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-ink">{p.feats.map((f) => <li key={f}>— {f}</li>)}</ul>
            <Link to="/contact" className="btn-ink mt-8">Get a quote</Link>
          </div>
        ))}
      </div>
      <div className="container-site pb-20"><Link to="/$page" params={{ page: "terms-of-service" }} className="font-mono text-xs text-signal">Terms of engagement / SLA →</Link></div></section>
      <CtaBand />
    </>
  );
}
