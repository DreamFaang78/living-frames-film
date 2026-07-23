import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { CTALink } from "@/components/site/CTAButton";
import { motion } from "framer-motion";
import { Cog, Layers, Hammer, ShieldCheck } from "lucide-react";
import facilityImg from "@/assets/facility/manufacturing-facility.webp.asset.json";

const features = [
  {
    icon: Cog,
    title: "Advanced Manufacturing",
    body: "Modern machinery delivering precision-built window and door systems.",
  },
  {
    icon: Layers,
    title: "Premium Materials",
    body: "High-quality uPVC, Aluminium, and Steel for long-lasting performance.",
  },
  {
    icon: Hammer,
    title: "Precision Craftsmanship",
    body: "Every product is manufactured with attention to detail and quality.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    body: "Each product is carefully inspected to ensure durability and customer satisfaction.",
  },
];

export function ManufacturingSection() {
  return (
    <section className="border-t border-[color:var(--line)] bg-[color:var(--paper-warm)] py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <figure className="group relative overflow-hidden rounded-[20px] border border-[color:var(--line)] bg-black shadow-[0_30px_80px_-40px_rgba(10,10,11,0.35)]">
              <img
                src={facilityImg.url}
                alt="NICWIN Window & Door Systems manufacturing facility producing premium uPVC, Aluminium, and Steel window and door solutions."
                loading="lazy"
                width={1195}
                height={896}
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <div className="eyebrow">Our Manufacturing Facility</div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.25rem,4vw,3.75rem)]">
                Precision Engineering. Modern Infrastructure.{" "}
                <span className="italic text-[color:var(--nicwin-red)]">Trusted Quality.</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-xl text-pretty text-lg text-[color:var(--ink-soft)]">
                Behind every NICWIN product is a modern manufacturing facility equipped to produce
                premium uPVC, Aluminium, and Steel Window & Door Systems. Our commitment to
                precision craftsmanship, quality materials, and advanced manufacturing processes
                ensures every product meets the highest standards of durability, performance, and
                design.
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.08}>
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={item}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] p-5 shadow-[0_10px_30px_-20px_rgba(14,59,115,0.25)] transition-shadow duration-500 hover:shadow-[0_20px_50px_-20px_rgba(14,59,115,0.35)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--nicwin-blue)]/10 text-[color:var(--nicwin-blue)]">
                    <f.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-[color:var(--ink)]">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    {f.body}
                  </p>
                </motion.div>
              ))}
            </Stagger>

            <Reveal delay={3}>
              <div className="mt-10">
                <CTALink to="/" hash="experience-center">
                  Explore Our Products
                </CTALink>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
