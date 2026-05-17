"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type FinalCtaProps = {
  light?: boolean;
};

export function FinalCta({ light = false }: FinalCtaProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className={
        light
          ? "section-light border-t border-charcoal/10 py-24 lg:py-32"
          : "relative overflow-hidden py-24 lg:py-32"
      }
    >
      {!light && !reduce && (
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
          <motion.div
            className="absolute -right-1/4 top-0 h-96 w-96 rounded-full bg-copper/20 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-1/4 bottom-0 h-80 w-80 rounded-full bg-copper-dark/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      )}

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <p
            className={`text-xs uppercase tracking-[0.28em] ${light ? "text-copper-dark" : "text-copper-light"}`}
          >
            Audit gratuit
          </p>
          <h2
            className={`mt-4 font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl ${light ? "text-charcoal" : "text-champagne"}`}
          >
            Confiez votre bien à une conciergerie qui pense comme un propriétaire exigeant
          </h2>
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed ${light ? "text-muted" : "text-champagne-muted"}`}
          >
            Demandez un audit personnalisé de votre appartement ou villa à Marrakech. Nous
            analysons le potentiel locatif, la qualité de l&apos;annonce et le niveau de service
            attendu par vos voyageurs.
          </p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Button href="/contact" size="lg">
              Demander un audit gratuit
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Découvrir nos services
            </Button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
