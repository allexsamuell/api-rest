const express = require("express")
const rotas = express()
const { obterConv, cadastrarConvidado, deletarConvidado } = require('./controladores/convidados')

rotas.get('./convidados', obterConv)
rotas.post('./convidados', cadastrarConvidado)
rotas.get('./convidados/:nome', deletarConvidado)





module.exports = {
    rotas
}