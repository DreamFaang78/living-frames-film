import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--nicwin-blue-deep)] pt-24">
      {/* Red hairline at top */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-[color:var(--nicwin-red)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 mesh-charcoal" />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden>
                <rect x="2" y="2" width="36" height="36" rx="6" fill="#ffffff" />
                <path d="M11 30 V10 h4 l10 14 V10 h4 v20 h-4 L15 16 v14 z" fill="var(--nicwin-blue)" />
                <rect x="2" y="34" width="36" height="4" rx="1" fill="var(--nicwin-red)" />
              </svg>
              <div className="font-display text-3xl text-white">Nicwin</div>
            </div>
            <p className="mt-6 max-w-md text-pretty text-lg text-white/75">
              Engineered for monsoons. Designed for modern Indian life.
              <br />
              <span className="italic text-white">Always looking for the better.</span>
            </p>
            <div className="mt-8 h-[2px] w-24 bg-[color:var(--nicwin-red)]" />
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-champagne">Explore</div>
            <ul className="mt-4 space-y-2 text-sm text-offwhite/80">
              <li><Link to="/" className="hover:text-champagne">Home</Link></li>
              <li><Link to="/about" className="hover:text-champagne">About</Link></li>
              <li><Link to="/products" className="hover:text-champagne">Products</Link></li>
              <li><Link to="/why-nicwin" className="hover:text-champagne">Why Nicwin</Link></li>
              <li><Link to="/gallery" className="hover:text-champagne">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-champagne">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-champagne">Reach us</div>
            <ul className="mt-4 space-y-2 text-sm text-offwhite/80">
              {SITE.phones.map((p) => (
                <li key={p.number}>
                  <a href={`tel:${p.tel}`} className="hover:text-champagne">
                    <span className="text-offwhite/50">{p.label}</span> · {p.number}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-champagne">
                  {SITE.email}
                </a>
              </li>
              <li className="text-offwhite/60">{SITE.hours}</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-champagne">Locations</div>
            <div className="mt-4 space-y-4 text-sm text-offwhite/70">
              <div>
                <div className="text-offwhite">{SITE.factory.label}</div>
                <div>{SITE.factory.address}</div>
              </div>
              <div>
                <div className="text-offwhite">{SITE.branch.label}</div>
                <div>{SITE.branch.address}</div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              {SITE.socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-offwhite/70 hover:border-champagne hover:text-champagne"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-white/5 py-8 text-xs text-offwhite/40 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Nicwin Windows & Door Systems. All rights reserved.</div>
          <div>Made in Deoghar, Jharkhand · Delivered across India</div>
        </div>
      </div>
    </footer>
  );
}
