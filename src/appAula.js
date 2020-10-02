//1 passo: importar o express
//2 passo: declarar a variável app atribuindo o método express
//3 passo: importar a rota
//4 passo: usar a rota
//5 passo: exportar o app

//1
/*const express = require('express')

//2
const app = express()

//3
const filmes = require('./routes/filmesRoutes')

//4
app.use('/', filmes)
app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname})
})
//5 
module.exports = app*/