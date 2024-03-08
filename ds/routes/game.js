const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/game',(req, res, next)=>{
    console.log("middleware : game");
    res.render(path.join(__dirname, '../', 'views', 'game.ejs'),{pageTitle: "page game"});
})

module.exports = router;