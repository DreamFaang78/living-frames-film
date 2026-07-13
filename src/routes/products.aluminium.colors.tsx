import { createFileRoute } from "@tanstack/react-router";
import { ProductCategoryPage } from "@/components/site/ProductCategoryPage";

export const Route = createFileRoute("/products/aluminium/colors")({
  head: () => ({
    meta: [
      { title: "Aluminium Finishes — Nicwin" },
      {
        name: "description",
        content:
          "Five architect-favoured aluminium finishes: Gold Champagne, Black, Brown, Diamond Grey, White. Powder-coated, UV-stable.",
      },
      { property: "og:title", content: "Nicwin Aluminium Finishes" },
    ],
    links: [{ rel: "canonical", href: "/products/aluminium/colors" }],
  }),
  component: () => (
    <ProductCategoryPage
      material="Aluminium"
      variant="night"
      kicker="Aluminium · Finishes"
      headline="Five finishes. All architect-approved."
      intro="Aluminium's finish is what people actually see. We curated five — one warm, three neutral, and one classic — all powder-coated, all UV-stable, all specified by architects working on serious Indian projects."
      types={[
        { name: "Gold Champagne", benefit: "Warm metal, quietly.", detail: "A soft champagne-gold that reads as brass at a distance. Perfect against sandstone and warm wood interiors." },
        { name: "Neutral trio", benefit: "Black, Brown, Diamond Grey.", detail: "The specifier's shortlist. Deep matte black for contemporary lines, warm brown for teak interiors, diamond grey for anything modern." },
        { name: "White", benefit: "The reflection specialist.", detail: "Pure powder-coated white. Reflects heat, brightens rooms, and reads clean against any facade." },
      ]}
      benefits={[
        { label: "UV Stability", value: 94, copy: "Powder-coat tested against Indian summers." },
        { label: "Colour retention", value: 92, copy: "Ten years of held colour — no chalking, no fade." },
        { label: "Scratch resistance", value: 88, copy: "Hard-cured finish rated for coastal and dusty environments." },
        { label: "Match consistency", value: 90, copy: "Batch-controlled coatings for perfect frame-to-frame match." },
      ]}
      colorHeading="The five"
      colors={[
        { name: "Gold Champagne", hex: "#C9A227" },
        { name: "Black", hex: "#0C0C0E" },
        { name: "Brown", hex: "#4B2F1E" },
        { name: "Diamond Grey", hex: "#7A7F84" },
        { name: "White", hex: "#F5F2EC" },
      ]}
      spec={[
        { k: "5", v: "Curated finishes" },
        { k: "80μm", v: "Powder-coat thickness" },
        { k: "10-yr", v: "Colour warranty" },
        { k: "RAL-matched", v: "On request" },
      ]}
    />
  ),
});
