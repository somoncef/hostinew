# Blog HOSTKECH — Ajouter un article

## Structure

- **Contenu** : fichiers `.md` dans `content/blog/`
- **Images de couverture** : `public/blog/` (ex. `/blog/mon-image.jpg`)

## Créer un nouvel article

1. Copiez un fichier existant dans `content/blog/`.
2. Renommez-le (ex. `mon-nouvel-article.md`).
3. Mettez à jour le **frontmatter** :

```yaml
---
title: "Titre SEO de l'article"
slug: mon-nouvel-article
description: "Meta description (150–160 caractères recommandés)"
date: "2026-05-16"
coverImage: "/blog/mon-image.jpg"
keywords:
  - mot-clé 1
  - mot-clé 2
author: "HOSTKECH CONCIERGERIE"
category: "Catégorie"
---
```

4. Ajoutez votre image dans `public/blog/`.
5. Rédigez le corps en **Markdown** (titres `##`, listes, liens internes vers `/services`, `/contact`, etc.).
6. Le slug dans l’URL sera : `/blog/mon-nouvel-article`

## Déploiement

Les pages blog sont générées statiquement au build (`generateStaticParams`). Après ajout d’un article :

```bash
npm run build
```

Aucune modification de code n’est nécessaire si le frontmatter est valide.
