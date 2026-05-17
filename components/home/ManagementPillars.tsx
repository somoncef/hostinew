"use client";

import { motion, useReducedMotion } from "framer-motion";
import { managementPillars } from "@/lib/content";
import { SignatureText } from "@/components/ui/SignatureText";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<string, string> = {
  time: "◷",
  revenue: "€",
  peace: "✦",
};

export function ManagementPillars() {
  const reduce = useReducedMotion();

  return (
    <section className="section-light pb-20 pt-4 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
            La gestion locative premium à{" "}
            <SignatureText className="text-charcoal">Marrakech</SignatureText>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {managementPillars.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -8 }}
              className="rounded-sm border border-charcoal/8 bg-white p-8 shadow-[0_20px_50px_-24px_rgba(12,11,10,0.15)] transition-shadow hover:shadow-[0_28px_60px_-20px_rgba(184,115,51,0.2)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-copper/15 font-display text-lg text-copper-dark">
                {icons[pillar.icon]}
              </span>
              <h3 className="mt-6 font-display text-xl text-charcoal">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
