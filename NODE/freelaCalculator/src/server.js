const express = require("express");
const server = express();
const routes = require("./routes");
const path = require("path");
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');


const Database = require('./db/config');

const bodyParser = require('body-parser');


//template engine
server.set('view engine', 'ejs');

// mudar localização da pasta views
server.set('views', path.join(__dirname, 'views'));

//usar req.body
server.use(express.urlencoded({ extended: true }));

// habilita arquivos statics
server.use(express.static("public"));

//routes
server.use(routes);
server.listen(3000, () => console.log('rodando'));


// google ------------------------------------------------------------

server.get('/', function (req, res) {
  res.render("../views/login");
});

server.use(cookieSession({
  name: 'tuto-session',
  keys: ['key1', 'key2']
}))

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

// Initializes passport and passport sessions
server.use(passport.initialize());
server.use(passport.session());

// Example protected and unprotected routes
server.get('/home', (req, res) => res.send('Example Home page!'))
server.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
server.get('/home', isLoggedIn, (req, res) => console.log(req.user));


// Auth Routes
server.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

server.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function start(req, res) {
    // Successful authentication, redirect home.
    const name = req.user.displayName;
    const avatar = req.user.photos[0].value;


    module.exports = { name, avatar };
    res.redirect('/home');
  }
);

server.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/google');
})






