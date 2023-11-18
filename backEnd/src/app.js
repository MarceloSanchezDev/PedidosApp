// creo la variable express que contiene express.
const express = require('express');
// creo la variable config que contiene todas las funciones del archivo ./config
const config = require('./config');
//  creo la variable clientes
const clientes = require('./modulos/clientes/rutas')

//defino app
const app = express();
//defino la constante del puerto, configurandolo
app.set('port', config.app.port);
//agrego las rutas
app.use('/api/clientes'//y cuando acceda a esta ruta me devolvera mi modulo clientes
        , clientes);

module.exports = app;
