import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { INDUSTRIES, SERVICES, SOLUTIONS } from "@/lib/site";

type Item = { label: string; to: string; params?: Record<string, string> };

const MENUS: { label: string; items: Item[] }[] = [
  { label: "Services", items: [{ label: "All services", to: "/services" }, ...SERVICES.map((s) => ({ label: s.title, to: "/services/$slug", params: { slug: s.slug } }))] },
  { label: "Solutions", items: [...SOLUTIONS.map((s) => ({ label: s.title, to: "/solutions/$slug", params: { slug: s.slug } })), { label: "View all solutions", to: "/solutions" }] },
  { label: "Industries", items: INDUSTRIES.map((s) => ({ label: s.title, to: "/industries/$slug", params: { slug: s.slug } })) },
  { label: "Resources", items: [{ label: "Blog", to: "/blog" }, { label: "Guides", to: "/resources" }, { label: "ROI Calculator", to: "/roi-calculator" }, { label: "Requirements Guide", to: "/requirements-guide" }, { label: "FAQ", to: "/faq" }, { label: "Testimonials", to: "/testimonials" }, { label: "Pricing", to: "/pricing" }] },
  { label: "About", items: [{ label: "Our Story", to: "/$page", params: { page: "about" } }, { label: "Team", to: "/$page", params: { page: "team" } }, { label: "Process", to: "/$page", params: { page: "process" } }, { label: "Partners & Certs", to: "/$page", params: { page: "partners" } }, { label: "Awards & Recognition", to: "/$page", params: { page: "awards" } }, { label: "Careers", to: "/$page", params: { page: "careers" } }, { label: "Press & Media Kit", to: "/$page", params: { page: "press" } }] },
];

function NavLink({ item, onClick, className }: { item: Item; onClick?: () => void; className: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Link to={item.to as any} params={item.params as any} onClick={onClick} className={className}>{item.label}</Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-paper">
      <div className="container-site">
        <div className="flex items-center justify-between border-b-2 border-ink py-4">
          <Link to="/" className="font-display text-lg font-bold tracking-tight text-ink">QA<span className="text-signal">/</span>LABS</Link>
          <nav className="hidden items-center gap-6 font-mono text-[13px] text-ink2 lg:flex">
            {MENUS.slice(0, 3).map((m) => <Menu key={m.label} menu={m} />)}
            <Link to="/case-studies" className="hover:text-signal">Case Studies</Link>
            {MENUS.slice(3).map((m) => <Menu key={m.label} menu={m} />)}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden font-mono text-[13px] text-ink2 hover:text-signal sm:inline">Contact</Link>
            <Link to="/contact" className="btn-ink hidden !px-4 !py-2 !text-[13px] sm:inline-flex">Start a project</Link>
            <button onClick={() => setOpen(!open)} className="font-mono text-[13px] text-ink lg:hidden" aria-expanded={open}>{open ? "Close" : "Menu"}</button>
          </div>
        </div>
        {open && (
          <div className="max-h-[75vh] overflow-y-auto border-b-2 border-ink py-4 lg:hidden">
            {MENUS.map((m) => (
              <div key={m.label} className="mb-4">
                <p className="eyebrow mb-2 text-signal">{m.label}</p>
                <div className="grid grid-cols-2 gap-2">
                  {m.items.map((i) => <NavLink key={i.label} item={i} onClick={() => setOpen(false)} className="text-sm text-ink2 hover:text-signal" />)}
                </div>
              </div>
            ))}
            <div className="flex gap-4 font-mono text-sm">
              <Link to="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="text-signal">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Menu({ menu }: { menu: { label: string; items: Item[] } }) {
  return (
    <div className="group relative">
      <button className="py-2 hover:text-signal">{menu.label} <span className="text-signal">+</span></button>
      <div className="invisible absolute left-0 top-full z-50 w-64 bg-cream p-2 opacity-0 shadow-lg ring-1 ring-ink transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        {menu.items.map((i) => <NavLink key={i.label} item={i} className="block px-3 py-2 text-sm text-ink2 hover:bg-paper2 hover:text-signal" />)}
      </div>
    </div>
  );
}
