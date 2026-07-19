import { createFileRoute } from "@tanstack/react-router";
import { CinematicScene } from "@/components/site/CinematicScene";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Reveal, Stagger, item } from "@/components/site/Reveal";


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
    kicker: "01 · Built for Indian weather",
    title: "Less heat in. Lower AC bill.",
    body: "Our uPVC and aluminium frames are made for 45°C summers and heavy monsoons. The seals hold against wind-driven rain. The frame keeps heat outside — your AC works less, your bill drops.",
    stats: [
      { k: "45°C", v: "Heat tested" },
      { k: "24%", v: "Average AC saving" },
      { k: "IS-4351", v: "Weather rating" },
    ],
    variant: "teal" as const,
  },
  {
    kicker: "02 · Keeps noise out",
    title: "Traffic, temple bell, wedding drums — much quieter inside.",
    body: "Two rubber gaskets and thick laminated glass block most outside sound. Sleep through Diwali. Read during rush hour.",
    stats: [
      { k: "38dB", v: "Noise reduction" },
      { k: "2x", v: "Rubber seals" },
      { k: "PVB", v: "Sound-block glass" },
    ],
    variant: "night" as const,
  },
  {
    kicker: "03 · Safe and secure",
    title: "A beautiful window that's also strong.",
    body: "Multi-point locks. Steel inside the frame. Strong metal handles. Laminated glass on request. Security isn't an add-on — it's built in from the start.",
    stats: [
      { k: "5-pt", v: "Lock system" },
      { k: "1.5mm", v: "Steel inside" },
      { k: "SS304", v: "Marine-grade metal" },
    ],
    variant: "gold" as const,
  },
  {
    kicker: "04 · Made to last",
    title: "The door your grandchild will still open.",
    body: "Built in our own Deoghar factory. Twenty people who check every unit. German-style machines. A ten-year warranty we actually honour.",
    stats: [
      { k: "In-house", v: "We make it" },
      { k: "10-yr", v: "Warranty" },
      { k: "20+", v: "People on the team" },
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
              Four promises.
              <br />
              <span className="italic text-champagne">Kept every day.</span>
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

      <FinalCTA
        headline="Bring the better home."
        secondary={{ label: "See the range", to: "/products" }}
      />

    </>
  );
}
