import { Reveal } from "@/components/site/Reveal";
import { CTAExternal } from "@/components/site/CTAButton";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=24.5050145,86.6974755";

export function FindShowroom() {
  return (
    <section
      aria-labelledby="find-showroom-heading"
      className="border-t border-white/5 bg-ink py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:grid-cols-[1fr_1fr] md:gap-16 md:px-10">
        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">
              Visit us
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2
              id="find-showroom-heading"
              className="mt-4 font-display text-4xl leading-[1.05] text-offwhite md:text-5xl"
            >
              Find Our <span className="text-[color:var(--nicwin-red)]">Showroom</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-offwhite/75 md:text-lg">
              Visit our showroom to explore our premium collection of uPVC,
              Aluminium, and Steel Window &amp; Door Systems. Tap Get Directions
              to open Google Maps and navigate straight to us.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <address className="mt-6 max-w-xl not-italic text-sm text-offwhite/70">
              <span className="font-semibold text-offwhite">{SITE.showroom.label}</span>
              <br />
              {SITE.showroom.address}
            </address>
          </Reveal>
          <Reveal delay={4}>
            <div className="mt-10">
              <CTAExternal
                href={MAPS_URL}
                ariaLabel="Get directions to NICWIN Window & Door Systems on Google Maps"
              >
                <MapPin size={16} aria-hidden />
                Get Directions
              </CTAExternal>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to NICWIN Window & Door Systems on Google Maps"
            className="group relative block overflow-hidden rounded-[16px] border border-white/10 bg-charcoal/60 p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] transition-colors hover:border-[color:var(--nicwin-red)]/60"
          >
            <div className="flex h-[420px] flex-col items-center justify-center gap-6 text-center md:h-[480px]">
              <MapPin size={56} className="text-[color:var(--nicwin-red)]" aria-hidden />
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-champagne">
                  Location
                </div>
                <p className="mt-3 font-display text-2xl text-offwhite md:text-3xl">
                  {SITE.showroom.label}
                </p>
                <p className="mt-3 max-w-sm text-sm text-offwhite/70">
                  {SITE.showroom.address}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-offwhite transition-colors group-hover:border-[color:var(--nicwin-red)] group-hover:text-[color:var(--nicwin-red)]">
                Open in Google Maps →
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
