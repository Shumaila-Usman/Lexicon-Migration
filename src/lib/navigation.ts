const whatsappPrefill =
  "Hello Lexicon Migration, I would like to get consultation regarding visa and immigration services.";

export const siteConfig = {
  name: "Lexicon Migration",
  tagline: "Your Future Starts Here",
  footerTagline: "Immigration & mobility consultancy — Australia & global",
  /** Display & tel: (Pakistan mobile — no spaces for tel: compatibility) */
  phone: "03009261437",
  email: "Lexiconmigration@gmail.com",
  /** WhatsApp deep link with prefilled message (digits only after wa.me/) */
  whatsapp: `https://wa.me/923009261437?text=${encodeURIComponent(whatsappPrefill)}`,
  address:
    "F-64, First Floor, RJ Mall, Main Rashid Minhas Road, Karachi",
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

/** Header & footer primary navigation (same four items). */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

/** Footer “Services” column — optional links under main nav (not duplicated in header). */
export const footerServiceLinks: NavItem[] = [
  { label: "All services", href: "/services" },
  { label: "Immigration & Citizenship", href: "/services/immigration-citizenship" },
  { label: "Work Permits", href: "/services/work-permits" },
  { label: "Visit Visa", href: "/services/visit-visa" },
  { label: "Study Visa", href: "/services/study-visa" },
  { label: "Travel Services", href: "/services/travel" },
];

/** @deprecated Use footerServiceLinks — kept alias for any stale imports */
export const serviceDropdownItems = footerServiceLinks;

/** Alias — footer strip uses same four links as header */
export const footerNavLinks = primaryNav;
