const express = require('express')

const bodyParser = require('body-parser')

//CRIANDO UMA CONSTANTE INSTANCIANDO O EXPRESS
const app = express()

const database = require('./src/config/database')

//DEFININDO QUEM É A PORTA DE ENTRADA
const port = process.env.PORT || 3000

//CONFIGURA O APP PRA USAR O BODYPARSER
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json' }))

//IMPORTA AS ROTAS DISPONÍVEIS NO CAMINHO /SERIES
const seriesRoutes = require('./src/routes/series')

app.get('/', function (req, res) {
    res.send('API CRUD NodeJS + MongoDB')
})

//INDICANDO P/ O EXPRESS PRA ONDE A REQUISIÇÃO DEVE SEGUIR
app.use('/', seriesRoutes)

//EXPRESS OUVIR A API NA PORTA 3000
app.listen(port, function () {
    console.log(`API listen on port ${port}`)
})

module.exports = app