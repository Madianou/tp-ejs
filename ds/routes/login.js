const path = require('path');
const express = require('express');
const router = express.Router();

const login_form = [];
const passwd_form = [];

router.get('/login', (req, res, next) => {
    res.render(path.join(__dirname,"..","views","login.ejs"), {pageTitle: "Connexion"});
});

router.post('/login', (req, res, next) => {
    const param1 = req.body.username;
    const param2 = req.body.password;
    console.log("login = "+param1+" mdp = "+param2);
    if (param1 == "user" && param2 == "user"){
        req.session.isLogin = true;
        res.setHeader('set-Cookie', 'login:'+req.body.username);
        res.redirect('/');
    }
    res.redirect('/login');

});

exports.routes = router;
exports.login = login_form;
exports.passwd = passwd_form;