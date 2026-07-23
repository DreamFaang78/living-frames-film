import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { CTALink } from "@/components/site/CTAButton";
import founderImg from "@/assets/founder/founder-nicwin.png.asset.json";
import { motion } from "framer-motion";

const ALT =
  "Founder of NICWIN Window & Door Systems in professional business attire";

type Props = {
  variant?: "home" | "about";
};

const FEATURES = [
  {
    title: "Quality First",
    body: "Delivering premium products with uncompromising standards.",
  },
  {
    title: "Customer Focused",
    body: "Building lasting relationships through exceptional service.",
  },
  {
    title: "Innovative Solutions",
    body: "Providing modern window and door systems for every project.",
  },
];

export function FounderSection({ variant = "home" }: Props) {
  const isAbout = variant === "about";

  return (
    <section
      aria-labelledby="founder-heading"
      className="relative bg-[color:var(--paper)] py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[0.95fr_1.1fr] md:gap-16 md:px-10 lg:gap-20">
        {/* Image */}
        <Reveal>
          <figure className="group relative mx-auto w-full max-w-md overflow-hidden rounded-[16px] border border-[color:var(--line)] bg-[color:var(--paper-warm)] shadow-[0_30px_80px_-30px_rgba(14,59,115,0.3)] md:mx-0">
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img
                src={founderImg.url}
                alt={ALT}
                width={900}
                height={1200}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 42vw, 90vw"
                className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
            <span className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--nicwin-blue)] backdrop-blur">
              Founder
            </span>
          </figure>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <div className="eyebrow">{isAbout ? "Our Founder" : "Meet the founder"}</div>
          </Reveal>
          <Reveal delay={1}>
            <h2
              id="founder-heading"
              className="mt-6 text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,4.5vw,4rem)]"
            >
              {isAbout ? (
                <>
                  Our <span className="text-[color:var(--nicwin-red)]">Founder</span>
                </>
              ) : (
                <>
                  Meet Our <span className="text-[color:var(--nicwin-red)]">Founder</span>
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-xl text-lg font-medium text-[color:var(--nicwin-blue)]">
              Committed to Quality, Innovation &amp; Customer Satisfaction
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[color:var(--ink-soft)] md:text-lg">
              At NICWIN Window &amp; Door Systems, our vision is to deliver
              premium-quality uPVC, Aluminium, and Steel Window &amp; Door
              solutions that combine durability, modern aesthetics, and
              exceptional craftsmanship. Every project reflects our commitment
              to quality, innovation, and long-term customer relationships.
            </p>
          </Reveal>

          {!isAbout && (
            <Reveal delay={4}>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTALink to="/about">Learn More</CTALink>
              </div>
            </Reveal>
          )}

          {isAbout && (
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-3" stagger={0.08}>
              {FEATURES.map((f) => (
                <motion.div
                  key={f.title}
                  variants={item}
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper-warm)] p-5 shadow-[0_10px_30px_-20px_rgba(14,59,115,0.35)] transition-shadow duration-500 hover:shadow-[0_20px_50px_-20px_rgba(14,59,115,0.45)]"
                >
                  <div
                    aria-hidden
                    className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--nicwin-red)]/10 text-[color:var(--nicwin-red)]"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg text-[color:var(--ink)]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    {f.body}
                  </p>
                </motion.div>
              ))}
            </Stagger>
          )}
        </div>
      </div>
    </section>
  );
}
