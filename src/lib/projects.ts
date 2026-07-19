import dsu from "@/assets/projects/dsu-university-deoghar.jpg.asset.json";
import jeesa from "@/assets/projects/hotel-jeesa-deoghar.jpg.asset.json";

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
];
