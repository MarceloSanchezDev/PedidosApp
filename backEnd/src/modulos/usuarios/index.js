//este archivo sera un constructor a la que le inyectaremos la base de datos

//creo la constate *db* que requiere mi base de datos
const db = require('../../DB/mysql');
//creo la constate que sera mi controlador que requiere mi controlador
const ctrl = require('./controlador');


module.exports = ctrl(db);//exportamos el controlador y le pasamos como parametro nuestra DB.