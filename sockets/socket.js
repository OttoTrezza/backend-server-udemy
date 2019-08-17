var usuarios_lista = require('../classes/usuarios-lista');
var socketIO = require('socket.io');
var io = require('socket.io');
var UsuariosChat = require('../models/usuarios');
// var Usuario = require('../models/usuario');

exports.usuariosConectados = new usuarios_lista.UsuariosLista();

exports.conectarCliente = (cliente, io) => {
    // console.log('cliente', cliente);
    cliente.on('connect', () => {
        console.log('clienteID', cliente.id);
    });
};
exports.entrarChat = (cliente, io) => {
    cliente.on('entrarChat', (payload) => {

        usuarioIO = new UsuariosChat({
            id: cliente.id,
            nombre: payload.nombre,
            sala: payload.sala,
            img: payload.img
        });
        usuarioIO.save((err, usuarioGuardado) => {
            if (err) {
                emit('fallo guardar usuario');
            }
            emit('usuarioguardado', usuarioGuardado);
        });
        if (!this.usuariosConectados.getUsuario(payload.id)) {
            this.usuariosConectados.agregar(payload);
        }
        cliente.join(payload.sala);
        usuarios = this.usuariosConectados.getUsuariosEnSala(payload.sala);

        cliente.to(payload.sala).emit('usuarios-activos', usuarios);
        cliente.emit('usuarios-activos', usuarios);
        console.log('Emitido', usuarios);

        const pay = {
            de: 'Administrador',
            cuerpo: 'Nuevo usuario'
        };

        cliente.to(payload.sala).emit('mensaje-nuevo', pay);
        cliente.emit('mensaje-nuevo', pay);

    });
};

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
    cliente.on('obtener-usuarios', (pay, callback) => {
        usuarios = this.usuariosConectados.getUsuariosEnSala(pay);
        cliente.to(pay).emit('usuarios-activos', usuarios);
        cliente.emit('usuarios-activos', usuarios);
        console.log('Emitido', usuarios);
        callback = { entro: true };
    });
};

// Obtener Salas
exports.obtenerSalas = (cliente, io) => {
    cliente.on('obtener-salas', (callback) => {
        salas = this.usuariosConectados.getSalas();
        cliente.emit('salas-activas', salas);
        console.log('Emitido', salas);
        callback = { entro: true };
    });
};