import type { ReactNode } from "react";

const base =
  "min-w-0 rounded-2xl border border-brand-gold/45 bg-gradient-to-br from-brand-teal from-[6%] via-brand-teal-mid to-[#012a2e] shadow-lg shadow-teal-900/25 text-white";

/**
 * Teal gradient panel used on warm sections (matches homepage service / testimonial cards).
 */
export function TealPanel({
  children,
  className = "",
  padding = "p-6",
}: {
  children: ReactNode;
  className?: string;
  padding?: string;
}) {
  return <div className={`${base} ${padding} ${className}`}>{children}</div>;
}
