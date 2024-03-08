const path = require('path');
const express = require('express');
const router = express.Router();

const accessMessage = require('./form');

router.get('/', (req, res, next) => {
    if (accessMessage.message) {
        const lemessage = accessMessage.message;
        if (lemessage.length > 0) {
            let value;
            for (const elt of lemessage) {
                value = elt.message;
                console.log("value : ", elt.message);
            }
        }
        if (req.session.isLogin){
            res.render(path.join(__dirname,"..","views","accueil.ejs"),{pageTitle: "page acceuil", message : lemessage, connect : "connecté"});

        }
        else{
            res.render(path.join(__dirname,"..","views","accueil.ejs"),{pageTitle: "page acceuil", message : lemessage, connect : "non connecté"});
        }
    }
});

module.exports = router;
