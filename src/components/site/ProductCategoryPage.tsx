import { motion } from "framer-motion";
import { useState } from "react";
import { CinematicScene } from "./CinematicScene";
import { CTAExternal, CTALink } from "./CTAButton";
import { Reveal, Stagger, item } from "./Reveal";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export type ProductType = {
  name: string;
  benefit: string; // unique per type
  detail: string; // unique per type
};

export type ProductBenefit = {
  label: string;
  value: number; // 0-100 meter
  copy: string;
};

export type ColorSwatch = {
  name: string;
  hex: string;
};

export function ProductCategoryPage({
  material,
  kicker,
  headline,
  intro,
  types,
  benefits,
  colors,
  colorHeading,
  variant,
  spec,
}: {
  material: "uPVC" | "Aluminium" | "Steel";
  kicker: string;
  headline: string;
  intro: string;
  types: ProductType[];
  benefits: ProductBenefit[];
  colors?: ColorSwatch[];
  colorHeading?: string;
  variant: "teal" | "night" | "gold" | "warm";
  spec: Array<{ k: string; v: string }>;
}) {
  const [selected, setSelected] = useState(0);
  const [color, setColor] = useState(colors?.[0]);

  return (
    <>
      <CinematicScene variant={variant} className="min-h-[75svh]">
        <div className="mx-auto flex min-h-[75svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 md:px-10">
          <Reveal>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-champagne">{kicker}</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="text-balance font-display text-6xl leading-[0.95] text-offwhite md:text-[7.5rem]">
              {headline}
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-offwhite/80">
              {intro}
            </p>
          </Reveal>
        </div>
      </CinematicScene>

      {/* TYPES */}
      <section className="border-y border-white/5 bg-ink py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">The range</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-5xl text-offwhite md:text-6xl">
              Every type has its own job.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.4fr]">
            {/* Type list */}
            <div className="space-y-1">
              {types.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setSelected(i)}
                  className={cn(
                    "group flex w-full items-center justify-between border-b border-white/8 py-6 text-left transition-colors",
                    selected === i ? "text-champagne" : "text-offwhite/75 hover:text-offwhite",
                  )}
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-offwhite/50">
                      0{i + 1}
                    </div>
                    <div className="mt-1 font-display text-3xl">{t.name}</div>
                  </div>
                  <span
                    className={cn(
                      "text-2xl transition-transform duration-500",
                      selected === i ? "translate-x-2" : "group-hover:translate-x-1",
                    )}
                  >
                    →
                  </span>
                </button>
              ))}
            </div>

            {/* Detail scene */}
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="sticky top-24 h-fit"
            >
              <CinematicScene variant={variant} parallax={false} className="aspect-[4/5] rounded-3xl">
                <div className="flex h-full flex-col justify-between p-8 md:p-10">
                  <div className="text-xs uppercase tracking-[0.3em] text-champagne">
                    {material} · {types[selected].name}
                  </div>
                  <div>
                    <div className="font-display text-4xl leading-tight text-offwhite md:text-5xl">
                      {types[selected].benefit}
                    </div>
                    <p className="mt-4 max-w-md text-offwhite/75">{types[selected].detail}</p>
                    <div className="mt-8">
                      <CTAExternal href={SITE.whatsappUrl}>
                        Ask about {types[selected].name}
                      </CTAExternal>
                    </div>
                  </div>
                </div>
              </CinematicScene>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS METERS */}
      <section className="py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">How it performs</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 max-w-3xl font-display text-5xl text-offwhite md:text-6xl">
              Numbers that mean a quieter home.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid gap-8 md:grid-cols-2">
            {benefits.map((b) => (
              <motion.div key={b.label} variants={item}>
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-2xl text-offwhite">{b.label}</div>
                  <div className="font-display text-2xl text-champagne">{b.value}<span className="text-sm text-offwhite/50"> / 100</span></div>
                </div>
                <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-to-r from-teal to-champagne"
                  />
                </div>
                <p className="mt-3 text-sm text-offwhite/60">{b.copy}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* COLORS */}
      {colors && (
        <section className="border-y border-white/5 bg-ink py-32">
          <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-[1fr_1.2fr] md:px-10">
            <Reveal>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-champagne">
                  {colorHeading ?? "Colours"}
                </div>
                <h2 className="mt-4 font-display text-5xl text-offwhite md:text-6xl">
                  Pick the finish. Watch it settle in.
                </h2>
                <p className="mt-6 max-w-md text-offwhite/70">
                  Every {material} profile is available in a curated palette designed for
                  Indian interiors — warm woods for traditional homes, deep neutrals for
                  contemporary lines.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setColor(c)}
                      className={cn(
                        "group flex items-center gap-3 rounded-2xl border p-3 text-left transition-all",
                        color?.name === c.name
                          ? "border-champagne bg-champagne/5"
                          : "border-white/8 hover:border-champagne/50",
                      )}
                    >
                      <span
                        className="h-9 w-9 flex-shrink-0 rounded-full ring-1 ring-white/20"
                        style={{ background: c.hex }}
                      />
                      <span className="text-xs uppercase tracking-wider text-offwhite/80">
                        {c.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <motion.div
                key={color?.name}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/8"
              >
                {/* Stylized frame mockup: layered rectangles tinted by color */}
                <div className="absolute inset-0 mesh-charcoal" />
                <div
                  className="absolute inset-6 rounded-xl transition-all duration-700"
                  style={{
                    background: color?.hex,
                    boxShadow:
                      "inset 0 0 0 8px rgba(0,0,0,0.15), inset 0 0 40px rgba(0,0,0,0.35), 0 30px 80px -20px rgba(0,0,0,0.5)",
                  }}
                />
                <div
                  className="absolute inset-16 rounded-md border transition-all duration-700"
                  style={{
                    borderColor: color?.hex,
                    background:
                      "linear-gradient(135deg, rgba(13,115,119,0.35), rgba(232,228,223,0.15), rgba(201,162,39,0.2))",
                    backdropFilter: "brightness(1.1)",
                  }}
                />
                <div className="absolute inset-0 grain" />
                <div className="absolute bottom-6 left-6 rounded-full bg-charcoal/70 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-offwhite/85 backdrop-blur">
                  {color?.name}
                </div>
              </motion.div>
            </Reveal>
          </div>
        </section>
      )}

      {/* SPEC */}
      <section className="py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">
              Technical confidence
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-5xl text-offwhite md:text-6xl">
              The details that let you stop worrying.
            </h2>
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/5 md:grid-cols-4">
            {spec.map((s) => (
              <motion.div key={s.k} variants={item} className="bg-ink p-6">
                <div className="font-display text-3xl text-champagne">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-offwhite/55">{s.v}</div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <CinematicScene variant="night" className="min-h-[50vh]">
        <div className="mx-auto flex min-h-[50vh] max-w-[1000px] flex-col items-center justify-center px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-5xl text-offwhite md:text-7xl">
              Ready to see {material.toLowerCase()} in your home?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <CTAExternal href={SITE.whatsappUrl}>Talk to us on WhatsApp</CTAExternal>
              <CTALink to="/contact" variant="ghost">
                Request a site visit
              </CTALink>
            </div>
          </Reveal>
        </div>
      </CinematicScene>
    </>
  );
}
