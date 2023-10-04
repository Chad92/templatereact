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


 2 Scripts : 

 * npm start => démarre le serveur du projet 
 * npm run build => build mon projet 
 * npm test => test mes fonctions avec jest
 * npm prepare => utilise husky avant le commit


Dépendances : 

Sass => style
Material UI => composant préfaits
Axios => requete
React router dom => navigation
Vite => bundle le projet 
Jest => tests
UUID => génère des keys uniques 
Framer Motion => faire des animations

