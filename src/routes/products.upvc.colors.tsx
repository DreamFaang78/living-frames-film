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
      headline="Seven colours to choose from."
      intro="Colour on a uPVC frame is a long-term choice. We picked seven — three warm woods for classic interiors, two greys for modern homes, plus black and white."
      types={[
        { name: "Warm woods", benefit: "Walnut, Mahogany, Golden Oak, Dark Oak.", detail: "Wood-look finish with real grain feel. Doesn't fade in sun. Tested in Indian weather." },
        { name: "Greys", benefit: "Anthracite Grey and Jet Black.", detail: "The modern favourite. Looks like metal from a distance. Ages well on south-facing walls." },
        { name: "Classic", benefit: "Pure White.", detail: "The one that blends in. Reflects heat. Brightens rooms. Still looks new ten years later." },
      ]}
      benefits={[
        { label: "Sun resistance", value: 92, copy: "Colours tested against Indian summers." },
        { label: "Colour lasting", value: 90, copy: "Ten years with no fading or peeling." },
        { label: "Cleaning", value: 95, copy: "Wipe with a damp cloth. That's all." },
        { label: "Colour match", value: 88, copy: "Every batch matches the last — the tenth frame looks like the first." },
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
