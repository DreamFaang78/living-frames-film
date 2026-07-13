import { createFileRoute } from "@tanstack/react-router";
import { CinematicScene } from "@/components/site/CinematicScene";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Nicwin projects across India" },
      {
        name: "description",
        content:
          "A living gallery of Nicwin uPVC, Aluminium and Steel installations. Filter by material, product or geography.",
      },
      { property: "og:title", content: "Nicwin Gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

type Tag = "All" | "Windows" | "Doors" | "uPVC" | "Aluminium" | "Steel";

const projects: Array<{
  title: string;
  place: string;
  tags: Tag[];
  variant: "night" | "teal" | "gold" | "warm";
  span?: string;
}> = [
  { title: "Courtyard house", place: "Ranchi", tags: ["uPVC", "Windows"], variant: "teal", span: "md:col-span-2 md:row-span-2" },
  { title: "Monsoon apartment", place: "Deoghar", tags: ["Aluminium", "Doors"], variant: "night" },
  { title: "Family bungalow", place: "Jamui", tags: ["Steel", "Doors"], variant: "gold" },
  { title: "Weekend retreat", place: "Giridih", tags: ["uPVC", "Doors"], variant: "warm" },
  { title: "City penthouse", place: "Dhanbad", tags: ["Aluminium", "Windows"], variant: "night", span: "md:col-span-2" },
  { title: "Heritage restoration", place: "Deoghar", tags: ["Steel", "Windows"], variant: "gold" },
  { title: "Riverside villa", place: "Bhagalpur", tags: ["Aluminium", "Doors"], variant: "teal" },
  { title: "Studio annex", place: "Deoghar", tags: ["uPVC", "Windows"], variant: "night" },
];

const FILTERS: Tag[] = ["All", "Windows", "Doors", "uPVC", "Aluminium", "Steel"];

function Gallery() {
  const [tag, setTag] = useState<Tag>("All");
  const list = useMemo(
    () => (tag === "All" ? projects : projects.filter((p) => p.tags.includes(tag))),
    [tag],
  );

  return (
    <>
      <CinematicScene variant="night" className="min-h-[55svh]">
        <div className="mx-auto flex min-h-[55svh] max-w-[1440px] flex-col justify-end px-6 pb-16 pt-32 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">Gallery</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-3 font-display text-6xl text-offwhite md:text-8xl">
              Homes we've quieted.
            </h1>
          </Reveal>
        </div>
      </CinematicScene>

      <section className="border-y border-white/5 bg-ink py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="mb-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setTag(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-all",
                  tag === f
                    ? "border-champagne bg-champagne text-charcoal"
                    : "border-white/10 text-offwhite/70 hover:border-champagne/50 hover:text-champagne",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <Stagger
            className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[240px]"
            stagger={0.05}
          >
            {list.map((p) => (
              <motion.div
                key={p.title + p.place}
                layout
                variants={item}
                className={cn("group relative overflow-hidden rounded-2xl", p.span)}
              >
                <CinematicScene variant={p.variant} parallax={false} className="h-full w-full">
                  <div className="flex h-full flex-col justify-end p-6 transition-transform duration-700 group-hover:-translate-y-1">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">
                      {p.tags.join(" · ")}
                    </div>
                    <h3 className="mt-2 font-display text-2xl text-offwhite">{p.title}</h3>
                    <div className="text-sm text-offwhite/60">{p.place}</div>
                  </div>
                </CinematicScene>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
