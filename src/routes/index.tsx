import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CinematicScene } from "@/components/site/CinematicScene";
import { CTAExternal, CTALink } from "@/components/site/CTAButton";
import { CountUp } from "@/components/site/CountUp";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { VideoHero } from "@/components/site/VideoHero";
import { Marquee } from "@/components/site/Marquee";
import { SITE } from "@/lib/site";
import { Link } from "@tanstack/react-router";
import heroVideo from "@/assets/nicwin_hero_doors_opening.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nicwin — Always looking for the better." },
      {
        name: "description",
        content:
          "Premium uPVC, Aluminium and Steel windows and doors. Engineered for Indian monsoons. Designed for silence, light, and security.",
      },
      { property: "og:title", content: "Nicwin — Always looking for the better." },
      { property: "og:description", content: SITE.description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { n: 5, suffix: "+", label: "Years of focused practice" },
  { n: 70, suffix: "+", label: "Homes quietly elevated" },
  { n: 35, suffix: "+", label: "Families who came back" },
  { n: 20, suffix: "+", label: "Craftspeople in-house" },
];

const universes = [
  {
    key: "upvc",
    kicker: "uPVC",
    title: "Sealed. Silent. Sumptuous.",
    line: "Sound stays outside. Light walks in.",
    to: "/products/upvc",
    variant: "teal" as const,
  },
  {
    key: "aluminium",
    kicker: "Aluminium",
    title: "Thin frames. Widest views.",
    line: "Modern lines. Monsoon-ready. Almost invisible.",
    to: "/products/aluminium",
    variant: "night" as const,
  },
  {
    key: "steel",
    kicker: "Steel",
    title: "The first hello. The last word.",
    line: "Doors that feel solid the moment you touch them.",
    to: "/products/steel",
    variant: "gold" as const,
  },
];

const pillars = [
  {
    title: "Climate Mastery",
    body: "Multi-chamber profiles and thermal breaks tuned for 45°C summers and lashing monsoons. The heat you keep out is the AC bill you don't pay.",
  },
  {
    title: "Acoustic Sanctuary",
    body: "Twin gaskets, laminated glass, precise sash tolerances. Traffic, festival speakers, temple bells — softened to the edge of memory.",
  },
  {
    title: "Security Without Compromise",
    body: "Multi-point locking, steel-reinforced sections, forged hardware. Beautiful is only beautiful when it also feels safe.",
  },
  {
    title: "Craft That Lasts Generations",
    body: "In-house fabrication in Deoghar. German-inspired engineering. The door that greets your grandchild the way it greeted you.",
  },
];

const testimonials = [
  {
    q: "The house has become quieter than the road outside. My mother sleeps through Diwali now.",
    who: "Anirudh S.",
    city: "Deoghar",
  },
  {
    q: "First monsoon in twelve years with no wet windowsill. That is the whole review.",
    who: "Mrinal & Preeti",
    city: "Ranchi",
  },
  {
    q: "The sliding door glides like a piano key. Guests notice before they notice the sofa.",
    who: "Rakesh M.",
    city: "Jamui",
  },
];

