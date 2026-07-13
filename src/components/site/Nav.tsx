import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV, MEGA, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass" : "bg-transparent",
        )}
        onMouseLeave={() => setMega(false)}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="group flex items-center gap-2">
            <div className="relative">
              <span className="font-display text-2xl font-medium tracking-tight text-offwhite">
                nic<span className="text-champagne">win</span>
              </span>
              <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-champagne transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const hasMega = "mega" in item && item.mega === true;
              return (
              <div
                key={item.to}
                onMouseEnter={() => setMega(hasMega)}
              >
                <Link
                  to={item.to}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide text-offwhite/85 transition-colors hover:text-offwhite"
                  activeProps={{ className: "text-champagne" }}
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
              className="inline-flex items-center gap-2 rounded-full bg-champagne px-5 py-2.5 text-sm font-semibold text-charcoal transition-all hover:bg-champagne-soft hover:shadow-[0_10px_40px_-10px_rgba(201,162,39,0.6)]"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="rounded-full p-2 text-offwhite md:hidden"
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
              className="glass border-t border-white/5"
            >
              <div className="mx-auto grid max-w-[1440px] gap-6 px-10 py-8 md:grid-cols-3">
                {MEGA.map((col) => (
                  <Link
                    key={col.heading}
                    to={col.to}
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-ink p-6 transition-all hover:border-champagne/40"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 mesh-charcoal" />
                    <div className="relative">
                      <div className="mb-1 text-[10px] uppercase tracking-[0.25em] text-champagne">
                        Explore
                      </div>
                      <h3 className="font-display text-3xl text-offwhite">{col.heading}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{col.tagline}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {col.children.map((c) => (
                          <span
                            key={c.label}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-offwhite/70"
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
            className="fixed inset-0 z-40 flex flex-col bg-charcoal/95 px-6 pt-24 backdrop-blur-2xl md:hidden"
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
                  className="block border-b border-white/5 py-5 font-display text-3xl text-offwhite"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <a
              href={SITE.whatsappUrl}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-champagne px-5 py-4 text-base font-semibold text-charcoal"
            >
              Talk to us on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
