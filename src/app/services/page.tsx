import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { FadeIn } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";
import { WarmSection } from "@/components/layout/WarmSection";
import { TealBandSection } from "@/components/layout/TealBandSection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | Lexicon Migration",
  description:
    "Immigration and citizenship, work permits, visit and study visas, and travel services—with structured guidance from Lexicon Migration.",
  openGraph: {
    title: "Services | Lexicon Migration",
    description:
      "Explore immigration, work, visitor, student, and travel support tailored to your goals.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="What we offer"
        title="Services built around your journey"
        subtitle="From eligibility reviews to documentation assistance and travel coordination—clear communication and careful preparation at each stage."
        align="left"
        primaryCta={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />
      <TealBandSection className="py-16 sm:py-20">
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Explore our core services
            </h2>
            <p className="mt-3 text-white/80">
              Select a service to see benefits, typical checklists, and how we
              work with you. Content can be refined as your programs and regions
              are finalized.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => (
              <ServiceCard
                key={s.slug}
                title={s.shortTitle}
                description={s.cardDescription}
                href={`/services/${s.slug}`}
                iconKey={s.iconKey}
                index={index}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </TealBandSection>

      <WarmSection className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/contact"
              className="inline-flex max-w-full items-center justify-center rounded-full border border-[#c4b8a8] bg-[#f0ebe3] px-4 py-3 text-center text-xs font-semibold leading-snug text-[#1a1814] shadow-sm transition hover:bg-[#e5dfd4] sm:px-6 sm:text-sm"
            >
              Not sure where to start? Request a consultation
            </Link>
          </FadeIn>
        </div>
      </WarmSection>
      <CTASection
        variant="promo"
        badge="NEXT STEP"
        title="Tell us your goal — we will map"
        titleItalic="practical next steps"
        description="Every file is different. A short consultation helps us understand your timeline, destination, and the evidence you already have."
        primaryLabel="Book now"
        primaryHref="/contact"
        secondaryLabel="Talk to us"
        secondaryHref="/contact"
      />
    </>
  );
}
