var express = require('express');
var SERVER_PORT = require('../global/environment');
var socketIO = require('socket.io');
var http = require('http');
var socket = require('../sockets/socket');
class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer, ''); // sacar segundo parametro..Options
        this.escucharSockets();
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    escucharSockets() {
        console.log('Escuchando conexiones - sockets');
        this.io.on('connection', cliente => {
            // Conectar cliente
            socket.conectarCliente(cliente, this.io);
            // Configurar usuario
            socket.configurarUsuario(cliente, this.io);
            // Obtener usuarios activos
            socket.obtenerUsuarios(cliente, this.io);
            // Mensajes
            socket.mensaje(cliente, this.io);
            // Desconectar
            socket.desconectar(cliente, this.io);
        });
    }
    start(callback) {
        this.app.listen(this.port, this.httpServer, callback);
    }
}
exports.default = Server;