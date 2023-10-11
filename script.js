const add = function (a, b) {
    return Number(a) + Number(b);
}

const subtract = function (a, b) {
    return Number(a) - Number(b);
}

const multiply = function (a, b) {
    return Number(a) * Number(b);
}

const divide = function (a, b) {
    if(b == 0)
        return "Error";
    return Number(a) / Number(b);
}

const ifFloatReturnTwoDecimals = function (n) {
    if(Number(n) === n && n % 1 !== 0)
        n = (Math.round(result * 100) / 100).toFixed(2);
    return n;
}

const display = document.querySelector('.display');
display.textContent = '';
const buttons = document.querySelectorAll('.buttons');
const operationButtons = document.querySelectorAll('.operationButtons');

var firstNumber = '';
var secondNumber = '';
var operator = '';
var result = 0;

const operate = function (a, b, op, newOperator) {
    if(op === '+')
        result = add(a, b);
    if(op === '-')
        result = subtract(a, b);
    if(op === '*')
        result = multiply(a, b);
    if(op === '/')
        result = divide(a, b);

    result = ifFloatReturnTwoDecimals(result);

    display.textContent = result;
    firstNumber = result;
    operator = newOperator;
    secondNumber = '';
}

function displayContent(e) {
    let number = e.target.textContent;

    if(number === '+' || number === '-' || number === '*' || number === '/')
        if(operator === '')
            operator = number;
        else
            operate(firstNumber, secondNumber, operator, number);
    else if(operator === '')
        firstNumber += number;
    else
        secondNumber += number;

    display.textContent = firstNumber + operator + secondNumber;
}

function clearContent () {
    display.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

buttons.forEach((button) => {
    button.addEventListener('click', displayContent);
});

operationButtons.forEach((button) => {
    button.addEventListener('click', displayContent);
});

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', clearContent);

const equalsButton = document.querySelector('#equalsButton');
equalsButton.addEventListener('click', () => {
    operate(firstNumber, secondNumber, operator, '');
});