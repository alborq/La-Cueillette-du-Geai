# La Cueillette du Geai

Site vitrine statique pour La Cueillette du Geai.

Le projet est centré sur une page d’accueil éditoriale et commerciale pour une herboristerie paysanne à Biziat, dans l’Ain.

## Structure

- [site/index.html](site/index.html) : page principale
- [site/style.css](site/style.css) : styles
- [site/images](site/images) : images utilisées par le site
- [tests/layout.test.js](tests/layout.test.js) : tests de layout Playwright
- [scripts/screenshot.js](scripts/screenshot.js) : génération de captures
- [feedback](feedback) : captures et références de travail
- [rules](rules) : règles éditoriales, graphiques et de workflow

## Workflow de travail

Méthode recommandée :

1. Lire les fichiers concernés
2. Corriger ou améliorer le HTML/CSS/JS
3. Vérifier avec `make test`
4. Vérifier avec `make check`
5. Générer des captures si la modification est visuelle
6. Comparer le rendu avec les problèmes signalés ou les références dans `feedback/`

## Commandes utiles

```bash
make help
make check
make test
make serve
make screenshot-mobile
make screenshot-desktop
make screenshots
```

## Règles de référence

- [rules/edito.md](rules/edito.md) : règles éditoriales
- [rules/graphic.md](rules/graphic.md) : règles graphiques
- [rules/tests.md](rules/tests.md) : règles de tests
- [rules/screens.md](rules/screens.md) : règles de captures
- [rules/autonomie.md](rules/autonomie.md) : manière de travailler en autonomie

## Références de contenu et de rendu

Les fichiers suivants servent régulièrement de référence :

- [site/index.html](site/index.html)
- [site/style.css](site/style.css)
- [feedback](feedback)

## Validation attendue

Avant de considérer une modification comme propre :

- `make check` doit passer
- `make test` doit passer
- les captures doivent rester cohérentes
- les changements doivent respecter les règles dans `rules/`

## Notes

- Le site n’est pas une boutique en ligne.
- Les captures générées dans `screenshots/` sont destinées au travail local.
- Les assets de `feedback/` peuvent servir de base de comparaison visuelle ou de direction.
