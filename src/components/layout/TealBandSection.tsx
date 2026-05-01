import type { ReactNode } from "react";

type TealBandSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Full-width teal gradient band — alternate with {@link WarmSection} on inner pages.
 */
export function TealBandSection({ children, className = "", id }: TealBandSectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-teal via-brand-teal-mid to-brand-forest" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_90%_10%,rgba(212,175,55,0.14),transparent_50%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" aria-hidden />
      <div className="relative z-10 min-w-0">{children}</div>
    </section>
  );
}

/** Frosted panel on teal bands (not the same as TealPanel on warm sections). Add `p-5` / `p-6` as needed. */
export const glassOnTeal =
  "rounded-2xl border border-white/15 bg-white/[0.08] shadow-lg backdrop-blur-md";
