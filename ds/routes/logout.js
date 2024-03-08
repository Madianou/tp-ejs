const path = require('path');
const express = require('express');
const router = express.Router();

const accessMessage = require('./form');

router.get("/logout",(req,res,next)=>{
    req.session.isLogin=false;
    req.session.userName = "";
    accessMessage.message = [];
    res.redirect('/');
});

exports.routes = router;