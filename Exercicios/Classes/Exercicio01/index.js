/*
    Crie uma classe do tipo Pessoa que possua as seguintes propriedades Nome, Idade, Altura e Peso. Crie uma método
para calcular o IMC da Pessoa.Atenção este não deve retornar nenhuma informação apenas calcular o IMC e após isto
crie um método que irá receber um valor e retorno o Status do IMC desta pessoa.
*/


function Pessoa(nome, idade, altura, peso) {
    this.Nome = nome;
    this.Idade = idade;
    this.Altura = altura;
    this.Peso = peso;


    this.calcularIMC = function () {
        return this.Peso / (this.Altura * this.Altura);
    }

    this.ObterIMC = (valorImc) => {
        if (valorImc <= 18.5) {
            this.toString(valorImc, 'Magreza');
        } else if (valorImc > 18.5 && valorImc <= 24.9) {
            this.toString(valorImc, 'Normal');
        } else if (valorImc > 24.9 && valorImc <= 30) {
            this.toString(valorImc, 'Sobrepeso');
        } else {
            this.toString(valorImc, 'Obesidade');
        }
    }

}

Pessoa.prototype.toString = function (imc, status) {
    console.log(`Nome: ${this.Nome.toUpperCase()}\nPeso: ${this.Peso}\nIMC: ${imc}\nStatus: ${status}`);
}

//Executar Projeto

var igor = new Pessoa('Igor Wellington de Andrade', 26, 1.70, 72.0);
const imcDoIgor = igor.calcularIMC();

igor.ObterIMC(imcDoIgor);
