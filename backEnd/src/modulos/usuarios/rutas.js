//exportamos express
const express = require('express');
//importo seguridad
const seguridad = require('./seguridad')
//importo las respuestas
const respuesta = require('../../red/respuestas')
//importo las funciones desde controlador
const controlador = require('./index');


// creo una constante que se llame router que trae exprees router
const router = express.Router();
//peticiones get
router.get('/', todos);
router.get('/:id', uno);
//peticiones post
router.post('/',agregar);
//peticiones put
router.put('/', seguridad() , eliminar);


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
//definimos la funcion uno
async function uno(req, res, next){
        try{
            const items = await controlador.uno(req.params.id);//especificamos que espera *controlador.uno()*
                respuesta.success(req, res, items, 200);// y luego lo mande
        } catch(err){
             //utilizamos next que es una funcion de express.
            next(err);
        }
};
//definimos la funcion eliminar
async function eliminar(req, res, next){
    try{
        const items = await controlador.eliminar(req.body);//especificamos que espera *controlador.eliminar()*
            respuesta.success(req, res,'Item eliminado satifactoriamente', 200);// y luego lo mande
    } catch(err){
        //utilizamos next que es una funcion de express.
        next(err);
    }
};
//definimos la funcion agregar
async function agregar(req, res, next){
    try{
        const items = await controlador.agregar(req.body);//especificamos que espera *controlador.agregar()*
        if(req.body.id == 0){
            mensaje = "Item guardado exitosamente"
        }else{
            mensaje = "Item actualizado exitosamente"
        }
            respuesta.success(req, res,mensaje, 201);// y luego lo mande
    } catch(err){
        //utilizamos next que es una funcion de express.
        next(err);
    }
};


module.exports = router;