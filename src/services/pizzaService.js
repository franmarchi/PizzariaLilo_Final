
const Flavor = require('../models/flavorModel');

class PizzaService {
    async calcularPreco(data) {
        let preco = 0;

        for (let id of data.sabores) {
            const sabor = await Flavor.findById(id);
            if (!sabor) throw new Error('Sabor não encontrado');
            preco += sabor.precoBase;
        }

        preco = preco / data.sabores.length;

        if (data.tamanho === 'M') preco *= 1.2;
        if (data.tamanho === 'G') preco *= 1.5;

        return preco;
    }
}

module.exports = new PizzaService();
