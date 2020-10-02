// 02
//     Criar uma função que irá receber duas notas digitadas pelo usuario e irá imprimir a mensagem
// informando qual a maior nota digita entre as duas.

const readLineSync = require('readline-sync');
let notaUm = 0, notaDois = 0;

function imprimirMaiorNotaDigitada(notaUmParametro, notaDoisParametro) {
    if (notaUmParametro > notaDoisParametro) {
        console.log(`Nota 1 '${notaUmParametro}' é maior que Nota 2 '${notaDoisParametro}'`);
    } else {
        console.log(`Nota 2 '${notaDoisParametro}' é maior que Nota 1 '${notaUmParametro}'`);
    }

}

function pegarValorDigitadoPeloUsuario(descricaoParaUsuario) {
    return readLineSync.question(descricaoParaUsuario);
}

function validarValorDigitadoPeloUsuario(valorParametro) {
    let valorInvalido = true;

    while (valorInvalido) {
        if (isNaN(valorParametro)) {
            valorParametro = pegarValorDigitadoPeloUsuario('Por favor, Digite um valor valido :-) ');
        } else {
            valorInvalido = false;
        }
    }

    return parseFloat(valorParametro);
}

notaUm = pegarValorDigitadoPeloUsuario('Digite a primeira nota: ');
notaUm = validarValorDigitadoPeloUsuario(notaUm);

notaDois = pegarValorDigitadoPeloUsuario('Digite a segunda nota: ');
notaDois = validarValorDigitadoPeloUsuario(notaDois);

imprimirMaiorNotaDigitada(notaUm, notaDois);