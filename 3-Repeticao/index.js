// O que são estruturas de repetições?
var readlineSync = require('readline-sync');

let decisaoVerdadeiraIgualUm = 1;
let email = '';
let senha = '';

while (decisaoVerdadeiraIgualUm == 1) {
    email = readlineSync.questionEMail("Digite seu email:");
    senha = readlineSync.questionNewPassword('Digite sua senha: ', { charlist: '$<a-z>', min: 3, max: 6 });

    if (readlineSync.question('Para encerrar digite "0"?') == 0) {
        decisaoVerdadeiraIgualUm = 0;
    }
}