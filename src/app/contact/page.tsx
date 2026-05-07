import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { WarmSection } from "@/components/layout/WarmSection";
import { TealBandSection } from "@/components/layout/TealBandSection";
import { TealPanel } from "@/components/TealPanel";
import { PageImageSection } from "@/components/PageImageSection";
import { siteConfig } from "@/lib/navigation";
import { getHeroBackground } from "@/lib/pageImageSections";

const contactHero = getHeroBackground("contact");

const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const mailHref = `mailto:${siteConfig.email}`;
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Lexicon Migration for a consultation. Phone, email, office address, and secure message form—plus WhatsApp for quick questions.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        imageSrc={contactHero.imageSrc}
        imageAlt={contactHero.imageAlt}
        eyebrow="Contact"
        title="Let us map your next steps"
        subtitle="Use the form, call, email, or WhatsApp. We will respond with available times and what to prepare for your first conversation."
        align="left"
        primaryCta={{ label: "Submit Inquiry", href: "#contact-form" }}
        secondaryCta={{ label: "Chat on WhatsApp", href: siteConfig.whatsapp }}
      />

      <WarmSection className="border-b border-amber-200/35 py-12 sm:py-14">
        <FadeIn className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1a1814] sm:text-2xl md:text-3xl">
            Reach our Karachi office or send us a message
          </h2>
          <p className="mt-2 text-sm text-[#4a453d] sm:text-base">
            RJ Mall consultation hub — phone, WhatsApp, or secure inquiry form. Same-day acknowledgement during business hours when possible.
          </p>
        </FadeIn>
        <PageImageSection preset="contact" className="mt-8" />
      </WarmSection>

      <WarmSection id="contact-form" className="scroll-mt-24 border-t border-amber-200/25 py-16 sm:py-20">
        <div className="mx-auto grid min-w-0 max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[#1a1814] sm:text-3xl">
                Send us your inquiry
              </h2>
              <p className="mt-2 text-[#4a453d]">
                Complete the form and our team will reach out shortly. You can also call,
                email, or message us on WhatsApp.
              </p>
              {/* TODO: Wire ContactForm submission to API route, email provider, or CRM webhook */}
            </div>
            <ContactForm variant="full" />
          </FadeIn>

          <div className="min-w-0 space-y-8">
            <FadeIn delay={0.06}>
              <TealPanel>
                <h3 className="text-lg font-semibold text-brand-gold-light">
                  Contact details
                </h3>
                <ul className="mt-4 space-y-4 text-sm text-white/88">
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-light" />
                    <a href={telHref} className="min-w-0 break-words hover:text-white">
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-light" />
                    <span className="min-w-0">
                      WhatsApp:{" "}
                      <a href={telHref} className="hover:text-white">
                        {siteConfig.phone}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-light" />
                    <a
                      href={mailHref}
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
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#20BD5A]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  Chat on WhatsApp
                </a>
              </TealPanel>
            </FadeIn>

            <FadeIn delay={0.1}>
              <TealPanel className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] w-full bg-black/30 ring-1 ring-inset ring-white/10">
                  <iframe
                    title={`Map — ${siteConfig.name} office`}
                    src={mapEmbedUrl}
                    className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="border-t border-white/10 px-4 py-3 text-center text-xs text-white/70">
                  {/* TODO: Replace embed with verified Google Maps iframe from Google Maps → Share → Embed if needed */}
                  Office: {siteConfig.address}
                </p>
              </TealPanel>
            </FadeIn>

            <FadeIn delay={0.14}>
              <TealPanel>
                <h3 className="text-lg font-semibold text-brand-gold-light">
                  Prefer a scheduled call?
                </h3>
                <p className="mt-2 text-sm text-white/85">
                  Request a consultation using the form, call us directly, or start a WhatsApp
                  chat—we will confirm the next available time.
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <a
                    href={telHref}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-[#c4a574] px-5 py-2.5 text-center text-sm font-semibold text-[#1a1814] transition hover:bg-[#b89660]"
                  >
                    Call now
                  </a>
                  <Link
                    href="/contact#contact-form"
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Submit inquiry
                  </Link>
                </div>
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
            href={mailHref}
            className="mt-5 inline-block max-w-full break-all text-base font-semibold text-brand-gold-light underline-offset-4 transition hover:text-white hover:underline sm:break-words"
          >
            {siteConfig.email}
          </a>
        </div>
      </TealBandSection>
    </>
  );
}
