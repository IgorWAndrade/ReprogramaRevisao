//Metodos 

// - Javascript é uma linguagem de prototipos ao invés de Orientada e Objetos. 


//Metodos são comportamentos que há classe deve ter ou não

// Forma de Definir Metodos

// - Use 'this' para referenciar há classe que estamos criando e então escreva nome do metodos
// - após isto coloque '=' e entao 'function () {}' sendo que este metodo pode ou nao receber parametos

function Pessoa() {
    this.Nome = '';
    this.Idade = 0;
    this.Altura = 0.0;
    this.Peso = 0.0;
    this.Sexo = 'sexo';


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
