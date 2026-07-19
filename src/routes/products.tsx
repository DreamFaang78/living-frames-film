import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { CinematicScene } from "@/components/site/CinematicScene";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Reveal, Stagger, item } from "@/components/site/Reveal";

import { motion } from "framer-motion";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — uPVC, Aluminium and Steel by Nicwin" },
      {
        name: "description",
        content:
          "Explore the Nicwin range. Three materials. One quiet obsession with light, silence, and strength.",
      },
      { property: "og:title", content: "Nicwin Products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsLanding,
});

const universes = [
  {
    to: "/products/upvc",
    kicker: "uPVC",
    title: "No leaks. No noise.",
    line: "6 window types. 5 door types. 7 colours.",
    variant: "cool-light" as const,
    tone: "light" as const,
  },
  {
    to: "/products/aluminium",
    kicker: "Aluminium",
    title: "Thin frames. Big view.",
    line: "5 windows. 5 doors. 5 colours.",
    variant: "night" as const,
    tone: "dark" as const,
  },
  {
    to: "/products/steel",
    kicker: "Steel",
    title: "Strong at the door.",
    line: "From strong security doors to designer panels.",
    variant: "warm-light" as const,
    tone: "light" as const,
  },
];

function ProductsLanding() {
  const matches = useMatches();
  // If a child route is active, just render outlet
  const isChild = matches.some((m) => m.routeId.startsWith("/products/"));
  if (isChild) return <Outlet />;

  return (
    <>
      <CinematicScene variant="night" className="min-h-[65svh]">
        <div className="mx-auto flex min-h-[65svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">Our range</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 text-balance font-display text-6xl leading-[0.95] text-offwhite md:text-[8rem]">
              Three materials.
              <br />
              <span className="italic text-champagne">One promise.</span>
            </h1>
          </Reveal>
        </div>
      </CinematicScene>

      <section className="py-24">
        <Stagger className="mx-auto grid max-w-[1440px] gap-6 px-6 md:grid-cols-3 md:px-10">
          {universes.map((u) => {
            const isLight = u.tone === "light";
            const headline = isLight ? "text-[color:var(--ink)]" : "text-offwhite";
            const body = isLight ? "text-[color:var(--ink-soft)]" : "text-offwhite/70";
            const cta = isLight
              ? "text-[color:var(--nicwin-blue-deep)]"
              : "text-champagne";
            const kicker = isLight
              ? "text-[color:var(--nicwin-red)]"
              : "text-champagne";
            const border = isLight
              ? "ring-1 ring-[color:var(--line)]"
              : "";
            return (
              <motion.div key={u.to} variants={item}>
                <Link to={u.to} className="group block">
                  <CinematicScene
                    variant={u.variant}
                    className={`aspect-[4/5] rounded-3xl transition-transform duration-700 group-hover:-translate-y-2 ${border}`}
                  >
                    <div className="flex h-full flex-col justify-between p-8">
                      <div className={`text-xs uppercase tracking-[0.3em] ${kicker}`}>{u.kicker}</div>
                      <div>
                        <h3 className={`font-display text-4xl md:text-5xl ${headline}`}>{u.title}</h3>
                        <p className={`mt-3 ${body}`}>{u.line}</p>
                        <div className={`mt-6 inline-flex items-center gap-2 text-sm ${cta}`}>
                          Explore <span className="transition-transform group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  </CinematicScene>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </section>


      <FinalCTA
        eyebrow="Not sure where to start?"
        headline="Tell us the room. We'll suggest the right window."
        secondary={{ label: "Get a price", to: "/contact" }}
      />

    </>
  );
}
