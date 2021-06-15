# interview

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Project needs

Pour te mettre dans l'ambiance Assurup, le test se fera sur ce prototype application.

Comme tu peux le voir, l'application est assez vide en terme de contenu, je te propose donc de palier
à ça en écrivant trois pages et en ajoutant des fonctionnalités; tu es libre sur le choix du framework css si tu décides de faire ton propre design.
Le store contient déjà les données de base pour faire l'affichage, à toi de compléter selon le "cahier des charges" suivant:

## Mini cahier des charges

### Page d'accueil (Home.vue):

En tant qu'utilisateur, je veux **pour chaque contrat**...
  -  afficher le nom du produit associé
	-  afficher la date d'effet
	-  afficher le prix
	-  afficher le status
	-  pouvoir accéder sur une autre page aux détails d'un **contrat** (=> Contract.vue)

En tant qu'utilisateur, je veux **filter les contrats**...
  -  sur l'id du produit (croissant / décroissant)
  -  par prix (croissant / décroissant)
  -  par date d'effet (croissant / décroissant)

### Page Produits (Products.vue)

En tant qu'utilisateur, je veux **pour chaque produit**...
  -  voir le nom du produit
  -  voir la description de produit
  -  pouvoir modifier le nom du produit
  -  pouvoir modifier la description du produit

### Page Contrat (Contract.vue)

En tant qu'utilisateur, je veux **pour un seul contrat**...
  -  afficher le nom du produit associé
	-  afficher la date d'effet
	-  afficher le prix
	-  afficher le status

### Bonus
Ajouter une animation au changement de page
Faire un header et un footer
Tout ce qui te passe par la tête !
Chronométrer le temps de production

Bon courage!