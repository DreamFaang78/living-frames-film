export const SITE = {
  name: "Nicwin",
  fullName: "Nicwin Windows & Door Systems",
  tagline: "Always looking for the better.",
  description:
    "Engineered for monsoons. Designed for modern Indian life. Premium uPVC, Aluminium and Steel windows and doors from Deoghar, Jharkhand.",
  whatsappUrl: "https://wa.me/919234233892",
  email: "nicwinsystems@gmail.com",
  phones: [
    { label: "Deoghar", number: "+91-9234233892", tel: "+919234233892" },
    { label: "Jamui", number: "+91-8002003892", tel: "+918002003892" },
    { label: "Dhanbad", number: "+91-9801753892", tel: "+919801753892" },
    { label: "Enquiries", number: "+91-6206697588", tel: "+916206697588" },
  ],
  hours: "Mon–Sat · 9:30 – 18:30",
  factory: {
    label: "Factory",
    address:
      "Nayachitkat, Rikhiya Dumma Border Road, Near-Navoday School Rikhiya, Deoghar, Jharkhand – 814113",
    mapQuery: "Nayachitkat+Rikhiya+Deoghar+Jharkhand+814113",
  },
  branch: {
    label: "Branch Office",
    address:
      "Boss Gym, Near Sisodiya Petrol Pump, Katouna, Jamui, Bihar – 811313",
    mapQuery: "Katouna+Jamui+Bihar+811313",
  },
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/channel/UCAHR_e9hu4v9Tll0L94jn2Q" },
    { label: "Instagram", href: "https://www.instagram.com/nicwinsystems/?hl=en" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61558177406089" },
  ],
} as const;

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
    heading: "uPVC",
    tagline: "Silent, sealed, quietly luxurious.",
    to: "/products/upvc",
    children: [
      { to: "/products/upvc/windows", label: "Windows" },
      { to: "/products/upvc/doors", label: "Doors" },
      { to: "/products/upvc/colors", label: "Colours" },
    ],
  },
  {
    heading: "Aluminium",
    tagline: "Slim frames. Wide views. Modern lines.",
    to: "/products/aluminium",
    children: [
      { to: "/products/aluminium/windows", label: "Windows" },
      { to: "/products/aluminium/doors", label: "Doors" },
      { to: "/products/aluminium/colors", label: "Colours" },
    ],
  },
  {
    heading: "Steel",
    tagline: "The first thing your home says. And the last.",
    to: "/products/steel",
    children: [
      { to: "/products/steel", label: "Security Solid" },
      { to: "/products/steel", label: "Designer Panel" },
      { to: "/products/steel", label: "Glass Insert" },
    ],
  },
] as const;
