const validacao = function (req, res, next) {
    const { senha } = req.query
    if (senha !== "cubo123") {
        return res.status(401).json({ "mensagem": "Senha esta incorreta" })
    }
    next()
}

module.exports = validacao