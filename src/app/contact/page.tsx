import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { WarmSection } from "@/components/layout/WarmSection";
import { TealBandSection } from "@/components/layout/TealBandSection";
import { TealPanel } from "@/components/TealPanel";
import { siteConfig } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Lexicon Migration for a consultation. Phone, email, office address, and secure message form—plus WhatsApp for quick questions.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let us map your next steps"
        subtitle="Use the form, call, email, or WhatsApp. We will respond with available times and what to prepare for your first conversation."
        align="left"
        primaryCta={{ label: "Book Free Consultation", href: "#contact-form" }}
        secondaryCta={{ label: "WhatsApp", href: siteConfig.whatsapp }}
      />

      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex max-w-[min(100%,calc(100vw-2rem)))] items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 sm:text-sm"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        WhatsApp
      </a>

      <WarmSection id="contact-form" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto grid min-w-0 max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[#1a1814] sm:text-3xl">Send a message</h2>
              <p className="mt-2 text-[#4a453d]">
                {/* TODO: Connect form to email service or CRM */}
                Fields below are ready for styling and UX review; wire the action
                endpoint when your stack is chosen.
              </p>
            </div>
            <ContactForm />
          </FadeIn>

          <div className="min-w-0 space-y-8">
            <FadeIn delay={0.06}>
              <TealPanel>
                <h3 className="text-lg font-semibold text-brand-gold-light">
                  Direct contact
                </h3>
                <ul className="mt-4 space-y-4 text-sm text-white/88">
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-light" />
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="min-w-0 break-words hover:text-white"
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-light" />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="min-w-0 break-all hover:text-white sm:break-words"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-light" />
                    <span className="min-w-0 break-words">{siteConfig.address}</span>
                  </li>
                </ul>
                <Link
                  href={siteConfig.whatsapp}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c4a574] py-3 text-sm font-semibold text-[#1a1814] transition hover:bg-[#b89660]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Link>
              </TealPanel>
            </FadeIn>

            <FadeIn delay={0.1}>
              <TealPanel className="overflow-hidden p-0">
                <div className="flex aspect-[16/10] flex-col items-center justify-center bg-black/20 p-6 text-center ring-1 ring-inset ring-white/10">
                  <MapPin className="h-10 w-10 text-brand-gold-light" />
                  <p className="mt-3 text-sm font-medium text-white">Google Maps embed</p>
                  <p className="mt-1 text-xs text-white/60">
                    {/* TODO: Replace with iframe or Maps link when office is confirmed */}
                    Add your Google Maps iframe or link to the confirmed office
                    location.
                  </p>
                </div>
              </TealPanel>
            </FadeIn>

            <FadeIn delay={0.14}>
              <TealPanel>
                <h3 className="text-lg font-semibold text-brand-gold-light">
                  Prefer a scheduled call?
                </h3>
                <p className="mt-2 text-sm text-white/85">
                  Book a free consultation and we will confirm a time window that
                  suits your time zone.
                </p>
                <Link
                  href="/contact#contact-form"
                  className="mt-4 inline-flex rounded-full bg-[#c4a574] px-5 py-2.5 text-sm font-semibold text-[#1a1814] transition hover:bg-[#b89660]"
                >
                  Use the form to request a slot
                </Link>
              </TealPanel>
            </FadeIn>
          </div>
        </div>
      </WarmSection>

      <TealBandSection className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-white/90">
            Prefer email first? We typically reply within one business day with available
            times and what to bring to an initial call.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 inline-block max-w-full break-all text-base font-semibold text-brand-gold-light underline-offset-4 transition hover:text-white hover:underline sm:break-words"
          >
            {siteConfig.email}
          </a>
        </div>
      </TealBandSection>
    </>
  );
}
