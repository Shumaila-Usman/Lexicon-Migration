"use client";

import { motion } from "framer-motion";

export type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  heading?: string;
  subheading?: string;
  /** `lightGold` = white–gold section for home; `default` = teal/dark bands (inner pages). */
  variant?: "default" | "lightGold";
};

export function ProcessSteps({
  steps,
  heading = "How we work with you",
  subheading = "A structured approach so you always know what comes next.",
  variant = "default",
}: ProcessStepsProps) {
  if (variant === "lightGold") {
    return (
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fffbf2] to-[#e8d5a8]/90" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(212,175,55,0.18),transparent_55%)]" />

        <div className="relative mx-auto min-w-0 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1814] sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-3 text-[#4a453d]">{subheading}</p>
          </div>
          <ol className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-brand-gold/45 bg-gradient-to-br from-brand-teal from-[6%] via-brand-teal-mid to-[#012a2e] p-5 shadow-lg shadow-teal-900/25 transition hover:border-brand-gold/65 hover:shadow-xl"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-sm font-bold text-brand-gold-light shadow-inner ring-2 ring-brand-gold/50">
                  {i + 1}
                </span>
                <h3 className="mt-3 break-words font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-y border-brand-gold/15 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-teal-mid/40 via-black/50 to-brand-forest/90" />
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-5xl bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_65%)]"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-white/70">{subheading}</p>
        </div>
        <ol className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.06 }}
              whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.45)" }}
              className="glass-panel relative border-brand-gold/20 p-5 transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-dim text-sm font-bold text-brand-navy shadow-md">
                {i + 1}
              </span>
              <h3 className="mt-3 break-words font-semibold text-brand-gold-light">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
