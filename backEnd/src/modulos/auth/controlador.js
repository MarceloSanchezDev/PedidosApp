//en este archivo vamos a hacer todas las consultas a la base de datos
//requerimos bcrypt
const bcrypt = require('bcrypt');
const auth = require('../../auth');

//definimos la tabla
const TABLA = 'auth';

//exporto todas las funciones
module.exports = function (dbInyectada){
   
    let db = dbInyectada;
    
    if(!db){//si la base de datos esta corrupta
        db = require('../../DB/mysql') //la busco directamente desde el archivp *mysql*
    }
      
//definimos las funciones
async function login(usuario, password) { //defino la funcion login que tiene como parametro un usuario y contraseña
    const data = await db.query(TABLA, { usuario: usuario });// defino la constante data que espera la funcion query de el archivo bd que tiene como parametro una TABLA y un usuario
    return bcrypt.compare(password, data.password)//comparo las contraseñas 
    .then(resultado =>{//si la contraseña es verdera
        if(resultado === true){//si la contraseña es verdera
            //generar token
            return auth.asignarToken({...data})//le genero el token
        }else{
            throw new Error('informacion invalida')//sino que me mande este error
        }
    })
    
}


   async function agregar(data){
        //creo la constate authData
        const authData = {
            id: data.id //que va a tener el id que recibe del parameto
        }
        if(data.usuario){//si *data.usuario* es verdadero
            authData.usuario = data.usuario; //se lo asigna a * authData.usuario*
        }

        if(data.password){//si *data.password* es verdadero
            authData.password = await bcrypt.hash(data.password.toString(), 5) ; //encriptamos la contraseña 5 vces
            //se lo asigna a * authData.password* 
        }
        return db.agregar(TABLA, authData)//retornando authData
}


 
        return{
            agregar,
            login
        }
}