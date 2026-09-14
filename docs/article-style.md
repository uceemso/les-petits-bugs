# Style des articles Les Petits Bugs

Ce fichier définit les conventions visuelles à utiliser pour tous les nouveaux articles.

## Principe

Le texte reste en Markdown normal. Les blocs visuels spéciaux sont réservés à quelques usages précis.

### Comparer deux façons de répondre

Utiliser `quote-pair` uniquement lorsqu'on oppose un réflexe à une alternative.

```html
<div class="quote-pair"><div class="quote bad"><span>Le réflexe</span>« Première formulation. »</div><div class="quote good"><span>On peut essayer</span>« Formulation alternative. »</div></div>
```

### Mettre en avant une idée ou une phrase à essayer

```html
<div class="callout highlight"><span class="callout-label">Une phrase à essayer</span>« Exemple. »</div>
```

Pour un encadré neutre, utiliser simplement :

```html
<div class="callout">« Exemple. »</div>
```

### Afficher plusieurs exemples

```html
<div class="example-list"><p>« Premier exemple. »</p><p>« Deuxième exemple. »</p><p>« Troisième exemple. »</p></div>
```

### Phrase forte de clôture

```html
<p class="closing-line">« Phrase finale. »</p>
```

### Mettre en avant un livre avec des liens affiliés

Pour les articles de la rubrique Livres & ressources, utiliser le même bloc à la fin de l'article afin que les liens soient visibles sans transformer la page en page commerciale.

```html
<div class="affiliate-book-box">
  <span class="affiliate-book-label">Le livre dont je parle</span>
  <h3>Titre du livre</h3>
  <p class="affiliate-book-author">Auteur ou autrice</p>
  <p class="affiliate-book-note">Une courte phrase personnelle expliquant pourquoi ce livre est recommandé.</p>
  <div class="affiliate-book-actions">
    <a class="affiliate-book-button" href="URL_FR" rel="sponsored noopener" target="_blank">Voir la version française</a>
    <a class="affiliate-book-button affiliate-book-button-secondary" href="URL_EN" rel="sponsored noopener" target="_blank">Voir la version anglaise</a>
  </div>
  <p class="affiliate-disclosure"><em>Liens affiliés : si vous passez par eux, je peux recevoir une petite commission, sans coût supplémentaire pour vous.</em></p>
</div>
```

Quand le livre est cité naturellement plus haut dans l'article, sa première mention peut également pointer vers le lien affilié principal. L'encadré final reste le point d'appel principal.

## Règles

- Ne pas laisser une citation française seule sur une ligne sans bloc visuel.
- Utiliser `quote-pair` seulement lorsqu'il y a une vraie comparaison.
- Utiliser `callout highlight` avec parcimonie, pour l'idée importante d'une section.
- Utiliser `example-list` pour une série de phrases à tester.
- Utiliser `closing-line` au maximum une fois dans un article.
- Utiliser `affiliate-book-box` pour les recommandations de livres avec liens affiliés, avec la mention d'affiliation visible dans le bloc.
- Ne pas ajouter de nouvelles classes visuelles sans mettre à jour le système global.

Le script `scripts/check-article-formatting.mjs` vérifie automatiquement ces règles avant chaque build.


## Normalisation automatique

Avant chaque build, `scripts/normalize-article-formatting.mjs` corrige les écarts simples et sans ambiguïté : les citations Markdown et les citations françaises isolées deviennent des `callout`, les anciens titres ou labels de catégorie présents dans le corps sont retirés, et les guillemets fermants restent attachés au texte sur mobile.

Ensuite, `scripts/check-article-formatting.mjs` contrôle ce qui reste. Le build ne doit échouer que pour un problème structurel ou un choix visuel qui ne peut pas être décidé automatiquement sans risque de modifier l'intention de l'article.
