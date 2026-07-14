const ITEMS = [
  "uPVC Windows",
  "Aluminium Doors",
  "Steel Doors",
  "Made in Jharkhand",
  "Engineered for Monsoon",
  "Always looking for the better",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/10 bg-[color:var(--nicwin-red)] py-4 group"
    >
      <div className="marquee-track flex w-max whitespace-nowrap group-hover:[animation-play-state:paused]">
        {row.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 font-display text-lg font-medium uppercase tracking-[0.2em] text-white/95 md:text-xl"
          >
            {text}
            <span className="text-white/60">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
