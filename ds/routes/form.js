const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/form', (req, res, next) => {
    if(req.session.isLogin) {
        res.render(path.join(__dirname, "..", "views", "form.ejs"), {pageTitle: "page emprunt", message : req.session.mensualités, connect: "connecté"});
    }
    else {
        res.redirect('/')
    }
});

router.post('/form', (req, res, next) => {
    console.log(Object.assign({},req.body));

    var mensualite = 0;

    if (req.body.mois == ""){
        var mois = 12;
    }
    else{
        var mois = req.body.mois;
    }


    if(Boolean(req.body.credit)){
        var r = (req.body.taux/mois)/100;
        mensualite = (req.body.capital*r*(Math.pow(1+r,mois)))/(Math.pow(1+r,mois)-1)
    }
    else{
        mensualite = (req.body.capital*(1+req.body.taux/100))/mois;
    }
    req.session.mensualités.push({ message: [req.body.capital,req.body.taux,mois,mensualite]});

    res.redirect('/form');
});

exports.routes = router;
