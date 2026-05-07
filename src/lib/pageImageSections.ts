import type { ServiceSlug } from "@/content/services";

/**
 * Stable placeholder images live under `public/images/placeholders/` (committed SVGs).
 *
 * For final photography: add optimized JPG/WebP under `public/images/pages/` using the
 * filenames below, then switch `placeholderSrc` to that path in this file (or pass a
 * prop override from the page later).
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
    /** Recommended path for the client’s final image file */
    recommendedClientPath: string;
    caption: string;
    alt: string;
  }
> = {
  home: {
    placeholderSrc: "/images/placeholders/home-global.svg",
    recommendedClientPath: "public/images/pages/home-global-consultation.jpg",
    caption: "Global mobility & consultation — replace with your hero or campaign photo.",
    alt: "Abstract global migration and professional consultation theme",
  },
  about: {
    placeholderSrc: "/images/placeholders/about-office.svg",
    recommendedClientPath: "public/images/pages/about-team-office.jpg",
    caption: "Team & office — replace with team photo or consultancy workspace.",
    alt: "Office and professional team style placeholder",
  },
  services: {
    placeholderSrc: "/images/placeholders/services-docs.svg",
    recommendedClientPath: "public/images/pages/services-visas-documents.jpg",
    caption: "Visas & documents — replace with consultation desk or document review scene.",
    alt: "Visa consultation and documents placeholder",
  },
  contact: {
    placeholderSrc: "/images/placeholders/contact-support.svg",
    recommendedClientPath: "public/images/pages/contact-office-location.jpg",
    caption: "Office & support — replace with RJ Mall office exterior or reception.",
    alt: "Customer support and office location placeholder",
  },
  "immigration-citizenship": {
    placeholderSrc: "/images/placeholders/svc-immigration.svg",
    recommendedClientPath: "public/images/pages/service-immigration-citizenship.jpg",
    caption: "Immigration & citizenship — replace with passport/residency themed imagery.",
    alt: "Immigration and citizenship themed placeholder",
  },
  "work-permits": {
    placeholderSrc: "/images/placeholders/svc-work.svg",
    recommendedClientPath: "public/images/pages/service-work-permits.jpg",
    caption: "Work permits — replace with professional workplace or employment imagery.",
    alt: "Work permits and employment placeholder",
  },
  "visit-visa": {
    placeholderSrc: "/images/placeholders/svc-visit.svg",
    recommendedClientPath: "public/images/pages/service-visit-visa.jpg",
    caption: "Visit visa — replace with travel/tourism themed photography.",
    alt: "Travel and visit visa placeholder",
  },
  "study-visa": {
    placeholderSrc: "/images/placeholders/svc-study.svg",
    recommendedClientPath: "public/images/pages/service-study-visa.jpg",
    caption: "Study visa — replace with students or campus imagery.",
    alt: "Study abroad and student visa placeholder",
  },
  travel: {
    placeholderSrc: "/images/placeholders/svc-travel.svg",
    recommendedClientPath: "public/images/pages/service-travel.jpg",
    caption: "Travel services — replace with airline tickets or travel planning imagery.",
    alt: "Travel planning and flights placeholder",
  },
};
