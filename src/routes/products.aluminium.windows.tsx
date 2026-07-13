import { createFileRoute } from "@tanstack/react-router";
import { ProductCategoryPage } from "@/components/site/ProductCategoryPage";

export const Route = createFileRoute("/products/aluminium/windows")({
  head: () => ({
    meta: [
      { title: "Aluminium Windows — Nicwin" },
      {
        name: "description",
        content:
          "Five aluminium window formats — Casement, Sliding, Tilt & Turn, Fixed, French. Slim frames, maximum daylight.",
      },
      { property: "og:title", content: "Nicwin Aluminium Windows" },
    ],
    links: [{ rel: "canonical", href: "/products/aluminium/windows" }],
  }),
  component: () => (
    <ProductCategoryPage
      material="Aluminium"
      variant="night"
      kicker="Aluminium · Windows"
      headline="Frames that get out of the way."
      intro="When the view is the point, the frame should apologise for existing. Nicwin aluminium windows are engineered around minimum sightlines — thermally broken, marine-grade, monsoon-ready — so the daylight does the talking."
      types={[
        { name: "Casement", benefit: "Slimmest sightline. Widest breath.", detail: "European-hinge casement with multi-point locking. 60mm sightline; up to 2.4m sash height on request." },
        { name: "Sliding", benefit: "Effortless glide, decade after decade.", detail: "Two, three, four track systems on stainless roller carriages. Rain flashing and interlock seals designed for monsoon India." },
        { name: "Tilt & Turn", benefit: "Ventilate securely. Clean from inside.", detail: "European hardware with tilt-first, then turn action. Ideal for upper floors and balcony-facing rooms." },
        { name: "Fixed", benefit: "A picture, framed in metal.", detail: "Ultra-slim fixed lite for gable ends, stairwells and picture openings. Maximum glass, minimum frame." },
        { name: "French", benefit: "Two sashes, one gesture.", detail: "Meeting-stile French pair with concealed hinges. Reads like a doorway; opens like a room." },
      ]}
      benefits={[
        { label: "Slim sightline", value: 96, copy: "60mm typical — more glass, less frame." },
        { label: "Thermal break", value: 82, copy: "Polyamide thermal isolators cut heat transfer significantly." },
        { label: "Weather", value: 92, copy: "Marine-grade gaskets and drainage. Zero seepage tested." },
        { label: "Security", value: 88, copy: "Multi-point locking, hardened stainless hardware." },
      ]}
      colors={undefined}
      spec={[
        { k: "60mm", v: "Minimum sightline" },
        { k: "Poly-amide", v: "Thermal break" },
        { k: "SS304", v: "Marine hardware" },
        { k: "10-yr", v: "Warranty" },
      ]}
    />
  ),
});
