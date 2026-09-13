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

## Règles

- Ne pas laisser une citation française seule sur une ligne sans bloc visuel.
- Utiliser `quote-pair` seulement lorsqu'il y a une vraie comparaison.
- Utiliser `callout highlight` avec parcimonie, pour l'idée importante d'une section.
- Utiliser `example-list` pour une série de phrases à tester.
- Utiliser `closing-line` au maximum une fois dans un article.
- Ne pas ajouter de nouvelles classes visuelles sans mettre à jour le système global.

Le script `scripts/check-article-formatting.mjs` vérifie automatiquement ces règles avant chaque build.


## Normalisation automatique

Avant chaque build, `scripts/normalize-article-formatting.mjs` corrige les écarts simples et sans ambiguïté : les citations Markdown et les citations françaises isolées deviennent des `callout`, les anciens titres ou labels de catégorie présents dans le corps sont retirés, et les guillemets fermants restent attachés au texte sur mobile.

Ensuite, `scripts/check-article-formatting.mjs` contrôle ce qui reste. Le build ne doit échouer que pour un problème structurel ou un choix visuel qui ne peut pas être décidé automatiquement sans risque de modifier l'intention de l'article.
