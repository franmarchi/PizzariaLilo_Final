
const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const authController = require('../controllers/authController');
const pizza = require('../controllers/pizzaController');
const validateBody = require('../middlewares/validateBody');
const pizzaController = require('../controllers/pizzaController');
const orderController = require('../controllers/orderController');

const flavorController = require('../controllers/flavorController');

router.post(
  '/auth/register',
  validateBody(['nome', 'email', 'senha']),
  authController.register
);

router.post(
  '/auth/login',
  validateBody(['email', 'senha']),
  authController.login
);

router.post(
  '/pizzas',
  auth,
  validateBody(['sabores', 'tamanho']),
  pizzaController.criar
);

router.post('/pizzas', auth, pizza.criar);
router.get('/pizzas', pizza.listar);
router.put('/pizzas/:id', auth, pizza.atualizar);
router.delete('/pizzas/:id', auth, pizza.deletar);

router.post(
  '/pedidos',
  auth,
  validateBody(['pizzas']),
  orderController.criar
);

router.post('/pedidos', auth, orderController.criar);
router.get('/pedidos', auth, orderController.listar);
router.get('/pedidos/:id', auth, orderController.buscarPorId);
router.delete('/pedidos/:id', auth, orderController.deletar);

router.post(
  '/sabores',
  auth,
  validateBody(['nome', 'precoBase']),
  flavorController.criar
);

router.post('/sabores', auth, flavorController.criar);
router.get('/sabores', flavorController.listar);
router.get('/sabores/:id', flavorController.buscarPorId);
router.put('/sabores/:id', auth, flavorController.atualizar);
router.delete('/sabores/:id', auth, flavorController.deletar);

module.exports = router;
router.post(
  '/auth/register',
  validateBody(['nome', 'email', 'senha']),
  authController.register
);

