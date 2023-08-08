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

const operate = function (operator, x, y) {

};


let firstNumber = '';
let operator = '';
let secondNumber = '';
const display = document.getElementById('display');


const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        display.textContent += number.id;
    });
});