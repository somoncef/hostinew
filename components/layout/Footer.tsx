import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site";

const footerLinks = {
  services: [
    { href: "/services", label: "Nos services" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/faq", label: "FAQ" },
  ],
  societe: [
    { href: "/a-propos", label: "À propos" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-champagne/10 bg-charcoal-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="footer" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-champagne-muted">
              Conciergerie de luxe et gestion locative courte durée à Marrakech. Nous maximisons
              vos revenus tout en offrant une expérience voyageur d&apos;exception.
            </p>
            <p className="mt-4 text-sm text-champagne-muted">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-champagne">
                {siteConfig.email}
              </a>
              <br />
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="hover:text-champagne"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-light">Services</p>
            <ul className="mt-5 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-champagne-muted transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-light">Société</p>
            <ul className="mt-5 space-y-3">
              {footerLinks.societe.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-champagne-muted transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-light">Légal</p>
            <ul className="mt-5 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-champagne-muted transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-champagne/10 pt-8 text-xs text-champagne-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>Conciergerie Marrakech · Gestion Airbnb · Location saisonnière Maroc</p>
        </div>
      </div>
    </footer>
  );
}
