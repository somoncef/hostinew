"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-champagne/5 bg-charcoal/90 py-3 backdrop-blur-xl"
          : "bg-gradient-to-b from-charcoal/80 to-transparent py-5",
      )}
    >
      <motion.div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo variant="nav" className="relative z-50" priority />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navLinks.slice(1, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-champagne-muted transition-colors hover:text-champagne"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" size="md">
            Audit gratuit
          </Button>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={cn(
              "h-px w-6 bg-champagne transition-all duration-300",
              open && "translate-y-[5px] rotate-45",
            )}
          />
          <span className={cn("h-px w-6 bg-champagne transition-opacity", open && "opacity-0")} />
          <span
            className={cn(
              "h-px w-6 bg-champagne transition-all duration-300",
              open && "-translate-y-[5px] -rotate-45",
            )}
          />
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav
              className="flex h-full flex-col justify-center gap-6 px-10"
              aria-label="Menu mobile"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-champagne"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-6"
              >
                <Button href="/contact" size="lg">
                  Demander un audit gratuit
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
