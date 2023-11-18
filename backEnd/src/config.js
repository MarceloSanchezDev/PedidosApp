//En config pondre todas las variables globales del sistema

module.exports = {
    //creamos un objeto llamado app
    app: {//creamos un puerto
        port : process.env.PORT || 4000
    }
}