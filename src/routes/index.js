
const express = require('express');
const router = express.Router();

const pizza = require('../controllers/pizzaController');
const auth = require('../middlewares/auth');

router.post('/pizzas', auth, pizza.criar);
router.get('/pizzas', pizza.listar);
router.put('/pizzas/:id', auth, pizza.atualizar);
router.delete('/pizzas/:id', auth, pizza.deletar);

module.exports = router;
