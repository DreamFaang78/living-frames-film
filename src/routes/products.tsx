import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { CinematicScene } from "@/components/site/CinematicScene";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { motion } from "framer-motion";

import upvcImg from "@/assets/material-upvc.jpeg.asset.json";
import aluImg from "@/assets/material-aluminium.jpeg.asset.json";
import steelImg from "@/assets/material-steel.jpeg.asset.json";
import wpcImg from "@/assets/products/wpc-doors.jpg.asset.json";
import meshImg from "@/assets/products/pleated-mesh.jpg.asset.json";
import gpartImg from "@/assets/products/glass-partition.jpg.asset.json";
import grailImg from "@/assets/products/glass-railing.jpg.asset.json";
import acpImg from "@/assets/products/acp-sheet.jpg.asset.json";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Windows, Doors, Mesh, Glass & Facade by Nicwin" },
      {
        name: "description",
        content:
          "Explore the full Nicwin range: uPVC, Aluminium and Steel windows & doors, WPC doors, pleated mesh, glass partitions and railings, and ACP facade sheets.",
      },
      { property: "og:title", content: "Nicwin Products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsLanding,
});

type FullCard = {
  kind: "full";
  to: string;
  hash?: string;
  kicker: string;
  title: string;
  body: string;
  specs: string[];
  img: string;
};
type LightCard = {
  kind: "light";
  to: string;
  hash?: string;
  kicker: string;
  title: string;
  body: string;
  img: string;
};
type Card = FullCard | LightCard;

type Group = { id: string; kicker: string; title: string; line: string; cards: Card[] };

const GROUPS: Group[] = [
  {
    id: "windows-doors",
    kicker: "01 — Windows & Doors",
    title: "Frames built for Indian weather.",
    line: "Three materials, one obsession. Plus solid WPC doors for wet rooms.",
    cards: [
      {
        kind: "full",
        to: "/products/upvc",
        kicker: "uPVC",
        title: "uPVC Windows & Doors",
        body: "No leaks. No noise. No warping. Built for 45°C summers and heavy monsoons.",
        specs: [
          "Multi-chambered frames with steel reinforcement",
          "Double-seal weather protection",
          "6 window types · 5 door types · 7 colours",
        ],
        img: upvcImg.url,
      },
      {
        kind: "full",
        to: "/products/aluminium",
        kicker: "Aluminium",
        title: "Aluminium Windows & Doors",
        body: "Thin frames. Bigger views. Slim, strong profiles for modern homes.",
        specs: [
          "Thermally broken profiles",
          "Handles very large panels with ease",
          "5 windows · 5 doors · 5 colours",
        ],
        img: aluImg.url,
      },
      {
        kind: "full",
        to: "/products/steel",
        kicker: "Steel",
        title: "Steel Doors",
        body: "Strong at the door. Strong for years. Solid security without the bulk.",
        specs: [
          "Galvanised steel core, powder-coated finish",
          "Reinforced multi-point locking",
          "Security, designer panel and glass insert styles",
        ],
        img: steelImg.url,
      },
      {
        kind: "light",
        to: "/products",
        hash: "wpc-doors",
        kicker: "WPC",
        title: "WPC Doors",
        body:
          "Water-proof and termite-proof. Looks like wood without the trouble — perfect for bathrooms and utility rooms.",
        img: wpcImg.url,
      },
    ],
  },
  {
    id: "mesh-screens",
    kicker: "02 — Mesh & Screens",
    title: "Keep mosquitoes out. Keep the view in.",
    line: "Retractable screens that disappear when you don't need them.",
    cards: [
      {
        kind: "light",
        to: "/products",
        hash: "pleated-mesh",
        kicker: "Pleated Mesh",
        title: "Pleated Mesh Screens",
        body:
          "Fine mesh keeps insects and dust out. Folds flat to the side when you want the full window open.",
        img: meshImg.url,
      },
    ],
  },
  {
    id: "glass-solutions",
    kicker: "03 — Glass Solutions",
    title: "Light through. Nothing in the way.",
    line: "Clean glass systems for partitions and railings.",
    cards: [
      {
        kind: "light",
        to: "/products",
        hash: "glass-partition",
        kicker: "Glass Partition",
        title: "Glass Partitions",
        body:
          "Split a room without losing the light. Slim profiles, toughened glass, clean finish.",
        img: gpartImg.url,
      },
      {
        kind: "light",
        to: "/products",
        hash: "glass-railing",
        kicker: "Glass Railing",
        title: "Glass Railings",
        body:
          "See-through safety for balconies, stairs and terraces. Toughened glass with stainless steel fittings.",
        img: grailImg.url,
      },
    ],
  },
  {
    id: "facade-cladding",
    kicker: "04 — Facade & Cladding",
    title: "A cleaner face for the building.",
    line: "Modern facades that hold up in Indian weather.",
    cards: [
      {
        kind: "light",
        to: "/products",
        hash: "acp-sheet",
        kicker: "ACP",
        title: "ACP Sheets",
        body:
          "Aluminium Composite Panels for clean, modern building fronts. Weather-tough and easy to maintain.",
        img: acpImg.url,
      },
    ],
  },
];

function ProductsLanding() {
  const matches = useMatches();
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
              Eight products.
              <br />
              <span className="italic text-champagne">One standard.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-offwhite/75">
              Windows and doors, mesh, glass and facade — all made in Deoghar, Jharkhand and delivered across India.
            </p>
          </Reveal>
        </div>
      </CinematicScene>

      {GROUPS.map((g) => (
        <section key={g.id} id={g.id} className="scroll-mt-32 border-t border-[color:var(--line)] py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--nicwin-red)]">
                {g.kicker}
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-6xl">
                {g.title}
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-4 max-w-2xl text-[color:var(--ink-soft)]">{g.line}</p>
            </Reveal>

            <Stagger
              className={`mt-12 grid gap-6 ${
                g.cards.length === 1
                  ? "md:grid-cols-1 md:max-w-2xl"
                  : g.cards.length === 2
                    ? "md:grid-cols-2"
                    : g.cards.length === 3
                      ? "md:grid-cols-3"
                      : "md:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {g.cards.map((c) => (
                <motion.article
                  key={c.title}
                  variants={item}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-[color:var(--line)] bg-white transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(20,22,26,0.18)]"
                >
                  <Link
                    to={c.to}
                    hash={c.hash ?? undefined}
                    className="flex h-full flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={c.img}
                        alt={c.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--nicwin-red)]">
                        {c.kicker}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <h3 className="font-display text-2xl leading-tight text-[color:var(--ink)] md:text-[1.75rem]">
                        {c.title}
                      </h3>
                      <p className="mt-4 text-[color:var(--ink-soft)]">{c.body}</p>

                      {c.kind === "full" && (
                        <ul className="mt-5 space-y-2 text-sm text-[color:var(--ink-soft)]">
                          {c.specs.map((s) => (
                            <li key={s} className="flex gap-2">
                              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[color:var(--nicwin-red)]" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-[color:var(--nicwin-blue-deep)]">
                        {c.kind === "full" ? "Explore range" : "Enquire"}
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </Stagger>
          </div>
        </section>
      ))}

      <FinalCTA
        eyebrow="Not sure where to start?"
        headline="Tell us the room. We'll suggest the right fit."
        secondary={{ label: "Get a price", to: "/contact" }}
      />
    </>
  );
}
