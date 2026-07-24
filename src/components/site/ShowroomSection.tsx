import { Reveal } from "@/components/site/Reveal";
import { CTAExternal, CTALink } from "@/components/site/CTAButton";
import { SITE } from "@/lib/site";
import { MapPin } from "lucide-react";
import showroomWebp from "@/assets/showroom/showroom-experience-center.webp.asset.json";
import showroomJpg from "@/assets/showroom/showroom-experience-center.jpg.asset.json";

const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=24.5050145,86.6974755";

export function ShowroomSection() {
  return (
    <section
      aria-labelledby="showroom-heading"
      className="relative bg-[color:var(--paper)] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-10 lg:gap-20">
        {/* Content */}
        <div>
          <Reveal>
            <div className="eyebrow">Visit us</div>
          </Reveal>
          <Reveal delay={1}>
            <h2
              id="showroom-heading"
              className="mt-6 text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,4.5vw,4rem)]"
            >
              Visit Our <span className="text-[color:var(--nicwin-red)]">Showroom</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-xl text-lg font-medium text-[color:var(--nicwin-blue)]">
              Experience Premium uPVC, Aluminium &amp; Steel Window &amp; Door Solutions
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[color:var(--ink-soft)] md:text-lg">
              Step into our modern showroom to explore our premium collection of uPVC, Aluminium,
              and Steel Window &amp; Door Systems. Experience product quality firsthand, receive
              expert consultation, and discover customized solutions for residential and commercial
              projects.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <address className="mt-6 max-w-xl not-italic text-sm text-[color:var(--ink-soft)]">
              <span className="font-semibold text-[color:var(--ink)]">
                {SITE.showroom.label}
              </span>
              <br />
              {SITE.showroom.address}
            </address>
          </Reveal>
          <Reveal delay={5}>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTAExternal
                href={MAPS_URL}
                ariaLabel="Get driving directions to the NICWIN showroom using Google Maps"
              >
                <MapPin size={16} aria-hidden />
                Get Directions
              </CTAExternal>
              <CTALink to="/contact" variant="ink-ghost">
                Contact Us
              </CTALink>
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal delay={2}>
          <figure className="group relative overflow-hidden rounded-[20px] border border-[color:var(--line)] bg-[color:var(--paper-warm)] shadow-[0_30px_80px_-30px_rgba(14,59,115,0.28)]">
            <div className="aspect-[3/4] w-full overflow-hidden md:aspect-[4/5]">
              <picture>
                <source srcSet={showroomWebp.url} type="image/webp" />
                <img
                  src={showroomJpg.url}
                  alt="NICWIN Window & Door Systems modern showroom displaying premium uPVC, aluminium and steel doors and windows."
                  width={896}
                  height={1195}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </picture>
            </div>
            <span className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--nicwin-blue)] backdrop-blur">
              Experience Center
            </span>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
