const authService = require('../services/authService');

class AuthController {

async register(req, res) {
  try {
    const { nome, email, senha } = req.body;

    // validação
    if (!nome || !email || !senha) {
      return res.status(400).json({
        erro: 'Nome, email e senha são obrigatórios'
      });
    }

    const user = await authService.register(req.body);
    res.status(201).json(user);

  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
}

async login(req, res) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        erro: 'Email e senha são obrigatórios'
      });
    }

    if (!senha || senha.length < 6) {
  return res.status(400).json({
    erro: 'Senha deve ter pelo menos 6 caracteres'
  });
}

    const result = await authService.login(email, senha);
    res.json(result);

  } catch (e) {
    res.status(401).json({ erro: e.message });
  }
}
}

module.exports = new AuthController();