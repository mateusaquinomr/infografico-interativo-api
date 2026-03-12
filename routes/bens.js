const express = require('express');
const router = express.Router();
const bemController = require('../controllers/bemController');
const auth = require('../middleware/auth');

router.get('/', bemController.listar);
router.get('/:id', bemController.buscarPorId);
router.post('/', auth, bemController.criar);
router.put('/:id', auth, bemController.atualizar);
router.delete('/:id', auth, bemController.deletar);

module.exports = router;