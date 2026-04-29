
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    sabores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Flavor' }],
    tamanho: String,
    preco: Number
});

module.exports = mongoose.model('Pizza', schema);
