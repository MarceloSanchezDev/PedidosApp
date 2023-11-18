//exportamos express
const express = require('express');

// creo una constante que se llame router que trae exprees router
const router = express.Router();

//y con router seleccionamos la ruta raiz
router.get('/', //selecciono la ruta raiz
     function(req, res){
    res.send("Clientes OK")//damos respuesta diciendo 
});

module.exports = router;