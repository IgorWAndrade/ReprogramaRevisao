// 01
//     Criar uma função que irá receber um nome digitado pelo usuario e irá imprimir a mensagem
// 'Seja Bem-Vindo "nomeDaPessoa".

// 1 - ETAPA
// Declarar todas as propriedades que "imaginamos" serem necessarias para solução do exercicio
let nome = '';
const readLineSync = require('readline-sync');
let mensagemBoasVindas = 'Boas Vindas ';

// 2 - ETAPA
// Focamos na criação do metodo para resolução do exercicio
function imprimirMensagemBoasVindas(nomeParametro) {
    console.log(mensagemBoasVindas + nomeParametro);
}

function retornarInformacaoDigitadaPeloUsuario() {
    return readLineSync.question('Digite seu nome: ');
}

// 3 - ETAPA
// Focamos na resolução do problema

nome = retornarInformacaoDigitadaPeloUsuario();
imprimirMensagemBoasVindas(nome);


