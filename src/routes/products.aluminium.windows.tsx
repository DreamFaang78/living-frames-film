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
      headline="Thin frames. Big view."
      intro="When the view is the point, the frame should stay out of the way. Nicwin aluminium windows have the thinnest possible frame — with thermal break, marine-grade seals, and monsoon-ready drainage."
      types={[
        { name: "Casement", benefit: "Thinnest frame. Widest opening.", detail: "Side-hung with multi-point lock. 60mm frame width. Up to 2.4m tall on request." },
        { name: "Sliding", benefit: "Smooth glide for years.", detail: "2, 3, or 4-track systems on stainless steel wheels. Rain flashing and seals for Indian monsoons." },
        { name: "Tilt & Turn", benefit: "Ventilate safely. Clean from inside.", detail: "Tilt open at top for airflow. Turn to fully open. Great for upper floors and balcony rooms." },
        { name: "Fixed", benefit: "A picture in a metal frame.", detail: "Ultra-thin fixed panel for gable ends, stairwells, and picture windows. More glass. Less frame." },
        { name: "French", benefit: "Two panels. One clean look.", detail: "Two panels that meet with concealed hinges. Reads like a doorway, opens like a room." },
      ]}
      benefits={[
        { label: "Slim frame", value: 96, copy: "60mm typical — more glass, less frame." },
        { label: "Thermal break", value: 82, copy: "Plastic insulator inside the frame cuts heat transfer." },
        { label: "Weather", value: 92, copy: "Marine-grade seals and drainage. Tested — no leaks." },
        { label: "Security", value: 88, copy: "Multi-point lock, hardened stainless steel hardware." },
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
