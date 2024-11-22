const express = require("express")
const router = express.Router()

const registroController = require("../controller/registroController")
const vagaController = require("../controller/vagaController")
const cadastroController = require("../controller/cadastroController")

router.get("/", (req, res) => {res.send("Bem vindo a API de Vagas")});
router.get("/registro", registroController.registro)
router.get("/vaga", vagaController.vaga)
router.get("/cadastro:id", cadastroController.getCadastro)
router.post("/cadastro", cadastroController.createCadastro)


module.exports = router