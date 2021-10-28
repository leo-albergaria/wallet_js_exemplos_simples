function soma(x, y, z) {
    return x + y + z;
}
const number = [1, 2, 3];
console.log(soma(...number));


console.log("");
function confereTamanho(...args) {
    console.log(args.length);
}
confereTamanho();
confereTamanho(1, 2);
confereTamanho(1, 2, 3);

console.log("");
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}


function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(user));
console.log(getFullName(user));

