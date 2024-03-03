const express = require("express")

const { obterAlunos, obterAlunosPeloId, adicionarAluno, excluirAluno } = require('./controladores/aluno')
const validacao = require("./intermediarios")
const rotas = express()
rotas.use(validacao)
rotas.get('./alunos', obterAlunos)
rotas.get('./alunos/:id', obterAlunosPeloId)
rotas.post('./alunos', adicionarAluno)
rotas.delete('./alunos/:id', excluirAluno)
module.exports = rotas