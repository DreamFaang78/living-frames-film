const ITEMS = [
  "Always looking for the better.",
  "Made in Deoghar · Delivered across India",
  "WhatsApp +91 79090 39070",
  "uPVC · Aluminium · Steel",
];

export function TopBar() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div
      className="group fixed inset-x-0 top-0 z-[60] overflow-hidden bg-[color:var(--nicwin-red)] text-white"
      style={{
        height: 28,
        maskImage:
          "linear-gradient(to right, transparent 0, #000 4%, #000 96%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, #000 4%, #000 96%, transparent 100%)",
      }}
      aria-label="Nicwin tagline"
    >
      <div className="marquee-track flex h-full w-max items-center whitespace-nowrap group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]">
        {row.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 text-[11px] font-semibold uppercase tracking-[0.28em]"
          >
            {text}
            <span className="inline-block h-1 w-1 rounded-full bg-white/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
