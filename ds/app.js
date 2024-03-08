const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port=10000;
const app = express();

const defautRoutes = require('./routes/defaut');
const formRoutes = require('./routes/form');
const loginRoutes = require('./routes/login');
const logOutRoutes = require('./routes/logout');
const game = require('./routes/game');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({secret : "un secret", resave: false, saveUninitialized: false}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(formRoutes.routes);
app.use(loginRoutes.routes);
app.use(logOutRoutes.routes);
app.use(defautRoutes);
app.use(game);

app.use((req,res,next)=>{
    if(req.session.isLogin) {
        res.status(404).render(path.join(__dirname, "views", "404.ejs"), {pageTitle: "404 not Found", connect : "connecté"});
    }
    else{
        res.status(404).render(path.join(__dirname, "views", "404.ejs"), {pageTitle: "404 not Found", connect : "non connecté"});
    }
});

app.listen(port);
console.log("serveur http à l'écoute sur le port : "+port);