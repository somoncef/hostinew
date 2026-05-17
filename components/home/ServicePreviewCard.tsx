"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type ServicePreviewCardProps = {
  index: number;
  title: string;
  description: string;
};

export function ServicePreviewCard({ index, title, description }: ServicePreviewCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
    >
      <Link
        href="/services"
        className="group relative block overflow-hidden bg-charcoal-soft p-8 transition-colors hover:bg-charcoal-elevated lg:p-10"
      >
        <motion.span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(184,115,51,0.08), transparent 40%)",
          }}
          aria-hidden
        />
        <span className="text-xs text-copper-light">0{index + 1}</span>
        <h3 className="mt-4 font-display text-xl text-champagne transition-colors group-hover:text-copper-light">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-champagne-muted">{description}</p>
        <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-copper-light opacity-0 transition-all duration-300 group-hover:opacity-100">
          En savoir plus →
        </span>
      </Link>
    </motion.div>
  );
}
