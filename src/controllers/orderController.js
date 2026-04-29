const Pedido = require('../models/orderModel');
const Pizza = require('../models/pizzaModel');

class PedidoController {

  // criar pedido
  async criar(req, res) {
    try {
      const { pizzas } = req.body;

      if (!pizzas || pizzas.length === 0) {
        return res.status(400).json({ erro: 'Pedido precisa de pizzas' });
      }

      let total = 0;

      // calcular total
      for (let item of pizzas) {
        const pizza = await Pizza.findById(item.pizza);

        if (!pizza) {
          return res.status(404).json({ erro: 'Pizza não encontrada' });
        }

        total += pizza.preco * item.quantidade;
      }

      const pedido = await Pedido.create({
        usuario: req.userId, // vem do JWT
        pizzas,
        total
      });

      res.status(201).json(pedido);

    } catch (e) {
      res.status(500).json({ erro: 'Erro ao criar pedido' });
    }
  }

  // listar pedidos
  async listar(req, res) {
    try {
      const pedidos = await Pedido.find()
        .populate('usuario', 'nome email')
        .populate('pizzas.pizza');

      res.json(pedidos);

    } catch (e) {
      res.status(500).json({ erro: 'Erro ao listar pedidos' });
    }
  }

  // buscar por id
  async buscarPorId(req, res) {
    try {
      const pedido = await Pedido.findById(req.params.id)
        .populate('usuario', 'nome email')
        .populate('pizzas.pizza');

      if (!pedido) {
        return res.status(404).json({ erro: 'Pedido não encontrado' });
      }

      res.json(pedido);

    } catch (e) {
      res.status(500).json({ erro: 'Erro ao buscar pedido' });
    }
  }

  // deletar
  async deletar(req, res) {
    try {
      const pedido = await Pedido.findByIdAndDelete(req.params.id);

      if (!pedido) {
        return res.status(404).json({ erro: 'Pedido não encontrado' });
      }

      res.json({ mensagem: 'Pedido removido com sucesso' });

    } catch (e) {
      res.status(500).json({ erro: 'Erro ao deletar pedido' });
    }
  }
}

module.exports = new PedidoController();