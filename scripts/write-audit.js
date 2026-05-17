const fs = require("fs");
const content = `"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SignatureText } from "@/components/ui/SignatureText";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export function HomeAuditCard() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 -mt-16 pb-24 lg:-mt-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-sm border border-champagne/10 bg-charcoal-elevated shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
          >
            <motion.div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div className="relative min-h-[280px] lg:min-h-full">
                <Image
                  src="/images/marrakech-interior.jpg"
                  alt="Audit gratuit HOSTKECH"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <motion.div className="absolute bottom-0 left-0 p-8 lg:p-10">
                  <p className="font-display text-3xl text-champagne sm:text-4xl">
                    Audit <SignatureText className="text-champagne">gratuit</SignatureText>
                  </p>
                  <p className="mt-2 text-sm text-champagne-muted">
                    Estimation personnalisée de vos revenus locatifs potentiels.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div className="p-8 lg:p-10">
                <p className="text-sm leading-relaxed text-champagne-muted">
                  Profitez d'un audit de votre bien, de votre annonce et de votre secteur à
                  Marrakech — sans engagement.
                </p>
                <motion.div className="mt-8">
                  <ContactForm compact />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Reveal>
      </motion.div>
    </section>
  );
}
`;
// Fix the template - replace all motion.div with div except the animated card
let s = content;
s = s.replace(/<motion\.div className="grid/g, '<div className="grid');
s = s.replace(/<motion\.motion.div className="relative/g, '<div className="relative');
s = s.replace(/<motion\.div className="absolute inset-0 bg-gradient/g, '<div className="absolute inset-0 bg-gradient');
s = s.replace(/<motion\.div className="absolute bottom-0/g, '<div className="absolute bottom-0');
s = s.replace(/<motion\.motion.div className="p-8/g, '<div className="p-8');
s = s.replace(/<motion\.div className="mt-8"/g, '<div className="mt-8"');
// fix closes - replace wrong closes before form column end
s = s.replace(/<\/motion\.motion.div>/g, '</motion.div>');
s = s.replace(/<\/motion\.div>/g, '</motion.div>');
// Now we have all div closes - fix the animated wrapper back to motion
s = s.replace(
  `          <div
            initial={reduce ? false : { opacity: 0, y: 48 }}`,
  `          <motion.div
            initial={reduce ? false : { opacity: 0, y: 48 }}`,
);
s = s.replace(
  `            className="overflow-hidden rounded-sm border border-champagne/10 bg-charcoal-elevated shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
          >
            <div className="grid`,
  `            className="overflow-hidden rounded-sm border border-champagne/10 bg-charcoal-elevated shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
          >
            <div className="grid`,
);
// Fix apostrophe
s = s.replace("Profitez d'un", "Profitez d&apos;un");
// Fix closing of motion card - last close before Reveal should be motion
const parts = s.split("</Reveal>");
// too hacky

fs.writeFileSync("components/home/HomeAuditCard.tsx", s);
console.log("written");
