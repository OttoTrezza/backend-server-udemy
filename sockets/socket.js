var usuarios_lista = require("../classes/usuarios-lista");
var usuario = require("../models/usuario");

exports.usuariosConectados = new usuarios_lista.UsuariosLista();

exports.conectarCliente = (cliente, io) => {
    cliente.on('connect', () => {
        usuario = new Usuario(cliente.id);
        console.log('Cliente desconectado', usuario);
        exports.usuariosConectados.agregar(usuario);
        io.emit('cliente Conectado', exports.usuariosConectados.getLista());
    });
};
exports.desconectar = (cliente, io) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
        exports.usuariosConectados.borrarUsuario(cliente.id);
        io.emit('usuarios-activos', exports.usuariosConectados.getLista());
    });
};
// Escuchar mensajes
exports.mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log('Mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
        console.log('payload', peyload);
    });
};
// Configurar usuario
exports.configurarUsuario = (cliente, io) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        exports.usuariosConectados.actualizarNombre(cliente.id, payload.nombre, payload.sala);
        io.emit('usuarios-activos', exports.usuariosConectados.getLista());
        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre} - Sala ${payload.sala}, configurado`
        });
    });
};
// Obtener Usuarios
exports.obtenerUsuarios = (cliente, io) => {
    cliente.on('obtener-usuarios', () => {
        io.to(cliente.id).emit('usuarios-activos', exports.usuariosConectados.getLista());
    });
};