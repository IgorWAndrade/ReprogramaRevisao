const Pessoa = require('./Pessoa');

function PessoaFisica() {
    this.CPF = '';
}

PessoaFisica.prototype = new Pessoa();

module.exports = PessoaFisica;