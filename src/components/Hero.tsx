"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string } | null;
  align?: "left" | "center";
  /** Full-bleed photo hero (e.g. `/hero.png` in `public/`) with teal wash like reference layout */
  imageSrc?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { label: "Book Free Consultation", href: "/contact" },
  secondaryCta = { label: "Explore Services", href: "/services" },
  align = "center",
  imageSrc,
}: HeroProps) {
  const showSecondary = secondaryCta != null;
  const immersive = Boolean(imageSrc);
  const isCenter = align === "center" && !immersive;

  return (
    <section
      className={`relative overflow-hidden text-white ${
        immersive ? "flex min-h-[min(100dvh,56rem)] flex-col" : ""
      }`}
    >
      {immersive ? (
        <>
          <Image
            src={imageSrc!}
            alt="Welcoming consultancy space"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Teal wash: strong at top, opens to pale aqua/white at bottom for premium spa-style hero */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#043d42]/92 via-[#0a5f66]/70 to-[#dceeea]/90"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent sm:w-[72%]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_40%,transparent_20%,rgba(4,61,66,0.35)_100%)]"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-teal-mid to-brand-forest" />
          <motion.div
            className="pointer-events-none absolute -right-20 -top-20 h-[22rem] w-[22rem] rounded-full bg-brand-gold/25 blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-brand-teal-bright/20 blur-3xl"
            animate={{ scale: [1, 1.12, 1], x: [0, 12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(212,175,55,0.08)_50%,transparent_60%)]" />
        </>
      )}

      <div
        className={`relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-col justify-center py-20 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 sm:py-28 lg:px-8 lg:py-32 ${
          immersive ? "flex-1" : ""
        } ${isCenter ? "text-center" : "text-left"}`}
      >
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className={isCenter ? "mx-auto" : ""}
          >
            <span
              className={`inline-block rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm ${
                immersive ? "shadow-sm" : ""
              }`}
            >
              {eyebrow}
            </span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-5 max-w-3xl break-words text-[clamp(1.625rem,5vw+0.75rem,2.25rem)] font-semibold leading-[1.15] tracking-tight drop-shadow-md sm:text-4xl md:text-5xl lg:max-w-4xl lg:text-6xl ${
            immersive ? `${playfair.className} font-semibold` : "font-sans font-bold"
          } ${isCenter ? "mx-auto max-w-4xl" : ""}`}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-6 max-w-2xl text-[0.9375rem] font-normal leading-relaxed text-white/95 sm:text-base md:text-lg ${
            immersive ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]" : ""
          } ${isCenter ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-10 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full min-w-0 sm:w-auto">
            <Link
              href={primaryCta.href}
              className={`inline-flex w-full min-w-0 items-center justify-center px-6 py-3.5 text-sm font-semibold shadow-lg transition hover:shadow-xl sm:w-auto sm:px-8 sm:text-base ${
                immersive
                  ? "rounded-full bg-white/95 text-[#063d42] hover:bg-white"
                  : "rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy shadow-black/25"
              }`}
            >
              {primaryCta.label}
            </Link>
          </motion.span>
          {showSecondary && secondaryCta && (
            <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full min-w-0 sm:w-auto">
              <Link
                href={secondaryCta.href}
                className={`inline-flex w-full min-w-0 items-center justify-center px-6 py-3.5 text-sm font-semibold text-white transition sm:w-auto sm:px-8 sm:text-base ${
                  immersive
                    ? "rounded-full border border-white/45 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                    : "rounded-xl border-2 border-brand-gold/50 bg-white/5 backdrop-blur-sm hover:border-brand-gold-light hover:bg-brand-gold/10"
                }`}
              >
                {secondaryCta.label}
              </Link>
            </motion.span>
          )}
        </motion.div>
      </div>

      {immersive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-20 sm:bottom-10 sm:right-8"
        >
          <Link
            href={primaryCta.href}
            className="inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 truncate rounded-full bg-[#063d42]/95 px-3 py-2.5 text-xs font-semibold text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-[#052f33] hover:ring-brand-gold/40 sm:px-4 sm:py-3 sm:text-sm"
          >
            <Calendar className="h-4 w-4 shrink-0 opacity-95" aria-hidden />
            Book now
          </Link>
        </motion.div>
      )}
    </section>
  );
}
