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
var loginRoutes = require('./routes/login');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');


//Coneccion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true }, (err, res) => {
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
app.use('/medico', medicoRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/upload', uploadRoutes);
app.use('/img', imagenesRoutes);

app.use('/', appRoutes);

// escuchar peticiones

app.listen(3000, () => {
    console.log('Express server,Puerto 3000:\x1b[32m%s\x1b[0m', 'online');
});