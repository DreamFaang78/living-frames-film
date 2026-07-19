import { createFileRoute } from "@tanstack/react-router";
import { CinematicScene } from "@/components/site/CinematicScene";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { AutoCarousel, type CarouselSlide } from "@/components/site/AutoCarousel";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

import aluminium from "@/assets/products/aluminium-system.png.asset.json";
import french from "@/assets/products/french-doors.png.asset.json";
import slideFold from "@/assets/products/slide-fold.png.asset.json";
import casement from "@/assets/products/casement-door.jpg.asset.json";
import upvcEco from "@/assets/products/upvc-eco.png.asset.json";
import upvcSecure from "@/assets/products/upvc-secure.png.asset.json";
import tiltTurn from "@/assets/products/tilt-turn.png.asset.json";
import luxuryInterior from "@/assets/products/luxury-interior.png.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Nicwin projects across India" },
      {
        name: "description",
        content:
          "Real Nicwin installations in homes across India — labelled by product type, material and location.",
      },
      { property: "og:title", content: "Nicwin Gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

type Tag = "All" | "Windows" | "Doors" | "uPVC" | "Aluminium" | "Steel";

type Project = {
  title: string;
  place: string;
  productType: string;
  tags: Tag[];
  img: { url: string };
};

const projects: Project[] = [
  {
    title: "Courtyard house",
    place: "Ranchi, Jharkhand",
    productType: "Tilt & Turn uPVC Window",
    tags: ["uPVC", "Windows"],
    img: tiltTurn,
  },
  {
    title: "Monsoon apartment",
    place: "Deoghar, Jharkhand",
    productType: "Aluminium System Sliding Door",
    tags: ["Aluminium", "Doors"],
    img: aluminium,
  },
  {
    title: "Family bungalow",
    place: "Jamui, Bihar",
    productType: "uPVC Casement Door",
    tags: ["uPVC", "Doors"],
    img: casement,
  },
  {
    title: "Weekend retreat",
    place: "Giridih, Jharkhand",
    productType: "uPVC Slide & Fold Doors",
    tags: ["uPVC", "Doors"],
    img: slideFold,
  },
  {
    title: "City penthouse",
    place: "Dhanbad, Jharkhand",
    productType: "Aluminium Floor-to-Ceiling Window",
    tags: ["Aluminium", "Windows"],
    img: luxuryInterior,
  },
  {
    title: "Riverside villa",
    place: "Bhagalpur, Bihar",
    productType: "French uPVC Doors",
    tags: ["uPVC", "Doors"],
    img: french,
  },
  {
    title: "Studio annex",
    place: "Deoghar, Jharkhand",
    productType: "uPVC Fixed Picture Window",
    tags: ["uPVC", "Windows"],
    img: upvcSecure,
  },
  {
    title: "Garden pavilion",
    place: "Deoghar, Jharkhand",
    productType: "uPVC Bay Casement Window",
    tags: ["uPVC", "Windows"],
    img: upvcEco,
  },
];

const FILTERS: Tag[] = ["All", "Windows", "Doors", "uPVC", "Aluminium", "Steel"];

function Gallery() {
  const [tag, setTag] = useState<Tag>("All");
  const list = useMemo(
    () => (tag === "All" ? projects : projects.filter((p) => p.tags.includes(tag))),
    [tag],
  );

  const slides: CarouselSlide[] = projects.slice(0, 6).map((p) => ({
    src: p.img.url,
    alt: `${p.productType} installed at ${p.place}`,
    productType: p.productType,
    place: p.place,
  }));

  return (
    <>
      <CinematicScene variant="night" className="min-h-[55svh]">
        <div className="mx-auto flex min-h-[55svh] max-w-[1440px] flex-col justify-end px-6 pb-16 pt-32 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">Gallery</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-3 font-display text-6xl text-offwhite md:text-8xl">
              Homes we've made quieter.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-xl text-offwhite/75">
              Every photo shows the exact product, material, and place — so you
              can see what you'll actually get.
            </p>
          </Reveal>
        </div>
      </CinematicScene>

      {/* Auto-advancing showcase */}
      <section className="bg-[color:var(--paper)] py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--nicwin-red)]">
              Recent work
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 mb-10 font-display text-3xl text-[color:var(--ink)] md:text-4xl">
              A slideshow of recent installations.
            </h2>
          </Reveal>
          <AutoCarousel slides={slides} />
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-[color:var(--paper-warm)] py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="mb-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setTag(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all",
                  tag === f
                    ? "border-[color:var(--nicwin-red)] bg-[color:var(--nicwin-red)] text-white"
                    : "border-[color:var(--line)] text-[color:var(--ink-soft)] hover:border-[color:var(--nicwin-red)]/50 hover:text-[color:var(--nicwin-red)]",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <Stagger
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.05}
          >
            {list.map((p) => (
              <motion.article
                layout
                key={p.title + p.place}
                variants={item}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] shadow-[0_10px_30px_-20px_rgba(14,59,115,0.25)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-30px_rgba(14,59,115,0.35)]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[color:var(--paper-warm)]">
                  <img
                    src={p.img.url}
                    alt={`${p.productType} installed at ${p.place}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-[color:var(--line)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--nicwin-blue)]">
                      {p.tags[0]}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
                      {p.tags.slice(1).join(" · ")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl text-[color:var(--ink)]">
                    {p.productType}
                  </h3>
                  <div className="mt-1 text-sm text-[color:var(--ink-soft)]">
                    {p.title} — {p.place}
                  </div>
                </div>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
