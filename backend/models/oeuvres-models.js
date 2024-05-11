const mongoose = require('mongoose');

const oeuvreSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Oeuvres', oeuvreSchema);
