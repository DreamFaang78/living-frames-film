import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV, MEGA, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import nicwinLogo from "@/assets/brand/nicwin-logo.png.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const inkText = scrolled ? "text-[color:var(--ink,#14161A)]" : "text-white";
  const inkTextSoft = scrolled ? "text-[color:#14161A]/75 hover:text-[color:var(--nicwin-red)]" : "text-white/85 hover:text-white";

  return (
    <>
      {/* Red brand strip that slides in on scroll */}
      <motion.div
        aria-hidden
        initial={false}
        animate={{ height: scrolled ? 4 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[55] bg-[color:var(--nicwin-red)]"
      />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ top: scrolled ? 4 : 0 }}
        className={cn(
          "fixed inset-x-0 z-50 transition-[background,box-shadow,color] duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(20,22,26,0.08)]"
            : "bg-transparent",
        )}
        onMouseLeave={() => setMega(false)}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
          <Link to="/" className="group flex items-center gap-3" aria-label="Nicwin — Home">
            <span
              className={cn(
                "flex h-11 items-center justify-center rounded-md px-2 transition-colors",
                scrolled ? "bg-transparent" : "bg-white/95 shadow-sm",
              )}
            >
              <img
                src={nicwinLogo.url}
                alt="Nicwin Windows & Door Systems"
                className="h-9 w-auto md:h-10"
                width={110}
                height={44}
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
            className={cn("rounded-full p-2 md:hidden", scrolled ? "text-[color:#14161A]" : "text-white")}
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
              className={cn(
                "border-t",
                scrolled ? "bg-white/95 border-[rgba(20,22,26,0.08)]" : "glass border-white/5",
              )}
            >
              <div className="mx-auto grid max-w-[1440px] gap-6 px-10 py-8 md:grid-cols-3">
                {MEGA.map((col) => (
                  <Link
                    key={col.heading}
                    to={col.to}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border p-6 transition-all",
                      scrolled
                        ? "border-[rgba(20,22,26,0.08)] bg-[color:var(--paper-dim)] hover:border-[color:var(--nicwin-red)]/50"
                        : "border-white/5 bg-[color:var(--ink)] hover:border-[color:var(--nicwin-red)]/50",
                    )}
                  >
                    <div className="relative">
                      <div className="mb-1 text-[10px] uppercase tracking-[0.25em] text-[color:var(--nicwin-red)]">
                        Explore
                      </div>
                      <h3 className={cn("font-display text-3xl", scrolled ? "text-[color:#14161A]" : "text-white")}>
                        {col.heading}
                      </h3>
                      <p className={cn("mt-1 text-sm", scrolled ? "text-[color:#14161A]/70" : "text-white/70")}>
                        {col.tagline}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {col.children.map((c) => (
                          <span
                            key={c.label}
                            className={cn(
                              "rounded-full border px-3 py-1 text-xs",
                              scrolled
                                ? "border-[rgba(20,22,26,0.15)] text-[color:#14161A]/75"
                                : "border-white/15 text-white/75",
                            )}
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
