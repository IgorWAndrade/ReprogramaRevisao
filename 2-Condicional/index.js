// O que são condicionais?

// if() {
//     // IF = Para 'Se' isto faço o que então que esta dentro das chaves

// } else {
//     // ELSE = 'Se-Não' faço então o que esta dentro das chaves
// }

// Dentro de todo 'IF' é obrigatorio o uso de uma expressão
// Condição para validar 'IF'

//Exemplo
const masculino = 'M';
const feminino = 'F';

if (feminino == 'F') {
    console.log('Comparação é igual a F');
} else {
    console.log('Comparação é igual a M');
}

//Único que é obrigatorio na sintaxe do 'IF' e 'ELSE' é apenas o 'IF'
const valorBoleano = true;

if (valorBoleano == true) {
    console.log('Apenas o "IF" é obrigatorio');
}

// 'var', 'let' e 'const' são palavras-chaves do Javascript para declararmos uma propriedade
// 'IF' e 'ELSE' são palavras-chaves do Javascript para Expressões Condicionais

// 'IF's podem ser encadeados junto a 'ELSE's 

const numeroLiteral = 1;


if (numeroLiteral == 1) {
    console.log('Primeiro "IF"');
} else if (numeroLiteral == 2) {

} else if (numeroLiteral == 3) {

} else {

}

// Caso tenha 'IF's encadeados estes serão indenpendentes

if (1 == 1) {
    console.log('1ª Primeiro IF');
}

if (1 == 1) {
    console.log('2ª Segundo IF');
}

//Este 'IF' é diferente do 'IF' acima, pois o 'ELSE' anterior fechou o escopo dele

if (numeroLiteral == 1) {
    console.log('Primeiro "IF"');
}

// Tomar Cuidado com Digitação da Comparação

const tipoPagamento = 'Prazo';

if (tipoPagamento == 'Avista') {
    pagarAvista();
} else if (tipoPagamento == 'Prazo') {
    pagarPrazo();
} else {
    pagarCheque();
}

// Tipos de Expressões de Comparação

if (1 == 1) {
    //Comparação de Igualdade
}

if (1 > 1) {
    //Comparação de Maior
}

if (1 >= 1) {
    //Comparação de Maior ou Igual
    console.log('1 é Maior ou Igual a 1 (>) ou (==)');
}

if (1 < 1) {
    //Comparação de Menor
}

if (1 <= 1) {
    //Comparação de Menor ou Igual
}

if (1 != 1) {
    //Diferende de 
}

//Comparadores (E)&& e (Ou) || 
const maiorIdade = 18;
const idadeUsuario = 15;
const podeDirigir = true;


// Para Comparador '&&' todas as expressões precisam ser verdadeira para que o código dentro das chaves seja executado
// Este IF é para Validar Cartao de Credito
if (
    (idadeUsuario >= maiorIdade) &&
    (podeDirigir == true) &&
    (podeDirigir == true) &&
    (podeDirigir == true) &&
    (podeDirigir == true) &&
    (podeDirigir == true) &&
    (podeDirigir == true) &&
    (podeDirigir == true) &&
    (podeDirigir == true) &&
    (podeDirigir == true) &&
    (podeDirigir == true)
) {
    console.log('Usuario pode Dirigir');
} else {
    console.log('Usuario não pode Dirigir');
}

// Para Comparador '||' apenas uma das expressões precisa ser verdadeira para que o código dentro das chaves seja executado
if (
    (idadeUsuario >= maiorIdade)
    ||
    (podeDirigir == true)
) {
    console.log('Usuario pode Dirigir');
} else {
    console.log('Usuario não pode Dirigir');
}


function pagarAvista() {
    console.log("Estou efetuando o pagamento Avista");
}

function pagarPrazo() {
    console.log("Estou efetuando o pagamento a Prazo");
}

function pagarCheque() {
    console.log("Estou efetuando o pagamento no Cheque");
}