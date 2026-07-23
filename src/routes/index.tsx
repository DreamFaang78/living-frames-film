import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTAExternal, CTALink } from "@/components/site/CTAButton";
import { CountUp } from "@/components/site/CountUp";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { VideoHero } from "@/components/site/VideoHero";
import { Marquee } from "@/components/site/Marquee";
import { HeroJointSection } from "@/components/site/HeroJointSection";
import { ProductShowcase } from "@/components/site/ProductShowcase";
import { RecentProjects } from "@/components/site/RecentProjects";
import { ShowroomSection } from "@/components/site/ShowroomSection";
import { ManufacturingSection } from "@/components/site/ManufacturingSection";
import { ExperienceCenterSection } from "@/components/site/ExperienceCenterSection";

import { FounderSection } from "@/components/site/FounderSection";
import { SITE } from "@/lib/site";
import heroVideo from "@/assets/nicwin_hero_window.mp4.asset.json";
import upvcPushIn from "@/assets/nicwin_upvc_pushin.mp4.asset.json";
import matUpvc from "@/assets/material-upvc.jpeg.asset.json";
import matAluminium from "@/assets/material-aluminium.jpeg.asset.json";
import matSteel from "@/assets/material-steel.jpeg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nicwin — Always looking for the better." },
      {
        name: "description",
        content:
          "Strong uPVC, Aluminium and Steel windows and doors. Built for Indian weather. Made in Deoghar, Jharkhand. Delivered across India.",
      },
      { property: "og:title", content: "Nicwin — Always looking for the better." },
      { property: "og:description", content: SITE.description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { n: 5, suffix: "+", label: "Years in the business" },
  { n: 70, suffix: "+", label: "Homes fitted" },
  { n: 35, suffix: "+", label: "Families who came back" },
  { n: 20, suffix: "+", label: "People on our team" },
];

const universes = [
  {
    key: "upvc",
    kicker: "uPVC",
    title: "No leaks. No noise.",
    line: "Sealed frames with two rubber gaskets. Keeps rain out. Keeps street sound out. Lets the light in.",
    to: "/products/upvc",
    img: matUpvc.url,
    imgAlt: "White uPVC casement window on a modern villa at sunset with corner joint detail",
  },
  {
    key: "aluminium",
    kicker: "Aluminium",
    title: "Thin frames. Big view.",
    line: "Slim metal frames so you see more sky and less window. Handles heavy rain without a fuss.",
    to: "/products/aluminium",
    img: matAluminium.url,
    imgAlt: "Slim black aluminium sliding doors framing a poolside sunset view",
  },
  {
    key: "steel",
    kicker: "Steel",
    title: "Strong at the door.",
    line: "Multi-point locks and reinforced steel. Feels solid the moment you touch the handle.",
    to: "/products/steel",
    img: matSteel.url,
    imgAlt: "Matte black steel pivot entry door of a luxury home at dusk",
  },
];

