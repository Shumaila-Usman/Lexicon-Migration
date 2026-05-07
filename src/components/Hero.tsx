"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { getHeroBackground } from "@/lib/pageImageSections";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

function heroIsNativeHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

type HeroProps = {
  eyebrow?: string;
  title: string;
  /** Use `\n\n` between paragraphs for a richer hero block (optional). */
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string } | null;
  align?: "left" | "center";
  /** Default: home placeholder — use `getHeroBackground(preset)` per route */
  imageSrc?: string;
  imageAlt?: string;
};

/** Pull hero under sticky header; keep in sync with `Header` vertical size */
const HEADER_PULL = "-mt-[4.5rem] pt-[4.5rem] sm:-mt-[4.75rem] sm:pt-[4.75rem]";

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { label: "Book Free Consultation", href: "/contact#contact-form" },
  secondaryCta = { label: "Explore Services", href: "/services" },
  align = "left",
  imageSrc: imageSrcProp,
  imageAlt: imageAltProp,
}: HeroProps) {
  const fallback = getHeroBackground("home");
  const imageSrc = imageSrcProp ?? fallback.imageSrc;
  const imageAlt = imageAltProp ?? fallback.imageAlt;
  const showSecondary = secondaryCta != null;
  const isCenter = align === "center";
  const subtitleBlocks = subtitle.includes("\n\n")
    ? subtitle.split(/\n\n+/).map((s) => s.trim()).filter(Boolean)
    : [subtitle];

  return (
    <section
      className={`relative flex min-h-[min(92dvh,52rem)] flex-col overflow-hidden text-white sm:min-h-[min(90dvh,56rem)] ${HEADER_PULL}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        unoptimized={imageSrc.endsWith(".svg") || imageSrc.startsWith("data:")}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/22 to-transparent sm:from-black/48 sm:via-black/14"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,61,66,0.82) 0%, rgba(6,61,66,0.42) 26%, rgba(255,255,255,0.14) 58%, #ffffff 90%, #ffffff 100%)",
        }}
        aria-hidden
      />

      <div
        className={`relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-1 flex-col justify-center px-[max(1rem,env(safe-area-inset-left))] pb-16 pr-[max(1rem,env(safe-area-inset-right))] pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12 ${
          isCenter ? "text-center" : "text-left"
        }`}
      >
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className={isCenter ? "mx-auto" : ""}
          >
            <span className="inline-block rounded-full border border-white/35 bg-white/18 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-md">
              {eyebrow}
            </span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-5 max-w-3xl break-words font-semibold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_28px_rgba(0,0,0,0.28)] sm:max-w-3xl sm:text-5xl md:text-6xl lg:max-w-4xl ${playfair.className} text-[clamp(1.75rem,4.5vw+0.5rem,2.85rem)] ${isCenter ? "mx-auto max-w-4xl" : ""}`}
        >
          {title}
        </motion.h1>
        <div
          className={`mt-6 max-w-2xl space-y-4 text-[0.9375rem] font-normal leading-relaxed text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] sm:text-base md:text-lg ${isCenter ? "mx-auto" : ""}`}
        >
          {subtitleBlocks.map((block, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {block}
            </motion.p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-10 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full min-w-0 sm:w-auto">
            {heroIsNativeHref(primaryCta.href) ? (
              <a
                href={primaryCta.href}
                {...(primaryCta.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-[#e8dcc6] px-7 py-3.5 text-sm font-semibold text-[#1a1814] shadow-lg transition hover:bg-[#dcc29e] hover:shadow-xl sm:w-auto sm:px-9 sm:text-base"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </a>
            ) : (
              <Link
                href={primaryCta.href}
                className="inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-full bg-[#e8dcc6] px-7 py-3.5 text-sm font-semibold text-[#1a1814] shadow-lg transition hover:bg-[#dcc29e] hover:shadow-xl sm:w-auto sm:px-9 sm:text-base"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            )}
          </motion.span>
          {showSecondary && secondaryCta && (
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full min-w-0 sm:w-auto">
              {heroIsNativeHref(secondaryCta.href) ? (
                <a
                  href={secondaryCta.href}
                  {...(secondaryCta.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex w-full min-w-0 items-center justify-center rounded-full border border-white/45 bg-white/25 px-7 py-3.5 text-sm font-semibold text-[#063d42] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-md transition hover:bg-white/38 sm:w-auto sm:px-9 sm:text-base"
                >
                  {secondaryCta.label}
                </a>
              ) : (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex w-full min-w-0 items-center justify-center rounded-full border border-white/45 bg-white/25 px-7 py-3.5 text-sm font-semibold text-[#063d42] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-md transition hover:bg-white/38 sm:w-auto sm:px-9 sm:text-base"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
