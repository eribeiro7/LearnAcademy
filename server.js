require('dotenv').config({path:'.env'});
const express = require('express');
const cors = require('cors');
//Importação do handlebars
//var exphbs = require('express-handlebars');
//const bodyParser = require('body-parser');
//Trabalhando com API
//var fetch = require('node-fetch');
const routes = require('./route');
const server = express();
server.use(cors());
//Expecificação da requesição HTTP
//server.use(express.json(), bodyParser.urlencoded({extended: false}));
//server.engine('handlebars', exphbs.engine({defaultLayout: "index"}));
//server.set('view engine', 'handlebars');
server.use('/api', routes);

server.listen(process.env.PORT, () =>{
    console.log(`O servidor está a rodar em http://localhost:${process.env.PORT}`);
});