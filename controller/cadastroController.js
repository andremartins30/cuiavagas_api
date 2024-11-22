const Cadastro = ("../models/Cadastro.js")

exports.createCadastro = async (req, res) => {
    const { nome, email } = req.body;
    const novoCadastro = new Cadastro({nome, email})
    await novoCadastro.save();
}

exports.getCadastro = async (req, res) => {
    const {id} = req.params

    const cadastro = await Cadastro.findById(id);
    res.status(200).json({ message: "Cadastro encontrado", data: cadastro });
}
