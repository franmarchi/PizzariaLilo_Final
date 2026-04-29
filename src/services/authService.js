const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const SECRET = 'segredo';

class AuthService {

  async register(data) {
    const existe = await User.findOne({ email: data.email });
    if (existe) throw new Error('Email já cadastrado');

    data.senha = await bcrypt.hash(data.senha, 10);
    return await User.create(data);
  }

  async login(email, senha) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Usuário inválido');

    const ok = await bcrypt.compare(senha, user.senha);
    if (!ok) throw new Error('Senha inválida');

    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1h' });

    return { token };
  }
}

module.exports = new AuthService();