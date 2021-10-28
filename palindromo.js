// solução 01
function validaPalindromo_01(string) {
    if (!string) return 'não é uma string';

    return string.split('').reverse().join('') === string;
}

// solução 02
function validaPalindromo_02(string) {
    if (!string) return 'não é uma string';

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) return false;
    }
    return true;
}

console.log(validaPalindromo_02('amor'));
