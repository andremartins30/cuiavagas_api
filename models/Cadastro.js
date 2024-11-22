const mongoose = require("mongoose");

const cadastroSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    criado_em: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cadastro", cadastroSchema);