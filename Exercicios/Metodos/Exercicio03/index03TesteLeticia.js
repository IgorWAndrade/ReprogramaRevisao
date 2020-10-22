const readline = require('readline-sync');
let numero;


function numeroDigitadoPeloUsuario() {
    return readline.question("Digite um numero maior que 0: ");
}


function ordemCrescenteValidada() {
    let condicaoDeParada = true;


    do {
        if (numero >= 1) {
            for (let i = numero; i >= 0; i--) {
                console.log(i);
            }

            condicaoDeParada = false;
        } else {
            numero = numeroDigitadoPeloUsuario();
        }

    } while (condicaoDeParada == true);
}

ordemCrescenteValidada();