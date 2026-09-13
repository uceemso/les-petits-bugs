# Les Petits Bugs

Journal parental français, concret, curieux, accessible, légèrement geek et drôle.

Le site est généré par Astro à partir d’articles Markdown et publié gratuitement sur GitHub Pages. Chaque push sur `main` installe les dépendances, construit `dist/` puis déploie via `.github/workflows/pages.yml`.

## Ajouter un nouvel article

Crée le prochain fichier numéroté dans `src/content/articles/`, par exemple `article-09-mon-sujet.md`, puis ajoute son illustration associée dans `public/images/articles/`, par exemple `article-09-mon-sujet.webp`.

```yaml
---
title: "Titre de l’article"
description: "Une description courte et fidèle."
date: 2026-09-15
updated: 2026-09-15
category: "Émotions"
image: "/images/articles/article-09-mon-sujet.webp"
imageAlt: "Description accessible de l’image."
slug: mon-article
readingTime: "5 min de lecture"
---
```

Le fichier Markdown suffit : la carte d’accueil, la page article, les métadonnées, les données structurées, les liens « À lire aussi » et le sitemap sont générés automatiquement.

## SEO et publication

Les layouts génèrent les titres, descriptions, URL canoniques, Open Graph, Twitter Cards et données structurées Schema.org. Les articles utilisent `BlogPosting`. La rubrique Voyages reste accessible mais est `noindex` tant qu’elle ne contient pas de véritable article.

Le site public est disponible à l’adresse `https://lespetitsbugs.com`. Les URL canoniques, `robots.txt` et `sitemap.xml` utilisent cette adresse.

## Organisation

```
src/
├── content/articles/       → articles Markdown
├── components/             → en-tête, pied de page, cartes
├── layouts/                → layouts global et article
├── pages/                  → accueil, À propos, articles, sitemap, robots
└── styles/global.css       → identité visuelle existante
public/
├── images/articles/        → illustrations des articles
└── logos/                  → logo et icônes
```
