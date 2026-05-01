import type { ReactNode } from "react";

type WarmSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * White → cream → soft gold section band (same canvas as homepage core blocks).
 */
export function WarmSection({ children, className = "", id }: WarmSectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fffbf0] to-[#e8d5a8]/95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(212,175,55,0.22),transparent_60%)]" />
      <div className="relative min-w-0">{children}</div>
    </section>
  );
}
