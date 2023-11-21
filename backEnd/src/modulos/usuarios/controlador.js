//en este archivo vamos a hacer todas las consultas a la base de datos

const auth = require('../auth');

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
  async  function agregar(body){
        const usuario = {
            id: body.id,
            nombre: body.nombre,
            rol: body.rol
        }
        //cuadno se ejecuta la funcion agregar, me devuelve por parametro el id en que fue agregado en la base de datos ese registro
        const respuesta = await db.agregar(TABLA, usuario);

        var insertId = 0;
        //si el usuario me envio el id 0 es un registro nuevo, se va agregar y en *respuesta* me va a devolver el id del registro insertado
        //y eso se lo inserto a la variable *insertID*
        if(body.id == 0){//si body.id es igual a 0
            insertId = respuesta.insertId; //la variable *insertID* tendra el valor de *respuesta.insertID*
        }else{ 
            insertId = body.id;//sino tendra el valor que viene por parametro
        }
        var respuesta2 = '';
        if(body.usuario || body.password){//si me mandan un usuario o una contraseña
            respuesta2 = await auth.agregar({//consulto a auth en su metodo agregar
                id: insertId,//agrego id
                usuario: body.usuario,//agrego usuario
                password: body.password//agrego password
            })
        }
        return  respuesta2;
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