const express = require('express');//Importação do express
const consign = require('consign');//Importação do Consign
const bodyParser = require('body-parser');//Importação do body-parser
const validator = require('express-validator')//Importação do Express-Validator

const app = express();//Inicialização do express e atribuido a variavel app

//Configuração do EJS
app.set('view engine', 'ejs');
app.set('views','./app/views');

//Configuração dos Middlewares
app.use(express.static('./app/public'));//Atribuição da pasta Public para utilizar Css,Js e Imagens
app.use(bodyParser.urlencoded({extended: true}));//Configuração do BodyParser
app.use(validator());//Cofiguração do Express-Validator

//Configuração do Consign
//Efetua o autoload das rotas,controller,models para o objeto app//
consign().include('./app/routes')
.then('./app/models')
.then('./app/controllers')
.into(app);

//Exportação da variavel app
module.exports = app;
