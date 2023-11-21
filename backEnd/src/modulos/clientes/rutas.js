//exportamos express
const express = require('express');
//importo las respuestas
const respuesta = require('../../red/respuestas')
//importo las funciones desde controlador
const controlador = require('./controlador');

// creo una constante que se llame router que trae exprees router
const router = express.Router();

//y con router seleccionamos la ruta raiz
router.get('/', //selecciono la ruta raiz
     function(req, res){
            const todos = controlador.todos()//especificamos que espera antes de madnarlo
            .then((items) => {//luego que me mande los items
                respuesta.success(req, res, items, 200);
            })
            
});

module.exports = router;