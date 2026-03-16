# Règles d'autonomie

Ce document décrit la manière de travailler en autonomie sur ce projet.

## Principe

L’objectif est d’avancer jusqu’à une version satisfaisante sans s’arrêter à une simple analyse, tant que le risque de mauvaise décision reste raisonnable.

## Ce qui doit être fait en autonomie

- lire le code et les styles existants avant de modifier
- corriger directement les problèmes clairs
- continuer jusqu’à une version cohérente, testée et vérifiée
- relancer les vérifications après modification
- ajuster le design si une première passe ne suffit pas
- utiliser les captures pour contrôler le rendu réel

## Boucle de travail recommandée

1. Comprendre l’objectif utilisateur
2. Lire les fichiers concernés
3. Modifier le HTML/CSS/JS utile
4. Lancer `make test`
5. Lancer `make check`
6. Générer des captures si la modification est visuelle
7. Comparer au problème signalé ou à la référence
8. Corriger à nouveau si nécessaire

## Quand continuer sans redemander

Continuer en autonomie si :

- le problème est clair
- la direction visuelle est déjà définie
- les fichiers de référence existent
- la correction n’introduit pas de changement de produit ou de contenu risqué

## Quand s’arrêter ou demander confirmation

Demander confirmation si :

- une décision change fortement le positionnement de marque
- il faut inventer du contenu non sourcé
- il manque un asset essentiel
- deux directions graphiques crédibles mais opposées sont possibles
- une modification pourrait supprimer une fonctionnalité voulue

## Références à consulter en priorité

- [rules/edito.md](edito.md)
- [rules/graphic.md](graphic.md)
- [rules/tests.md](tests.md)
- [rules/screens.md](screens.md)
- [site/index.html](../site/index.html)
- [site/style.css](../site/style.css)
- [tests/layout.test.js](../tests/layout.test.js)
- [feedback](../feedback)

## Référence de qualité

Une tâche est considérée comme vraiment terminée si :

- le rendu est cohérent
- les tests passent
- les captures ne montrent pas de régression
- la page reste fidèle au positionnement éditorial et graphique

## Ce qu’il faut éviter

- s’arrêter après une simple hypothèse
- proposer un correctif sans l’implémenter
- corriger sans relancer les vérifications
- considérer un test passant comme preuve suffisante sans lecture visuelle
- ignorer une capture utilisateur qui montre un vrai problème
