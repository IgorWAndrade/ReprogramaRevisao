/*
2 -
Crie uma classe do tipo Curso que possua as seguintes propriedades Nome e Duração.
    Crie um método para pedir ao usuario para digitar um curso com nome e duração.
    Crie um método para validar se existe este curso digitado pelo usuario disponivel "Caso tenha informar que existe e duração"
*/
const readLine = require('readline-sync');


class Curso {
    static Cursos = [];

    constructor(nome, duracao) {
        this.Nome = nome;
        this.Duracao = duracao;
    }


    static CriarCurso = (nome, duracao) => {
        return new Curso(nome, duracao);
    }

    static BuscarCurso = (nome) => {
        let existeCurso = false;

        for (let i = 0; i < Curso.Cursos.length; i++) {
            if (Curso.Cursos[i].Nome == nome) {
                existeCurso = true;
            }
        }

        return existeCurso;
    }
}

do {

    do {
        let nome = readLine.question('Digite um nome de um curso: ');
        let duracao = readLine.questionInt('Digite a duracao de um curso: ');

        Curso.Cursos.push(Curso.CriarCurso(nome, duracao));

    } while (readLine.questionInt('Para continuar a criação de cursos digite "0"\n') == 0);

    do {
        let nome = readLine.question('Digite um nome de um curso para buscar: ');

        let existe = Curso.BuscarCurso(nome);

        if (existe == true) {
            console.log(`O Curso ${nome} informado existe em nossa base de dados.`);
        } else {
            console.log(`O Curso ${nome} informado não existe em nossa base de dados.`);
        }

    } while (readLine.questionInt('Para continuar a busca de cursos digite "0"\n') == 0);


} while (readLine.questionInt('Para encerrar digita "0"\n') == 0)


