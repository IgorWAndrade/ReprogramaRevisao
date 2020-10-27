function Pessoa() {
    this.Nome = '';

    this.Validacao = (informacao, ePessoaFisica) => {
        let valido = false;

        if (ePessoaFisica === true) {
            valido = informacao.length === 11 ? true : false;
        } else {
            valido = informacao.length === 14 ? true : false;
        }

        this.InformarcoesDaValidacao(valido, ePessoaFisica);

    }

    this.InformarcoesDaValidacao = (valido, ePessoaFisica) => {
        if (ePessoaFisica == true) {
            console.log('O CPF está com status: ' + this.MensagemDeValidacao(valido));
        } else {
            console.log('O CNPJ está com status: ' + this.MensagemDeValidacao(valido));
        }
    }

    this.MensagemDeValidacao = (valido) => {
        return valido === true ? 'valido' : 'invalido';
    }
}

module.exports = Pessoa;