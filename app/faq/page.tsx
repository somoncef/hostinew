import Link from "next/link";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/lib/content";
import { buildPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "FAQ — Conciergerie & gestion Airbnb Marrakech",
  description:
    "Réponses aux questions fréquentes sur notre service de conciergerie à Marrakech : tarifs, check-in, ménage, Airbnb, Booking et démarrage de collaboration.",
  path: "/faq",
  keywords: [
    "FAQ conciergerie Marrakech",
    "gestion Airbnb Marrakech",
    "service conciergerie Marrakech",
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd([...faqItems])} />
      <PageHero
        eyebrow="FAQ"
        title="Vos questions, nos réponses"
        description="Tout ce que les propriétaires nous demandent avant de confier leur bien à HOSTKECH."
        compact
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <FaqAccordion items={[...faqItems]} />
          <p className="mt-12 text-center text-champagne-muted">
            Une autre question ?{" "}
            <Link href="/contact" className="text-copper-light hover:text-champagne">
              Contactez notre équipe
            </Link>{" "}
            ou découvrez nos{" "}
            <Link href="/services" className="text-copper-light hover:text-champagne">
              services
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
