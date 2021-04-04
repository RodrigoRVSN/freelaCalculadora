const express = require("express");
const server = express();
const routes = require("./routes")
const path = require("path");

//template engine
server.set('view engine', 'ejs');

// mudar localização da pasta views
server.set('views', path.join(__dirname, 'views'));

//usar req.body
server.use(express.urlencoded({extended: true}));

// habilita arquivos statics
server.use(express.static("public"));

//routes
server.use(routes);
server.listen(3000, () => console.log('rodando'));