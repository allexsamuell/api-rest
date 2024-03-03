const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
const obterConv = function (req, res) {
    if (req.query.nome) {
        return res.json(convidados)
    }
    const procurarNome = convidados.find(function (convidados) {
        convidados === req.query.nome
    })
    if (!procurarNome) {
        return res.status(404).json({
            "mensagem": "o convidado buscado nao foi encontratado na lista"
        })
    }
    return res.json({ "mensagem": "Convidado presente." })

}
const cadastrarConvidado = function (req, res) {
    const { nome } = req.boby

    if (!nome) {
        return res.status(400).json({ mensagem: "O campo nome esta vazio,preencha" })

    }
    const convidadoExite = convidados.find(function (convidado) {
        convidado === nome
    })
    if (convidadoExite) {
        return res.status(400).json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    }
    convidados.push(nome)
    return res.status(201).json({ mensagem: "convidado adicionado" })
}
const deletarConvidado = function (req, res) {

    const { nome } = req.params


    const indiceconvidado = convidados.findIndex(function (convidado) {
        convidado === nome
    })
    if (indiceconvidado < 0) {
        return res.status(404).json({
            "mensagem": "o convidado a ser removido nao foi encontratado na lista"
        })
    }
    convidados.splice(indiceconvidado, 1)

    return res.json({ mensagem: "convidado removido" })



}

module.exports = {
    obterConv,
    cadastrarConvidado,
    deletarConvidado
}