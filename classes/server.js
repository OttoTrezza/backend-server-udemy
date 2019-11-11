var express = require('express');
require('../config/config');
var socketIO = require('socket.io');
var http = require('http');
const socket = require('../sockets/socket');
// const path = require('path');

class Server {

    constructor() {
        this._intance = Server;
        this.app = express();
        this.port = process.env.port;
        this.httpServer = http.createServer(this.app);
        this.io = socketIO(this.httpServer); // sacar segundo parametro..Options
        this.escucharSockets();
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }

    escucharSockets() {
            console.log('Escuchando conexiones - sockets');
            this.io.on('connection', cliente => {

                console.log('Cliente conectado', cliente.id);
                // Conectar usuario
                socket.conectarCliente(cliente, io);
                // Entrar chat
                socket.entrarChat(cliente, io);
                // Configurar usuario
                socket.configurarUsuario(cliente, io);
                // Obtener usuarios activos
                socket.obtenerUsuarios(cliente, io);
                // Obtener salas activas
                socket.obtenerSalas(cliente, io);
                // Mensajes
                socket.mensaje(cliente, io);
                // Desconectar
                socket.desconectar(cliente, io);
                //   cliente.on('disconect', () => {
                //        console.log('Cliente Desconectado');
                //    });
            });
        }
        // static init(puerto) {
        //     return new Server(puerto);
        // }

    // publicFolder() {
    //     const publicPath = path.resolve(__dirname, '../public');
    //     this.app.use(express.static(publicPath));
    // }
    start(callback) {
        this.httpServer.listen(this.port, callback);
        console.log('server.js start', this.port);
        //  this.publicFolder();
    }
}
exports.default = Server;