function Home() {
  return (
    <>
      {/* HERO — cinematic video */}
      <VideoHero src={heroVideo.url}>
        <div className="mx-auto flex h-full w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-6 pb-32 pt-28 text-center md:px-10 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-offwhite/80 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--nicwin-red)] shadow-[0_0_12px_rgba(227,30,36,0.9)]" />
            Nicwin · Deoghar, Jharkhand
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-display text-[13vw] leading-[0.92] text-offwhite md:text-[8.6rem]"
          >
            Always looking
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.75, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="italic"
              style={{ color: "#C9A227" }}
            >
              for the better.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-pretty text-base text-offwhite/85 md:text-xl"
          >
            uPVC · Aluminium · Steel — engineered for Indian homes that demand
            light, silence, and strength.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35, duration: 0.9, type: "spring", stiffness: 90, damping: 18 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
          >
            <CTAExternal href={SITE.whatsappUrl}>Talk to us on WhatsApp</CTAExternal>
            <CTALink to="/products" variant="ghost">
              Explore the range
            </CTALink>
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1.2 }}
          className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.4em] text-offwhite/60"
        >
          <div className="mx-auto mb-3 h-10 w-px animate-pulse bg-champagne/70" />
          scroll
        </motion.div>
      </VideoHero>


      {/* STATS */}
      <section className="border-y border-white/5 bg-ink">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-white/5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink px-6 py-10 text-center md:py-16">
              <div className="font-display text-5xl text-champagne md:text-7xl">
                <CountUp to={s.n} />
                {s.suffix}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.22em] text-offwhite/55">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT UNIVERSE */}
      <section className="relative py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">Three universes</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl text-balance font-display text-5xl leading-tight text-offwhite md:text-7xl">
              One quiet obsession, three materials.
            </h2>
          </Reveal>
        </div>

        <Stagger className="mx-auto mt-16 grid max-w-[1440px] gap-6 px-6 md:grid-cols-3 md:px-10">
          {universes.map((u) => (
            <motion.div key={u.key} variants={item}>
              <Link to={u.to} className="group block">
                <CinematicScene
                  variant={u.variant}
                  className="aspect-[4/5] rounded-3xl transition-transform duration-700 group-hover:-translate-y-2"
                >
                  <div className="flex h-full flex-col justify-between p-8">
                    <div className="text-xs uppercase tracking-[0.3em] text-champagne">
                      {u.kicker}
                    </div>
                    <div>
                      <h3 className="text-balance font-display text-4xl text-offwhite md:text-5xl">
                        {u.title}
                      </h3>
                      <p className="mt-3 text-offwhite/70">{u.line}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm text-champagne">
                        Explore
                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </CinematicScene>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* WHY THE BETTER MATTERS */}
      <section className="relative overflow-hidden border-y border-white/5 bg-ink py-32">
        <div aria-hidden className="absolute inset-0 mesh-charcoal opacity-50" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">
              Why the better matters
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl text-balance font-display text-5xl text-offwhite md:text-7xl">
              Four quiet promises, kept every day.
            </h2>
          </Reveal>

          <Stagger className="mt-20 grid gap-6 md:grid-cols-2" stagger={0.12}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={item}
                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-charcoal/60 p-10"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 mesh-charcoal" />
                <div className="relative">
                  <div className="font-display text-6xl text-champagne/60">
                    0{i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-3xl text-offwhite">{p.title}</h3>
                  <p className="mt-3 max-w-lg text-offwhite/70">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">In their homes</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-5xl text-offwhite md:text-6xl">
              Quiet is the loudest review.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.figure
                key={t.who}
                variants={item}
                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-ink p-8"
              >
                <div className="font-display text-5xl leading-none text-champagne/60">"</div>
                <blockquote className="mt-4 text-pretty font-display text-2xl leading-snug text-offwhite">
                  {t.q}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-offwhite/55">
                  <span className="h-px w-8 bg-champagne" />
                  {t.who} · {t.city}
                </figcaption>
              </motion.figure>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <CinematicScene variant="gold" className="min-h-[70vh]">
        <div className="mx-auto flex min-h-[70vh] max-w-[1200px] flex-col items-center justify-center px-6 py-24 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.35em] text-charcoal/70">
              The next chapter
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 max-w-3xl text-balance font-display text-6xl leading-[1] text-charcoal md:text-8xl">
              Your home deserves better.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-charcoal/80">
              Two minutes on WhatsApp. A visit at your convenience. A quieter house within weeks.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <CTAExternal href={SITE.whatsappUrl} variant="teal">
                Start the conversation
              </CTAExternal>
              <CTALink to="/contact" variant="ghost" className="border-charcoal/40 text-charcoal hover:border-charcoal hover:text-charcoal">
                Book a visit
              </CTALink>
            </div>
          </Reveal>
        </div>
      </CinematicScene>
    </>
  );
}
