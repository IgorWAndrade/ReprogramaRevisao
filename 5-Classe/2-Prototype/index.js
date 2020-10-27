// Prototype

// É utilizado para podermos criar e sobrescrever "Tudo"

function SerHumano() {
    this.primerioNome = '';
    this.ultimoNome = '';
}

// Criar Objeto
var igor = new SerHumano();

console.log('1ª ToString() - Sem Sobrescrever');
igor.toString();

// Sobrescrevendo um método

Object.prototype.toString = function () {
    console.log(
        `
        Nome: ${this.primerioNome}
        Ultimo: ${this.ultimoNome}\n
        `);
}

igor.primerioNome = 'Igor';
igor.ultimoNome = 'Andrade';
console.log('2ª ToString() - Com Sobrescrita\n');
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
console.log('3ª ToString() - Com Sobrescrita com nova Propriedade\n');
igor.toString();
