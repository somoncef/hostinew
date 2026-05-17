"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 1.8,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration, reduce]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <motion.p
        className="font-display text-4xl text-champagne sm:text-5xl"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        {prefix}
        {display}
        {suffix}
      </motion.p>
      <p className="mt-2 text-sm text-champagne-muted">{label}</p>
    </div>
  );
}
