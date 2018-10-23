// Requires..librerias para que funcione algo
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//inicializar variables
var app = express();


//Body Parser ----MIDLEWARE
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');

//Coneccion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos:\x1b[32m%s\x1b[0m', 'online');
});

// Rutas
//middlewear
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);

// escuchar peticiones

app.listen(3000, () => {
    console.log('Express server,Puerto 3000:\x1b[32m%s\x1b[0m', 'online');
});