import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import nicwinLogo from "@/assets/brand/nicwin-logo.png.asset.json";

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
              <span className="inline-flex items-center justify-center rounded-lg bg-white px-3 py-2 shadow-sm">
                <img
                  src={nicwinLogo.url}
                  alt="Nicwin Windows & Door Systems"
                  className="h-12 w-auto"
                  width={140}
                  height={56}
                />
              </span>
            </div>
            <p className="mt-6 max-w-md text-pretty text-lg text-white/75">
              Built for Indian weather. Made for the way we live today.
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
                <div className="text-offwhite">{SITE.showroom.label}</div>
                <div>{SITE.showroom.address}</div>
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
