//1 passo: importar JSON de músicas
//2 passo: criar método para buscar todas os filmes
//ultimo passo: exportar o método
/* anotações: 
./ -> retorna arquivos ou pastas do mesmo diretório
../ -> retorna arquivos ou pastas de um diretório a cima
*/

//1
/*const filmes = require('../model/filmes.json')
//2
const getAll = (req, res) => {
    console.log(req.url)
    //verifica se a resposta tem status 200(sucesso) e envia o JSON:
    res.status(200).send(filmes)
}
const getByID = (req, res) => {
    const id = req.params.id
//método find retorna o primeiro que ele achar naquela condição
    const filmesFiltrados = filmes.find((filmes)=> {
        return filmes.id == id
    })
res.status(200).send(filmesFiltrados)
}


const getAllAno = (req, res) => {
    const ano = filmes.map((filme) => filme.ano)
    res.status(200).send(ano)
}


//3(ultimo)
//module.exports = {getAll}


//4 passo: criar método getByID
//5 passo: retornar aqulee item daquele id

//4



const getByAno = (req, res) => {
    const ano = req.params.ano


const anoFiltrado = filmes.filter((filme) => {
    return filme.ano == ano
})
res.status(200).send(anoFiltrado)
}
//ultimo

module.exports = {
    getAll,
    getByID,
    getAllAno,
    getByAno
}
*/