// **YO SIGO SIENDO SERVER**//

const fs = require('fs');

class Sala {
    constructor(sala) {

        this.sala = sala;
    }
}

class SalaControl {

    constructor() {

        this.ultimo = 0;
        this.hoy = new Date().getDay();
        this.salas = [];
        this.ultimos4 = [];

        let data = require('data/data.json');
        console.log(data);

        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
            this.salas = data.salas;
            this.ultimos4 = data.ultimos4;
        } else {
            this.reiniciarConteo();
        }
    }

    reiniciarConteo() {

        this.ultimo = 0;
        this.tickets = [];
        this.ultimos4 = [];

        console.log('Se ha inicializado el sistema');
        this.grabarArchivo();

    }

    siguiente(sala1) {
        this.ultimo = this.ultimo + 1;
        let sala = new Sala(sala1);
        this.salas.push(sala);

        this.grabarArchivo();

        return `Sala ${ this.ultimo}`;
    }

    getUltimaSala() {

        return `Sala ${this.ultimo}`;
    }
    getUltimos4() {

        return this.ultimos4;
    }
    grabarArchivo() {

        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            salas: this.salas,
            ultimos4: this.ultimos4
        };
        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('data/data.json', jsonDataString);
    }


}
module.exports = {
    SalaControl
};