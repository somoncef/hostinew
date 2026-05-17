import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { pricingHighlights, pricingIncluded } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Tarifs conciergerie & gestion locative Marrakech",
  description:
    "Tarification sur-mesure et commission de gestion transparente pour votre bien à Marrakech. Découvrez ce qui est inclus dans notre accompagnement premium.",
  path: "/tarifs",
  keywords: [
    "tarifs conciergerie Marrakech",
    "gestion locative Marrakech",
    "commission gestion Airbnb",
    "gestion courte durée Marrakech",
  ],
});

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs"
        title="Un accompagnement sur-mesure, aligné sur votre bien"
        description="Pas de grille SaaS impersonnelle : nous construisons une proposition adaptée à votre villa, appartement ou portefeuille locatif."
        image="/images/luxury-pool.jpg"
        imageAlt="Villa avec piscine — gestion locative premium Marrakech"
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-3">
            {pricingHighlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="border border-champagne/10 p-8 lg:p-10">
                  <h2 className="font-display text-2xl text-champagne">{item.title}</h2>
                  <p className="mt-4 text-champagne-muted leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <div className="grid gap-12 border border-champagne/10 bg-charcoal-soft p-8 lg:grid-cols-2 lg:p-14">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-copper-light">
                  Ce qui est inclus
                </p>
                <h2 className="mt-4 font-display text-3xl text-champagne">
                  Une gestion premium, sans zone d&apos;ombre
                </h2>
                <p className="mt-4 text-champagne-muted leading-relaxed">
                  Notre commission de gestion couvre l&apos;ensemble des prestations nécessaires au
                  bon fonctionnement de votre location saisonnière à Marrakech.
                </p>
                <Button href="/contact" className="mt-8">
                  Demander un audit gratuit
                </Button>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {pricingIncluded.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-champagne-muted">
                    <span className="text-copper-light" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <p className="mt-12 text-center text-sm text-champagne-muted">
            Vous comparez les offres ? Lisez notre guide{" "}
            <Link href="/blog/trouver-conciergerie-marrakech" className="text-copper-light hover:text-champagne">
              Trouver la bonne conciergerie à Marrakech
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
