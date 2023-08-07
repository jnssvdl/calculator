const operate = function (firstNumber, operation, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let result;
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
    }
    return result;
};

const getResult = () => {
    let result = operate(firstNumber, operation, secondNumber);
    display.textContent = result;
    firstNumber = String(result);
    operation = '';
    secondNumber = '';
};


const display = document.getElementById('display');


let displayValue = '';
let firstNumber = '';
let operation = '';
let secondNumber = '';


const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (operation === '') {
            firstNumber += number.id;
        } else {
            secondNumber += number.id;
            getResult();
        }
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        operation = operator.id;
    });
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', getResult);