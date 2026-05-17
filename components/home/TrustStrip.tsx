"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trustPoints } from "@/lib/content";

const items = [...trustPoints, ...trustPoints];

export function TrustStrip() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section className="border-y border-champagne/10 bg-charcoal-soft py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 lg:px-10">
          {trustPoints.map((point) => (
            <span
              key={point}
              className="text-xs font-medium uppercase tracking-[0.18em] text-champagne-muted"
            >
              {point}
            </span>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-y border-champagne/10 bg-charcoal-soft py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-charcoal-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-charcoal-soft to-transparent" />
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {items.map((point, i) => (
          <span
            key={`${point}-${i}`}
            className="flex shrink-0 items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-champagne-muted"
          >
            <span className="h-1 w-1 rounded-full bg-copper-light" aria-hidden />
            {point}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
