"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ServiceIconKey } from "@/lib/serviceIcons";
import { getServiceIcon } from "@/lib/serviceIcons";

export type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  iconKey: ServiceIconKey;
  index?: number;
  /** `light` = teal cards on white–gold section (home). `dark` = glass on dark/teal pages. */
  variant?: "dark" | "light";
};

export function ServiceCard({
  title,
  description,
  href,
  iconKey,
  index = 0,
  variant = "dark",
}: ServiceCardProps) {
  const Icon = getServiceIcon(iconKey);
  const light = variant === "light";

  return (
    <motion.article
      initial={{ opacity: 0, y: 26, rotateX: light ? 0 : -4 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{
        type: "spring",
        stiffness: 85,
        damping: 18,
        delay: index * 0.07,
      }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 25 } }}
      className={
        light
          ? "group relative flex h-full min-w-0 flex-col rounded-2xl border border-brand-gold/45 bg-gradient-to-br from-brand-teal from-[8%] via-brand-teal-mid to-[#012a2e] p-6 shadow-lg shadow-teal-900/30 transition-shadow duration-300 hover:border-brand-gold/60 hover:shadow-xl"
          : "group glass-panel-strong relative flex h-full min-w-0 flex-col p-6 transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/40"
      }
    >
      <div
        className={
          light
            ? "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/30 text-brand-gold-light shadow-inner ring-2 ring-brand-gold/45 transition duration-300 group-hover:scale-110 group-hover:ring-brand-gold/75"
            : "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal-bright to-brand-forest text-white shadow-lg ring-1 ring-brand-gold/30 transition duration-300 group-hover:scale-110 group-hover:ring-brand-gold/60"
        }
      >
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="break-words text-lg font-semibold text-white">
        {title}
      </h3>
      <p
        className={`mt-2 flex-1 text-sm leading-relaxed ${light ? "text-white/82" : "text-white/75"}`}
      >
        {description}
      </p>
      <Link
        href={href}
        className={
          light
            ? "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-light transition group-hover:gap-2 group-hover:text-white"
            : "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-light transition group-hover:gap-2"
        }
      >
        Learn more
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </motion.article>
  );
}
