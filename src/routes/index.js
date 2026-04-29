
const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const authController = require('../controllers/authController');
const pizza = require('../controllers/pizzaController');
const orderController = require('../controllers/orderController');
const flavorController = require('../controllers/flavorController');
const validateBody = require('../middlewares/validateBody');


router.post(
  '/auth/register',
  validateBody(['nome', 'email', 'senha']),
  authController.register
); //ok

router.post(
  '/auth/login',
  validateBody(['email', 'senha']),
  authController.login
); 

router.post(
  '/sabores',
  auth,
  validateBody(['nome', 'precoBase']),
  flavorController.criar
);

router.get('/sabores', flavorController.listar);
router.get('/sabores/:id', flavorController.buscarPorId);
router.put('/sabores/:id', auth, flavorController.atualizar);
router.delete('/sabores/:id', auth, flavorController.deletar);

router.post(
  '/pizzas',
  auth,
  validateBody(['sabores', 'tamanho']),
  pizzaController.criar
);

router.get('/pizzas', pizza.listar);
router.get('/pizzas/:id', auth, pizza.buscarPorId);
router.put('/pizzas/:id', auth, pizza.atualizar);
router.delete('/pizzas/:id', auth, pizza.deletar);

router.post(
  '/pedidos',
  auth,
  validateBody(['pizzas']),
  orderController.criar
);

router.get('/pedidos', auth, orderController.listar);
router.get('/pedidos/:id', auth, orderController.buscarPorId);
router.delete('/pedidos/:id', auth, orderController.deletar);

module.exports = router;

