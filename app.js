// Requires..librerias para que funcione algo
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//inicializar variables
var app = express();

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});


//Body Parser ----MIDLEWARE
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');
var busquedaRoutes = require('./routes/busqueda');

// //Coneccion a la base de datos
// mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true }, (err, res) => {
//     if (err) throw err;
//     console.log('Base de datos:\x1b[32m%s\x1b[0m', 'online');
// });
//Coneccion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos:\x1b[32m%s\x1b[0m', 'online');
});
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //// ESTO ES PARA VER LA CARPETA UPLOADS DEL FILESYSTEM DIRECTAMENTE EN EL NAVEGADOR SOLO CON: HTTP:LOCALHOST3000/UPLOADS/
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Server index config
// var serveIndex = require('serve-index');
// app.use(express.static(__dirname + '/'));
// app.use('/uploads', serveIndex(__dirname + '/uploads'));



// Rutas
//middlewear
app.use('/usuario', usuarioRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/login', loginRoutes);
app.use('/busqueda', busquedaRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);

app.use('/', appRoutes);

// escuchar peticiones

app.listen(3000, () => {
    console.log('Express server,Puerto 3000:\x1b[32m%s\x1b[0m', 'online');
});