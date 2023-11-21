//exportamos express
const express = require('express');
const respuesta = require('../../red/respuestas')

// creo una constante que se llame router que trae exprees router
const router = express.Router();

//y con router seleccionamos la ruta raiz
router.get('/', //selecciono la ruta raiz
     function(req, res){
   respuesta.success(req, res, 'todo OK Desde Clientes', 200)
});

module.exports = router;