const mongoose = require('mongoose');

const artisteSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    motDePasse: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Artiste', artisteSchema);
