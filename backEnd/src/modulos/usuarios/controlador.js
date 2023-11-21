//en este archivo vamos a hacer todas las consultas a la base de datos

//definimos la tabla
const TABLA = 'usuarios';

//exporto todas las funciones
module.exports = function (dbInyectada){
   
    let db = dbInyectada;
    
    if(!db){//si la base de datos esta corrupta
        db = require('../../DB/mysql') //la busco directamente desde el archivp *mysql*
    }
   
   
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
 
        return{
            todos,
            uno,
            agregar,
            eliminar
        }
}