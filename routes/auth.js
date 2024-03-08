const path = require('path');
const express = require('express');
const router = express.Router();

const loginInfo = [];

router.get('/auth', (req, res, next) => {
    res.render(path.join(__dirname,"..","views","auth.ejs"),{pageTitle:"Connexion Owo",msgErreur :"Connecte toi fraudasse",login : false});
});

router.post('/auth', (req, res, next) => {
    console.log(Object.assign({},req.body));
    const aa = Object.assign({},req.body);
    if(req.body.login == "test" && req.body.mdp == "azerty"){
        req.session.isLogin = true;
        req.session.userName = "Test";
        res.redirect('/');
    }
    res.render(path.join(__dirname,"..","views","auth.ejs"),{pageTitle:"Connexion Owo",msgErreur :"Mauvais identifiants",login : false});
});

exports.routes = router;
exports.loginInfo = loginInfo;