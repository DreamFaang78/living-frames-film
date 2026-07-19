import { createFileRoute } from "@tanstack/react-router";
import { ProductCategoryPage } from "@/components/site/ProductCategoryPage";

export const Route = createFileRoute("/products/aluminium/doors")({
  head: () => ({
    meta: [
      { title: "Aluminium Doors — Nicwin" },
      {
        name: "description",
        content:
          "Sliding, Casement, Slide & Fold, Lift & Slide, Corner Slider. Aluminium doors engineered for the widest possible opening.",
      },
      { property: "og:title", content: "Nicwin Aluminium Doors" },
    ],
    links: [{ rel: "canonical", href: "/products/aluminium/doors" }],
  }),
  component: () => (
    <ProductCategoryPage
      material="Aluminium"
      variant="night"
      kicker="Aluminium · Doors"
      headline="Doors that make the room feel bigger."
      intro="An aluminium door earns its place by making the wall almost disappear. Whether it slides, folds, lifts, or opens on a corner, our doors move heavy glass panels like they weigh nothing."
      types={[
        { name: "Sliding", benefit: "The disappearing wall.", detail: "2, 3, or 4 panel systems on stainless steel wheels. Smooth one-hand operation even on 3m-wide panels." },
        { name: "Casement", benefit: "A single, big swing.", detail: "Side-hung with concealed steel reinforcement. Multi-point lock, strong stainless handles." },
        { name: "Slide & Fold", benefit: "Fold the whole wall away.", detail: "Panels fold and stack on one side, opening the room to a garden or terrace with no obstruction." },
        { name: "Lift & Slide", benefit: "Huge panels. Light effort.", detail: "Panel lifts off its track when you open it, glides silently, then drops back for a full weather seal. For the widest openings." },
        { name: "Corner Slider", benefit: "The corner that disappears.", detail: "Two sliding panels meet at a corner with no post. Two walls simply slide away, opening the room in two directions." },
      ]}
      benefits={[
        { label: "Panel size", value: 95, copy: "Up to 3m per panel — for very wide openings." },
        { label: "Thermal break", value: 82, copy: "Insulator inside the frame helps in hot weather." },
        { label: "Weather", value: 93, copy: "Marine-grade seals and drainage. Wind-driven rain tested." },
        { label: "Security", value: 88, copy: "Multi-point lock, forged hooks, hardened tracks." },
      ]}
      spec={[
        { k: "3m", v: "Max panel width" },
        { k: "Poly-amide", v: "Thermal break" },
        { k: "SS304", v: "Track & rollers" },
        { k: "10-yr", v: "Warranty" },
      ]}
    />
  ),
});
