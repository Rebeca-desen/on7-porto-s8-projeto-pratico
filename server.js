//1 passo: importar o app
//2 passo: declarar a variável 'port' e atribuir valor
//3 passo:"escutar" o app mostrando no console qual caminho esta usando

//1
const app = require ('./src/appRebeca')

//2
const port = 7000

//3
app.listen(port, () => {
    console.log(`Executando em http://localhost${port}`)
})