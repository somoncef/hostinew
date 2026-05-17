"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SignatureText } from "@/components/ui/SignatureText";

export function ContactHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-28">
      <Image
        src="/images/hero-villa.jpg"
        alt="Contact HOSTKECH Marrakech"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60" />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-copper-light">Contact</p>
        <h1 className="mt-4 font-display text-4xl text-champagne sm:text-5xl lg:text-6xl">
          <SignatureText className="text-champagne">Contactez</SignatureText>-nous
        </h1>
        <p className="mt-4 max-w-xl text-champagne-muted">
          Besoin d&apos;un audit gratuit ou d&apos;informations sur notre conciergerie à Marrakech
          ? Notre équipe vous répond sous 24h.
        </p>
      </motion.div>
    </section>
  );
}
