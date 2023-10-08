Documentation :  

Le boilerplate présenté se base sur un projet React en utilisant des bibliotheque comme Redux, Material UI, sass

1 Comment est décomposer le projet  : 

src = 
 atoms => composant de mes molecules (buttons, input etc...)
 components => composants (form, header etc ...)
 features => images, vidéos
 layouts => 
 molecules => ensembles d'atoms (navigation etc...)
 pages 
 routing => pour gérer les routes de mon projet
 styles => les fichiers sass (index, variables, fonts, sizes etc)


Scripts
start: Utilisé pour démarrer l'application en mode développement avec React-scripts.
build: Utilisé pour construire l'application pour la production avec React-scripts.
test: Exécute les tests avec Jest.
eject: Extrait la configuration de React-scripts pour un contrôle avancé.
prepare: Installation de Husky pour gérer les hooks Git.
dev: Utilisé pour démarrer l'application en mode développement avec Vite.

Dépendances

@mui/material: Version 5.14.11 - Kit d'interface utilisateur Material-UI pour React.
@reduxjs/toolkit: Version 1.9.6 - Outil pour gérer l'état global de l'application dans React.
axios: Version 1.5.1 - Bibliothèque pour effectuer des requêtes HTTP.
framer-motion: Version 10.16.4 - Bibliothèque d'animation pour React.
react: Version 18.2.0 - Bibliothèque principale React.
react-dom: Version 18.2.0 - Rendu React pour le navigateur.
react-router-dom: Version 6.16.0 - Gestion des routes pour React.
sass: Version 1.68.0 - Préprocesseur CSS SASS.
uuid: Version 9.0.1 - Génération de UUID (Universal Unique Identifier).
vite: Version 4.4.9 - Un outil de développement rapide pour la création de projets web.

Dépendances de développement : 

@babel/plugin-proposal-private-property-in-object: Version 7.18.6 - Plugin Babel pour gérer les propriétés privées dans les objets.
husky: Version 8.0.3 - Outil pour gérer les hooks Git pre-commit et pre-push.
jest: Version 27.5.1 - Framework de test JavaScript (également listé dans les dépendances de test).
prettier: Version 3.0.3 - Outil de formatage de code (également listé dans les dépendances de test).

Dépendances de test
@testing-library/jest-dom: Version 5.17.0 - Utilitaire de test pour Jest pour les tests d'assertions.
@testing-library/react: Version 13.4.0 - Bibliothèque de test pour React.
@testing-library/user-event: Version 13.5.0 - Bibliothèque pour simuler des événements utilisateur dans les tests.
jest: Version 27.5.1 - Framework de test JavaScript.
eslint: Version 8.50.0 - Outil de linting pour JavaScript et React.
eslint-plugin-react: Version 7.33.2 - Plugin ESLint pour les règles spécifiques à React.
prettier: Version 3.0.3 - Outil de formatage de code.


