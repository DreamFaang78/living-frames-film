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
      headline="Five colours. Picked by architects."
      intro="The colour is what people actually see. We picked five — one warm, three neutrals, and one classic — all powder-coated and long-lasting in Indian weather."
      types={[
        { name: "Gold Champagne", benefit: "Warm metal, softly.", detail: "A soft champagne-gold that looks like brass from a distance. Great with sandstone and warm wood interiors." },
        { name: "Neutrals", benefit: "Black, Brown, Diamond Grey.", detail: "The go-to choices. Deep matte black for modern homes, warm brown for teak interiors, diamond grey for anything modern." },
        { name: "White", benefit: "The bright option.", detail: "Powder-coated pure white. Reflects heat, brightens rooms, looks clean on any wall." },
      ]}
      benefits={[
        { label: "Sun resistance", value: 94, copy: "Powder-coat tested against Indian summers." },
        { label: "Colour lasting", value: 92, copy: "Ten years without fading." },
        { label: "Scratch resistance", value: 88, copy: "Hard finish, good for coastal and dusty places." },
        { label: "Colour match", value: 90, copy: "Every batch matches perfectly — frame to frame." },
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
