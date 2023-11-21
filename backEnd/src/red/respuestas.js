// en este archivo unifico todas las respuestas

//configuramos las respuestas exitosas y de error

//Respuesta exitosa
exports.success = function(req, res, mensaje, status){
    const statusCode = status || 200;
    const mensajeOk = mensaje || '';
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: mensajeOk
    });
}

//respuesta de error
exports.error = function(req, res, mensaje, status){
    const statusCode = status || 500;
    const mensajeError = mensaje || 'Error interno';
    res.status(mensajeError).send({
        error: true,
        status: status,
        body: mensajeError
    });
}