
const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const authController = require('../controllers/authController');
const pizza = require('../controllers/pizzaController');

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

router.post('/pizzas', auth, pizza.criar);
router.get('/pizzas', pizza.listar);
router.put('/pizzas/:id', auth, pizza.atualizar);
router.delete('/pizzas/:id', auth, pizza.deletar);

module.exports = router;
