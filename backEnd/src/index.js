//aqui creamos una constante llamada app 
const app = require('./app');

//inicializamos el server
app.listen(app.get('port'), () => {
    console.log("servidor escuchando en el puerto", app.get('port'));
});