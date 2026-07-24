import { Reveal } from "@/components/site/Reveal";
import { CTAExternal } from "@/components/site/CTAButton";
import { MapPin } from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=24.5050145,86.6974755";
const EMBED_URL =
  "https://www.google.com/maps?q=24.5050145,86.6974755&z=17&hl=en&output=embed";

export function FindShowroom() {
  return (
    <section
      aria-labelledby="find-showroom-heading"
      className="border-t border-white/5 bg-ink py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-10">
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
              Aluminium, and Steel Window &amp; Door Systems. Easily locate us
              using the interactive map below and get directions with a single
              click.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10">
              <CTAExternal href={MAPS_URL}>
                <MapPin size={16} aria-hidden />
                Get Directions
              </CTAExternal>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <figure className="overflow-hidden rounded-[16px] border border-white/10 bg-charcoal/60 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <iframe
              title="NICWIN Window & Door Systems showroom location on Google Maps"
              src={EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-[420px] w-full border-0 md:h-[480px]"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
