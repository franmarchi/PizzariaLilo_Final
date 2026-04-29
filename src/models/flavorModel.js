
const mongoose = require('mongoose');

module.exports = mongoose.model('Flavor', new mongoose.Schema({
    nome: String,
    precoBase: Number
}));
