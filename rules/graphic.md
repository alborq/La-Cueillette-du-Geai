# Règles graphiques

Ce document synthétise les règles de direction artistique et d’interface actuellement utilisées sur le site de La Cueillette du Geai.

## Direction générale

- L’univers visuel doit rester `artisanal`, `végétal`, `éditorial` et `paysan`.
- Le rendu doit être `sobre`, `chaleureux`, `crédible` et `haut de gamme sans luxe démonstratif`.
- Il faut éviter tout rendu générique de type :
  - bootstrap
  - SaaS
  - dashboard
  - landing page marketing standardisée

Le site doit paraître conçu pour une activité réelle, locale, patiente et enracinée.

## Ambiance visuelle

- La base est un fond clair, chaleureux, légèrement patiné.
- L’ambiance doit évoquer :
  - le papier
  - les herbiers
  - l’affiche imprimée
  - l’atelier artisanal
  - le végétal
- Les textures, filets, ombres et bordures doivent rester fines et discrètes.
- Les effets doivent soutenir l’univers, jamais prendre le dessus.

## Palette de couleurs

Palette de référence actuellement utilisée :

- `--paper: #f8e9c5`
- `--paper-light: #fbf4e6`
- `--paper-deep: #ead9b2`
- `--ink: #20372c`
- `--ink-soft: #596b5f`
- `--green: #6a7f61`
- `--green-deep: #3d5143`
- `--gold: #b79b61`

Règles :

- Le fond principal doit rester dans les beiges chauds.
- Le texte principal doit rester dans des verts profonds ou des encres assourdies.
- Le vert foncé sert de couleur d’autorité pour :
  - CTA principaux
  - contrastes forts
  - certains accents structurants
- L’or reste un accent discret, pas une couleur dominante.
- Éviter les contrastes trop durs ou les couleurs froides étrangères à l’univers.

## Contraste

- La lisibilité reste prioritaire.
- Les textes de lecture doivent toujours être lisibles sur fond beige.
- Les micro-textes ne doivent jamais tomber dans un contraste trop faible.
- Les zones sombres doivent garder un texte clair mais doux, pas blanc pur agressif si ce n’est pas nécessaire.

## Typographie

Deux familles de référence :

- titres et corps éditorial : serif classique
- labels, méta-informations, microcopy : sans-serif simple

Règles :

- Ne pas multiplier les polices.
- Garder une hiérarchie claire entre :
  - labels
  - corps
  - `h3`
  - `h2`
  - `h1`
- Les labels uppercase doivent rester rares, cohérents et discrets.
- Éviter les tailles trop petites pour les CTA, adresses, prix et éléments d’action.

## Mise en page

- Le site doit utiliser correctement la largeur disponible sur desktop.
- Il faut éviter les colonnes trop étroites avec de grands vides inutiles.
- Le rythme doit alterner :
  - sections ouvertes
  - cartes
  - blocs visuels
  - respirations

Règles actuelles :

- largeur de conteneur large
- marges latérales réduites mais propres
- sections verticalement espacées sans excès
- grids lisibles sur desktop
- adaptation propre sur tablette et mobile

## Hero

Le hero est une zone stratégique.

Règles :

- hero en pleine largeur sur desktop
- texte à gauche, image à droite
- image large, pas enfermée dans une carte artificielle
- fondu entre texte et image propre, progressif et basé sur la même couleur que le fond
- pas de coupure visible dans le gradient
- hero pas trop haut
- `h1` fort mais pas géant
- CTA visible dès la première vue
- adresse visible dès la première vue
- l’image hero doit être un vrai support visuel, pas un logo agrandi ni une planche décorative hors sujet

## Images

- Priorité aux images réelles quand elles renforcent la crédibilité.
- Les visuels botaniques ou affiches servent :
  - la narration
  - la cohérence de marque
  - la section plantes
- Une image ne doit pas être écrasée ou déformée.
- Les ratios doivent être respectés.
- Les images utilisées dans les cartes doivent paraître intégrées au support visuel.

## Cartes et encadrements

- Les cartes doivent rester cohérentes avec l’univers imprimé/artisanal.
- Bordures fines.
- Ombres douces.
- Coins arrondis, mais pas exagérés.
- Les cartes ne doivent pas toutes avoir le même poids visuel.

Règles :

- les cartes produits peuvent être plus affirmées
- les cartes méthode doivent être un peu plus discrètes
- les cartes plantes doivent lire comme des objets uniques et cliquables
- les noms de plantes doivent être intégrés dans la carte, pas flottants dessous

## Menu

- Le menu doit rester simple, sobre et inspiré des affiches.
- Il ne doit jamais ressembler à une barre de navigation bootstrap ou application web.
- Les liens doivent paraître éditoriaux, pas “buttonisés”.
- Sur mobile, la navigation secondaire peut être masquée pour préserver la clarté de la première vue.

## Boutons et CTA

- Un CTA principal doit ressortir clairement.
- Les CTA secondaires doivent rester plus discrets.
- Les boutons doivent être lisibles, suffisamment présents et cohérents avec la palette.
- Éviter les styles trop modernes génériques ou trop glossy.

## Dividers

- Les dividers servent à rythmer la page et à rappeler l’iconographie.
- Ils doivent être centrés.
- Ils doivent span correctement la largeur dans les layouts en grille.
- Ils ne doivent pas casser l’auto-placement des colonnes.

## Section Plantes

Règles actuelles :

- grille en `4 colonnes` sur desktop
- `2 colonnes` sur tablette
- `1 colonne` sur mobile
- chaque carte est cliquable
- le nom de la plante est dans la carte
- les cartes doivent être assez grandes pour être lisibles

Les plantes actuellement montrées :

- Camomille
- Menthe aquatique
- Menthe poivrée
- Reine des prés
- Sureau
- Thym citron
- Verveine citron

## Modales

Règles visuelles des modales plantes :

- fond de modal supprimé
- image centrée et mise en valeur
- arrière-plan assombri
- fermeture en haut à droite
- bouton de fermeture simple, propre, visuel
- pas de scrollbar interne
- taille adaptée à l’écran
- l’image doit rester entièrement lisible dans le viewport

Les modales doivent paraître légères et élégantes, pas comme une fenêtre système ou un composant UI lourd.

## Responsive

Sur mobile :

- la première vue doit montrer les éléments essentiels
- le hero devient une colonne simple
- la navigation secondaire peut disparaître
- les boutons peuvent s’empiler
- les grilles basculent en une colonne quand nécessaire
- les textes restent lisibles sans micro-typographie

Sur desktop :

- la page doit utiliser l’écran
- éviter les grands blancs latéraux
- conserver une lecture éditoriale fluide

## Ce qu’il faut éviter

- gros blancs structurels inutiles
- colonnes trop étroites
- hero trop haut
- titres géants
- cartes miniatures sur desktop
- gradients coupés ou sales
- effets décoratifs sans fonction
- image hero non pertinente
- composants visuellement “bootstrap”
- modales lourdes, scrollables, mal fermées
- incohérences de tailles entre textes proches dans leur rôle

## Critère de validation graphique

Une page est considérée comme alignée si :

- la première vue est claire et crédible
- la largeur desktop est bien utilisée
- la hiérarchie visuelle est lisible
- l’ambiance est artisanale et soignée
- les cartes paraissent cohérentes entre elles
- le hero est fort sans être écrasant
- les modales plantes sont propres et confortables
- la palette, les bordures, les ombres et les espacements racontent le même univers
