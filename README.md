# DS  node express


## Mathieu Chedozeau
## Maxime Jougla
 
### Install

```bash
npm install
```

La commande installera les packages suivants : 
- express 
- express-session
- ejs
- body-parser


### Run server

```bash
npm run start
```

ou 
```bash
node ds/app.js
```
### Doc

#### Session

Pour gérer la connexion et les résultats du calcul des mensualités pour emprunt on utilise des variables de session.

```javascript
router.post('/login', (req, res, next) => {
    const param1 = req.body.username;
    const param2 = req.body.password;
    console.log("login = "+param1+" mdp = "+param2);
    if (param1 == "user" && param2 == "user"){
        req.session.isLogin = true;
        req.session.mensualités = mensualités;
        res.redirect('/');
    }
    else{
        res.redirect('/login');
    }

});
```

La variable ```isLogin``` permet de vérifier si l'utilisateur est connecté ( comme on utilise pas de base de données on vérifie seulement si les identifiants renseignés sont user et user ). On utilisera cette variable pour afficher dans le header les bons boutons (Login si il n'est pas connecté ou Logout si il est connecté).

Exemple avec la page 404 :

```javascript
app.use((req,res,next)=>{
    if(req.session.isLogin) {
        res.status(404).render(path.join(__dirname, "views", "404.ejs"), {pageTitle: "404 not Found", connect : "connecté"});
    }
    else{
        res.status(404).render(path.join(__dirname, "views", "404.ejs"), {pageTitle: "404 not Found", connect : "non connecté"});
    }
});
```



La variable ```mensualités``` est un tableau vide pour l'instant qui sera remplie avec les futurs calculs de mensualités d'emprunt.

Dans la page du formulaire de calcul d'emprunt on ajoute les résultats du calcul dans la variable de session.

```javascript
req.session.mensualités.push({ message: [req.body.capital,req.body.taux,mois,mensualite]});
```

Quand on se déconnecte on va venir vider les variables de sessions dans le fichiers logout.js, ainsi après une reconnexion sans relancer l'application on ne retrouvera pas les calculs de la précédente session.

```javascript
const path = require('path');
const express = require('express');
const router = express.Router();


router.get("/logout",(req,res,next)=>{
    req.session.isLogin=false;
    req.session.userName = "";
    req.session.message = [];
    res.redirect('/');
});

exports.routes = router;
```





