import { createFileRoute } from "@tanstack/react-router";
import { ProductCategoryPage } from "@/components/site/ProductCategoryPage";

export const Route = createFileRoute("/products/upvc/colors")({
  head: () => ({
    meta: [
      { title: "uPVC Colours — Seven finishes for Indian interiors" },
      {
        name: "description",
        content:
          "Walnut, Jet Black, Mahogany, Golden Oak, Dark Oak, Anthracite Grey, and White — Nicwin's uPVC finish palette.",
      },
      { property: "og:title", content: "Nicwin uPVC Colours" },
    ],
    links: [{ rel: "canonical", href: "/products/upvc/colors" }],
  }),
  component: () => (
    <ProductCategoryPage
      material="uPVC"
      variant="teal"
      kicker="uPVC · Colours"
      headline="Seven finishes. All quietly considered."
      intro="Colour on a uPVC frame is a decade-long decision. We curated seven — three warm woods for traditional interiors, two greys for contemporary lines, and a pair of anchors — because the last thing a great room needs is a loud frame."
      types={[
        { name: "Warm woods", benefit: "Walnut, Mahogany, Golden Oak, Dark Oak.", detail: "Foil-laminated finishes with tactile grain. UV-stable, monsoon-tested, and calibrated to Indian teakwood interiors." },
        { name: "Neutrals", benefit: "Anthracite Grey and Jet Black.", detail: "The modern architect's default. Reads as metal from a distance. Ages beautifully in South-facing walls." },
        { name: "Classic", benefit: "Pure White.", detail: "The one that disappears. Reflects heat, brightens dim rooms, still looks new at year ten." },
      ]}
      benefits={[
        { label: "UV Stability", value: 92, copy: "Foil finishes tested against equivalent Indian summers." },
        { label: "Colour retention", value: 90, copy: "Ten years without chalking, fading, or peeling." },
        { label: "Cleanability", value: 95, copy: "Wipe with a damp cloth. That is the maintenance." },
        { label: "Match consistency", value: 88, copy: "Batch-controlled foils ensure the last frame matches the first." },
      ]}
      colorHeading="The seven"
      colors={[
        { name: "Walnut", hex: "#5A3A22" },
        { name: "Jet Black", hex: "#0C0C0E" },
        { name: "Mahogany", hex: "#6B2E1F" },
        { name: "Golden Oak", hex: "#B47B3E" },
        { name: "Dark Oak", hex: "#3E2717" },
        { name: "Anthracite Grey", hex: "#3B3F42" },
        { name: "White", hex: "#F5F2EC" },
      ]}
      spec={[
        { k: "7", v: "Curated finishes" },
        { k: "UV-stable", v: "Foil tech" },
        { k: "10-yr", v: "Colour warranty" },
        { k: "RAL-matched", v: "On request" },
      ]}
    />
  ),
});
