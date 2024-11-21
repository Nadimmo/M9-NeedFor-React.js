let num = 90.4;
let convertToInt = parseInt(num)
console.log(convertToInt)

let num2 = 90.8;
let convertToFloat = parseFloat(num2)
console.log(convertToFloat)

function isInteger(num) {
    return typeof num === 'number' && num % 1 === 0;
}

function isFloat(num) {
    return typeof num === 'number' && num % 1 !== 0;
}

console.log(isInteger(5)); // true
console.log(isFloat(5));   // false