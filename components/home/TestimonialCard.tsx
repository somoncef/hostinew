"use client";

import { motion, useReducedMotion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const reduce = useReducedMotion();
  const { quote, name, role } = testimonial;

  return (
    <motion.blockquote
      className="flex h-full flex-col border border-champagne/10 bg-charcoal-soft p-8"
      whileHover={reduce ? undefined : { y: -8, borderColor: "rgba(201, 168, 124, 0.25)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="flex-1 text-champagne-muted leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-8 border-t border-champagne/10 pt-6">
        <cite className="not-italic font-medium text-champagne">{name}</cite>
        <p className="mt-1 text-sm text-champagne-muted">{role}</p>
      </footer>
    </motion.blockquote>
  );
}
