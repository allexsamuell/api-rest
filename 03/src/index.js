const expresse = require('express')
const { rotas } = require('./roteador')
const app = expresse()

app.use(expresse.json())
app.use(rotas)
app.listen(3000)