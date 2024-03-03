const expresse = require('express')
const { obterLivros, obterLivrosPorId, cadasatrrLivro, alterarLivro, alterarParteDoLivro, excluirLivro } = require('./controladores/livros')
const rotas = expresse()



rotas.get('/livros', obterLivros)
rotas.get('/livros/:id', obterLivrosPorId)
rotas.post('/livros', cadasatrrLivro)
rotas.put('/livros/:id', alterarLivro)
rotas.patch('/livros/:id', alterarParteDoLivro)
rotas.delete('/livros/:id', excluirLivro)
module.exports = {
    rotas
}