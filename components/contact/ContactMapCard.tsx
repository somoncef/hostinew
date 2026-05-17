"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { SignatureText } from "@/components/ui/SignatureText";
import { ContactForm } from "@/components/contact/ContactForm";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.5!2d-7.9811!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d961c0c9b%3A0x5950b6534f87adb8!2sMarrakech!5e0!3m2!1sfr!2sma!4v1";

export function ContactMapCard() {
  const reduce = useReducedMotion();
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Bonjour HOSTKECH, je souhaite vous contacter.",
  )}`;

  return (
    <section className="relative pb-24 pt-8 lg:pb-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Carte pleine largeur */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-[420px] overflow-hidden rounded-sm border border-champagne/10 sm:h-[480px] lg:h-[520px]"
        >
          <iframe
            title="Carte — HOSTKECH Conciergerie Marrakech"
            src={MAP_EMBED}
            className="absolute inset-0 h-full w-full grayscale-[30%] contrast-[1.05] invert-[0.92] hue-rotate-180"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-charcoal/20" />
        </motion.div>

        {/* Carte formulaire flottante */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto -mt-24 max-w-4xl sm:-mt-32 lg:-mt-40"
        >
          <div className="overflow-hidden rounded-sm border border-champagne/15 bg-charcoal-elevated shadow-[0_32px_80px_-24px_rgba(0,0,0,0.7)]">
            <div className="grid lg:grid-cols-[1fr_1.2fr]">
              <div className="border-b border-champagne/10 bg-charcoal-soft p-8 lg:border-b-0 lg:border-r">
                <p className="text-xs uppercase tracking-[0.2em] text-copper-light">Coordonnées</p>
                <h2 className="mt-3 font-display text-2xl text-champagne">
                  <SignatureText>Contactez</SignatureText>-nous
                </h2>
                <p className="mt-3 text-sm text-champagne-muted">
                  Transformez votre bien en source de revenus sereine à Marrakech.
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <span className="text-champagne-muted">Téléphone</span>
                    <br />
                    <a href={`tel:${siteConfig.phoneTel}`} className="text-champagne hover:text-copper-light">
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <span className="text-champagne-muted">Email</span>
                    <br />
                    <a href={`mailto:${siteConfig.email}`} className="text-champagne hover:text-copper-light">
                      {siteConfig.email}
                    </a>
                  </li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex border border-[#25D366]/40 px-5 py-2.5 text-sm text-champagne transition-colors hover:bg-[#25D366]/10"
                >
                  WhatsApp
                </a>
              </div>
              <div className="p-8">
                <ContactForm compact showLegal />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
