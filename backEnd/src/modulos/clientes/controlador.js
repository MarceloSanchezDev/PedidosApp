//en este archivo vamos a hacer todas las consultas a la base de datos

//requerimos la DB
const db = require('../../DB/mysql');

//definimos la tabla
const TABLA = 'clientes';

//definimos las funciones

function todos (){
    return db.todos(TABLA);
}


//exporto todas las funciones
module.exports = {
    todos,
}