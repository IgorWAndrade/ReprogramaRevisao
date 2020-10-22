const Mamifero = require("./Mamifero");

function Macaco() {
    this.nome = '';
}

Macaco.prototype = new Mamifero();

Macaco.prototype.olaMacaco = function () {
    this.olaMamifero();
    console.log('Olá, do Macaco');
}

module.exports = Macaco;

