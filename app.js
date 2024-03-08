const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port=8000;
const session = require('express-session');
const app = express();


const defautRoutes = require('./routes/defaut');
const formRoutes = require('./routes/form');
const authRoutes = require('./routes/auth');
const logOutRoutes = require('./routes/logout');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: false}));
app.use(session({secret: "Potelin est nul à lol",resave: false, saveUninitialized: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(formRoutes.routes);
app.use(authRoutes.routes);
app.use(logOutRoutes.routes);
app.use(defautRoutes);

app.use((req,res,next)=>{;
    res.status(404).render(path.join(__dirname,"views","404.ejs"),{pageTitle:"404 not Found",login : true});
});

app.listen(port);
console.log("serveur http à l'écoute sur le port : "+port);
