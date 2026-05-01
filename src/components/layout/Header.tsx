"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  primaryNav,
  serviceDropdownItems,
  siteConfig,
} from "@/lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServicesMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };

  const servicesActive =
    pathname.startsWith("/services") ||
    serviceDropdownItems.some((s) => s.href === pathname);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-brand-gold/25 bg-black/45 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "border-white/10 bg-black/25 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-2 px-[max(1rem,env(safe-area-inset-left))] py-3 pr-[max(1rem,env(safe-area-inset-right))] sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] sm:gap-3"
        >
          <motion.span whileHover={{ rotate: [0, -2, 2, 0] }} transition={{ duration: 0.5 }}>
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={180}
              height={64}
              className="h-9 w-auto max-w-[10rem] object-contain object-left drop-shadow-md sm:h-11 sm:max-w-none md:h-[3.25rem]"
              priority
            />
          </motion.span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main"
        >
          {primaryNav.slice(0, 2).map((item) => (
            <NavPill key={item.href} item={item} pathname={pathname} />
          ))}

          <div
            className="relative"
            onMouseEnter={openServicesMenu}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
              className={`flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                servicesActive
                  ? "bg-gradient-to-r from-brand-gold/25 to-brand-teal/30 text-brand-gold-light shadow-inner"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              Services
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown className="h-4 w-4 opacity-90" aria-hidden />
              </motion.span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-full z-50 mt-2 min-w-[17.5rem] overflow-hidden rounded-xl border border-brand-gold/20 bg-black/75 py-2 shadow-2xl shadow-black/40 backdrop-blur-xl"
                  role="menu"
                >
                  {serviceDropdownItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        role="menuitem"
                        className={`block px-4 py-2.5 text-sm font-medium transition hover:bg-brand-gold/15 ${
                          pathname === item.href
                            ? "border-l-2 border-brand-gold bg-brand-gold/10 text-brand-gold-light"
                            : "text-white/90 hover:text-brand-gold-light"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavPill item={primaryNav[2]} pathname={pathname} />
        </nav>

        <motion.button
          type="button"
          whileTap={{ scale: 0.94 }}
          className="inline-flex items-center justify-center rounded-xl border border-brand-gold/30 bg-white/5 p-2.5 text-white shadow-inner backdrop-blur-sm transition hover:border-brand-gold/50 hover:bg-brand-gold/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-black/60 backdrop-blur-xl lg:hidden"
          >
            <nav
              className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-6"
              aria-label="Mobile"
            >
              {primaryNav.slice(0, 2).map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <MobileLink item={item} pathname={pathname} />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-white"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="border-t border-white/10">
                    {serviceDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block border-b border-white/5 px-6 py-2.5 text-sm text-white/85 last:border-b-0 hover:bg-brand-gold/10 ${
                          pathname === item.href ? "text-brand-gold-light" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.14 }}
              >
                <MobileLink item={primaryNav[2]} pathname={pathname} />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavPill({
  item,
  pathname,
}: {
  item: { label: string; href: string };
  pathname: string;
}) {
  const active =
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  return (
    <Link
      href={item.href}
      className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
        active
          ? "bg-gradient-to-r from-brand-teal to-brand-forest text-white shadow-md shadow-black/20"
          : "text-white/90 hover:bg-white/10"
      }`}
    >
      {item.label}
    </Link>
  );
}

function MobileLink({
  item,
  pathname,
}: {
  item: { label: string; href: string };
  pathname: string;
}) {
  const active =
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  return (
    <Link
      href={item.href}
      className={`block rounded-xl px-4 py-3 text-sm font-semibold ${
        active
          ? "bg-gradient-to-r from-brand-teal to-brand-forest text-white"
          : "text-white hover:bg-white/10"
      }`}
    >
      {item.label}
    </Link>
  );
}
