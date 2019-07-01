var express = require('express');
var app = express();
var server = require('../classes/server');
var socket = require('../sockets/socket');
// var router = express.Router();


var Usuario = require('../models/usuario');
// const server = Server.default.instance;
// router.get()....
app.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!'
    });
});
app.post('/mensajes', (req, res) => {
    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    var payload = { cuerpo, de };
    // server = Server.default.instance;
    server.io.emit('mensaje-nuevo', payload);
    res.json({
        ok: true,
        cuerpo,
        de
    });
    console.log(payload);
});
app.post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    const payload = {
        de,
        cuerpo
    };
    // server = Server.default.instance;
    server.io.in(id).emit('mensaje-privado', payload);
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});
// Servicio para obtener todos los IDs de los usuarios
app.get('/usuarios', (req, res) => {
    // server = Server.default.instance;
    server.io.clients((err, clientes) => {
        if (err) {
            return res.json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            clientes
        });
    });
});
// Obtener usuarios y sus nombres
app.get('/usuarios/detalle', (req, res) => {
    res.json({
        ok: true,
        clientes: socket.usuariosConectados.getLista()
    });
});
// exports.default = router;
module.exports = app;