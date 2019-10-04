const Spot = require("../models/Spot");
const Usuario = require("../models/Usuario");

module.exports = {
     async criar(req, res){
        const { filename } = req.file;
        const { companinha, preco, tecnologias } = req.body;
        const { usuario } = req.headers;

        let spot = await Spot.findOne({ companinha });
        const usuarioExiste = await Usuario.findById(usuario);

        if(!usuarioExiste){
            return res.status(400).json({error: "Usuário informado não existe!"})
        }else if(!spot){
            spot = await Spot.create({
                usuario,
                imagem: filename,
                companinha,
                preco,
                tecnologias: tecnologias.split(',').map( tecnologia => tecnologia.trim())
            });
        }
       
        return res.json(spot);
    }
}