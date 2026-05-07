"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { primaryNav, siteConfig } from "@/lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {primaryNav.map((item) => (
            <NavPill key={item.href} item={item} pathname={pathname} />
          ))}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="ml-2 hidden items-center gap-2 rounded-xl border border-brand-gold/35 bg-white/5 px-3 py-2 text-sm font-semibold text-white/95 backdrop-blur-sm transition hover:border-brand-gold/55 hover:bg-brand-gold/10 xl:inline-flex"
          >
            <Phone className="h-4 w-4 text-brand-gold-light" aria-hidden />
            <span className="tabular-nums">{siteConfig.phone}</span>
          </a>
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
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <MobileLink item={item} pathname={pathname} />
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: primaryNav.length * 0.05 }}
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 rounded-xl border border-brand-gold/30 bg-brand-gold/10 px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-gold-light" aria-hidden />
                Call {siteConfig.phone}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function navItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/services") return pathname === "/services" || pathname.startsWith("/services/");
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavPill({
  item,
  pathname,
}: {
  item: { label: string; href: string };
  pathname: string;
}) {
  const active = navItemActive(pathname, item.href);
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
  const active = navItemActive(pathname, item.href);
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
