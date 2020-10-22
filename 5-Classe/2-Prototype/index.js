// Prototype

// É utilizado para podermos criar e sobrescrever "Tudo"

function SerHumano() {
    this.primerioNome = '';
    this.ultimoNome = '';
}

// Sobrescrevendo um método

Object.prototype.toString = function () {
    console.log(
        `
        Nome: ${this.primerioNome}
        Ultimo: ${this.ultimoNome}\n
        `);
}

var igor = new SerHumano();
igor.primerioNome = 'Igor';
igor.ultimoNome = 'Andrade';
igor.toString();

// Adicionando nova propriedade 

SerHumano.prototype.meioNome = '';

// Sobrescrevendo um método
Object.prototype.toString = function () {
    console.log(
        `
        Nome: ${this.primerioNome}
        Meio: ${this.meioNome}
        Ultimo: ${this.ultimoNome}\n
        `);
}

igor.meioNome = 'Wellington';
igor.toString();
