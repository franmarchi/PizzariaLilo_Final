
const mongoose = require('mongoose');

module.exports = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/pizzariaLilo')
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.error('Erro conexão DB:', err));
};
