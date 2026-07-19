import { createFileRoute } from "@tanstack/react-router";
import { CinematicScene } from "@/components/site/CinematicScene";
import { CTAExternal } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { useState } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nicwin — Deoghar Factory & Showroom" },
      {
        name: "description",
        content:
          "Get a quote, book a site visit, or ask a question. WhatsApp, phone, or email — we reply the same day.",
      },
      { property: "og:title", content: "Contact Nicwin" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const PRODUCTS = ["uPVC Windows", "uPVC Doors", "Aluminium Windows", "Aluminium Doors", "Steel Doors"];
const PROJECT_TYPES = ["New home", "Renovation", "Apartment", "Commercial"];

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  phone: z.string().trim().min(7, "A reachable number please").max(20),
  city: z.string().trim().min(2, "City?").max(60),
  products: z.array(z.string()).min(1, "Pick at least one"),
  projectType: z.string().min(1, "Choose one"),
  message: z.string().trim().max(1000).optional(),
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    products: [] as string[],
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [mapLoc, setMapLoc] = useState<"factory" | "showroom">("showroom");

  const toggleProduct = (p: string) => {
    setForm((f) => ({
      ...f,
      products: f.products.includes(p) ? f.products.filter((x) => x !== p) : [...f.products, p],
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      for (const iss of r.error.issues) errs[iss.path[0] as string] = iss.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const mapQuery = mapLoc === "factory" ? SITE.factory.mapQuery : SITE.showroom.mapQuery;

  return (
    <>
      <CinematicScene variant="teal" className="min-h-[50svh]">
        <div className="mx-auto flex min-h-[50svh] max-w-[1440px] flex-col justify-end px-6 pb-16 pt-32 md:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-champagne">Contact</div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-3 font-display text-6xl text-offwhite md:text-8xl">
              Let's talk about your home.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-xl text-offwhite/75">
              WhatsApp is usually the fastest. We reply during {SITE.hours}.
            </p>
          </Reveal>
        </div>
      </CinematicScene>

      <section className="border-y border-white/5 bg-ink py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 md:grid-cols-[1.1fr_1fr] md:px-10">
          {/* FORM */}
          <div className="rounded-3xl border border-white/8 bg-charcoal/60 p-8 md:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-champagne">Got it</div>
                  <h2 className="mt-3 font-display text-4xl text-offwhite">
                    Thank you, {form.name.split(" ")[0]}.
                  </h2>
                  <p className="mt-3 text-offwhite/75">
                    We'll get back to you soon. For a faster reply, message us
                    on WhatsApp with your city and what you're looking for.
                  </p>
                  <div className="mt-8">
                    <CTAExternal href={SITE.whatsappUrl}>Continue on WhatsApp</CTAExternal>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Name" error={errors.name}>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent py-2 outline-none"
                      />
                    </Field>
                    <Field label="Phone" error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-transparent py-2 outline-none"
                      />
                    </Field>
                  </div>
                  <Field label="City" error={errors.city}>
                    <input
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full bg-transparent py-2 outline-none"
                    />
                  </Field>

                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-offwhite/50">
                      Interested in
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {PRODUCTS.map((p) => (
                        <button
                          type="button"
                          key={p}
                          onClick={() => toggleProduct(p)}
                          className={cn(
                            "rounded-full border px-3 py-1.5 text-sm transition-all",
                            form.products.includes(p)
                              ? "border-champagne bg-champagne text-charcoal"
                              : "border-white/15 text-offwhite/70 hover:border-champagne",
                          )}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                    {errors.products && (
                      <div className="mt-2 text-xs text-destructive">{errors.products}</div>
                    )}
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-offwhite/50">
                      Project type
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((p) => (
                        <button
                          type="button"
                          key={p}
                          onClick={() => setForm({ ...form, projectType: p })}
                          className={cn(
                            "rounded-full border px-3 py-1.5 text-sm transition-all",
                            form.projectType === p
                              ? "border-teal bg-teal text-offwhite"
                              : "border-white/15 text-offwhite/70 hover:border-teal",
                          )}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                    {errors.projectType && (
                      <div className="mt-2 text-xs text-destructive">{errors.projectType}</div>
                    )}
                  </div>

                  <Field label="A note (optional)">
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none bg-transparent py-2 outline-none"
                    />
                  </Field>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="rounded-full bg-champagne px-6 py-3 text-sm font-semibold text-charcoal hover:bg-champagne-soft"
                    >
                      Send enquiry
                    </button>
                    <span className="text-xs text-offwhite/50">or</span>
                    <a
                      href={SITE.whatsappUrl}
                      className="text-sm text-champagne hover:underline"
                    >
                      Skip form, WhatsApp us →
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* CONTACT + MAP */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/8 bg-charcoal/60 p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-champagne">Reach us</div>
              <div className="mt-6 space-y-3">
                {SITE.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="flex items-center justify-between border-b border-white/5 py-3 text-offwhite/85 hover:text-champagne"
                  >
                    <span className="text-xs uppercase tracking-widest text-offwhite/50">
                      {p.label}
                    </span>
                    <span className="font-display text-xl">{p.number}</span>
                  </a>
                ))}
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center justify-between py-3 text-offwhite/85 hover:text-champagne"
                >
                  <span className="text-xs uppercase tracking-widest text-offwhite/50">Email</span>
                  <span className="font-display text-lg">{SITE.email}</span>
                </a>
              </div>
              <div className="mt-6 text-xs uppercase tracking-widest text-offwhite/50">
                Hours · {SITE.hours}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/8">
              <div className="flex border-b border-white/8">
                {(["showroom", "factory"] as const).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setMapLoc(loc)}
                    className={cn(
                      "flex-1 px-4 py-3 text-xs uppercase tracking-[0.2em] transition",
                      mapLoc === loc
                        ? "bg-champagne text-charcoal"
                        : "bg-charcoal/60 text-offwhite/70 hover:text-champagne",
                    )}
                  >
                    {loc === "factory" ? SITE.factory.label : "Showroom"}
                  </button>
                ))}
              </div>
              {/* TODO(client-media): swap address-based search for exact map pin
                  coordinates once the client confirms them for each site. */}
              <iframe
                key={mapQuery}
                title={mapLoc === "factory" ? SITE.factory.label : SITE.showroom.label}
                src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-[320px] w-full grayscale"
                loading="lazy"
              />
              <div className="bg-charcoal/60 p-5 text-sm text-offwhite/75">
                <div className="text-xs uppercase tracking-widest text-champagne">
                  {mapLoc === "factory" ? SITE.factory.label : SITE.showroom.label}
                </div>
                <div className="mt-2">
                  {mapLoc === "factory" ? SITE.factory.address : SITE.showroom.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-[0.2em] text-offwhite/50">{label}</div>
      <div className="mt-1 border-b border-white/15 focus-within:border-champagne">{children}</div>
      {error && <div className="mt-1 text-xs text-destructive">{error}</div>}
    </label>
  );
}
