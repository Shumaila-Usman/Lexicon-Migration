"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe2,
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";
import {
  footerNavLinks,
  footerServiceLinks,
  siteConfig,
} from "@/lib/navigation";

const inquiryRows = [
  { label: "Initial response", value: "Within 24 hrs" },
  { label: "Consultation", value: "By appointment" },
  { label: "Engagement", value: "Scope & fee letter" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-gold/20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-teal-mid/90 via-[#042a2e] to-black" />
      <div className="pointer-events-none absolute -left-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-gold/10 blur-3xl animate-ambient" />
      <div className="pointer-events-none absolute -right-1/4 bottom-0 h-80 w-80 rounded-full bg-brand-teal-bright/15 blur-3xl" />

      <div className="relative mx-auto min-w-0 max-w-7xl px-[max(1rem,env(safe-area-inset-left))] pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-14 pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 lg:px-8">
        {/* Top: three cards (screenshot-style) */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <FooterCard delay={0} title="Contact us">
            <ContactRow
              icon={<Phone className="h-4 w-4" />}
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              text={siteConfig.phone}
            />
            <ContactRow
              icon={<MessageCircle className="h-4 w-4" />}
              href={siteConfig.whatsapp}
              text="Chat on WhatsApp"
              external
            />
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              href={`mailto:${siteConfig.email}`}
              text={siteConfig.email}
            />
          </FooterCard>

          <FooterCard delay={0.08} title="Office — consultation">
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-gold/30 bg-black/30 text-brand-gold">
                <MapPin className="h-4 w-4" aria-hidden />
              </span>
              <p className="min-w-0 text-sm leading-relaxed text-white/85 break-words">
                {siteConfig.address}
              </p>
            </div>
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-gold/30 bg-black/30 text-brand-gold">
                <Clock className="h-4 w-4" aria-hidden />
              </span>
              <table className="w-full table-fixed text-left text-xs text-white/80">
                <tbody>
                  {siteConfig.hours.map((row) => (
                    <tr key={row.day} className="border-b border-white/5 last:border-0">
                      <td className="w-[42%] py-1.5 pr-2 align-top font-medium text-brand-gold-light/90">
                        {row.day}
                      </td>
                      <td className="break-words py-1.5 text-white/75">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FooterCard>

          <FooterCard delay={0.14} title="Global — inquiries">
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-gold/30 bg-black/30 text-brand-gold">
                <Globe2 className="h-4 w-4" aria-hidden />
              </span>
              <p className="min-w-0 text-sm leading-relaxed text-white/85 break-words">
                Multiple destinations supported — Australia, Canada, UK, USA,
                Europe &amp; New Zealand pathways.
              </p>
            </div>
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
            <table className="w-full table-fixed text-left text-xs">
              <tbody>
                {inquiryRows.map((row) => (
                  <tr key={row.label} className="border-b border-white/5 last:border-0">
                    <td className="w-[42%] py-1.5 pr-2 align-top font-medium text-brand-gold-light/90">
                      {row.label}
                    </td>
                    <td className="break-words py-1.5 text-white/75">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FooterCard>

          <FooterCard delay={0.2} title="Services">
            <ul className="flex flex-col gap-2">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm leading-snug text-white/82 transition hover:text-brand-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCard>
        </div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10 flex justify-center gap-4"
        >
          <SocialCircle href={siteConfig.social.instagram} label="Instagram">
            <InstagramGlyph />
          </SocialCircle>
          <SocialCircle href={siteConfig.social.linkedin} label="LinkedIn">
            <LinkedInGlyph />
          </SocialCircle>
          <SocialCircle href={siteConfig.social.facebook} label="Facebook">
            <FacebookGlyph />
          </SocialCircle>
        </motion.div>

        {/* Nav strip */}
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-white/10 py-6"
          aria-label="Footer"
        >
          {footerNavLinks.map((item, i) => (
            <motion.span
              key={item.href}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href={item.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 transition hover:text-brand-gold-light"
              >
                {item.label}
              </Link>
            </motion.span>
          ))}
        </nav>

        {/* Bottom bar: copyright | logo | tagline */}
        <div className="mt-8 grid items-center gap-8 border-t border-white/10 pt-8 text-center md:grid-cols-3 md:text-left">
          <p className="break-words text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50 sm:tracking-[0.18em] md:justify-self-start">
            © {new Date().getFullYear()} {siteConfig.name.toUpperCase()}. All rights
            reserved.
          </p>
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 280, damping: 18 }}
            className="flex justify-center"
          >
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={200}
                height={72}
                className="mx-auto h-14 w-auto object-contain drop-shadow-lg md:h-16"
              />
            </Link>
          </motion.div>
          <p className="break-words text-[10px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-brand-gold-light/90 sm:tracking-[0.2em] md:justify-self-end md:text-right">
            {siteConfig.footerTagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCard({
  title,
  children,
  delay,
}: {
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
        borderColor: "rgba(212, 175, 55, 0.35)",
      }}
      className="glass-panel-strong flex min-w-0 flex-col gap-3 p-5 transition-colors sm:p-6"
    >
      <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold-light">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

function ContactRow({
  icon,
  href,
  text,
  external,
}: {
  icon: React.ReactNode;
  href: string;
  text: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="flex min-w-0 items-center gap-3 rounded-lg border border-white/5 bg-black/25 py-2 pl-2 pr-3 transition hover:border-brand-gold/30 hover:bg-brand-gold/5"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-brand-gold/25 bg-black/40 text-brand-gold">
        {icon}
      </span>
      <span className="break-all text-sm text-white/90">{text}</span>
    </a>
  );
}

function SocialCircle({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/35 bg-black/40 text-white shadow-lg transition hover:border-brand-gold hover:bg-brand-gold/15"
    >
      {children}
    </motion.a>
  );
}

function LinkedInGlyph() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
