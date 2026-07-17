import { createFileRoute, Link } from "@tanstack/react-router";

import { FinalCTA } from "@/components/site/FinalCTA";
import { Reveal, Stagger, item } from "@/components/site/Reveal";

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
      <section className="relative isolate overflow-hidden mesh-paper">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-[var(--nicwin-red)]/60" />
        <div className="mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 md:px-10">
          <Reveal>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--nicwin-red)]">
              About Nicwin
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="text-balance font-display text-6xl leading-[0.95] text-[var(--ink)] md:text-[8rem]">
              We make the frames
              <br />
              <span className="italic text-[var(--nicwin-blue-deep)]">that frame your life.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl text-lg text-[var(--ink-soft)]">
              High-quality uPVC and aluminium doors and windows that combine modern
              design, durability, and affordability — built in a fully automated
              15,000 sq ft plant in Deoghar, Jharkhand, and delivered to homes
              across India.
            </p>
          </Reveal>
        </div>
      </section>


      {/* HERITAGE */}
      <section className="border-y border-white/5 bg-ink py-32">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-[1fr_1.4fr] md:px-10">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-champagne">Our story</div>
              <h2 className="mt-4 font-display text-4xl text-offwhite md:text-5xl">
                Founded on 20+ years of craft. Built in a fully automated plant.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="space-y-5 text-lg leading-relaxed text-offwhite/75">
              <p>
                At Nicwin Window &amp; Door Systems, we are committed to delivering
                high-quality uPVC and aluminium doors and windows that combine modern
                design, durability, and affordability.
              </p>
              <p>
                Founded by an industry professional with over 20 years of experience,
                Nicwin was established with a vision to bring premium-quality products
                to customers at reasonable prices — making modern window and door
                solutions accessible to everyone. Starting from the founder's native
                place, the company has grown with a strong focus on trust, quality,
                and customer satisfaction.
              </p>
              <p>
                Our fully automated manufacturing plant, spread across approximately
                15,000 square feet, is equipped with advanced technology to ensure
                precision, consistency, and superior product quality. We maintain the
                highest standards at every stage of production while continuously
                innovating to meet modern architectural and lifestyle needs. From this
                single plant in Jharkhand, we deliver to homes across India.
              </p>
              <p>
                At Nicwin, we focus not only on stylish and contemporary designs but
                also on strength, performance, and long-lasting reliability. With a
                commitment to continuous improvement and uncompromising quality, we
                create products that enhance both the beauty and functionality of
                every space.
              </p>
              <p className="italic text-champagne">
                "Always looking for the better." Not a tagline — the only rule on
                the workshop wall.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* VALUES CARDS */}
      <section className="py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--nicwin-red)]">
              What we hold ourselves to
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-5xl text-[color:var(--ink)] md:text-6xl">
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



      <FinalCTA
        headline="Come see the workshop."
        sub="Deoghar factory. Deoghar Experience Center & Showroom. And a WhatsApp always open."
        secondary={{ label: "Plan a visit", to: "/contact" }}
      />

    </>
  );
}

// Silence unused import in some builds
void Link;
