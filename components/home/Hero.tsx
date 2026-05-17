"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { SignatureText } from "@/components/ui/SignatureText";

const benefitPills = [
  "Entretien & ménage hôtelier",
  "Rentabilité optimisée",
  "Tranquillité d'esprit",
  "Assistance 7j/7",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {!reduce && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-copper/15 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute -right-24 bottom-1/3 h-72 w-72 rounded-full bg-copper-dark/20 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
        </>
      )}

      <motion.div style={{ y, opacity, scale }} className="absolute inset-0">
        <Image
          src="/images/hero-villa.jpg"
          alt="Villa de luxe à Marrakech — gestion locative premium"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/60" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-28 pt-36 lg:px-10 lg:pb-36 lg:pt-44">
        <div className="max-w-4xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-copper-light"
          >
            Conciergerie de luxe · Marrakech
          </motion.p>

          <h1 className="font-display text-[2.35rem] leading-[1.1] tracking-tight text-champagne sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            <motion.span
              className="block overflow-hidden"
              initial={reduce ? false : { opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Gagnez sereinement,
            </motion.span>
            <motion.span
              className="mt-1 block overflow-hidden sm:mt-2"
              initial={reduce ? false : { opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              nous gérons votre{" "}
              <SignatureText className="inline text-champagne">logement</SignatureText>
            </motion.span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-champagne-muted lg:text-xl"
          >
            HOSTKECH décharge les propriétaires de la gestion quotidienne tout en maximisant
            les revenus locatifs à Marrakech.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="/contact" size="lg">
              Demander un audit gratuit
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Nos services
            </Button>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {benefitPills.map((pill, i) => (
              <motion.li
                key={pill}
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.06 }}
                className="rounded-full border border-champagne/15 bg-charcoal/40 px-4 py-2 text-xs text-champagne-muted backdrop-blur-md"
              >
                {pill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
