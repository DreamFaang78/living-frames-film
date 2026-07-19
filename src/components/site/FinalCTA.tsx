import { CTAExternal, CTALink } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

type Props = {
  eyebrow?: string;
  headline: string;
  sub?: string;
  primaryLabel?: string;
  secondary?: { label: string; to: string };
};

/**
 * Shared pre-footer CTA. Always renders on --paper (white) with --ink text
 * so it's readable on every page. Do NOT swap to text-offwhite here.
 */
export function FinalCTA({
  eyebrow,
  headline,
  sub,
  primaryLabel = "Chat on WhatsApp",
  secondary,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--paper)] py-32 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
        {eyebrow && (
          <Reveal>
            <div className="eyebrow">{eyebrow}</div>
          </Reveal>
        )}
        <Reveal delay={eyebrow ? 1 : 0}>
          <h2 className="mt-6 max-w-3xl mx-auto text-balance font-display text-5xl leading-[0.98] text-[color:var(--ink)] md:text-[clamp(2.5rem,6vw,5.5rem)]">
            {headline}
          </h2>
        </Reveal>
        {sub && (
          <Reveal delay={2}>
            <p className="mt-8 mx-auto max-w-xl text-lg text-[color:var(--ink-soft)]">
              {sub}
            </p>
          </Reveal>
        )}
        <Reveal delay={3}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <CTAExternal href={SITE.whatsappUrl}>{primaryLabel}</CTAExternal>
            {secondary && (
              <CTALink to={secondary.to} variant="ink-ghost">
                {secondary.label}
              </CTALink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
