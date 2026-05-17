import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site HOSTKECH CONCIERGERIE : éditeur, hébergement, propriété intellectuelle et contact.",
  path: "/mentions-legales",
  noIndex: true,
});

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-champagne/10 pt-10 first:border-t-0 first:pt-0">
      <h2 className="font-display text-2xl text-champagne">{title}</h2>
      <div className="mt-4 space-y-4 text-champagne-muted leading-relaxed">{children}</div>
    </div>
  );
}

export default function MentionsLegalesPage() {
  const { legal } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Légal"
        title="Mentions légales"
        description="Informations réglementaires relatives au site internet de HOSTKECH CONCIERGERIE."
        compact
      />
      <section className="py-16 lg:py-24">
        <div className="prose-hostkech mx-auto max-w-3xl space-y-10 px-6 lg:px-10">
          <LegalBlock title="Éditeur du site">
            <p>
              <strong>{legal.companyName}</strong>
              <br />
              Forme juridique : {legal.legalForm}
              <br />
              Siège social : {legal.headquarters}
              <br />
              Activité : {legal.activity}
            </p>
            <p>
              <strong>Contact</strong>
              <br />
              Email :{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-copper-light hover:text-champagne">
                {siteConfig.email}
              </a>
              <br />
              Téléphone :{" "}
              <a href={`tel:${siteConfig.phoneTel}`} className="text-copper-light hover:text-champagne">
                {siteConfig.phone}
              </a>
            </p>
            {(legal.ice || legal.rc || legal.if) && (
              <ul className="list-inside list-disc space-y-1">
                {legal.ice && <li>ICE : {legal.ice}</li>}
                {legal.rc && <li>Registre du commerce (RC) : {legal.rc}</li>}
                {legal.if && <li>Identifiant fiscal (IF) : {legal.if}</li>}
                {legal.cnss && <li>CNSS : {legal.cnss}</li>}
              </ul>
            )}
          </LegalBlock>

          <LegalBlock title="Directeur de la publication">
            <p>{legal.publicationDirector}</p>
          </LegalBlock>

          <LegalBlock title="Hébergement du site">
            <p>
              Le site est hébergé par <strong>{legal.hosting.name}</strong>, {legal.hosting.address}.
              <br />
              Site web :{" "}
              <a
                href={legal.hosting.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper-light hover:text-champagne"
              >
                {legal.hosting.website}
              </a>
            </p>
          </LegalBlock>

          <LegalBlock title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des éléments composant ce site (textes, visuels, logo, structure,
              graphisme) est protégé par le droit de la propriété intellectuelle. Toute reproduction,
              représentation ou exploitation non autorisée, totale ou partielle, est interdite sans
              accord préalable écrit de {legal.companyName}.
            </p>
            <p>
              Le logo et la marque HOSTKECH sont la propriété de {legal.companyName}. Les marques et
              logos de tiers (Airbnb, Booking.com, etc.) mentionnés sur ce site appartiennent à leurs
              propriétaires respectifs.
            </p>
          </LegalBlock>

          <LegalBlock title="Responsabilité">
            <p>
              {legal.companyName} s&apos;efforce d&apos;assurer l&apos;exactitude des informations
              publiées sur ce site. Toutefois, elle ne saurait garantir l&apos;absence d&apos;erreurs
              ou d&apos;omissions. L&apos;utilisateur reconnaît utiliser les informations du site sous
              sa seule responsabilité.
            </p>
            <p>
              Le site peut contenir des liens vers des sites tiers. {legal.companyName} n&apos;exerce
              aucun contrôle sur leur contenu et décline toute responsabilité quant à leur
              consultation.
            </p>
          </LegalBlock>

          <LegalBlock title="Données personnelles">
            <p>
              Les données collectées via le formulaire de contact sont traitées conformément à notre{" "}
              <Link href="/politique-confidentialite" className="text-copper-light hover:text-champagne">
                politique de confidentialité
              </Link>
              .
            </p>
          </LegalBlock>

          <LegalBlock title="Droit applicable">
            <p>
              Les présentes mentions légales sont régies par le droit marocain. En cas de litige, et
              à défaut de résolution amiable, les tribunaux compétents de Marrakech seront seuls
              compétents, sous réserve des dispositions légales impératives applicables.
            </p>
          </LegalBlock>

          <p className="border-t border-champagne/10 pt-8 text-sm text-champagne-muted">
            Dernière mise à jour : mai 2026. Pour toute question :{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-copper-light hover:text-champagne">
              {siteConfig.email}
            </a>{" "}
            ou{" "}
            <a href={`tel:${siteConfig.phoneTel}`} className="text-copper-light hover:text-champagne">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
