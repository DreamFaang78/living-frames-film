import { createFileRoute, Link } from "@tanstack/react-router";
import { CinematicScene } from "@/components/site/CinematicScene";
import { CTAExternal, CTALink } from "@/components/site/CTAButton";
import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { motion } from "framer-motion";
import aluWindowsCard from "@/assets/products/aluminium-windows-card.png.asset.json";
import aluDoorsCard from "@/assets/products/aluminium-doors-card.png.asset.json";

export const Route = createFileRoute("/products/aluminium")({
  head: () => ({
    meta: [
      { title: "Aluminium Windows & Doors — Nicwin" },
      {
        name: "description",
        content:
          "Slim aluminium frames for the widest possible view. Thermally broken, marine-grade hardware, five curated finishes.",
      },
      { property: "og:title", content: "Nicwin Aluminium" },
    ],
    links: [{ rel: "canonical", href: "/products/aluminium" }],
  }),
  component: AluLanding,
});

type CardLink = {
  to: "/products/aluminium/windows" | "/products/aluminium/doors" | "/products/aluminium/colors";
  label: string;
  count: string;
  image?: { url: string };
  alt?: string;
};

const links: CardLink[] = [
  {
    to: "/products/aluminium/windows",
    label: "Windows",
    count: "5 types",
    image: aluWindowsCard,
    alt: "Premium Aluminium Window displayed in the NICWIN Experience Center.",
  },
  {
    to: "/products/aluminium/doors",
    label: "Doors",
    count: "5 types",
    image: aluDoorsCard,
    alt: "Premium Aluminium Door displayed in the NICWIN Experience Center.",
  },
  { to: "/products/aluminium/colors", label: "Colours", count: "5 finishes" },
];

function AluLanding() {
  return (
    <>
      <CinematicScene variant="night" className="min-h-[70svh]">
        <div className="mx-auto flex min-h-[70svh] max-w-[1440px] flex-col justify-end px-6 pb-24 pt-40 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">Aluminium</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-4 text-balance font-display text-6xl leading-[0.95] text-offwhite md:text-[7.5rem]">
              Thin frames.
              <br />
              <span className="italic text-champagne">Big view.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 max-w-2xl text-lg text-offwhite/80">
              Slim aluminium frames with thermal break and marine-grade hardware.
              The easy answer for modern Indian homes that want as much glass as
              possible.
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
                  <CinematicScene variant="night" parallax={false} className="aspect-[4/5] rounded-3xl transition-transform duration-500 group-hover:-translate-y-2">
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
