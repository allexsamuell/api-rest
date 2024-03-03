const { livros } = require("../dados/livros")
let proximoAutor = 3;
const obterLivros = function (req, res) {

    return res.json(livros)

}
const obterLivrosPorId = function (req, res) {
    const idLivro = Number(req.params.id)

    if (isNaN(idLivro)) {
        return res.status(400).json({ mensagem: "O valor do parametro ID nao e valido" })
    }
    const livro = livros.find(function (livro) {
        livro.id === idLivro
    })

    if (!livro) {
        return res.status(404).json({ mensagem: "O Livro informado  nao existe" })
    }

    return res.json(livro)
}



const cadasatrrLivro = function (req, res) {
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo) {
        return res.status(400).json({ mensagem: "o titulo e um campo obrigatorio" })
    }
    if (!autor) {
        return res.status(400).json({ mensagem: "o autor e um campo obrigatorio" })
    }
    if (!ano) {
        return res.status(400).json({ mensagem: "o ano  e um campo obrigatorio" })
    }
    if (!numPaginas) {
        return res.status(400).json({ mensagem: "o numero de paginas e um campo obrigatorio" })
    }

    const novoLivro = {
        id: proximoAutor,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(novoLivro)

    proximoAutor++

    return res.status(201).json(novoLivro)




}
const alterarLivro = function (req, res) {
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo) {
        return res.status(400).json({ mensagem: "o titulo e um campo obrigatorio" })
    }
    if (!autor) {
        return res.status(400).json({ mensagem: "o autor e um campo obrigatorio" })
    }
    if (!ano) {
        return res.status(400).json({ mensagem: "o ano  e um campo obrigatorio" })
    }
    if (!numPaginas) {
        return res.status(400).json({ mensagem: "o numero de paginas e um campo obrigatorio" })
    }
    let livrosEXistentes = livros.find(function (livro) { livro.id === Number(req.params.id) })

    if (!livrosEXistentes) {

        return res.status(404).json({ mensagem: "nao existe livro com esse id pra ser substituido" })
    }
    livrosEXistentes.titulo = titulo
    livrosEXistentes.autor = autor
    livrosEXistentes.ano = ano
    livrosEXistentes.numPaginas = numPaginas

    return res.json({ mensagem: "o livro foi substituido" })
}
const alterarParteDoLivro = function (req, res) {
    const { titulo, autor, ano, numPaginas } = req.body
    let livrosEXistentes = livros.find(function (livro) { livro.id === Number(req.params.id) })

    if (!livrosEXistentes) {

        return res.status(404).json({ mensagem: "nao existe livro com esse id pra ser substituido" })
    }
    if (titulo) {
        livrosEXistentes.titulo = titulo
    }
    if (autor) {
        livrosEXistentes.autor = autor
    }
    if (ano) {
        livrosEXistentes.ano = ano
    }
    return res.json({ mensagem: "campo alterado" })
}
const excluirLivro = function (req, res) {
    let livrosEXistenteIndice = livros.findIndex(function (livro) { livro.id === Number(req.params.id) })


    if (livrosEXistenteIndice < 0) {

        return res.status(404).json({ mensagem: "nao existe livro com esse id" })

    }
    livros.splice(livrosEXistenteIndice, 1)
    return res.json({ mensagem: "livro removido" })


}






module.exports = {
    obterLivros, obterLivrosPorId, cadasatrrLivro, alterarLivro, alterarParteDoLivro, excluirLivro
}