"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  compact?: boolean;
  showLegal?: boolean;
};

export function ContactForm({ compact = false, showLegal = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-copper/30 bg-charcoal-soft p-8 text-center">
        <p className="font-display text-xl text-champagne">Merci pour votre message</p>
        <p className="mt-3 text-sm text-champagne-muted">
          Notre équipe vous recontactera sous 24 heures ouvrées.
        </p>
      </div>
    );
  }

  const inputClass = cn(
    "w-full border-b border-champagne/15 bg-transparent py-2.5 text-champagne placeholder:text-champagne-muted/50 focus:border-copper-light focus:outline-none transition-colors",
    compact && "py-2 text-sm",
  );

  const labelClass = "mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-champagne-muted";

  return (
    <form onSubmit={handleSubmit} className={cn(compact ? "space-y-5" : "space-y-8")}>
      {compact ? (
        <>
          <div>
            <label htmlFor="address" className={labelClass}>
              Adresse du bien
            </label>
            <input id="address" name="address" className={inputClass} placeholder="Quartier, Marrakech" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="rooms" className={labelClass}>
                Chambres
              </label>
              <select id="rooms" name="rooms" className={cn(inputClass, "cursor-pointer")}>
                <option value="studio">Studio</option>
                <option value="1">1 chambre</option>
                <option value="2">2 chambres</option>
                <option value="3">3 chambres</option>
                <option value="4+">4 chambres ou plus</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone-c" className={labelClass}>
                Téléphone *
              </label>
              <input
                id="phone-c"
                name="phone"
                type="tel"
                required
                className={inputClass}
                placeholder="+212 666-641670"
              />
            </div>
          </div>
          <div>
            <label htmlFor="name-c" className={labelClass}>
              Nom complet
            </label>
            <input id="name-c" name="name" required className={inputClass} placeholder="Votre nom" />
          </div>
          <div>
            <label htmlFor="email-c" className={labelClass}>
              Email
            </label>
            <input
              id="email-c"
              name="email"
              type="email"
              className={inputClass}
              placeholder="vous@email.com"
            />
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Nom complet
              </label>
              <input id="name" name="name" required className={inputClass} placeholder="Votre nom" />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="vous@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Téléphone
            </label>
            <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+212 666-641670" />
          </div>
          <div>
            <label htmlFor="property" className={labelClass}>
              Type de bien
            </label>
            <select id="property" name="property" className={cn(inputClass, "cursor-pointer")}>
              <option value="appartement">Appartement</option>
              <option value="villa">Villa</option>
              <option value="riad">Riad</option>
              <option value="investissement">Investissement / plusieurs biens</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={cn(inputClass, "resize-none")}
              placeholder="Décrivez votre bien et vos objectifs..."
            />
          </div>
        </>
      )}

      {showLegal && (
        <p className="text-[11px] leading-relaxed text-champagne-muted/80">
          Conformément à la loi 09-08, vous disposez d&apos;un droit d&apos;accès et de rectification
          de vos données. Consultez nos{" "}
          <Link href="/mentions-legales" className="text-copper-light hover:text-champagne">
            mentions légales
          </Link>
          .
        </p>
      )}

      {showLegal && (
        <label className="flex gap-2 text-[11px] text-champagne-muted">
          <input type="checkbox" required className="mt-0.5 accent-copper" />
          J&apos;accepte les mentions légales et la politique de confidentialité.
        </label>
      )}

      <Button type="submit" size={compact ? "md" : "lg"} className="w-full sm:w-auto">
        {compact ? "Recevoir mon audit" : "Demander un audit gratuit"}
      </Button>
    </form>
  );
}
