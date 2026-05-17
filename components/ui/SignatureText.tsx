"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SignatureTextProps = {
  children: React.ReactNode;
  className?: string;
  underlineClassName?: string;
};

export function SignatureText({ children, className, underlineClassName }: SignatureTextProps) {
  const reduce = useReducedMotion();

  return (
    <span className={cn("relative inline-block", className)}>
      <span className="font-signature text-[1.15em] text-copper-light">{children}</span>
      <svg
        className={cn(
          "absolute -bottom-1 left-0 w-full overflow-visible",
          underlineClassName,
        )}
        height="12"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M2 8 C 40 2, 80 12, 120 6 S 180 2, 198 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-copper"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </span>
  );
}
