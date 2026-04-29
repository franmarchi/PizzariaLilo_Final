const Flavor = require('../models/flavorModel');

class FlavorController {

  // criar sabor
  async criar(req, res) {
    try {
      const { nome, precoBase } = req.body;

      if (!nome || !precoBase) {
        return res.status(400).json({
          erro: 'Nome e precoBase são obrigatórios'
        });
      }

      const sabor = await Flavor.create({ nome, precoBase });

      res.status(201).json(sabor);

    } catch (e) {
      res.status(500).json({ erro: 'Erro ao criar sabor' });
    }
  }

  // listar sabores
  async listar(req, res) {
    try {
      const sabores = await Flavor.find();
      res.json(sabores);

    } catch (e) {
      res.status(500).json({ erro: 'Erro ao listar sabores' });
    }
  }

  // buscar por id
  async buscarPorId(req, res) {
    try {
      const sabor = await Flavor.findById(req.params.id);

      if (!sabor) {
        return res.status(404).json({ erro: 'Sabor não encontrado' });
      }

      res.json(sabor);

    } catch (e) {
      res.status(500).json({ erro: 'Erro ao buscar sabor' });
    }
  }

  // atualizar
  async atualizar(req, res) {
    try {
      const sabor = await Flavor.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      if (!sabor) {
        return res.status(404).json({ erro: 'Sabor não encontrado' });
      }

      res.json(sabor);

    } catch (e) {
      res.status(500).json({ erro: 'Erro ao atualizar sabor' });
    }
  }

  // deletar
  async deletar(req, res) {
    try {
      const sabor = await Flavor.findByIdAndDelete(req.params.id);

      if (!sabor) {
        return res.status(404).json({ erro: 'Sabor não encontrado' });
      }

      res.json({ mensagem: 'Sabor removido com sucesso' });

    } catch (e) {
      res.status(500).json({ erro: 'Erro ao deletar sabor' });
    }
  }
}

module.exports = new FlavorController();