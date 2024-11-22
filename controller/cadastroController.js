const Cadastro = ("../models/Cadastro.js")

exports.createCadastro = async (req, res) => {
    try {
        console.log("Requisição recebida:", req.body); // Log do corpo recebido
        const { nome, email } = req.body;

        if (!nome || !email) {
            console.log("Erro: Nome ou email ausentes");
            return res.status(400).send({ error: "Nome e email são obrigatórios!" });
        }

        const novoCadastro = new Cadastro({ nome, email });
        const result = await novoCadastro.save(); // Salva no MongoDB
        console.log("Cadastro salvo com sucesso:", result);

        res.status(201).send({ message: "Cadastro realizado com sucesso!", data: result });
    } catch (error) {
        console.error("Erro ao salvar cadastro:", error.message); // Log do erro
        res.status(500).send({ error: "Erro interno ao criar cadastro", details: error.message });
    }
};

exports.getCadastro = async (req, res) => {
    const {id} = req.params

    const cadastro = await Cadastro.findById(id);
    res.status(200).json({ message: "Cadastro encontrado", data: cadastro });
}
