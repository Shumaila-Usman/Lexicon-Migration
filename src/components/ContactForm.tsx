"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/** Dropdown values — keep aligned with service pages & CRM mapping later */
const INTERESTED_SERVICES = [
  "Immigration & Citizenship",
  "Work Permit",
  "Visit Visa",
  "Study Visa",
  "Travel Services",
  "Other",
] as const;

const PREFERRED_DESTINATIONS = [
  "Australia",
  "Canada",
  "UK",
  "USA",
  "Europe",
  "New Zealand",
  "Other",
] as const;

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/30";

const labelClass = "block text-sm font-medium text-brand-gold-light/90";

const SUCCESS_COPY =
  "Thank you! Your inquiry has been received. Our team will contact you shortly.";

export type ContactFormProps = {
  /** Compact variant for home CTA — fewer fields */
  variant?: "full" | "compact";
};

export function ContactForm({ variant = "full" }: ContactFormProps) {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // TODO: Backend — POST to your API, Formspree, Resend, or CRM webhook here.
    // Example: await fetch('/api/leads', { method: 'POST', body: new FormData(form) })
    form.reset();
    setSubmitted(true);
  }

  /* Avoid hydrating <input>/<select>/<button>: extensions often inject attrs (e.g. fdprocessedid) before hydration and trigger mismatches. */
  if (!mounted) {
    const h = variant === "compact" ? "min-h-[19rem]" : "min-h-[36rem]";
    return (
      <div
        className={`glass-panel-strong min-w-0 space-y-4 p-5 sm:p-8 ${h}`}
        aria-busy="true"
        aria-label="Loading inquiry form"
      >
        <div className="h-3 w-28 animate-pulse rounded bg-white/15" />
        <div className="h-11 w-full animate-pulse rounded-xl bg-white/10" />
        <div className="h-3 w-24 animate-pulse rounded bg-white/15" />
        <div className="h-11 w-full animate-pulse rounded-xl bg-white/10" />
        <div className="h-3 w-20 animate-pulse rounded bg-white/15" />
        <div className="h-11 w-full animate-pulse rounded-xl bg-white/10" />
        {variant === "full" ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="h-11 animate-pulse rounded-xl bg-white/10" />
              <div className="h-11 animate-pulse rounded-xl bg-white/10" />
            </div>
            <div className="h-24 animate-pulse rounded-xl bg-white/10" />
          </>
        ) : null}
        <div className="h-12 animate-pulse rounded-xl bg-brand-gold/20" />
      </div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      onSubmit={handleSubmit}
      className="glass-panel-strong min-w-0 space-y-5 p-5 sm:p-8"
    >
      {submitted ? (
        <p className="rounded-xl border border-brand-gold/25 bg-black/30 px-4 py-6 text-center text-white/90">
          {SUCCESS_COPY}
        </p>
      ) : variant === "compact" ? (
        <>
          <div>
            <label htmlFor="lead-full-name" className={labelClass}>
              Full Name
            </label>
            <input
              id="lead-full-name"
              name="fullName"
              required
              autoComplete="name"
              className={fieldClass}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="lead-phone" className={labelClass}>
              Phone Number
            </label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              className={fieldClass}
              placeholder="e.g. 03001234567"
            />
          </div>
          <div>
            <label htmlFor="lead-email" className={labelClass}>
              Email Address
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="lead-service" className={labelClass}>
              Interested Service
            </label>
            <select
              id="lead-service"
              name="interestedService"
              className={`${fieldClass} cursor-pointer`}
              defaultValue=""
              required
            >
              <option value="" disabled className="bg-brand-navy">
                Select a service
              </option>
              {INTERESTED_SERVICES.map((s) => (
                <option key={s} value={s} className="bg-brand-navy">
                  {s}
                </option>
              ))}
            </select>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-light py-3.5 text-base font-semibold text-brand-navy shadow-lg"
          >
            Submit Inquiry
          </motion.button>
        </>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="full-name" className={labelClass}>
                Full Name
              </label>
              <input
                id="full-name"
                name="fullName"
                required
                autoComplete="name"
                className={fieldClass}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              className={fieldClass}
              placeholder="e.g. 03009261437"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="service" className={labelClass}>
                Interested Service
              </label>
              <select
                id="service"
                name="interestedService"
                className={`${fieldClass} cursor-pointer`}
                defaultValue=""
                required
              >
                <option value="" disabled className="bg-brand-navy">
                  Select a service
                </option>
                {INTERESTED_SERVICES.map((s) => (
                  <option key={s} value={s} className="bg-brand-navy">
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="destination" className={labelClass}>
                Preferred Destination
              </label>
              <select
                id="destination"
                name="preferredDestination"
                className={`${fieldClass} cursor-pointer`}
                defaultValue=""
                required
              >
                <option value="" disabled className="bg-brand-navy">
                  Select a destination
                </option>
                {PREFERRED_DESTINATIONS.map((d) => (
                  <option key={d} value={d} className="bg-brand-navy">
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              minLength={10}
              className={fieldClass}
              placeholder="Tell us briefly about your goals and timeline."
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-light py-3.5 text-base font-semibold text-brand-navy shadow-lg sm:w-auto sm:px-10"
          >
            Submit Inquiry
          </motion.button>
        </>
      )}
    </motion.form>
  );
}
