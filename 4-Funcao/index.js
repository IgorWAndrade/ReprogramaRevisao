const readlineSync = require('readline-sync');


class Camisa {
    constructor(tipo) {
        this.tipoFechamento = tipo;
        this.quantidade = 0;
    }
}


//Dividir em resposabilidades as funcoes

//O que são funções?

//São blocos de instrucoes para executar pequenas responsabilidades

// Sintaxe de Funcao

function capturarInformacaoDigitadaPeloUsuario() {
    const retornoDaDigitacaoDoUsuario = readlineSync.question('Digite sua idade: ');
    return retornoDaDigitacaoDoUsuario;
}

function capturarInformacaoDigitadaPeloUsuarioComPerguntaPorParametro(perguntaDinamica) {
    return readlineSync.question(perguntaDinamica);
}

function obtemCamisaComFechamantoPorParametro(fechamento) {
    let camisa = new Camisa();
    camisa.tipoFechamento = fechamento.toUpperCase();

    return camisa;
}

function obtemNumeroDeCamisasParaFabricar(camisa) {
    let quantidade = 0;

    do {
        quantidade = capturarInformacaoDigitadaPeloUsuarioComPerguntaPorParametro('Digite uma quantidade: ');
    }
    while (quantidade <= 0)

    camisa.quantidade = quantidade;

    console.log(camisa);
}

// function fnInputUser() {

// }

// const idade = capturarInformacaoDigitadaPeloUsuarioComPerguntaPorParametro('Digite uma idade: ');
// const nome = capturarInformacaoDigitadaPeloUsuarioComPerguntaPorParametro('Digite um nome: ');
// const altura = capturarInformacaoDigitadaPeloUsuarioComPerguntaPorParametro('Digite uma altura: ');
// const largura = capturarInformacaoDigitadaPeloUsuarioComPerguntaPorParametro('Digite sua largura: ');

const camisaComBotao = obtemCamisaComFechamantoPorParametro('botão');
const camisaComZiper = obtemCamisaComFechamantoPorParametro('ZiPer');
const camisaComCapuz = obtemCamisaComFechamantoPorParametro('CaPuz');

let camisaPorPortao = new Camisa();
camisaPorPortao.tipoFechamento = 'Botão'.toUpperCase();

let camisaPorZiper = new Camisa();
camisaPorZiper.tipoFechamento = 'Ziper'.toUpperCase();


// console.log(idade);
// console.log(nome);
// console.log(altura);
// console.log(largura);
console.log(camisaComBotao);
console.log(camisaComZiper);
console.log(camisaComCapuz);
// console.log(camisaPorPortao);
// console.log(camisaPorZiper);


obtemNumeroDeCamisasParaFabricar(camisaComBotao);
obtemNumeroDeCamisasParaFabricar(camisaComZiper);
obtemNumeroDeCamisasParaFabricar(camisaComCapuz);



