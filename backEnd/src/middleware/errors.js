//en este archivo manejare los errores

//creo la funcion error
function error (message, code){
    let e = new Error(message); //creamo la variable *e* para crear nuestro error y le pasamos el mensaje

    if(code){//y si hay algin codigo 
        e.statusCode = code; //se lo agregamos
    }
    return e; //retornamos e
}
//exportamos la funcion error.
module.exports = error;