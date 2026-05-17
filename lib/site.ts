export const siteConfig = {
  name: "HOSTKECH CONCIERGERIE",
  shortName: "HOSTKECH",
  tagline: "Conciergerie de luxe & gestion Airbnb à Marrakech",
  description:
    "HOSTKECH CONCIERGERIE accompagne les propriétaires à Marrakech : gestion locative courte durée, conciergerie Airbnb, optimisation des revenus et expérience voyageur premium.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hostkech.com",
  locale: "fr_FR",
  language: "fr",
  email: "contact@hostkech.com",
  phone: "+212 666-641670",
  phoneTel: "+212666641670",
  whatsapp: "212666641670",
  address: {
    streetAddress: "Marrakech",
    addressLocality: "Marrakech",
    addressRegion: "Marrakech-Safi",
    postalCode: "40000",
    addressCountry: "MA",
  },
  social: {
    instagram: "https://instagram.com/hostkech",
    linkedin: "https://linkedin.com/company/hostkech",
  },
  legal: {
    companyName: "HOSTKECH CONCIERGERIE",
    legalForm: "Société à responsabilité limitée (SARL)",
    headquarters: "Marrakech, Royaume du Maroc",
    activity:
      "Conciergerie de luxe, gestion locative courte durée et optimisation de locations saisonnières (Airbnb, Booking).",
    publicationDirector: "Le représentant légal de HOSTKECH CONCIERGERIE",
    hosting: {
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
      website: "https://vercel.com",
    },
    // Identifiants administratifs marocains — à compléter si applicable
    ice: null as string | null,
    rc: null as string | null,
    if: null as string | null,
    cnss: null as string | null,
  },
  brand: {
    logoPng: "/hostkechLogopng.png",
    logoJpeg: "/hostkechLogo.jpeg",
    logoWidth: 500,
    logoHeight: 500,
    logoAlt:
      "HOSTKECH CONCIERGERIE — L'exigence du détail, l'art de l'accueil",
    tagline: "L'exigence du détail, l'art de l'accueil",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const primaryKeywords = [
  "conciergerie Marrakech",
  "conciergerie Airbnb Marrakech",
  "gestion Airbnb Marrakech",
  "gestion locative Marrakech",
  "location saisonnière Marrakech",
  "conciergerie de luxe Marrakech",
  "gestion courte durée Marrakech",
  "conciergerie Maroc",
  "optimisation annonce Airbnb Marrakech",
  "gestion location courte durée Marrakech",
] as const;
