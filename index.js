import express from 'express';
import cors from 'cors';
import productsRouter from "./src/routes/productsRouters.js";


const app = express();

// Configuración básica: Permitir todos los orígenes
app.use(cors());

app.use('/api', productsRouter);

// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta inválida');
    console.log(`Ruta inválida: ${req.status} - ${req.originalUrl}`);
});

app.listen(3001, () => console.log("http://localhost:3001"));
