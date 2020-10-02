// 03
//     03.01
//         Criar uma função que irá receber um número digitado pelo usuario e irá imprimir em ordem crescente
//     o número até 100. (OBS: Validar se número digitado é menor que 100 e impedir proseguir enquanto não for valor correto)

// 01 - Propriedades
const readLineSync = require('readline-sync');
let numero = 0;


// 02 - Funcoes

function retornarNumeroDigitadoPeloUsuario() {
    return readLineSync.question('Digite um numero menor que 100: ');
}

function validarNumeroDigitadoPeloUsuarioERetornarConvertido(numeroParametro) {

    let valorInvalido = true;

    do {

        if (isNaN(numeroParametro)) {
            numeroParametro = retornarNumeroDigitadoPeloUsuario();
        } else {
            numeroParametro = parseInt(numeroParametro);
        }

        if (numeroParametro < 100) {
            valorInvalido = false;
        } else {
            numeroParametro = retornarNumeroDigitadoPeloUsuario();
        }

    } while (valorInvalido == true);

    return numeroParametro;
}

function imprimirEmOrdemCrescente(numeroParametro) {

    for (let i = 0; i <= numeroParametro; i++) {
        console.log(i);
    }

}

// 03 - Resolução

numero = retornarNumeroDigitadoPeloUsuario();
numero = validarNumeroDigitadoPeloUsuarioERetornarConvertido(numero);
imprimirEmOrdemCrescente(numero);