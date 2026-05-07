import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  ListChecks,
  Headphones,
  UserCheck,
  MapPin,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { PageImageSection } from "@/components/PageImageSection";
import { WarmSection } from "@/components/layout/WarmSection";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/navigation";
import { getHeroBackground } from "@/lib/pageImageSections";

const homeHero = getHeroBackground("home");

export const metadata: Metadata = {
  description:
    "Start your global journey with Lexicon Migration—professional guidance for immigration, citizenship, work permits, study visas, visit visas, and travel solutions.",
};

const trustBadges = [
  { label: "Expert Guidance", icon: Shield },
  { label: "Transparent Process", icon: ListChecks },
  { label: "End-to-End Support", icon: Headphones },
  { label: "Personalized Consultation", icon: UserCheck },
];

const processSteps = [
  {
    title: "Free Consultation",
    description:
      "Share your goals and timeline; we outline realistic pathways and what evidence you may need.",
  },
  {
    title: "Profile Assessment",
    description:
      "Structured eligibility review against program criteria—no guesswork on what comes first.",
  },
  {
    title: "Documentation",
    description:
      "Checklists, templates where helpful, and careful review so forms and attachments align.",
  },
  {
    title: "Application Submission",
    description:
      "Lodgement support where applicable, with quality checks before you confirm submission.",
  },
  {
    title: "Updates & Final Decision",
    description:
      "Guidance on requests for further information and what to expect as authorities assess your file.",
  },
];

const destinations = [
  { name: "Australia", note: "Skilled, student, visitor, and family routes" },
  { name: "Canada", note: "Express Entry context and study pathways" },
  { name: "United Kingdom", note: "Work, study, and visitor categories" },
  { name: "United States", note: "Visitor and study-related guidance" },
  { name: "Europe", note: "Schengen visitors and selected study hubs" },
  { name: "New Zealand", note: "Skilled, study, and visitor preparation" },
];

const whyPoints = [
  {
    title: "Clarity before commitment",
    body: "We help you understand trade-offs between pathways so you can decide with confidence—not rush.",
  },
  {
    title: "Documentation that tells one story",
    body: "Consistency across dates, employment history, and supporting letters reduces avoidable queries.",
  },
  {
    title: "Human communication",
    body: "You receive plain-language updates and a single thread of accountability for your case team.",
  },
  {
    title: "Ethical framing",
    body: "We avoid unrealistic promises. Authorities make final decisions; we focus on preparation and care.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        imageSrc={homeHero.imageSrc}
        imageAlt={homeHero.imageAlt}
        eyebrow="Lexicon Migration"
        title="Start your global journey with clarity and confidence"
        subtitle="Professional guidance for immigration, citizenship, work permits, study visas, visit visas, and travel solutions—structured assessments, documentation support, and honest timelines."
        align="left"
        primaryCta={{ label: "Book appointment", href: "/contact#contact-form" }}
        secondaryCta={{ label: "Explore services", href: "/services" }}
      />

      <section className="relative border-b border-brand-gold/15 py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-teal-mid/25 to-transparent" />
        <div className="relative mx-auto grid min-w-0 max-w-7xl grid-cols-2 gap-3 px-4 sm:gap-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {trustBadges.map((b, i) => (
            <FadeIn key={b.label} delay={i * 0.06} className="h-full">
              <div className="glass-panel flex h-full min-w-0 flex-col items-center p-3 text-center transition hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg sm:p-5">
                <b.icon className="h-7 w-7 shrink-0 text-brand-gold-light sm:h-8 sm:w-8" aria-hidden />
                <p className="mt-2 text-xs font-semibold leading-snug text-white sm:mt-3 sm:text-sm">
                  {b.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <WarmSection className="border-y border-brand-gold/10 py-12 sm:py-16">
        <FadeIn className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1a1814] sm:text-3xl">
            Built for cross-border moves
          </h2>
          <p className="mt-3 text-[#4a453d]">
            Consultation-led planning with clear documentation milestones—from first conversation
            through lodgement.
          </p>
        </FadeIn>
        <PageImageSection preset="services" className="mt-8" />
      </WarmSection>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fffbf0] to-[#e8d5a8]/95" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(212,175,55,0.22),transparent_60%)]" />
        <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#1a1814] sm:text-3xl md:text-4xl">
              Our core services
            </h2>
            <p className="mt-3 text-[#4a453d]">
              Structured support across mobility, visas, and travel—tailored to
              your destination and category.
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
                variant="light"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-teal-mid/20 to-black/40" />
        <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Why choose Lexicon Migration
            </h2>
            <p className="mt-3 text-white/65">
              {/* TODO: Add firm-specific differentiators (licences, years in practice, languages) */}
              A premium experience grounded in transparency, disciplined
              process, and respect for your time.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyPoints.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.06}>
                <article className="glass-panel-strong h-full min-w-0 border-brand-gold/20 p-5 transition hover:border-brand-gold/40 sm:p-8">
                  <h3 className="text-xl font-semibold text-brand-gold-light">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-white/75">{w.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        variant="lightGold"
        heading="Your journey, step by step"
        subheading="A transparent roadmap from first conversation to decision-ready submission."
        steps={processSteps}
      />

      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-forest/60 via-transparent to-brand-teal-mid/30" />
        <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Popular destinations
            </h2>
            <p className="mt-3 text-white/65">
              {/* TODO: Narrow to markets your firm actively serves */}
              We regularly support clients exploring these regions—programs and
              criteria evolve, so eligibility is always confirmed in
              consultation.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <FadeIn key={d.name} delay={i * 0.05}>
                <div className="glass-panel flex h-full min-w-0 gap-3 p-4 transition hover:-translate-y-1 hover:border-brand-gold/35 sm:gap-4 sm:p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold to-brand-gold-dim text-brand-navy shadow-lg sm:h-12 sm:w-12">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-brand-gold-light">{d.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/65 sm:text-sm">{d.note}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection
        variant="promo"
        badge="FREE CONSULTATION"
        title="Ready to Start Your Journey?"
        description="Speak with Lexicon Migration today for professional guidance on immigration, citizenship, work permits, study visas, visit visas and travel services."
        primaryLabel="Call Now"
        primaryHref={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        secondaryHref={siteConfig.whatsapp}
        tertiaryHref="/contact#contact-form"
        showCompactLeadForm
      />

      <section className="relative border-t border-brand-gold/15 px-4 py-8 text-center sm:py-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal-mid/30 via-transparent to-brand-gold/10" />
        <p className="relative mx-auto max-w-md text-xs leading-relaxed text-white/70 sm:max-w-none sm:text-sm">
          Need the full menu?{" "}
          <Link
            href="/services"
            className="font-semibold text-brand-gold-light underline-offset-4 hover:text-white hover:underline"
          >
            Browse all services
          </Link>{" "}
          or{" "}
          <Link
            href="/about"
            className="font-semibold text-brand-gold-light underline-offset-4 hover:text-white hover:underline"
          >
            learn about our firm
          </Link>
          .
        </p>
      </section>
    </>
  );
}
