var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuariosChatSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    img: { type: String, required: false },
    sala: { type: String },
    id: { type: String }
});


module.exports = mongoose.model('UsuariosChat', usuariosChatSchema);