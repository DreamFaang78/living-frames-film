import { createFileRoute } from "@tanstack/react-router";
import { CinematicScene } from "@/components/site/CinematicScene";
import { CTAExternal, CTALink } from "@/components/site/CTAButton";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { motion } from "framer-motion";

export const Route = createFileRoute("/why-nicwin")({
  head: () => ({
    meta: [
      { title: "Why Nicwin — Climate, silence, security, craft" },
      {
        name: "description",
        content:
          "Four reasons Indian homes choose Nicwin: climate mastery, acoustic sanctuary, uncompromised security, and craft that lasts generations.",
      },
      { property: "og:title", content: "Why Nicwin" },
    ],
    links: [{ rel: "canonical", href: "/why-nicwin" }],
  }),
  component: Why,
});

const pillars = [
  {
    kicker: "01 · Climate Mastery",
    title: "The heat you keep out is the bill you don't pay.",
    body: "Multi-chamber uPVC profiles and thermally-broken aluminium sections are tuned for 45°C summers and lashing monsoons. Our seals hold under wind-driven rain. Our glazing keeps AC where it belongs — inside.",
    stats: [
      { k: "45°C", v: "Heat tolerance tested" },
      { k: "24%", v: "Avg. cooling savings" },
      { k: "IS-4351", v: "Weather-tightness class" },
    ],
    variant: "teal" as const,
  },
  {
    kicker: "02 · Acoustic Sanctuary",
    title: "Traffic, festival, temple bell — dialed down.",
    body: "Twin EPDM gaskets, laminated double-glazing, precise sash tolerances. The road stays outside, the room becomes yours. Sleep through Diwali. Read through rush hour.",
    stats: [
      { k: "38dB", v: "Sound attenuation" },
      { k: "2x", v: "Gasket lines" },
      { k: "PVB", v: "Acoustic laminate" },
    ],
    variant: "night" as const,
  },
  {
    kicker: "03 · Security Without Compromise",
    title: "Beautiful only counts when it also feels safe.",
    body: "Multi-point locking, steel-reinforced profiles, forged handles, laminated glass options. Security is not a bolt-on — it is designed in before anything else is drawn.",
    stats: [
      { k: "5-pt", v: "Locking systems" },
      { k: "1.5mm", v: "Steel reinforcement" },
      { k: "SS304", v: "Marine-grade hardware" },
    ],
    variant: "gold" as const,
  },
  {
    kicker: "04 · Craft That Lasts Generations",
    title: "The door your grandchild will still open.",
    body: "In-house fabrication in Deoghar. Twenty craftspeople who touch every unit. German-inspired engineering. A ten-year practical warranty that we honour without a fight.",
    stats: [
      { k: "In-house", v: "Fabrication" },
      { k: "10-yr", v: "Practical warranty" },
      { k: "20+", v: "Craftspeople" },
    ],
    variant: "night" as const,
  },
];

function Why() {
  return (
    <>
      <CinematicScene variant="night" className="min-h-[70svh]">
        <div className="mx-auto flex min-h-[70svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 md:px-10">
          <Reveal>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-champagne">Why Nicwin</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="text-balance font-display text-6xl leading-[0.95] text-offwhite md:text-[7.5rem]">
              Four promises. Kept
              <br />
              <span className="italic text-champagne">every single day.</span>
            </h1>
          </Reveal>
        </div>
      </CinematicScene>

      {pillars.map((p, idx) => (
        <section
          key={p.kicker}
          className={
            idx % 2 === 0
              ? "border-b border-white/5 bg-ink py-32"
              : "relative overflow-hidden py-32"
          }
        >
          {idx % 2 !== 0 && (
            <div aria-hidden className="absolute inset-0 mesh-charcoal opacity-40" />
          )}
          <div className="relative mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-[1fr_1.2fr] md:px-10">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-champagne">
                  {p.kicker}
                </div>
                <h2 className="mt-6 font-display text-5xl leading-tight text-offwhite md:text-6xl">
                  {p.title}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <p className="text-pretty text-lg leading-relaxed text-offwhite/75">{p.body}</p>
                <Stagger className="mt-10 grid grid-cols-3 gap-4">
                  {p.stats.map((s) => (
                    <motion.div
                      key={s.k}
                      variants={item}
                      className="rounded-2xl border border-white/8 bg-charcoal/60 p-5"
                    >
                      <div className="font-display text-3xl text-champagne">{s.k}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-offwhite/55">
                        {s.v}
                      </div>
                    </motion.div>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="py-32 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-display text-5xl text-offwhite md:text-6xl">
              Bring the better home.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <CTAExternal href={SITE.whatsappUrl}>Talk to us on WhatsApp</CTAExternal>
              <CTALink to="/products" variant="ghost">
                See the range
              </CTALink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
