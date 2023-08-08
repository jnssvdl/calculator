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

const equal = () => {
    let result = operate(operator, firstNumber, secondNumber);
    display.textContent = result;
    firstNumber = result;
    secondNumber = '';
};

const clear = () => {
    display.textContent = '';

}

let firstNumber = '';
let operator = '';
let secondNumber = '';

const display = document.getElementById('display');

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (operator === '') {
            display.textContent += number.id;
            firstNumber += number.id;
        } else {
            display.textContent += number.id;
            secondNumber += number.id;
        }
    });
});

const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        if (secondNumber !== '') {
            equal();
        } else {
            operator = operation.id;
            display.textContent = firstNumber + operation.id;
        }
    });
}); 