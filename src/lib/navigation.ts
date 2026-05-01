export const siteConfig = {
  name: "Lexicon Migration",
  tagline: "Your Future Starts Here",
  footerTagline: "Immigration & mobility consultancy — Australia & global",
  phone: "+61 000 000 000", // TODO: Replace with client phone
  email: "hello@lexiconmigration.com", // TODO: Replace with client email
  emailSecondary: "support@lexiconmigration.com", // TODO: Optional second inbox
  whatsapp: "https://wa.me/61000000000", // TODO: Replace with client WhatsApp link
  address: "Suite 00, 000 Example Street, Sydney NSW 2000, Australia", // TODO: Replace
  social: {
    linkedin: "#", // TODO
    facebook: "#", // TODO
    instagram: "#", // TODO
  },
  /** Consultation hours — TODO: confirm with client */
  hours: [
    { day: "Mon – Fri", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export type NavItem = { label: string; href: string };

/** Top bar: Home, About, Services (dropdown), Contact */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Items inside the Services dropdown (first row = overview). */
export const serviceDropdownItems: NavItem[] = [
  { label: "All services", href: "/services" },
  { label: "Immigration & Citizenship", href: "/services/immigration-citizenship" },
  { label: "Work Permits", href: "/services/work-permits" },
  { label: "Visit Visa", href: "/services/visit-visa" },
  { label: "Study Visa", href: "/services/study-visa" },
  { label: "Travel", href: "/services/travel" },
];

/** Footer middle row — uppercase style in UI. */
export const footerNavLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
