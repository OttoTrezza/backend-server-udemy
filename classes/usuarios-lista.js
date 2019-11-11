class UsuariosLista {
    constructor() {
            this.lista = [];
            this.salas = [];
        }
        // Agregar un usuario
    agregar(usuarioLis) {
            this.lista.push(usuarioLis);
            this.salas.push(usuarioLis.sala);
            console.log(this.lista);
            return usuarioLis;
        }
        // actualizarNombre(id, nombre, sala) {
        //         for (let usuarioIO of this.lista) {
        //             if (usuarioIO.id === id) {
        //                 usuarioIO.nombre = nombre;
        //                 if (!sala)
        //                     usuarioIO.sala = 'sin-sala';
        //                 else
        //                     usuarioIO.sala = sala;
        //                 break;
        //             }
        //         }
        //         console.log('===== Actualizando usuarioIO ====');
        //         console.log(this.lista);
        //     }
        // Obtener lista de usuarios
    getLista() {
            console.log('getLista');
            return this.lista.filter(usuarioLis => usuarioLis.nombre !== 'sin-nombre');
        }
        // Obtener un usuario
    getUsuario(nombre) {
        return this.lista.find(usuarioLis => usuarioLis.nombre === nombre);
    }
    getCliente(id) {
            return this.lista.find(usuarioLis => usuarioLis.id === id);
        }
        // Obtener usuario en una sala en particular
    getUsuariosEnSala(sala) {
        return this.lista.filter(usuarioLis => usuarioLis.sala === sala);

    }
    getSalas() {
            // return "juegos";

            return this.salas;
            // hacer una peticion a la base de datos"""""

            //         // .map(usuarioLis.sala);
        }
        // Borrar Usuario
    borrarUsuario(id) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuarioLis => usuarioLis.id !== id);
        return tempUsuario;
    }
}
exports.UsuariosLista = UsuariosLista;