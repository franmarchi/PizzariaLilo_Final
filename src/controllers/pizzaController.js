
const Pizza = require('../models/pizzaModel');
const pizzaService = require('../services/pizzaService');

class PizzaController {

    async criar(req, res) {
        try {
            const preco = await pizzaService.calcularPreco(req.body);
            const pizza = await Pizza.create({ ...req.body, preco });
            res.status(201).json(pizza);
        } catch (e) {
            res.status(400).json({ erro: e.message });
        }
    }

    async listar(req, res) {
        const pizzas = await Pizza.find().populate('sabores');
        res.json(pizzas);
    }

     // buscar por id
      async buscarPorId(req, res) {
        try {
          const pizza = await Pizza.findById(req.params.id)
            .populate('pizzas');
    
          if (!pizza) {
            return res.status(404).json({ erro: 'Pizza não encontrada' });
          }
    
          res.json(pedido);
    
        } catch (e) {
          res.status(500).json({ erro: 'Erro ao buscar pizza' });
        }
      }

    async atualizar(req, res) {
        try {
            const preco = await pizzaService.calcularPreco(req.body);
            const pizza = await Pizza.findByIdAndUpdate(req.params.id, { ...req.body, preco }, { new: true });
            if (!pizza) return res.status(404).json({ erro: 'Não encontrada' });
            res.json(pizza);
        } catch (e) {
            res.status(400).json({ erro: e.message });
        }
    }

    async deletar(req, res) {
        const pizza = await Pizza.findByIdAndDelete(req.params.id);
        if (!pizza) return res.status(404).json({ erro: 'Não encontrada' });
        res.json({ mensagem: 'Deletado com sucesso' });
    }
}

module.exports = new PizzaController();
