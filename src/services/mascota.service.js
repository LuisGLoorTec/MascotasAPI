const mascotaRepo = require('../repos/mascota.repo');

class MascotaService {
    async obtenerTodas() {
        return await mascotaRepo.obtenerTodas();
    }

    async obtenerPorEspecie(especie) {
        return await mascotaRepo.obtenerPorEspecie(especie);
    }

    async obtenerPorId(id) {
        return await mascotaRepo.obtenerPorId(id);
    }

    async crear(mascota) {
        return await mascotaRepo.crear(mascota);
    }

    async actualizar(mascota) {
        return await mascotaRepo.actualizar(mascota);
    }

    async eliminar(id) {
        return await mascotaRepo.eliminar(id);
    }
}

module.exports = new MascotaService();