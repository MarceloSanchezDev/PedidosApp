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

function agregar(tabla, data){
    return new Promise( (resolve, reject) =>{//iniciamos una promesa
        conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`,[data, data], //creamos la query
        (error, result)=>{ //manejamos errores
            return error ? reject(error) ://si hay un error que me lo retorne por *reject*
            resolve(result);//sino que me entregue el resultado
        })
    } );
};

function query(tabla, consulta){
    return new Promise( (resolve, reject) =>{//iniciamos una promesa
        conexion.query(`SELECT * FROM ${tabla} WHERE ?`,consulta, //creamos la query
        (error, result)=>{ //manejamos errores
            return error ? reject(error) ://si hay un error que me lo retorne por *reject*
            resolve(result[0]);//sino que me entregue el resultado en la posicion 0
        })
    } );
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
    eliminar,
    query
}