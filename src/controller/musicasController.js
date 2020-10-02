//1 passo: importar JSON de músicas
//2 passo: criar método para buscar todas os filmes
//4 passo: criar método getByID
//5 passo: retornar aqulee item daquele id
//ultimo passo: exportar o método
/* anotações: 
./ -> retorna arquivos ou pastas do mesmo diretório
../ -> retorna arquivos ou pastas de um diretório a cima
*/


//1
const musicas = require("../model/musicas.json")

//2

const getAll = (req, res) => {
    console.log(req.url)

    res.status(200).send(musicas)
}

const getByID = (req, res) => {
    const id = req.params.id

    const musicasFiltratas = musicas.find((musicas) => {
         return musicas.id == id
    })
    res.status(200).send(musicasFiltratas)
}

const getAllArtista = (req, res) => {
    
        const artistas = musicas.map((musica) => musica.artista)
        res.status(200).send(artistas)
    
}
const getByArtista = (req, res) => {
    const artista = req.params.artista


const musicaFiltratada = musicas.filter((musica) => {
     musica.artista == artista
})
res.status(200).send(musicaFiltratada)
}

module.exports = {
    getByID,
    getAll,
    getAllArtista,
    getByArtista
}