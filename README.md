# HOSTKECH CONCIERGERIE — Site marketing

Site vitrine premium pour **HOSTKECH CONCIERGERIE** : conciergerie de luxe et gestion locative courte durée à Marrakech (Airbnb, Booking).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Blog Markdown (`content/blog/`)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

```env
NEXT_PUBLIC_SITE_URL=https://www.hostkech.com
```

## Pages

- Accueil, Services, Tarifs, À propos, FAQ, Contact
- Blog (index + articles dynamiques)
- Mentions légales, Politique de confidentialité

## Blog

Voir [content/blog/README.md](content/blog/README.md) pour ajouter un article Markdown.

## Build

```bash
npm run build
npm start
```

## Logo

Fichiers de marque dans `public/` :

- `hostkechLogopng.png` — navbar, footer, favicon (fond transparent)
- `hostkechLogo.jpeg` — variante fond noir (SEO / usages print)

Le composant `components/brand/Logo.tsx` centralise l'affichage.
