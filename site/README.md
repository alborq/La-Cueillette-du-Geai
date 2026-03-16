# La Cueillette du Geai

Landing page statique en HTML/CSS.

## Structure

- `index.html`
- `style.css`
- `images/`

## Publication GitHub Pages

Le dépôt est prêt pour un déploiement automatique via GitHub Pages avec GitHub Actions.

1. Pousser le dépôt sur GitHub.
2. Dans `Settings > Pages`, choisir `Source: GitHub Actions`.
3. Pousser sur la branche `main`.
4. GitHub publiera automatiquement le contenu du dossier `site/`.

Le workflow utilisé est [`/.github/workflows/deploy-pages.yml`](/srv/La-Cueillette-du-Geai/.github/workflows/deploy-pages.yml).

## Lancer le site

Option simple :

```bash
cd /srv/La-Cueillette-du-Geai
make serve
```

Puis ouvrir `http://localhost:8000`.

Changer le port :

```bash
make serve PORT=8080
```

Vérifier rapidement la structure :

```bash
make check
```

Option sans serveur :

Ouvrir directement `index.html` dans un navigateur.
