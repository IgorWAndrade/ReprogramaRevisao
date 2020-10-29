/*
2 - 
Crie uma classe do tipo Curso que possua as seguintes propriedades Nome e Duração.
    Crie um método para pedir ao usuario para digitar um curso com nome e duração.
    Crie um método para validar se existe este curso digitado pelo usuario disponivel "Caso tenha informar que existe e duração"
*/
const readLine = require('readline-sync');

class Curso {
    static Cursos = [];
    Nome = '';
    Duracao = 0;

    //CRUD
    // C = Create
    // R = Read
    // U = Update
    // D = Delete

    constructor(nome, duracao) {
        this.Nome = nome;
        this.Duracao = duracao;
    }

    static Criar = () => {
        let nome = readLine.question("Digite o nome do Curso: ");
        let duracao = readLine.questionInt("Digite a duracao do Curso: ");

        return new Curso(nome, duracao);
    }

    static Atualizar = (nome) => {

    }

    static RemoverPorNome = (nome) => {
        let curso = Curso.BuscarPorNome(nome);

        if (curso != null) {
            console.log(curso);

            Curso.Cursos.splice(Curso.Cursos.indexOf(curso), 1);
        }
    }

    static Listar = () => {
        console.log("\nLista de Cursos Cadastrados\n");
        for (let i = 0; i < Curso.Cursos.length; i++) {
            console.log(`Curso: ${Curso.Cursos[i].Nome} -- Duracao: ${Curso.Cursos[i].Duracao}`);
        }
        console.log("\nEncerrando o Projeto\n");
    }

    static BuscarPorNome = (nome) => {
        let curso = null;

        for (let i = 0; i < Curso.Cursos.length; i++) {
            if (Curso.Cursos[i].Nome == nome) {
                curso = Curso.Cursos[i];
            }
        }

        return curso;
    }
}


let encerrarExecucao = false;
do {

    let opcao = OpcoesParaExecucao();
    if (opcao == 1) {
        Curso.Listar();

    } else if (opcao == 2) {
        let curso = Curso.Criar();
        Curso.Cursos.push(curso);


    } else if (opcao == 3) {
        //EXERCICIO PARA FAZER

        Curso.Atualizar();


    } else if (opcao == 4) {

        let nome = readLine.question("Digite o nome do curso para remover: ");
        Curso.RemoverPorNome(nome);
    } else if (opcao == 5) {

        let nome = readLine.question("Digite o nome do curso para procurar na Lista: ");
        let curso = Curso.BuscarPorNome(nome);

        if (curso == null) {
            console.log(`O Curso ${nome} não existe`);
        } else {
            console.log(curso);
        }
    } else {

        encerrarExecucao = true;
    }


} while (encerrarExecucao == false)

function OpcoesParaExecucao() {
    return readLine.questionInt(
        `
        Para Listar Todos os Cursos digite = "1"
        Para Criar um novo Curso digite = "2"
        Para Atualizar um Curso digite = "3"
        Para Remover um Curso digite = "4"
        Para Procurar um Curso na Lista digite = "5"
        Para Encerrar digite = "0"\n
        `);
}