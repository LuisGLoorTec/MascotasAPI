const db = require('../config/db');

class MascotaRepo {
    async obtenerTodas() {
        const result = await db.query('SELECT * FROM mascotas');
        return result.rows;
    }

    async obtenerPorEspecie(especie) {
        const result = await db.query('SELECT * FROM mascotas WHERE especie = $1', [especie]);
        return result.rows;
    }

    async obtenerPorId(id) {
        const result = await db.query('SELECT * FROM mascotas WHERE id = $1', [id]);
        return result.rows[0];
    }

    async crear(mascota) {
        const { nombre, especie, edad } = mascota;
        const result = await db.query(
            'INSERT INTO mascotas (nombre, especie, edad) VALUES ($1, $2, $3) RETURNING *',
            [nombre, especie, edad]
        );
        return result.rows[0];
    }

    async actualizar(mascota) {
        const { id, nombre, especie, edad } = mascota;
        const result = await db.query(
            'UPDATE mascotas SET nombre = $1, especie = $2, edad = $3 WHERE id = $4 RETURNING *',
            [nombre, especie, edad, id]
        );
        return result.rows[0];
    }

    async eliminar(id) {
        const result = await db.query('DELETE FROM mascotas WHERE id = $1 RETURNING *', [id]);
        return result.rowCount > 0;
    }
}

module.exports = new MascotaRepo();