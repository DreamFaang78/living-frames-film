import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTAExternal, CTALink } from "@/components/site/CTAButton";
import { CountUp } from "@/components/site/CountUp";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { VideoHero } from "@/components/site/VideoHero";
import { Marquee } from "@/components/site/Marquee";
import { HeroJointSection } from "@/components/site/HeroJointSection";
import { ProductShowcase } from "@/components/site/ProductShowcase";
import { AutoCarousel, type CarouselSlide } from "@/components/site/AutoCarousel";
import { SITE } from "@/lib/site";
import heroVideo from "@/assets/nicwin_hero_window.mp4.asset.json";
import tiltTurn from "@/assets/products/tilt-turn.png.asset.json";
import luxuryInterior from "@/assets/products/luxury-interior.png.asset.json";
import french from "@/assets/products/french-doors.png.asset.json";
import slideFold from "@/assets/products/slide-fold.png.asset.json";
import casement from "@/assets/products/casement-door.jpg.asset.json";
import aluminium from "@/assets/products/aluminium-system.png.asset.json";

const HOME_SLIDES: CarouselSlide[] = [
  { src: luxuryInterior.url, alt: "Aluminium floor-to-ceiling window in a luxury living room", productType: "Aluminium Floor-to-Ceiling Window", place: "Private residence · Ranchi" },
  { src: tiltTurn.url, alt: "uPVC tilt & turn window", productType: "uPVC Tilt & Turn Window", place: "Courtyard house · Deoghar" },
  { src: french.url, alt: "uPVC French doors opening to a garden", productType: "uPVC French Doors", place: "Riverside villa · Bhagalpur" },
  { src: slideFold.url, alt: "uPVC slide-and-fold doors", productType: "uPVC Slide & Fold Doors", place: "Weekend retreat · Giridih" },
  { src: casement.url, alt: "uPVC casement door in warm interior light", productType: "uPVC Casement Door", place: "Family bungalow · Jamui" },
  { src: aluminium.url, alt: "Aluminium sliding system installation", productType: "Aluminium System Sliding Door", place: "Monsoon apartment · Deoghar" },
];

