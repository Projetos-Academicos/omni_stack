const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
    imagem: String,
    companinha: String,
    preco: Number,
    tecnologias: [String],
    usuario:{
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'Usuario' 
    }
});

module.exports = mongoose.model('Spot', SpotSchema);