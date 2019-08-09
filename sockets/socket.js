var usuarios_lista = require('../classes/usuarios-lista');
var socketIO = require('socket.io');
var io = require('socket.io');
var UsuariosChat = require('../models/usuarios');
// var Usuario = require('../models/usuario');



// var socket = require('socket.i
// let usuario = Usuario;
exports.usuariosConectados = new usuarios_lista.UsuariosLista();

exports.conectarCliente = (cliente, io) => {
    // console.log('cliente', cliente);
    cliente.on('connect', (payload) => {
        console.log('payloadID', payload.nombre);
        // this.usuariosConectados.agregar(payload);
        // this.getUsuariosEnSala(payload.sala);
        //  console.log('usuarioConectadoComo', usuario, this.usuario, usuarios, this.usuarios);
        if (!this.usuariosConectados.getUsuario(usuarioIO.id)) {
            this.usuariosConectados.agregar(usuarioIO);
        }
        //  cliente.join(usuarioIO.sala);
        usuarios = this.usuariosConectados.getUsuariosEnSala(payload.sala);
        //  res.io.emit('obtener-usuarios', this.usuarios);
    });
};
exports.entrarChat = (cliente, io) => {
    cliente.on('entrarChat', (payload) => {
        // console.log('Mensaje recibido P.Nombre, P.Sala', payload.nombre, payload.sala);
        var usuarioIO = new UsuariosChat({
            id: cliente.id,
            nombre: payload.nombre,
            sala: payload.sala,
            img: payload.img
        });

        if (!this.usuariosConectados.getUsuario(usuarioIO.id)) {
            this.usuariosConectados.agregar(usuarioIO);
        }
        cliente.join(usuarioIO.sala);
        usuarios = this.usuariosConectados.getUsuariosEnSala(usuarioIO.sala);
        salas = this.usuariosConectados.getSalas();
        console.log('Emitido', usuarios);
        cliente.to(usuarioIO.sala).emit('usuarios-activos', usuarios);
        // cliente.to(usuarioIO.sala).emit('salas-activas', salas);
        cliente.to(usuarioIO.sala).emit('falas-activas', salas);
        cliente.emit('usuarios-activos', usuarios);
        //  cliente.emit('salas-activas', salas);
        //cliente.emit('falas-activas', salas);
        const pay = {
            de: 'Administrador',
            cuerpo: 'Nuevo usuario!'
        };

        cliente.to(usuarioIO.sala).emit('mensaje-nuevo', pay);
        cliente.emit('mensaje-nuevo', pay);
        // return callback(usuarios);
    });
};

// cliente.join('Juegos', () => {
//     let rooms = Object.keys(socket.rooms);
//     console.log(rooms);
// });
// io.emit('usuarios-activos', usuariosConectados.getLista());

// usuariosConectados.agregar(usuario);
//   usuarios = usuariosConectados.getLista();
// console.log('usuarios conectados', usuarios);

exports.desconectar = (cliente, io) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
        usuario2 = this.usuariosConectados.getUsuario(cliente.id);
        sal = 'Juegos';
        this.usuariosConectados.borrarUsuario(cliente.id);
        console.log(cliente.id);
        usuarios = this.usuariosConectados.getUsuariosEnSala(sal);
        cliente.to('Juegos').emit('usuarios-activos', usuarios);
        // this.usuarios = this.usuariosConectados.getLista();
        // io.emit('usuarios-activos', this.usuariosConectados.getLista());

    });
};

// Escuchar mensajes
exports.mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload, callback) => {

        msg = {
            de: payload.de,
            cuerpo: payload.cuerpo,
            img: payload.img
        };
        cliente.to('Juegos').emit('mensaje-nuevo', msg);
        cliente.emit('mensaje-nuevo', msg);

        //  io.emit('mensaje-nuevo', payl);
        console.log('payload', msg);
        //   return callback(payl);
    });
};

// Mensaje Nuevo ( SIEMPRE RESPUESTA DEL SERVER!!!)

// exports.mensaje = (cliente, io) => {
//     cliente.on('mensaje-nuevo', (payload) => {

//         console.log('Mensaje recibido', payload);

//         io.to(this.cliente).emit('resp', payload);

//         //  io.emit('mensaje-nuevo', payl);
//         console.log('payload', payl);
//         //   return callback(payl);
//     });
// };


// Configurar usuario
exports.configurarUsuario = (cliente, io) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        console.log('configUsuar', payload.nombre, payload.sala);
        this.usuariosConectados.actualizarNombre(cliente.id, payload.nombre, payload.sala);

        cliente.emit('usuarios-activos', usuarios);


        callback({
            ok: true,
            mensaje: `Usuario ${ payload.nombre } - Sala ${ payload.sala}, configurado`
        });
        console.log('configUsuar', payload.nombre, payload.sala);
    });
};

// Obtener Usuarios
exports.obtenerUsuarios = (cliente, io) => {
    cliente.on('obtener-usuarios', (callback) => {
        usuarios = this.usuariosConectados.getUsuariosEnSala('Juegos');
        cliente.emit('usuarios-activos', usuarios);
        callback = { entro: true };
    });
};