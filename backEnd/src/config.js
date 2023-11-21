//llamamos el metodo config de *dotenv*
require('dotenv').config();

//En config pondre todas las variables globales del sistema

module.exports = {
    //creamos un objeto llamado app
    app: {//creamos un puerto
        port : process.env.PORT || 4000,
    },
    //cremos otro objeto llamado mysql
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',// el hosto va a ser el definido o *localhost*
        user: process.env.MYSQL_USER || 'root',//el usuario es el definido o *root*
        password: process.env.MYSQL_PASSWORD || '',//el password es el definido o *vcio*
        database: process.env.MYSQL_DB || 'ejemplo'//el nombre de la base de datos es el definido o *ejemplo*
    }
}

