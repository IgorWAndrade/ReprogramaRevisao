//Construtor 

// - Javascript é uma linguagem de prototipos ao invés de Orientada e Objetos. 


//Construtor é a forma de obrigar a criação de um objetos com determinados parametros pré-definidos para que nossas propriedades possam ser inicializadas

// Forma de Criar um Construtor

// - Ao criar a classe use a parte '()' para definir os parametros do construtor.

function PessoaConstrutor(nome, idade, altura, peso, sexo) {
    this.Nome = nome;
    this.Idade = idade;
    this.Altura = altura;
    this.Peso = peso;
    this.Sexo = sexo;
}

console.log(new PessoaConstrutor('Igor', 26, 1.70, 65, 'M'));

//module.exports = PessoaConstrutor;
