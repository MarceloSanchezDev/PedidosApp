const auth = require("../../auth")

module.exports = function cheuqearAuth(){
    function middelware(req, res, next){
        const id = req.body.id;
        auth.chequearToken.confirmarToken(req, id)
        next();
    }

    return middelware
}