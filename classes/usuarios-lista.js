class UsuariosLista {
    constructor() {
            this.lista = [];
        }
        // Agregar un usuario
    agregar(usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }
    actualizarNombre(id, nombre, sala) {
            for (let usuario of this.lista) {
                if (usuario.id === id) {
                    usuario.nombre = nombre;
                    if (!sala)
                        usuario.sala = 'sin-sala';
                    else
                        usuario.sala = sala;
                    break;
                }
            }
            console.log('===== Actualizando usuario ====');
            console.log(this.lista);
        }
        // Obtener lista de usuarios
    getLista() {
            return this.lista.filter(usuario => usuario.nombre !== 'sin-nombre');
        }
        // Obtener un usuario
    getUsuario(id) {
            return this.lista.find(usuario => usuario.id === id);
        }
        // Obtener usuario en una sala en particular
    getUsuariosEnSala(sala) {
            return this.lista.filter(usuario => usuario.sala === sala);
        }
        // Borrar Usuario
    borrarUsuario(id) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        return tempUsuario;
    }
}
exports.UsuariosLista = UsuariosLista;