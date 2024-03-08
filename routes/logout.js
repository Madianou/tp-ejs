const path = require('path');
const express = require('express');
const router = express.Router();

router.get("/logout",(req,res,next)=>{
    req.session.isLogin=false;
    req.session.userName = "";
    res.redirect('/auth');
});

exports.routes = router;