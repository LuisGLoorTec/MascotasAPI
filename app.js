require('dotenv').config();
const express = require('express');
const mascotaRoutes = require('./src/routes/mascota.route');

const app = express();

app.use(express.json());

// Usar las rutas
app.use('/api', mascotaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});