const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
}; 

const multiply = function (x, y) {
    return x * y;
};

const divide = function (x, y) {
    return x / y;
};

const operate = function (o, x, y) {
    x = Number(x), y = Number(y);
    if (o === '+') {
        return add(x, y);
    } else if (o === '-') {
        return subtract(x, y);
    } else if (o === '*') {
        return multiply(x, y);
    } else if (o ===  '/') {
        return divide(x, y);
    }
};


let firstNumber = '';
let operator = '';
let secondNumber = '';
const display = document.getElementById('display');


const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (operator === '') {
            firstNumber += number.id;
        } else {
            secondNumber += number.id;
        }
    });
});

const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        operator = operation.id;
    });
}); 

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    let result = operate(operator, firstNumber, secondNumber);
    console.log(result);
    firstNumber = result;
    secondNumber = '';
});