import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/site";

export function Widgets() {
  const [cookie, setCookie] = useState(false);
  const [a11y, setA11y] = useState(false);
  const [large, setLarge] = useState(false);
  const [contrast, setContrast] = useState(false);

  useEffect(() => { if (!localStorage.getItem("qal-cookie")) setCookie(true); }, []);
  useEffect(() => { document.documentElement.classList.toggle("a11y-large", large); }, [large]);
  useEffect(() => { document.documentElement.classList.toggle("a11y-contrast", contrast); }, [contrast]);

  const choose = (v: string) => { localStorage.setItem("qal-cookie", v); setCookie(false); };

  return (
    <>
      <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-signal text-ink shadow-lg ring-2 ring-ink transition-colors hover:bg-signal2">
        <span className="font-mono text-sm font-bold">WA</span>
      </a>
      <div className="fixed bottom-5 left-5 z-50">
        {a11y && (
          <div className="mb-2 w-56 space-y-2 bg-cream p-4 ring-1 ring-ink">
            <p className="eyebrow text-signal">Accessibility</p>
            <label className="flex items-center justify-between text-sm">Larger text <input type="checkbox" checked={large} onChange={(e) => setLarge(e.target.checked)} /></label>
            <label className="flex items-center justify-between text-sm">High contrast <input type="checkbox" checked={contrast} onChange={(e) => setContrast(e.target.checked)} /></label>
          </div>
        )}
        <button onClick={() => setA11y(!a11y)} aria-label="Accessibility options" className="grid size-12 place-items-center rounded-full bg-ink font-mono text-xs text-cream ring-2 ring-cream">A11Y</button>
      </div>
      {cookie && (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t-2 border-ink bg-cream">
          <div className="container-site flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink2">We use cookies to improve your experience. See our <Link to="/$page" params={{ page: "cookie-policy" }} className="text-signal underline">cookie policy</Link>.</p>
            <div className="flex gap-2">
              <button onClick={() => choose("essential")} className="btn-cream !py-2">Essential only</button>
              <button onClick={() => choose("all")} className="btn-ink !py-2">Accept all</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
