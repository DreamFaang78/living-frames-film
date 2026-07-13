import { createFileRoute } from "@tanstack/react-router";
import { ProductCategoryPage } from "@/components/site/ProductCategoryPage";

export const Route = createFileRoute("/products/upvc/doors")({
  head: () => ({
    meta: [
      { title: "uPVC Doors — French, Sliding, Tilt & Turn and more" },
      {
        name: "description",
        content:
          "Five uPVC door formats from Nicwin — each engineered for a specific opening, view or wall.",
      },
      { property: "og:title", content: "Nicwin uPVC Doors" },
    ],
    links: [{ rel: "canonical", href: "/products/upvc/doors" }],
  }),
  component: () => (
    <ProductCategoryPage
      material="uPVC"
      variant="teal"
      kicker="uPVC · Doors"
      headline="Openings that feel considered."
      intro="Doors decide the mood of a room. Nicwin's uPVC door range is engineered for the way Indians actually live — verandah to living, kitchen to utility, master bedroom to garden — with weather seals that keep the outside where it belongs."
      types={[
        { name: "French", benefit: "Ceremony, in door form.", detail: "A pair of glazed sashes that swing wide to a courtyard or terrace. Reinforced hinges, concealed multi-point locking, astragal weather seal." },
        { name: "Sliding", benefit: "The wall that disappears.", detail: "Two-track and three-track systems for wide openings. Stainless roller carriages, interlocking rain flashing, effortless glide." },
        { name: "Tilt & Turn", benefit: "One door. Two moods.", detail: "Tilt for gentle ventilation, turn for full opening. Ideal for balconies where a full door swing meets a coffee table." },
        { name: "Tilt & Slide", benefit: "Wide openings without the swing.", detail: "First tilt for airflow, then slide sideways. Perfect where an inswing door would eat living-room floor plan." },
        { name: "Casement", benefit: "A single, honest hinge.", detail: "Full-height single sash with multi-point locking. The everyday utility door, done properly." },
      ]}
      benefits={[
        { label: "Thermal", value: 88, copy: "Sealed against summer heat and monsoon damp alike." },
        { label: "Acoustic", value: 84, copy: "Laminated PVB glass options for road-facing rooms." },
        { label: "Weather", value: 94, copy: "Astragal seals + drainage channels stop wind-driven rain." },
        { label: "Security", value: 90, copy: "5-point locking, steel-reinforced sash, tested hardware." },
      ]}
      spec={[
        { k: "70mm", v: "Frame depth" },
        { k: "5-pt", v: "Multi-point lock" },
        { k: "24mm", v: "DGU compatible" },
        { k: "10-yr", v: "Warranty" },
      ]}
    />
  ),
});
