// 02
//     Criar uma função que irá receber duas notas digitadas pelo usuario e irá imprimir a mensagem
// informando qual a maior nota digita entre as duas.

// 1 - ETAPA

const readLineSync = require('readline-sync');
let notaUm = 0;
let notaDois = 0;

// 2 - ETAPA

function imprimirMaiorNotaDigitada(notaUmParametro, notaDoisParametro) {
    if (notaUmParametro > notaDoisParametro) {
        console.log(`Nota 1 '${notaUmParametro}' é maior que Nota 2 '${notaDoisParametro}'`);
    } else {
        console.log(`Nota 2 '${notaDoisParametro}' é maior que Nota 1 '${notaUmParametro}'`);
    }
}

function pegarValorDigitadoPeloUsuario(descricaoParaUsuario) {
    let valor = readLineSync.question(descricaoParaUsuario);
    return parseFloat(valor);
}

// 3 - ETAPA

notaUm = pegarValorDigitadoPeloUsuario('Digite a primeira nota: ');
notaDois = pegarValorDigitadoPeloUsuario('Digite a segunda nota: ');
imprimirMaiorNotaDigitada(notaUm, notaDois);