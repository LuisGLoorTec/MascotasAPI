const { Router } = require('express');
const mascotaController = require('../controllers/mascota.controller');

const router = Router();

router.get('/mascota', mascotaController.obtenerTodas);
router.get('/mascota/:especie', mascotaController.obtenerPorEspecie); 
router.get('/mascota/:id', mascotaController.obtenerPorId);
router.post('/mascota', mascotaController.crear);
router.put('/mascota', mascotaController.actualizar);
router.delete('/mascota', mascotaController.eliminar);

module.exports = router;