import type { ServiceSlug } from "@/content/services";

/**
 * Page & hero imagery under `public/images/pages/`.
 * To swap a photo: replace the file on disk or change `src` here.
 */
export type PageImagePreset =
  | "home"
  | "about"
  | "services"
  | "contact"
  | ServiceSlug;

export const PAGE_IMAGE_ASSETS: Record<
  PageImagePreset,
  {
    placeholderSrc: string;
    /** On-disk path (for editors / handoff) */
    recommendedClientPath: string;
    caption: string;
    alt: string;
  }
> = {
  home: {
    placeholderSrc: "/images/pages/home-global-consultation.jpg",
    recommendedClientPath: "public/images/pages/home-global-consultation.jpg",
    caption: "Global mobility and professional consultation.",
    alt: "Professional immigration consultation and global mobility",
  },
  about: {
    placeholderSrc: "/images/pages/about-team-office.jpg",
    recommendedClientPath: "public/images/pages/about-team-office.jpg",
    caption: "Team and office — Lexicon Migration.",
    alt: "Lexicon Migration team and office environment",
  },
  services: {
    placeholderSrc: "/images/pages/services-visas-documents.jpg",
    recommendedClientPath: "public/images/pages/services-visas-documents.jpg",
    caption: "Visa consultation and documentation support.",
    alt: "Visa consultation, documents, and planning",
  },
  contact: {
    placeholderSrc: "/images/pages/contact-office-location.jpg",
    recommendedClientPath: "public/images/pages/contact-office-location.jpg",
    caption: "Office location and client support.",
    alt: "Lexicon Migration office and customer support",
  },
  "immigration-citizenship": {
    placeholderSrc: "/images/pages/service-immigration-citizenship.jpg",
    recommendedClientPath: "public/images/pages/service-immigration-citizenship.jpg",
    caption: "Immigration and citizenship pathways.",
    alt: "Immigration and citizenship services",
  },
  "work-permits": {
    placeholderSrc: "/images/pages/service-work-permits.jpg",
    recommendedClientPath: "public/images/pages/service-work-permits.jpg",
    caption: "Work permits and employment mobility.",
    alt: "Work permits and professional employment",
  },
  "visit-visa": {
    placeholderSrc: "/images/pages/service-visit-visa.jpg",
    recommendedClientPath: "public/images/pages/service-visit-visa.jpg",
    caption: "Visit visas and travel.",
    alt: "Visit visa and travel planning",
  },
  "study-visa": {
    placeholderSrc: "/images/pages/service-study-visa.jpg",
    recommendedClientPath: "public/images/pages/service-study-visa.jpg",
    caption: "Study visas and education abroad.",
    alt: "Study visa and international education",
  },
  travel: {
    placeholderSrc: "/images/pages/service-travel.jpg",
    recommendedClientPath: "public/images/pages/service-travel.jpg",
    caption: "Travel services and trip coordination.",
    alt: "Travel services and itinerary planning",
  },
};

/** Full-bleed hero background + alt text */
export function getHeroBackground(preset: PageImagePreset): {
  imageSrc: string;
  imageAlt: string;
} {
  const a = PAGE_IMAGE_ASSETS[preset];
  return { imageSrc: a.placeholderSrc, imageAlt: a.alt };
}
