import { PageHero } from "@/components/layout/PageHero";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site HOSTKECH CONCIERGERIE.",
  path: "/politique-confidentialite",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Légal" title="Politique de confidentialité" compact />
      <section className="py-16">
        <div className="prose-hostkech mx-auto max-w-3xl px-6 lg:px-10">
          <p>
            {siteConfig.name} s&apos;engage à protéger les données personnelles collectées via ce
            site (formulaire de contact, demandes d&apos;audit).
          </p>
          <h2>Données collectées</h2>
          <p>Nom, email, téléphone, informations sur votre bien et message — uniquement via le formulaire de contact.</p>
          <h2>Finalité</h2>
          <p>Répondre à vos demandes et vous proposer nos services de conciergerie et gestion locative.</p>
          <h2>Vos droits</h2>
          <p>
            Pour exercer vos droits d&apos;accès, rectification ou suppression, contactez-nous à{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> ou par téléphone au{" "}
            <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a>.
          </p>
          <p className="text-sm text-champagne-muted">
            Document placeholder — à valider avec votre conseil juridique pour conformité CNDP / RGPD.
          </p>
        </div>
      </section>
    </>
  );
}
