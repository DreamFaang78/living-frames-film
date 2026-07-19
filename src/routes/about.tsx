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
    body: "Make Indian homes quieter, safer, and more beautiful — with windows and doors people can actually afford.",
  },
  {
    title: "Vision",
    body: "Be the first name Indian architects and homeowners think of when they want windows that do the job right.",
  },
  {
    title: "Values",
    body: "Do the work properly. Say what we mean. Look after the customer for years, not just till the sale.",
  },
  {
    title: "How we think",
    body: "The best window is the one you forget about — because it keeps out the heat, dust, and noise on its own.",
  },
];

const pillars = [
  {
    title: "Customer first",
    body: "We start with a chat, not a price list. We ask about your home before we talk about frames.",
  },
  {
    title: "Better for the planet",
    body: "Lead-free uPVC. Recyclable aluminium. Real energy savings — we can prove them.",
  },
  {
    title: "Quality checks",
    body: "We check every profile, every weld, every seal. If it doesn't pass here, it doesn't reach your home.",
  },
  {
    title: "Made by hand",
    body: "Built in our Deoghar factory. Twenty people who check every unit before it leaves.",
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
              We make the windows
              <br />
              <span className="italic text-[var(--nicwin-blue-deep)]">your home deserves.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl text-lg text-[var(--ink-soft)]">
              Strong uPVC and aluminium windows and doors — modern, long-lasting,
              and reasonably priced. Made in our 15,000 sq ft factory in Deoghar,
              Jharkhand. Delivered to homes across India.
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
                Started with 20+ years in the industry. Built in our own modern factory.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="space-y-5 text-lg leading-relaxed text-offwhite/75">
              <p>
                At Nicwin, we make strong uPVC and aluminium windows and doors
                that look modern, last long, and don't cost the earth.
              </p>
              <p>
                Our founder spent over 20 years in this industry before starting
                Nicwin. The idea was simple: give customers premium quality at a
                fair price, so good windows aren't just for expensive homes.
                We started from the founder's hometown and grew by keeping our
                promise on quality and after-sales.
              </p>
              <p>
                Our factory in Deoghar is about 15,000 square feet and fully
                automated. Machines do the cutting and welding — that means
                every frame is straight, every corner is strong, and quality is
                the same every single time. From this one factory, we deliver
                across India.
              </p>
              <p>
                We care about how the window looks, but also about how it holds
                up in ten years. That's why we keep testing, keep improving,
                and don't ship anything we wouldn't put in our own home.
              </p>
              <p className="italic text-champagne">
                "Always looking for the better." The only rule on the workshop wall.
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
              What we stand for
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-5xl text-[color:var(--ink)] md:text-6xl">
              Four simple things we take seriously.
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
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">How we work</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-5xl text-offwhite md:text-6xl">
              How we actually get the job done.
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
              Come and see us
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-offwhite md:text-5xl">
              Our factory and showroom in Deoghar.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                label: "Factory — Deoghar",
                body: "Nayachitkat, Rikhiya Dumma Border Road. See the frames being made and checked.",
              },
              {
                label: "Experience Center & Showroom — Deoghar",
                body: "Sparsh Complex, Deoghar College Road, Tiwari Chowk. Touch and open real windows and doors.",
              },
            ].map((slot) => (
              <div
                key={slot.label}
                className="relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl border border-dashed border-white/25 bg-charcoal/60 p-8"
              >
                <div className="absolute left-4 top-4 rounded-full border border-champagne/40 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-champagne">
                  Photos coming soon
                </div>
                <div className="font-display text-2xl text-offwhite">{slot.label}</div>
                <p className="mt-2 max-w-md text-sm text-offwhite/60">{slot.body}</p>
                <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-offwhite/40">
                  Real photos and a video tour will go here.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <FinalCTA
        headline="Come and see for yourself."
        sub="Factory and showroom in Deoghar. Or just message us on WhatsApp."
        secondary={{ label: "Plan a visit", to: "/contact" }}
      />

    </>
  );
}

// Silence unused import in some builds
void Link;
