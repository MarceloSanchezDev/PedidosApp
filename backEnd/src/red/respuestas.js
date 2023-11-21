// en este archivo unifico todas las respuestas

//configuramos las respuestas exitosas y de error

//Respuesta exitosa
exports.success = function(req, res, mensaje = '', status = 200){
    res.status(status).send({
        error: false,
        status: status,
        body: mensaje
    });
}

//respuesta de error
exports.error = function(req, res,mensaje = 'Error interno', status = 500){
    res.status(status).send({
        error: true,
        status: status,
        body: mensaje
    });
}