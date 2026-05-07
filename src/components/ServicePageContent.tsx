"use client";

import { Hero } from "@/components/Hero";
import { FadeIn } from "@/components/FadeIn";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { WarmSection } from "@/components/layout/WarmSection";
import { TealBandSection, glassOnTeal } from "@/components/layout/TealBandSection";
import { TealPanel } from "@/components/TealPanel";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceSlug } from "@/content/services";
import { getServiceBySlug } from "@/content/services";
import { getServiceIcon } from "@/lib/serviceIcons";
import { siteConfig } from "@/lib/navigation";
import { PageImageSection } from "@/components/PageImageSection";

export function ServicePageContent({ slug }: { slug: ServiceSlug }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  const Icon = getServiceIcon(service.iconKey);
  return (
    <>
      <Hero
        eyebrow="Services"
        title={service.heroTitle}
        subtitle={service.summary}
        align="left"
        primaryCta={{
          label: "Speak to a Consultant",
          href: "/contact#contact-form",
        }}
        secondaryCta={{
          label: "Chat on WhatsApp",
          href: siteConfig.whatsapp,
        }}
      />

      <WarmSection className="border-b border-amber-200/40 py-10 sm:py-12">
        <FadeIn className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#063d42]/85">
            Visual overview
          </p>
          <h2 className="mt-2 text-xl font-bold text-[#1a1814] sm:text-2xl">
            How we think about this service category
          </h2>
        </FadeIn>
        {/* Swap preset imagery via PAGE_IMAGE_ASSETS in lib/pageImageSections.ts */}
        <PageImageSection preset={slug} className="mt-6 sm:mt-8" />
      </WarmSection>

      <WarmSection className="border-b border-amber-200/40 py-14 sm:py-16">
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_minmax(0,18.75rem)] lg:items-start">
            <FadeIn className="min-w-0">
              <TealPanel>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/85">{service.intro}</p>
              </TealPanel>
            </FadeIn>
            <FadeIn delay={0.08} className="min-w-0">
              <TealPanel>
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/30 text-brand-gold-light ring-2 ring-brand-gold/45">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <p className="min-w-0 text-sm font-semibold leading-snug text-brand-gold-light">
                    {service.shortTitle}
                  </p>
                </div>
                <p className="mt-4 text-xs text-white/65">
                  {/* TODO: Replace with regulator disclaimers if required in your region */}
                  Information is general in nature and not legal advice. Program
                  rules change; a consultation confirms what applies to you.
                </p>
              </TealPanel>
            </FadeIn>
          </div>
        </div>
      </WarmSection>

      <TealBandSection className="py-14 sm:py-16">
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Benefits of working with us
            </h2>
            <p className="mt-2 max-w-2xl text-white/75">
              Practical support focused on clarity, completeness, and realistic expectations.
            </p>
          </FadeIn>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((b, i) => (
              <FadeIn key={b} delay={i * 0.05}>
                <motion.li whileHover={{ scale: 1.01 }}>
                  <div className={`${glassOnTeal} flex gap-3 p-5`}>
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black/30 text-brand-gold-light ring-1 ring-brand-gold/40">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0 text-sm leading-relaxed text-white/88 break-words">{b}</span>
                  </div>
                </motion.li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </TealBandSection>

      <WarmSection className="border-y border-amber-200/40 py-14 sm:py-16">
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[#1a1814] sm:text-3xl">
              {service.checklistTitle}
            </h2>
            <p className="mt-2 text-[#4a453d]">
              Use this as a starting checklist—your consultant will tailor it to your destination and category.
            </p>
          </FadeIn>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {service.checklist.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <TealPanel
                  padding="px-4 py-3"
                  className="flex min-w-0 gap-3 text-sm text-white/88"
                >
                  <span className="shrink-0 font-semibold text-brand-gold-light">{i + 1}.</span>
                  <span className="min-w-0 break-words">{item}</span>
                </TealPanel>
              </FadeIn>
            ))}
          </ol>
        </div>
      </WarmSection>

      <ProcessSteps
        variant="default"
        heading="Process steps"
        subheading={service.processIntro}
        steps={service.processSteps}
      />

      <CTASection
        variant="promo"
        badge="CONSULTATION"
        title="Ready to Start Your Journey?"
        description="Speak with Lexicon Migration today for professional guidance on immigration, citizenship, work permits, study visas, visit visas and travel services."
        primaryLabel="Call Now"
        primaryHref={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        secondaryHref={siteConfig.whatsapp}
        tertiaryHref="/contact#contact-form"
      />
    </>
  );
}
