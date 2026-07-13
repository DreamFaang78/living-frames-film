import { createFileRoute } from "@tanstack/react-router";
import { ProductCategoryPage } from "@/components/site/ProductCategoryPage";

export const Route = createFileRoute("/products/upvc/windows")({
  head: () => ({
    meta: [
      { title: "uPVC Windows — 6 types built for Indian homes" },
      {
        name: "description",
        content:
          "Casement, Fixed, Sliding, French, Tilt & Turn, Top Hung. Every uPVC window Nicwin makes, with its own quiet reason to exist.",
      },
      { property: "og:title", content: "Nicwin uPVC Windows" },
    ],
    links: [{ rel: "canonical", href: "/products/upvc/windows" }],
  }),
  component: () => (
    <ProductCategoryPage
      material="uPVC"
      variant="teal"
      kicker="uPVC · Windows"
      headline="Six ways to invite the light in."
      intro="Every Nicwin uPVC window is a decision about air, sound, and view — not a decision about a hole in the wall. Six formats, each designed for a specific rhythm of Indian life, from the tight kitchen to the open puja room."
      types={[
        { name: "Casement", benefit: "The classic sash. Perfected.", detail: "Full opening for maximum ventilation. Multi-point locking, EPDM twin-seal, effortless single-hand operation." },
        { name: "Fixed", benefit: "A framed view. Nothing else.", detail: "Zero thermal loss, maximum daylight, minimal frame profile. Ideal above staircases and as picture windows facing a courtyard." },
        { name: "Sliding", benefit: "Space that doesn't ask for space.", detail: "Two, three or four track configurations. Anti-lift roller carriages, interlock rain flashing, silky glide over 50,000+ cycles." },
        { name: "French", benefit: "Two sashes. One grand gesture.", detail: "A pair of casements that meet without a mullion. Astragal seal, concealed hinges, matching floor-to-ceiling scale for double-height rooms." },
        { name: "Tilt & Turn", benefit: "Ventilate on rainy days. Clean on sunny ones.", detail: "European tilt for secure top ventilation. Full turn for cleaning both sides from inside — a small mercy for high floors." },
        { name: "Top Hung", benefit: "Rain out. Air in.", detail: "Awning-style top hinge. Perfect for bathrooms and kitchens — leave open during a shower, the water still goes down the wall, not in." },
      ]}
      benefits={[
        { label: "Thermal", value: 90, copy: "Multi-chamber profile + optional DGU dramatically cuts heat gain." },
        { label: "Acoustic", value: 88, copy: "Twin gaskets + laminated PVB glass drop road noise by up to 38 dB." },
        { label: "Weather", value: 95, copy: "Wind-driven rain tested to IS-4351 class A. Zero seepage." },
        { label: "Security", value: 85, copy: "Multi-point locking, steel-reinforced sash, forged handles." },
      ]}
      colors={undefined}
      spec={[
        { k: "5-chamber", v: "Profile system" },
        { k: "1.5mm", v: "Galvanised steel core" },
        { k: "Lead-free", v: "Green compound" },
        { k: "10-yr", v: "Practical warranty" },
      ]}
    />
  ),
});
