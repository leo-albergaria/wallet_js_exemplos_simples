function calculaSaldo(SaldoDisponivel, itens) {
    if (!SaldoDisponivel || !itens || !itens.length)
        return 'Envie todos os parâmetros';

    const saldoFinal = itens.reduce(
        (acc, item) => acc - item.preco,
        SaldoDisponivel
    );

    return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
    {
        preco: 2,
        nome: 'maçã',
    },
    {
        preco: 30,
        nome: 'roupa',
    },
    {
        preco: 25,
        nome: 'carne',
    },
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));


let array = [1, 2, 3, 4];

array.map((item) => item * 9);

console.log(array);