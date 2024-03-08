const path = require('path');
const express = require('express');
const router = express.Router();


const accessMessage = require('./form');
const {message} = require("./form");
const loginInfo = require('./auth');

router.get('/', (req, res, next) => {


    if(req.session.isLogin){
        console.log("acces message : ", accessMessage.message);
        if (accessMessage.message) {
            const lemessage = accessMessage.message;
            if (lemessage.length > 0) {
                let value;
                for (const elt of lemessage) {
                    value = elt.message;
                    console.log("value : ", elt.message);
                }
            }
        }
        res.render(path.join(__dirname,"..","views","accueil.ejs"),
            {pageTitle: "page accueil",accessMessage : accessMessage.message,username : req.session.userName,login : true});
    }
    else{
        res.redirect('/auth');
    }

});

module.exports = router;
