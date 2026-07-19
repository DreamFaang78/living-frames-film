import dsu from "@/assets/projects/dsu-university-deoghar.jpg.asset.json";
import jeesa from "@/assets/projects/hotel-jeesa-deoghar.jpg.asset.json";
import ashoka from "@/assets/projects/hotel-ashoka-place.jpg.asset.json";
import saivite from "@/assets/projects/sai-vite-chattisi-bilasi.jpg.asset.json";
import carmel from "@/assets/projects/st-carmel-school-giridih.jpg.asset.json";

export type RecentProject = {
  id: string;
  name: string;
  location: string;
  caption?: string;
  image: string;
};

export const RECENT_PROJECTS: RecentProject[] = [
  {
    id: "dsu-university-deoghar",
    name: "DSU University Project",
    location: "Deoghar",
    caption: "Institutional-scale glazing across a full university campus block.",
    image: dsu.url,
  },
  {
    id: "hotel-jeesa-deoghar",
    name: "Hotel Jeesa",
    location: "Deoghar",
    caption: "Full-height glass frontage for a hospitality build in the heart of Deoghar.",
    image: jeesa.url,
  },
  {
    id: "hotel-ashoka-place",
    name: "Hotel Ashoka Place",
    location: "Deoghar",
    caption: "Full glass entrance facade for a hospitality build.",
    image: ashoka.url,
  },
  {
    id: "sai-vite-chattisi-bilasi",
    name: "Sai Vite Project",
    location: "Chattisi Bilasi",
    caption: "Windows across a multi-storey residential tower.",
    image: saivite.url,
  },
  {
    id: "st-carmel-school-giridih",
    name: "St. Carmel School",
    location: "Giridih",
    caption: "Glass railings and window systems across a school building.",
    image: carmel.url,
  },
];
