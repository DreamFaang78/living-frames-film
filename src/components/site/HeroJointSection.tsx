import { motion } from "framer-motion";
import cornerJoint from "@/assets/corner-joint-lakeview.jpeg.asset.json";

export function HeroJointSection() {
  return (
    <section className="relative w-full bg-[color:var(--paper)] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-10">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 md:pt-6"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--nicwin-red)]">
            Engineered for better performance
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.05] text-[color:var(--ink)] md:text-5xl">
            Built Strong at Every Corner.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--ink)]/70">
            Every NICWIN Window &amp; Door System features precision Fusion Welded Joints that create stronger frames, superior weather protection, and lasting durability. Designed for flawless performance, season after season.
          </p>
          <p className="mt-6 font-[family-name:var(--font-display)] text-lg italic text-[color:var(--nicwin-blue)]">
            Always Looking For The Better.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8"
        >
          <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-2xl bg-[#f4f5f2] ring-1 ring-black/5">
            <img
              src={cornerJoint.url}
              alt="Close-up of a white uPVC window frame corner — cut at 45 degrees and heat-welded."
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
