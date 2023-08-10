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
    if (y === 0) {
        divisionByZero = true;
        return 'Math ERROR';
    }
    return x / y;
};

// basic math operatorions function
const operate = function (o, x, y) {
    let result;
    x = Number(x), y = Number(y);
    if (o === '+') {
        result = add(x, y);
    } else if (o === '-') {
        result = subtract(x, y);
    } else if (o === '×') {
        result =  multiply(x, y);
    } else if (o ===  '÷') {
        result = divide(x, y);
    }
    // return result;
    return divisionByZero ? result + ' [AC] :Cancel': +result.toFixed(2);
};

// gets the result of the operation and changes the value of firstNumber to result
const equal = () => {
    if (!divisionByZero) {
        let result = operate(operator, firstNumber, secondNumber);
        if (result !== undefined) {
            display.textContent = result;
            firstNumber = result;
            secondNumber = '';
            operator = '';
        }
    }
};

// reverts the value of all variables
const allClear = function () {
    divisionByZero = false;
    display.textContent = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
};

const ac = document.getElementById('ac');
ac.addEventListener('click', allClear);

const del = document.getElementById('del');
del.addEventListener('click', () => {
    if (!divisionByZero) {
        if (display.textContent.length === 1) {
            allClear();
        }
        firstNumber = String(firstNumber);
        if (firstNumber === display.textContent) {
            firstNumber = firstNumber.slice(0, firstNumber.length - 1);
            display.textContent = firstNumber;
        } else {
            secondNumber = secondNumber.slice(0, secondNumber.length - 1);
            display.textContent = display.textContent.slice(0, display.textContent.length - 1);
        }
    }
});

let firstNumber = '';
let operator = '';
let secondNumber = '';
let divisionByZero = false;

const display = document.getElementById('display');

// changes the value of display according to the clicked button
// and stores it to the corresponding number variable
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (!divisionByZero) {
            if (operator === '') {
                if (!(number.textContent === '.' && firstNumber.includes('.'))) {
                    display.textContent += number.textContent;
                    firstNumber += number.textContent;
                }
            } else {
                if (!(number.textContent === '.' && secondNumber.includes('.'))) {
                    display.textContent += number.textContent;
                    secondNumber += number.textContent;
                }
            }
        }
    });
});

// concatenate the selected operation to the value of display
// and equates it to the operator variable
const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => {
    operation.addEventListener('click', () => {
        if (!divisionByZero) {
            if (firstNumber !== '') {
                if (secondNumber !== '') {
                    equal();
                    operator = operation.textContent;
                    display.textContent += operation.textContent;
                } else {
                    operator = operation.textContent;
                    display.textContent = firstNumber + operation.textContent;
                }
            }
        }
    });
}); 
