var express = require('express');

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');
var mdAutenticacion = require('../middlewares/autenticacion');
// var SEED = require('../config/config').SEED;

var app = express();

var Hospital = require('../models/hospital');

// =====================================================================
// Obtener todos los hospitales
// =====================================================================
app.get('/', (req, res, next) => {

    Hospital.find({}, 'nombre img')
        .exec(

            (err, hospitales) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando hospitales',
                        errors: err
                    });
                }
                res.status(200).json({
                    ok: true,
                    hospitales: hospitales
                });
            });
});

//=====================================================================
//Crear un nuevo hospital
//=====================================================================
app.post('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;
    var body = req.body;

    var hospital = new Hospital({
        nombre: body.nombre,
        img: body.img,
        usuario: id
    });

    hospital.save((err, hospitalGuardado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear hospital',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            hospital: hospitalGuardado
                // hospitaltoken: req.hospital
        });

    });

});
//=====================================================================
//Actualizar un  hospital
//=====================================================================
app.put('/:uid/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;
    var uid = req.params.uid;
    var body = req.body;


    Hospital.findById(id, (err, hospital) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar hospital',
                errors: err
            });
        }
        if (!hospital) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El hospital con el id' + id + 'no existe',
                errors: { message: 'no existe un hospital con ese ID' }
            });
        }
        hospital.nombre = body.nombre;

        hospital.save((err, hospitalGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar hospital',
                    errors: err
                });
            }
            // hospitalGuardado.password = ':)';
            res.status(200).json({
                ok: true,
                hospital: hospitalGuardado,
                usuarioadmin: uid
            });
        });
    });
});

//=====================================================================
//Borrar un usuario por el ID
//=====================================================================

app.delete('/:uid/:id', mdAutenticacion.verificaToken, (req, res) => {

    var uid = req.params.uid;
    var id = req.params.id;

    Hospital.findByIdAndRemove(id, (err, hospitalBorrado) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al borrar hospital',
                errors: err
            });
        }

        if (!hospitalBorrado) {
            return res.status(400).json({
                ok: false,
                mensaje: 'No existe hospital con ese id',
                errors: { message: 'no existe un hospital con ese ID' }
            });
        }
        hospitalBorrado.password = ':)';
        res.status(200).json({
            ok: true,
            hospital: hospitalBorrado,
            usuarioadmin: uid
        });

    });

});


module.exports = app;