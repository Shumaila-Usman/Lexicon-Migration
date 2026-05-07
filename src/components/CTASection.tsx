"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

function CtaAnchor({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const native =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");
  if (native) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

type CTASectionProps = {
  title: string;
  /** Shown in serif + italic after `title` (screenshot-style emphasis). */
  titleItalic?: string;
  description: string;
  /** Small caps line above heading (e.g. “GET STARTED”). */
  badge?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tertiaryLabel?: string;
  /** Defaults to /contact#contact-form */
  tertiaryHref?: string;
  /** Home promo only — short lead form beside / below CTAs */
  showCompactLeadForm?: boolean;
  /** `promo` = teal rounded card on white–gold section (home). `default` = full-width teal banner. */
  variant?: "default" | "promo";
};

export function CTASection({
  title,
  titleItalic,
  description,
  badge = "GET STARTED",
  primaryLabel = "Call Now",
  primaryHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  secondaryLabel = "Chat on WhatsApp",
  secondaryHref = siteConfig.whatsapp,
  tertiaryLabel = "Submit Inquiry",
  tertiaryHref = "/contact#contact-form",
  showCompactLeadForm = false,
  variant = "default",
}: CTASectionProps) {
  const promoButtonsClassGold =
    "inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-[#c4a574] px-5 py-3 text-sm font-semibold text-[#1a1814] shadow-md transition hover:bg-[#b89660] sm:w-auto sm:px-7 sm:py-3.5";
  const promoButtonsClassOutline =
    "inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full border border-[#c4b8a8] bg-[#f0ebe3] px-5 py-3 text-sm font-semibold text-[#1a1814] transition hover:bg-[#e5dfd4] sm:w-auto sm:px-7 sm:py-3.5";

  if (variant === "promo") {
    return (
      <section className="relative overflow-hidden py-12 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 sm:py-16 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fffbf0] to-[#e8d5a8]/95" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative min-w-0 overflow-hidden rounded-3xl border border-brand-gold/45 bg-gradient-to-br from-brand-teal from-[5%] via-brand-teal-mid to-[#011f22] px-5 py-8 shadow-xl shadow-teal-950/40 sm:rounded-[2.25rem] sm:px-10 sm:py-12 lg:rounded-[2rem] lg:px-14 lg:py-14"
          >
            <div
              className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-brand-gold/15 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-teal-bright/20 blur-2xl"
              aria-hidden
            />

            <div
              className={`relative grid min-w-0 gap-10 ${showCompactLeadForm ? "lg:grid-cols-[1fr_minmax(0,22rem)] lg:items-start lg:gap-12" : ""}`}
            >
              <div className="min-w-0 max-w-2xl text-left">
                {badge ? (
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold-light">
                    {badge}
                  </p>
                ) : null}
                <h2
                  className={`mt-3 break-words text-2xl font-semibold leading-[1.2] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.65rem] ${playfair.className}`}
                >
                  {title}
                  {titleItalic ? (
                    <span className="italic text-brand-gold-light"> {titleItalic}</span>
                  ) : null}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/88 break-words sm:text-lg">
                  {description}
                </p>
                <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full min-w-0 sm:w-auto"
                  >
                    <CtaAnchor href={primaryHref} className={promoButtonsClassGold}>
                      {primaryLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </CtaAnchor>
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full min-w-0 sm:w-auto"
                  >
                    <CtaAnchor href={secondaryHref} className={promoButtonsClassOutline}>
                      {secondaryLabel}
                    </CtaAnchor>
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full min-w-0 sm:w-auto"
                  >
                    <CtaAnchor href={tertiaryHref} className={promoButtonsClassOutline}>
                      {tertiaryLabel}
                    </CtaAnchor>
                  </motion.span>
                </div>
              </div>

              {showCompactLeadForm ? (
                <div className="min-w-0 lg:pt-2">
                  <p className="mb-3 text-sm font-medium text-brand-gold-light/95">
                    Quick inquiry
                  </p>
                  <ContactForm variant="compact" />
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-teal-mid to-brand-teal" />
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.28),transparent_55%)]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
        className="relative mx-auto min-w-0 max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="break-words text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex w-full min-w-0 max-w-2xl flex-col items-stretch justify-center gap-3 px-2 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:px-0">
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
            <CtaAnchor
              href={primaryHref}
              className="inline-flex w-full min-w-0 items-center justify-center rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-light px-6 py-3.5 text-sm font-semibold text-brand-navy shadow-lg sm:min-w-[10rem] sm:text-base"
            >
              {primaryLabel}
            </CtaAnchor>
          </motion.span>
          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <CtaAnchor
              href={secondaryHref}
              className="inline-flex w-full min-w-0 items-center justify-center rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:min-w-[10rem] sm:text-base"
            >
              {secondaryLabel}
            </CtaAnchor>
          </motion.span>
          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <CtaAnchor
              href={tertiaryHref}
              className="inline-flex w-full min-w-0 items-center justify-center rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:min-w-[10rem] sm:text-base"
            >
              {tertiaryLabel}
            </CtaAnchor>
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
