//exportamos express
const express = require('express');
//importo las respuestas
const respuesta = require('../../red/respuestas')
//importo las funciones desde controlador
const controlador = require('./index');

// creo una constante que se llame router que trae exprees router
const router = express.Router();

router.get('/login', login);
router.get('/', todos);

//definimos la funcion todos
async function todos(req, res, next){
    try{ // que intente esto
        const items = await controlador.todos();//especificamos que espera *controlador.todos()*
            respuesta.success(req, res, items, 200);// y luego lo mande
    } catch(err){ //que si hay un error lo muestre
         //utilizamos next que es una funcion de express.
        next(err);
    } 
};

async function login(req, res, next){
    try{
        const token = await controlador.login(req.body.usuario, req.body.password);//especificamos que espera *controlador.login()*
            respuesta.success(req, res, token, 200);// y luego lo mande
    } catch(err){
         //utilizamos next que es una funcion de express.
        next(err);
    }
};
module.exports = router;