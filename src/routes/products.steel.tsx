import { createFileRoute } from "@tanstack/react-router";
import { ProductCategoryPage } from "@/components/site/ProductCategoryPage";

export const Route = createFileRoute("/products/steel")({
  head: () => ({
    meta: [
      { title: "Steel Doors — Nicwin" },
      {
        name: "description",
        content:
          "Nicwin Steel Doors — Security Solid, Designer Panel, Glass Insert, Fortified Entry, Heritage. The first thing your home says.",
      },
      { property: "og:title", content: "Nicwin Steel Doors" },
    ],
    links: [{ rel: "canonical", href: "/products/steel" }],
  }),
  component: () => (
    <ProductCategoryPage
      material="Steel"
      variant="gold"
      kicker="Steel · Doors"
      headline="The first hello. The last word."
      intro="A steel door is a promise the whole street can see. Nicwin's steel range is engineered like a bank vault and finished like a designer object — five formats for every kind of entrance, from apartment door to bungalow gate."
      types={[
        { name: "Security Solid", benefit: "Bank-vault feel, at the front door.", detail: "16-gauge cold-rolled steel skin over a 65mm honeycomb-and-steel core. Multi-point locking with a hardened steel deadbolt and pin-in-cylinder key system." },
        { name: "Designer Panel", benefit: "Security dressed as a design object.", detail: "Steel core clad in laminated CNC-routed panels — teak, walnut, matte-black. Reads as a designer door, weighs like a safe." },
        { name: "Glass Insert", benefit: "Strength, softened by light.", detail: "Toughened laminated glass panel set into a heavy steel frame. Ideal for entrances that need daylight without giving up security." },
        { name: "Fortified Entry", benefit: "For homes on ground floor and street corners.", detail: "Reinforced hinges (three heavy 4-inch), anti-drill escutcheon, hardened steel spy-guard. The full paranoia package, hidden in a beautiful door." },
        { name: "Heritage", benefit: "The traditional Indian entrance, engineered.", detail: "Panelled fascia inspired by Rajasthani and Chettinad doorways. Brass hardware, hand-finished detailing, modern steel core." },
      ]}
      benefits={[
        { label: "Structural strength", value: 98, copy: "16-gauge cold-rolled steel; tested to industry break-in standards." },
        { label: "Security hardware", value: 95, copy: "Multi-point locking, hardened deadbolt, anti-drill escutcheon." },
        { label: "Weather", value: 90, copy: "Powder-coat and marine-grade finishes for coastal use." },
        { label: "Design range", value: 92, copy: "Five distinct formats — from vault-like to hand-crafted." },
      ]}
      spec={[
        { k: "16-gauge", v: "Cold-rolled steel" },
        { k: "65mm", v: "Reinforced core" },
        { k: "Multi-pt", v: "Locking" },
        { k: "10-yr", v: "Warranty" },
      ]}
    />
  ),
});
