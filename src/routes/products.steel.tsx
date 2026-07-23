import { createFileRoute } from "@tanstack/react-router";
import { ProductCategoryPage } from "@/components/site/ProductCategoryPage";
import steelDoor from "@/assets/products/steel-ornamental-door.jpeg.asset.json";


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
      headline="The first thing your home says."
      intro="A steel door is a promise everyone on the street can see. Our range is built strong and finished beautifully — five types for every kind of entrance, from apartment door to bungalow gate."
      types={[
        { name: "Security Solid", benefit: "Bank-vault strength at the front door.", detail: "16-gauge cold-rolled steel over a 65mm reinforced core. Multi-point lock with hardened deadbolt and pin-cylinder key." },
        { name: "Designer Panel", benefit: "Strong door that looks like a designer piece.", detail: "Steel core with wood panels — teak, walnut, or matte black. Looks like a designer door. Feels like a safe." },
        { name: "Glass Insert", benefit: "Strong but lets light in.", detail: "Toughened laminated glass in a heavy steel frame. Good for entrances that want daylight without losing security." },
        { name: "Fortified Entry", benefit: "For ground-floor homes and street corners.", detail: "Reinforced 4-inch hinges, anti-drill lock cover, hardened steel spy-guard. Extra safety, hidden inside a beautiful door." },
        { name: "Heritage", benefit: "Traditional Indian design, built modern.", detail: "Panel design inspired by Rajasthani and Chettinad doorways. Brass hardware, hand-finished details, modern steel inside." },
      ]}
      benefits={[
        { label: "Strength", value: 98, copy: "16-gauge cold-rolled steel. Tested to industry break-in standards." },
        { label: "Security hardware", value: 95, copy: "Multi-point lock, hardened deadbolt, anti-drill cover." },
        { label: "Weather", value: 90, copy: "Powder-coat and marine-grade finishes for coastal use." },
        { label: "Design choice", value: 92, copy: "Five different styles — from vault-like to hand-crafted." },
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
