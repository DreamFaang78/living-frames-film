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
      headline="Openings that make the room bigger."
      intro="An aluminium door earns its place by making the wall disappear. Whether it slides, folds, lifts or opens on a corner, Nicwin's aluminium door range is engineered to move heavy panels of glass as if they weighed nothing at all."
      types={[
        { name: "Sliding", benefit: "The disappearing wall.", detail: "Two, three or four panel systems with stainless carriages. Effortless single-hand glide even on 3m-wide panels." },
        { name: "Casement", benefit: "A single, generous swing.", detail: "European hinge with concealed reinforcement. Multi-point locking, hardened stainless handles." },
        { name: "Slide & Fold", benefit: "Fold the wall away completely.", detail: "Bi-fold panels stack neatly to one side, opening the room to a garden or terrace with no interruption." },
        { name: "Lift & Slide", benefit: "Massive panels. Fingertip effort.", detail: "Panel lifts off its rail on operation, glides silently, drops back for a full weather seal. For the widest openings." },
        { name: "Corner Slider", benefit: "The corner that vanishes.", detail: "Two sliding panels meet at a mitred corner with no post. The two exterior walls simply retract, opening the room in two directions at once." },
      ]}
      benefits={[
        { label: "Panel span", value: 95, copy: "Up to 3m per panel — engineered for wide openings." },
        { label: "Thermal break", value: 82, copy: "Polyamide isolators for warm-climate performance." },
        { label: "Weather", value: 93, copy: "Marine-grade seals + drainage; wind-driven rain tested." },
        { label: "Security", value: 88, copy: "Multi-point locking, forged hooks, hardened tracks." },
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
