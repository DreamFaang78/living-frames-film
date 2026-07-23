import { createFileRoute } from "@tanstack/react-router";
import { ProductCategoryPage } from "@/components/site/ProductCategoryPage";
import { WindowGallery } from "@/components/site/WindowGallery";
import seaview from "@/assets/products/gallery/upvc-window-seaview.png.asset.json";
import tiltTurn from "@/assets/products/tilt-turn-sunset.jpeg.asset.json";
import upvcSecure from "@/assets/products/upvc-secure.png.asset.json";
import upvcEco from "@/assets/products/upvc-eco.png.asset.json";
import french from "@/assets/products/french-doors.png.asset.json";
import aluminium from "@/assets/products/aluminium-system.png.asset.json";

const galleryImages = [
  { src: seaview.url, alt: "Premium uPVC casement window with panoramic sea view by NICWIN" },
  { src: tiltTurn.url, alt: "Tilt & turn uPVC window at sunset — energy efficient glass" },
  { src: upvcSecure.url, alt: "Secure multi-point locking uPVC window installed in a modern home" },
  { src: upvcEco.url, alt: "Eco-friendly lead-free uPVC bay window with double glazing" },
  { src: french.url, alt: "French-style uPVC window pair with slim mullion" },
  { src: aluminium.url, alt: "Slim-frame uPVC picture window framing a garden view" },
];

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
      { property: "og:image", content: seaview.url },
      { name: "twitter:image", content: seaview.url },
    ],
    links: [{ rel: "canonical", href: "/products/upvc/windows" }],
  }),
  component: () => (
    <>
      <ProductCategoryPage
        material="uPVC"
        variant="teal"
        kicker="uPVC · Windows"
        headline="Six window types. Pick what fits."
        intro="Every Nicwin uPVC window is picked to suit a specific room — kitchen, bedroom, puja room, or living room. Six shapes to choose from."
        types={[
          { name: "Casement", benefit: "The classic side-opening window.", detail: "Opens fully for maximum fresh air. Multi-point lock. Two rubber seals. Easy to open with one hand." },
          { name: "Fixed", benefit: "For light. Doesn't open.", detail: "Maximum daylight, minimum frame. Great above staircases or facing a garden." },
          { name: "Sliding", benefit: "Saves space. Slides sideways.", detail: "2, 3 or 4 track options. Stainless steel wheels. Rain drainage. Smooth for 50,000+ uses." },
          { name: "French", benefit: "Two windows that open together.", detail: "A pair of side-hung windows without a bar in the middle. Great for tall openings." },
          { name: "Tilt & Turn", benefit: "Tilt for air. Turn to open fully.", detail: "Tilt open at the top for gentle air even in rain. Turn fully to clean both sides from inside." },
          { name: "Top Hung", benefit: "Air in. Rain out.", detail: "Hinged at the top. Perfect for bathrooms and kitchens — leave it open in the shower without rain coming in." },
        ]}
        benefits={[
          { label: "Heat", value: 90, copy: "Insulated frame plus double glass keeps a lot of heat out." },
          { label: "Sound", value: 88, copy: "Two seals and thick glass cut road noise by up to 38 dB." },
          { label: "Weather", value: 95, copy: "Tested against heavy wind-driven rain. No leaks." },
          { label: "Security", value: 85, copy: "Multi-point lock, steel inside the frame, strong handles." },
        ]}
        colors={undefined}
        spec={[
          { k: "5-chamber", v: "Profile system" },
          { k: "1.5mm", v: "Galvanised steel core" },
          { k: "Lead-free", v: "Green compound" },
          { k: "10-yr", v: "Practical warranty" },
        ]}
      />
      <WindowGallery
        images={galleryImages}
        kicker="Windows · Gallery"
        heading="See the windows in real homes."
        intro="Every frame here is a Nicwin uPVC window. Click any image to view it full size."
      />
    </>
  ),
});

