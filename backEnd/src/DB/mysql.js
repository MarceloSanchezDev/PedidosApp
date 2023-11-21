//en este archivo pongo todas las consultas a la base de datos.

//requerimos mysql
const mysql = require('mysql');
//requerimos el archivo config
const config = require('../config');

//creo la constante con la configuracion de DB
const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

//creo una funcion para conectarme
let conexion;

function conMysql(){
    conexion = mysql.createConnection(dbConfig); // le pasamos los datos de *dbConfig*

    conexion.connect((err) =>{ // manejo los errores
        if(err){//si hay un error
            console.log('[db err]', err);//que me lo muestre por consola
            setTimeout(conMysql, 200);// despues de un tiempo que vuelva a ejecutarse la funcion
        }else{//si no hay error que me muestre que se conecto
            console.log('DB conectada!!!')
        }
    });
    conexion.on('error', err =>{ //si hay un error en la coneccion
        console.log('[db err]', err);//que me lo muestre por consola
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){ //si el error es igual a *'PROTOCOL_CONNECTION_LOST'*
            conMysql();//que vuelva a ejecutar la funcion
        }else{
            throw err;//sino que me muestre el error
        }
    })
};

//invocamos la funcion de coneccion.
conMysql();

//creo las funciones

//funciones get
function todos(tabla){
    return new Promise( (resolve, reject) =>{//iniciamos una promesa
        conexion.query(`SELECT * FROM ${tabla}`, //creamos la query
        (error, result)=>{ //manejamos errores
         return error ? reject(error) ://si hay un error que me lo retorne por *reject*
            resolve(result);//sino que me entregue el resultado
        })
    } );
};

function uno(tabla, id){
    return new Promise( (resolve, reject) =>{//iniciamos una promesa
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`, //creamos la query
        (error, result)=>{ //manejamos errores
            return error ? reject(error) ://si hay un error que me lo retorne por *reject*
            resolve(result);//sino que me entregue el resultado
        })
    } );
};

//funciones post

function insertar(tabla, data){
    return new Promise( (resolve, reject) =>{//iniciamos una promesa
        conexion.query(`INSERT INTO ${tabla} SET ?`, data, //creamos la query
        (error, result)=>{ //manejamos errores
            return error ? reject(error) ://si hay un error que me lo retorne por *reject*
            resolve(result);//sino que me entregue el resultado
        })
    } );
};

function actualizar(tabla, data){
    return new Promise( (resolve, reject) =>{//iniciamos una promesa
        conexion.query(`UPDATE ${tabla} SET ? WHERE id = ?`,[data, data.id], //creamos la query
        (error, result)=>{ //manejamos errores
            return error ? reject(error) ://si hay un error que me lo retorne por *reject*
            resolve(result);//sino que me entregue el resultado
        })
    } );
};

function agregar(tabla, data){
    if(data && data.id == 0){ //si viene una data y el id de la data es igual a 0 es por que el registro es nuevo
        return insertar(tabla, data); // entonces retorna la funcion *insertar*
    }else{ //si el id es un numero que ya existe se actualizara el registro
        return actualizar(tabla, data);//entonces retorna la funcion *actualizar*
    }
};

//funciones put

function eliminar(tabla, data){
    return new Promise( (resolve, reject) =>{//iniciamos una promesa
        conexion.query(`DELETE FROM ${tabla} WHERE id= ?`, data.id, //creamos la query
        (error, result)=>{ //manejamos errores
            return error ? reject(error) ://si hay un error que me lo retorne por *reject*
            resolve(result);//sino que me entregue el resultado
        })
    } );
};




module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}