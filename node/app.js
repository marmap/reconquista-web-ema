import dbConfig from '/node/database/dbConfig.js';
import cors from 'cors';
import NoticiasRoutes from '/node/routes/routes.js';

const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

// Asegúrate de usar la ruta de noticias
app.use('/noticias', NoticiasRoutes);

try {
    await dbConfig.authenticate();
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.log(`Error de conexión a la base de datos de tipo: ${error}`);
}

app.get('/', (req, res) => {
    res.send('HOLA MUNDO');
});

app.listen(3306, () => {
    console.log('Servidor corriendo en http://localhost:3306/');
});

