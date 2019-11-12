var usuarios_lista = require('../classes/usuarios-lista');
var Usuario = require('../models/usuario');

exports.usuariosConectados = new usuarios_lista.UsuariosLista();

exports.conectarCliente = (cliente) => {
    // console.log('cliente', cliente);
    cliente.on('connect', () => {

    });
};
exports.entrarChat = (cliente) => {
    cliente.on('entrarChat', (payload) => {
        this.usuariosConectados.borrarSalas();
        // console.log('Mensaje recibido P.Nombre, P.Sala', payload.nombre, payload.sala);     
        usuarioLis = {
            nombre: payload.nombre,
            sala: payload.sala,
            img: payload.img,
            id: cliente.id
        };
        if (!this.usuariosConectados.getUsuario(usuarioLis.nombre)) {
            this.usuariosConectados.agregar(usuarioLis);
        }
        cliente.join(usuarioLis.sala);
        usuarios = this.usuariosConectados.getUsuariosEnSala(usuarioLis.sala);

        //=====================================================================
        //Obtener todas las salas
        //=====================================================================

        Usuario.find({}, 'sala')
            .exec((err, salas) => {
                if (err) {
                    console.log('Error', err);
                } else {
                    // console.log('salasbusqueda', salas);
                    var i;
                    let pala;

                    for (i = 0; i < salas.length; i++) {
                        this.pala = salas[i];
                        console.log('sala Nº', i, '=', this.pala.sala);
                        this.usuariosConectados.agregarSalas(this.pala.sala);
                    }
                }

            });

        // cliente.to(payload.sala).emit('usuarios-activos', usuarios);
        let lassalas = this.usuariosConectados.getSalas();
        console.log('lassalas1', this.lassalas);
        cliente.emit('usuarios-activos', usuarios);
        cliente.emit('salas-activas', "juegos");
        cliente.emit('salas', this.lassalas);
        // console.log('salas', lassalas);
        //console.log('Emitido', usuarios);

        const pay = {
            de: 'Administrador',
            cuerpo: 'Nuevo usuario'
        };

        cliente.to(payload.sala).emit('mensaje-nuevo', pay);
        // cliente.emit('mensaje-nuevo', pay);
        // return callback(usuarios);
    });
};


exports.desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
        usuario2 = this.usuariosConectados.getCliente(cliente.id);
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
exports.mensaje = (cliente) => {
    cliente.on('mensaje', (payload, callback) => {

        pay = {
            de: payload.de,
            cuerpo: payload.cuerpo,
            img: payload.img,
            sala: payload.sala
        };
        cliente.to(payload.sala).emit('mensaje-nuevo', pay);
        cliente.emit('mensaje-nuevo', pay);
        // cliente.emit('mensaje-nuevo', pay);


        //  io.emit('mensaje-nuevo', payl);
        // console.log('payload', msg);
        // return callback(msg);
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
exports.configurarUsuario = (cliente) => {
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
exports.obtenerUsuarios = (cliente) => {
    cliente.on('obtener-usuarios', (pay, callback) => {
        usuarios = this.usuariosConectados.getUsuariosEnSala(pay);
        cliente.to(pay).emit('usuarios-activos', usuarios);
        cliente.emit('usuarios-activos', usuarios);
        console.log('Emitido', usuarios);
        callback = { entro: true };
    });
};

// Obtener Salas
exports.obtenerSalas = (cliente) => {
    cliente.on('obtener-salas', (callback) => {
        salas = this.usuariosConectados.getSalas();
        cliente.emit('salas-activas', salas.sala);
        console.log('Emitido', salas);
        callback = { entro: true };
    });
};