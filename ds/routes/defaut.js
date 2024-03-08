const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if (req.session.isLogin){
        res.render(path.join(__dirname,"..","views","accueil.ejs"),{pageTitle: "page acceuil", connect : "connecté"});
    }
    else{
        res.render(path.join(__dirname,"..","views","accueil.ejs"),{pageTitle: "page acceuil", connect : "non connecté"});
    }
});

module.exports = router;
