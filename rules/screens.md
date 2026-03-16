# Règles de captures d'écran

Ce document décrit comment produire et utiliser les captures d’écran dans le workflow du projet.

## Objectif

Les captures servent à :

- vérifier le rendu réel mobile et desktop
- comparer une itération à une proposition graphique
- identifier les régressions que les tests automatiques ne détectent pas

## Outil utilisé

Les captures sont générées avec :

- `Playwright`
- le script [scripts/screenshot.js](../scripts/screenshot.js)

## Commandes disponibles

- `make screenshot-mobile`
- `make screenshot-desktop`
- `make screenshots`

Sortie par défaut :

- `screenshots/mobile.png`
- `screenshots/desktop.png`

## Viewports de référence

Les captures actuelles utilisent :

- mobile : `390 x 844`
- desktop : `1440 x 1200`

Ces tailles servent de base de comparaison et de validation.

## Quand faire des captures

Faire des captures :

- après toute modification du hero
- après toute modification de grille ou de colonnes
- après une refonte de section
- après une modification responsive importante
- après correction d’un bug visuel signalé via screenshot

## Ce qu’il faut vérifier sur capture

### Mobile

- éléments essentiels visibles dans la première vue
- hero lisible
- CTA visibles
- adresse visible
- absence d’écrasement d’image
- absence de cartes minuscules ou tassées

### Desktop

- bonne utilisation de la largeur
- absence de grands blancs structurels
- alignement des colonnes
- poids visuel cohérent entre sections
- hero bien équilibré
- grilles lisibles

## Dossier `screenshots/`

- les captures générées vont dans `screenshots/`
- ce dossier est ignoré par Git
- il sert au travail local, à la comparaison et au feedback

## Dossier `feedback/`

Le dossier `feedback/` sert de référence externe :

- captures de problèmes constatés
- maquettes ou propositions de direction
- assets servant à corriger le rendu

Les fichiers de `feedback/` peuvent servir de base de comparaison pour rapprocher le site d’une intention validée.

## Bon usage

- ne pas se fier uniquement au test automatisé
- toujours relire visuellement les captures
- utiliser les captures pour comparer avant/après
- quand une capture révèle un vrai bug, essayer d’en déduire un test
