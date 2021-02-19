const express = require('express');
const router = express.Router(); //En este objeto definimos la rutas de nuestro servidor
const ClientCtrl = require('../controllers/clientController')

router.post('/clients/create', ClientCtrl.createClient)
router.get('/clients/', ClientCtrl.getClients)
router.get('/clients/detail/:ClientId', ClientCtrl.getClientById)
router.delete('/clients/delete/:ClientId', ClientCtrl.deleteClientById)
router.put('/clients/update/:ClientId', ClientCtrl.updateClientById)

module.exports = router;