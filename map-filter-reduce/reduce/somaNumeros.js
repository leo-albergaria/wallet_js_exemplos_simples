// exercicio
function somaNumeros(arr) {
    if (!arr || !arr.length) return;
    const soma = arr.reduce((prev, curr) => prev + curr, 3);

    return soma;
}
console.log(somaNumeros([1, 1, 1, 3]));

// exercicio
function somarNum(arr) {
    return arr.reduce(function (ini, atual) {
        console.log({ ini });
        console.log({ atual });
        return ini + atual;
    }, 0);
}

const arr = [1, 7];
console.log(somarNum(arr));
