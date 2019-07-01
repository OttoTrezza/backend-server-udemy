var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Server = require('./classes/server');
var cors = require('cors');
//inicializar variables

const server = Server.default.instance;
//Body Parser ----MIDLEWARE
// parse application/x-www-form-urlencoded
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
// CORS
// CORS
server.app.use(cors({ origin: true, credentials: true }));
// server.app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
//     next();
// });



// socket
// BodyParser
// server.app.use(bodyParser.urlencoded({ extended: true }));
// server.app.use(bodyParser.json());



//Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var uploadRoutes = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');
var mensajesRoutes = require('./routes/mensajes');


// Rutas
//middlewear
server.app.use('/medico', medicoRoutes);
server.app.use('/hospital', hospitalRoutes);
server.app.use('/usuario', usuarioRoutes);
server.app.use('/login', loginRoutes);
server.app.use('/upload', uploadRoutes);
server.app.use('/img', imagenesRoutes);
server.app.use('/mensajes', mensajesRoutes);

server.app.use('/', appRoutes);





//Coneccion a la base de datos
mongoose.set('useCreateIndex', true);
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
// app.use('/medico', medicoRoutes);
// app.use('/hospital', hospitalRoutes);
// app.use('/usuario', usuarioRoutes);
// app.use('/login', loginRoutes);
// app.use('/upload', uploadRoutes);
// app.use('/img', imagenesRoutes);
// app.use('/mensajes', mensajesRoutes);

// app.use('/', appRoutes);

// escuchar peticiones

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
});
// app.listen(3000, () => {
//     console.log('Express server,Puerto 3000:\x1b[32m%s\x1b[0m', 'online');
// });