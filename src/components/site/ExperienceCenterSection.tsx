import { Reveal, Stagger, item } from "@/components/site/Reveal";
import { CTALink, CTAExternal } from "@/components/site/CTAButton";
import { motion } from "framer-motion";
import { Eye, Palette, Users, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";
import experienceImg from "@/assets/showroom/experience-center.webp.asset.json";

const features = [
  {
    icon: Eye,
    title: "Live Product Experience",
    body: "Explore our window and door systems in a real installation environment.",
  },
  {
    icon: Palette,
    title: "Premium Design Options",
    body: "Compare finishes, frame styles, glass options, and hardware.",
  },
  {
    icon: Users,
    title: "Expert Consultation",
    body: "Receive personalized guidance from our experienced team.",
  },
  {
    icon: Sparkles,
    title: "Customized Solutions",
    body: "Discover products tailored to residential and commercial projects.",
  },
];

export function ExperienceCenterSection() {
  return (
    <section
      id="experience-center"
      className="scroll-mt-24 border-t border-[color:var(--line)] bg-[color:var(--paper)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <figure className="group relative overflow-hidden rounded-[20px] border border-[color:var(--line)] bg-[color:var(--paper-warm)] shadow-[0_30px_80px_-40px_rgba(10,10,11,0.35)]">
              <img
                src={experienceImg.url}
                alt="NICWIN Experience Center showcasing premium uPVC windows and doors in a modern showroom environment."
                loading="lazy"
                width={896}
                height={1200}
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 md:aspect-[3/4]"
              />
              <figcaption className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--nicwin-blue)] backdrop-blur">
                uPVC Windows
              </figcaption>
            </figure>

          </Reveal>

          <div>
            <Reveal>
              <div className="eyebrow">Experience Our Products</div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 text-balance font-display text-4xl leading-[1.05] text-[color:var(--ink)] md:text-[clamp(2.25rem,4vw,3.75rem)]">
                See the Quality.{" "}
                <span className="italic text-[color:var(--nicwin-red)]">
                  Feel the Craftsmanship.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-xl text-pretty text-lg text-[color:var(--ink-soft)]">
                Visit our Experience Center to explore our premium range of uPVC, Aluminium, and
                Steel Window & Door Systems in a real-world setting. Experience the craftsmanship,
                finishes, hardware, and design options firsthand while receiving expert guidance to
                help you choose the perfect solution for your home or commercial space.
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.08}>
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={item}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper-warm)] p-5 shadow-[0_10px_30px_-20px_rgba(14,59,115,0.25)] transition-shadow duration-500 hover:shadow-[0_20px_50px_-20px_rgba(14,59,115,0.35)]"
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
              <div className="mt-10 flex flex-wrap gap-3">
                <CTAExternal href={SITE.whatsappUrl}>Book a Visit</CTAExternal>
                <CTALink to="/contact" variant="ink-ghost">
                  Contact Our Team
                </CTALink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
