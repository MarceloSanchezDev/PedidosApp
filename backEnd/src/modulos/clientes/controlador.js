//en este archivo vamos a hacer todas las consultas a la base de datos

//requerimos la DB
const db = require('../../DB/mysql');

//definimos la tabla
const TABLA = 'clientes';

//definimos las funciones

function todos (){
    return db.todos(TABLA);
}

function uno(id){
    return db.uno(TABLA, id)
}
function agregar(body){
    return db.agregar(TABLA, body)
}

function eliminar(body){
    return db.eliminar(TABLA, body)
}




//exporto todas las funciones
module.exports = {
    todos,
    uno,
    eliminar,
    agregar
}