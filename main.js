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

// basic math operators function
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

// gets the result of the operation and changes the value of firstNumber to result
const equal = () => {
    let result = operate(operator, firstNumber, secondNumber);
    display.textContent = result;
    firstNumber = result;
    secondNumber = '';
};

// reverts the value of all variables
const clear = () => {
    display.textContent = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
}

let firstNumber = '';
let operator = '';
let secondNumber = '';

const display = document.getElementById('display');

// changes the value of display according to the clicked button
// and stores it to the corresponding number variable
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

// concatenate the selected operation to the value of display
// and equates it to the operator variable
const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        if (secondNumber !== '') {
            equal();
            display.textContent += operation.id;
        } else {
            operator = operation.id;
            display.textContent = firstNumber + operation.id;
        }
    });
}); 