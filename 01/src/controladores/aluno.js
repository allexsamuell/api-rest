const aluno = require('../Dados/alunos')
const alunos = require('../Dados/alunos')
let idDoProximo = 1
const obterAlunos = function (req, res) {
    return res.json(alunos)

}
const obterAlunosPeloId = function (req, res) {
    const idrequisitado = Number(req.params.id)

    if (isNaN(idrequisitado)) {
        return res.status(404).json({ mensagem: "o id informado nao e um numero valido" })
    }

    const aluno = alunos.find(function (aluno) {
        return aluno.id === idrequisitado
    })
    if (!aluno) {
        return res.status(404).json({ mensagem: "Aluno nao encontratado." })
    }
    return res.json(aluno)
}
const adicionarAluno = function (req, res) {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome) {
        return res.status(404).json({ mensagem: "o nome informado nao e um numero valido" })
    }
    if (!sobrenome) {
        return res.status(404).json({ mensagem: "o sobrenome informado nao e um numero valido" })
    }

    if (!curso) {
        return res.status(404).json({ mensagem: "o curso informado nao e um numero valido" })
    }
    if (idade < 18) {
        return res.status(404).json({ mensagem: "o aluno deve ter pelo menos 18 anos" })
    }
    const novoAluno = {
        id: idDoProximo,
        nome,
        sobrenome,
        curso,
        idade
    }
    alunos.push(novoAluno)
    idDoProximo++
    return res.status(201).send()
}

const excluirAluno = function (req, res) {
    const idrequisitado = Number(req.params.id)

    if (isNaN(idrequisitado)) {
        return res.status(404).json({ mensagem: "o id informado nao e um numero valido" })
    }

    const indiceDoAluno = alunos.findIndex(function (aluno) {
        return aluno.id === idrequisitado
    })
    if (indiceDoAluno < 0) {
        return res.status(404).json({ mensagem: "Aluno nao encontratado." })
    }
    const alunoExiste = aluno.splice(indiceDeExcluir, 1)
    return res.json(alunoExiste)
}




module.exports = { obterAlunos, obterAlunosPeloId, adicionarAluno, excluirAluno }