# Règles de tests

Ce document décrit les vérifications attendues avant de considérer une modification comme acceptable.

## Principe

- Toute modification visuelle importante doit être vérifiée.
- Toute régression déjà rencontrée doit idéalement être couverte par un test.
- Les tests doivent servir à bloquer les retours de bugs de layout, pas seulement à vérifier que les fichiers existent.

## Commandes de référence

- `make check`
- `make test`
- `make screenshot-mobile`
- `make screenshot-desktop`
- `make screenshots`

## `make check`

`make check` vérifie les éléments structurels attendus :

- présence de `site/index.html`
- présence de `site/style.css`
- présence du dossier `site/images`
- présence de `scripts/screenshot.js`
- présence de `tests/layout.test.js`

Cette cible ne remplace pas un test fonctionnel ou visuel.

## `make test`

`make test` exécute `tests/layout.test.js` avec Playwright.

Le test couvre actuellement :

- l’occupation correcte de la largeur utile sur desktop
- l’alignement vertical de certaines colonnes desktop
- la présence des éléments essentiels dans la première vue mobile
- la visibilité du hero, de l’adresse et des CTA principaux dans le viewport initial mobile

## Ce qu’un test doit protéger

Quand un bug réel apparaît, il faut essayer de le transformer en garde-fou automatisé.

Exemples de régressions déjà rencontrées :

- colonnes desktop trop étroites
- grands blancs dus à un mauvais auto-placement de grille
- CTA non visibles dans la première vue mobile
- image ou hero qui ne rentrent plus correctement

## Quand ajouter un test

Ajouter ou renforcer un test si :

- une régression de layout est observée sur capture
- un élément clé disparaît de la première vue
- une grille casse sur desktop ou mobile
- un composant interactif critique change de comportement

## Captures et tests

Les captures ne remplacent pas les tests, mais complètent leur lecture.

Workflow recommandé après une passe visuelle :

1. `make test`
2. `make screenshot-mobile`
3. `make screenshot-desktop`
4. comparaison visuelle avec les objectifs ou maquettes de référence

## Limites

- Les tests actuels sont surtout orientés layout.
- Ils ne remplacent pas une critique visuelle humaine.
- Les tests ne garantissent pas à eux seuls la qualité graphique ou éditoriale.

## Critère de validation

Une modification est acceptable si :

- `make check` passe
- `make test` passe
- les captures ne montrent pas de régression évidente
- la page reste conforme aux règles de `rules/edito.md` et `rules/graphic.md`
