const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Registrar rutas - APUNTANDO A SRC/
const permisosRoutes = require('./src/routes/permissions');
app.use('/api/permisos', permisosRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: 'Servidor funcionando ✅' });
});

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`);
});