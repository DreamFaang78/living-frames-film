import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Reveal, Stagger, item } from "./Reveal";

import aluminium from "@/assets/products/aluminium-system.png.asset.json";
import french from "@/assets/products/french-doors.png.asset.json";
import slideFold from "@/assets/products/slide-fold.png.asset.json";
import casement from "@/assets/products/casement-door.jpg.asset.json";
import upvcEco from "@/assets/products/upvc-eco.png.asset.json";
import upvcSecure from "@/assets/products/upvc-secure.png.asset.json";
import upvcDurable from "@/assets/products/upvc-durability.png.asset.json";
import tiltTurn from "@/assets/products/tilt-turn.png.asset.json";

type Product = {
  name: string;
  material: "uPVC" | "Aluminium";
  tagline: string;
  details: string[];
  img: { url: string };
  to: string;
  aspect: "portrait" | "landscape" | "square";
};

const products: Product[] = [
  {
    name: "Tilt & Turn uPVC Window",
    material: "uPVC",
    tagline: "Two openings. One frame. Total control.",
    details: [
      "Dual-mode tilt for ventilation, turn for cleaning",
      "Multi-chamber profile · twin gasket seal",
      "Available in white, laminate wood, anthracite",
    ],
    img: tiltTurn,
    to: "/products/upvc/windows",
    aspect: "square",
  },
  {
    name: "Aluminium System Windows",
    material: "Aluminium",
    tagline: "Slim sightlines. Widest possible views.",
    details: [
      "Thermally broken profile · 2.4W/m²K U-value",
      "Floor-to-ceiling spans up to 3.2m",
      "Powder-coated matte black, bronze, champagne",
    ],
    img: aluminium,
    to: "/products/aluminium/windows",
    aspect: "portrait",
  },
  {
    name: "French uPVC Doors",
    material: "uPVC",
    tagline: "The entrance that greets the courtyard.",
    details: [
      "Double-leaf swing · toughened 6mm+6mm glass",
      "Multi-point locking · stainless steel hardware",
      "Sizes to 2400×2100 mm · anthracite standard",
    ],
    img: french,
    to: "/products/upvc/doors",
    aspect: "portrait",
  },
  {
    name: "Slide & Fold uPVC Doors",
    material: "uPVC",
    tagline: "Fold the wall away. Bring the outside in.",
    details: [
      "3 to 6 panel configurations",
      "Bottom-rolling stainless bogies · 25-year track",
      "Wood-laminate finish · Golden Oak shown",
    ],
    img: slideFold,
    to: "/products/upvc/doors",
    aspect: "portrait",
  },
  {
    name: "Casement uPVC Door",
    material: "uPVC",
    tagline: "The classic. Refined.",
    details: [
      "Single-leaf side-hung · 3-hinge reinforcement",
      "70mm frame · steel core throughout",
      "Pure White · anti-yellowing UV grade",
    ],
    img: casement,
    to: "/products/upvc/doors",
    aspect: "square",
  },
  {
    name: "uPVC Casement Window · Bay",
    material: "uPVC",
    tagline: "Eco-friendly. Effortlessly light.",
    details: [
      "3-panel bay configuration",
      "Argon-filled double glazing",
      "Lead-free calcium-zinc formulation",
    ],
    img: upvcEco,
    to: "/products/upvc/windows",
    aspect: "landscape",
  },
  {
    name: "uPVC Fixed Picture Window",
    material: "uPVC",
    tagline: "Frame the sky. Nothing else.",
    details: [
      "Non-operable · maximum light",
      "Ideal for stairwells and living rooms",
      "6mm toughened glass standard",
    ],
    img: upvcSecure,
    to: "/products/upvc/windows",
    aspect: "landscape",
  },
  {
    name: "uPVC Sliding Window · 3-Track",
    material: "uPVC",
    tagline: "Built for the long monsoon.",
    details: [
      "3-track profile · integrated mesh option",
      "Stainless steel rollers · self-lubricating",
      "Weep-drainage channels for heavy rain",
    ],
    // Use a clean product photo. The legacy `upvcDurable` asset has a baked-in
    // yellow-green overlay from the old marketing site — don't reuse it.
    img: tiltTurn,
    to: "/products/upvc/windows",
    aspect: "landscape",
  },
];

const aspectClass: Record<Product["aspect"], string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]",
  square: "aspect-square",
};

export function ProductShowcase() {
  return (
    <section
      id="product-showcase"
      className="relative border-y border-[color:var(--line)] bg-[color:var(--paper)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--nicwin-red)]">
                The catalogue
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.5rem,4.5vw,4.5rem)]">
                Every product. Every detail. Nothing hidden.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-xl text-[color:var(--ink-soft)]">
                A curated view of the windows and doors we build most often. Sizes,
                configurations and finishes are always tailored to your opening.
              </p>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <Link
              to="/products"
              className="text-sm font-semibold text-[color:var(--nicwin-blue)] hover:text-[color:var(--nicwin-red)]"
            >
              See all products →
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <motion.article
              key={p.name}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] shadow-[0_10px_30px_-20px_rgba(14,59,115,0.25)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-30px_rgba(14,59,115,0.35)]"
            >
              <Link to={p.to} className="block overflow-hidden bg-[color:var(--paper-warm)]">
                <div className={`${aspectClass[p.aspect]} w-full overflow-hidden`}>
                  <img
                    src={p.img.url}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-[color:var(--line)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--nicwin-blue)]">
                    {p.material}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--nicwin-red)]" />
                </div>

                <h3 className="mt-4 font-display text-2xl leading-tight text-[color:var(--ink)]">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{p.tagline}</p>

                <ul className="mt-5 space-y-2 border-t border-[color:var(--line)] pt-5 text-sm text-[color:var(--ink-soft)]">
                  {p.details.map((d) => (
                    <li key={d} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--nicwin-blue)]"
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={p.to}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--nicwin-red)]"
                >
                  View {p.material}
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
