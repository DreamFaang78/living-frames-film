export const SITE = {
  name: "Nicwin",
  fullName: "Nicwin Windows & Door Systems",
  tagline: "Always looking for the better.",
  description:
    "Strong uPVC, Aluminium and Steel windows and doors. Built for Indian weather. Made in Deoghar, Jharkhand. Delivered across India.",
  whatsappUrl: "https://wa.me/917909039070",
  email: "nicwinsystems@gmail.com",
  phones: [
    { label: "Primary", number: "+91 79090 39070", tel: "+917909039070" },
    { label: "Enquiries", number: "+91 92205 33892", tel: "+919220533892" },
  ],
  hours: "Mon–Sat · 9:30 – 18:30",
  factory: {
    label: "Factory",
    address:
      "Nayachitkat, Rikhiya Dumma Border Road, Near-Navoday School Rikhiya, Deoghar, Jharkhand – 814113",
    mapQuery: "Nayachitkat+Rikhiya+Deoghar+Jharkhand+814113",
  },
  showroom: {
    label: "Experience Center & Showroom",
    address:
      "Sparsh Complex, Deoghar College Road, Near Daffodil Garden, Tiwari Chowk, Deoghar, Jharkhand – 814112",
    mapQuery:
      "Sparsh+Complex+Deoghar+College+Road+Tiwari+Chowk+Deoghar+Jharkhand+814112",
  },
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/channel/UCAHR_e9hu4v9Tll0L94jn2Q" },
    { label: "Instagram", href: "https://www.instagram.com/nicwinsystems/?hl=en" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61558177406089" },
  ],
} as const;

// Back-compat alias — some routes still reference SITE.branch.
// Points to the new Experience Center & Showroom.
// Deprecated: use SITE.showroom directly.
export const LEGACY_BRANCH_ALIAS = SITE.showroom;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products", mega: true },
  { to: "/why-nicwin", label: "Why Nicwin" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const MEGA = [
  {
    heading: "Windows & Doors",
    tagline: "Frames built for Indian weather.",
    to: "/products",
    children: [
      { to: "/products/upvc", label: "uPVC Windows & Doors" },
      { to: "/products/aluminium", label: "Aluminium Windows & Doors" },
      { to: "/products/steel", label: "Steel Doors" },
      { to: "/products#wpc-doors", label: "WPC Doors" },
    ],
  },
  {
    heading: "Mesh & Screens",
    tagline: "Keep mosquitoes out. Keep the view in.",
    to: "/products#pleated-mesh",
    children: [
      { to: "/products#pleated-mesh", label: "Pleated Mesh" },
    ],
  },
  {
    heading: "Glass Solutions",
    tagline: "Light through. Nothing in the way.",
    to: "/products#glass-partition",
    children: [
      { to: "/products#glass-partition", label: "Glass Partition" },
      { to: "/products#glass-railing", label: "Glass Railing" },
    ],
  },
  {
    heading: "Facade & Cladding",
    tagline: "A cleaner face for the building.",
    to: "/products#acp-sheet",
    children: [
      { to: "/products#acp-sheet", label: "ACP Sheet" },
    ],
  },
] as const;
