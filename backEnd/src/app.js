// creo la variable express que contiene express.
const express = require('express');
//creo la variable morgan que contiene *morgan*
const morgan = require('morgan')
// creo la variable config que contiene todas las funciones del archivo ./config
const config = require('./config');
//  creo la variable clientes
const clientes = require('./modulos/clientes/rutas')
//creo la variable error
const error = require('./red/error');

//defino app
const app = express();

//Middleware
app.use(morgan('dev'));//utilizarmeos morgan en el entorno de desarrollo.
app.use(express.json());//para que reconosca el formato json
app.use(express.urlencoded({extended: true}));

//defino la constante del puerto, configurandolo
app.set('port', config.app.port);
//agrego las rutas
app.use('/api/clientes'//y cuando acceda a esta ruta me devolvera mi modulo clientes
        , clientes);
app.use(error);

module.exports = app;
