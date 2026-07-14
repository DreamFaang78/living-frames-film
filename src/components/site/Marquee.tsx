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
      className="group relative overflow-hidden border-y border-[color:var(--line)] bg-[color:var(--paper)] py-5"
    >
      <div className="marquee-track flex w-max whitespace-nowrap group-hover:[animation-play-state:paused]">
        {row.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 font-display text-lg font-medium uppercase tracking-[0.22em] text-[color:var(--ink)] md:text-xl"
          >
            {text}
            <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--nicwin-red)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
