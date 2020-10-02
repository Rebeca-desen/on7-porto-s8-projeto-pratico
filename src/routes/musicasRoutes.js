//1 passo: importar o Express
//2 passo: importar o Router
//3 passo: importar o Controller
//4 passo: criar a rota que traz todos os itens
//5 passo: exportar o router

const express = require('express')

const router = express.Router()

const controller = require('../controller/musicasController')

router.get('/', controller.getAll)
router.get('/artistas', controller.getAllArtista)
router.get('/:id', controller.getByID)
router.get('/artistas/:artista', controller.getByArtista)

module.exports = router