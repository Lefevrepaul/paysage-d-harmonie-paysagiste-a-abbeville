"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { data } from "@/lib/data";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";

function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <path
        d="M20.5 3.5c-6.2.6-11 3.1-13.7 7.5-2.6 4.2-2.5 8.2-2.5 8.2s3.9.3 8.2-2.2c4.6-2.7 7.2-7.7 7.8-13.5Z"
        fill="currentColor"
      />
      <path
        d="M7 18.5c2.2-4.8 6.3-8.2 11.4-10.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity=".75"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b",
        open ? "transition-none" : "transition duration-300",
        open
          ? "border-gray-200/70 bg-white"
          : scrolled
            ? "border-gray-200/70 bg-white/80 backdrop-blur"
            : "border-transparent bg-white",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className="inline-flex items-center gap-3"
          aria-label="Aller en haut de page"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5e9] text-[#1a2f1c]">
            <LeafMark />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-medium tracking-tight text-gray-900">
              {siteConfig.company.name}
            </span>
            <span className="block text-xs font-medium uppercase tracking-wider text-[#7cb342]">
              {siteConfig.company.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation">
          {data.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 transition duration-300 hover:text-gray-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phoneE164}`}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 transition duration-300 hover:border-gray-300 hover:bg-gray-50"
            aria-label={`Appeler le ${siteConfig.contact.phoneDisplay}`}
          >
            <Phone className="h-4 w-4 text-[#7cb342]" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <Button
            variant="primary"
            size="md"
            href="#contact"
            ariaLabel="Demander un devis gratuit"
          >
            Devis gratuit
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-900 transition duration-300 hover:bg-gray-50 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-transparent"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute right-0 top-0 h-full w-[min(92vw,420px)] border-l border-gray-200 bg-white p-6"
              initial={{ x: 24 }}
              animate={{ x: 0 }}
              exit={{ x: 24 }}
              transition={{ duration: 0.25 }}
              aria-label="Menu mobile"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-900">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5e9] text-[#1a2f1c]">
                    <LeafMark />
                  </span>
                  {siteConfig.company.name}
                </span>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white transition duration-300 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid gap-2">
                {data.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-sm text-gray-700 transition duration-300 hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 grid gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  href="#contact"
                  ariaLabel="Aller au formulaire de devis"
                  className="w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  Demander un devis
                </Button>
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm text-gray-800 transition duration-300 hover:bg-gray-50"
                  aria-label={`Appeler le ${siteConfig.contact.phoneDisplay}`}
                >
                  <Phone className="h-4 w-4 text-[#7cb342]" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </motion.aside>
          </div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

