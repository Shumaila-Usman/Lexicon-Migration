"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Immigration & Citizenship",
  "Work Permits",
  "Visit Visa",
  "Study Visa",
  "Travel Services",
  "General inquiry",
];

const destinations = [
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
  "Europe",
  "New Zealand",
  "Other / undecided",
];

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/30";

const labelClass = "block text-sm font-medium text-brand-gold-light/90";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to backend, Formspree, or CRM when client is ready
    setSubmitted(true);
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
          Thank you for your message. This demo form does not send email yet—
          {/* TODO: Remove demo notice after wiring submission */}
          your team can connect this form to email or a CRM.
        </p>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className={fieldClass}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
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
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={fieldClass}
              placeholder="Include country code"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="service" className={labelClass}>
                Interested service
              </label>
              <select
                id="service"
                name="service"
                className={`${fieldClass} cursor-pointer`}
                defaultValue=""
                required
              >
                <option value="" disabled className="bg-brand-navy">
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-brand-navy">
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="destination" className={labelClass}>
                Preferred destination
              </label>
              <select
                id="destination"
                name="destination"
                className={`${fieldClass} cursor-pointer`}
                defaultValue=""
              >
                <option value="" className="bg-brand-navy">
                  Optional
                </option>
                {destinations.map((d) => (
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
            Send message
          </motion.button>
        </>
      )}
    </motion.form>
  );
}
