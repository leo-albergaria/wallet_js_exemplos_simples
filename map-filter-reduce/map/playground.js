const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item + ' fala sério ' + this.value;
    }, thisArg);
}

function mapComThis1(arr, thisArg) {
    return arr.map((item) => item + ' fala sério ' + thisArg.value);
}

const nums = [1, 2];

console.log('this -> maçã ', mapComThis(nums, maca));
console.log('this -> laranja ', mapComThis(nums, laranja));
console.log("\n");
console.log('this -> maçã ', mapComThis1(nums, maca));
console.log('this -> laranja ', mapComThis1(nums, laranja));