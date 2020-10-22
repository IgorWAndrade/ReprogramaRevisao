// 03
//     03.02
//         Criar uma função que irá receber um número digitado pelo usuario e irá imprimir em ordem decrescente
//     o número até 0. (OBS: Validar se número digitado é maior que 0 e impedir proseguir enquanto não for valor correto)

// 01 - Propriedades
const readLineSync = require('readline-sync');
let numero = 0;


// 02 - Funcoes

function retornarNumeroDigitadoPeloUsuario() {
    return readLineSync.question('Digite um numero maior que 0: ');
}

function validarNumeroDigitadoPeloUsuarioERetornarConvertido(numeroParametro) {


    let valorInvalido = true;

    do {

        if (isNaN(numeroParametro)) {
            numeroParametro = retornarNumeroDigitadoPeloUsuario();
        } else {
            numeroParametro = parseInt(numeroParametro);
        }

        if (numeroParametro > 0) {
            valorInvalido = false;
        } else {
            numeroParametro = retornarNumeroDigitadoPeloUsuario();
        }

    } while (valorInvalido == true);

    return numeroParametro;
}

function imprimirEmOrdemDecrescente(numeroParametro) {

    for (let i = numeroParametro; i >= 0; i--) {
        console.log(i);
    }

}

// 03 - Resolução

numero = retornarNumeroDigitadoPeloUsuario();
numero = validarNumeroDigitadoPeloUsuarioERetornarConvertido(numero);
imprimirEmOrdemDecrescente(numero);