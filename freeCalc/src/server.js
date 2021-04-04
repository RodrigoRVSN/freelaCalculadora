const express = require("express");
const server = express();
const routes = require("./routes")

//template engine
server.set('view engine', 'ejs');

//usar req.body
server.use(express.urlencoded({extended: true}));

// habilita arquivos statics
server.use(express.static("public"));

//routes
server.use(routes);
server.listen(3000, () => console.log('rodando'));