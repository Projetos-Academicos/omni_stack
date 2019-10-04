const Usuario = require("../models/Usuario");

module.exports = {
    async criar(req, res){
        const { email }  = req.body;

        let usuario = await Usuario.findOne({ email });

        if(!usuario){
            usuario = await Usuario.create({ email });
        }

        return res.json(usuario);
    }
}