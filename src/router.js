const express = require('express');
const contratosController = require('./controllers/contratosController');

const router = express.Router();
const contratosMiddlewares = require('./middlewares/contratosMiddlewares');

router.get('/contrato', contratosController.getAll);
router.post('/contrato', contratosMiddlewares.validateBody, contratosController.creatContrato);
router.delete('/contrato/:id', contratosController.deleteContrato);
router.put('/contrato/:id',  contratosMiddlewares.validateBody, contratosController.updateContrato);


module.exports = router;