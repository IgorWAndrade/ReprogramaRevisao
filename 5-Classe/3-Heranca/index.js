// Define a classe Pessoa
function Pessoa() {

    this.saudacao = function () {
        console.log('Oi! Sou da Classe Pessoa');
    }
}

// Define a classe  Estudante
function Estudante() {

    this.despedida = function () {
        console.log('Tchau! Sou da Classe Estudante');
    }
}

// Criar um objeto de Estudante
var estudanteSemHerdar = new Estudante();

// Verificar a herança
console.log("\n\nValidações de Herança")

console.log(estudanteSemHerdar instanceof Pessoa); // False 
console.log(estudanteSemHerdar instanceof Estudante); // true

// Herda de Pessoa
Estudante.prototype = new Pessoa();

// Criar um objeto de Estudante
var estudanteComHerdar = new Estudante();

// Verificar a herança
console.log("\n\nValidações de Herança")

console.log(estudanteComHerdar instanceof Pessoa); // true 
console.log(estudanteComHerdar instanceof Estudante); // true

// Executar metodos dos objetos
estudanteComHerdar.saudacao();
estudanteComHerdar.despedida();

// Sobrescrever um metodo vindo do pai ao herdar
Estudante.prototype.saudacao = function () {
    console.log('Oi! Sou da Classe Estudante que sobrescreveu da Classe Pessoa');
}

// Executar metodos dos objetos
console.log('\n');

estudanteComHerdar.saudacao();
estudanteComHerdar.despedida();