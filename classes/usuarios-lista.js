class UsuariosLista {
    constructor() {
            this.lista = [];
        }
        // Agregar un usuario
    agregar(usuarioIO) {
        this.lista.push(usuarioIO);
        console.log(this.lista);
        return usuarioIO;
    }
    actualizarNombre(id, nombre, sala) {
            for (let usuarioIO of this.lista) {
                if (usuarioIO.id === id) {
                    usuarioIO.nombre = nombre;
                    if (!sala)
                        usuarioIO.sala = 'sin-sala';
                    else
                        usuarioIO.sala = sala;
                    break;
                }
            }
            console.log('===== Actualizando usuarioIO ====');
            console.log(this.lista);
        }
        // Obtener lista de usuarios
    getLista() {
            console.log('getLista');
            return this.lista.filter(usuarioIO => usuarioIO.nombre !== 'sin-nombre');
        }
        // Obtener un usuario
    getUsuario(id) {
            return this.lista.find(usuarioIO => usuarioIO.id === id);
        }
        // Obtener usuario en una sala en particular
    getUsuariosEnSala(sala) {
        return this.lista;
        // .filter(usuarioIO => usuarioIO.sala === sala);
    }
    getSalas() {
            return this.lista.filter(usuarioIO => usuarioIO.sala);
            // .map(usuarioIO.sala);
        }
        // Borrar Usuario
    borrarUsuario(id) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuarioIO => usuarioIO.id !== id);
        return tempUsuario;
    }
}
exports.UsuariosLista = UsuariosLista;