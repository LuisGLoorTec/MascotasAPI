const mascotaService = require('../services/mascota.service');

class MascotaController {
    async obtenerTodas(req, res) {
        try {
            const mascotas = await mascotaService.obtenerTodas();
            res.json(mascotas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obtenerPorEspecie(req, res) {
        try {
            const { especie } = req.params;
            const mascotas = await mascotaService.obtenerPorEspecie(especie);
            res.json(mascotas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obtenerPorId(req, res) {
        try {
            const { id } = req.params;
            const mascota = await mascotaService.obtenerPorId(id);
            if (!mascota) return res.status(404).json({ message: 'Mascota no encontrada' });
            res.json(mascota);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async crear(req, res) {
        try {
            const nuevaMascota = await mascotaService.crear(req.body);
            res.status(201).json(nuevaMascota);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async actualizar(req, res) {
        try {
            const mascotaActualizada = await mascotaService.actualizar(req.body);
            if (!mascotaActualizada) return res.status(404).json({ message: 'Mascota no encontrada' });
            res.json(mascotaActualizada);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async eliminar(req, res) {
        try {
            const { id } = req.body;
            const eliminado = await mascotaService.eliminar(id);
            if (!eliminado) return res.status(404).json({ message: 'Mascota no encontrada' });
            res.json({ message: 'Mascota eliminada correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new MascotaController();