const pillars = [
  {
    n: "01",
    title: "Built for Indian weather",
    body: "Frames that hold up in 45°C summers and heavy monsoons. Less heat comes in. Your AC works less. Your bill drops.",
  },
  {
    n: "02",
    title: "Keeps the noise out",
    body: "Two rubber gaskets and thick glass. Traffic, loudspeakers, temple bells — much quieter inside.",
  },
  {
    n: "03",
    title: "Safe and secure",
    body: "Multi-point locks. Reinforced steel inside the frame. Strong hardware. Your family sleeps easier.",
  },
  {
    n: "04",
    title: "Made to last",
    body: "Built in our own Deoghar factory. Machine-cut. Heat-welded. Still working the same way ten years on.",
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
    q: "The house is quieter than the road outside. My mother sleeps through Diwali now.",
    who: "Anirudh S.",
    city: "Deoghar",
  },
  {
    q: "First monsoon in twelve years with no wet windowsill. That's the whole review.",
    who: "Mrinal & Preeti",
    city: "Ranchi",
  },
  {
    q: "The sliding door moves so smoothly. Guests notice it before they notice the sofa.",
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
            Made in Deoghar · Delivered across India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-display leading-[0.95] text-white text-[clamp(2.5rem,9vw,6.25rem)] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]"
          >
            We don't cut corners
            <br />
            <span className="italic">on quality.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 1 }}
            className="mx-auto mt-8 max-w-xl text-pretty text-[15px] leading-relaxed text-white/95 md:max-w-2xl md:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]"
          >
            uPVC · Aluminium · Steel windows and doors. Built for Indian
            homes. Strong, quiet, and easy to live with.
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

      {/* 1b · SHOWROOM — trust anchor right after the hero */}
      <ShowroomSection />

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
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.15fr_1fr] md:gap-16 md:px-10">
          <div>
            <Reveal>
              <div className="eyebrow">The plain truth</div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,4.5vw,4.25rem)]">
                45°C Summers. Heavy Monsoons. Endless Dust. <span className="text-[color:var(--nicwin-red)]">NICWIN uPVC Windows Are Built For All Of It.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-8 max-w-xl text-pretty text-lg text-[color:var(--ink-soft)]">
                They warp. They swell. The paint peels in three years.
                You didn't buy a home so you could keep repairing windows.
                We make the ones you can forget about.
              </p>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <figure className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-black shadow-[0_30px_80px_-40px_rgba(10,10,11,0.4)] md:max-w-none">
              <video
                src={upvcPushIn.url}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-[4/5] w-full object-cover md:aspect-[3/4]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
                <span>NICWIN uPVC · Real footage</span>
                <span className="text-white/60">Built for India</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>


      {/* 5 · PRODUCT CATEGORIES */}
      <section className="relative bg-[color:var(--paper-warm)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal><div className="eyebrow">Three materials</div></Reveal>
              <Reveal delay={1}>
                <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,5vw,5rem)]">
                  Pick the one that fits your home.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <Link to="/products" className="story-link text-sm font-semibold text-[color:var(--nicwin-blue)]">
                See everything we make →
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
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--paper)] transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(14,59,115,0.25)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[color:var(--paper-2,#f3f3f1)]">
                    <img
                      src={u.img}
                      alt={u.imgAlt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--nicwin-blue)] backdrop-blur">
                      {u.kicker}
                    </span>
                    <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[color:var(--nicwin-red)] transition-transform duration-500 group-hover:scale-150" />
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <h3 className="text-balance font-display text-2xl leading-[1.15] text-[color:var(--ink)] md:text-[1.75rem]">
                      {u.title}
                    </h3>
                    <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--ink-soft)] md:mt-6">
                      {u.line}
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--nicwin-red)]">
                      Explore {u.kicker}
                      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
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
              Four things we get right, every job.
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

      {/* 6b · MEET THE FOUNDER */}
      <FounderSection variant="home" />

      {/* 7 · COLORS */}
      <section className="border-y border-[color:var(--line)] bg-[color:var(--paper-warm)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
            <div>
              <Reveal><div className="eyebrow">Colours</div></Reveal>
              <Reveal delay={1}>
                <h2 className="mt-4 text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.25rem,4vw,3.75rem)]">
                  A colour to match every home.
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 text-[color:var(--ink-soft)]">
                  Wood-look laminates. Powder-coated metal. Foil finishes.
                  Pick the wood you love. Or a clean modern look.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-8">
                  <CTALink to="/products/upvc/colors" variant="ink-ghost">See all colours</CTALink>
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

      {/* 7b · MANUFACTURING FACILITY */}
      <ManufacturingSection />

      {/* 7c · EXPERIENCE CENTER */}
      <ExperienceCenterSection />



      {/* 8 · TESTIMONIALS */}
      <section className="bg-[color:var(--paper)] py-24 md:py-32">

        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal><div className="eyebrow">What people say</div></Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,5vw,4.5rem)]">
              A quieter house is the best review.
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

      {/* 8b · RECENT PROJECTS SLIDESHOW */}
      <section className="border-t border-[color:var(--line)] bg-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal><div className="eyebrow">Recent projects</div></Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,5vw,4.5rem)]">
              Projects we're already a part of.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-2xl text-lg text-[color:var(--ink-soft)]">
              A look at the buildings, homes, and businesses Nicwin has already completed.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-12">
              <RecentProjects />
            </div>
          </Reveal>
        </div>
      </section>


      {/* 10 · CTA + contact anchor */}
      <section className="relative overflow-hidden bg-[color:var(--paper)] py-32 md:py-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <Reveal>
            <div className="eyebrow">Let's get started</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 max-w-3xl mx-auto text-balance font-display text-5xl leading-[0.98] text-[color:var(--ink)] md:text-[clamp(3rem,7vw,6.5rem)]">
              Your home deserves <span className="italic text-[color:var(--nicwin-red)]">better.</span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 mx-auto max-w-xl text-lg text-[color:var(--ink-soft)]">
              Send us a WhatsApp. We'll come measure your windows. A quieter home in a few weeks.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <CTAExternal href={SITE.whatsappUrl}>Chat on WhatsApp</CTAExternal>
              <CTALink to="/contact" variant="ink-ghost">Book a home visit</CTALink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
