// Primeiro exemplo
const alunos = [
    {
        nome: 'João',
        nota: '5',
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: '9',
        turma: '2B',
    },
    {
        nome: 'Paulo',
        nota: '6',
        turma: '1B',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];
        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}
console.log(alunosAprovados(alunos, 6));

// Segundo exemplo
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
};

const animal1 = {
    nome: 'Fione',
    idade: 5,
    raça: 'Pug',
};

console.log(calculaIdade.call(animal1, 30));
console.log(calculaIdade.apply(animal1, [30]));
