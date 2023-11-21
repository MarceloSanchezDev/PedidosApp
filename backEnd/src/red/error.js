const respuesta = require('./respuestas');

function errors(err, req, res, next){
    console.log("[error", err); //mostramos por consola el error

    const message = err.message || 'error interno';//creamos la constante mensaje
    const status = err.statusCode || 500;//creamos la constate error

    respuesta.error(req, res, message, status); //le damos a respuesta los valores.
}
//exportamos
module.exports = errors;