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