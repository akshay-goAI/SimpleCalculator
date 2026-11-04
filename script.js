let display = document.getElementById('display');
let currentInput = '';
let operation = null;
let firstOperand = null;

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operation) {
        firstOperand = calculate(firstOperand, parseFloat(currentInput), operation);
    }
    operation = op;
    currentInput = '';
}

function calculateResult() {
    if (currentInput === '' || firstOperand === null || operation === null) return;
    const result = calculate(firstOperand, parseFloat(currentInput), operation);
    display.value = result;
    currentInput = '';
    firstOperand = null;
    operation = null;
}

function calculate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operation = null;
    display.value = '';
}