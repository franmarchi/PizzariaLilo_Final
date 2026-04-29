const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  pizzas: [
    {
      pizza: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pizza'
      },
      quantidade: Number
    }
  ],
  total: Number
});

module.exports = mongoose.model('Pedido', schema);