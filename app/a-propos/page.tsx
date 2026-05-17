import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "À propos — HOSTKECH Conciergerie Marrakech",
  description:
    "Découvrez HOSTKECH : conciergerie de luxe à Marrakech, expertise locale, standards hôteliers et accompagnement premium pour propriétaires.",
  path: "/a-propos",
  keywords: ["conciergerie de luxe Marrakech", "conciergerie Maroc", "gestion locative Marrakech"],
});

const values = [
  {
    title: "Standards hôteliers",
    text: "Chaque séjour est orchestré avec le même niveau d'exigence qu'un établissement haut de gamme.",
  },
  {
    title: "Ancrage local",
    text: "Une équipe marrakchie qui connaît les quartiers, la saisonnalité et les attentes des voyageurs internationaux.",
  },
  {
    title: "Transparence",
    text: "Reporting clair, communication directe et décisions partagées avec les propriétaires.",
  },
  {
    title: "Attention aux détails",
    text: "De l'accueil au ménage, rien n'est laissé au hasard pour préserver votre réputation en ligne.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="HOSTKECH, l'excellence au service des propriétaires"
        description="Née de la passion pour l'hospitalité marocaine et l'immobilier de prestige, HOSTKECH accompagne les propriétaires qui refusent l'approximation."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Notre histoire"
                title="Une conciergerie née à Marrakech, pour Marrakech"
                description="Nous avons créé HOSTKECH pour répondre à un besoin simple : permettre aux propriétaires de biens d'exception de performer sur Airbnb et Booking sans sacrifier leur temps ni la qualité de l'expérience voyageur."
              />
              <p className="mt-6 text-champagne-muted leading-relaxed">
                Notre équipe réunit des profils hospitality, revenue management et relation
                client. Nous croyons qu&apos;une gestion locative réussie repose sur trois piliers :
                un bien impeccable, une annonce convaincante et un accueil mémorable.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/marrakech-interior.jpg"
                  alt="Équipe HOSTKECH — conciergerie Marrakech"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="border-t border-copper/40 pt-6">
                  <h3 className="font-display text-xl text-champagne">{v.title}</h3>
                  <p className="mt-3 text-sm text-champagne-muted leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta light />
    </>
  );
}