function HomeCarousel() {
  return <AutoCarousel slides={HOME_SLIDES} intervalMs={4500} />;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nicwin — Always looking for the better." },
      {
        name: "description",
        content:
          "Premium uPVC, Aluminium and Steel windows and doors. Engineered for Indian monsoons. Designed for silence, light and strength.",
      },
      { property: "og:title", content: "Nicwin — Always looking for the better." },
      { property: "og:description", content: SITE.description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { n: 5, suffix: "+", label: "Years focused practice" },
  { n: 70, suffix: "+", label: "Homes quietly elevated" },
  { n: 35, suffix: "+", label: "Repeat families" },
  { n: 20, suffix: "+", label: "In-house craftspeople" },
];

const universes = [
  {
    key: "upvc",
    kicker: "uPVC",
    title: "Sealed. Silent. Sumptuous.",
    line: "Multi-chamber profiles. Twin gaskets. Sound stays outside — light walks in.",
    to: "/products/upvc",
  },
  {
    key: "aluminium",
    kicker: "Aluminium",
    title: "Thin frames. Widest views.",
    line: "Slim sightlines and thermal breaks. Modern lines that hold up to lashing rain.",
    to: "/products/aluminium",
  },
  {
    key: "steel",
    kicker: "Steel",
    title: "The first hello. The last word.",
    line: "Multi-point locks, reinforced sections, forged hardware. Solid the moment you touch it.",
    to: "/products/steel",
  },
];

const pillars = [
  {
    n: "01",
    title: "Climate Mastery",
    body: "Multi-chamber profiles and thermal breaks tuned for 45°C summers and lashing monsoons. The heat you keep out is the AC bill you don't pay.",
  },
  {
    n: "02",
    title: "Acoustic Sanctuary",
    body: "Twin gaskets, laminated glass, precise sash tolerances. Traffic, festival speakers, temple bells — softened to the edge of memory.",
  },
  {
    n: "03",
    title: "Security Without Compromise",
    body: "Multi-point locking, steel-reinforced sections, forged hardware. Beautiful is only beautiful when it also feels safe.",
  },
  {
    n: "04",
    title: "Craft That Lasts Generations",
    body: "In-house fabrication in Deoghar. German-inspired engineering. The door that greets your grandchild the way it greeted you.",
  },
];

const swatches = [
  { label: "Pure White",       color: "#F6F6F3" },
  { label: "Anthracite Grey",  color: "#2A2C2F" },
  { label: "Golden Oak",       color: "#8B5A2B" },
  { label: "Walnut",           color: "#5A3A22" },
  { label: "Jet Black",        color: "#111214" },
  { label: "Diamond Grey",     color: "#8A8F94" },
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
      {/* 1 · HERO — attention + identity */}
      <VideoHero src={heroVideo.url}>
        {/* Readability scrim — sits between video overlays and content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.15)_75%,transparent_100%)]"
        />
        <div className="relative z-[2] mx-auto flex h-full w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-6 pb-28 pt-24 text-center md:px-10 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/35 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-white backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--nicwin-red)] shadow-[0_0_12px_rgba(227,30,36,0.9)]" />
            Nicwin · Deoghar, Jharkhand
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-display leading-[0.95] text-white text-[clamp(2.5rem,9vw,6.25rem)] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
          >
            We don't compromise
            <br />
            <span className="italic">with quality.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 1 }}
            className="mx-auto mt-8 max-w-xl text-pretty text-[15px] leading-relaxed text-white/95 md:max-w-2xl md:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]"
          >
            uPVC · Aluminium · Steel — engineered for Indian homes that demand
            light, silence and strength.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35, duration: 0.9, type: "spring", stiffness: 90, damping: 18 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
          >
            <CTAExternal href={SITE.whatsappUrl}>Talk to us on WhatsApp</CTAExternal>
            <CTALink to="/products" variant="ghost">Explore the range</CTALink>
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1.2 }}
          className="pointer-events-none absolute bottom-6 left-1/2 z-[2] -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.4em] text-white/80"
        >
          <div className="mx-auto mb-3 h-10 w-px animate-pulse bg-[color:var(--nicwin-red)]" />
          scroll
        </motion.div>
      </VideoHero>

      {/* 2 · MARQUEE — immediate credibility */}
      <Marquee />

      {/* 2b · WEBGPU CORNER JOINT — one interactive 3D moment */}
      <HeroJointSection />


      {/* 3 · STAT BAR — the ONE deep-blue anchor for the page */}
      <section className="relative overflow-hidden bg-[color:var(--nicwin-blue-deep)]">
        <div aria-hidden className="absolute inset-0 opacity-30 mesh-charcoal" />
        <div className="relative mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[color:var(--nicwin-blue-deep)] px-6 py-14 text-center md:py-20">
              <div className="font-display text-5xl text-white md:text-7xl">
                <CountUp to={s.n} />
                <span className="text-[color:var(--nicwin-red)]">{s.suffix}</span>
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/65">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 · PROBLEM STRIP — make them feel understood */}
      <section className="border-b border-[color:var(--line)] bg-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <div className="eyebrow">The honest bit</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 max-w-4xl text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,5vw,4.5rem)]">
              45°C summers. Lashing monsoons. Dust that gets into everything. <span className="text-[color:var(--nicwin-red)]">Wooden frames don't survive any of it.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl text-pretty text-lg text-[color:var(--ink-soft)]">
              Warped sashes. Swollen jambs. Paint peeling by year three.
              You didn't move house so a window could keep asking for attention.
              We build the ones that stop asking.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5 · PRODUCT CATEGORIES */}
      <section className="relative bg-[color:var(--paper-warm)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal><div className="eyebrow">Three universes</div></Reveal>
              <Reveal delay={1}>
                <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,5vw,5rem)]">
                  One obsession. Three materials.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <Link to="/products" className="story-link text-sm font-semibold text-[color:var(--nicwin-blue)]">
                See the full range →
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {universes.map((u) => (
              <motion.div
                key={u.key}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                <Link
                  to={u.to}
                  className="group block h-full overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--paper)] p-8 transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(14,59,115,0.25)]"
                >
                  <div className="flex h-full flex-col justify-between gap-16">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--nicwin-blue)]">
                        {u.kicker}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-[color:var(--nicwin-red)] transition-transform duration-500 group-hover:scale-150" />
                    </div>
                    <div>
                      <h3 className="text-balance font-display text-3xl text-[color:var(--ink)] md:text-4xl">
                        {u.title}
                      </h3>
                      <p className="mt-4 text-[color:var(--ink-soft)]">{u.line}</p>
                      <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--nicwin-red)]">
                        Explore {u.kicker}
                        <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 5b · PRODUCT SHOWCASE — real photos with details */}
      <ProductShowcase />



      {/* 6 · WHY CHOOSE US — four pillars */}
      <section className="relative bg-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal><div className="eyebrow">Why Nicwin</div></Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,5vw,5rem)]">
              Four quiet promises, kept every day.
            </h2>
          </Reveal>

          <Stagger className="mt-20 grid gap-px bg-[color:var(--line)] md:grid-cols-2" stagger={0.1}>
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={item}
                className="group relative overflow-hidden bg-[color:var(--paper)] p-10 md:p-14"
              >
                <div className="font-display text-6xl text-[color:var(--nicwin-red)]/30 transition-colors duration-500 group-hover:text-[color:var(--nicwin-red)]">
                  {p.n}
                </div>
                <h3 className="mt-6 font-display text-2xl text-[color:var(--ink)] md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-lg text-[color:var(--ink-soft)]">{p.body}</p>
                <div className="mt-8 h-px w-12 bg-[color:var(--nicwin-blue)] transition-all duration-500 group-hover:w-24" />
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 7 · COLORS */}
      <section className="border-y border-[color:var(--line)] bg-[color:var(--paper-warm)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div>
              <Reveal><div className="eyebrow">Finishes</div></Reveal>
              <Reveal delay={1}>
                <h2 className="mt-4 text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.25rem,4vw,3.75rem)]">
                  A colour for every home. A finish for every mood.
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 text-[color:var(--ink-soft)]">
                  Wood laminates, powder coats, foil finishes. Match the timber
                  you loved. Or the future you're building.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-8">
                  <CTALink to="/products/upvc/colors" variant="ink-ghost">See all finishes</CTALink>
                </div>
              </Reveal>
            </div>
            <Stagger className="grid grid-cols-3 gap-4 sm:grid-cols-6 md:grid-cols-3 md:gap-6">
              {swatches.map((s) => (
                <motion.div
                  key={s.label}
                  variants={item}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group cursor-pointer"
                >
                  <div
                    className="aspect-square w-full rounded-2xl border border-[color:var(--line)] shadow-[0_10px_30px_-15px_rgba(14,59,115,0.35)] transition-shadow duration-500 group-hover:shadow-[0_20px_50px_-15px_rgba(14,59,115,0.45)]"
                    style={{ backgroundColor: s.color }}
                  />
                  <div className="mt-3 text-xs font-medium tracking-wide text-[color:var(--ink-soft)]">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* 8 · TESTIMONIALS */}
      <section className="bg-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal><div className="eyebrow">In their homes</div></Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,5vw,4.5rem)]">
              Quiet is the loudest review.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.figure
                key={t.who}
                variants={item}
                className="group relative overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--paper-warm)] p-8 transition-shadow duration-500 hover:shadow-[0_24px_60px_-24px_rgba(14,59,115,0.25)]"
              >
                <div className="font-display text-5xl leading-none text-[color:var(--nicwin-red)]">"</div>
                <blockquote className="mt-4 text-pretty font-display text-xl leading-snug text-[color:var(--ink)] md:text-2xl">
                  {t.q}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                  <span className="h-px w-8 bg-[color:var(--nicwin-red)]" />
                  {t.who} · {t.city}
                </figcaption>
              </motion.figure>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 9 · GALLERY TEASER + AUTO CAROUSEL */}
      <section className="border-t border-[color:var(--line)] bg-[color:var(--paper-warm)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Reveal><div className="eyebrow">Recently delivered</div></Reveal>
              <Reveal delay={1}>
                <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.25rem,4.5vw,4rem)]">
                  Homes across India. Made one frame at a time.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <CTALink to="/gallery" variant="ink-ghost">Browse the gallery</CTALink>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <div className="mt-12 overflow-hidden rounded-2xl bg-[color:var(--paper)] shadow-[0_30px_80px_-30px_rgba(14,59,115,0.35)] ring-1 ring-[color:var(--line)]">
              <HomeCarousel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10 · CTA + contact anchor */}
      <section className="relative overflow-hidden bg-[color:var(--paper)] py-32 md:py-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <Reveal>
            <div className="eyebrow">The next chapter</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 max-w-3xl mx-auto text-balance font-display text-5xl leading-[0.98] text-[color:var(--ink)] md:text-[clamp(3rem,7vw,6.5rem)]">
              Your home deserves <span className="italic text-[color:var(--nicwin-red)]">better.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 mx-auto max-w-xl text-lg text-[color:var(--ink-soft)]">
              Two minutes on WhatsApp. A visit at your convenience. A quieter house within weeks.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <CTAExternal href={SITE.whatsappUrl}>Start the conversation</CTAExternal>
              <CTALink to="/contact" variant="ink-ghost">Book a site visit</CTALink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
