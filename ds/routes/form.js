const path = require('path');
const express = require('express');
const router = express.Router();

const message = [];

router.get('/form', (req, res, next) => {
    if(req.session.isLogin) {
        res.render(path.join(__dirname, "..", "views", "form.ejs"), {pageTitle: "page form", connect: "connecté"});
    }
    res.redirect('/')

});

router.post('/form', (req, res, next) => {
    console.log(Object.assign({},req.body));
    const aa = Object.assign({},req.body);
    message.push({ message: req.body.message });
    res.redirect('/');
});

exports.routes = router;
exports.message = message;
