// exercicio
function filtraPares(arr) {
    if (!arr || !arr.length) return;
    const filteredArr = arr.filter((item) => item % 2 === 0);
    return filteredArr;
}
console.log(filtraPares([1, 2, 3, 4]));
console.log('\n');

// exercicio
const arr = [1, 2, 3, 4];
const filteredArr = arr.filter((item) => item % 2 === 0);
console.log(filteredArr);
console.log('\n');

// exercicio
function filtraParesF(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(filtraParesF(myArr));

// exercicio
function filtraImparesF(arr) {
    return arr.filter(callbackI);
}

function callbackI(item) {
    return item % 2 !== 0;
}

const myArrI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(filtraImparesF(myArrI));
