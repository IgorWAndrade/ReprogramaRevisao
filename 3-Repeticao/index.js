// O que são estruturas de repetições?

//Três estruturas de repetições

// while
// do ...while
// for
// foreach

console.log('---------------------------------------------------------------------------------------------------------------------------------');
console.log('while');
// Sintaxe --- while
//Enquanto a condição entre parenteses for verdadeira o laço de repetição 'while' continuara a ser repetido

// while (true) {

// }

//Exemplo

let condicaoVerdadeiraParaRepeticao = true;
let numero = 0;
while (condicaoVerdadeiraParaRepeticao == true) {

    if (numero < 10) {
        numero++;
    } else {
        condicaoVerdadeiraParaRepeticao = false;
    }

}

console.log('---------------------------------------------------------------------------------------------------------------------------------');
console.log('do...while');

//Sintaxe --- Do ...while

//Enquanto a condição entre parenteses for verdadeira o laço de repetição 'do ...while' continuara a ser repetido
// A diferença é que o código entre 'do {}' será executado antes da verificação da condição

// do {

// } while (false)


//Exemplo

do {
    console.log('Este código será executado apenas uma vez');
} while (false)

while (false) {
    console.log('Este código não será executado');
}

console.log('---------------------------------------------------------------------------------------------------------------------------------');
console.log('FOR');

//Sintaxe --- for

//Começar com declaração de uma propriedade e para irmos para proxima etapa precisamos colocar o ';'
//Em seguida iremos fazer a condição e para irmos para proxima etapa precisamos colocar o ';'
//Encerramos com 'incremento' ou 'decremento' da propriedade declarada na primeira etapa

// for (let numero = 0; numero < 10; numero++) {

// }

//Exemplo               
for (let numero = 0; numero < 10; numero++) {
    console.log(`Número atual ${numero}`)
}

console.log('---------------------------------------------------------------------------------------------------------------------------------');
console.log('FOREACH');

//Sintaxe --- foreach
let frutaClasse = {
    id: 1,
    nome: 'Melancia',
    cor: 'Verde',
    tipo: 1,
    valor: '',
    unidade: 0
}

let arrayFrutas = [
    {
        id: 1,
        nome: 'Melancia',
        cor: 'Verde'
    },
    {
        id: 2,
        nome: 'Banana',
        cor: 'Amarela'
    },
    {
        id: 3,
        nome: 'Maçã',
        cor: 'Vermelha'
    },
    {
        id: 4,
        nome: 'Abacaxi',
        cor: 'Amarela'
    }
];

arrayFrutas.forEach(fruta => console.log(fruta));

let nomeDaFrutaPesquisada = 'Maçã';
let frutaId = 0;
arrayFrutas.filter(fruta => {
    if (fruta.nome == nomeDaFrutaPesquisada) {
        frutaId = fruta.id;
    }
})


console.log('O ID da Fruta no Bancod de Dados é ' + frutaId);
