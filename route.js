const express = require('express');
const router = express.Router();

const UserController = require('./src/controllers/UserController');

//Rotas para os users
router.get('/users', UserController.all);
router.get('/user/:id',UserController.checkToken, UserController.find);
router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);
router.post('/findByUsername', UserController.findByUsername);
router.post('/auth/login', UserController.login);

module.exports = router;