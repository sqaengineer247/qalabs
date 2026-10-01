import { useState } from "react";

export function Newsletter({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);
  if (done) return <p className={`font-mono text-sm ${dark ? "text-signal2" : "text-signal"}`}>Thanks — you're on the list.</p>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex w-full max-w-lg gap-2">
      <input required type="email" placeholder="you@company.com" aria-label="Email" className={`flex-1 px-4 py-3 font-mono text-sm outline-none ring-1 focus:ring-signal ${dark ? "bg-cream/10 text-cream ring-cream/20 placeholder:text-cream/40" : "bg-cream text-ink ring-ink/15"}`} />
      <button className="btn-signal">Subscribe</button>
    </form>
  );
}
