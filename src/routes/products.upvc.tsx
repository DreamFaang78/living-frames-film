import { createFileRoute, Link } from "@tanstack/react-router";
import { CinematicScene } from "@/components/site/CinematicScene";
import { CTAExternal, CTALink } from "@/components/site/CTAButton";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { motion } from "framer-motion";
import upvcWindowsCard from "@/assets/products/upvc-windows-card.png.asset.json";
import upvcDoorsCard from "@/assets/products/upvc-doors-card.png.asset.json";

export const Route = createFileRoute("/products/upvc")({
  head: () => ({
    meta: [
      { title: "uPVC Windows & Doors — Nicwin" },
      {
        name: "description",
        content:
          "Lead-free multi-chamber uPVC systems tuned for Indian climate. Windows, doors, and seven curated finishes.",
      },
      { property: "og:title", content: "Nicwin uPVC" },
    ],
    links: [{ rel: "canonical", href: "/products/upvc" }],
  }),
  component: UpvcLanding,
});

type CardLink = {
  to: "/products/upvc/windows" | "/products/upvc/doors" | "/products/upvc/colors";
  label: string;
  count: string;
  image?: { url: string };
  alt?: string;
};

const links: CardLink[] = [
  {
    to: "/products/upvc/windows",
    label: "Windows",
    count: "6 types",
    image: upvcWindowsCard,
    alt: "Premium uPVC window displayed in the NICWIN Experience Center.",
  },
  {
    to: "/products/upvc/doors",
    label: "Doors",
    count: "5 types",
    image: upvcDoorsCard,
    alt: "Premium uPVC door displayed in the NICWIN Experience Center.",
  },
  { to: "/products/upvc/colors", label: "Colours", count: "7 finishes" },
];

function UpvcLanding() {
  return (
    <>
      <CinematicScene variant="teal" className="min-h-[70svh]">
        <div className="mx-auto flex min-h-[70svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">uPVC</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 text-balance font-display text-6xl leading-[0.95] text-offwhite md:text-[7.5rem]">
              No leaks.
              <br />
              <span className="italic text-champagne">No noise.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl text-lg text-offwhite/80">
              Lead-free uPVC frames made for 45°C summers and heavy monsoons.
              Two rubber seals, insulating chambers, and colours that suit
              Indian homes.
            </p>
          </Reveal>
        </div>
      </CinematicScene>

      <section className="py-24">
        <Stagger className="mx-auto grid max-w-[1200px] gap-6 px-6 md:grid-cols-3 md:px-10">
          {links.map((l) => (
            <motion.div key={l.to} variants={item}>
              <Link to={l.to} aria-label={`${l.label} — explore`} className="group block">
                {l.image ? (
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-2">
                    <img
                      src={l.image.url}
                      alt={l.alt ?? l.label}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={1000}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />
                    <div className="relative flex h-full flex-col justify-between p-8">
                      <div className="text-xs uppercase tracking-[0.3em] text-champagne">
                        {l.count}
                      </div>
                      <div>
                        <div className="font-display text-5xl text-offwhite drop-shadow">{l.label}</div>
                        <div className="mt-4 text-sm text-champagne">Explore →</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <CinematicScene variant="teal" parallax={false} className="aspect-[4/5] rounded-3xl transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex h-full flex-col justify-between p-8">
                      <div className="text-xs uppercase tracking-[0.3em] text-champagne">
                        {l.count}
                      </div>
                      <div>
                        <div className="font-display text-5xl text-offwhite">{l.label}</div>
                        <div className="mt-4 text-sm text-champagne">Explore →</div>
                      </div>
                    </div>
                  </CinematicScene>
                )}
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="py-16 text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-6">
          <CTAExternal href={SITE.whatsappUrl}>Chat on WhatsApp</CTAExternal>
          <CTALink to="/contact" variant="ghost">Ask for the catalogue</CTALink>
        </div>
      </section>
    </>
  );
}
