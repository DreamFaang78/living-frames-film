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
      headline="Five uPVC door types."
      intro="A door sets the mood of a room. Our uPVC doors are made for how Indians actually live — verandah to living room, kitchen to utility, bedroom to garden — with seals that keep rain and dust out."
      types={[
        { name: "French", benefit: "The classic double door.", detail: "Two glass panels that swing open to a garden or terrace. Strong hinges, multi-point lock, weather seal." },
        { name: "Sliding", benefit: "The disappearing wall.", detail: "2-track and 3-track systems for wide openings. Stainless steel wheels, rain flashing, smooth glide." },
        { name: "Tilt & Turn", benefit: "One door. Two ways to open.", detail: "Tilt for gentle airflow. Turn to open fully. Great for balconies where a swinging door would hit the furniture." },
        { name: "Tilt & Slide", benefit: "Wide opening without a swing.", detail: "First tilt for airflow, then slide sideways. Great where a swing door would take up living-room space." },
        { name: "Casement", benefit: "A single, simple hinged door.", detail: "Full-height single door with multi-point lock. The everyday door, done right." },
      ]}
      benefits={[
        { label: "Heat", value: 88, copy: "Sealed against summer heat and monsoon damp." },
        { label: "Sound", value: 84, copy: "Laminated glass options for rooms facing the road." },
        { label: "Weather", value: 94, copy: "Seals and drainage stop wind-driven rain." },
        { label: "Security", value: 90, copy: "5-point lock, steel inside the frame, tested handles." },
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
