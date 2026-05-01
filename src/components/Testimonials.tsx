"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

const placeholders: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "The team explained each stage clearly and helped us prepare documentation with confidence. We felt supported throughout the process.",
    name: "A. Rahman",
    role: "Skilled migration applicant",
  },
  {
    id: "2",
    quote:
      "Professional, responsive, and honest about timelines. The eligibility review saved us time before we committed to an application pathway.",
    name: "S. Chen",
    role: "Study visa client",
  },
  {
    id: "3",
    quote:
      "We appreciated the structured checklist and regular updates. It made a complex process feel manageable.",
    name: "M. Okafor",
    role: "Family visit visa",
  },
  {
    id: "4",
    quote:
      "Clear guidance on which documents mattered first—we avoided duplicate work and kept our employer informed at each milestone.",
    name: "J. Patel",
    role: "Employer-sponsored work permit",
  },
  {
    id: "5",
    quote:
      "They helped us compare two destination options with pros and cons in plain language. No pressure—just structured facts we could act on.",
    name: "E. Novak",
    role: "Permanent residency planning",
  },
  {
    id: "6",
    quote:
      "Admission timelines and visa steps were aligned in one roadmap. That coordination reduced stress before our intake date.",
    name: "R. Kim",
    role: "Study abroad — postgraduate",
  },
  {
    id: "7",
    quote:
      "Visitor application support focused on credibility and consistency. We knew what to expect at each touchpoint with the visa office.",
    name: "L. Fernández",
    role: "Tourist visa",
  },
  {
    id: "8",
    quote:
      "Travel dates were checked against visa validity so flights and insurance lined up. Small detail, big peace of mind.",
    name: "T. Williams",
    role: "Travel coordination client",
  },
  {
    id: "9",
    quote:
      "Written summaries after calls helped our family stay aligned. Everyone knew who was preparing which piece of evidence.",
    name: "H. Al-Mansouri",
    role: "Family reunification file",
  },
  {
    id: "10",
    quote:
      "They flagged gaps in our employment history narrative early—fixing it before lodgement was far easier than responding to a request later.",
    name: "G. Murphy",
    role: "Skilled worker — documentation review",
  },
  {
    id: "11",
    quote:
      "SOP feedback was editorial, not generic. My voice stayed intact but the structure read much clearer for assessors.",
    name: "P. Naidoo",
    role: "Student visa — SOP support",
  },
  {
    id: "12",
    quote:
      "Fees and scope were explained up front. We always knew what was included and what would need a separate engagement.",
    name: "K. Johansson",
    role: "Citizenship pathway consultation",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fffbf0] to-[#e8d5a8]/95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_20%,rgba(212,175,55,0.2),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#1a1814] sm:text-3xl md:text-4xl">
            What clients say
          </h2>
          <p className="mt-3 text-[#4a453d]">
            {/* TODO: Replace placeholders with approved client testimonials and consent */}
            Placeholder feedback reflecting typical client experiences—edit names
            and quotes with approved testimonials.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {placeholders.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-32px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                delay: Math.min(i * 0.04, 0.4),
              }}
              whileHover={{ y: -4 }}
              className="flex h-full min-w-0 flex-col rounded-2xl border border-brand-gold/45 bg-gradient-to-br from-brand-teal from-[6%] via-brand-teal-mid to-[#012a2e] p-5 shadow-lg shadow-teal-900/25 transition hover:border-brand-gold/60 hover:shadow-xl"
            >
              <Quote className="h-7 w-7 shrink-0 text-brand-gold-light" aria-hidden />
              <blockquote className="mt-3 flex-1 break-words text-sm leading-relaxed text-white/88">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-white/15 pt-4">
                <p className="font-semibold text-brand-gold-light">{t.name}</p>
                <p className="mt-0.5 text-xs text-white/65">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
