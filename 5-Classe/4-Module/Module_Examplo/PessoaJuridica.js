const Pessoa = require('./Pessoa');

function PessoaJuridica() {
    this.CNPJ = '';
}

PessoaJuridica.prototype = new Pessoa();

module.exports = PessoaJuridica;