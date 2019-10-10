class UsuariosLista {
    constructor() {
            this.lista = [];
        }
        // Agregar un usuario
    agregar(usuarioLis) {
            this.lista.push(usuarioLis);
            console.log(this.lista);
            return usuarioLis;
        }
        // actualizarNombre(id, nombre, sala) {
        //         for (let usuarioLis of this.lista) {
        //             if (usuarioLis.id === id) {
        //                 usuarioLis.nombre = nombre;
        //                 if (!sala)
        //                 usuarioLis.sala = 'sin-sala';
        //                 else
        //                 usuarioLis.sala = sala;
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
        // Obtener usuario en una sala en particular
    getUsuariosEnSala(sala) {
        // return this.lista.filter(usuarioLis => usuarioLis.sala === sala);
        return sala;
    }
    getSalas() {
            return "juegos";
            //         return this.lista.filter(usuarioLis => usuarioLis.sala);
            //         // .map(usuarioLis.sala);
        }
        // Borrar Usuario
    borrarUsuario(nombre) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuarioLis => usuarioLis.nombre !== nombre);
        return tempUsuario;
    }
}
exports.UsuariosLista = UsuariosLista;


// */*/*/*/ OJO:
// getUsuariosEnSala va la linea comiteada y hay que comitear la otra!!!Sino manda siempre lo que le mandan...no busca nada