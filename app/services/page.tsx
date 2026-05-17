import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services de conciergerie & gestion Airbnb Marrakech",
  description:
    "Découvrez nos services de conciergerie à Marrakech : optimisation Airbnb, revenue management, check-in premium, ménage hôtelier et assistance propriétaire.",
  path: "/services",
  keywords: [
    "conciergerie Marrakech",
    "gestion Airbnb Marrakech",
    "optimisation annonce Airbnb Marrakech",
    "gestion location courte durée Marrakech",
    "service conciergerie Marrakech",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Une conciergerie complète pour votre bien à Marrakech"
        description="De la création d'annonce à l'expérience voyageur, chaque service est pensé pour maximiser vos revenus et protéger votre patrimoine."
      >
        <Link
          href="/contact"
          className="inline-flex items-center text-sm text-copper-light hover:text-champagne"
        >
          Demander un audit gratuit →
        </Link>
      </PageHero>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Expertise"
            title="Gestion locative courte durée & conciergerie de luxe"
            description="HOSTKECH accompagne propriétaires, investisseurs et hôtes exigeants sur l'ensemble du cycle locatif."
          />

          <div className="mt-16 space-y-0 divide-y divide-champagne/10 border-y border-champagne/10">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.04}>
                <article className="grid gap-6 py-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
                  <h2 className="font-display text-2xl text-champagne">{service.title}</h2>
                  <p className="text-champagne-muted leading-relaxed">{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 rounded-sm border border-champagne/10 bg-charcoal-soft p-8 lg:p-10">
            <p className="text-champagne-muted leading-relaxed">
              Vous souhaitez aller plus loin ? Consultez nos articles sur la{" "}
              <Link href="/blog/trouver-conciergerie-marrakech" className="text-copper-light hover:text-champagne">
                conciergerie à Marrakech
              </Link>{" "}
              et la{" "}
              <Link href="/blog/maximiser-revenus-conciergerie-airbnb" className="text-copper-light hover:text-champagne">
                maximisation des revenus locatifs
              </Link>
              , ou{" "}
              <Link href="/contact" className="text-copper-light hover:text-champagne">
                contactez-nous
              </Link>{" "}
              pour un audit personnalisé.
            </p>
          </div>
        </div>
      </section>

      <FinalCta light />
    </>
  );
}
