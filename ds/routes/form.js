const path = require('path');
const express = require('express');
const router = express.Router();

const message = [];

router.get('/form', (req, res, next) => {
    if(req.session.isLogin) {
        res.render(path.join(__dirname, "..", "views", "form.ejs"), {pageTitle: "page form", message : message, connect: "connecté"});
    }
    res.redirect('/')

});

router.post('/form', (req, res, next) => {
    console.log(Object.assign({},req.body));
    if (req.body.annees == ""){
        var annees = 1;
    }
    else{
        var annees = req.body.annees;
    }

    if (req.body.mois == ""){
        var mois = 12;
    }
    else{
        var mois = req.body.mois;
    }

    const mensualite = (req.body.capital*(1+req.body.taux/100))/mois;

    console.log(mensualite);


    message.push({ message: [req.body.capital,req.body.taux,mois,mensualite]});
    res.redirect('/form');
});

exports.routes = router;
exports.message = message;
