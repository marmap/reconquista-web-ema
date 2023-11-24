import express from 'express';
import cors from 'cors'
import db from "./database/db.js";
//importar conexion a la db
import blogRoutes from './routes/routes.js'
//const express = require('express');
const app = express();



app.use( cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

//app.get('/', (req, res) => {
   // res.send('HOLA MUNDO CRUEL')
//})

//app.listen(8000, ()=>{
//    console.log('Server UP running in http://localhost:8000/')
//})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});