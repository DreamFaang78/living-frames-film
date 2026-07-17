import { createFileRoute, Link } from "@tanstack/react-router";
import { CinematicScene } from "@/components/site/CinematicScene";
import { CTAExternal, CTALink } from "@/components/site/CTAButton";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nicwin — We make the frames that frame your life" },
      {
        name: "description",
        content:
          "Nicwin is a Deoghar-based manufacturer of premium uPVC, Aluminium and Steel windows and doors. German-inspired engineering, mastered for Indian climate.",
      },
      { property: "og:title", content: "About Nicwin" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    title: "Mission",
    body: "Elevate the everyday Indian home with fenestration that is quiet, safe, and beautiful — without asking anyone to compromise.",
  },
  {
    title: "Vision",
    body: "To be the name Indian architects reach for when the drawing needs frames that finally match the ambition.",
  },
  {
    title: "Values",
    body: "Precision over polish. Honesty over hype. The customer's ten-year experience over the ten-minute sale.",
  },
  {
    title: "Philosophy",
    body: "The best window is one you stop noticing — because heat, dust, and noise have already been shown the door.",
  },
];

const pillars = [
  {
    title: "Customer-Centric",
    body: "Every project starts with a conversation, not a catalogue. We ask about your morning light before we quote your frame.",
  },
  {
    title: "Sustainability",
    body: "Lead-free uPVC. Recyclable aluminium. Energy performance measured, not marketed.",
  },
  {
    title: "Quality",
    body: "Multi-stage QC on every profile, every weld, every gasket. If it doesn't pass here, it doesn't reach your home.",
  },
  {
    title: "Craftsmanship",
    body: "In-house fabrication in Deoghar. Twenty craftspeople who touch every unit before it ships.",
  },
];

function About() {
  return (
    <>
      <CinematicScene variant="teal" className="min-h-[80svh]">
        <div className="mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 md:px-10">
          <Reveal>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-champagne">About Nicwin</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="text-balance font-display text-6xl leading-[0.95] text-offwhite md:text-[8rem]">
              We make the frames
              <br />
              <span className="italic text-champagne">that frame your life.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl text-lg text-offwhite/75">
              A window is not a feature. It is the border between the world and your morning
              tea. We take that border seriously.
            </p>
          </Reveal>
        </div>
      </CinematicScene>

      {/* HERITAGE */}
      <section className="border-y border-white/5 bg-ink py-32">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-[1fr_1.4fr] md:px-10">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-champagne">Heritage</div>
              <h2 className="mt-4 font-display text-4xl text-offwhite md:text-5xl">
                Five years of focused practice. Decades of collective craft.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="space-y-5 text-lg leading-relaxed text-offwhite/75">
              <p>
                Nicwin was founded in Deoghar to solve a specific frustration: the Indian
                home was being asked to accept second-rate fenestration in a first-rate era
                of interior design. We began by fabricating uPVC systems that could actually
                hold their own against a Jharkhand summer and a Bengal monsoon.
              </p>
              <p>
                The company is five years young. The people inside it carry decades — of
                metalwork, glazing, joinery, and site experience. What ships is new. The
                hands that ship it are not.
              </p>
              <p className="italic text-champagne">
                "Always looking for the better." It is not a tagline. It is the only rule
                on the workshop wall.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES CARDS */}
      <section className="py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">
              What we hold ourselves to
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-5xl text-offwhite md:text-6xl">
              Four short sentences, kept out loud.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.article
                key={v.title}
                variants={item}
                className="rounded-3xl border border-white/8 bg-ink p-8 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="font-display text-4xl text-champagne/60">0{i + 1}</div>
                <h3 className="mt-4 font-display text-2xl text-offwhite">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/70">{v.body}</p>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative overflow-hidden border-y border-white/5 bg-ink py-32">
        <div aria-hidden className="absolute inset-0 mesh-charcoal opacity-40" />
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">Our pillars</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-5xl text-offwhite md:text-6xl">
              How the work actually gets done.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-8 md:grid-cols-2">
            {pillars.map((p) => (
              <motion.div key={p.title} variants={item}>
                <div className="flex items-start gap-6">
                  <div className="hair-gold mt-4 w-10 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-2xl text-offwhite">{p.title}</h3>
                    <p className="mt-2 text-offwhite/70">{p.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TODO(client-media): swap these placeholders for real Nicwin factory
          and showroom photos + walkthrough video when the client shares them. */}
      <section className="border-y border-white/5 bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">
              See it in person
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-offwhite md:text-5xl">
              Factory & Experience Center — Deoghar.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                label: "Factory — Deoghar",
                body: "Nayachitkat, Rikhiya Dumma Border Road. In-house fabrication floor with QC bay.",
              },
              {
                label: "Experience Center & Showroom — Deoghar",
                body: "Sparsh Complex, Deoghar College Road, Tiwari Chowk. Walk through live installations.",
              },
            ].map((slot) => (
              <div
                key={slot.label}
                className="relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl border border-dashed border-white/25 bg-charcoal/60 p-8"
              >
                <div className="absolute left-4 top-4 rounded-full border border-champagne/40 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-champagne">
                  Coming soon · awaiting client media
                </div>
                <div className="font-display text-2xl text-offwhite">{slot.label}</div>
                <p className="mt-2 max-w-md text-sm text-offwhite/60">{slot.body}</p>
                <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-offwhite/40">
                  Real photos & walkthrough video will be added here.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-32">
        <div className="mx-auto max-w-[900px] px-6 text-center md:px-10">
          <Reveal>
            <h2 className="font-display text-4xl text-offwhite md:text-6xl">
              Come see the workshop.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-offwhite/70">
              Deoghar factory. Deoghar Experience Center & Showroom. And a WhatsApp always open.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CTAExternal href={SITE.whatsappUrl}>Talk to us on WhatsApp</CTAExternal>
              <CTALink to="/contact" variant="ghost">
                Plan a visit
              </CTALink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

// Silence unused import in some builds
void Link;
