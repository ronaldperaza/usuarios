// puerto de entrada de la aplicacion
const express   = require('express');
const cors      = require('cors');
const usuarios  = require('./routes/usuarios');
const db        = require('./db/database');
const app       = express();
const PORT      = process.env.PORT || 3000;

(async ()=> {
    try {
        await db.authenticate()
        await db.sync();
        console.log('conectado a la base de datos')
    } catch (error) {
        throw new Error(error)
        // throw new Error('Error al conectar a la base de datos')
    }
})();

// //middelware
app.use(express.json()); // recibe la informacion
app.use(cors()) // habilita a otras app para enviar las solicitudes

app.use('/usuarios', usuarios)

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`)
})