//Objetos 

// - Javascript é uma linguagem de prototipos ao invés de Orientada e Objetos. 


//Objetos são construção de uma classe com propriedades e comportamentos especificos por cada objeto.

// Forma de Criar um Objeto

// - Use 'new NomeDaClasse' para criar novo objeto 

const readLineSync = require('readline-sync');



function Pessoa() {
    this.Nome = '';
    this.Idade = 0;
    this.Altura = 0.0;
    this.Peso = 0.0;
    this.Sexo = '';


    this.calculoIMC = function () {
        return this.Peso / (this.Altura * this.Altura);
    }

    this.ObterIMC = (valorImc) => {
        if (valorImc <= 18.5) {
            this.FormatarImcParaUsuario(valorImc, 'Magreza');
        } else if (valorImc > 18.5 && valorImc <= 24.9) {
            this.FormatarImcParaUsuario(valorImc, 'Normal');
        } else if (valorImc > 24.9 && valorImc <= 30) {
            this.FormatarImcParaUsuario(valorImc, 'Sobrepeso');
        } else {
            this.FormatarImcParaUsuario(valorImc, 'Obesidade');
        }
    }

    this.FormatarImcParaUsuario = function (imc, status) {
        console.log(`Nome: ${this.Nome.toUpperCase()}\nPeso: ${this.Peso}\nIMC: ${imc}\nStatus: ${status}\nSexo: ${this.Sexo}\n`);
    }
}


do {
    const obj = ObterInformacoesDoUsuario();

    console.log("IMC e Informações do Usuario Digitado\n");

    const imc = obj.calculoIMC();
    obj.ObterIMC(imc);

    console.log("\n");

} while (readLineSync.questionInt('Digite o numero 1 para repetir o processo: ') == 1);


function ObterInformacoesDoUsuario() {
    var pessoa = new Pessoa();

    pessoa.Nome = readLineSync.question('Digite seu nome: ');
    pessoa.Idade = readLineSync.question('Digite sua Idade: ');
    pessoa.Altura = readLineSync.question('Digite sua Altura: ');
    pessoa.Peso = readLineSync.question('Digite seu Peso: ');
    pessoa.Sexo = readLineSync.question('Digite seu Sexo: ');

    return pessoa;
}

