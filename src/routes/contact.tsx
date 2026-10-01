import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { CONTACT, SERVICES, SOCIALS } from "@/lib/site";
import { PageHero } from "@/components/site/Blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Start a project with Quality Assurance Labs. Email, WhatsApp, or send us your brief."),
  component: Page,
});

const L = "block font-mono text-[12px] uppercase tracking-[0.12em] text-ink2";

function Page() {
  const navigate = useNavigate();
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build something that holds." intro="Tell us about your project. A senior engineer replies within one business day." />
      <section className="bg-paper"><div className="container-site grid gap-8 pb-20 lg:grid-cols-12">
        <form onSubmit={(e) => { e.preventDefault(); navigate({ to: "/thank-you" }); }} className="grid gap-5 bg-cream p-6 ring-1 ring-black/5 sm:grid-cols-2 lg:col-span-7">
          <label className={L}>Full name *<input required className="field" /></label>
          <label className={L}>Email *<input required type="email" className="field" /></label>
          <label className={L}>Phone<input type="tel" className="field" /></label>
          <label className={L}>Company<input className="field" /></label>
          <label className={L}>Service<select className="field">{SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}<option>Not sure yet</option></select></label>
          <label className={L}>Budget range<select className="field"><option>Under $5k</option><option>$5k–$20k</option><option>$20k–$50k</option><option>$50k+</option></select></label>
          <label className={L}>Timeline<select className="field"><option>ASAP</option><option>1–3 months</option><option>3–6 months</option><option>Flexible</option></select></label>
          <label className={L}>RFP / specs<input type="file" className="field !text-xs" /></label>
          <label className={`${L} sm:col-span-2`}>Message *<textarea required rows={4} className="field" /></label>
          <label className="flex items-start gap-2 text-sm text-ink2 sm:col-span-2"><input required type="checkbox" className="mt-1" /> I agree to be contacted about my enquiry and accept the privacy policy.</label>
          <button className="btn-ink sm:col-span-2">Send brief</button>
        </form>
        <div className="space-y-4 lg:col-span-5">
          {[["Email", CONTACT.email, `mailto:${CONTACT.email}`], ["Phone", CONTACT.phone, `tel:${CONTACT.phone.replace(/\s/g, "")}`], ["WhatsApp", "Chat now", CONTACT.whatsapp]].map(([l, v, h]) => (
            <a key={l} href={h} className="block bg-ink p-5 transition-colors hover:bg-signal group">
              <p className="eyebrow text-signal2 group-hover:text-ink">{l}</p>
              <p className="mt-1 break-all font-display text-lg text-cream group-hover:text-ink">{v}</p>
            </a>
          ))}
          <div className="flex gap-2">{SOCIALS.slice(0, 2).map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="btn-cream !py-2">{s.label}</a>)}</div>
          <div>
            <p className="eyebrow mb-2 text-signal">Office</p>
            <p className="mb-3 text-sm text-ink2">{CONTACT.address}</p>
            <iframe title="Office map" className="aspect-[4/3] w-full grayscale" loading="lazy" src="https://www.google.com/maps?q=Bogura,Bangladesh&output=embed" />
          </div>
        </div>
      </div></section>
    </>
  );
}
