import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FadeIn } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";
import { WarmSection } from "@/components/layout/WarmSection";
import { TealBandSection, glassOnTeal } from "@/components/layout/TealBandSection";
import { TealPanel } from "@/components/TealPanel";
import { Heart, Scale, Award, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lexicon Migration—our mission, values, and how we support immigration, visa, and travel goals with integrity and professionalism.",
};

const values = [
  {
    title: "Integrity",
    icon: Scale,
    text: "We set expectations honestly and document advice so you can revisit decisions with confidence.",
  },
  {
    title: "Transparency",
    icon: Heart,
    text: "Clear milestones, predictable communication rhythms, and no hidden stages in how we work.",
  },
  {
    title: "Professionalism",
    icon: Award,
    text: "Structured checklists, version control on drafts, and careful review before anything is lodged.",
  },
  {
    title: "Client success",
    icon: TrendingUp,
    text: "Success means the right outcome for your situation—prepared files, informed clients, and fewer surprises.",
  },
];

const teamPlaceholders = [
  {
    name: "Lead Consultant",
    role: "Registered migration agent / legal partner (placeholder)",
    bio: "Brief bio will go here—qualifications, jurisdictions served, and languages spoken.",
  },
  {
    name: "Study & Mobility Lead",
    role: "Admissions & visa coordination (placeholder)",
    bio: "Highlight experience with institutions, credibility interviews, and complex financial cases.",
  },
  {
    name: "Client Experience",
    role: "Case coordination (placeholder)",
    bio: "Describe how your team keeps clients updated and organizes evidence across departments.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="Independent guidance for global moves"
        subtitle="Lexicon Migration supports individuals, families, and employers with structured assessments, documentation assistance, and travel coordination—always with room for your story."
        align="left"
        primaryCta={{ label: "Meet us on a call", href: "/contact" }}
        secondaryCta={{ label: "Our services", href: "/services" }}
      />

      <WarmSection className="py-16 sm:py-20">
        <div className="mx-auto min-w-0 max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <TealPanel>
              <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">Who we are</h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                {/* TODO: Replace with finalized company history, registration numbers, and office locations */}
                Founded to simplify complex mobility decisions, Lexicon Migration combines
                disciplined case preparation with a calm, consultative style. We work
                across immigration, temporary visas, study plans, and travel logistics so
                clients can align timelines across study offers, employment start dates,
                and family commitments.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                Our consultants collaborate closely—when your study visa touches a
                subsequent work pathway, the same narrative thread is preserved in your
                file rather than rebuilt from scratch.
              </p>
            </TealPanel>
          </FadeIn>
        </div>
      </WarmSection>

      <TealBandSection className="py-16 sm:py-20">
        <div className="mx-auto grid min-w-0 max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <div className={`${glassOnTeal} h-full p-6`}>
              <h2 className="text-2xl font-bold text-brand-gold-light sm:text-3xl">Mission</h2>
              <p className="mt-4 text-white/85">
                To give every client a clear picture of their options, the evidence
                required, and the sequence of steps—so they can move forward with
                confidence and avoid costly rework.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className={`${glassOnTeal} h-full p-6`}>
              <h2 className="text-2xl font-bold text-brand-gold-light sm:text-3xl">Vision</h2>
              <p className="mt-4 text-white/85">
                To be the consultancy clients recommend when complexity is high and
                stakes are personal: a team known for careful files, candid advice, and
                respectful communication at every stage.
              </p>
            </div>
          </FadeIn>
        </div>
      </TealBandSection>

      <WarmSection className="py-16 sm:py-20">
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#1a1814] sm:text-3xl md:text-4xl">
              Why Lexicon Migration
            </h2>
            <p className="mt-3 text-[#4a453d]">
              A short list of reasons clients choose to work with us—edit with your
              differentiators as they are confirmed.
            </p>
          </FadeIn>
          <ul className="mx-auto mt-10 min-w-0 max-w-3xl space-y-4">
            {[
              "Single roadmap across visas, study, and travel touchpoints",
              "Written summaries after key calls so decisions are documented",
              "Quality checks that mirror how case officers read files",
              "Sensitive handling of family and financial evidence",
            ].map((item, i) => (
              <FadeIn key={item} delay={i * 0.05}>
                <li>
                  <TealPanel padding="px-4 py-3" className="flex min-w-0 gap-3">
                    <span className="shrink-0 font-semibold text-brand-gold-light">✓</span>
                    <span className="min-w-0 text-sm leading-relaxed text-white/88 break-words">
                      {item}
                    </span>
                  </TealPanel>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </WarmSection>

      <TealBandSection className="py-16 sm:py-20">
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Leadership & consultants
            </h2>
            <p className="mt-3 text-sm text-white/75">
              {/* TODO: Replace placeholders with real names, photos, and regulatory credentials */}
              Placeholder profiles—swap for licensed practitioners in your region with
              correct titles and disclaimers.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamPlaceholders.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.08}>
                <div
                  className={`${glassOnTeal} flex h-full flex-col p-6 transition hover:border-brand-gold/40`}
                >
                  <div className="h-28 rounded-xl bg-black/25 ring-1 ring-brand-gold/35" />
                  <h3 className="mt-4 font-semibold text-brand-gold-light">{m.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-white/70 break-words">
                    {m.role}
                  </p>
                  <p className="mt-3 flex-1 text-sm text-white/75 break-words">{m.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </TealBandSection>

      <WarmSection className="py-16 sm:py-20">
        <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#1a1814] sm:text-3xl md:text-4xl">Values</h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.06}>
                <TealPanel className="h-full text-center transition hover:border-brand-gold/60">
                  <v.icon className="mx-auto h-10 w-10 text-brand-gold-light" />
                  <h3 className="mt-4 font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{v.text}</p>
                </TealPanel>
              </FadeIn>
            ))}
          </div>
        </div>
      </WarmSection>

      <CTASection
        variant="promo"
        badge="CONTACT"
        title="We would love to hear"
        titleItalic="your plans"
        description="Share your timeline and destination preferences. We will respond with next steps and what to bring to an initial consultation."
        primaryLabel="Book now"
        primaryHref="/contact"
        secondaryLabel="Talk to us"
        secondaryHref="/contact"
      />
    </>
  );
}
