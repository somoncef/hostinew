"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  sizes?: string;
  speed?: number;
};

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  sizes = "100vw",
  speed = 0.12,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", containerClassName)}>
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-0 scale-110"
      >
        <Image src={src} alt={alt} fill className={cn("object-cover", className)} sizes={sizes} />
      </motion.div>
    </div>
  );
}
