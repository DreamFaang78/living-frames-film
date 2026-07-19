import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV, MEGA, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { TopBar } from "@/components/site/TopBar";
import nicwinLogo from "@/assets/brand/nicwin-logo.png.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const inkText = "text-[color:var(--ink,#14161A)]";
  const inkTextSoft = "text-[color:#14161A]/75 hover:text-[color:var(--nicwin-red)]";

  return (
    <>
      <TopBar />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ top: 28 }}
        className={cn(
          "fixed inset-x-0 z-50 bg-white/95 backdrop-blur-xl transition-shadow duration-500",
          scrolled ? "shadow-[0_1px_0_rgba(20,22,26,0.08)]" : "shadow-none",
        )}
        onMouseLeave={() => setMega(false)}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 md:px-10">
          <Link to="/" className="group flex items-center gap-3" aria-label="Nicwin — Home">
            <span className="flex h-20 items-center justify-center rounded-md px-2 md:h-24">
              <img
                src={nicwinLogo.url}
                alt="Nicwin Windows & Door Systems"
                className="h-16 w-auto md:h-20"
                width={220}
                height={80}
              />
            </span>
            <span className={cn("sr-only", inkText)}>Nicwin</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const hasMega = "mega" in item && item.mega === true;
              return (
                <div key={item.to} onMouseEnter={() => setMega(hasMega)}>
                  <Link
                    to={item.to}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                      inkTextSoft,
                    )}
                    activeProps={{ className: "text-[color:var(--nicwin-red)]" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--nicwin-red)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[color:var(--nicwin-red-dark)] hover:shadow-[0_10px_30px_-8px_rgba(227,30,36,0.55)]"
            >
              WhatsApp →
            </a>
          </div>

          <button
            className="rounded-full p-2 text-[color:#14161A] md:hidden"
            aria-label="Open menu"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mega && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[rgba(20,22,26,0.08)] bg-white/95"
            >
              <div className="mx-auto grid max-w-[1440px] gap-6 px-10 py-8 md:grid-cols-3">
                {MEGA.map((col) => (
                  <Link
                    key={col.heading}
                    to={col.to}
                    className="group relative overflow-hidden rounded-2xl border border-[rgba(20,22,26,0.08)] bg-[color:var(--paper-dim)] p-6 transition-all hover:border-[color:var(--nicwin-red)]/50"
                  >
                    <div className="relative">
                      <div className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[color:var(--nicwin-red)]">
                        Explore
                      </div>
                      <h3 className="font-display text-3xl text-[color:#14161A]">
                        {col.heading}
                      </h3>
                      <p className="mt-1 text-sm text-[color:#14161A]/70">
                        {col.tagline}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {col.children.map((c) => (
                          <span
                            key={c.label}
                            className="rounded-full border border-[rgba(20,22,26,0.15)] px-3 py-1 text-xs text-[color:#14161A]/75"
                          >
                            {c.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col bg-[color:var(--nicwin-blue-deep)]/97 px-6 pt-24 backdrop-blur-2xl md:hidden"
          >
            {NAV.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  to={item.to}
                  onClick={() => setMobile(false)}
                  className="block border-b border-white/10 py-5 font-display text-3xl text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <a
              href={SITE.whatsappUrl}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--nicwin-red)] px-5 py-4 text-base font-semibold text-white"
            >
              Talk to us on WhatsApp →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
