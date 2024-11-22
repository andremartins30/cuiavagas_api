const mongoose = require("mongoose")

const uri = "mongodb://localhost:27017/cuiavagas"; // Local ou servidor remoto

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado ao MongoDB!"))
    .catch((err) => console.error("Erro ao conectar ao MongoDB:", err.message));

module.exports = mongoose;