import { Link } from "@tanstack/react-router";
import { CONTACT, SERVICES, SOCIALS } from "@/lib/site";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="border-t-2 border-signal bg-ink">
      <div className="container-site py-12">
        <div className="mb-12 grid gap-6 border-b-2 border-cream/10 pb-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="eyebrow text-signal2">Newsletter</span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-cream">Lab notes, once a month.</h3>
          </div>
          <Newsletter dark />
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-display text-lg font-bold tracking-tight text-cream">QA<span className="text-signal">/</span>LABS</span>
            <p className="mt-3 max-w-[30ch] text-sm text-cream/60">Quality Assurance Labs — a Bangladesh software studio for teams that ship.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="bg-cream/10 px-3 py-2 font-mono text-[12px] text-cream ring-1 ring-cream/20 transition-colors hover:bg-signal hover:text-ink">{s.label}</a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <span className="eyebrow text-signal2">Services</span>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              {SERVICES.map((s) => <li key={s.slug}><Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-cream">{s.title}</Link></li>)}
            </ul>
          </div>
          <div className="md:col-span-2">
            <span className="eyebrow text-signal2">Company</span>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              {["about", "team", "careers", "press"].map((p) => <li key={p}><Link to="/$page" params={{ page: p }} className="capitalize hover:text-cream">{p}</Link></li>)}
              <li><Link to="/case-studies" className="hover:text-cream">Case studies</Link></li>
              <li><Link to="/pricing" className="hover:text-cream">Pricing</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <span className="eyebrow text-signal2">Contact</span>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>{CONTACT.address}</li>
              <li><a href={`mailto:${CONTACT.email}`} className="break-all hover:text-cream">{CONTACT.email}</a></li>
              <li><a href={CONTACT.whatsapp} className="hover:text-cream">{CONTACT.phone}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t-2 border-cream/10 pt-6 font-mono text-[11px] text-cream/40 sm:flex-row sm:justify-between">
          <span>© 2026 Quality Assurance Labs</span>
          <div className="flex flex-wrap gap-4">
            {([["privacy-policy", "Privacy"], ["terms-of-service", "Terms"], ["cookie-policy", "Cookies"], ["accessibility-statement", "Accessibility"], ["security-compliance", "Security"]] as const).map(([p, l]) => (
              <Link key={p} to="/$page" params={{ page: p }} className="hover:text-cream">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
