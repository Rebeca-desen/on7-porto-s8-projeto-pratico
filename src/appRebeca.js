//1 passo: importar o express
//2 passo: declarar a variável app atribuindo o método express
//3 passo: importar a rota
//4 passo: usar a rota
//5 passo: exportar o app

const express = require('express')

const app = express()

const musicasRoutes = require("./routes/musicasRoutes")

app.use('/', musicasRoutes)
app.get('*', (req, res) =>{
    res.status(404).sendFile('./views/404.html', { root: __dirname})
})

module.exports = app